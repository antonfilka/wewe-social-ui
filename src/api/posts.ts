import { GetPostsresponse } from '@/src/types/posts';
import axiosInstance from './index';

export const getPosts = async () => {
    const response = await axiosInstance
        .get<GetPostsresponse>(`/posts`)
        .then((response) => response.data);

    return response;
};
