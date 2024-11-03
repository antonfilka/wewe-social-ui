import React from 'react';
import { TanstackProvider } from './TanstackProvider';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { themeConfig } from '../styles/theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <TanstackProvider>
            <ConfigProvider theme={themeConfig} wave={{ disabled: true }}>
                <AntdRegistry>{children}</AntdRegistry>
            </ConfigProvider>
        </TanstackProvider>
    );
};
