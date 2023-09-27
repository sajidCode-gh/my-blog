type Meta = {
    title: string;
    description: string;
    date: string;
    tags: string[];
};

type postContent = {
    meta: Meta;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
};

interface BlogPost extends postContent {
    id: string;
}
