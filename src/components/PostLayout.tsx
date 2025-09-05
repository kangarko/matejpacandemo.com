"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config";

interface PostLayoutProps {
    title: string;
    date: string;
    imageSrc?: string;
    children: React.ReactNode;
}

export default function PostLayout({ title, date, imageSrc, children }: PostLayoutProps) {
    return (
        <article className="relative">

            {imageSrc && (
                <div className="relative mb-0 md:mb-16">
                    <div className="absolute inset-0 w-screen -ml-[50vw] left-1/2">
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                            <Image
                                src={imageSrc}
                                alt="Article Image"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/80 to-deep-black" />
                        </div>
                    </div>
                    <div className="relative z-10 py-24 md:py-32 max-w-5xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 text-chrome-silver">
                            {title}
                        </h1>
                        <p className="text-chrome-silver/60 text-sm mb-6">
                            By {siteConfig.brand.name} • {date}
                        </p>
                        <div className="h-1 w-32 bg-gradient-to-r from-acid-green via-neon-cyan to-hot-pink" />
                    </div>
                </div>
            )}

            {!imageSrc && (
                <div className="py-12 max-w-5xl mx-auto px-6 mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4 text-chrome-silver">
                        {title}
                    </h1>
                    <p className="text-chrome-silver/60 text-sm mb-6">
                        By {siteConfig.brand.name} • {date}
                    </p>
                    <div className="h-1 w-32 bg-gradient-to-r from-acid-green via-neon-cyan to-hot-pink" />
                </div>
            )}

            <div className="relative max-w-4xl mx-auto px-6">
                <div className="prose prose-lg prose-invert">
                    {children}
                </div>
            </div>
            <aside className="mt-24 max-w-4xl mx-auto px-6">
                <div className="p-8 bg-chrome-silver/5 backdrop-blur-sm rounded-2xl border border-chrome-silver/10 flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src="/avatar.jpg"
                        alt="Author Avatar"
                        width={150}
                        height={150}
                        className="rounded-full border-2 border-neon-cyan"
                    />
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-tech uppercase tracking-wider text-neon-cyan mb-2">
                            {siteConfig.brand.name}
                        </h3>
                        <p className="text-chrome-silver/80 leading-relaxed">
                            {siteConfig.brand.name} is the founder of MineAcademy.org, teaching 4,000+ students programming while serving 1.2M customers globally. He is an expert at helping people get customers using online methods and making things super simple to understand.
                        </p>
                    </div>
                </div>
            </aside>
        </article>
    );
}