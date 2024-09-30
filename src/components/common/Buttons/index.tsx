import { Button as ButtonAnt, ButtonProps as ButtonPropsAnt } from 'antd';

interface ButtonProps extends ButtonPropsAnt {
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return <ButtonAnt {...props}>{props.children}</ButtonAnt>;
};
