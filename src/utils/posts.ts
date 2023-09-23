import { Dirent } from "fs";
import { getPostByName } from "./postByName";

const fs = require("fs").promises;
const path = require("path");

const directoryPath = "./POSTS";

async function getFiles() {
    try {
        const files = await fs.readdir(directoryPath);
        const mdxFiles = files.filter(
            (file: string) => path.extname(file) === ".mdx"
        );

        return mdxFiles;
    } catch (error) {
        console.log("faild to read files in a directory: ", error);
    }
}

export const getPosts = async (): Promise<BlogPost[]> => {
    const files = await getFiles();

    const postPromises = [];

    for (const file of files) {
        postPromises.push(getPostByName(file));
    }

    const posts = await Promise.all(postPromises);

    const validPosts = posts.filter((post) => post != undefined) as BlogPost[];

    return validPosts;
};
