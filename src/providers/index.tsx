import React from 'react';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { themeConfig } from '../styles/theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider theme={themeConfig} wave={{ disabled: true }}>
            <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
    );
};
