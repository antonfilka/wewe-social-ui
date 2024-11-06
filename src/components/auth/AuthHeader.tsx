import styles from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/src/constants';
import Typography from '@/src/components/common/Typography';
import { Flex } from 'antd';

export const AuthHeader = () => {
    const activeLink = usePathname();

    return (
        <>
            <Flex className="mt-[55px] w-full" gap="28px" align="center" justify="center">
                <Link href={ROUTES.signIn}>
                    <Typography
                        variant="text"
                        className={`${styles.navigationItem} ${activeLink === ROUTES.signIn ? styles.active : ''}`}
                    >
                        ВХОД
                    </Typography>
                </Link>
                <Link href={ROUTES.signUp}>
                    <Typography
                        variant="text"
                        className={`${styles.navigationItem} ${activeLink === ROUTES.signUp ? styles.active : ''}`}
                    >
                        РЕГИСТРАЦИЯ
                    </Typography>
                </Link>
            </Flex>
        </>
    );
};
