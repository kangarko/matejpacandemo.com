import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config";

interface FooterProps {
    hideNavigation?: boolean;
}

export default function Footer({ hideNavigation = false }: FooterProps) {
    if (!hideNavigation && (!siteConfig.navigation || !Array.isArray(siteConfig.navigation) || siteConfig.navigation.length === 0))
        throw new Error('siteConfig.navigation is missing or empty');

    if (!siteConfig.footer || !siteConfig.footer.copyright)
        throw new Error('siteConfig.footer.copyright is missing');

    return (
        <footer className="relative mt-12">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-deep-black to-transparent" />
            </div>
            <div className="relative z-10 container mx-auto px-6 py-8">
                <div className={`grid grid-cols-1 ${hideNavigation ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 items-center text-center md:text-left`}>
                    {/* Brand and Copyright */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-display font-bold text-chrome-silver mb-2">
                            {siteConfig.brand.name}
                        </h3>
                        <p className="text-chrome-silver/50 font-mono text-xs">
                            {siteConfig.footer.copyright}
                        </p>
                    </div>

                    {/* Navigation */}
                    {!hideNavigation && (
                        <nav className="md:col-span-1 flex justify-center items-center gap-6 text-sm">
                            {siteConfig.navigation.map((item) => {
                                if (!item || !item.href || !item.label)
                                    throw new Error('Invalid navigation item in siteConfig.navigation');

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative font-tech uppercase tracking-wider transition-colors duration-300
                                            ${item.highlight ? 'text-acid-green hover:text-white' : 'text-chrome-silver/70 hover:text-white'}`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    )}

                    {/* Legal Links */}
                    <div className={`${hideNavigation ? 'md:col-span-1' : 'md:col-span-1'} flex justify-center md:justify-end items-center gap-4 text-xs font-mono uppercase text-chrome-silver/50`}>
                        <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <span>/</span>
                        <Link href="/terms" className="hover:text-white transition-colors duration-300">
                            Terms
                        </Link>
                        <span>/</span>
                        <Link href="/disclaimer" className="hover:text-white transition-colors duration-300">
                            Disclaimer
                        </Link>
                    </div>
                </div>
                <p className="mt-6 text-center text-xs text-chrome-silver/40 max-w-3xl mx-auto font-body">
                    This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                </p>
            </div>
        </footer>
    );
}