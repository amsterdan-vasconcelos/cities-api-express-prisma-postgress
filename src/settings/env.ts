import z from 'zod';

export const envSchema = z.object({
  PORT: z.number({ coerce: true }).optional(),
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production']),
  JWT_SECRET: z.string(),
});

type EnvSchema = z.infer<typeof envSchema>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvSchema {}
  }
}

const parseEnv = envSchema.parse(process.env);

process.env = Object.create({ ...process.env, ...parseEnv });
