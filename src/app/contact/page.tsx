"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const CONTACT_CONTENT = {
    title: 'Want to get in touch?',
    imageSrc: '/matej.webp',
    paragraphs: [
        'To contact Matej or his staff please use the following information.',
        'Matej Pacan and his staff operate Monday–Friday 9am–5pm Europe/Prague.'
    ],
    ctaText: 'FREE Case Study',
    ctaLink: '/case-study'
};

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen ">
            <Header />
            <main className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full opacity-10">
                        <defs>
                            <pattern id="hexagons" x="0" y="0" width="60" height="70" patternUnits="userSpaceOnUse">
                                <polygon points="30,0 60,15 60,45 30,60 0,45 0,15"
                                    fill="none"
                                    stroke="var(--electric-purple)"
                                    strokeWidth="1"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                    </svg>

                </div>
                <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center min-h-[70vh]">
                        <div className="mb-4 lg:mb-0">
                            <div className={`
                                mb-10 lg:mb-12 transition-all duration-1000 ease-out
                                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                            `}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-chrome-silver">
                                    {CONTACT_CONTENT.title}
                                </h1>
                                <div className="mt-6 h-1 bg-gradient-to-r from-acid-green via-electric-purple to-hot-pink" />
                            </div>
                            <div className="space-y-6 lg:space-y-8">
                                {CONTACT_CONTENT.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-chrome-silver/80 text-lg leading-relaxed">{paragraph}</p>
                                ))}
                                <div className="relative group cursor-pointer">
                                    <p className="text-sm text-chrome-silver/60">Email</p>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="block text-lg md:text-xl text-neon-cyan group-hover:text-hot-pink transition-colors duration-300 no-underline">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                                <div className="relative group cursor-pointer">
                                    <p className="text-sm text-chrome-silver/60">Phone</p>
                                    <a href={`tel:${siteConfig.contact.phone}`} className="block text-lg md:text-xl text-neon-cyan group-hover:text-hot-pink transition-colors duration-300 no-underline">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link href={CONTACT_CONTENT.ctaLink} className="group relative inline-block">
                                    <div className="absolute inset-0 bg-hot-pink transform translate-x-2 translate-y-2" />
                                    <div className="absolute inset-0 bg-electric-purple transform translate-x-1 translate-y-1" />
                                    <div className="relative bg-deep-black border-2 border-neon-cyan px-5 py-2.5 overflow-hidden group-hover:border-acid-green transition-colors duration-300 active:animate-[buttonPress_0.2s_ease-in-out]">
                                        <span className="relative z-10 text-base md:text-lg font-tech uppercase tracking-wider text-neon-cyan group-hover:text-acid-green transition-colors duration-300">
                                            {CONTACT_CONTENT.ctaText}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={`
                            relative order-first lg:order-last
                            transition-all duration-1000 ease-out delay-500
                            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                        `}>
                            <div className="relative max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto lg:mx-0">
                                <Image
                                    src={CONTACT_CONTENT.imageSrc}
                                    alt="Portrait"
                                    width={450}
                                    height={675}
                                    className="w-full h-auto filter contrast-125 saturate-150"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}