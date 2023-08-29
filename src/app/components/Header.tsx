"use client";

import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="bg-amber-100 py-4 px-3">
            <div className="max-w-3xl mx-auto flex gap-4 sm:gap-8 justify-between items-center">
                <nav className="flex gap-4 sm:gap-8">
                    <Link href="/">
                        <Image
                            src="/icons/home.svg"
                            alt="home icon"
                            width="25"
                            height="25"
                        />
                    </Link>
                    {/* Will add filters button here */}
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
                                style={{
                                    background: "white",
                                    borderRadius: "5px",
                                }}
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
                                style={{
                                    background: "white",
                                    borderRadius: "7px",
                                }}
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
                                style={{
                                    background: "white",
                                    borderRadius: "5px",
                                }}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
