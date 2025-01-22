import { MenuConfig } from "@/types";
export const menuConfig: MenuConfig = {
    mainNav: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Services',
            href: '/#services',
        },
        {
            title: 'About',
            href: '/#about',
        },
        {
            title: 'Contact',
            href: '/#contact',
        },
    ],
    footerNav: {
        solutions: [
            {
                title: 'Shopify Development',
                href: '/services/shopify-development',
            },
            {
                title: 'Web Development',
                href: '/services/web-development',
            },
            {
                title: 'E-commerce Solutions',
                href: '/services/ecommerce-solutions',
            },
            {
                title: 'Technical Support',
                href: '/services/support',
            },
        ],
        company: [
            {
                title: 'About Us',
                href: '/about',
            },
            {
                title: 'Careers',
                href: '/careers',
            },
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Press',
                href: '/press',
            },
        ],
        support: [
            {
                title: 'Documentation',
                href: '/docs',
            },
            {
                title: 'FAQ',
                href: '/faq',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
            {
                title: 'Support Portal',
                href: 'https://support.capaxelabs.com',
                external: true,
            },
        ],
        legal: [
            {
                title: 'Privacy Policy',
                href: '/privacy',
            },
            {
                title: 'Terms of Service',
                href: '/terms',
            },
            {
                title: 'Cookie Policy',
                href: '/cookies',
            },
        ],
    },
} 