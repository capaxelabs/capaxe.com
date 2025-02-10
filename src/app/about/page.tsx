import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import About from './about';

export const metadata: Metadata = {
    title: `About Us | ${siteConfig.name}`,
    description: 'Learn about our team of passionate developers and designers creating exceptional digital experiences. Discover our story, values, and commitment to revolutionizing digital commerce.',
    openGraph: {
        title: `About Us | ${siteConfig.name}`,
        description: 'Learn about our team of passionate developers and designers creating exceptional digital experiences. Discover our story, values, and commitment to revolutionizing digital commerce.',
        type: 'website',
    },
};

export default function AboutPage() {
    return (
        <About />
    );
} 