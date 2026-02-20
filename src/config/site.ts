import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {

    legalName: 'Capaxe Labs LLP',
    name: 'Capaxe Labs',
    description: 'Professional Shopify development and web solutions for growing businesses.',
    url: 'https://www.capaxe.com',
    ogImage: '/og.jpg',
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
        title: 'Pricing is simple. No lengthy contracts. No managing employees. No headaches.',
        description: '',
        items: [
            {
                id: 1,
                title: 'Fixed or Milestone plan',
                description: 'Ideal for individuals or startups on a budget with an fairely defined fixed scope and want to build to validate their idea/vision.',
                monthly: 'Book a call to know more',
                yearly: '',
                popular: true,
                features: [
                    'Clearly defined project scope & deliverables',
                    'Fixed pricing with no surprises',
                    'Milestone-based payment structure',
                    'Perfect for MVP development',
                    'Ideal for budget-conscious startups',
                    'Timeline-driven project completion'
                ]
            },
            {
                id: 2,
                title: 'Monthly plan',
                description: 'Ideal for companies with a budget, growing need for design support to address several problem statements at once.',
                monthly: 'Book a call to know more',
                yearly: '',
                popular: false,
                features: [
                    'Dedicated Shopify developer & project manager',
                    'Monthly strategy meetings & website audits',
                    'Real-time chat support with priority response',
                    'Bug fixes & feature enhancements',
                    'Performance optimization & monitoring',
                    'Regular progress updates & reporting',
                    'Cancel anytime - no long-term contracts',
                    'Project collaboration in your preferred tools'
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
    },
    clientLogos: [
        { src: "/logos/clients/aos.webp", alt: "AOS", name: "AOS" },
        { src: "/logos/clients/cld9.png", alt: "CLD9", name: "CLD9" },
        { src: "/logos/clients/pickinglist.webp", alt: "Picking List", name: "Picking List" },
        { src: "/logos/clients/renderease.avif", alt: "RenderEase", name: "RenderEase" },
        { src: "/logos/clients/renderease.png", alt: "RenderEase PNG", name: "RenderEase" }
    ]
}