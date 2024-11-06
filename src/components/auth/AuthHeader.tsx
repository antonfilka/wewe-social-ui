import styles from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/src/constants';
import Typography from '@/src/components/common/Typography';
import { Flex } from 'antd';
import clsx from 'clsx';

export const AuthHeader = () => {
    const activeLink = usePathname();

    return (
        <>
            <Flex className="mt-[55px] w-full" gap="28px" align="center" justify="center">
                <Link href={ROUTES.signIn}>
                    <Typography
                        variant="text"
                        className={clsx(styles.navigationItem, {
                            [styles.active]: activeLink === ROUTES.signIn,
                        })}
                    >
                        ВХОД
                    </Typography>
                </Link>
                <Link href={ROUTES.signUp}>
                    <Typography
                        variant="text"
                        className={clsx(styles.navigationItem, {
                            [styles.active]: activeLink === ROUTES.signUp,
                        })}
                    >
                        РЕГИСТРАЦИЯ
                    </Typography>
                </Link>
            </Flex>
        </>
    );
};
