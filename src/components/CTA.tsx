"use client";

import { motion } from "motion/react";
export function CTABottom() {

    return (
        <section className="py-16 px-4 bg-purple-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                    Let&apos;s create something amazing together
                </p>
                <motion.button
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in Touch
                </motion.button>
            </div>
        </section>
    )
}