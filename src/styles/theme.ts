import { ThemeConfig } from 'antd';

/**
 * Using separate object with colors to be able to access
 * constants of colors without calling useToken from antd
 * what would force components to be "client side"
 * and not render on server side
 */

// TODO: sync with global css variables
export const COLORS = {
    primary: '#FF6700CC',

    background: '#EBEBEB',
    error: 'red',
    inputPrimary: '#fff',
};

export const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: COLORS.primary,
    },
    components: {
        Button: {
            colorPrimary: COLORS.primary,
            algorithm: true,
        },
        Input: {
            colorPrimary: COLORS.inputPrimary,
            algorithm: true,
        },
    },
};
