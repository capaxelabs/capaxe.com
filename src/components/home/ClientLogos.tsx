import { motion } from "motion/react";
import type { SiteConfig } from "@/types";

const ClientLogos = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    const clientLogos = siteConfig.clientLogos || [];
    
    if (clientLogos.length === 0) return null;

    return (
        <section className="bg-background pb-20">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-foreground">
                    Trusted by Amazing Clients
                </h2>
                <div className="flex overflow-hidden">
                    <TranslateWrapper>
                        <ClientLogoItems logos={clientLogos} />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <ClientLogoItems logos={clientLogos} />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <ClientLogoItems logos={clientLogos} />
                    </TranslateWrapper>
                </div>
            </div>
        </section>
    );
};

const TranslateWrapper = ({ children, reverse }: { children: React.ReactNode; reverse?: boolean }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {children}
        </motion.div>
    );
};

const ClientLogoItem = ({ src, alt, name }: { src: string; alt: string; name: string }) => {
    return (
        <div className="w-32 md:w-40 h-16 md:h-20 flex justify-center items-center hover:bg-slate-200 transition-colors p-4 bg-white/80 rounded-lg">
            <img 
                src={src} 
                alt={alt} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
        </div>
    );
};

const ClientLogoItems = ({ logos }: { logos: Array<{ src: string; alt: string; name: string }> }) => {
    return (
        <>
            {logos.map((logo, index) => (
                <ClientLogoItem 
                    key={`${logo.name}-${index}`}
                    src={logo.src} 
                    alt={logo.alt} 
                    name={logo.name}
                />
            ))}
        </>
    );
};

export default ClientLogos;