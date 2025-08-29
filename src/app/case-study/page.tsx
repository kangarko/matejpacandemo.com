"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Target, Zap, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/config";

const CASE_STUDY_CONTENT = {
    subtitle: 'Case Study For Founders & SaaS Entrepreneurs:',
    headline: '"How I Get 200-300 SaaS Customers Every Month Without Spending A Dime On Paid Ads"',
    videoImage: '/case-study-thumbnail.jpg',
    bulletPoints: [
        'Why you need a niche and a \'proof of concept\'',
        'The secret weapon of all 7-figure SaaS founders',
        'The simple two-step orgamic system to get high value customers free'
    ],
    ctaButton: {
        text: 'Get Your Case Study Now'
    },
    modal: {
        headline: 'Enter your email to get instant access to the case study',
        namePlaceholder: 'Enter your name',
        emailPlaceholder: 'Enter your email address'
    }
};

export default function CaseStudyPage() {
    const [showModal, setShowModal] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [glitchActive, setGlitchActive] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();
    useEffect(() => {
        setIsLoaded(true);
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 5000);

        return () => clearInterval(glitchInterval);
    }, []);
    useEffect(() => {
        if (showModal)
            setIsModalVisible(true);
        else {
            const timer = setTimeout(() => setIsModalVisible(false), 500);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    const validateName = (name: string) => {
        const nameRegex = /^[\p{L}\s'-]+$/u;
        return nameRegex.test(name);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
        setIsNameValid(validateName(newName));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    };

    const capitalizeName = (name: string): string => {
        const exceptions = ['de', 'da', 'van', 'von', 'der', 'den', 'di', 'la', 'le', 'du', 'des', 'del', 'della', 'of', 'the', 'and'];
        const words = name.toLowerCase().split(/\s+/);

        return words.map((word, index) => {
            if (index === 0 || !exceptions.includes(word)) {
                return word.replace(/(?:^|\b)(\w)/g, match => match.toUpperCase());
            }
            return word;
        }).join(' ');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        if (!validateName(trimmedName) || !validateEmail(trimmedEmail))
            return;

        const capitalizedName = capitalizeName(trimmedName);

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/case-study-submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: capitalizedName, email: trimmedEmail }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to submit form');
            }

            router.push('/video');

        } catch (error) {
            console.error('Form submission error:', error);
            alert('Failed to submit form. Please try again. If the error persists, contact ' + siteConfig.contact.email);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen ">
            <Header hideNavigation />

            <main className="relative overflow-hidden mb-50">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(var(--hot-pink) 1px, transparent 1px),
                                linear-gradient(90deg, var(--hot-pink) 1px, transparent 1px)
                            `,
                            backgroundSize: '100px 100px',
                            opacity: 0.1,
                            transform: 'perspective(1000px) rotateX(30deg)',
                            transformOrigin: 'center center',
                        }}
                    />
                </div>
                <div className="relative z-10 container mx-auto px-6 py-12">
                    <p className={`
                        text-acid-green text-center mb-8 font-tech uppercase tracking-wider text-sm
                        transition-all duration-1000 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
                        ${glitchActive ? 'glitch' : ''}
                    `} data-text={CASE_STUDY_CONTENT.subtitle}>
                        {CASE_STUDY_CONTENT.subtitle}
                    </p>
                    <h1 className={`
                        text-2xl md:text-4xl lg:text-5xl font-display font-black text-center mb-16
                        leading-tight transition-all duration-1000 ease-out delay-200 text-chrome-silver max-w-4xl mx-auto
                        ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    `}>
                        {CASE_STUDY_CONTENT.headline}
                    </h1>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`
                            relative transition-all duration-1000 ease-out delay-400
                            ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        `}>
                            <div className="relative group max-w-lg mx-auto lg:ml-auto lg:mr-0">
                                <div className="absolute -inset-4 bg-gradient-to-br from-neon-cyan to-electric-purple opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300" />
                                <div className="absolute -inset-2 bg-gradient-to-br from-hot-pink to-acid-green transform rotate-1" />
                                <div className="absolute -inset-1 bg-deep-black transform -rotate-1" />
                                <div className="relative overflow-hidden border-2 border-neon-cyan">
                                    <Image
                                        src={CASE_STUDY_CONTENT.videoImage}
                                        alt="Video Thumbnail"
                                        width={600}
                                        height={333}
                                        className="w-full h-auto filter"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`
                            relative transition-all duration-1000 ease-out delay-600 px-8
                            ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                        `}>
                            <h3 className="text-xl font-tech uppercase  mb-6 tracking-wider">
                                FREE Case Study Reveals:
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {CASE_STUDY_CONTENT.bulletPoints.map((point, index) => {
                                    const icons = [Target, Zap, TrendingUp];
                                    const Icon = icons[index];

                                    return (
                                        <li key={index} className="relative text-chrome-silver text-base flex items-start gap-3">
                                            <Icon
                                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                                                style={{ color: 'var(--acid-green, #10B981)' }}
                                            />
                                            <span>{point}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <button
                                onClick={() => setShowModal(true)}
                                className="group relative overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-hot-pink to-electric-purple transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="relative bg-deep-black border-2 border-neon-cyan py-3 px-5 overflow-hidden group-hover:border-acid-green transition-colors duration-300 active:animate-[buttonPress_0.2s_ease-in-out]">
                                    <span className="relative z-10 text-lg font-tech uppercase tracking-wider text-neon-cyan  transition-colors duration-300 flex items-center justify-center gap-4">
                                        {CASE_STUDY_CONTENT.ctaButton.text}
                                        <span className="text-2xl animate-pulse">»</span>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-acid-green/20 to-neon-cyan/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </div>
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-acid-green" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-acid-green" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>


            {isModalVisible && (
                <>
                    <div
                        className={`fixed inset-0 bg-deep-black/95 backdrop-blur-md z-40 transition-opacity duration-500 ${showModal ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={() => setShowModal(false)}
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <div
                            className={`
                                relative border-2 max-w-2xl w-full p-12 bg-deep-black border-neon-cyan
                                transform transition-all duration-700 ease-out pointer-events-auto
                                shadow-[0_0_50px_rgba(0,255,255,0.3)]
                                ${showModal
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 -translate-y-full'
                                }
                            `}
                            style={{
                                backgroundColor: 'var(--deep-black, white)',
                                borderColor: 'var(--neon-cyan, #000)'
                            }}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-2xl text-hot-pink hover:text-acid-green transition-colors duration-300 cursor-pointer"
                                style={{
                                    color: 'var(--hot-pink, #000)'
                                }}
                            >
                                ×
                            </button>
                            <h2 className="text-2xl md:text-3xl font-display font-black mb-6 text-center text-chrome-silver"
                                style={{
                                    color: 'var(--chrome-silver, #000)'
                                }}
                            >
                                {CASE_STUDY_CONTENT.modal.headline}
                            </h2>
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleNameChange}
                                        placeholder={CASE_STUDY_CONTENT.modal.namePlaceholder}
                                        className="w-full px-6 py-4 bg-deep-black border-2 border-chrome-silver/50 text-chrome-silver font-body text-lg focus:outline-none focus:border-neon-cyan transition-colors duration-300 disabled:opacity-60"
                                        style={{
                                            backgroundColor: 'var(--deep-black, white)',
                                            borderColor: 'var(--chrome-silver, #ccc)',
                                            color: 'var(--chrome-silver, #000)'
                                        }}
                                        required
                                        autoFocus
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="relative mb-6">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder={CASE_STUDY_CONTENT.modal.emailPlaceholder}
                                        className="w-full px-6 py-4 bg-deep-black border-2 border-chrome-silver/50 text-chrome-silver font-body text-lg focus:outline-none focus:border-neon-cyan transition-colors duration-300 disabled:opacity-60"
                                        style={{
                                            backgroundColor: 'var(--deep-black, white)',
                                            borderColor: 'var(--chrome-silver, #ccc)',
                                            color: 'var(--chrome-silver, #000)'
                                        }}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group relative w-full overflow-hidden cursor-pointer disabled:cursor-not-allowed"
                                    disabled={isSubmitting || !isNameValid || !isEmailValid}
                                >
                                    <div className="relative bg-deep-black border-2 py-4 px-6 overflow-hidden transition-all duration-300 active:animate-[buttonPress_0.2s_ease-in-out]"
                                        style={{
                                            backgroundColor: isNameValid && isEmailValid ? 'var(--acid-green, #10B981)' : 'var(--deep-black, #000)',
                                            borderColor: isNameValid && isEmailValid ? 'var(--acid-green, #10B981)' : 'var(--electric-purple, #000)',
                                            color: isNameValid && isEmailValid ? 'var(--deep-black, #000)' : 'var(--electric-purple, white)',
                                            opacity: isSubmitting ? 0.8 : 1
                                        }}
                                    >
                                        <span className="relative z-10 text-lg font-tech uppercase tracking-wider flex items-center justify-center gap-3">
                                            {isSubmitting ? (
                                                <>
                                                    <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                    SUBMITTING...
                                                </>
                                            ) : (
                                                <>
                                                    ACCESS NOW
                                                    <span className="text-xl">»</span>
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}

            <Footer hideNavigation />
        </div>
    );
}