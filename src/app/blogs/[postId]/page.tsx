import MdxContent from "@/app/components/MdxContent";
import { getPostByFileName, getPostsMeta } from "@/app/utils/get-posts";

type props = {
    params: {
        postId: string;
    };
};

export const revalidate = 0;

export async function generateStaticParams() {
    const posts = await getPostsMeta();

    if (!posts) {
        [];
    }
    return posts.map((post) => {
        postId: post.id;
    });
}

export async function generateMetadata({ params }: props) {
    const post = await getPostByFileName(`${params.postId}.mdx`);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.meta.title,
    };
}

async function Blog({ params }: props) {
    const post = await getPostByFileName(`${params.postId}.mdx`);
    if (!post) {
        return "data-not-found";
    }

    return <MdxContent postData={post} />;
}

export default Blog;
