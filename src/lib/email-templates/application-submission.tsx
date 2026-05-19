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

const audienceLabels: Record<string, string> = {
  residents: 'Only for Residents',
  customers_employees: 'Customers / Employees',
  public: 'Open to Public',
}

const propertyTypeLabels: Record<string, string> = {
  strata_corporations: 'Strata Corporations',
  multi_unit_residence: 'Multi-Unit Residence',
  commercial_building: 'Commercial Building',
}

interface ApplicationSubmissionProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
  audience?: string
  propertyType?: string
  message?: string
  submittedAt?: string
}

const ApplicationSubmissionEmail = ({
  firstName,
  lastName,
  email,
  phone,
  address,
  audience,
  propertyType,
  message,
  submittedAt,
}: ApplicationSubmissionProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'New applicant'
  const applicantMessage = message?.trim()
  const propertyTypeLabel = propertyType
    ? propertyTypeLabels[propertyType] ?? propertyType
    : 'â€”'
  const audienceLabel = audience ? audienceLabels[audience] ?? audience : '—'

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New Zero Cost EV Charger application from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Application Received</Heading>
          <Text style={text}>
            A new applicant has submitted the Zero Cost EV Charger Program form on{' '}
            {SITE_NAME}.
          </Text>

          <Section style={card}>
            <Heading as="h2" style={h2}>
              Contact Information
            </Heading>
            <Row label="Name" value={fullName} />
            <Row label="Email" value={email ?? '—'} />
            <Row label="Phone" value={phone ?? '—'} />
          </Section>

          <Section style={card}>
            <Heading as="h2" style={h2}>
              Parking Lot Information
            </Heading>
            <Row label="Address" value={address ?? '—'} />
            <Row label="Available to" value={audienceLabel} />
            <Row label="Type of property" value={propertyTypeLabel} />
          </Section>

          {applicantMessage && (
            <Section style={card}>
              <Heading as="h2" style={h2}>
                Additional Message
              </Heading>
              <Text style={messageText}>{applicantMessage}</Text>
            </Section>
          )}

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
  component: ApplicationSubmissionEmail,
  subject: (data: Record<string, any>) => {
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ')
    return name
      ? `New EV Charger Application — ${name}`
      : 'New EV Charger Application'
  },
  displayName: 'Application submission',
  to: 'david.park@foreseeson.com',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '(604) 555-0199',
    address: '123 Main St, Vancouver, BC',
    audience: 'customers_employees',
    propertyType: 'commercial_building',
    message: 'We have 24 visitor parking stalls and would like to discuss a phased installation.',
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
