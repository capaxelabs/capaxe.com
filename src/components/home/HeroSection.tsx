import React from "react";
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="min-h-[90vh] relative overflow-hidden flex items-center pt-20">
            <div className="absolute top-0 right-0 w-full h-full bg-primary-100 clip-path-slant -z-10" />
            <div className="absolute top-40 right-40 w-64 h-64 rounded-full bg-primary-300/20 blur-3xl -z-10 animate-float" />
            <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-primary-200/30 blur-3xl -z-10 animate-float" />

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl animate-fade-up">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-200 text-primary-700 text-xs font-medium mb-6">
                            Elevate Your Shopify Experience
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Transform Your <span className="text-gradient">eCommerce</span> Vision Into Reality
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            We build custom Shopify solutions that drive results. From stunning storefronts to complex integrations, we're your expert Shopify partner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-primary-400 hover:bg-primary-500 text-white" asChild>
                                <a href="/portfolio">
                                    View Our Work
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary-400 text-primary-500" asChild>
                                <a href="/consultation">
                                    Book a Consultation
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
                            <img
                                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                                alt="Shopify store showcase"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary-200/20 rounded-full blur-xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;