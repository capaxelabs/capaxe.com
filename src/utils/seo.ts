import { siteConfig } from '@/config/site';

export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    keywords?: string;
    canonical?: string;
    type?: 'website' | 'article' | 'product';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    noindex?: boolean;
    nofollow?: boolean;
    structuredData?: object;
}

export interface PageSEOProps extends SEOProps {
    pageName: string;
}

export type ContentType = 'basic' | 'service' | 'blog';

// Add this interface for structured data
interface StructuredData {
    "@context": string;
    "@type": string;
    [key: string]: unknown;
}

/**
 * Unified SEO function that creates metadata for any content type
 */
export function createSEO(props: PageSEOProps & {
    contentType?: ContentType;
    pathname?: string;
    publishDate?: Date;
    updateDate?: Date;
    authorName?: string;
}): SEOProps {
    const {
        pageName,
        description,
        contentType = 'basic',
        pathname,
        publishDate,
        updateDate,
        authorName,
        ...rest
    } = props;

    // Base SEO properties
    const baseTitle = `${pageName} | ${siteConfig.name}`;
    let seoDescription = description || siteConfig.description;
    let seoType: 'website' | 'article' | 'product' = 'website';
    let structuredData: StructuredData | Record<string, never> = {};
    let publishedTime: string | undefined;
    let modifiedTime: string | undefined;

    // Content type specific adjustments
    switch (contentType) {
        case 'service':
            seoDescription = description || `Professional ${pageName} services by ${siteConfig.name}`;
            structuredData = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": pageName,
                "description": seoDescription,
                "provider": {
                    "@type": "Organization",
                    "name": siteConfig.name,
                    "url": siteConfig.url
                },
                "serviceType": pageName,
                "areaServed": "Worldwide"
            };
            break;

        case 'blog':
            if (!publishDate) {
                console.warn('Blog posts should include a publish date');
            }

            seoDescription = description || `${pageName} - Blog post by ${siteConfig.name}`;
            seoType = 'article';

            // Format dates for metadata
            publishedTime = publishDate ? publishDate.toISOString() : new Date().toISOString();
            modifiedTime = updateDate ? updateDate.toISOString() : publishedTime;

            structuredData = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": pageName,
                "description": seoDescription,
                "datePublished": publishedTime,
                "dateModified": modifiedTime,
                "author": {
                    "@type": "Person",
                    "name": authorName || siteConfig.name
                },
                "publisher": {
                    "@type": "Organization",
                    "name": siteConfig.name,
                    "logo": {
                        "@type": "ImageObject",
                        "url": new URL("/logo.svg", siteConfig.url).toString()
                    }
                }
            };
            break;

        default:
            // Basic SEO has no additional structured data
            break;
    }

    return {
        title: baseTitle,
        description: seoDescription,
        type: seoType,
        publishedTime,
        modifiedTime,
        author: authorName,
        structuredData,
        ...rest
    };
} 