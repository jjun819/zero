import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'UbiqPower'
const SENDER_DOMAIN = 'notify.buildwithfif.com'
const FROM_DOMAIN = 'notify.buildwithfif.com'
const TEMPLATE_NAME = 'application-submission'

const submissionSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  address: z.string().trim().min(3).max(200),
  audience: z.enum(['residents', 'customers_employees', 'public']),
  propertyType: z.enum([
    'strata_corporations',
    'multi_unit_residence',
    'commercial_building',
  ]),
  message: z.string().trim().max(1000).optional(),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export const Route = createFileRoute('/api/public/submit-application')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = submissionSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: 'Invalid input', details: parsed.error.flatten() },
            { status: 400 },
          )
        }

        const data = parsed.data
        const template = TEMPLATES[TEMPLATE_NAME]
        const recipient = template.to!
        const normalizedRecipient = recipient.toLowerCase()

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const templateData = {
          ...data,
          submittedAt: new Date().toISOString(),
        }

        const messageId = crypto.randomUUID()
        const idempotencyKey = `application-${messageId}`

        // Ensure unsubscribe token exists (one per email)
        let unsubscribeToken: string
        const { data: existingToken } = await supabase
          .from('email_unsubscribe_tokens')
          .select('token, used_at')
          .eq('email', normalizedRecipient)
          .maybeSingle()

        if (existingToken && !existingToken.used_at) {
          unsubscribeToken = existingToken.token
        } else {
          unsubscribeToken = generateToken()
          await supabase
            .from('email_unsubscribe_tokens')
            .upsert(
              { token: unsubscribeToken, email: normalizedRecipient },
              { onConflict: 'email', ignoreDuplicates: true },
            )
          const { data: stored } = await supabase
            .from('email_unsubscribe_tokens')
            .select('token')
            .eq('email', normalizedRecipient)
            .maybeSingle()
          if (stored) unsubscribeToken = stored.token
        }

        // Render email
        const element = React.createElement(template.component, templateData)
        const html = await render(element)
        const plainText = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(templateData)
            : template.subject

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: TEMPLATE_NAME,
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text: plainText,
            purpose: 'transactional',
            label: TEMPLATE_NAME,
            idempotency_key: idempotencyKey,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('Failed to enqueue application email', enqueueError)
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: TEMPLATE_NAME,
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue email',
          })
          return Response.json({ error: 'Failed to submit application' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
