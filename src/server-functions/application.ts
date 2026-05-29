import { AwsClient } from "aws4fetch";
import { createServerFn } from "@tanstack/react-start";

import { applicationSchema, type ApplicationFormValues } from "@/lib/application-schema";

type ServerEnv = Record<string, string | undefined>;

const getProcessEnv = (): ServerEnv => {
  const maybeProcess = globalThis as typeof globalThis & {
    process?: { env?: ServerEnv };
  };

  return maybeProcess.process?.env ?? {};
};

const getWorkerEnv = (): ServerEnv => {
  const maybeGlobal = globalThis as typeof globalThis & {
    __CF_WORKER_ENV__?: ServerEnv;
  };

  return maybeGlobal.__CF_WORKER_ENV__ ?? {};
};

const getServerEnv = (): ServerEnv => ({
  ...getWorkerEnv(),
  ...getProcessEnv(),
});

const requiredEnv = (env: ServerEnv, key: string) => {
  const raw = env[key];
  const value = typeof raw === "string" ? raw.trim() : "";

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const sendSesEmail = async (env: ServerEnv, data: ApplicationFormValues) => {
  const region = requiredEnv(env, "AWS_REGION");
  const fromEmail = requiredEnv(env, "SES_FROM_EMAIL");
  const toEmail = requiredEnv(env, "APPLICATION_TO_EMAIL");

  const aws = new AwsClient({
    accessKeyId: requiredEnv(env, "AWS_ACCESS_KEY_ID"),
    secretAccessKey: requiredEnv(env, "AWS_SECRET_ACCESS_KEY"),
    sessionToken: env.AWS_SESSION_TOKEN?.trim() || undefined,
    service: "ses",
    region,
  });

  console.log("SES setup:", {
    hasKey: Boolean(env.AWS_ACCESS_KEY_ID?.trim()),
    keyLength: env.AWS_ACCESS_KEY_ID?.trim().length ?? 0,
    hasSecret: Boolean(env.AWS_SECRET_ACCESS_KEY?.trim()),
    secretLength: env.AWS_SECRET_ACCESS_KEY?.trim().length ?? 0,
    region,
    hasFromEmail: Boolean(fromEmail),
    hasToEmail: Boolean(toEmail),
  });

  const response = await aws.fetch(
    `https://email.${region}.amazonaws.com/v2/email/outbound-emails`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        FromEmailAddress: fromEmail,
        Destination: {
          ToAddresses: [toEmail],
        },
        ReplyToAddresses: [data.email],
        Content: {
          Simple: {
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
        },
      }),
    },
  );

  const body = await response.text();

  if (!response.ok) {
    console.error("SES SendEmail failed:", {
      status: response.status,
      body,
    });

    throw new Error(`SES SendEmail failed: ${response.status} ${body}`);
  }

  console.log("SES SendEmail succeeded:", body);
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
  const env = getServerEnv();

  await sendSesEmail(env, data);

  return { ok: true };
});
