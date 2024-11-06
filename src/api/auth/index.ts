import { SignUpBusinessForm } from '@/app/auth/business/schema';
import axiosInstance from '../index';

export const sendBusinessSignUpForm = async (data: SignUpBusinessForm) => {
    const response = await axiosInstance
        .post(`/auth/business`, data)
        .then((response) => response.data);

    return response;
};
