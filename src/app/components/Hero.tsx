import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="sm:flex items-center justify-between">
            <div className="flex-1 w-70">
                <h1 className="text-3xl sm:text-4xl text-white">
                    Muhammad Sajid
                </h1>
                <h2 className="text-xl tracking-wide mb-4">
                    Software Developer
                </h2>
                <p>
                    Hi👋, welcome to my blog, Here I share my content related to
                    programming, tech, my learning experience and general
                    struggles as a developer. I love to connect, build and
                    explore new ideas, maybay I'll extend thsi intor a bit more,
                    and add some more text here maybe one mor eline abut I
                    diont' ahv eany idea how logntg woudl it get.
                </p>
                <Link href="https://sajidcode-gh.github.io/sajid-portfolio/">
                    My Portfolio
                </Link>
            </div>
            <div className="sm:block hidden w-30">
                <Image
                    src="/icons/hero.svg"
                    width="300"
                    height="300"
                    alt="Illustration"
                />
            </div>
        </section>
    );
}

export default Hero;
