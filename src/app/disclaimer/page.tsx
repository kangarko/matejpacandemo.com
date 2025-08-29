"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";

export default function DisclaimerPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen ">
            <Header />
            <main className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `
                                linear-gradient(var(--chrome-silver) 0.5px, transparent 0.5px),
                                linear-gradient(90deg, var(--chrome-silver) 0.5px, transparent 0.5px)
                            `,
                            backgroundSize: '100px 100px',
                            transform: 'perspective(1000px) rotateX(60deg)',
                            transformOrigin: 'center top',
                        }}
                    />
                    <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-hot-pink/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-electric-purple/10 to-transparent rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 container mx-auto px-6 py-8 md:py-12">
                    <div className={`
                        mb-10 transition-all duration-1000 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                    `}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-chrome-silver">
                            Disclaimer Policy
                        </h1>
                        <div className="mt-6 h-1 bg-gradient-to-r from-acid-green via-electric-purple to-hot-pink" />
                    </div>
                    <div className={`
                        prose prose-lg prose-invert max-w-4xl mx-auto
                        transition-all duration-1000 ease-out delay-300
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                    `}>

                        <p>{siteConfig.brand.name} does not promise or guarantee your financial success, guarantee you any specific outcome, nor warrant any earning claims made for their products. Your results will vary and depend on many factors that are unique to you including passion, business acumen, work ethic, and more. All business entails risk as well as consistent effort and action. Good luck and let&apos;s have fun!</p>
                        <h2>Earnings Disclaimer</h2>
                        <p>Earnings and income representations made by {siteConfig.brand.name}, and their advertisers/sponsors (collectively, &quot;{siteConfig.brand.name} Programs&quot;) are aspirational statements only of your earnings potential. The success of {siteConfig.brand.name}, testimonials, and other examples used are exceptional, non-typical results and are not intended to be and are not a guarantee that you or others will achieve the same results. Individual results will always vary and yours will depend entirely on your individual capacity, work ethic, business skills and experience, background experience, level of motivation, diligence in applying the {siteConfig.brand.name} Programs, the economy, the normal and unforeseen risks of doing business, and other factors. All business entails financial risk as well as massive and consistent effort and action. You should carefully consider this before investing any money into our programs.</p>
                        <h2>Business Opportunity</h2>
                        <p>{siteConfig.brand.name} and associated free training are NOT considered an income or business opportunity according to the Business Opportunity Rule § 437.1m; &quot;that advertising and general advice about business development and training shall not be considered as &apos;providing locations, outlets, accounts, or customers.&apos;&quot;</p>
                        <p>{siteConfig.brand.name} is a coaching and training company. We do not sell a business opportunity, &quot;get rich quick&quot; program or money-making system. We believe, with education, individuals can be better prepared to make investment decisions, but we do not guarantee success in our training. We do not make earnings claims, efforts claims, or claims that our training will make you any money. All material is intellectual property and protected by copyright. Any duplication, reproduction, or distribution is strictly prohibited.</p>
                        <p>Investing of any kind carries risk and it is possible to lose some or all of your money. The training provided is general in nature, and some strategies may not be appropriate for all individuals or all situations. We make no representation regarding the likelihood or probability that any actual or hypothetical business activity will achieve a particular outcome or perform in any predictable manner.</p>
                        <h2>Average Expected Outcome/Typical Results</h2>
                        <p>The most impressive testimonials represent the top 1-2% of clients. Top testimonials are not typical results. The average person who dedicates at least 10+ hours of deeply focused work per week to their business and follows all instructions as directed by the program and coaches can generally expect to see results, but outcomes vary significantly. Take-home profit margins and income can vary significantly depending on many factors, including your work ethic, ability to focus, natural business acumen, passion for your business, and more. There is absolutely no guarantee of a specific outcome. Our most exceptional students have achieved revenue far exceeding the average. These instances, however, are exceptional and represent the top 1% of our clients. Such exceptional results are typically attributed to top-tier work ethic, business acumen, passion, and dedication.</p>
                        <p>This is not a get rich quick program nor do we believe in overnight success. We believe in hard work, integrity, and developing your skills if you want to earn more financially. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with any of our products or services, or the products and services we recommend. The average person who buys any &quot;how-to&quot; information gets little to no results. Any references or examples used within this page, or by someone on this page or video, are real and documented but are used strictly for example purposes only. Your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you&apos;re not willing to accept that, please DO NOT PURCHASE ANY PRODUCTS FROM US.</p>
                        <h2>Testimonials and Examples</h2>
                        <p>Statements and depictions are the opinions, findings, or experiences of individuals who generally have purchased education and training. Results vary, are not typical, and rely on individual effort, time, and skill, as well as unknown conditions and other factors. We track satisfaction of services by voluntary surveys in our training. You should not, however, equate satisfied customers with financial success. Further, many customers do not continue with the program, do not apply what they learn, or do attempt to apply what they learn but nonetheless have difficulty in building a business.</p>
                        <h2>Not Affiliated with Google or Facebook</h2>
                        <p>This site is not a part of the Google website, Google Inc, Facebook/Meta website, or Meta, Inc. Additionally, this site is NOT endorsed by Google or Meta in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                        <h2>Liability Disclaimer</h2>
                        <p>{siteConfig.brand.name} is not responsible for your actions. You are solely responsible for your own moves and decisions and the evaluation and use of our products and services should be based on your own due diligence. You agree that {siteConfig.brand.name} is not liable to you in any way for your results in using our products and services. See our Terms & Conditions for our full disclaimer of liability and other restrictions.</p>
                        <p>By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information. In addition, for all intents and purposes you agree that our content is to be considered &quot;for entertainment purposes only&quot;. Always seek the advice of a professional when making financial, tax, or business decisions.</p>
                        <h2>Multi-Level Marketing</h2>
                        <p>This business is NOT advertising a multi-level marketing or network marketing business, as it does not fit the koscot test under FTC law.</p>
                        <h2>Contact</h2>
                        <p>If you have any questions about this disclaimer, please contact us at {siteConfig.contact.email}.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}