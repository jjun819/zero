import type { ComponentType } from 'react'
import { template as applicationSubmission } from './application-submission'
import { template as contactSubmission } from './contact-submission'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'application-submission': applicationSubmission,
  'contact-submission': contactSubmission,
}
