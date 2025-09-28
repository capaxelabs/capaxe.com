import { motion, useScroll, useTransform } from "motion/react"
import type { SiteConfig } from "@/types"
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ChatContactForm from "@/components/ChatContactForm";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const features = [
        {
            icon: "🚀",
            title: "Expert Team",
            description: "Our team of skilled professionals brings years of experience and deep expertise to every project.",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            icon: "💡",
            title: "Innovative Solutions",
            description: "We leverage cutting-edge technologies to deliver innovative solutions that drive real results.",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50"
        },
        {
            icon: "🎯",
            title: "Client-Focused",
            description: "We prioritize your business goals and work closely with you to achieve measurable success.",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            icon: "⚡",
            title: "Fast Delivery",
            description: "Quick turnaround times without compromising on quality. Get your projects delivered on schedule.",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            icon: "🔧",
            title: "Custom Solutions",
            description: "Tailored approaches that fit your unique business needs and technical requirements.",
            gradient: "from-indigo-500 to-blue-500",
            bgGradient: "from-indigo-50 to-blue-50"
        },
        {
            icon: "📈",
            title: "Proven Results",
            description: "Track record of successful projects that have delivered measurable business growth and ROI.",
            gradient: "from-teal-500 to-green-500",
            bgGradient: "from-teal-50 to-green-50"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500">
                        Why Choose Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the difference with our comprehensive approach to delivering exceptional results that exceed expectations.
                    </p>
                </motion.div>

                {/* Features Grid - Vertical Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ 
                                delay: index * 0.1,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                            className={`relative group bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                            
                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="filter drop-shadow-sm">{feature.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient} group-hover:scale-105 transform transition-all duration-300`}>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
                            Let's discuss how we can help transform your business with our expertise and innovative solutions.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            💬 Start Your Project Today
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Chat Contact Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden p-0">
                    <DialogHeader className="px-6 pt-6 pb-0">
                        <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                            Start Your Project Conversation
                        </DialogTitle>
                    </DialogHeader>
                    <div className="px-6 pb-6">
                        <p className="text-muted-foreground mb-6">
                            Let's discuss your project through our interactive chat. We'll gather all the details we need to give you an accurate quote.
                        </p>
                        <ChatContactForm />
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};
