import { Flex } from 'antd';
import { Form } from './form';
import Typography from '@/src/components/common/Typography';

export default function SignUpBusinessPage() {
    return (
        <Flex className="mx-auto flex min-h-screen w-[500px] flex-col items-center overflow-y-auto bg-[#EBEBEB] py-[20px]">
            <Typography variant="text" className="mt-[30px]">
                ЗАПОЛНИТЕ КОНТАКТНЫЕ ДАННЫЕ И МЫ С ВАМИ СВЯЖЕМСЯ!
            </Typography>

            <div className="mt-[10px]">
                <Form />
            </div>
        </Flex>
    );
}
