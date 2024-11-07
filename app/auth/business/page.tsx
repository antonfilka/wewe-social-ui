'use client';

import { Flex, Steps } from 'antd';
import { Form } from './form';
import Typography from '@/src/components/common/Typography';
import { useState } from 'react';

export default function SignUpBusinessPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepsWithErrors, setStepsWithErrors] = useState<number[]>([]);

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
        <Flex className="mx-auto flex min-h-screen w-[80%] max-w-[650px] flex-col items-center justify-center overflow-y-auto bg-[#EBEBEB] py-[20px]">
            <Typography variant="title" level={5} className="text-center font-[600]">
                ЗАПОЛНИТЕ КОНТАКТНЫЕ ДАННЫЕ И МЫ С ВАМИ СВЯЖЕМСЯ
            </Typography>
            <div className="mb-[50px] mt-[50px] w-full">
                <Steps
                    size="small"
                    current={currentStep}
                    onChange={onChange}
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
        </Flex>
    );
}
