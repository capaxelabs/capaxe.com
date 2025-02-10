"use client";

import { CTABottom } from "@/components/CTA";
import { motion } from "motion/react";

import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { CaseStudy } from "@/data/caseStudy";

export default function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {

    return (
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
                        Case Studies
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore how we&apos;ve helped businesses achieve their goals through innovative solutions
                    </motion.p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                                            <p className="text-purple-600 font-medium">{study.client}</p>
                                        </div>
                                        <motion.a
                                            href={study.pdfUrl}
                                            download
                                            className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
                                            whileHover={{ y: -2 }}
                                        >
                                            <ArrowDownIcon className="w-5 h-5" />
                                            <span>Download PDF</span>
                                        </motion.a>
                                    </div>

                                    <p className="text-gray-600 mb-6">
                                        {study.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {Object.entries(study.metrics).map(([key, value]) => (
                                            <div key={key} className="bg-purple-50 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-purple-600">{value}</div>
                                                <div className="text-sm text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/case-studies/${study.id}`}
                                        className="inline-block"
                                    >
                                        <motion.button
                                            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            View Full Case Study
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <CTABottom />
        </div>
    )
}