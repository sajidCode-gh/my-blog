import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Muhammad Sajid",
    description:
        "My digital house, where I share my journey and learning experience relating to software development and tech.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="max-w-3xl mx-auto mt-6 py-4 px-3 sm:px-1">
                    {children}
                </main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
