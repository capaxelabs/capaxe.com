
export type CaseStudy = {
    id: string;
    title: string;
    client: string;
    description: string;
    metrics: {
        salesIncrease: string;
        loadingSpeed: string;
        conversionRate: string;
    };
    thumbnail: string;
    pdfUrl: string;
};

export const caseStudies: CaseStudy[] = [
    {
        id: 'shopify-migration',
        title: "Shopify Migration Success Story",
        client: "Fashion Retailer",
        description: "How we helped a fashion retailer migrate from Magento to Shopify Plus, resulting in a 45% increase in sales.",
        metrics: {
            salesIncrease: "45%",
            loadingSpeed: "2.1s",
            conversionRate: "3.2%"
        },
        thumbnail: "/case-studies/fashion-retailer.jpg",
        pdfUrl: "/case-studies/fashion-retailer.pdf"
    },
    {
        id: 'custom-app-development',
        title: "Custom App Development Case Study",
        client: "Beauty Brand",
        description: "Development of a custom Shopify app for a beauty brand that automated inventory management across 50+ stores.",
        metrics: {
            timeReduction: "75%",
            errorReduction: "95%",
            roi: "250%"
        },
        thumbnail: "/case-studies/beauty-brand.jpg",
        pdfUrl: "/case-studies/beauty-brand.pdf"
    },
    {
        id: 'performance-optimization',
        title: "E-commerce Performance Optimization",
        client: "Electronics Store",
        description: "How we improved site speed and user experience for a high-traffic electronics store.",
        metrics: {
            speedImprovement: "65%",
            bounceRateReduction: "40%",
            revenueIncrease: "25%"
        },
        thumbnail: "/case-studies/electronics-store.jpg",
        pdfUrl: "/case-studies/electronics-store.pdf"
    }
];

export type CaseStudyDetails = {
    title: string;
    client: string;
    description: string;
    challenge: string;
    solution: string;
    results: string;
    testimonial: Record<string, string>;
    metrics: Record<string, string>;
    pdfUrl: string;
};

export const caseStudiesDetails: Record<string, CaseStudyDetails> = {
    'shopify-migration': {
        title: "Shopify Migration Success Story",
        client: "Fashion Retailer",
        description: "How we helped a fashion retailer migrate from Magento to Shopify Plus, resulting in a 45% increase in sales.",
        challenge: `The client faced multiple challenges with their existing Magento store:
        • Slow loading times affecting user experience
        • High maintenance costs
        • Limited scalability during peak seasons
        • Complex backend management requiring technical expertise`,
        solution: `Our team implemented a comprehensive migration strategy:
        1. Data Analysis and Planning
        • Conducted thorough audit of existing data
        • Created detailed migration roadmap
        • Identified potential risks and mitigation strategies

        2. Custom Development
        • Built custom Shopify Plus theme
        • Developed data migration scripts
        • Implemented advanced features and integrations

        3. Testing and Optimization
        • Performed extensive testing
        • Optimized site performance
        • Conducted staff training`,
        results: `The migration resulted in significant improvements:
        • 45% increase in sales
        • 65% reduction in maintenance costs
        • 2.1s average page load time
        • 3.2% conversion rate (up from 2.1%)
        • Improved inventory management
        • Enhanced user experience`,
        testimonial: {
            quote: "The migration process was smooth and the results exceeded our expectations. Our team can now focus on growing the business instead of managing technical issues.",
            author: "Sarah Johnson",
            position: "E-commerce Director"
        },
        metrics: {
            salesIncrease: "45%",
            loadingSpeed: "2.1s",
            conversionRate: "3.2%"
        },
        pdfUrl: "/case-studies/fashion-retailer.pdf"
    },
    "custom-app-development": {
        title: "Custom App Development Case Study",
        client: "Beauty Brand",
        description: "Development of a custom Shopify app for a beauty brand that automated inventory management across 50+ stores.",
        challenge: `The client faced multiple challenges with their existing Magento store:
        • Slow loading times affecting user experience
        • High maintenance costs
        • Limited scalability during peak seasons
        • Complex backend management requiring technical expertise`,
        solution: `Our team implemented a comprehensive migration strategy:
        1. Data Analysis and Planning
        • Conducted thorough audit of existing data
        • Created detailed migration roadmap
        • Identified potential risks and mitigation strategies`,
        results: `The migration resulted in significant improvements:
        • 45% increase in sales
        • 65% reduction in maintenance costs
        • 2.1s average page load time
        • 3.2% conversion rate (up from 2.1%)
        • Improved inventory management
        • Enhanced user experience`,
        testimonial: {
            quote: "The migration process was smooth and the results exceeded our expectations. Our team can now focus on growing the business instead of managing technical issues.",
            author: "Sarah Johnson",
            position: "E-commerce Director"
        },
        metrics: {
            timeReduction: "75%",
            errorReduction: "95%",
            roi: "250%"
        },
        pdfUrl: "/case-studies/beauty-brand.pdf"
    },
    "performance-optimization": {
        title: "E-commerce Performance Optimization",
        client: "Electronics Store",
        description: "How we improved site speed and user experience for a high-traffic electronics store.",
        challenge: `The client faced multiple challenges with their existing Magento store:
        • Slow loading times affecting user experience
        • High maintenance costs
        • Limited scalability during peak seasons
        • Complex backend management requiring technical expertise`,
        solution: `Our team implemented a comprehensive migration strategy:
        1. Data Analysis and Planning
        • Conducted thorough audit of existing data
        • Created detailed migration roadmap
        • Identified potential risks and mitigation strategies`,
        results: `The migration resulted in significant improvements:
        • 45% increase in sales
        • 65% reduction in maintenance costs
        • 2.1s average page load time
        • 3.2% conversion rate (up from 2.1%)
        • Improved inventory management
        • Enhanced user experience`,
        testimonial: {
            quote: "The migration process was smooth and the results exceeded our expectations. Our team can now focus on growing the business instead of managing technical issues.",
            author: "Sarah Johnson",
            position: "E-commerce Director"
        },
        metrics: {
            salesIncrease: "45%",
            loadingSpeed: "2.1s",
            conversionRate: "3.2%"
        },
        pdfUrl: "/case-studies/electronics-store.pdf"
    }
};