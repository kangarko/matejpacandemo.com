"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config";

interface HeaderProps {
    hideNavigation?: boolean;
}

export default function Header({ hideNavigation = false }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative border-b border-chrome-silver/10">
            <div className="container mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
                <Link href="/" className={`group ${hideNavigation ? 'pointer-events-none' : ''}`}>
                    <span className="text-2xl font-display font-black tracking-wider text-chrome-silver hover:text-neon-cyan transition-colors duration-300">
                        {siteConfig.brand.name.toUpperCase()}
                    </span>
                </Link>

                {!hideNavigation && (
                    <>
                        <nav className="hidden lg:flex items-center space-x-4">
                            {siteConfig.navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-6 py-3 font-tech text-sm uppercase tracking-wider border transition-all duration-300
                                        ${item.highlight
                                            ? 'text-acid-green border-acid-green hover:bg-acid-green/20'
                                            : 'text-chrome-silver border-chrome-silver/30 hover:border-neon-cyan hover:text-neon-cyan'}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden w-8 h-8 flex flex-col justify-center space-y-1.5">
                            <span className={`block w-full h-0.5 bg-neon-cyan transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-full h-0.5 bg-neon-cyan transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-full h-0.5 bg-neon-cyan transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </>
                )}
            </div>

            {!hideNavigation && isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-deep-black/95" onClick={() => setIsMenuOpen(false)}>
                    <nav className="bg-deep-black border-l border-neon-cyan/30 h-full w-full max-w-sm ml-auto p-8 pt-16 relative" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full border border-chrome-silver/30 hover:border-neon-cyan transition-colors duration-300"
                            aria-label="Close menu"
                        >
                            <span className="sr-only">Close</span>
                            <svg className="w-6 h-6 text-chrome-silver hover:text-neon-cyan transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {siteConfig.navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-4 font-tech text-lg uppercase tracking-wider border-b border-chrome-silver/10
                                    ${item.highlight ? 'text-acid-green' : 'text-chrome-silver hover:text-neon-cyan'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}