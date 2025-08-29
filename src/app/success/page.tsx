"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SUCCESS_CONTENT = {
    fullText: 'CALL BOOKED',
    title: 'Your Application Is Complete & Your Session Is Scheduled',
    image: '/matej-avatar.png',
    paragraphs: [
        'Thanks for scheduling your breakthrough strategy session.',
        'I have sent you confirmation of your call time and date via email, please make sure that you put this in your calendar right now.',
        'I will call you via Zoom at the precise time that you selected. If you are more than 5 minutes late the call will be cancelled and you will not be able to reschedule another one.',
        'Please make sure that you are in a quiet room and do not take the call from your car, airport or any other noisy place. If you take the call in a noisy location we will cancel the call with you and not allow you to reschedule another one.',
        'I look forward to helping you explode your business and achieve massive success!'
    ],
    signature: '-Matej'
};

export default function SuccessPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [confettiParticles, setConfettiParticles] = useState<Array<{
        id: number;
        x: number;
        color: string;
        duration: number;
        delay: number;
    }>>([]);

    useEffect(() => {
        setIsLoaded(true);

        // Typing effect
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < SUCCESS_CONTENT.fullText.length) {
                setTypedText(SUCCESS_CONTENT.fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        // Confetti effect with slight delay to ensure CSS is loaded
        setTimeout(() => {
            const particles = Array.from({ length: 50 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                color: ['var(--hot-pink)', 'var(--neon-cyan)', 'var(--acid-green)', 'var(--electric-purple)'][Math.floor(Math.random() * 4)],
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2
            }));
            setConfettiParticles(particles);
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="min-h-screen  overflow-hidden">
            <Header hideNavigation />
            <main className="relative">
                {/* Confetti animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {confettiParticles.map((particle) => (
                        <div
                            key={particle.id}
                            className="absolute w-2 h-2"
                            style={{
                                left: `${particle.x}%`,
                                top: '-10px',
                                backgroundColor: particle.color,
                                animation: `fall ${particle.duration}s linear infinite`,
                                animationDelay: `${particle.delay}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Success animation background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-acid-green/30 to-hot-pink/30 rounded-full blur-3xl animate-pulse" />
                </div>
                <div className="relative z-10 container mx-auto px-6 py-8 md:py-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Success header with typing effect */}
                        <div className={`
                            text-center mb-8 transition-all duration-1000 ease-out
                            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                        `}>
                            <div className="text-4xl md:text-6xl font-display font-black text-acid-green mb-3">
                                {typedText}
                                <span className="animate-pulse">_</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-body text-center leading-tight text-chrome-silver/90">
                                {SUCCESS_CONTENT.title}
                            </h1>
                        </div>

                        {/* Content grid */}
                        <div className={`
                            grid md:grid-cols-12 gap-8 items-start
                            transition-all duration-1000 ease-out delay-500
                            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            {/* Avatar section */}
                            <div className="md:col-span-4 relative">
                                <div className="relative mx-auto w-fit">
                                    {/* Holographic effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-electric-purple/50 to-hot-pink/50 blur-xl animate-pulse" />

                                    {/* Frame layers */}
                                    <div className="absolute -inset-3 border-2 border-neon-cyan transform rotate-3" />
                                    <div className="absolute -inset-2 border-2 border-acid-green transform -rotate-2" />
                                    <div className="absolute -inset-1 border-2 border-hot-pink transform rotate-1" />

                                    <Image
                                        src={SUCCESS_CONTENT.image}
                                        alt="User Avatar"
                                        width={200}
                                        height={200}
                                        className="filter contrast-125 saturate-150"
                                    />
                                </div>
                            </div>

                            {/* Message content */}
                            <div className="md:col-span-8 space-y-4">
                                {SUCCESS_CONTENT.paragraphs.map((paragraph, index) => (
                                    <div
                                        key={index}
                                        className="relative"
                                        style={{
                                            animation: `slideInRight 0.8s ease-out ${0.7 + index * 0.1}s both`,
                                        }}
                                    >
                                        {/* Message container */}
                                        <p className="text-chrome-silver/80 text-base leading-relaxed">
                                            {paragraph}
                                        </p>

                                    </div>
                                ))}

                                <p className="text-xl font-accent">
                                    {SUCCESS_CONTENT.signature}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer hideNavigation />
        </div>
    );
}