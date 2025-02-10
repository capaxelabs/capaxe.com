import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Services | ${siteConfig.name}`,
    description: 'Discover our comprehensive range of Shopify development services including store development, app development, customization, and ongoing support.',
    openGraph: {
        title: `Services | ${siteConfig.name}`,
        description: 'Discover our comprehensive range of Shopify development services including store development, app development, customization, and ongoing support.',
        type: 'website',
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 