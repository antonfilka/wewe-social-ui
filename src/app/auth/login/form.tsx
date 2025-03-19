'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';
import { LoginForm, LoginFormSchema } from './schema';
import { Link } from '@/src/components/common/Link';

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
            <Link href="" linkClassName="mt-[3px] self-end">
                Забыли пароль?
            </Link>
            <Button htmlType="submit" type="primary" shape="round" className="mt-[30px] w-[200px]">
                ОТПРАВИТЬ
            </Button>
        </form>
    );
}
