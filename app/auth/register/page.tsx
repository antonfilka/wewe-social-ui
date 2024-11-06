'use client';

import { AuthHeader } from '@/src/components/auth/AuthHeader';
import { ROUTES } from '@/src/constants';
import SignUpForm from '@/app/auth/register/form';
import { Link } from '@/src/components/common/Link';

export default function SignUpPate() {
    return (
        <div className="flex h-full min-h-screen flex-col items-center justify-center">
            <AuthHeader />
            <SignUpForm />
            <Link linkClassName="mt-[100px]" href={ROUTES.signUpBusiness}>
                ХОТИТЕ СТАТЬ ПАРТНЕРОМ?
            </Link>
        </div>
    );
}
