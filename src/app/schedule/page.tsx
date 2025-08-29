"use client";

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/config";

const SCHEDULE_CONTENT = {
    calendlyUrl: 'https://calendly.com/matejpacan/demo',
    title: 'Schedule Your Breakthrough Strategy Session With Matej Right Now',
};

export default function SchedulePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen ">
            <Header hideNavigation />
            <main className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                                linear-gradient(var(--electric-purple) 1px, transparent 1px),
                                linear-gradient(90deg, var(--electric-purple) 1px, transparent 1px)
                            `,
                            backgroundSize: '100px 100px',
                            animation: 'float 20s ease-in-out infinite',
                        }}
                    />
                </div>
                <div className="relative z-10 container mx-auto px-6 py-6 md:py-8">
                    <h1 className={`
                        text-3xl md:text-4xl lg:text-5xl font-display font-black text-center mb-10 max-w-4xl mx-auto
                        transition-all duration-1000 ease-out text-chrome-silver
                        ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    `}>
                        {SCHEDULE_CONTENT.title}
                    </h1>
                    <InlineWidget
                        url={SCHEDULE_CONTENT.calendlyUrl}
                        styles={{
                            height: '700px',
                            minWidth: '320px',
                        }}
                        pageSettings={{
                            backgroundColor: '0A0A0A',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: '00FFFF',
                            textColor: 'C0C0C0'
                        }}
                    />
                    <div className={`
                        mt-8 text-center transition-all duration-1000 ease-out delay-500
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-chrome-silver/5 backdrop-blur-sm rounded-full border border-chrome-silver/20">
                            <div className="w-2 h-2 bg-acid-green rounded-full animate-pulse" />
                            <p className="text-chrome-silver/80 font-body">
                                No suitable timeslots? Please contact {siteConfig.contact.email}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer hideNavigation />
        </div>
    );
}