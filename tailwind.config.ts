import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class"],
    theme: {
        colors: {
            one: "rgb(23 25 29)",
            two: "rgb(255 241 242)",
            three: "rgb(62 71 84)",
            "three-hover": "#3b3f49",
            four: "rgba(255,241,242,.8)",
            "side-one": "rgb(253 164 175)",
            "side-two": "rgb(253 164 175)",
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
