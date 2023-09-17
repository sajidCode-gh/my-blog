type MdxContentProps = {
    postData: BlogPost;
};
async function MdxContent({ postData }: MdxContentProps) {
    const { meta, content } = postData;
    return (
        <>
            <h1>{meta.title}</h1>
            <p>{meta.date}</p>
            <article>{content}</article>
        </>
    );
}

export default MdxContent;
