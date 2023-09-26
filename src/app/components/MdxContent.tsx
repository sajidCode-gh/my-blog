import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

type MdxContentProps = {
    postData: BlogPost;
};
async function MdxContent({ postData }: any) {
    const { meta, content } = postData;

    return (
        <>
            <h1>{meta.title}</h1>
            <p>{meta.date}</p>
            <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
                <Suspense fallback={<>Loading....</>}>
                    <MDXRemote source={content} />
                    {content}
                </Suspense>
            </article>
        </>
    );
}

export default MdxContent;
