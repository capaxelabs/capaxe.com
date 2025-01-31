import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
    name: 'Capaxe Labs',
    description: 'Professional Shopify development and web solutions for growing businesses.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ogImage: '/og-image.jpg',
    keywords: [
        'Shopify Development',
        'E-commerce Solutions',
        'Web Development',
        'Custom Shopify Stores',
        'E-commerce Development',
        'Technical Support'
    ],
    logo: {
        src: '/logo.svg', // Make sure to add your logo file
        alt: 'Capaxe Labs Logo',
        width: 150,
        height: 40
    },
    links: {
        twitter: 'https://twitter.com/capaxelabs',
        github: 'https://github.com/capaxelabs',
        linkedin: 'https://linkedin.com/company/capaxelabs'
    },
    contact: {
        email: 'contact@capaxelabs.com',
        phone: '+1 (555) 123-4567',
        address: '123 Tech Street, Silicon Valley, CA 94025'
    },
    hero: {
        title: 'Capaxe Labs',
        subtitle: '(Silicon Valley Based)',
        description: 'Professional Shopify development and web solutions for growing businesses.',
        slides: [
            '/hero-slide1.jpg',
            '/hero-slide2.jpg',
            '/hero-slide3.jpg'
        ]
    },
    services: {
        title: 'Our Services',
        description: 'We deliver cutting-edge Shopify solutions that drive e-commerce success.',
        items: [
            {
                title: 'Shopify Development',
                description: 'Custom Shopify store development tailored to your needs'
            },
            {
                title: 'E-commerce Solutions',
                description: 'End-to-end e-commerce implementation and optimization'
            },
            {
                title: 'Technical Support',
                description: '24/7 technical support for your online store'
            }
        ]
    },
    retainer: {
        title: 'Retainer Plans',
        description: 'We offer flexible retainer plans to suit your business needs.',
        items: [
            {
                title: 'Growth Plan',
                description: 'For businesses that require custom development & API integrations.',
                monthly: '$1,000',
                yearly: '$6,000',
                features: [
                    '20 development hours/month',
                    'Shopify store tweaks, bug fixes & performance optimization',
                    'UI/UX improvements for Shopify themes & Hydrogen stores',
                    'Priority email support',
                    'Monthly report on implemented changes',
                ]
            },
            {
                title: 'Scale Plan',
                description: 'For businesses that require continuous custom development & API integrations.',
                monthly: '$1,500',
                yearly: '$15,000',
                features: [
                    '35 development hours/month',
                    'Shopify store tweaks, bug fixes & performance optimization',
                    'UI/UX improvements for Shopify themes & Hydrogen stores',
                    'Priority email support',
                    'Monthly report on implemented changes',
                    '24/7 priority support',
                    'Cutsom app development in yearly plan',
                ]
            },

        ]
    }
} 