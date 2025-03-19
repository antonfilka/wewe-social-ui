import { RegExpressions } from '@/src/constants/regex';
import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email обязателен' })
        .regex(RegExpressions.emailWithSpaces, { message: 'Email введен некорректно' }),
    password: z.string().min(1, { message: 'Пароль обязателен' }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
