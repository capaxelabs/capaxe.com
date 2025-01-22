export interface SiteConfig {
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
    contact: {
        email: string
        phone: string
        address: string
    }
}

export interface MenuItem {
    title: string
    href: string
    external?: boolean
}

export interface MenuConfig {
    mainNav: MenuItem[]
    footerNav: {
        solutions: MenuItem[]
        company: MenuItem[]
        support: MenuItem[]
        legal: MenuItem[]
    }
} 