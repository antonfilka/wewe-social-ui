'use client';

import { ROUTES } from '@/src/constants';
import SignInForm from '@/app/auth/login/form';
import { AuthHeader } from '@/src/components/auth/AuthHeader';
import { Link } from '@/src/components/common/Link';

export default function SignInPage() {
    return (
        <div className="flex h-full min-h-screen flex-col items-center justify-center">
            <AuthHeader />
            <SignInForm />
            <Link linkClassName="mt-[100px]" href={ROUTES.signUpBusiness}>
                ХОТИТЕ СТАТЬ ПАРТНЕРОМ?
            </Link>
        </div>
    );
}
