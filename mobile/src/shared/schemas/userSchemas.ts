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

export function getUpdateUserSchema() {
  const { emailSchema, nameSchema, passwordSchema } = getFieldSchemas();

  return z
    .object({
      name: nameSchema.optional().or(z.literal('')),
      email: emailSchema.optional().or(z.literal('')),
      new_password: passwordSchema.optional().or(z.literal('')),
      new_password_confirmation: z.string().optional().or(z.literal('')),
      current_password: z.string().optional().or(z.literal('')),
    })
    .refine(
      (data) => {
        // Se está mudando a senha, precisa de confirmação
        if (data.new_password && !data.new_password_confirmation) {
          return false;
        }
        return true;
      },
      {
        message: 'Password confirmation is required when changing password',
        path: ['new_password_confirmation'],
      }
    )
    .refine(
      (data) => {
        // Se está mudando a senha, as senhas devem coincidir
        if (data.new_password && data.new_password !== data.new_password_confirmation) {
          return false;
        }
        return true;
      },
      {
        message: 'Passwords do not match',
        path: ['new_password_confirmation'],
      }
    )
    .refine(
      (data) => {
        // Só exige senha atual se estiver mudando senha
        // Mudar apenas o nome ou email não precisa de senha atual no schema
        // A validação completa será feita no componente que tem acesso ao valor original
        const isChangingPassword = data.new_password !== undefined && data.new_password !== '';
        
        if (isChangingPassword && (!data.current_password || data.current_password === '')) {
          return false;
        }
        return true;
      },
      {
        message: 'Current password is required when changing password',
        path: ['current_password'],
      }
    );
}

export function getDeleteUserSchema() {
  return z.object({
    password: z.string().min(8, 'Password is required'),
  });
}