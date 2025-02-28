import type { SiteConfig } from "~/types";

export const siteConfig: SiteConfig = {
    name: 'Capaxe Labs',
    description: 'Professional Shopify development and web solutions for growing businesses.',
    url: 'http://localhost:5173',
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

        title: 'Ongoing Support for Your Success',
        description: 'Choose from our flexible retainer plans designed to provide continuous improvements and support for your Shopify store. Partner with us for long-term success.',
        items: [
            {
                id: 1,
                title: 'Growth Plan',
                description: 'For businesses that require custom development & API integrations.',
                monthly: '$1,000',
                yearly: '$10,000',
                popular: false,
                features: [
                    '20 development hours/month',
                    'Shopify store tweaks, bug fixes & performance optimization',
                    'UI/UX improvements for Shopify themes & Hydrogen stores',
                    'Priority email support',
                    'Monthly report on implemented changes'
                ]
            },
            {
                id: 2,
                title: 'Standard Retainer',
                description: 'Perfect for established Shopify stores that need regular maintenance and small enhancements.',
                monthly: '$1,999',
                yearly: '$19,990',
                popular: true,
                features: [
                    '40 development hours per month',
                    'Dedicated Shopify expert',
                    'Priority support (24-48 hour response)',
                    'Shopify store tweaks, bug fixes & performance optimization',
                    'Monthly performance report',
                    'Bug fixes and troubleshooting',
                    'Small feature enhancements',
                    'Custom app development in yearly plan',
                    'Headless store development in yearly plan'
                ]
            },
            {
                id: 3,
                title: 'Premium Retainer',
                description: 'Ideal for growing businesses that need ongoing development and strategic guidance.',
                monthly: '$3,499',
                yearly: '$34,990',
                popular: false,
                features: [
                    '50 development hours per month',
                    'Dedicated Shopify expert team',
                    'VIP support (24 hour response)',
                    'Weekly check-ins',
                    'Monthly strategy sessions',
                    'App integration and customization',
                    'Performance optimization',
                    'Custom app development in yearly plan',
                    'Headless store development in yearly plan'
                ]
            }
        ]
    },
    servicesDtail: [
        {
            title: "Shopify Store Development",
            description: "Custom Shopify stores built from the ground up to meet your specific business needs.",
            icon: "store",
            href: "/services/shopify-development",
            features: [
                "Custom theme development",
                "Store setup and migration",
                "Third-party integrations",
                "Performance optimization",
                "Mobile-responsive design",
            ]
        },
        {
            title: "Shopify App Development",
            description: "Tailor-made applications to extend Shopify's functionality for your business.",
            icon: "app",
            href: "/services/app-development",
            features: [
                "Custom app development",
                "Public app development",
                "Seamless integrations",
                "API integrations",
                "App maintenance and support",
            ]
        },
        {
            title: "Web Development",
            description: "Modern web solutions built with cutting-edge technologies.",
            icon: "web",
            href: "/services/web-development",
            features: [
                "Frontend development",
                "Backend development",
                "Full stack solutions",
                "Responsive design",
                "Progressive web apps",
            ]
        },
        {
            title: "SEO & Performance",
            description: "Boost your store's visibility and speed to attract more customers and improve user experience.",
            icon: "seo",
            href: "/services/seo-performance",
            features: [
                "SEO optimization",
                "Performance enhancement",
                "Higher conversion rates",
                "Improved user experience",
                "Better SEO rankings",
            ]
        },
        {
            title: "E-commerce Solutions",
            description: "Complete e-commerce solutions to power your online business.",
            icon: "ecommerce",
            href: "/services/ecommerce-solutions",
            features: [
                "Platform development",
                "Integration services",
                "Analytics & optimization",
                "Payment gateway integration",
                "Shipping provider integration",
            ]
        },
        {
            title: "Technical Support",
            description: "24/7 expert technical support to keep your digital presence running smoothly.",
            icon: "support",
            href: "/services/support",
            features: [
                "24/7 support",
                "Maintenance services",
                "Expert troubleshooting",
                "Security updates",
                "Performance monitoring",
            ]
        },
        {
            title: "Store Development",
            description: "Build a powerful and engaging store tailored to your business needs.",
            icon: "store-dev",
            href: "/services/store-development",
            features: [
                "Liquid theme development",
                "Hydrogen + Oxygen deployment",
                "Headless storefront development",
                "Custom features & integrations",
                "End-to-end development",
            ]
        },
        {
            title: "Migration & Integration",
            description: "Seamlessly migrate your existing store or integrate with third-party platforms.",
            icon: "migration",
            href: "/services/migration",
            features: [
                "WooCommerce migration",
                "Magento migration",
                "Custom integrations",
                "Data migration",
                "API integrations",
            ]
        }
    ]
} 