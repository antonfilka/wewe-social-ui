import { COLORS } from '@/src/styles/theme';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { Control, Controller, FieldError } from 'react-hook-form';

interface FormSelectProps extends AntSelectProps {
    name: string;
    control: Control<any>;
    label: string;
    error?: FieldError;
}

export const FormSelect = ({ name, control, label, error, ...restProps }: FormSelectProps) => {
    return (
        <div className="mb-[5px] flex w-full flex-col items-start gap-[3px]">
            <label>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    return <AntSelect {...field} className="w-full !text-[16px]" {...restProps} />;
                }}
            />

            {error && <span style={{ color: COLORS.error }}>{error.message}</span>}
        </div>
    );
};
