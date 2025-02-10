"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

export default function About() {
    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We&apos;re a team of passionate developers and designers creating exceptional digital experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a vision to revolutionize digital commerce, {siteConfig.name} has grown from a small team of enthusiasts to a full-service development agency.
                            </p>
                            <p className="text-gray-600">
                                We specialize in creating cutting-edge e-commerce solutions that help businesses thrive in the digital age.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-purple-100" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 bg-purple-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description: "We stay ahead of the curve with cutting-edge technologies and approaches."
                            },
                            {
                                title: "Quality",
                                description: "We never compromise on the quality of our deliverables."
                            },
                            {
                                title: "Collaboration",
                                description: "We work closely with our clients to ensure their success."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Team</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((_, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Team Member</h3>
                                <p className="text-gray-600">Position</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}