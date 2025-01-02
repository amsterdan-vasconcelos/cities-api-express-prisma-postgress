import { z } from 'zod';

export const querySchema = z.object({
  page: z
    .string()
    .regex(/^\d+$/, {
      message: 'A page deve conter apenas caracteres numéricos',
    })
    .optional(),
  per_page: z
    .string()
    .regex(/^\d+$/, {
      message: 'O per_page deve conter apenas caracteres numéricos',
    })
    .optional(),
  search: z.string().optional(),
});

export type QueryProps = z.infer<typeof querySchema>;
