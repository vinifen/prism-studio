import { z } from 'zod';
import { getLoginSchema, getRegisterUserSchema } from 'shared/schemas/userSchemas';
export type LoginType = z.infer<ReturnType<typeof getLoginSchema>>;

enum UserRole {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export type RegisterUserType = z.infer<ReturnType<typeof getRegisterUserSchema>>

export type UserRecordType = {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  cart_id: number;
  adresses_ids: number[]
};



