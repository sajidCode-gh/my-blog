"use client";

import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="container mx-auto flex justify-between py-5 px-3">
            <nav className="flex gap-4 sm:gap-8 items-center">
                <Link href="/">
                    <Image
                        src="/icons/home.svg"
                        alt="home icon"
                        width="25"
                        height="25"
                    />
                </Link>
                <button>
                    <Image
                        src="/icons/moon.svg"
                        alt="home icon"
                        width="25"
                        height="25"
                    />
                </button>
            </nav>
            <ul className="flex gap-4 sm:gap-8 ">
                <li>
                    <Link
                        href="mailto:muhammadsajidkhan616@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/email.svg"
                            alt="email icon"
                            width="25"
                            height="25"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/sajidcode/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="Linkedin icon"
                            width="25"
                            height="25"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://github.com/sajidCode-gh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="github icon"
                            width="25"
                            height="25"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.instagram.com/_sajidcode/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/instagram.svg"
                            alt="instagram icon"
                            width="25"
                            height="25"
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
