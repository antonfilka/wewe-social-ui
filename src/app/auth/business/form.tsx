'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BusinessRegisterForm, BusinessRegisterSchema } from './schema';
import { Dispatch, SetStateAction, useEffect } from 'react';
import useFormPersist from '@/hooks/useFormPersist';
import {
    Form as FormProvider,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
    const form = useForm<BusinessRegisterForm>({
        mode: 'onChange',
        resolver: zodResolver(BusinessRegisterSchema),
        defaultValues,
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = form;

    useFormPersist('form-name', { watch, setValue });

    const onSubmit = (data: BusinessRegisterForm) => {
        console.log('Form Data:', data);
        toast('Form submitted', {
            description: 'Your form has been submitted successfully.',
        });
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
    }, [errors, setStepsWithErrors]);

    const stepZeroFields = (
        <>
            <FormField
                control={control}
                name="organizationName"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Название организации</FormLabel>
                        <FormControl>
                            <Input placeholder="McDonalds" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="category"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Категория</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Выберите категорию" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {CATEGORY_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );

    const stepOneFields = (
        <>
            <FormField
                control={control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Адрес/Адреса</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="representative"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>ФИО представителя и должность</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Номер телефона для брони/связи</FormLabel>
                        <FormControl>
                            <Input type="tel" placeholder="375291234567" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );

    const stepTwoFields = (
        <>
            <FormField
                control={control}
                name="description"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Описание организации</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="workingHours"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Рабочие часы</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="website"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Ссылка на ваш сайт</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );

    const stepThreeFields = (
        <>
            <FormField
                control={control}
                name="login"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Логин для входа</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="password"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Пароль</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Подтверждение пароля</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex w-full flex-col items-start mobile:min-h-[260px] tablet:min-h-[315px]">
                    {currentStep === 0 && stepZeroFields}
                    {currentStep === 1 && stepOneFields}
                    {currentStep === 2 && stepTwoFields}
                    {currentStep === 3 && stepThreeFields}
                </div>
                <div className="mt-[40px] flex w-full items-center justify-between mobile:mt-[20px]">
                    {currentStep > 0 ? (
                        <Button onClick={handlePrevStep}>Назад</Button>
                    ) : (
                        <div></div>
                    )}
                    {currentStep < 3 && <Button onClick={handleNextStep}>Далее</Button>}
                    {currentStep === 3 && (
                        <Button type="submit" className="w-[160px]">
                            ОТПРАВИТЬ
                        </Button>
                    )}
                </div>
            </form>
        </FormProvider>
    );
};
