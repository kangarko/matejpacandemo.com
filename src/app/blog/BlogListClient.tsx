"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    imageSrc?: string;
}

interface BlogListClientProps {
    posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="space-y-5">
            {posts.map((post, index) => (
                <article
                    key={post.slug}
                    className={`
                        relative transition-all duration-1000 ease-out
                        opacity-100
                    `}
                    style={{
                        transitionDelay: `${200 + index * 150}ms`,
                        animation: `slideInUp 0.8s ease-out ${200 + index * 150}ms both`,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className={`
                            absolute -inset-3 transition-all duration-500
                            ${hoveredIndex === index ? 'opacity-100 scale-102' : 'opacity-0 scale-100'}
                        `}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/15 via-electric-purple/10 to-hot-pink/15 blur-xl" />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-chrome-silver/5 via-chrome-silver/3 to-transparent backdrop-blur-md rounded-xl border border-chrome-silver/10" />
                        <div className={`
                            absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-hot-pink/5 rounded-xl transition-opacity duration-500
                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                        `} />
                        <div className="relative grid md:grid-cols-12 gap-5 p-5 md:p-6">
                            {post.imageSrc && (
                                <div className="md:col-span-3 relative">
                                    <Link href={`/blog/${post.slug}`} className="block relative group overflow-hidden rounded-lg">
                                        <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-cyan/50 via-electric-purple/50 to-hot-pink/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-deep-black">
                                            <Image
                                                src={post.imageSrc}
                                                alt={post.title}
                                                fill
                                                className="object-cover filter contrast-110 saturate-130 group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-deep-black/20 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-hot-pink/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                                        </div>
                                    </Link>
                                </div>
                            )}

                            <div className={post.imageSrc ? "md:col-span-9" : "md:col-span-12"}>
                                <div className="inline-flex items-center gap-2 mb-3">
                                    <p className="text-chrome-silver/60 text-sm font-mono uppercase tracking-wider">
                                        {post.date} • By {siteConfig.brand.name}
                                    </p>
                                </div>
                                <h2 className="mb-4 relative">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group inline-block"
                                    >
                                        <span className="text-2xl md:text-3xl font-display font-bold text-black dark:text-chrome-silver group-hover:text-neon-cyan transition-colors duration-500 leading-tight block" style={{ color: 'var(--chrome-silver, black)' }}>
                                            {post.title}
                                        </span>
                                        <div className="mt-1.5 h-0.5 bg-gradient-to-r from-neon-cyan via-electric-purple to-hot-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </Link>
                                </h2>

                                <p className="text-chrome-silver/70 text-base mb-5 leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group relative inline-flex items-center gap-2 px-5 py-2.5 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-electric-purple/10 backdrop-blur-sm rounded-md border border-neon-cyan/30 group-hover:border-neon-cyan/50 transition-all duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    <span className="relative text-sm font-tech uppercase tracking-wider  transition-colors duration-300">
                                        Read Article
                                    </span>
                                    <span className="relative text-sm   transition-all duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
