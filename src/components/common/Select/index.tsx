import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';

export const Select = (props: AntSelectProps) => {
    return <AntSelect className="w-full !text-[16px]" {...props} />;
};
