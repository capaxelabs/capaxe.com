import { motion, useScroll, useTransform } from "motion/react"
import type { SiteConfig } from "@/types"
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const ServiceLanding = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    return (
        <motion.section
            className="relative h-screen bg-gradient-to-br from-purple-200 via-indigo-100 to-blue-200 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-8" />
            <motion.div
                className="text-center relative z-10"
                style={{
                    y: useTransform(useScroll().scrollY,
                        [0, 1000],
                        [0, 200]
                    )
                }}
            >
                <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-700">Explore Our Innovative Services</h2>
                <p className="text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed font-light">
                    Discover how our cutting-edge solutions can transform your business and drive success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-4">
                    {siteConfig.services.items.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-purple-800">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section >
    )
}


export const OurServices = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="section-title text-3xl font-bold text-center text-purple-900 mb-12"
                >
                    Our Services
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
                    >
                        <ShoppingBagIcon className="w-12 h-12 text-purple-600 mb-4" />
                        <h3 className="text-xl text-foreground font-semibold mb-2">Custom Shopify Store Development</h3>
                        <p className="text-foreground">Tailor-made Shopify solutions designed to elevate your brand and boost sales.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 shadow-lg"
                    >
                        <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="text-xl text-foreground font-semibold mb-2">Professional Web Development</h3>
                        <p className="text-foreground">Leverage the latest technologies to create stunning, high-performance websites.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
                    >
                        <PhoneIcon className="w-12 h-12 text-purple-600 mb-4" />
                        <h3 className="text-xl text-foreground font-semibold mb-2">24/7 Dedicated Support</h3>
                        <p className="text-foreground">Experience peace of mind with our round-the-clock technical support services.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


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
