import { Button as ButtonAnt, ButtonProps as ButtonPropsAnt } from 'antd';

type ButtonVariantType = 'error' | 'success';

interface ButtonProps extends ButtonPropsAnt {
    children?: React.ReactNode;
    buttonType?: ButtonVariantType;
}

export const BaseButton = ({ children, buttonType, ...props }: ButtonProps) => {
    return (
        <ButtonAnt {...props} className={`base-button ${buttonType}`}>
            {children}
        </ButtonAnt>
    );
};
