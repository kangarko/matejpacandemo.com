"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";

export default function PrivacyPage() {
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
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tl from-acid-green/10 to-transparent rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 container mx-auto px-6 py-8 md:py-12">
                    <div className={`
                        mb-10 transition-all duration-1000 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                    `}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-chrome-silver">
                            Privacy Policy
                        </h1>
                        <div className="mt-6 h-1 bg-gradient-to-r from-acid-green via-electric-purple to-hot-pink" />
                    </div>
                    <div className={`
                        prose prose-lg prose-invert max-w-4xl mx-auto
                        transition-all duration-1000 ease-out delay-300
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                    `}>

                        <p>{siteConfig.brand.name} understands that your privacy is important to you. We are committed to protecting the privacy of your personally-identifiable information as you use this website. This Privacy Policy tells you how we protect and use information that we gather from you. By using this website, you consent to the terms described in the most recent version of this Privacy Policy. You should also read our Terms of Use to understand the general rules about your use of this website, and any additional terms that may apply when you access particular services or materials on certain areas of this website. &quot;We,&quot; &quot;our&quot; means {siteConfig.brand.name} and its affiliates. &quot;You,&quot; &quot;your,&quot; visitor,&quot; or &quot;user&quot; means the individual accessing this site.</p>
                        <h2>PERSONAL AND NON-PERSONAL INFORMATION</h2>
                        <p>Our Privacy Policy identifies how we treat your personal and non-personal information.</p>
                        <h2>WHAT IS NON-PERSONAL INFORMATION AND HOW IS IT COLLECTED AND USED?</h2>
                        <p>Non personal information is information that cannot identify you. If you visit this web site to read information, such as information about one of our services, we may collect certain non-personal information about you from your computer&apos;s web browser. Because non-personal information cannot identify you or be tied to you in any way, there are no restrictions on the ways that we can use or share non-personal information. What is personal information and how is it collected? Personal information is information that identifies you as an individual, such as your name, mailing address, e-mail address, telephone number, and fax number. We may collect personal information from you in a variety of ways: • When you send us an application or other form • When you conduct a transaction with us, our affiliates, or others • When we collect information about in you in support of a transaction, such as credit card information • In some places on this web site you have the opportunity to send us personal information about yourself, to elect to receive particular information, to purchase access to one of our products or services, or to participate in an activity.</p>
                        <h2>ARE COOKIES OR OTHER TECHNOLOGIES USED TO COLLECT PERSONAL INFORMATION?</h2>
                        <p>Yes, we may use cookies and related technologies, such as web beacons, to collect information on our web site. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you register with us, a cookie helps {siteConfig.brand.name} to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same {siteConfig.brand.name} website, the information you previously provided can be retrieved, so you can easily use the features that you customized. A web beacon is a small graphic image that allows the party that set the web beacon to monitor and collect certain information about the viewer of the web page, web-based document or e-mail message, such as the type of browser requesting the web beacon, the IP address of the computer that the web beacon is sent to and the time the web beacon was viewed. Web beacons can be very small and invisible to the user, but, in general, any electronic image viewed as part of a web page or e-mail, including HTML based content, can act as a web beacon. We may use web beacons to count visitors to the web pages on the web site or to monitor how our users navigate the web site, and we may include web beacons in e-mail messages in order to count how many messages sent were actually opened, acted upon or forwarded.</p>
                        <p>Third party vendors also may use cookies on our web site. For instance, we may contract with third parties who will use cookies on our web site to track and analyze anonymous usage and volume statistical information from our visitors and members. Such information is shared externally only on an anonymous, aggregated basis. These third parties use persistent cookies to help us to improve the visitor experience, to manage our site content, and to track visitor behaviour. We may also contract with a third party to send e-mail to our registered users/members.</p>
                        <p>To help measure and improve the effectiveness of our e-mail communications, the third party sets cookies. All data collected by this third party on behalf of {siteConfig.brand.name} is used solely by or on behalf of {siteConfig.brand.name} and is shared externally only on an anonymous, aggregated basis. From time to time we may allow third parties to post advertisements on our web site, and those third-party advertisements may include a cookie or web beacon served by the third party. This Privacy Policy does not cover the use of information collected from you by third party ad servers. We do not control cookies in such third party ads, and you should check the privacy policies of those advertisers and/or ad services to learn about their use of cookies and other technology before linking to an ad. We will not share your personal information with these companies, but these companies may use information about your visits to this and other web sites in order to provide advertisements on this site and other sites about goods and services that may be of interest to you, and they may share your personal information that you provide to them with others.</p>
                        <p>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the {siteConfig.brand.name} websites you visit.</p>
                        <h2>HOW DOES {siteConfig.brand.name} USE PERSONAL INFORMATION?</h2>
                        <p>{siteConfig.brand.name} may keep and use personal information we collect from or about you to provide you with access to this web site or other products or services, to respond to your requests, to bill you for products/services you purchased, and to provide ongoing service and support, to contact you with information that might be of interest to you, including information about products and services of ours and of others, or ask for your opinion about our products or the products of others, for record keeping and analytical purposes and to research, develop and improve programs, products, services and content.</p>
                        <p>Personal information collected online may be combined with information you provide to us through other sources We may also remove your personal identifiers (your name, email address, social security number, etc). In this case, you would no longer be identified as a single unique individual. Once we have de-identified information, it is non-personal information and we may treat it like other non-personal information. Finally, we may use your personal information to protect our rights or property, or to protect someone&apos;s health, safety or welfare, and to comply with a law or regulation, court order or other legal process.</p>
                        <h2>DOES {siteConfig.brand.name} SHARE PERSONAL INFORMATION WITH OTHERS?</h2>
                        <p>We will not share your personal information collected from this web site with an unrelated third party without your permission, except as otherwise provided in this Privacy Policy. In the ordinary course of business, we may share some personal information with companies that we hire to perform services or functions on our behalf. In all cases in which we share your personal information with a third party for the purpose of providing a service to us, we will not authorize them to keep, disclose or use your information with others except for the purpose of providing the services we asked them to provide.</p>
                        <p>We will not sell, exchange or publish your personal information, except in conjunction with a corporate sale, merger, dissolution, or acquisition. For some sorts of transactions, in addition to our direct collection of information, our third party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect personal information directly from you to assist you with your transaction. We do not control how these third parties use such information, but we do ask them to disclose how they use your personal information before they collect it.</p>
                        <p>If you submit a review for a third party (person or business) using our Facebook Fan Review Application, during the submission process we ask your permission to gather your basic information (such as name and email address) which we then share with the third party for whom you are submitting the review. We may be legally compelled to release your personal information in response to a court order, subpoena, search warrant, law or regulation.</p>
                        <p>We may cooperate with law enforcement authorities in investigating and prosecuting web site visitors who violate our rules or engage in behavior, which is harmful to other visitors (or illegal). We may disclose your personal information to third parties if we feel that the disclosure is necessary to protect our rights or property, protect someone&apos;s health, safety or welfare, or to comply with a law or regulation, court order or other legal process. As discussed in the section on cookies and other technologies, from time to time we may allow a third party to serve advertisements on this web site.</p>
                        <p>If you share information with the advertiser, including by clicking on their ads, this Privacy Policy does not control the advertisers use of your personal information, and you should check the privacy policies of those advertisers and/or ad services to learn about their use of cookies and other technology before linking to an ad.</p>
                        <h2>HOW IS PERSONAL INFORMATION USED FOR COMMUNICATIONS?</h2>
                        <p>We may contact you periodically by e-mail, mail or telephone to provide information regarding programs, products, services and content that may be of interest to you. In addition, some of the features on this web site allow you to communicate with us using an online form. If your communication requests a response from us, we may send you a response via e-mail. The e-mail response or confirmation may include your personal information. We cannot guarantee that our e-mails to you will be secure from unauthorized interception.</p>
                        <h2>HOW IS PERSONAL INFORMATION SECURED?</h2>
                        <p>We have implemented generally accepted standards of technology and operational security in order to protect personally-identifiable information from loss, misuse, alteration, or destruction. Only authorized personnel and third party vendors have access to your personal information, and these employees and vendors are required to treat this information as confidential. Despite these precautions, we cannot guarantee that unauthorized persons will not obtain access to your personal information.</p>
                        <h2>LINKS</h2>
                        <p>This site contains links to other sites that provide information that we consider to be interesting. {siteConfig.brand.name} is not responsible for the privacy practices or the content of such web sites.</p>
                        <h2>PUBLIC DISCUSSIONS</h2>
                        <p>This site may provide public discussions on various business valuation topics. Please note that any information you post in these discussions will become public, so please do not post sensitive information in the public discussions. Whenever you publicly disclose information online, that information could be collected and used by others. We are not responsible for any action or policies of any third parties who collect information that users disclose in any such forums on the web site. {siteConfig.brand.name} does not agree or disagree with anything posted on the discussion board. Also remember that you must comply with our other published policies regarding postings on our public forums.</p>
                        <h2>HOW CAN A USER ACCESS, CHANGE, AND/OR DELETE PERSONAL INFORMATION?</h2>
                        <p>You may access, correct, update, and/or delete any personally-identifiable information that you submit to the web site. You may also unsubscribe from mailing lists or any registrations on the web site. To do so, please either follow instructions on the page of the web site on which you have provided such information or subscribed or registered or contact us at {siteConfig.contact.email}</p>
                        <h2>CHILDREN&apos;S PRIVACY</h2>
                        <p>{siteConfig.brand.name} will not intentionally collect any personal information (such as a child&apos;s name or email address) from children under the age of 13. If you think that we have collected personal information from a child under the age of 13, please contact us.</p>
                        <h2>CHANGES</h2>
                        <p>{siteConfig.brand.name} reserves the right to modify this statement at any time. Any changes to this Privacy Policy will be listed in this section, and if such changes are material, a notice will be included on the homepage of the web site for a period of time. If you have any questions about privacy at any websites operated by {siteConfig.brand.name} or about our website practices, please contact us at: {siteConfig.contact.email}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}