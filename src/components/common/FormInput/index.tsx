import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { Input } from 'antd';
import { COLORS } from '@/src/styles/theme';
import Password from 'antd/es/input/Password';

interface FormInputProps {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    label: string;
    error?: FieldError;
    isPassword?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ name, control, label, error, isPassword }) => (
    <div className="mb-[5px] flex w-full flex-col items-start gap-[3px]">
        <label>{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                if (isPassword) return <Password {...field} className="w-full" />;
                return <Input {...field} className="w-full" />;
            }}
        />

        {error && <span style={{ color: COLORS.error }}>{error.message}</span>}
    </div>
);

export default FormInput;
