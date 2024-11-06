'use client';
import styles from '../styles.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';
import Link from 'next/link';
import { RegisterForm, RegisterSchema } from './schema';

const defaultValues: RegisterForm = {
    email: '',
    password: '',
    passwordConfirm: '',
};

export default function SignUpForm() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: zodResolver(RegisterSchema),
        defaultValues,
    });

    const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
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
                    error={errors.passwordConfirm}
                    isPassword
                />
                {/* The same here - using Link from "next/link" */}
                <Link href="" className={styles.forgetPassword}>
                    Забыли пароль?
                </Link>
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
