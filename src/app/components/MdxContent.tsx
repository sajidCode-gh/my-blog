import { Suspense } from "react";

type MdxContentProps = {
    postData: BlogPost;
};
async function MdxContent({ postData }: MdxContentProps) {
    const { meta, content } = postData;

    return (
        <>
            <h1>{meta.title}</h1>
            <small className="py-2 font-thin flex gap-1">
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
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                {meta.date}
            </small>
            <article className="my-4 prose prose-sm md:prose-base lg:prose-lg prose-zinc !prose-invert mx-auto">
                {content}
            </article>
        </>
    );
}

export default MdxContent;
