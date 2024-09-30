import React from 'react';
import { TanstackProvider } from './TanstackProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <TanstackProvider>
            <AntdRegistry>{children}</AntdRegistry>
        </TanstackProvider>
    );
};
