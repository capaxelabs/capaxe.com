"use client";

import { motion } from "motion/react";
import { Project } from "@/data/projects";
import { CTABottom } from "@/components/CTA";

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <>
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Portfolio
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Explore our latest projects and see how we&apos;ve helped businesses grow
                        </motion.p>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="h-48 bg-purple-100" />
                                    <div className="p-6">
                                        <span className="text-sm text-purple-600 font-medium">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2 mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {project.description}
                                        </p>
                                        <motion.button
                                            className="mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            View Project →
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <CTABottom />
            </div>
        </>
    )
}