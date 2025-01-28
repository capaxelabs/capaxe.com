'use client';

import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { useParams } from 'next/navigation';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';

// Dynamically import the PDF viewer to avoid SSR issues
const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[800px] bg-gray-100 rounded-xl animate-pulse" />
    ),
});

// This would typically come from a CMS or API
const caseStudiesDetails = {
    'shopify-migration': {
        title: "Shopify Migration Success Story",
        client: "Fashion Retailer",
        description: "How we helped a fashion retailer migrate from Magento to Shopify Plus, resulting in a 45% increase in sales.",
        challenge: `The client faced multiple challenges with their existing Magento store:
        • Slow loading times affecting user experience
        • High maintenance costs
        • Limited scalability during peak seasons
        • Complex backend management requiring technical expertise`,
        solution: `Our team implemented a comprehensive migration strategy:
        1. Data Analysis and Planning
        • Conducted thorough audit of existing data
        • Created detailed migration roadmap
        • Identified potential risks and mitigation strategies

        2. Custom Development
        • Built custom Shopify Plus theme
        • Developed data migration scripts
        • Implemented advanced features and integrations

        3. Testing and Optimization
        • Performed extensive testing
        • Optimized site performance
        • Conducted staff training`,
        results: `The migration resulted in significant improvements:
        • 45% increase in sales
        • 65% reduction in maintenance costs
        • 2.1s average page load time
        • 3.2% conversion rate (up from 2.1%)
        • Improved inventory management
        • Enhanced user experience`,
        testimonial: {
            quote: "The migration process was smooth and the results exceeded our expectations. Our team can now focus on growing the business instead of managing technical issues.",
            author: "Sarah Johnson",
            position: "E-commerce Director"
        },
        metrics: {
            salesIncrease: "45%",
            loadingSpeed: "2.1s",
            conversionRate: "3.2%"
        },
        pdfUrl: "/case-studies/fashion-retailer.pdf"
    },
    // Add more case studies here
};

export default function CaseStudyDetail() {
    const params = useParams();
    const id = params.id as string;
    const study = caseStudiesDetails[id];

    if (!study) return <div>Case study not found</div>;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
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
                                    "{study.testimonial.quote}"
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