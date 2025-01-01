import { z } from 'zod';

export const paramsSchema = z.object({
  id: z.string().regex(/^\d+$/, {
    message: 'O id deve conter apenas caracteres numéricos',
  }),
});

export type ParamsProps = z.infer<typeof paramsSchema>;
