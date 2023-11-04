import Link from "next/link";

export function Filters(props: { tags: string[] | undefined }) {
    const tags = props.tags;
    return (
        <div>
            <nav className="flex flex-col gap-4">
                <button className="flex items-center gap-1">
                    <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M4 5H7M14 5L20 5M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5ZM10 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM4 12H7M11 19H20M6 17C7.10457 17 8 17.8954 8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17Z"
                                stroke="#e8e8e8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>{" "}
                        </g>
                    </svg>
                    Filter by tag:
                </button>
                <div className="flex gap-3">
                    {tags?.map((tag) => (
                        <Link
                            href={`/blogs/${tag}`}
                            key={tag}
                            className="bg-two cursor-pointer hover:opacity-80 text-one py-1 px-2 text-sm rounded-md"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
