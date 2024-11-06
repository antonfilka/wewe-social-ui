'use client';

import Typography from '@/src/components/common/Typography';
import { AuthHeader } from '@/src/components/auth/AuthHeader';
import Link from 'next/link';
import { ROUTES } from '@/src/constants';
import SignUpForm from '@/app/auth/register/form';

export default function SignUpPate() {
    return (
        <div className="mx-auto flex h-screen w-[500px] flex-col items-center bg-[#EBEBEB]">
            <Typography variant="text" className="mt-[130px]">
                LOGO
            </Typography>
            <AuthHeader />
            <SignUpForm />
            <Link className="mb-[45px] mt-auto" href={ROUTES.signUpBusiness}>
                <Typography variant="paragraph">ХОТИТЕ СТАТЬ ПАРТНЕРОМ?</Typography>
            </Link>
        </div>
    );
}
