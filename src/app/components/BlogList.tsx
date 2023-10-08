import { getPostsMeta } from "@/utils/posts";
import Link from "next/link";

async function BlogList(props: { limit: number }) {
    const { limit } = props;
    const posts = await getPostsMeta();

    if (!posts) {
        return (
            <p className="mt-10 text-center">
                Sorry, no posts available or failed to load
            </p>
        );
    }
    return (
        <section className="mt-6 flex flex-col gap-6">
            {posts.map((meta, index) => {
                if (index < limit) {
                    return (
                        <article
                            key={meta.id}
                            className="bg-three py-4 px-6 rounded-md bg-opacity-30 after:content[''] relative after:absolute after:left-0 after:rounded-bl hover:border shadow-sm after:rounded-tl after:top-0 after:bottom-0 after:transition-all after:origin-left after:w-2 hover:after:w-3 after:scale-x-70 hover:after:scale-x-100 md:hover:ps-8 transition-all origin-left hover:bg-three-hover after:bg-two"
                        >
                            <Link
                                className="flex flex-col gap-3"
                                href={`/blogs/${meta.id}`}
                            >
                                <h3>{meta.title}</h3>
                                {meta.description && (
                                    <p className="text-base font-extralight">
                                        {meta.description}
                                    </p>
                                )}
                                <small className="font-thin flex gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="opacity-50 text-two h-4 w-4 self-baseline"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            width="18"
                                            height="18"
                                            x="3"
                                            y="4"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <line
                                            x1="16"
                                            x2="16"
                                            y1="2"
                                            y2="6"
                                        ></line>
                                        <line
                                            x1="8"
                                            x2="8"
                                            y1="2"
                                            y2="6"
                                        ></line>
                                        <line
                                            x1="3"
                                            x2="21"
                                            y1="10"
                                            y2="10"
                                        ></line>
                                    </svg>
                                    {meta.date}
                                </small>
                                <div className="flex gap-3">
                                    {meta.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-two text-one py-1 px-2 text-sm rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </article>
                    );
                }
            })}
        </section>
    );
}

export default BlogList;
