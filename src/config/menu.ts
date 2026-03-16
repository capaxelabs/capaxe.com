import type { MenuConfig } from "@/types";

export const menuConfig: MenuConfig = {
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Case Studies",
            href: "/case-studies",
        },
        {
            title: "Retainer Plans",
            href: "/retainer",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Book a call",
            href: "#",
            isButton: true,
            isCalBooking: true,
        },
    ],
    footerNav: {
        
        company: [
            {
                title: "About Us",
                href: "/about",
            },
            {
                title: "Blog",
                href: "/blog",
            },
            {
                title: "Case Studies",
                href: "/case-studies",
            },
            {
                title: "Retainer Plans",
                href: "/retainer",
            },
            {
                title: "Shopify Support",
                href: "/shopify-support",
            },
            {
                title: "Hire Shopify Developer",
                href: "/hire-shopify-developer",
            },
            {
                title: "Shopify Plus",
                href: "/shopify-plus",
            },
            {
                title: "Contact",
                href: "/contact",
            },
        ],
        legal: [
            {
                title: "Privacy Policy",
                href: "/legal/privacy-policy",
            },
            {
                title: "Terms of Service",
                href: "/legal/terms-of-service",
            },
            {
                title: "Cookie Policy",
                href: "/legal/cookie-policy",
            },
            {
                title: "Refund Policy",
                href: "/legal/refund-policy",
            },
        ],
        caseStudies: [
            {
                title: "CLD9 Headless Storefront",
                href: "/case-studies/cld9-headless-storefront",
            },
            {
                title: "Layaway Payment Solution",
                href: "/case-studies/layaway-solution",
            },
            {
                title: "Shootflo Platform",
                href: "/case-studies/shootflo-photo-workflow",
            },
            {
                title: "PhotosShoot AI",
                href: "/case-studies/photosshoot-ai-photography",
            },
            {
                title: "Memoid Platform",
                href: "/case-studies/memoid-developer-platform",
            },
            {
                title: "GetBee App",
                href: "/case-studies/getbee-mobile-app",
            },
        ],
    },
}   
