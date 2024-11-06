'use client';
import styles from '../styles.module.css';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegExpressions } from '@/src/constants/regex';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';

export type SignInType = {
    email: string;
    password: string;
};

const emptySignInFields: SignInType = {
    email: '',
    password: '',
};

export default function SignInForm() {
    const validationScheme = z.object({
        email: z
            .string()
            .min(1, { message: 'Email обязателен' })
            .regex(RegExpressions.emailWithSpaces, { message: 'Email введен некорректно' }),
        password: z.string().min(1, { message: 'Пароль обязателен' }),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInType>({
        resolver: zodResolver(validationScheme),
        defaultValues: emptySignInFields,
    });

    const onSubmit: SubmitHandler<SignInType> = (data: SignInType) => {
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
