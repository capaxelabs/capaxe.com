import type { MenuConfig } from "@/types";
import { caseStudies } from "@/config/caseStudy";

export const menuConfig: MenuConfig = {
    mainNav: [
        { title: 'Home', href: '/', },
        { title: 'Services', href: '/services', },
        { title: 'Retainer', href: '/retainer', },
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'Contact', href: '/contact', isButton: true },
    ],
    footerNav: {
        solutions: [
            { title: 'Custom App Development', href: '/services/custom-app-development' },
            { title: 'Public App Development', href: '/services/public-app-development' },
            { title: 'Mobile App Development', href: '/services/mobile-app-development' },
            { title: 'E-commerce Solutions', href: '/services/ecommerce-solutions' },
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
        caseStudies: caseStudies.map(study => ({
            title: study.title,
            href: `/case-studies/${study.id}`
        })),
        legal: [
            { title: 'Privacy Policy', href: '/legal/privacy-policy' },
            { title: 'Terms of Service', href: '/legal/terms-of-service' },
            { title: 'Refund Policy', href: '/legal/refund-policy' },
            { title: 'Cookie Policy', href: '/legal/cookie-policy' },
        ],
    },
}   
