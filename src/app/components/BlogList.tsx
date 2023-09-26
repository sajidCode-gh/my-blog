import { getPosts } from "@/utils/posts";
import Link from "next/link";

async function BlogList(props: { limit: number }) {
    const { limit } = props;
    const posts = await getPosts();

    if (!posts) {
        return (
            <p className="mt-10 text-center">
                Sorry, no posts available or failed to load
            </p>
        );
    }
    return (
        <section className="mt-6">
            {posts.map((post, index) => {
                if (index <= limit) {
                    return (
                        <div
                            key={post.id}
                            className="mt-4 bg-white p-2 rounded-md bg-opacity-20 hover:bg-opacity-30"
                        >
                            <Link className="" href={`/blogs/${post.id}`}>
                                <h3>{post.meta.title}</h3>
                                <small className="text-zinc-200 ">
                                    📅 {post.meta.date}
                                </small>
                                <div className="mt-1 flex gap-3">
                                    {post.meta.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-orange-200"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </div>
                    );
                }
            })}
        </section>
    );
}

export default BlogList;
