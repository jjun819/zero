import { z } from "zod";

export const applicationSchema = z.object({
  organization: z.string().trim().max(160, "Organization must be 160 characters or less"),
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  chargingStationLocation: z.string().trim().max(200, "Location must be 200 characters or less"),
  estimatedTraffic: z.string().trim().max(120, "Estimated traffic must be 120 characters or less"),
  expectedChargingHours: z
    .string()
    .trim()
    .max(120, "Expected charging hours must be 120 characters or less"),
  message: z.string().trim().max(1000, "Message must be 1,000 characters or less"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required to submit the application" }),
  }),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
