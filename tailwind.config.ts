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
        screens: {
            mobile: '320px',
            // => @media (min-width: 640px) { ... }

            tablet: '640px',
            // => @media (min-width: 640px) { ... }

            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
};
export default config;
