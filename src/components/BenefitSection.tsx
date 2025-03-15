import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Palette, LineChart, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    cta: string;
    ctaLink: string;
    delay: number;
    gradient: string;
}

const BenefitCard = ({ icon, title, description, cta, ctaLink, delay, gradient }: BenefitCardProps) => {
    return (
        <div
            className={`rounded-xl p-6 lg:p-8 ${gradient} shadow-elegant overflow-hidden relative group`}
        >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full transition-transform duration-700 group-hover:scale-150" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full transition-transform duration-700 group-hover:scale-150" />

            <div className="mb-5 bg-white/20 backdrop-blur-sm p-3 rounded-lg inline-flex items-center justify-center">
                {icon}
            </div>

            <h3 className="text-xl md:text-2xl font-display font-semibold mb-3 text-white">{title}</h3>
            <p className="text-white/80 mb-6 text-sm md:text-base">{description}</p>

            <Button variant="secondary" className="group relative overflow-hidden" asChild>
                <a href={ctaLink}>
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </Button>
        </div>
    );
};

const BenefitSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const benefits = [
        {
            icon: <Code className="h-6 w-6 text-white" />,
            title: "Shopify Development Retainer",
            description: "Launch the best features with the best tech to convert more customers. Our Shopify retainer includes access to our expert development team who can build bespoke features unique to your business.",
            cta: "View Development Options",
            ctaLink: "/services/shopify-development",
            gradient: "bg-gradient-to-br from-primary-600 to-primary-400",
            delay: 0
        },
        {
            icon: <Palette className="h-6 w-6 text-white" />,
            title: "Design Excellence",
            description: "Engage customers with premium designs that embody your brand. Our specialists create UI designs with conversions and growth at the core, helping you stand out from competitors.",
            cta: "Explore Design Services",
            ctaLink: "/services/shopify-design",
            gradient: "bg-gradient-to-br from-violet-600 to-fuchsia-500",
            delay: 1
        },
        {
            icon: <LineChart className="h-6 w-6 text-white" />,
            title: "Conversion Rate Optimization",
            description: "Our CRO services help Shopify store owners sustainably grow and hit conversion targets through web design, development, and strategy consultancy to improve your metrics at every stage.",
            cta: "Learn About CRO",
            ctaLink: "/services/conversion-rate-optimization",
            gradient: "bg-gradient-to-br from-blue-500 to-cyan-400",
            delay: 2
        },
        {
            icon: <HeadphonesIcon className="h-6 w-6 text-white" />,
            title: "Technical Support Services",
            description: "We're here when you need us. Our team provides expert support for your entire team's questions and queries, getting to know your store inside out to be your trusted partner.",
            cta: "View Support Options",
            ctaLink: "/services/shopify-support",
            gradient: "bg-gradient-to-br from-emerald-500 to-teal-400",
            delay: 3
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-white" />,
            title: "Growth & Strategy",
            description: "Experience, expertise and strategies for growth. We work as your strategic partner to improve conversion rates through design improvements, feature development, and continuous optimization.",
            cta: "Explore Growth Plans",
            ctaLink: "/services/shopify-growth",
            gradient: "bg-gradient-to-br from-amber-500 to-orange-400",
            delay: 4
        },
        {
            icon: <Zap className="h-6 w-6 text-white" />,
            title: "Expert Shopify Team",
            description: "Get an expert Shopify team on hand for your business. Our flexible hours can be used across development, design, support and strategic consultancy to grow your store month after month.",
            cta: "Meet Our Team",
            ctaLink: "/about",
            gradient: "bg-gradient-to-br from-pink-500 to-rose-400",
            delay: 5
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-primary-50 to-white overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-200 text-primary-700 text-xs font-medium mb-4">
                        Why Choose Our Retainer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-800">
                        Comprehensive Shopify Support
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our Shopify retainer gives you an expert team on hand for your business, providing support
                        and optimization to grow your store month after month.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            cta={benefit.cta}
                            ctaLink={benefit.ctaLink}
                            gradient={benefit.gradient}
                            delay={benefit.delay}
                        />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Whatever the size of your business, we have a plan to meet your needs, all managed by our friendly expert Shopify team.
                        Our memberships offer ultimate monthly Shopify support and expert retainer services to grow your store.
                    </p>
                    <Button size="lg" className="bg-primary-400 hover:bg-primary-500 text-white" asChild>
                        <a href="#retainer-plans">View Our Plans & Pricing</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;