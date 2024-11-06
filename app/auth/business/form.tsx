'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BusinessRegisterForm, BusinessRegisterSchema } from './schema';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';
import { useMutation } from '@tanstack/react-query';
import { sendBusinessSignUpForm } from '@/src/api/auth';
import { message } from 'antd';

export const Form = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BusinessRegisterForm>({
        resolver: zodResolver(BusinessRegisterSchema),
    });

    const { mutate } = useMutation({
        mutationFn: (data: BusinessRegisterForm) => sendBusinessSignUpForm(data),
        onError: () => {
            messageApi.open({
                type: 'error',
                content: 'Ошибка отправки заявки',
            });
        },
        onSuccess: () => {
            reset();
            messageApi.open({
                type: 'success',
                content: 'Заявка отправлена. Мы скоро свяжемся с вами :)',
            });
        },
    });

    const onSubmit = (data: BusinessRegisterForm) => {
        console.log('Form Data:', data);
        mutate(data);
    };

    return (
        <>
            {contextHolder}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
                <FormInput
                    name="organizationName"
                    control={control}
                    label="Название организации"
                    error={errors.organizationName}
                />
                <FormInput
                    name="category"
                    control={control}
                    label="Категория"
                    error={errors.category}
                />
                <FormInput
                    name="address"
                    control={control}
                    label="Адрес/ Адреса"
                    error={errors.address}
                />
                <FormInput
                    name="representative"
                    control={control}
                    label="ФИО представителя и должность"
                    error={errors.representative}
                />
                <FormInput
                    name="phoneNumber"
                    control={control}
                    label="Номер телефона для бронирования"
                    error={errors.phoneNumber}
                />
                <FormInput
                    name="description"
                    control={control}
                    label="Описание организации"
                    error={errors.description}
                />
                <FormInput
                    name="workingHours"
                    control={control}
                    label="Рабочие часы"
                    error={errors.workingHours}
                />
                <FormInput
                    name="website"
                    control={control}
                    label="Ссылка на ваш сайт"
                    error={errors.website}
                />
                <FormInput
                    name="login"
                    control={control}
                    label="Логин для входа"
                    error={errors.login}
                />
                <FormInput
                    name="password"
                    control={control}
                    label="Пароль"
                    error={errors.password}
                    isPassword
                />
                <FormInput
                    name="confirmPassword"
                    control={control}
                    label="Подтверждение пароля"
                    error={errors.confirmPassword}
                    isPassword
                />
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
};
