import { z } from 'zod';

export function getFieldSchemas() {
  return {
    emailSchema: z
      .string()
      .email('Invalid email format')
      .max(100, 'Email must be at most 100 characters'),

    passwordSchema: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(71, 'Password must be at most 71 characters'),

    nameSchema: z
      .string()
      .min(1, 'Name is required')
      .max(255, 'Name must be at most 255 characters'),

    passwordConfirmSchema: z
      .object({
        password: z
          .string()
          .min(8, 'Password must be at least 8 characters'),
        passwordConfirm: z
          .string()
          .min(8, 'Password must be at least 8 characters'),
      })
      .refine(data => data.password === data.passwordConfirm, {
        message: 'Passwords do not match',
        path: ['passwordConfirm'],
      }),

    idSchema: z.string().optional(),
  };
}