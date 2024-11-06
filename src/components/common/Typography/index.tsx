'use client';
import { Typography as TypographyAnt } from 'antd';
import clsx from 'clsx';
import React from 'react';

const { Title, Text, Paragraph } = TypographyAnt;

interface CustomTypographyProps {
    className?: string;
    children?: React.ReactNode;
    variant: 'title' | 'text' | 'paragraph';
    level?: 1 | 2 | 3 | 4 | 5;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
    variant,
    level,
    className,
    children,
    ...restProps
}) => {
    const commonClassName = clsx('!mb-0', className);

    switch (variant) {
        case 'title':
            return (
                <Title level={level} className={commonClassName} {...restProps}>
                    {children}
                </Title>
            );
        case 'text':
            return (
                <Text className={commonClassName} {...restProps}>
                    {children}
                </Text>
            );
        case 'paragraph':
            return (
                <Paragraph className={commonClassName} {...restProps}>
                    {children}
                </Paragraph>
            );
        default:
            return null;
    }
};

export default CustomTypography;
