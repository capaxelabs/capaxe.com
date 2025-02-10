import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import { projects } from "@/data/projects";
import Projects from './projects';



export const metadata: Metadata = {
    title: `Portfolio | ${siteConfig.name}`,
    description: 'Explore our portfolio of successful Shopify stores, custom apps, and web development projects. See how we help businesses grow with innovative digital solutions.',
    openGraph: {
        title: `Portfolio | ${siteConfig.name}`,
        description: 'Explore our portfolio of successful Shopify stores, custom apps, and web development projects. See how we help businesses grow with innovative digital solutions.',
        type: 'website',
    },
};


export default function PortfolioPage() {
    return (
        <Projects projects={projects} />
    );
} 