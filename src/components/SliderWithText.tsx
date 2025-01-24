'use client';

import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";


export const SliderWithText = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % siteConfig.hero.slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen flex">
            {/* Fixed Left Slider */}
            <motion.div
                className="w-1/2 h-screen sticky top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="relative w-full h-full">
                    {siteConfig.hero.slides.map((slide, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: currentSlide === index ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={slide}
                                alt={`${siteConfig.name} - Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                    {/* Slide Navigation Dots */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {siteConfig.hero.slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scrollable Right Content */}
            <div className="w-1/2 min-h-screen">
                <div className="p-16 sticky top-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-8xl font-bold mb-4">{siteConfig.name}</h1>
                        <p className="text-xl text-gray-400 italic mb-8">{siteConfig.hero.subtitle}</p>
                        <p className="text-2xl">
                            {siteConfig.hero.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};