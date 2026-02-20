import type { SiteConfig } from "@/types"
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ChatContactForm from "@/components/ChatContactForm";

function useCountUp(target: number, duration: number = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(target);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = performance.now();
                    const step = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
    const numericValue = parseInt(value);
    const suffix = value.replace(/\d/g, "");
    const { count, ref } = useCountUp(numericValue, 1500);

    return (
        <div className="mb-4">
            <span ref={ref} className="text-5xl font-bold text-primary-400">
                {count}{suffix}
            </span>
            <span className="text-sm text-muted-foreground ml-2">{label}</span>
        </div>
    );
};

export const ServiceLanding = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: "-50px" });

    return (
        <section className="section max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Explore Our Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Cutting-edge solutions that transform your business and drive success.
                </p>
            </div>

            <div ref={gridRef} className="bento-grid grid-cols-1 md:grid-cols-3">
                {siteConfig.services.shopify.items.map((service, index) => (
                    <a
                        key={index}
                        href={service.href}
                        className={`bento-tile group cursor-pointer transition-all duration-500 ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}
                        style={{
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? "translateY(0)" : "translateY(20px)",
                            transitionDelay: `${index * 0.08}s`,
                        }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary-500/30 group-hover:scale-110">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary-400 transition-all duration-300 group-hover:scale-125" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};


export const RetainerBenefits = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    return (
        <section className="section max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Shopify Retainer Plans</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Get dedicated Shopify support to scale your business.
                </p>
            </div>

            <div className="bento-grid grid-cols-1 md:grid-cols-3">
                {siteConfig.retainer.items.map((item, index) => (
                    <div
                        key={index}
                        className="bento-tile"
                    >
                        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                        <div className="mb-6 pb-6 border-b border-border">
                            <p className="text-2xl font-bold text-primary-400">{item.monthly}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                        </div>
                        <ul className="space-y-3">
                            {item.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-primary-400 mr-2 mt-0.5 flex-shrink-0 text-sm">&#10003;</span>
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}


export const StickyCards = ({ siteConfig: _siteConfig }: { siteConfig: SiteConfig }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: "-50px" });

    const features = [
        {
            title: "Expert Team",
            description: "Our team of skilled professionals brings years of experience and deep expertise to every project.",
            stat: "8+",
            statLabel: "Years Experience",
            variant: "span2" as const,
        },
        {
            title: "Innovative Solutions",
            description: "We leverage cutting-edge technologies to deliver innovative solutions that drive real results.",
            variant: "accent" as const,
        },
        {
            title: "Client-Focused",
            description: "We prioritize your business goals and work closely with you to achieve measurable success.",
            variant: "default" as const,
        },
        {
            title: "Fast Delivery",
            description: "Quick turnaround times without compromising on quality. Get your projects delivered on schedule.",
            variant: "default" as const,
        },
        {
            title: "Custom Solutions",
            description: "Tailored approaches that fit your unique business needs and technical requirements.",
            stat: "50+",
            statLabel: "Projects Delivered",
            variant: "span2" as const,
        },
        {
            title: "Proven Results",
            description: "Track record of successful projects that have delivered measurable business growth and ROI.",
            variant: "muted" as const,
        }
    ];

    return (
        <section className="section max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Why Choose Us
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Experience the difference with our comprehensive approach to delivering exceptional results.
                </p>
            </div>

            <div ref={gridRef} className="bento-grid grid-cols-1 md:grid-cols-3">
                {features.map((feature, index) => {
                    const isSpan2 = feature.variant === "span2";
                    const isAccent = feature.variant === "accent";

                    return (
                        <div
                            key={index}
                            className={`${isAccent ? 'bento-tile-accent' : isSpan2 ? 'bento-tile' : feature.variant === 'muted' ? 'bento-tile-muted' : 'bento-tile'} ${isSpan2 ? 'md:col-span-2' : ''} transition-all duration-500`}
                            style={{
                                opacity: isInView ? 1 : 0,
                                transform: isInView ? "translateY(0)" : "translateY(20px)",
                                transitionDelay: `${index * 0.08}s`,
                            }}
                        >
                            {feature.stat && feature.statLabel && (
                                <AnimatedStat value={feature.stat} label={feature.statLabel} />
                            )}
                            <h3 className={`text-xl font-semibold mb-2 ${isAccent ? 'text-white' : 'text-foreground'}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${isAccent ? 'text-white/70' : 'text-muted-foreground'}`}>
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* CTA Tile */}
            <div className="mt-4">
                <div className="bento-tile-accent text-center py-12">
                    <h3 className="text-3xl font-bold mb-3">
                        Ready to Get Started?
                    </h3>
                    <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 btn-shimmer"
                    >
                        Start Your Project Today
                    </button>
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-hidden p-0 bg-transparent border-none shadow-none">
                    <DialogHeader className="sr-only">
                        <DialogTitle>Start Your Project Conversation</DialogTitle>
                    </DialogHeader>
                    <ChatContactForm />
                </DialogContent>
            </Dialog>
        </section>
    );
};
