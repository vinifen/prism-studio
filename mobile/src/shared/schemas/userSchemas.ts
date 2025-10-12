import { z } from 'zod';
import { getFieldSchemas } from './userFieldSchemas';

export function getRegisterUserSchema() {
  const {
    emailSchema,
    nameSchema,
    passwordSchema,
  } = getFieldSchemas();

  return z
    .object({
      name: nameSchema,
      email: emailSchema,
      password: passwordSchema,
      passwordConfirm: z.string(),
    })
    .refine(data => data.password === data.passwordConfirm, {
      message: 'Passwords do not match',
      path: ['passwordConfirm'],
    });
}

export function getLoginSchema() {
  const { emailSchema, passwordSchema } = getFieldSchemas();

  return z.object({
    email: emailSchema,
    password: passwordSchema,
  });
}