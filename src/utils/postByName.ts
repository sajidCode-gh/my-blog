import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

async function processMdx(rawContent: string): Promise<postContent> {
    const { frontmatter: meta, content } = await compileMDX<Meta>({
        source: rawContent,
        components: {},
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    rehypeHighlight,
                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: "wrap",
                        },
                    ],
                ],
            },
        },
    });

    return { meta, content };
}

export const getPostByName = async (
    fileName: string
): Promise<BlogPost | undefined> => {
    try {
        const res = await fetch(
            `https://raw.githubusercontent.com/sajidCode-gh/get-posts/main/${fileName}`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer ${process.env.GH_TOKEN}`,
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            }
        );

        if (!res.ok) return undefined;

        const rawContent = await res.text();

        const { meta, content } = await processMdx(rawContent);
        const id = fileName.replace(".mdx", "");

        return { id, meta, content };
    } catch (error) {
        console.log("Error while reading file: ", error);
        return undefined;
    }
};
