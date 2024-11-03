'use client';
import styles from '@/app/auth/styles.module.css';
import { AuthHeader } from '@/src/components/auth/AuthHeader';

export default function SignUpPage() {
    return (
        <div className={styles.pageWrapper}>
            <AuthHeader />
            <div className="">Sign-up</div>
        </div>
    );
}
