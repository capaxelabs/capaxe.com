import { MotionValue, useScroll, motion, useTransform } from "motion/react";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import {
    FiArrowRight,
    FiShoppingCart,
    FiTrendingUp,
    FiUsers,
} from "react-icons/fi";
import { SiReact } from "react-icons/si";

export const StickyCards = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return (
        <>
            <div ref={ref} className="relative">
                {CARDS.map((c, idx) => (
                    <Card
                        key={c.id}
                        card={c}
                        scrollYProgress={scrollYProgress}
                        position={idx + 1}
                    />
                ))}
            </div>
            {/* <div className="h-screen bg-black" /> */}
        </>
    );
};

interface CardProps {
    position: number;
    card: CardType;
    scrollYProgress: MotionValue;
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
    const scaleFromPct = (position - 1) / CARDS.length;
    const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

    const isOddCard = position % 2;

    return (
        <motion.div
            style={{
                height: CARD_HEIGHT,
                y: position === CARDS.length ? undefined : y,
                background: isOddCard ? "black" : "white",
                color: isOddCard ? "white" : "black",
            }}
            className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
        >
            <card.Icon className="mb-4 text-4xl" />
            <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
                {card.title}
            </h3>
            <p className="mb-8 max-w-lg text-center text-sm md:text-base">
                {card.description}
            </p>
            <a
                href={card.routeTo}
                className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${card.ctaClasses
                    } ${isOddCard
                        ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
                        : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
                    }`}
            >
                <span>Learn more</span>
                <FiArrowRight />
            </a>
        </motion.div>
    );
};

const CARD_HEIGHT = 500;

type CardType = {
    id: number;
    Icon: IconType;
    title: string;
    description: string;
    ctaClasses: string;
    routeTo: string;
};

const CARDS: CardType[] = [
    {
        id: 1,
        Icon: FiShoppingCart,
        title: "Custom Shopify Stores",
        description:
            "We specialize in building tailored Shopify stores designed to enhance user experience and drive sales.",
        ctaClasses: "bg-blue-300",
        routeTo: "/services/store-development",
    },
    {
        id: 2,
        Icon: SiReact,
        title: "Shopify App Development",
        description:
            "Expand your store’s functionality with custom Shopify apps that meet your unique business needs.",
        ctaClasses: "bg-green-300",
        routeTo: "/services/app-development",
    },
    {
        id: 3,
        Icon: FiTrendingUp,
        title: "SEO & Performance Optimization",
        description:
            "Optimize your Shopify store for speed and search engines to attract more customers and boost conversions.",
        ctaClasses: "bg-yellow-300",
        routeTo: "/services/seo-performance",
    },
    {
        id: 4,
        Icon: FiUsers,
        title: "Migration & Integration",
        description:
            "Seamlessly migrate to Shopify or integrate third-party tools to streamline your business operations.",
        ctaClasses: "bg-purple-300",
        routeTo: "/services/migration-integration",
    },
];
