import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import type { SiteConfig } from "@/types";

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

export default StickyCards; 