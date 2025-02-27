
import type { MenuConfig } from "@/types";

export const menuConfig: MenuConfig = {
    mainNav: [
        { title: 'Home', href: '/', },
        { title: 'Services', href: '/services', },
        { title: 'Retainer', href: '/retainer', },
        { title: 'Blog', href: '/blog', },
        { title: 'About', href: '/about', },
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'Case Studies', href: '/case-studies' },
        { title: 'Contact', href: '/contact', isButton: true },
    ],
    footerNav: {
        solutions: [
            { title: 'Shopify Development', href: '/services/shopify-development' },
            { title: 'App Development', href: '/services/app-development' },
            { title: 'E-commerce Solutions', href: '/services/ecommerce-solutions' },
            { title: 'Retainer Plans', href: '/retainer' },
            { title: 'Migration Integration', href: '/services/migration-integration' },
            { title: 'SEO & Performance', href: '/services/seo-performance' },
            { title: 'Shopify Maintenance', href: '/services/shopify-maintenance' },
            { title: 'Store Development', href: '/services/store-development' },
            { title: 'Web Development', href: '/services/web-development' },
            { title: 'Technical Support', href: '/services/support' },
        ],
        company: [
            { title: 'About Us', href: '/about' },
            { title: 'Blog', href: '/blog' },
            { title: 'Press', href: '/press' },
        ],
        support: [
            { title: 'FAQ', href: '/faq' },
            { title: 'Contact', href: '/contact' },
        ],
        legal: [
            { title: 'Privacy Policy', href: '/legal/privacy-policy' },
            { title: 'Terms of Service', href: '/legal/terms-of-service' },
            { title: 'Refund Policy', href: '/legal/refund-policy' },
            { title: 'Cookie Policy', href: '/legal/cookie-policy' },
        ],
    },
}   
