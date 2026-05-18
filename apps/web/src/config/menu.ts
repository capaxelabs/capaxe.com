import type { MenuConfig } from "@/types";

export const menuConfig: MenuConfig = {
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Capabilities",
            href: "/capabilities",
        },
        {
            title: "Engagements",
            href: "/engagements",
        },
        {
            title: "Case Studies",
            href: "/case-studies",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Book a strategy call",
            href: "#",
            isButton: true,
            isCalBooking: true,
        },
    ],
    footerNav: {
        
        company: [
            {
                title: "About",
                href: "/about",
            },
            {
                title: "Capabilities",
                href: "/capabilities",
            },
            {
                title: "Engagements",
                href: "/engagements",
            },
            {
                title: "Case Studies",
                href: "/case-studies",
            },
            {
                title: "Projects",
                href: "/projects",
            },
            {
                title: "Blog",
                href: "/blog",
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
                title: "Furniture Headless Store",
                href: "/case-studies/furniture-headless-store",
            },
            {
                title: "RenderEase 3D Viewer",
                href: "/case-studies/renderease-3d-viewer",
            },
            {
                title: "Picking List PDF",
                href: "/case-studies/picking-list-pdf",
            },
        ],
    },
}   
