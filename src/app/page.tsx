import { MDXRemote } from "next-mdx-remote";
import Hero from "./components/Hero";
// import RecentBlogs from "./components/RecentBlogs";

export default async function Home() {
    return (
        <main className="max-w-3xl mx-auto mt-6 py-4 px-3 sm:px-1">
            <Hero />
            {/* <RecentBlogs /> */}
        </main>
    );
}
