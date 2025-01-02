import { z } from 'zod';

export const bodySchema = z.object({
  email: z
    .string({ message: 'Por favor, informe seu email.' })
    .email({ message: 'Por favor, informe um email válido.' })
    .max(100, { message: 'O email deve conter no máximo 100 caracteres.' }),
  password: z
    .string({ message: 'Por favor, informe sua senha.' })
    .min(8, { message: 'A senha deve conter no mínimo 8 caracteres.' }),
});

export type BodyProps = z.infer<typeof bodySchema>;
