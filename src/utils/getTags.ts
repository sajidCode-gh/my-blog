import { getPostsMeta } from "./posts";

export const getTags = async () => {
    const postsMeta = await getPostsMeta();
    const postTags: string[] | undefined = postsMeta
        ?.map((post) => post.tags)
        .reduce((acc, tags) => acc.concat(tags), []);

    const tags: string[] = [];

    if (postTags == undefined) return;

    for (const tag of postTags) {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    }
    return tags;
};
