'use client';

import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { useParams } from 'next/navigation';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { caseStudiesDetails } from '@/data/caseStudy';
// Dynamically import the PDF viewer to avoid SSR issues
const PDFViewer = dynamic(() => import('@/components/PDFViewer').then(mod => mod.PDFViewer), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[800px] bg-gray-100 rounded-xl animate-pulse" />
    ),
});

// This would typically come from a CMS or API

export default function CaseStudyDetail() {
    const params = useParams();
    const id = params.id as keyof typeof caseStudiesDetails;
    const study = caseStudiesDetails[id];

    if (!study) return <div>Case study not found</div>;

    return (
        <div className="min-h-screen bg-background"><Header />

            {/* Hero Section */}
            <section className="pt-40 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">{study.title}</h1>
                                <p className="text-xl text-purple-600">{study.client}</p>
                            </div>
                            <motion.a
                                href={study.pdfUrl}
                                download
                                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <ArrowDownIcon className="w-5 h-5" />
                                <span>Download PDF</span>
                            </motion.a>
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            {study.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-16 px-4 bg-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {Object.entries(study.metrics).map(([key, value]) => (
                            <motion.div
                                key={key}
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-3xl font-bold text-purple-600 mb-2">{value}</div>
                                <div className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
                            <p className="text-gray-600 whitespace-pre-line mb-8">{study.challenge}</p>

                            <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
                            <p className="text-gray-600 whitespace-pre-line mb-8">{study.solution}</p>

                            <h2 className="text-2xl font-bold mb-6">Results</h2>
                            <p className="text-gray-600 whitespace-pre-line">{study.results}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="bg-purple-50 p-8 rounded-xl mb-8">
                                <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
                                <blockquote className="text-gray-600 italic mb-4">
                                    &ldquo;{study.testimonial.quote}&rdquo;
                                </blockquote>
                                <div className="font-medium">
                                    <div className="text-purple-600">{study.testimonial.author}</div>
                                    <div className="text-gray-500">{study.testimonial.position}</div>
                                </div>
                            </div>

                            {/* PDF Preview */}
                            <div className="sticky top-24">
                                <h2 className="text-2xl font-bold mb-6">Case Study PDF Preview</h2>
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <PDFViewer url={study.pdfUrl} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
} 