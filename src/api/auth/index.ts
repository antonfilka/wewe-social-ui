import { BusinessRegisterForm } from '@/app/auth/business/schema';
import axiosInstance from '../index';

export const sendBusinessSignUpForm = async (data: BusinessRegisterForm) => {
    const response = await axiosInstance
        .post(`/auth/business`, data)
        .then((response) => response.data);

    return response;
};
