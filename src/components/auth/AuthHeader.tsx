import styles from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AuthHeader = () => {
    const activeLink = usePathname();

    return (
        <div className={styles.headerWrapper} style={{ marginBottom: '110px' }}>
            <div className={styles.logo} style={{ marginBottom: '45px' }}>
                LOGO
            </div>
            <nav className={styles.navigation}>
                <Link
                    href="/auth/sign-in"
                    className={`${styles.navigationItem} ${activeLink === '/auth/sign-in' ? styles.active : ''}`}
                >
                    Вход
                </Link>
                <Link
                    href="/auth/sign-up"
                    className={`${styles.navigationItem} ${activeLink === '/auth/sign-up' ? styles.active : ''}`}
                >
                    Регистрация
                </Link>
            </nav>
        </div>
    );
};
