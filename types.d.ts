type Meta = {
    title: string;
    date: string;
    tags: string[];
};

type Content = {
    content: string;
};

type BlogPost = {
    id: string;
    meta: Meta;
    content: Content;
};
