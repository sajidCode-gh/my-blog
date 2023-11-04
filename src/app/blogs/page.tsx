import { getTags } from "@/utils/getTags";
import BlogList from "../components/BlogList";
import { Filters } from "../components/Filters";

export const revalidate = 3600;

async function Blogs() {
    const tags = await getTags();
    return (
        <section className="flex flex-col gap-6">
            {/* <Filters tags={tags} /> */}
            <div className="w-full h-0.5 bg-two opacity-0 rounded-sm"></div>
            <BlogList limit={Infinity} />
        </section>
    );
}

export default Blogs;
