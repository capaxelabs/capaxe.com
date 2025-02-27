import { motion } from "motion/react";
import {
    SiNike,
    Si3M,
    SiAbstract,
    SiAdobe,
    SiAirtable,
    SiAmazon,
    SiBox,
    SiBytedance,
    SiChase,
    SiCloudbees,
    SiBurton,
    SiBmw,
    SiHeroku,
    SiBuildkite,
    SiCouchbase,
    SiDailymotion,
    SiDeliveroo,
    SiEpicgames,
    SiGenius,
    SiGodaddy,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { SiteConfig } from "@/types";
import { siteConfig } from "@/config/site";

const LogoHero = () => {
    return (
        <section className="h-[90vh] bg-background pb-20 flex flex-col justify-between">
            <div className="flex-1 w-full px-8 flex flex-col items-center justify-center">
                <h1 className="text-center text-foreground text-4xl md:text-6xl max-w-xl font-semibold">
                    {siteConfig.hero.title}
                </h1>
                <p className="text-center max-w-xl my-6 text-foreground">
                    {siteConfig.hero.description}
                </p>
                <button type="button" className="flex items-center gap-2 rounded px-3 py-2 text-base font-medium uppercase text-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg bg-purple-900 shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]">
                    Get in touch
                </button>
            </div>

            <div className="mt-auto">
                <div className="flex overflow-hidden">
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                </div>
                <div className="flex overflow-hidden mt-4">
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                </div>
            </div>
        </section>
    );
};

const TranslateWrapper = ({ children, reverse, }: { children: React.ReactNode; reverse?: boolean; }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {children}
        </motion.div>
    );
};

const LogoItem = ({ Icon }: { Icon: IconType }) => {
    return (
        <a
            href="/"
            rel="nofollow noreferrer"
            target="_blank"
            className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
        >
            <Icon className="text-4xl md:text-5xl" />
        </a>
    );
};

const LogoItemsTop = () => (
    <>
        <LogoItem Icon={SiNike} />
        <LogoItem Icon={Si3M} />
        <LogoItem Icon={SiAbstract} />
        <LogoItem Icon={SiAdobe} />
        <LogoItem Icon={SiAirtable} />
        <LogoItem Icon={SiAmazon} />
        <LogoItem Icon={SiBox} />
        <LogoItem Icon={SiBytedance} />
        <LogoItem Icon={SiChase} />
        <LogoItem Icon={SiCloudbees} />
    </>
);

const LogoItemsBottom = () => (
    <>
        <LogoItem Icon={SiBmw} />
        <LogoItem Icon={SiBurton} />
        <LogoItem Icon={SiBuildkite} />
        <LogoItem Icon={SiCouchbase} />
        <LogoItem Icon={SiDailymotion} />
        <LogoItem Icon={SiDeliveroo} />
        <LogoItem Icon={SiEpicgames} />
        <LogoItem Icon={SiGenius} />
        <LogoItem Icon={SiGodaddy} />
        <LogoItem Icon={SiHeroku} />
    </>
);

export default LogoHero;