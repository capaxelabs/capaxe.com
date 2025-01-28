'use client';

import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// This would typically come from a CMS or API
const portfolioDetails = {
    'e-commerce-platform': {
        title: "E-commerce Platform",
        category: "Shopify Development",
        description: "A fully customized Shopify store with advanced features and optimized performance.",
        fullDescription: `Our team developed a comprehensive e-commerce solution that transformed the client's business. 
        The project included custom theme development, advanced product filtering, and seamless payment integration.`,
        challenge: `The client needed a scalable solution that could handle their growing product catalog while maintaining 
        fast loading times and a smooth user experience.`,
        solution: `We implemented:
        • Custom Shopify theme development
        • Advanced product filtering and search
        • Performance optimization
        • Mobile-first responsive design
        • Integration with multiple payment gateways
        • Custom inventory management system`,
        results: `The new platform achieved:
        • 40% increase in conversion rate
        • 50% faster page load times
        • 30% increase in mobile sales
        • Improved inventory accuracy
        • Enhanced customer satisfaction`,
        technologies: ['Shopify', 'Liquid', 'JavaScript', 'React', 'Node.js'],
        duration: "3 months",
        images: [
            "/portfolio/e-commerce/1.jpg",
            "/portfolio/e-commerce/2.jpg",
            "/portfolio/e-commerce/3.jpg"
        ]
    },
    // Add more portfolio items here
};

export default function PortfolioDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const project = portfolioDetails[slug];

    if (!project) return <div>Project not found</div>;

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
                        <span className="text-purple-600 font-medium">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                                <p className="text-gray-600 mb-8 whitespace-pre-line">
                                    {project.fullDescription}
                                </p>

                                <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
                                <p className="text-gray-600 mb-8 whitespace-pre-line">
                                    {project.challenge}
                                </p>

                                <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
                                <p className="text-gray-600 mb-8 whitespace-pre-line">
                                    {project.solution}
                                </p>

                                <h2 className="text-2xl font-bold mb-6">Results</h2>
                                <p className="text-gray-600 mb-8 whitespace-pre-line">
                                    {project.results}
                                </p>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg sticky top-24"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="mb-6">
                                    <h3 className="font-medium text-gray-900 mb-2">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-medium text-gray-900 mb-2">Project Duration</h3>
                                    <p className="text-gray-600">{project.duration}</p>
                                </div>

                                <motion.button
                                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Live Project
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Images */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative h-64">
                                    <div className="absolute inset-0 bg-purple-100" />
                                    {/* Replace with actual images */}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 