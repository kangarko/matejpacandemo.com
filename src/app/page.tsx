"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const HOME_CONTENT = {
    hero: {
        imageSrc: '/hero.webp',
        headline: 'I help people start and grow profitable SaaS businesses',
        subheadlines: [
            'Software entrepreneur who went from teenage coder to CEO of MineAcademy.org, serving 1.2 million customers across 80+ countries.',
            'My name is Matej Pacan and I help aspiring entrepreneurs build, scale, and monetize educational technology and SaaS businesses.',
            'If you\'re interested in getting more customers with predictability click the button below to learn more.'
        ],
        ctaText: 'FREE Case Study',
        ctaLink: '/case-study'
    }
};

export default function Home() {
    const [typedText, setTypedText] = useState('');
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: number;
        shape: 'square' | 'circle';
        color: string;
        size: number;
        duration: number;
        delay: number;
    }>>([]);
    const fullText = HOME_CONTENT.hero.headline;

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setTypedText(fullText.substring(0, index));
            if (index++ >= fullText.length) clearInterval(timer);
        }, 50);

        // Create floating particles with shapes variation
        const particleArray = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            shape: Math.random() > 0.5 ? 'square' : 'circle' as 'square' | 'circle',
            color: ['var(--neon-cyan)', 'var(--electric-purple)', 'var(--hot-pink)'][Math.floor(Math.random() * 3)],
            size: 4 + Math.random() * 4,
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5
        }));
        setParticles(particleArray);

        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-5 md:px-6 md:py-6 relative">
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className={`absolute ${particle.shape === 'circle' ? 'rounded-full' : ''}`}
                            style={{
                                left: `${particle.x}%`,
                                top: '-20px',
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                backgroundColor: particle.color,
                                animation: `fall ${particle.duration}s linear infinite`,
                                animationDelay: `${particle.delay}s`,
                                opacity: 0.3
                            }}
                        />
                    ))}
                </div>
                {/* Mobile-optimized layout with floating image */}
                <div className="md:hidden">
                    <div className="flex items-center gap-3 mb-3">
                        <h1 className="flex-1 text-xl font-display font-black text-chrome-silver leading-tight animate-[slideInRight_0.8s_ease-out]">
                            {typedText}
                            <span className="animate-pulse text-acid-green">|</span>
                        </h1>
                        <div className="relative w-[150px] h-[150px] flex-shrink-0 animate-[slideInUp_0.8s_ease-out] items-start flex">
                            <Image
                                src={HOME_CONTENT.hero.imageSrc}
                                alt="Matej Pacan"
                                fill
                                priority
                                className="filter contrast-125 saturate-120 object-cover rounded-lg object-top"
                                sizes="150px"
                            />
                        </div>
                    </div>
                    <div className="space-y-2 mb-6">
                        {HOME_CONTENT.hero.subheadlines.map((text, index) => (
                            <p key={index} className="text-chrome-silver/80 leading-relaxed animate-[slideInUp_0.8s_ease-out] opacity-0"
                                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                                {text}
                            </p>
                        ))}
                    </div>
                    <Link href={HOME_CONTENT.hero.ctaLink} className="group relative inline-block overflow-hidden animate-[slideInUp_0.8s_ease-out] opacity-0 w-full"
                        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-hot-pink to-electric-purple translate-x-2 translate-y-2" />
                        <div className="relative bg-deep-black border-2 border-neon-cyan px-4 py-2 group-hover:border-acid-green transition-all duration-300 active:scale-[0.98] text-center">
                            <span className="text-sm font-tech uppercase tracking-wider text-neon-cyan group-hover:text-acid-green transition-colors">
                                {HOME_CONTENT.hero.ctaText}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop and tablet layout */}
                <div className="hidden md:grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="relative transform md:-rotate-6 lg:-rotate-12 max-w-[320px] sm:max-w-[380px] md:max-w-[510px] mx-auto lg:mx-0 animate-[slideInUp_0.8s_ease-out]">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                                <Image
                                    src={HOME_CONTENT.hero.imageSrc}
                                    alt="Hero Image"
                                    fill
                                    priority
                                    className="filter contrast-125 saturate-120 object-cover"
                                    sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 510px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 lg:pl-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-chrome-silver mb-3 animate-[slideInRight_0.8s_ease-out]">
                            {typedText}
                            <span className="animate-pulse text-acid-green">|</span>
                        </h1>
                        <div className="space-y-2 mb-4">
                            {HOME_CONTENT.hero.subheadlines.map((text, index) => (
                                <p key={index} className="text-chrome-silver/80 text-sm md:text-base animate-[slideInUp_0.8s_ease-out] opacity-0"
                                    style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}>
                                    {text}
                                </p>
                            ))}
                        </div>
                        <Link href={HOME_CONTENT.hero.ctaLink} className="group relative inline-block overflow-hidden animate-[slideInUp_0.8s_ease-out] opacity-0"
                            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-hot-pink to-electric-purple translate-x-2 translate-y-2" />
                            <div className="relative bg-deep-black border-2 border-neon-cyan px-5 py-2.5 group-hover:border-acid-green transition-all duration-300 active:scale-[0.98]">
                                <span className="text-base md:text-lg font-tech uppercase tracking-wider text-neon-cyan group-hover:text-acid-green transition-colors">
                                    {HOME_CONTENT.hero.ctaText}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}