type Meta = {
    id: string;
    title: string | undefined;
    date: string | undefined;
    tags: string[] | undefined;
};

type BlogPost = {
    meta: Meta;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
};
