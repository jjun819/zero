import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { createServerFn } from "@tanstack/react-start";

import { applicationSchema, type ApplicationFormValues } from "@/lib/application-schema";

type ServerEnv = Record<string, string | undefined>;

const getProcessEnv = (): ServerEnv => {
  const maybeProcess = globalThis as typeof globalThis & {
    process?: { env?: ServerEnv };
  };

  return maybeProcess.process?.env ?? {};
};

const requiredEnv = (env: ServerEnv, key: string) => {
  const value = env[key]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const createSesClient = (env: ServerEnv) => {
  const accessKeyId = env.AWS_ACCESS_KEY_ID?.trim();
  const secretAccessKey = env.AWS_SECRET_ACCESS_KEY?.trim();

  console.log("SES setup:", {
    hasKey: Boolean(accessKeyId),
    keyLength: accessKeyId?.length ?? 0,
    hasSecret: Boolean(secretAccessKey),
    secretLength: secretAccessKey?.length ?? 0,
    region: env.AWS_REGION,
  });

  return new SESClient({
    region: requiredEnv(env, "AWS_REGION"),
    credentials:
      accessKeyId && secretAccessKey
        ? {
            accessKeyId,
            secretAccessKey,
          }
        : undefined,
  });
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const fields: Array<[label: string, key: keyof ApplicationFormValues]> = [
  ["Organization", "organization"],
  ["First name", "firstName"],
  ["Last name", "lastName"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Charging station location", "chargingStationLocation"],
  ["Estimated traffic", "estimatedTraffic"],
  ["Expected charging hours per day", "expectedChargingHours"],
  ["Additional message", "message"],
];

const formatTextEmail = (data: ApplicationFormValues) =>
  [
    "New Zero Cost EV Charger Program application",
    "",
    ...fields.flatMap(([label, key]) => [label, data[key] || "Not provided", ""]),
    "Consent",
    data.consent ? "Yes" : "No",
  ].join("\n");

const formatHtmlEmail = (data: ApplicationFormValues) => `
  <h1>New Zero Cost EV Charger Program application</h1>
  <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
    <tbody>
      ${fields
        .map(
          ([label, key]) => `
            <tr>
              <th align="left" style="border: 1px solid #ddd; background: #f6f8f7;">${escapeHtml(label)}</th>
              <td style="border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(
                String(data[key] || "Not provided"),
              )}</td>
            </tr>
          `,
        )
        .join("")}
      <tr>
        <th align="left" style="border: 1px solid #ddd; background: #f6f8f7;">Consent</th>
        <td style="border: 1px solid #ddd;">${data.consent ? "Yes" : "No"}</td>
      </tr>
    </tbody>
  </table>
`;

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator(applicationSchema)
  .handler(async ({ data }) => {
    const env = getProcessEnv();
    const fromEmail = requiredEnv(env, "SES_FROM_EMAIL");
    const toEmail = requiredEnv(env, "APPLICATION_TO_EMAIL");
    const ses = createSesClient(env);
    console.log(fromEmail);
    await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: {
          ToAddresses: [toEmail],
        },
        ReplyToAddresses: [data.email],
        Message: {
          Subject: {
            Charset: "UTF-8",
            Data: `New EV charger application from ${data.firstName} ${data.lastName}`,
          },
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: formatTextEmail(data),
            },
            Html: {
              Charset: "UTF-8",
              Data: formatHtmlEmail(data),
            },
          },
        },
      }),
    );

    return { ok: true };
  });
