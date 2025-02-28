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
    contact: {
        email: string
        phone: string
        address: string
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
    servicesDetail: {
        title: string
        description: string
        icon: string
        href: string
        features: string[]
    }[]
}

export interface MenuItem {
    title: string
    href: string
    external?: boolean
    icon?: React.ReactNode
    isButton?: boolean
}

export interface MenuConfig {
    mainNav: MenuItem[]
    footerNav: {
        solutions: MenuItem[]
        company: MenuItem[]
        support: MenuItem[]
        legal: MenuItem[]
        caseStudies: MenuItem[]
    }

} 