import BlogList from "../components/BlogList";

export const revalidate = 3600;

function blogs() {
    return (
        <section>
            <BlogList limit={Infinity} />
        </section>
    );
}

export default blogs;
