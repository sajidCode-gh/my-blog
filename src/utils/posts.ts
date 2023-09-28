import { getPostByName } from "./postByName";

type Filetree = {
    tree: [
        {
            path: string;
        }
    ];
};

export const getPostsMeta = async () => {
    const res = await fetch(
        "https://api.github.com/repos/sajidCode-gh/get-posts/git/trees/main?recursive=1",
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${process.env.GH_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28",
            },
        }
    );

    if (!res.ok) return undefined;

    const repoFiletree: Filetree = await res.json();

    const filesArray = repoFiletree.tree
        .map((obj) => obj.path)
        .filter((path) => path.endsWith(".mdx"));

    const posts = [];

    for (const file of filesArray) {
        const post = await getPostByName(file);
        if (post) {
            const { meta } = post;
            const fileName = file.replace(".mdx", "");
            posts.push({ id: fileName, ...meta });
        }
    }

    return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
};
