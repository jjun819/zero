import { createFileRoute } from '@tanstack/react-router'
// in a route, e.g. src/routes/api/debug.ts
export const Route = createFileRoute('/debug')({
  loader: () => {
    const env = process.env;
    return {
      hasAwsKey: Boolean(env.AWS_ACCESS_KEY_ID),
      awsKeyPrefix: env.AWS_ACCESS_KEY_ID?.slice(0, 4) ?? null,
      awsKeyLength: env.AWS_ACCESS_KEY_ID?.length ?? 0,
      hasAwsSecret: Boolean(env.AWS_SECRET_ACCESS_KEY),
      awsSecretLength: env.AWS_SECRET_ACCESS_KEY?.length ?? 0,
      region: env.AWS_REGION ?? null,
      allKeys: Object.keys(env).filter(k => k.startsWith('AWS')),
    };
  },
});