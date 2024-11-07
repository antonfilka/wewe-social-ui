'use client';

import { Steps } from 'antd';
import { Form } from './form';
import Typography from '@/src/components/common/Typography';
import { useState } from 'react';
import useDeviceSize from '@/src/hooks/useDeviceSize';

export default function SignUpBusinessPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepsWithErrors, setStepsWithErrors] = useState<number[]>([]);
    const [width] = useDeviceSize();

    const handlePrevStep = () => {
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };
    const handleNextStep = () => {
        if (currentStep < 3) setCurrentStep((prev) => prev + 1);
    };
    const onChange = (value: number) => {
        setCurrentStep(value);
    };

    return (
        <div className="h-[100dvh] w-[100%] overflow-hidden overflow-y-auto bg-[#EBEBEB] py-[10px] mobile:py-[20px]">
            <div className="mx-auto flex h-full w-[80%] max-w-[650px] flex-col items-center justify-center">
                <Typography
                    variant="title"
                    level={5}
                    className="text-center font-[600] mobile:mt-[10px]"
                >
                    ЗАПОЛНИТЕ КОНТАКТНЫЕ ДАННЫЕ И МЫ С ВАМИ СВЯЖЕМСЯ
                </Typography>
                <div className="w-full mobile:mb-[10px] mobile:mt-[20px] tablet:mb-[50px] tablet:mt-[50px]">
                    <Steps
                        size="small"
                        current={currentStep}
                        onChange={onChange}
                        direction={width > 600 ? 'horizontal' : 'vertical'}
                        items={[
                            {
                                title: 'Категория',
                                status: stepsWithErrors.includes(0) ? 'error' : undefined,
                            },
                            {
                                title: 'Контакты',
                                status: stepsWithErrors.includes(1) ? 'error' : undefined,
                            },
                            {
                                title: 'Организация',
                                status: stepsWithErrors.includes(2) ? 'error' : undefined,
                            },
                            {
                                title: 'Логин и пароль',
                                status: stepsWithErrors.includes(3) ? 'error' : undefined,
                            },
                        ]}
                    />
                </div>
                <Form
                    currentStep={currentStep}
                    setStepsWithErrors={setStepsWithErrors}
                    handleNextStep={handleNextStep}
                    handlePrevStep={handlePrevStep}
                />
            </div>
        </div>
    );
}
