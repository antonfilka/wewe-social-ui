import { GetPostsresponse } from '@/src/types/posts';
import axiosInstance from './index';

export const getPosts = async () => {
    console.log(process.env.API_URL);
    const response = await axiosInstance
        .get<GetPostsresponse>(`/posts`)
        .then((response) => response.data);

    return response;
};
