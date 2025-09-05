"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Vimeo from '@u-wave/react-vimeo';
import { PlayCircle } from "lucide-react";

const VIDEO_CONTENT = {
    videoType: 'vimeo', // 'wistia' or 'vimeo'
    wistiaId: 'la8ej3t2vw',
    vimeoId: '1116184323',
    stepOne: {
        fullTitle: 'Step One: Watch This New Case Study Right Now',
    },
    stepTwo: {
        fullTitle: 'Step Two: Apply Now To See If You Qualify',
        description: 'Now that you\'ve absorbed all the cool training above, if you feel you\'re ready to STEP UP and move forwards fast with your business then apply now and let\'s see how I can help EXPLODE your business by clicking below now...',
        buttonText: 'Apply Now To See If You Qualify',
        buttonIcon: '»',
        buttonLink: '/schedule'
    },
};

export default function VideoPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [vimeoPlaying, setVimeoPlaying] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen ">
            <Header hideNavigation />
            <main className="relative overflow-hidden container mx-auto px-6 py-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-96 bg-gradient-to-r from-transparent via-electric-purple/10 to-transparent transform rotate-12 blur-3xl pointer-events-none" />
                <h1 className={`
                        text-3xl md:text-5xl font-display font-black text-center mb-8 text-chrome-silver
                        transition-all duration-1000 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                    `}>
                    {VIDEO_CONTENT.stepOne.fullTitle}
                </h1>
                <div className={`
                        relative mb-55 max-w-5xl mx-auto transition-all duration-1000 ease-out delay-300
                        ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    `}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-hot-pink/20 via-electric-purple/20 to-neon-cyan/20 blur-xl" />
                    <div className="relative bg-deep-black border-2 border-chrome-silver/30 p-1">
                        <div className="relative" style={{ paddingBottom: '56.25%' }}>
                            <div className="absolute inset-0">
                                {VIDEO_CONTENT.videoType === 'wistia' ? (
                                    <WistiaPlayer
                                        mediaId={VIDEO_CONTENT.wistiaId}
                                        aspect={16 / 9}
                                        playerColor="#1a1a1a"
                                        volumeControl={true}
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        {vimeoPlaying ? (
                                            <Vimeo
                                                key="vimeo-playing"
                                                video={VIDEO_CONTENT.vimeoId}
                                                responsive
                                                autoplay
                                                muted={false}
                                                controls={true}
                                            />
                                        ) : (
                                            <>
                                                <Vimeo
                                                    key="vimeo-preview"
                                                    video={VIDEO_CONTENT.vimeoId}
                                                    responsive
                                                    autoplay
                                                    loop
                                                    muted
                                                    background
                                                />
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/40 transition-colors duration-300"
                                                    onClick={() => setVimeoPlaying(true)}
                                                >
                                                    <PlayCircle className="w-24 h-24 text-white/90 hover:text-white hover:scale-110 transition-all duration-300" />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`
                        text-center transition-all duration-1000 ease-out delay-500
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}>
                    <h2 className="text-2xl md:text-4xl font-tech mb-6 text-chrome-silver">
                        {VIDEO_CONTENT.stepTwo.fullTitle}
                    </h2>
                    <p className="text-chrome-silver/80 text-base max-w-3xl mx-auto mb-8 leading-relaxed">
                        {VIDEO_CONTENT.stepTwo.description}
                    </p>
                    <Link
                        href={VIDEO_CONTENT.stepTwo.buttonLink}
                        className="group relative inline-block"
                    >
                        <div className="absolute -inset-8 bg-gradient-to-r from-hot-pink/30 via-electric-purple/30 to-neon-cyan/30 blur-2xl animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-r from-hot-pink to-electric-purple transform translate-x-3 translate-y-3 skew-x-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-acid-green transform translate-x-2 translate-y-2 -skew-x-6 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-hot-pink transform translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                        <div className="relative bg-deep-black border-2 border-acid-green px-10 py-5 overflow-hidden active:animate-[buttonPress_0.2s_ease-in-out]">
                            <span className="relative z-10 text-xl md:text-2xl font-tech uppercase tracking-wider text-acid-green  transition-colors duration-300 flex items-center gap-4">
                                {VIDEO_CONTENT.stepTwo.buttonText}
                                <span className="text-4xl animate-pulse">{VIDEO_CONTENT.stepTwo.buttonIcon}</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-acid-green/20 to-hot-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-hot-pink" />
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-neon-cyan" />
                    </Link>
                    <div className="mt-10 flex justify-center items-center gap-8">
                        <div className="h-px w-32 bg-gradient-to-r from-transparent to-chrome-silver/30" />
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-acid-green rounded-full animate-pulse" />
                            <div className="w-2 h-2 bg-hot-pink rounded-full animate-pulse animation-delay-200" />
                            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse animation-delay-400" />
                        </div>
                        <div className="h-px w-32 bg-gradient-to-l from-transparent to-chrome-silver/30" />
                    </div>
                </div>
            </main>
            <Footer hideNavigation />
        </div>
    );
}