import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="sm:flex items-center justify-between">
            <div className="flex-1 w-70">
                <h1 className="sm:text-4xl font-semibold text-orange-200">
                    Muhammad Sajid
                </h1>
                <h2 className="tracking-wider font-thin mb-4 space-x-2">
                    <span className="text-side-one">S</span>oftware{" "}
                    <span className="text-side-one">D</span>eveloper
                </h2>
                <p className="prose prose-zinc prose-invert">
                    Hi👋, welcome to my blog, Here I share content related to
                    programming, tech, my learning experience and general
                    struggles as a developer. Feel free to contact me if you
                    want to collaborate, have any question about any blog or
                    want to discuss any ideas.
                </p>
                <Link
                    className="mt-4 flex items-center group gap-2 w-max hover:text-side-one"
                    href="https://sajidcode-gh.github.io/sajid-portfolio/"
                    target="_blank"
                >
                    My Portfolio{" "}
                    <svg
                        fill="#e0e3f5eb"
                        height="13px"
                        width="13px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        stroke="#e6e8f7e8"
                        className="group-hover:fill-side-one"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                                {" "}
                                <g>
                                    {" "}
                                    <path d="M469.779,94.063H352.573l-9.106-36.426c-4.709-18.832-21.554-31.983-40.962-31.983h-93.011 c-19.408,0-36.253,13.152-40.963,31.984l-9.105,36.425H42.221C18.941,94.063,0,113.003,0,136.284v307.841 c0,23.281,18.941,42.221,42.221,42.221h427.557c23.281,0,42.221-18.941,42.221-42.221V136.284 C512,113.003,493.059,94.063,469.779,94.063z M184.086,61.528c2.922-11.682,13.371-19.841,25.409-19.841h93.011 c12.038,0,22.486,8.159,25.409,19.84l8.133,32.536h-18.732l-7.033-28.132c-0.891-3.569-4.098-6.072-7.777-6.072h-93.011 c-3.678,0-6.885,2.503-7.777,6.072l-7.031,28.132h-18.732L184.086,61.528z M300.789,94.063h-89.578l4.543-18.171h80.492 L300.789,94.063z M42.221,110.096h427.557c8.005,0,15.177,3.614,19.985,9.291l-52.05,156.149 c-4.736,14.208-17.98,23.754-32.957,23.754H289.67v-17.637c0-9.136-7.432-16.568-16.568-16.568h-34.205 c-9.136,0-16.568,7.432-16.568,16.568v17.637H107.243c-14.976,0-28.221-9.546-32.957-23.753l-52.05-156.15 C27.044,113.71,34.216,110.096,42.221,110.096z M238.363,316.393v-34.739c0-0.295,0.239-0.534,0.534-0.534h34.205 c0.295,0,0.534,0.239,0.534,0.534v34.739H238.363z M273.637,332.426v17.637c0,0.295-0.239,0.534-0.534,0.534h-34.205 c-0.295,0-0.534-0.239-0.534-0.534v-17.637H273.637z M495.967,444.125c0,14.44-11.748,26.188-26.188,26.188H42.221 c-14.44,0-26.188-11.748-26.188-26.188V151.481l43.042,129.126c6.922,20.765,26.279,34.717,48.168,34.717H222.33v34.739 c0,9.136,7.432,16.568,16.568,16.568h34.205c9.136,0,16.568-7.432,16.568-16.568v-34.739h115.087 c21.889,0,41.245-13.951,48.168-34.717l43.042-129.126V444.125z"></path>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="-0.72 -0.72 25.44 25.44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                        stroke-width="0.00024000000000000003"
                        className="group-hover:text-side-one transition-transform group-hover:translate-x-2"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z"
                                fill="#fda4af"
                            ></path>{" "}
                        </g>
                    </svg>
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
