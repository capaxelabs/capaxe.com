import { useRef } from 'react';
import { ArrowRight, Code, Palette, LineChart, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    cta: string;
    ctaLink: string;
}

const BenefitCard = ({ icon, title, description, cta, ctaLink }: BenefitCardProps) => {
    return (
        <div className="bento-tile group relative overflow-hidden">
            <div className="mb-4 bg-primary-500/20 p-3 rounded-xl inline-flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mb-5">{description}</p>
            <Button variant="secondary" className="bg-foreground/5 text-muted-foreground hover:bg-foreground/10 border border-border rounded-xl text-sm" asChild>
                <a href={ctaLink}>
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </Button>
        </div>
    );
};

const BenefitSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const benefits = [
        {
            icon: <Code className="h-5 w-5 text-primary-400" />,
            title: "Shopify Development Retainer",
            description: "Launch the best features with the best tech to convert more customers. Our retainer includes access to our expert development team.",
            cta: "View Options",
            ctaLink: "/services/shopify/shopify-development",
        },
        {
            icon: <Palette className="h-5 w-5 text-violet-400" />,
            title: "Design Excellence",
            description: "Engage customers with premium designs that embody your brand. UI designs with conversions and growth at the core.",
            cta: "Explore Design",
            ctaLink: "/services/shopify/shopify-design",
        },
        {
            icon: <LineChart className="h-5 w-5 text-cyan-400" />,
            title: "Conversion Rate Optimization",
            description: "Sustainably grow and hit conversion targets through web design, development, and strategy consultancy.",
            cta: "Learn About CRO",
            ctaLink: "/services/shopify/conversion-rate-optimization",
        },
        {
            icon: <HeadphonesIcon className="h-5 w-5 text-emerald-400" />,
            title: "Technical Support Services",
            description: "Expert support for your entire team. We get to know your store inside out to be your trusted partner.",
            cta: "View Support",
            ctaLink: "/services/shopify/shopify-support",
        },
        {
            icon: <TrendingUp className="h-5 w-5 text-amber-400" />,
            title: "Growth & Strategy",
            description: "Strategies for growth. We work as your strategic partner to improve conversion rates through continuous optimization.",
            cta: "Explore Growth",
            ctaLink: "/services/shopify/shopify-growth",
        },
        {
            icon: <Zap className="h-5 w-5 text-pink-400" />,
            title: "Expert Shopify Team",
            description: "An expert Shopify team on hand for your business. Flexible hours across development, design, and strategy.",
            cta: "Meet Our Team",
            ctaLink: "/about",
        },
    ];

    return (
        <section ref={sectionRef} className="section max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium mb-4 border border-primary-500/30">
                    Why Choose Our Retainer
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Comprehensive Shopify Support
                </h2>
                <p className="text-muted-foreground">
                    Our Shopify retainer gives you an expert team on hand for your business, providing support
                    and optimization to grow your store month after month.
                </p>
            </div>

            <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => (
                    <BenefitCard
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        cta={benefit.cta}
                        ctaLink={benefit.ctaLink}
                    />
                ))}
            </div>

            <div className="text-center mt-8">
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm">
                    Whatever the size of your business, we have a plan to meet your needs, all managed by our expert Shopify team.
                </p>
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white rounded-xl" asChild>
                    <a href="#retainer-plans">View Our Plans & Pricing</a>
                </Button>
            </div>
        </section>
    );
};

export default BenefitSection;
