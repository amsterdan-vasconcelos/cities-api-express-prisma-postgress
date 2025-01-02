import { z } from 'zod';

export const paramsSchema = z.object({
  id: z
    .string({ message: 'Por favor, informe o id da pessoa.' })
    .regex(/^\d+$/, {
      message: 'O id deve conter apenas caracteres numéricos',
    }),
});

export type ParamsProps = z.infer<typeof paramsSchema>;

export const bodySchema = z.object({
  fullName: z
    .string()
    .refine((s) => s.length >= 2 && s.length <= 200, {
      message:
        'O nome completo da pessoa deve conter entre 2 e 200 caracteres.',
    })
    .optional(),
  email: z
    .string()
    .email({ message: 'Por favor, informe um email válido.' })
    .optional(),
});

export type BodyProps = z.infer<typeof bodySchema>;
