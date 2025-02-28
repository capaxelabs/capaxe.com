import React from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { siteConfig } from '../config/site';
import LogoHero from './LogoHero';
import { StickyCards } from './StickyCard';
import RetainerPlansSection from '@/components/RetainerPlan';

// Import heroicons components
const ShoppingBagIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

const CodeBracketIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

const PhoneIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
);

export default function Home() {
    return (
        <>
            <div className="min-h-screen ">
                {/* Hero Section with Fixed Slider */}

                <LogoHero />

                {/* Parallax Section */}
                <motion.section
                    className="relative h-screen bg-purple-200 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="text-center"
                        style={{
                            y: useTransform(useScroll().scrollY,
                                [0, 1000],
                                [0, 200]
                            )
                        }}
                    >
                        <h2 className="text-6xl font-bold mb-8">Explore Our Innovative Services</h2>
                        <p className="text-xl max-w-2xl mx-auto">
                            Discover how our cutting-edge solutions can transform your business and drive success.
                        </p>
                        <div className="grid grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-4">
                            {siteConfig.services.items.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 p-6 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-800">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.section>

                {/* Sticky Cards */}
                <StickyCards />

                {/* Services Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-3xl font-bold text-center text-purple-900 mb-12"
                        >
                            Our Services
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
                            >
                                <ShoppingBagIcon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl text-foreground font-semibold mb-2">Custom Shopify Store Development</h3>
                                <p className="text-foreground">Tailor-made Shopify solutions designed to elevate your brand and boost sales.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 shadow-lg"
                            >
                                <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl text-foreground font-semibold mb-2">Professional Web Development</h3>
                                <p className="text-foreground">Leverage the latest technologies to create stunning, high-performance websites.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
                            >
                                <PhoneIcon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl text-foreground font-semibold mb-2">24/7 Dedicated Support</h3>
                                <p className="text-foreground">Experience peace of mind with our round-the-clock technical support services.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Retainer Benefits Section */}
                <RetainerPlansSection />

            </div>
        </>
    );
} 