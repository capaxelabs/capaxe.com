import { motion } from "motion/react";
import type { SiteConfig } from "@/types";

const ClientLogos = ({ siteConfig }: { siteConfig: SiteConfig }) => {
    const clientLogos = siteConfig.clientLogos || [];

    if (clientLogos.length === 0) return null;

    return (
        <section className="px-6">
            <div className="container max-w-7xl mx-auto">
                <div className="bento-tile-muted py-10 px-8">
                    <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center mb-8">
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
            className="flex gap-6 px-3"
        >
            {children}
        </motion.div>
    );
};

const ClientLogoItem = ({ src, alt }: { src: string; alt: string; name: string }) => {
    return (
        <div className="w-32 md:w-40 h-14 md:h-16 flex justify-center items-center p-4 rounded-xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors">
            <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert opacity-50 hover:opacity-80 transition-opacity duration-300"
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
