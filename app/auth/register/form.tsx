'use client';
import styles from '@/app/auth/styles.module.css';
import { z } from 'zod';
import { RegExpressions } from '@/src/constants/regex';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';

export type SignUpType = {
    email: string;
    password: string;
    passwordConfirmation: string;
};

const emptySignUpFields: SignUpType = {
    email: '',
    password: '',
    passwordConfirmation: '',
};

export default function SignUpForm() {
    const validationScheme = z
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

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignUpType>({
        resolver: zodResolver(validationScheme),
        defaultValues: emptySignUpFields,
    });

    const onSubmit: SubmitHandler<SignUpType> = (data: SignUpType) => {
        console.log('data: ', data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
                <FormInput name="email" control={control} label="E-mail" error={errors.email} />
                <FormInput
                    name="password"
                    control={control}
                    label="Пароль"
                    error={errors.password}
                    isPassword
                />
                <FormInput
                    name="passwordConfirmation"
                    control={control}
                    label="Подтверждение пароля"
                    error={errors.passwordConfirmation}
                    isPassword
                />
                <a className={styles.forgetPassword}>Забыли пароль?</a>
                <div className="flex w-full items-center justify-center">
                    <Button
                        htmlType="submit"
                        type="primary"
                        shape="round"
                        className="mt-[15px] w-[200px]"
                    >
                        ОТПРАВИТЬ
                    </Button>
                </div>
            </form>
        </>
    );
}
