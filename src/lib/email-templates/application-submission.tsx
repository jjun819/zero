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
const EMPTY_VALUE = '-'

const audienceLabels: Record<string, string> = {
  residents: 'Only for Residents',
  customers_employees: 'Customers / Employees',
  public: 'Open to Public',
}

interface ApplicationSubmissionProps {
  organization?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  chargingStationLocation?: string
  estimatedTraffic?: string
  expectedChargingHours?: string
  audience?: string
  message?: string
  submittedAt?: string
}

const ApplicationSubmissionEmail = ({
  organization,
  firstName,
  lastName,
  email,
  phone,
  chargingStationLocation,
  estimatedTraffic,
  expectedChargingHours,
  audience,
  message,
  submittedAt,
}: ApplicationSubmissionProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'New applicant'
  const applicantMessage = message?.trim()
  const audienceLabel = audience ? audienceLabels[audience] ?? audience : EMPTY_VALUE

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
            <Row label="Company name" value={organization?.trim() || EMPTY_VALUE} />
            <Row label="Name" value={fullName} />
            <Row label="Email" value={email ?? EMPTY_VALUE} />
            <Row label="Phone" value={phone ?? EMPTY_VALUE} />
          </Section>

          <Section style={card}>
            <Heading as="h2" style={h2}>
              Parking Lot Information
            </Heading>
            <Row
              label="Location of EV charging station"
              value={chargingStationLocation?.trim() || EMPTY_VALUE}
            />
            <Row
              label="Estimated number of traffic"
              value={estimatedTraffic?.trim() || EMPTY_VALUE}
            />
            <Row
              label="Expected charging hours per day"
              value={expectedChargingHours?.trim() || EMPTY_VALUE}
            />
            <Row label="Available to" value={audienceLabel} />
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
    return name ? `New EV Charger Application - ${name}` : 'New EV Charger Application'
  },
  displayName: 'Application submission',
  to: 'Zerocostapplication@foreseeson.com',
  previewData: {
    organization: 'Foreseeson Technology',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '(604) 555-0199',
    chargingStationLocation: 'Near visitor parking on P1',
    estimatedTraffic: '50 vehicles per day',
    expectedChargingHours: '6-8 hours per day',
    audience: 'customers_employees',
    message: 'We have 24 visitor parking stalls and would like to discuss a phased installation.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#12141A', margin: '0 0 16px' }
const h2 = {
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#2D865B',
  margin: '0 0 12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
}
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 20px' }
const card = {
  backgroundColor: '#F5F8F6',
  borderRadius: '10px',
  padding: '18px 20px',
  margin: '0 0 16px',
}
const rowText = { fontSize: '14px', color: '#12141A', lineHeight: '1.6', margin: '4px 0' }
const rowLabel = { color: '#55575d', fontWeight: 600 as const, marginRight: '6px' }
const messageText = {
  fontSize: '14px',
  color: '#12141A',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '0' }
