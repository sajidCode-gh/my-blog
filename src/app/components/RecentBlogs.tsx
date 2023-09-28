import Link from "next/link";
import BlogList from "./BlogList";

async function RecentBlogs() {
    return (
        <>
            <BlogList limit={15} />
            <Link className="text-center block mt-2" href="/blogs">
                View All Blogs
            </Link>
        </>
    );
}

export default RecentBlogs;
