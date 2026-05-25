import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'UbiqPower'

interface ContactSubmissionProps {
  name?: string
  email?: string
  phone?: string
  message?: string
  submittedAt?: string
}

const ContactSubmissionEmail = ({
  name,
  email,
  phone,
  message,
  submittedAt,
}: ContactSubmissionProps) => {
  const contactName = name?.trim() || 'New contact'

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New contact message from {contactName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Message</Heading>
          <Text style={text}>
            A new visitor has submitted the contact form on {SITE_NAME}.
          </Text>

          <Section style={card}>
            <Heading as="h2" style={h2}>
              Contact Information
            </Heading>
            <Row label="Name" value={contactName} />
            <Row label="Email" value={email ?? '-'} />
            <Row label="Phone" value={phone?.trim() || '-'} />
          </Section>

          <Section style={card}>
            <Heading as="h2" style={h2}>
              Message
            </Heading>
            <Text style={messageText}>{message?.trim() || '-'}</Text>
          </Section>

          {submittedAt && (
            <>
              <Hr style={hr} />
              <Text style={footer}>Submitted at {submittedAt}</Text>
            </>
          )}
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowText}>
    <span style={rowLabel}>{label}:</span> {value}
  </Text>
)

export const template = {
  component: ContactSubmissionEmail,
  subject: (data: Record<string, any>) =>
    data.name ? `New Contact Message - ${data.name}` : 'New Contact Message',
  displayName: 'Contact submission',
  to: 'david.park@foreseeson.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '(604) 555-0199',
    message: 'I would like to learn more about the Zero Cost program.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#12141A', margin: '0 0 16px' }
const h2 = { fontSize: '15px', fontWeight: 'bold', color: '#2D865B', margin: '0 0 12px', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 20px' }
const card = { backgroundColor: '#F5F8F6', borderRadius: '10px', padding: '18px 20px', margin: '0 0 16px' }
const rowText = { fontSize: '14px', color: '#12141A', lineHeight: '1.6', margin: '4px 0' }
const rowLabel = { color: '#55575d', fontWeight: 600 as const, marginRight: '6px' }
const messageText = { fontSize: '14px', color: '#12141A', lineHeight: '1.6', margin: '0', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '0' }
