import { motion, useScroll, useTransform } from "motion/react"
import type { SiteConfig } from "@/types"
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React, { useRef } from 'react';

export const ServiceLanding = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-purple-200 via-indigo-100 to-blue-200 flex items-center justify-center overflow-hidden py-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-8" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-float" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-700 animate-gradient-shift bg-[length:200%_auto]">
                        Explore Our Innovative Services
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed font-light animate-slide-up">
                        Discover how our cutting-edge solutions can transform your business and drive success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {siteConfig.services.shopify.items.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 animate-scale-in"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 text-purple-800 group-hover:text-purple-900 transition-colors group-hover:scale-105 transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 group-hover:text-gray-800 transition-colors group-hover:scale-102 transform duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export const RetainerBenefits = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    return (
        <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-700">Shopify Retainer Plans</h2>
                    <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
                        Get dedicated Shopify support to scale your business. Choose the plan that fits your needs and let us handle your technical requirements.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {siteConfig.retainer.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-2 text-purple-800">{item.title}</h3>
                            <div className="mb-6 pb-6 border-b border-purple-100">
                                <p className="text-3xl font-bold text-purple-700">{item.monthly}<span className="text-sm font-normal">/month</span></p>
                                <p className="text-sm text-purple-600 mt-1">Annual: ${item.yearly}/month</p>
                            </div>
                            <ul className="space-y-3">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/retainer"
                        className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        View All Plans
                    </a>
                </motion.div>
            </div>
        </section>
    )
}


export const StickyCards = ({ siteConfig }: { siteConfig: SiteConfig }) => {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="relative py-40 bg-white">
            <div className=" mx-auto px-6">
                <div className="sticky top-20 pt-10 pb-20">
                    <h2 className="section-title text-4xl font-bold text-center mb-20">Why Choose Us</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg"
                            style={{
                                opacity: useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 1, 0.3]),
                                scale: useTransform(scrollYProgress, [0, 0.3, 0.6], [0.8, 1, 0.8]),
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                            <p className="text-gray-700">Our team of skilled professionals brings years of experience and deep expertise to every project.</p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg"
                            style={{
                                opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3]),
                                scale: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]),
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
                            <p className="text-gray-700">We leverage cutting-edge technologies to deliver innovative solutions that drive real results.</p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg"
                            style={{
                                opacity: useTransform(scrollYProgress, [0.4, 0.7, 1], [0.3, 1, 0.3]),
                                scale: useTransform(scrollYProgress, [0.4, 0.7, 1], [0.8, 1, 0.8]),
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Client-Focused</h3>
                            <p className="text-gray-700">We prioritize your business goals and work closely with you to achieve measurable success.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
