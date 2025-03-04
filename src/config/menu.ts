import type { MenuConfig } from "@/types";
import { caseStudies } from "@/config/caseStudy";

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
        solutions: [
            {
                title: "Shopify Store Development",
                href: "/services/store-development",
            },
            {
                title: "Custom App Development",
                href: "/services/custom-app-development",
            },
            {
                title: "Public App Development",
                href: "/services/public-app-development",
            },
            {
                title: "Mobile App Development",
                href: "/services/mobile-app-development",
            },
            {
                title: "E-commerce Solutions",
                href: "/services/ecommerce-solutions",
            },
            {
                title: "Migration & Integration",
                href: "/services/migration-integration",
            },
            {
                title: "SEO & Performance",
                href: "/services/seo-performance",
            },
            {
                title: "Shopify Maintenance",
                href: "/services/shopify-maintenance",
            },
            {
                title: "Retainer Plans",
                href: "/retainer",
            },
        ],
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
                href: "/case-studies/shopify-store-redesign",
            },
            {
                title: "Custom App Development",
                href: "/case-studies/custom-app-development",
            },
            {
                title: "E-commerce Migration",
                href: "/case-studies/ecommerce-migration",
            },
        ],
    },
}   
