import { z } from 'zod';

const i18BusinessRegisterForm = {
    errors: {
        requiredField: 'Required field',
        organizationName: 'Please enter the organization name',
        category: 'Please enter the organization name',
        address: 'Please enter the organization name',
        representative: 'Please enter the organization name',
        phoneNumber: 'Phone number should contain only digits',
        description: 'Please enter the organization name',
        workingHours: 'Please enter the organization name',
        website: 'Please enter the organization name',
        login: 'Please enter the organization name',
        password: 'Please enter the organization name',
        confirmPassword: 'Please enter the organization name',
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
            .regex(/^\d+$/, i18BusinessRegisterForm.errors.phoneNumber),
        description: z.string().optional(),
        workingHours: z.string().optional(),
        website: z.string().url(i18BusinessRegisterForm.errors.website).optional(),
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
