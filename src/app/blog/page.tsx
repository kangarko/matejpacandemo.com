import React from "react";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="min-h-screen ">
            <Header />

            <main className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(var(--chrome-silver) 0.5px, transparent 0.5px),
                                linear-gradient(90deg, var(--chrome-silver) 0.5px, transparent 0.5px)
                            `,
                            backgroundSize: '50px 50px',
                            opacity: 0.03,
                            transform: 'perspective(1000px) rotateX(30deg)',
                            transformOrigin: 'center bottom',
                        }}
                    />

                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${10 + i * 10}%`,
                                animation: `floatGlass ${15 + i * 5}s ease-in-out infinite`,
                                animationDelay: `${i * 2}s`,
                            }}
                        >
                            <div
                                className="bg-gradient-to-br from-neon-cyan/5 via-electric-purple/5 to-hot-pink/5 backdrop-blur-md rounded-full border border-chrome-silver/10"
                                style={{
                                    width: `${8 + i * 4}rem`,
                                    height: `${8 + i * 4}rem`,
                                }}
                            />
                        </div>
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-hot-pink/5 opacity-50"
                        style={{
                            animation: 'gradientShift 10s ease-in-out infinite',
                        }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 py-4 md:py-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="hidden md:block mb-6">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-chrome-silver">
                                BLOG
                            </h1>
                            <div className="mt-3 h-0.5 bg-gradient-to-r from-acid-green via-electric-purple to-hot-pink" />
                        </div>

                        <BlogListClient posts={posts} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}