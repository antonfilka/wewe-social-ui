'use client';
import styles from '@/app/auth/styles.module.css';
import { AuthHeader } from '@/src/components/auth/AuthHeader';
import * as yup from 'yup';
import { RegExpressions } from '@/src/constants/regex';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

export default function SignUpPage() {
    const validationScheme = yup.object({
        email: yup
            .string()
            .required('Это поле является обязательным')
            .matches(RegExpressions.emailWithSpaces, 'Email введен некорректно'),
        password: yup.string().required('Это поле является обязательным'),
        passwordConfirmation: yup.string().required('Это поле является обязательным'),
    });

    const { register, handleSubmit } = useForm<SignUpType>({
        resolver: yupResolver(validationScheme),
        defaultValues: emptySignUpFields,
    });

    const onSubmit: SubmitHandler<SignUpType> = (data: SignUpType) => {
        console.log('data: ', data);
    };

    return (
        <div className={styles.pageWrapper}>
            <AuthHeader />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
                <input {...register('email')} placeholder="E-mail" />
                <input {...register('password')} placeholder="Пароль" />
                <input {...register('passwordConfirmation')} placeholder="Подтверждение пароля" />
                <a className={styles.forgetPassword}>Забыли пароль?</a>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}
