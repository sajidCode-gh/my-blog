import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { Octokit } from "octokit";

type FileTree = {
    tree: [
        {
            path: string;
        }
    ];
};

export const getPostsMeta = async (): Promise<Meta[]> => {
    const octokit = new Octokit({
        auth: `${process.env.GH_TOKEN}`,
    });
    const res = await octokit.request(
        "https://api.github.com/repos/sajidCode-gh/get-posts/git/trees/main?recursive=1",
        {
            owner: "sajidCode-gh",
            repo: "get-posts",
            tree_sha: "main",
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        }
    );

    if (res.status !== 200) console.log("Request Failed", res.status);

    const data = res.data;

    const fileTreeArray = data.tree.filter((branch: { path: string }) =>
        branch.path.endsWith(".mdx")
    );

    let posts: Meta[] = [];

    for (let file of fileTreeArray) {
        let fileName = file.path.replace(".mdx", "");
        const post = await getPostByFileName(fileName);
        if (post) posts.push(post.meta);
    }

    return posts.sort((a, b) => {
        const dateA = new Date(a.date) as Date;
        const dateB = new Date(b.date) as Date;
        return dateA.getTime() - dateB.getTime();
    });
};

export const getPostByFileName = async (
    fileName: string
): Promise<BlogPost | undefined> => {
    const octokit = new Octokit({
        auth: `${process.env.GH_TOKEN}`,
    });
    const res = await octokit.request(
        `https://api.github.com/repos/sajidCode-gh/get-posts/contents/${fileName}.mdx`,
        {
            owner: "sajidCode-gh",
            repo: "get-posts",
            tree_sha: "main",
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        }
    );

    if (res.status !== 200) console.log("Request Failed", res.status);

    const data = res.data;

    const RawMDXContent = Buffer.from(data.content, "base64").toString();

    const mdxSource = await serialize(RawMDXContent, {
        parseFrontmatter: true,
    });

    const BlogPost: BlogPost = {
        meta: {
            id: fileName,
            title: mdxSource.frontmatter.title as string,
            date: mdxSource.frontmatter.date as string,
            tags: (mdxSource.frontmatter.tags as string[]) || [],
        },
        content: mdxSource.compiledSource,
    };

    return BlogPost;
};
