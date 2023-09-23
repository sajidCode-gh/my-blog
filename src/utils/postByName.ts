import { readFile } from "fs";
const matter = require("gray-matter");
import path from "path";

function processMdx(mdxContent: string): {
    meta: BlogPost["meta"];
    content: BlogPost["content"];
} {
    try {
        const { data: frontMatter, content, isEmpty } = matter(mdxContent);

        if (isEmpty) {
            console.log("The mdx file is empty or content is found");
        }

        return { meta: frontMatter, content };
    } catch (error) {
        console.error("Error processing MDX:", error);
        return {
            meta: { title: "", date: "", tags: [] },
            content: { content: "Nill" },
        }; // Provide a default value
    }
}

const directoryPath = "./POSTS";

export const getPostByName = async (
    fileName: string
): Promise<BlogPost | undefined> => {
    const filePath = path.join(directoryPath, fileName);

    try {
        const fileContent = await readFileAsync(filePath);
        const { meta, content } = await processMdx(fileContent);
        const id = fileName.replace(".mdx", "");

        // console.log({ id, meta, content });
        return { id, meta, content };
    } catch (error) {
        console.log("Error while reading file: ", error);
        return undefined;
    }
};

const readFileAsync = (fildPath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        readFile(fildPath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
