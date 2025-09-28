export interface SiteConfig {
    legalName: string
    name: string
    description: string
    url: string
    ogImage: string
    keywords: string[]
    logo: {
        src: string
        alt: string
        width: number
        height: number
    }
    links: {
        twitter: string
        github: string
        linkedin: string
    }
    hero: {
        title: string
        subtitle: string
        description: string
        slides: string[]
    }
    services: {
        shopify: {
            title: string
            description: string
            items: {
                title: string
                description: string
                icon: string
                features: string[]
                href: string
            }[]
        },
        snowflake: {
            title: string
            description: string
            items: {
                title: string
                description: string
                icon: string
                features: string[]
                href: string
            }[]
        }

    }
    contact: {
        contactEmail: string
        salesEmail: string
        phone: string
        address: string
        fromEmail: string
    },
    retainer: {

        title: string
        description: string
        items: {
            id: number
            title: string
            description: string
            monthly: string
            yearly: string
            popular: boolean
            features: string[]
        }[]
    }
    contactForm: {
        serviceTypes: Record<string, string>
        budget: Record<string, string>
        timeline: Record<string, string>
    }
}

export interface Plan {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: string;
    features: string[];
    popular: boolean;
}

export interface MenuItem {
    title: string
    href: string
    external?: boolean
    icon?: React.ReactNode
    isButton?: boolean
    isCalBooking?: boolean
}

export interface MenuConfig {
    mainNav: MenuItem[]
    footerNav: {
        company: MenuItem[]
        legal: MenuItem[]
        caseStudies: MenuItem[]
    }
} 