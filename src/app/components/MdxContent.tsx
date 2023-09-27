import { Suspense } from "react";

type MdxContentProps = {
    postData: BlogPost;
};
async function MdxContent({ postData }: MdxContentProps) {
    const { meta, content } = postData;

    return (
        <>
            <h1>{meta.title}</h1>
            <p>{meta.date}</p>
            <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
                {content}
            </article>
        </>
    );
}

export default MdxContent;
