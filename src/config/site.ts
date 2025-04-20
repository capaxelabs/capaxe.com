import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {

    legalName: 'Capaxe Labs LLP',
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
        contactEmail: 'contact@capaxe.com',
        salesEmail: 'sales@capaxe.com',
        phone: '+91 70196 20967',
        address: 'Kalina, Santacruz (E), Mumbai, Maharashtra, India',
        fromEmail: 'anita@capaxe.com'
    },
    hero: {
        title: 'Capaxe Labs',
        subtitle: '(India Silicon Valley Based)',
        description: 'Professional Shopify development and web solutions for growing businesses.',
        slides: [
            '/hero-slide1.jpg',
            '/hero-slide2.jpg',
            '/hero-slide3.jpg'
        ]
    },
    services: {
        shopify: {
            title: 'Our Core Services', // Slightly adjusted title
            description: 'We deliver cutting-edge Shopify and web solutions that drive e-commerce success.', // Adjusted description
            items: [
                {
                    title: 'Shopify Store Development',
                    href: '/services/shopify/store-development',
                    description: "End-to-end Shopify store creation, from custom themes to full setup and feature integration.",
                    icon: "store", // Icon representing a store or cart
                    features: [
                        "Custom theme development (Liquid & Hydrogen)",
                        "Headless storefronts",
                        "Store setup & configuration",
                        "Custom feature implementation",
                        "Mobile-responsive design",
                    ]
                },
                {
                    title: 'Shopify App Development',
                    href: '/services/shopify/app-development', // Consolidated link
                    description: "Custom private and public Shopify applications to extend functionality and meet unique business needs.",
                    icon: "app", // Icon representing an application or puzzle piece
                    features: [
                        "Custom & Public app development",
                        "Seamless integrations with Shopify API",
                        "Performance optimization",
                        "Regular updates & support",
                        "API integrations",
                    ]
                },
                {
                    title: 'Web & Mobile Development',
                    href: '/services/shopify/web-mobile-development', // Consolidated link
                    description: "Modern web and mobile application solutions tailored for e-commerce and business needs.",
                    icon: "code", // Icon representing code or development
                    features: [
                        "Frontend & Backend development",
                        "Full stack solutions",
                        "Responsive web design",
                        "Native & Cross-platform mobile apps",
                        "Progressive Web Apps (PWA)",
                    ]
                },
                {
                    title: 'Migration & Integration',
                    href: '/services/shopify/migration-integration',
                    description: "Seamlessly migrate your store to Shopify or integrate with essential third-party platforms and systems.",
                    icon: "migration", // Icon representing data transfer or connection
                    features: [
                        "Platform migration (e.g., Magento to Shopify)",
                        "Data migration",
                        "Third-party API integrations (ERP, CRM, etc.)",
                        "Custom integration solutions",
                        "Performance considerations",
                    ]
                },
                {
                    title: 'SEO & Performance Optimization',
                    href: '/services/shopify/seo-performance',
                    description: "Enhance your store's visibility, speed, and user experience to drive traffic and conversions.",
                    icon: "rocket", // Icon representing speed or growth
                    features: [
                        "Technical SEO audits & implementation",
                        "Speed & performance optimization",
                        "Core Web Vitals improvement",
                        "Conversion Rate Optimization (CRO) insights",
                        "Improved user experience",
                    ]
                },
                {
                    title: 'Maintenance & Support',
                    href: '/services/shopify/maintenance-support', // Consolidated link
                    description: "Ongoing support and maintenance retainers to keep your Shopify store running smoothly and securely.",
                    icon: "wrench", // Icon representing tools or maintenance
                    features: [
                        "Regular updates & backups",
                        "Security monitoring",
                        "Bug fixes & troubleshooting",
                        "Proactive monitoring",
                        "Dedicated support options",
                    ]
                }
            ],
        },
        snowflake: {
            title: 'Our Services',
            description: 'We deliver cutting-edge Shopify solutions that drive e-commerce success.',
            items: [
                {
                    title: 'Snowflake Development',
                    href: '/services/snowflake-development',
                    description: "Build a powerful and engaging store tailored to your business needs.",
                    icon: "store",
                    features: [
                        "Snowflake development",
                        "Seamless integrations",
                        "Performance optimization",
                        "Mobile-responsive design",
                    ]
                }
            ]
        }
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
                    'Headless store development in yearly plan',
                ]
            }
        ]
    },

    contactForm: {
        serviceTypes: {
            'new_project': 'New Project',
            'retainer': 'Retainer / Subscription',
            'store_development': 'Shopify Store Development',
            'app_development': 'Shopify App Development',
            'store_customization': 'Store Customization',
            'app_customization': 'App Customization',
            'maintenance': 'Maintenance & Support',
            'other': 'Other'
        },
        budget: {
            'less_than_5k': 'Less than $5,000',
            '5k_to_10k': '$5,000 - $10,000',
            '10k_to_25k': '$10,000 - $25,000',
            'more_than_25k': 'More than $25,000'
        },
        timeline: {
            'immediate': 'Immediate Start',
            'within_1_month': 'Within 1 Month',
            'within_3_months': 'Within 3 Months',
            'flexible': 'Flexible'
        }


    }
}