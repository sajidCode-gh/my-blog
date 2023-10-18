import Link from "next/link";
import BlogList from "./BlogList";

async function RecentBlogs() {
    return (
        <>
            <BlogList limit={10} />
            <Link
                className="text-center block mt-4 mx-auto max-w-max border border-three hover:border-two px-2 rounded-md py-1"
                href="/blogs"
            >
                View All Blogs
            </Link>
        </>
    );
}

export default RecentBlogs;
