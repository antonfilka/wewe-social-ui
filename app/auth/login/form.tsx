'use client';
import styles from '../styles.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';
import { LoginForm, LoginFormSchema } from './schema';
import Link from 'next/link';

const defaultValues: LoginForm = {
    email: '',
    password: '',
};

export default function SignInForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues,
    });

    const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
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
