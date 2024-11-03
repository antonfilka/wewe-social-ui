import { Button } from '@/src/components/common/Button';
import Typography from '@/src/components/common/Typography';
import { ROUTES } from '@/src/constants';
import { Flex } from 'antd';
import Link from 'next/link';

export default function SignInPage() {
    return (
        <div className="mx-auto flex h-screen w-[500px] flex-col items-center bg-[#EBEBEB]">
            <Typography variant="text" className="mt-[130px]">
                LOGO
            </Typography>
            <Flex className="mt-[55px] w-full" gap="28px" align="center" justify="center">
                <Link href={ROUTES.signIn}>
                    <Typography variant="text">ВХОД</Typography>
                </Link>
                <Link href={ROUTES.signUp}>
                    <Typography variant="text">РЕГИСТРАЦИЯ</Typography>
                </Link>
            </Flex>
            <form className="mt-[110px]">form</form>
            <Button type="primary" shape="round" className="mt-[80px] w-[200px]">
                ВОЙТИ
            </Button>
            <Link className="mb-[45px] mt-auto" href={ROUTES.signUpBusiness}>
                <Typography variant="paragraph">ХОТИТЕ СТАТЬ ПАРТНЕРОМ?</Typography>
            </Link>
        </div>
    );
}
