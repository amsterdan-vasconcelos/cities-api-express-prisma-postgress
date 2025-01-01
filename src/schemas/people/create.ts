import { z } from 'zod';

export const bodySchema = z.object({
  fullName: z.string().min(3).max(200),
  email: z.string().email(),
  cityId: z.number(),
});

export type BodyProps = z.infer<typeof bodySchema>;
