'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';
import { RegisterForm, RegisterSchema } from './schema';
import { Link } from '@/src/components/common/Link';

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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[60%] max-w-[350px] flex-col items-center"
        >
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
            <Link href="" linkClassName="mt-[3px] self-end">
                Забыли пароль?
            </Link>
            <Button htmlType="submit" type="primary" shape="round" className="mt-[30px] w-[200px]">
                ОТПРАВИТЬ
            </Button>
        </form>
    );
}
