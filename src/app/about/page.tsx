"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ABOUT_CONTENT = {
    title: `About Matej Pacan`,
    imageSrc: '/matej.webp',
    paragraphs: [
        'Matej Pacan is a Slovak software entrepreneur who built one of the largest educational platforms in programming, teaching over 4,000 students while serving 1.2 million customers across his SaaS products.',
        'As CEO of MineAcademy.org and Co-Founder of VibeToExit.com, Matej transformed from a teenage coder to a successful entrepreneur, building software that generated revenue from 80+ countries and helping students land $100,000-$150,000 programming jobs.',
        'Today, Matej helps aspiring entrepreneurs build and scale profitable SaaS businesses using his proven systems. His expertise spans from product development to team building, having grown his ventures to 12+ employees while maintaining partnerships with Microsoft, JetBrains, and FounderPass.'
    ],
    ctaText: 'FREE Case Study',
    ctaLink: '/case-study'
};

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <div className="min-h-screen">
            <Header />
            <main className="relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                                linear-gradient(var(--electric-purple) 1px, transparent 1px),
                                linear-gradient(90deg, var(--electric-purple) 1px, transparent 1px)
                            `,
                        backgroundSize: '100px 100px',
                    }}
                />
                <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center min-h-[70vh]">
                        <div className="mb-4 lg:mb-0">
                            <div className={`
                                mb-10 lg:mb-12 transition-all duration-1000 ease-out
                                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                            `}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-chrome-silver">
                                    {ABOUT_CONTENT.title}
                                </h1>
                                <div className="mt-6 h-1 bg-gradient-to-r from-acid-green via-electric-purple to-hot-pink" />
                            </div>
                            <div className="space-y-6 lg:space-y-8">
                                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                                    <div
                                        key={index}
                                        className={`
                                        relative transition-all duration-1000 ease-out
                                        ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                                    `}
                                        style={{
                                            transitionDelay: `${300 + index * 150}ms`,
                                        }}
                                    >
                                        <p className="text-base md:text-lg font-body text-chrome-silver/90 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className={`
                                relative mt-6 transition-all duration-1000 ease-out delay-700
                                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                                <Link href={ABOUT_CONTENT.ctaLink} className="group relative inline-block">
                                    <div className="absolute inset-0 bg-hot-pink transform translate-x-2 translate-y-2" />
                                    <div className="absolute inset-0 bg-electric-purple transform translate-x-1 translate-y-1" />
                                    <div className="relative bg-deep-black border-2 border-neon-cyan px-5 py-2.5 overflow-hidden group-hover:border-acid-green transition-colors duration-300 active:animate-[buttonPress_0.2s_ease-in-out]">
                                        <span className="relative z-10 text-base md:text-lg font-tech uppercase tracking-wider text-neon-cyan group-hover:text-acid-green transition-colors duration-300">
                                            {ABOUT_CONTENT.ctaText}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-acid-green/20 to-neon-cyan/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div className={`
                                relative transition-all duration-1000 ease-out delay-500
                                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                                <div className="max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto lg:mx-0">
                                    <Image
                                        src={ABOUT_CONTENT.imageSrc}
                                        alt="Portrait"
                                        width={450}
                                        height={675}
                                        className="w-full h-auto filter contrast-125 saturate-150"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}