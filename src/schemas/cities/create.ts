import { z } from 'zod';

export const bodySchema = z.object({
  name: z.string().min(3).max(50),
});

export type BodyProps = z.infer<typeof bodySchema>;
