'use client';
import { getPosts } from '@/src/api/posts';
import Typography from '@/src/components/common/Typography';
import { QUERY_KEYS } from '@/src/constants';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.POSTS],
        queryFn: getPosts,
    });

    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <Typography variant="title" level={1}>
                Wewe-Social
            </Typography>
            {isLoading && <div>Loading..</div>}
            {data && (
                <div>
                    {data?.map((post) => (
                        <div key={post.id}>
                            <Typography variant="paragraph" className="font-[700]">
                                {post.title}
                            </Typography>
                            <Typography variant="paragraph">{post.body}</Typography>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
