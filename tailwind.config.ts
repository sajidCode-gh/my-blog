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
            one: "rgb(249, 117, 131);",
            two: "rgb(255 241 242)",
            three: "rgb(62 71 84)",
            four: "rgba(255,241,242,.8)",
            "side-one": "rgb(249, 117, 131)",
            "side-two": "rgb(253 164 175)",
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
