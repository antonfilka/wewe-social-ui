'use client';

import Typography from '@/src/components/common/Typography';
import { ROUTES } from '@/src/constants';
import Link from 'next/link';
import { AuthHeader } from '@/src/components/auth/AuthHeader';
import SignInForm from '@/app/auth/login/form';

export default function SignInPage() {
    return (
        <div className="mx-auto flex h-screen w-[500px] flex-col items-center bg-[#EBEBEB]">
            <Typography variant="text" className="mt-[130px]">
                LOGO
            </Typography>
            <AuthHeader />
            <SignInForm />
            <Link className="mb-[45px] mt-auto" href={ROUTES.signUpBusiness}>
                <Typography variant="paragraph">ХОТИТЕ СТАТЬ ПАРТНЕРОМ?</Typography>
            </Link>
        </div>
    );
}
