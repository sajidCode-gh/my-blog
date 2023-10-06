"use-client";

import Link from "next/link";

function Header() {
    return (
        <header className="bg-three bg-opacity-5 drop-shadow-sm backdrop-blur-sm py-4 px-3">
            <div className="max-w-3xl mx-auto flex gap-4 sm:gap-8 justify-between items-center">
                <nav className="flex gap-4 sm:gap-8 items-center">
                    <Link className="font-medium" href="/">
                        <span className="hover:text-side-one">
                            <span className="text-side-one">&lt;</span>
                            Sajid<span className="text-side-one">/</span>Blog
                            <span className="text-side-one">&gt;</span>
                        </span>
                    </Link>
                    <Link className="" href="/blogs">
                        <span className="hover:text-side-one">Posts</span>
                    </Link>
                    {/* Will add filters or blogs button here */}
                </nav>
                <ul className="flex gap-4 sm:gap-8 ">
                    <li>
                        <Link
                            href="mailto:muhammadsajidkhan616@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon-base hover:text-side-two"
                                data-tooltip-content="My Email"
                                data-tooltip-id="footer-tooltip"
                                aria-label="My Email"
                            >
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/sajidcode/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon-base hover:text-side-two"
                                data-tooltip-content="My LinkedIn profile"
                                data-tooltip-id="footer-tooltip"
                                aria-label="My LinkedIn profile"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/sajidCode-gh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon-base hover:text-side-two"
                                data-tooltip-content="My GitHub profile"
                                data-tooltip-id="footer-tooltip"
                                aria-label="My GitHub profile"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
