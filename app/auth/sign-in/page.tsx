'use client';
import styles from '../styles.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthHeader } from '@/src/components/auth/AuthHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegExpressions } from '@/src/constants/regex';

export type SignInType = {
    email: string;
    password: string;
};

const emptySignInFields: SignInType = {
    email: '',
    password: '',
};

export default function SignInPage() {
    const validationScheme = yup.object({
        email: yup
            .string()
            .required('Это поле является обязательным')
            .matches(RegExpressions.emailWithSpaces, 'Email введен некорректно'),
        password: yup.string().required('Это поле является обязательным'),
    });

    const { register, handleSubmit } = useForm<SignInType>({
        resolver: yupResolver(validationScheme),
        defaultValues: emptySignInFields,
    });

    const onSubmit: SubmitHandler<SignInType> = (data: SignInType) => {
        console.log('data: ', data);
    };

    return (
        <div className={styles.pageWrapper}>
            <AuthHeader />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
                <input {...register('email')} placeholder="Email" />
                <input {...register('password')} placeholder="Password" />
                <a className={styles.forgetPassword}>Забыли пароль?</a>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}
