import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="sm:flex items-center justify-between">
            <div className="flex-1 w-70">
                <h1 className="sm:text-4xl font-semibold text-orange-200">
                    Muhammad Sajid
                </h1>
                <h2 className="tracking-wide mb-4">Software Developer</h2>
                <p>
                    Hi👋, welcome to my blog, Here I share content related to
                    programming, tech, my learning experience and general
                    struggles as a developer. Feel free to contact me if you
                    want to collaborate, have any question about any blog or
                    want to discuss any ideas.
                </p>
                <Link
                    className="text-orange-200 inline-block mt-4"
                    href="https://sajidcode-gh.github.io/sajid-portfolio/"
                >
                    My Portfolio 🗃️
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
