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
            isButton: true,
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
                title: "Shopify Store Redesign",
                href: "/case-studies/cld9-headless-storefront",
            },
            {
                title: "Custom App Development",
                href: "/case-studies/layaway-solution",
            },
            {
                title: "E-commerce Migration",
                href: "/case-studies/furniture-headless-store",
            },
        ],
    },
}   
