import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { motion, useAnimate } from "motion/react";
import { FiArrowDownCircle } from "react-icons/fi";
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export const ImageTrailHero = () => {
    return (
        <MouseImageTrail
            renderImageBuffer={50}
            rotationRange={25}
            images={[
                "https://www.hover.dev/imgs/active/1.jpg",
                "https://www.hover.dev/imgs/active/2.jpg",
                "https://www.hover.dev/imgs/active/3.jpg",
                "https://www.hover.dev/imgs/active/4.jpg",
                "https://www.hover.dev/imgs/active/5.jpg",
                "https://www.hover.dev/imgs/active/6.jpg",
                "https://www.hover.dev/imgs/active/7.jpg",
                "https://www.hover.dev/imgs/active/8.jpg",
                "https://www.hover.dev/imgs/active/9.jpg",
                "https://www.hover.dev/imgs/active/10.jpg",
                "https://www.hover.dev/imgs/active/11.jpg",
                "https://www.hover.dev/imgs/active/12.jpg",
                "https://www.hover.dev/imgs/active/13.jpg",
                "https://www.hover.dev/imgs/active/14.jpg",
                "https://www.hover.dev/imgs/active/15.jpg",
                "https://www.hover.dev/imgs/active/16.jpg",
            ]}
        >
            <section className="h-screen bg-slate-200">
                <NavBar />
                <Copy />
                <WatermarkWrapper />
            </section>
        </MouseImageTrail>
    );
};

const NavBar = () => {
    return (
        <nav className="absolute left-0 right-0 top-0 z-99999999">
            <div className="bg-slate-900 text-center">
                <p className="flex items-center justify-center gap-1 py-0.5 text-sm font-medium uppercase text-slate-100">
                    <span>Get your Shopify store up and running</span>
                </p>
            </div>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6">
                {/* Temp logo from logoipsum */}
                <svg
                    width="50"
                    height="39"
                    viewBox="0 0 50 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 fill-slate-900"
                >
                    <path
                        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                        stopColor="#000000"
                    ></path>
                    <path
                        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                        stopColor="#000000"
                    ></path>
                </svg>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.995, rotate: "3.5deg" }}
                    className="flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 font-medium text-slate-50 transition-colors hover:bg-indigo-600"
                >
                    <span>Contact Us</span>
                </motion.button>
            </div>
        </nav>
    );
};

const Copy = () => {
    return (
        <div className="z-999999 absolute left-0 right-0 bottom-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-8">
                <div className="mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Image src="/shopify-partners.avif" alt="Capaxe Labs" width={250} height={250} />
                        <Image src="/shopify-expert.avif" alt="Capaxe Labs" width={250} height={250} />
                    </div>

                    <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-slate-900 md:text-8xl">
                        Capaxe <span className="text-indigo-500">Labs</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-slate-700 md:text-lg">
                        {siteConfig.hero.description}
                    </p>
                </div>
                <FiArrowDownCircle className="hidden text-8xl text-slate-500 md:block" />
            </div>
        </div>
    );
};

const WatermarkWrapper = () => {
    return (
        <>
            <Watermark text="Shopify Store" />
            <Watermark text="Shopify App Development" reverse />
            <Watermark text="Shopify Custom Store" />
            <Watermark text="Shopify Store Optimization" reverse />
            <Watermark text="Shopify SEO Optimization" />
            <Watermark text="Shopify Store Migration" reverse />
            <Watermark text="WIX Website Development" />
            <Watermark text="WIX Website Optimization" reverse />
        </>
    );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
    <div className="flex -translate-y-12 select-none overflow-hidden">
        <TranslateWrapper reverse={reverse}>
            <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
                {text}
            </span>
        </TranslateWrapper>
        <TranslateWrapper reverse={reverse}>
            <span className="ml-30 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
                {text}
            </span>
        </TranslateWrapper>
    </div>
);

const TranslateWrapper = ({
    children,
    reverse,
}: {
    children: ReactNode;
    reverse?: boolean;
}) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            className="flex"
        >
            {children}
        </motion.div>
    );
};

const MouseImageTrail = ({
    children,
    // List of image sources
    images,
    // Will render a new image every X pixels between mouse moves
    renderImageBuffer,
    // images will be rotated at a random number between zero and rotationRange,
    // alternating between a positive and negative rotation
    rotationRange,
}: {
    children: ReactNode;
    images: string[];
    renderImageBuffer: number;
    rotationRange: number;
}) => {
    const [scope, animate] = useAnimate();

    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage();
        }
    };

    const calculateDistance = (
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        // Using the Pythagorean theorem to calculate the distance
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    };

    const renderNextImage = () => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `[data-mouse-move-index="${imageIndex}"]`;

        const el = document.querySelector(selector) as HTMLElement;

        el.style.top = `${lastRenderPosition.current.y}px`;
        el.style.left = `${lastRenderPosition.current.x}px`;
        el.style.zIndex = imageRenderCount.current.toString();

        const rotation = Math.random() * rotationRange;

        animate(
            selector,
            {
                opacity: [0, 1],
                transform: [
                    `translate(-50%, -25%) scale(0.5) ${imageIndex % 2
                        ? `rotate(${rotation}deg)`
                        : `rotate(-${rotation}deg)`
                    }`,
                    `translate(-50%, -50%) scale(1) ${imageIndex % 2
                        ? `rotate(-${rotation}deg)`
                        : `rotate(${rotation}deg)`
                    }`,
                ],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        animate(
            selector,
            {
                opacity: [1, 0],
            },
            { ease: "linear", duration: 0.5, delay: 1 }
        );

        imageRenderCount.current = imageRenderCount.current + 1;
    };

    return (
        <div
            ref={scope}
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}

            {images.map((img, index) => (
                <div
                    key={index}
                    className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 opacity-0 overflow-hidden"
                    data-mouse-move-index={index}
                >
                    <Image
                        src={img}
                        alt={`Mouse move image ${index}`}
                        width={144}
                        height={144}
                        className="object-cover"
                        unoptimized
                    />
                </div>
            ))}
        </div>
    );
};