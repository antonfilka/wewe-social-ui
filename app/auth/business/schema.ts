import { RegExpressions } from '@/src/constants/regex';
import { z } from 'zod';

const i18BusinessRegisterForm = {
    errors: {
        requiredField: 'Обязательное поле',
        organizationName: 'Введите название организации',
        category: 'Выберите категорию',
        address: 'Введите адрес',
        representative: 'Введите данные представителя',
        phoneNumber: 'Неверный формат',
        login: 'Введите логин',
        password: 'Введите пароль',
        confirmPassword: 'Подтвердите пароль',
        passwordsNotMatching: 'Пароли не совпадают',
    },
};

const i18BusinessRegisterFormEn = {
    errors: {
        requiredField: 'Required field',
        organizationName: 'Please enter the organization name',
        category: 'Please choose category',
        address: 'Please enter address',
        representative: 'Please enter representative data',
        phoneNumber: 'Phone number should be valid',
        login: 'Please enter login',
        password: 'Please enter the password',
        confirmPassword: 'Confirm password',
        passwordsNotMatching: 'Passwords do not match',
    },
};

export const BusinessRegisterSchema = z
    .object({
        organizationName: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(1, i18BusinessRegisterForm.errors.organizationName),
        category: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(1, i18BusinessRegisterForm.errors.category),
        address: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(1, i18BusinessRegisterForm.errors.address),
        representative: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(1, i18BusinessRegisterForm.errors.representative),
        phoneNumber: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .regex(RegExpressions.phoneWithSpaces, i18BusinessRegisterForm.errors.phoneNumber),
        description: z.string().optional(),
        workingHours: z.string().optional(),
        website: z.string().optional(),
        login: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(1, i18BusinessRegisterForm.errors.login),
        password: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(6, i18BusinessRegisterForm.errors.password),
        confirmPassword: z
            .string({ required_error: i18BusinessRegisterForm.errors.requiredField })
            .min(6, i18BusinessRegisterForm.errors.confirmPassword),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: i18BusinessRegisterForm.errors.passwordsNotMatching,
        path: ['confirmPassword'],
    });

export type BusinessRegisterForm = z.infer<typeof BusinessRegisterSchema>;
