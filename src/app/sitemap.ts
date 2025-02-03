import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url

    // Main Routes
    const mainRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as ChangeFreq,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as ChangeFreq,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/retainer`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as ChangeFreq,
            priority: 0.8,
        },
    ].map(route => ({
        ...route,
        changeFrequency: route.changeFrequency as ChangeFreq
    }))

    // Service Routes
    const serviceRoutes = [
        '/services/shopify-development',
        '/services/web-development',
        '/services/app-development',
        '/services/ecommerce-solutions',
        '/services/migration-integration',
        '/services/seo-performance',
        '/services/store-development',
        '/services/support',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.8,
    }))

    // Legal Routes
    const legalRoutes = [
        '/legal/privacy-policy',
        '/legal/terms-of-service',
        '/legal/refund-policy',
        '/legal/cookie-policy',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }))

    // Support Routes
    const supportRoutes = [
        // '/docs',
        '/faq',
        // '/press',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [
        ...mainRoutes,
        ...serviceRoutes,
        ...legalRoutes,
        ...supportRoutes,
    ]
}