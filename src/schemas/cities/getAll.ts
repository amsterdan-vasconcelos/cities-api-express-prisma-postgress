import { z } from 'zod';

export const querySchema = z.object({
  page: z
    .string()
    .regex(/^\d+$/, {
      message: 'A page deve conter apenas caracteres numéricos',
    })
    .optional(),
  limit: z
    .string()
    .regex(/^\d+$/, {
      message: 'O limit deve conter apenas caracteres numéricos',
    })
    .optional(),
  id: z
    .string()
    .regex(/^\d+$/, {
      message: 'O id deve conter apenas caracteres numéricos',
    })
    .optional(),
  search: z.string().optional(),
});

export type QueryProps = z.infer<typeof querySchema>;
