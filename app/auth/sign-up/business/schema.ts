import { z } from 'zod';

export const formSchema = z
    .object({
        organizationName: z.string().min(1, 'Please enter the organization name'),
        category: z.string().min(1, 'Please enter a category'),
        address: z.string().min(1, 'Please enter the address'),
        representative: z.string().min(1, 'Please enter the representative name and position'),
        phoneNumber: z.string().regex(/^\d+$/, 'Phone number should contain only digits'),
        description: z.string().optional(),
        workingHours: z.string().optional(),
        website: z.string().url('Please enter a valid URL').optional(),
        login: z.string().min(1, 'Please enter a login'),
        password: z.string().min(6, 'Password must be at least 6 characters long'),
        confirmPassword: z.string().min(6, 'Please confirm your password'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export type SignUpBusinessForm = z.infer<typeof formSchema>;
