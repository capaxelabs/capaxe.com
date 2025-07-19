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
                title: 'Starter – 15h',
                description: 'Perfect for small businesses or new Shopify stores needing reliable, on-demand support and improvements.',
                monthly: '$1,200',
                yearly: '$11,520', // 20% discount if billed yearly
                popular: false,
                features: [
                    'Monthly strategy meetings',
                    'Monthly website audits',
                    'Cancel anytime',
                    'Real-time chat support',
                    'Non-urgent: reply within 48h',
                    'Critical issues: immediate action',
                    'Most tasks completed in 24h',
                    'Dedicated PM & Shopify developer',
                    'Project collaboration in ClickUp or your preferred tool',
                    'Regular progress & performance updates'
                ]
            },
            {
                id: 2,
                title: 'Growth – 30h',
                description: 'Best for growing businesses with more complex Shopify needs, including CRO and advanced support.',
                monthly: '$1,999',
                yearly: '$19,990', // 20% discount if billed yearly
                popular: true,
                features: [
                    'On-request growth strategy meetings',
                    'On-request website audits',
                    'Regular CRO audits with actionable insights',
                    'Cancel anytime',
                    'Real-time chat support',
                    'Priority response within 24h',
                    'Critical issues: immediate action',
                    'Most tasks completed in 24h',
                    'Dedicated PM & Tech Lead',
                    'Dedicated & backup Shopify developer',
                    'Project collaboration in ClickUp or your preferred tool',
                    'Regular progress & performance updates'
                ]
            },
            {
                id: 3,
                title: 'Enterprise – 50h',
                description: 'Tailored for high-growth or large Shopify businesses with demanding, ongoing dev & design needs.',
                monthly: '$3,200',
                yearly: '$30,720', // 20% discount if billed yearly
                popular: false,
                features: [
                    'Frequent growth strategy sessions (2–3/mo)',
                    'Weekly website audits',
                    'Advanced CRO audits & best practices for conversion growth',
                    'Cancel anytime',
                    'Real-time chat support',
                    'Priority initial response within 12h',
                    'Critical issues: immediate action',
                    'Most tasks resolved within 12h',
                    'Senior PM & Tech Lead',
                    '2 dedicated & 2 backup Shopify developers',
                    'Project collaboration in ClickUp or your preferred tool',
                    'Regular progress & performance updates'
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