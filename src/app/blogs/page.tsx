import BlogList from "../components/BlogList";

function blogs() {
    return (
        <section>
            <BlogList limit={Infinity} />
        </section>
    );
}

export default blogs;
