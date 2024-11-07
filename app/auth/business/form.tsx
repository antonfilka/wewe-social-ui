'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BusinessRegisterForm, BusinessRegisterSchema } from './schema';
import FormInput from '@/src/components/common/FormInput';
import { Button } from '@/src/components/common/Button';
import { useMutation } from '@tanstack/react-query';
import { sendBusinessSignUpForm } from '@/src/api/auth';
import { message } from 'antd';
import { Dispatch, SetStateAction, useEffect } from 'react';
import useFormPersist from '@/src/hooks/useFormPersist';
import { FormSelect } from '@/src/components/common/FormSelect';

const defaultValues: BusinessRegisterForm = {
    organizationName: '',
    category: '',
    address: '',
    representative: '',
    phoneNumber: '',
    description: '',
    workingHours: '',
    website: '',
    login: '',
    password: '',
    confirmPassword: '',
};

const CATEGORY_OPTIONS = [
    { value: '1', label: 'Кафе' },
    { value: '2', label: 'Бар' },
    { value: '3', label: 'Ресторан' },
    { value: '4', label: 'Клуб' },
    { value: '5', label: 'Пекарня' },
    { value: '6', label: 'Бистро' },
    { value: '7', label: 'Активный отдых' },
    { value: '8', label: 'Фуд-корт' },
    { value: '9', label: 'Гастробар' },
    { value: '10', label: 'Закусочная' },
    { value: '11', label: 'Винный бар' },
    { value: '12', label: 'Пиццерия' },
    { value: '13', label: 'Бильярдная' },
    { value: '14', label: 'Паб' },
    { value: '15', label: 'Лаундж' },
    { value: '16', label: 'Картинг' },
    { value: '17', label: 'Пейнтбол' },
    { value: '18', label: 'Квест-комната' },
    { value: '19', label: 'Боулинг' },
    { value: '20', label: 'Музей' },
    { value: '21', label: 'Кинотеатр' },
    { value: '22', label: 'Театр' },
    { value: '23', label: 'Караоке' },
];

export const Form = ({
    currentStep,
    setStepsWithErrors,
    handlePrevStep,
    handleNextStep,
}: {
    currentStep: number;
    setStepsWithErrors: Dispatch<SetStateAction<number[]>>;
    handlePrevStep: () => void;
    handleNextStep: () => void;
}) => {
    const [messageApi, contextHolder] = message.useMessage();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm<BusinessRegisterForm>({
        mode: 'onChange',
        resolver: zodResolver(BusinessRegisterSchema),
        defaultValues,
    });
    useFormPersist('form-name', { watch, setValue });

    const { mutate } = useMutation({
        mutationFn: (data: BusinessRegisterForm) => sendBusinessSignUpForm(data),
        onError: () => {
            messageApi.open({
                type: 'error',
                content: 'Ошибка отправки заявки',
            });
        },
        onSuccess: () => {
            reset(defaultValues);
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

    useEffect(() => {
        const tempStepsWithErrors: number[] = [];
        if (Object.keys(errors).length) {
            if (errors.organizationName || errors.category) tempStepsWithErrors.push(0);
            if (errors.address || errors.representative || errors.phoneNumber)
                tempStepsWithErrors.push(1);
            if (errors.description || errors.workingHours || errors.website)
                tempStepsWithErrors.push(2);
            if (errors.login || errors.password || errors.confirmPassword)
                tempStepsWithErrors.push(3);
        }

        setStepsWithErrors(tempStepsWithErrors);
    }, [errors, JSON.stringify(errors)]);

    const stepZeroFields = (
        <>
            <FormInput
                name="organizationName"
                control={control}
                label="Название организации"
                placeholder="McDonalds"
                error={errors.organizationName}
            />
            <FormSelect
                showSearch
                placeholder="Cafe"
                optionFilterProp="label"
                notFoundContent="Такой категории нет"
                name="category"
                control={control}
                label="Категория"
                error={errors.category}
                options={CATEGORY_OPTIONS}
            />
        </>
    );
    const stepOneFields = (
        <>
            <FormInput
                name="address"
                control={control}
                label="Адрес/Адреса"
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
                label="Номер телефона для бронирования/связи"
                placeholder="375291234567"
                error={errors.phoneNumber}
            />
        </>
    );
    const stepTwoFields = (
        <>
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
        </>
    );
    const stepThreeFields = (
        <>
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
        </>
    );

    return (
        <>
            {contextHolder}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex min-h-[315px] w-full flex-col items-start">
                    {currentStep === 0 && stepZeroFields}
                    {currentStep === 1 && stepOneFields}
                    {currentStep === 2 && stepTwoFields}
                    {currentStep === 3 && stepThreeFields}
                </div>
                <div className="mt-[40px] flex w-full items-center justify-between">
                    {currentStep > 0 ? (
                        <Button onClick={handlePrevStep}>Назад</Button>
                    ) : (
                        <div></div>
                    )}
                    {currentStep < 3 && (
                        <Button onClick={handleNextStep} type="primary">
                            Далее
                        </Button>
                    )}
                    {currentStep === 3 && (
                        <Button htmlType="submit" type="primary" className="w-[160px]">
                            ОТПРАВИТЬ
                        </Button>
                    )}
                </div>
            </form>
        </>
    );
};
