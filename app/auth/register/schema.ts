import { RegExpressions } from '@/src/constants/regex';
import { z } from 'zod';

export const RegisterSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: 'Email обязателен' })
            .regex(RegExpressions.emailWithSpaces, { message: 'Некорректный формат email' }),
        password: z.string().min(1, { message: 'Пароль обязателен' }),
        passwordConfirm: z.string().min(1, { message: 'Подтверждение пароля обязательно' }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: 'Пароли не совпадают',
        path: ['passwordConfirm'],
    });

export type RegisterForm = z.infer<typeof RegisterSchema>;
