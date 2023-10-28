import MdxContent from "@/app/components/MdxContent";
import { getPostByName } from "@/utils/postByName";
import { getPostsMeta } from "@/utils/posts";
import "highlight.js/styles/github-dark-dimmed.css";

export const revalidate = 3600;

type props = {
    params: {
        postId: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta();

    if (!posts) {
        return [];
    }
    return posts.map((post) => {
        postId: post.id;
    });
}

export async function generateMetadata({ params }: props) {
    const post = await getPostByName(`${params.postId}.mdx`);
    if (!post)
        return {
            title: "Post Not Found",
        };

    return {
        title: post.meta.title,
    };
}

async function Blog({ params: { postId } }: props) {
    const post = await getPostByName(`${postId}.mdx`);

    if (!post) {
        return "data-not-found";
    }
    return <MdxContent postData={post} />;
}

export default Blog;
