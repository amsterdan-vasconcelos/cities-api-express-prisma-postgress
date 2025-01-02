import { z } from 'zod';

export const bodySchema = z.object({
  fullName: z
    .string({ message: 'Por favor, informe o nome completo da pessoa.' })
    .refine((s) => s.length >= 2 && s.length <= 200, {
      message:
        'O nome completo da pessoa deve conter entre 2 e 200 caracteres.',
    }),
  email: z
    .string({ message: 'Por favor, informe o email da pessoa.' })
    .email({ message: 'Por favor, informe um email válido.' })
    .max(100, { message: 'O email deve conter no máximo 100 caracteres.' }),
  cityId: z.number({ message: 'Por favor, informe o id da cidade.' }),
});

export type BodyProps = z.infer<typeof bodySchema>;
