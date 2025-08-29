import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    keywords: siteConfig.seo.keywords,
    openGraph: {
        title: siteConfig.seo.defaultTitle,
        description: siteConfig.seo.defaultDescription,
        images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : [],
    },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const gtmId = siteConfig.analytics?.googleTagManagerId;

    return (
        <html lang="en">
            {gtmId && process.env.NODE_ENV === 'production' && (
                <GoogleTagManager gtmId={gtmId} />
            )}
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
