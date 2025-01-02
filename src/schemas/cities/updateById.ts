import { z } from 'zod';

export const paramsSchema = z.object({
  id: z
    .string({ message: 'Por favor, informe o id da cidade.' })
    .regex(/^\d+$/, {
      message: 'O id deve conter apenas caracteres numéricos',
    }),
});

export type ParamsProps = z.infer<typeof paramsSchema>;

export const bodySchema = z.object({
  name: z
    .string({ message: 'Por favor, informe o nome da cidade.' })
    .refine((s) => s.length >= 2 && s.length <= 50, {
      message: 'O nome da cidade deve conter entre 2 e 50 caracteres.',
    }),
});

export type BodyProps = z.infer<typeof bodySchema>;
