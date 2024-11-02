import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/src/providers';

// TODO: replace with our fonts
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Wewe-Social',
    description: 'Social network',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Wewe Social" />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
