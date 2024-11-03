'use client';
import { Typography as TypographyAnt } from 'antd';
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
    switch (variant) {
        case 'title':
            return (
                <Title level={level} className={className} {...restProps}>
                    {children}
                </Title>
            );
        case 'text':
            return (
                <Text className={className} {...restProps}>
                    {children}
                </Text>
            );
        case 'paragraph':
            return (
                <Paragraph className={className} {...restProps}>
                    {children}
                </Paragraph>
            );
        default:
            return null;
    }
};

export default CustomTypography;
