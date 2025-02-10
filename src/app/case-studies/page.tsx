import { siteConfig } from '@/config/site';
import { caseStudies } from '@/data/caseStudy';
import { Metadata } from 'next';
import CaseStudies from './caseStudies';


export const metadata: Metadata = {
    title: `Case Studies | ${siteConfig.name}`,
    description: 'Explore our case studies and see how we helped businesses achieve their goals through innovative solutions.',
    openGraph: {
        title: `Case Studies | ${siteConfig.name}`,
        description: 'Explore our case studies and see how we helped businesses achieve their goals through innovative solutions.',
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    return (
        <CaseStudies caseStudies={caseStudies} />
    );
} 