import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background-color)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary-color)',
                text: 'var(--text-color)',
                black: 'var(--black-color)',
                error: 'var(--error-color)',
            },
        },
    },
    plugins: [],
};
export default config;
