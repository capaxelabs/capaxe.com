import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {

    legalName: 'Capaxe Labs',
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
                title: 'Custom App Development',
                href: '/services/custom-app-development',
                description: "Tailor-made applications to extend Shopify's functionality for your business.",
                icon: "app",
                features: [
                    "Custom app development",
                    "Public app development",
                    "Seamless integrations",
                ]
            },
            {
                title: 'Public App Development',
                href: '/services/public-app-development',
                description: "Public apps are pre-built applications that can be used by any Shopify store.",
                icon: "app",
                features: [
                    "Public app development",
                    "Seamless integrations",
                    "Performance optimization",
                    "Mobile-responsive design",
                    "API integrations",
                    "Customization options",
                    "Regular updates",
                    "Regular maintenance",
                    "Regular support",
                ]
            },
            {
                title: 'Mobile App Development',
                href: '/services/mobile-app-development',
                description: "Custom mobile apps to extend Shopify's functionality for your business.",
                icon: "app",
                features: [
                    "Mobile app development",
                    "Seamless integrations",
                    "Performance optimization",
                    "Mobile-responsive design",
                ]
            },
            {
                title: 'E-commerce Solutions',
                href: '/services/ecommerce-solutions',
                description: "Complete e-commerce solutions to power your online business.",
                icon: "ecommerce",
                features: [
                    "E-commerce solutions",
                    "Seamless integrations",
                    "Performance optimization",
                    "Mobile-responsive design",
                ]
            },
            {
                title: 'Migration Integration',
                href: '/services/migration-integration',
                description: "Seamlessly migrate your existing store or integrate with third-party platforms.",
                icon: "migration",
                features: [
                    "Migration integration",
                    "Seamless integrations",
                    "Performance optimization",
                    "Mobile-responsive design",
                ]
            },
            {
                title: 'SEO & Performance',
                href: '/services/seo-performance',
                description: "Boost your store's visibility and speed to attract more customers and improve user experience.",
                icon: "seo",
                features: [
                    "SEO optimization",
                    "Performance enhancement",
                    "Higher conversion rates",
                    "Improved user experience",
                ]
            },
            {
                title: 'Shopify Maintenance',
                href: '/services/shopify-maintenance',
                description: "Regular maintenance to keep your store running smoothly.",
                icon: "maintenance",
                features: [
                    "Regular maintenance",
                    "Regular support",
                    "Regular updates",
                ]
            },
            {
                title: 'Store Development',
                href: '/services/store-development',
                description: "Build a powerful and engaging store tailored to your business needs.",
                icon: "store",
                features: [
                    "Liquid theme development",
                    "Hydrogen + Oxygen deployment",
                    "Headless storefront development",
                    "Custom features & integrations",
                    "End-to-end development",
                ]
            },
            {
                title: 'Web Development',
                href: '/services/web-development',
                description: "Modern web solutions built with cutting-edge technologies.",
                icon: "web",
                features: [
                    "Frontend development",
                    "Backend development",
                    "Full stack solutions",
                    "Responsive design",
                    "Progressive web apps",
                ]
            },
            {
                title: "Shopify Store Development",
                description: "Custom Shopify stores built from the ground up to meet your specific business needs.",
                icon: "store",
                href: "/services/store-development",
                features: [
                    "Custom theme development",
                    "Store setup and migration",
                    "Third-party integrations",
                    "Performance optimization",
                    "Mobile-responsive design",
                ]
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