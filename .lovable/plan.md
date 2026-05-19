## Plan

Finish wiring the "Submit Application" form to send to `david.park@foreseeson.com` via Lovable Emails on the verified `notify.buildwithfif.com` domain.

### Steps

1. **Set up email infrastructure** — provision pgmq queues, RPC wrappers, tables (email_send_log, suppressed_emails, email_unsubscribe_tokens), cron job, and vault secret.

2. **Scaffold transactional email** — generate send/preview/unsubscribe/suppression server routes and template registry.

3. **Create application email template** — `src/lib/email-templates/application-submission.tsx` formatted with all form fields (name, email, phone, property type, address, parking spots, message, etc.), branded with UbiqPower colors. Register in `registry.ts`.

4. **Create public submission route** — `src/routes/api/public/submit-application.ts`:
   - Zod-validate input
   - Hard-code recipient `david.park@foreseeson.com`
   - Enqueue via the transactional send pipeline using the service role (no user JWT required since the form is public)
   - Return JSON success/error

5. **Wire `Application.tsx`** — replace the `setTimeout` stub in `onSubmit` with a `fetch('/api/public/submit-application', ...)` POST, keep existing toast + reset behavior, surface errors via toast.

6. **Create `/unsubscribe` page** — required by transactional email infra (branded confirmation page that calls the unsubscribe route).

### Out of scope
Form field copy/layout, hero, navbar, other sections.
