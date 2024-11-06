import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/src/constants';
import clsx from 'clsx';
import Image from 'next/image';
import { Link } from '../common/Link';

export const AuthHeader = () => {
    const activeLink = usePathname();

    return (
        <div className="mb-[30px] flex w-full flex-col items-center gap-[25px]">
            <Image src="/wewe_logo.png" alt="Logo" width={100} height={50} />
            <div className="flex items-center justify-center gap-[25px]">
                <Link
                    href={ROUTES.signIn}
                    textClassName={clsx(styles.navigationItem, {
                        [styles.active]: activeLink === ROUTES.signIn,
                    })}
                >
                    ВХОД
                </Link>
                <Link
                    href={ROUTES.signUp}
                    textClassName={clsx(styles.navigationItem, {
                        [styles.active]: activeLink === ROUTES.signUp,
                    })}
                >
                    РЕГИСТРАЦИЯ
                </Link>
            </div>
        </div>
    );
};
