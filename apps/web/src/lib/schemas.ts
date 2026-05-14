import { siteConfig } from '@/config/site';

export interface FAQItem {
    question: string;
    answer: string;
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export function getEnhancedOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.name,
        "legalName": siteConfig.legalName,
        "url": siteConfig.url,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.url}${siteConfig.logo.src}`,
            "width": siteConfig.logo.width,
            "height": siteConfig.logo.height
        },
        "foundingDate": "2020",
        "foundingLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.contact.address.split(',')[0].trim(),
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400098",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.contact.phone,
            "contactType": "customer service",
            "email": siteConfig.contact.contactEmail,
            "areaServed": ["IN", "US", "CA", "GB", "AU"],
            "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
            siteConfig.links.github
        ],
        "knowsAbout": [
            "Shopify App Development",
            "Stripe Payment Integration",
            "Plaid ACH Integration",
            "Layaway Payment Systems",
            "Headless Commerce",
            "Shopify Headless Storefronts",
            "Next.js Development",
            "React Development",
            "Subscription Systems",
            "E-commerce Development",
            "SaaS Development",
            "API Integration",
            "GraphQL",
            "TypeScript",
            "Payment Gateway Integration"
        ],
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
            },
            "geoRadius": "20000000"
        }
    };
}

export function getFAQPageSchema(faqs: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

export function getEnhancedServiceSchema(props: {
    name: string;
    description: string;
    pathname: string;
    serviceType?: string;
    techStack?: string[];
}) {
    const { name, description, pathname, serviceType, techStack } = props;

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": getEnhancedOrganizationSchema(),
        "serviceType": serviceType || name,
        "areaServed": [
            {
                "@type": "Country",
                "name": "United States",
                "identifier": "US"
            },
            {
                "@type": "Country",
                "name": "Canada",
                "identifier": "CA"
            },
            {
                "@type": "Country",
                "name": "India",
                "identifier": "IN"
            },
            {
                "@type": "Country",
                "name": "United Kingdom",
                "identifier": "GB"
            },
            {
                "@type": "Country",
                "name": "Australia",
                "identifier": "AU"
            },
            {
                "@type": "Place",
                "name": "European Union"
            }
        ],
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `${siteConfig.url}${pathname}`
        },
        "termsOfService": `${siteConfig.url}/terms`,
        ...(techStack && {
            "additionalType": techStack.join(", ")
        })
    };
}

export function getLocalBusinessSchema(props: {
    country: string;
    countryCode: string;
    city?: string;
    region?: string;
    latitude?: string;
    longitude?: string;
}) {
    const { country, countryCode, city, region, latitude, longitude } = props;

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `${siteConfig.name} - ${country}`,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}${siteConfig.logo.src}`,
        "description": `Professional Shopify development and web solutions serving ${country}.`,
        "address": {
            "@type": "PostalAddress",
            ...(city && { "addressLocality": city }),
            ...(region && { "addressRegion": region }),
            "addressCountry": countryCode
        },
        "areaServed": {
            "@type": "Country",
            "name": country,
            "identifier": countryCode
        },
        ...(latitude && longitude && {
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": latitude,
                "longitude": longitude
            }
        }),
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.contactEmail,
        "sameAs": [
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
            siteConfig.links.github
        ]
    };
}

export function getHowToSchema(props: {
    name: string;
    description: string;
    steps: Array<{
        name: string;
        text: string;
        url?: string;
    }>;
    totalTime?: string;
    tools?: string[];
}) {
    const { name, description, steps, totalTime, tools } = props;

    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        ...(totalTime && { "totalTime": totalTime }),
        ...(tools && {
            "tool": tools.map(tool => ({
                "@type": "HowToTool",
                "name": tool
            }))
        }),
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            ...(step.url && { "url": step.url })
        }))
    };
}

export function getQAPageSchema(props: {
    question: string;
    answer: string;
    author?: string;
}) {
    const { question, answer, author } = props;

    return {
        "@context": "https://schema.org",
        "@type": "QAPage",
        "mainEntity": {
            "@type": "Question",
            "name": question,
            "text": question,
            "answerCount": 1,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer,
                ...(author && {
                    "author": {
                        "@type": "Person",
                        "name": author
                    }
                })
            }
        }
    };
}

export function getCaseStudySchema(props: {
    title: string;
    description: string;
    problemStatement: string;
    solution: string;
    techStack: string[];
    industry?: string;
    geography?: string;
    pubDate: Date;
    url: string;
}) {
    const { title, description, problemStatement, solution, techStack, industry, geography, pubDate, url } = props;

    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": url,
        "headline": title,
        "description": description,
        "author": {
            "@type": "Organization",
            "name": siteConfig.name
        },
        "publisher": getEnhancedOrganizationSchema(),
        "datePublished": pubDate.toISOString(),
        "about": {
            "@type": "Project",
            "name": title,
            "description": problemStatement,
            "result": solution,
            "keywords": techStack.join(', '),
            ...(industry && { "industry": industry }),
            ...(geography && {
                "spatial": {
                    "@type": "Place",
                    "name": geography
                }
            })
        }
    };
}

export function getPersonSchema(props: {
    name: string;
    jobTitle: string;
    url: string;
    sameAs?: string[];
    knowsAbout?: string[];
    alumniOf?: string;
    credentials?: string[];
}) {
    const { name, jobTitle, url, sameAs, knowsAbout, alumniOf, credentials } = props;

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": jobTitle,
        "worksFor": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
        },
        "url": url,
        ...(sameAs && { "sameAs": sameAs }),
        ...(knowsAbout && { "knowsAbout": knowsAbout }),
        ...(alumniOf && {
            "alumniOf": {
                "@type": "Organization",
                "name": alumniOf
            }
        }),
        ...(credentials && credentials.length > 0 && {
            "hasCredential": credentials.map(credential => ({
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": credential
            }))
        })
    };
}
