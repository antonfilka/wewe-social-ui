import Typography from '../Typography';
import NextLink from 'next/link';
import clsx from 'clsx';

export const Link = ({
    children,
    linkClassName,
    textClassName,
    href,
}: {
    children: React.ReactNode;
    linkClassName?: string;
    textClassName?: string;
    href: string;
}) => {
    return (
        <NextLink href={href} className={clsx(linkClassName)}>
            <Typography
                className={clsx('transition-all hover:text-primary', textClassName)}
                variant="paragraph"
            >
                {children}
            </Typography>
        </NextLink>
    );
};
