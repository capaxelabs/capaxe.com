import React from 'react';
import { Section, Text, Link } from '@react-email/components';
import BaseTemplate from './BaseTemplate';
import type { ContactFormData } from '@/lib/email';
import { siteConfig } from '@/config/site';

interface ContactFormEmailProps {
    data: ContactFormData;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ data }) => {
    // Format helpers
    const formatBudget = (budget: string) => {
        const budgetMap: Record<string, string> = siteConfig.contactForm.budget;
        return budgetMap[budget] || budget;
    };

    const formatTimeline = (timeline: string) => {
        const timelineMap: Record<string, string> = siteConfig.contactForm.timeline;
        return timelineMap[timeline] || timeline;
    };

    const formatServiceType = (serviceType: string) => {
        const serviceMap: Record<string, string> = siteConfig.contactForm.serviceTypes;
        return serviceMap[serviceType] || serviceType;
    };

    return (
        <BaseTemplate
            title="New Shopify Development Inquiry"
            previewText={`New inquiry from ${data.name} at ${data.companyName}`}
            footerText="This inquiry was submitted through the Capaxe contact form."
        >
            <Section className="mb-6 pb-6 border-b border-gray-200">
                <Text className="text-base font-bold mb-4">Contact Information</Text>
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Name:</span> {data.name}
                </Text>
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Email:</span> {data.email}
                </Text>
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Company:</span> {data.companyName}
                </Text>
            </Section>

            <Section className="mb-6 pb-6 border-b border-gray-200">
                <Text className="text-base font-bold mb-4">Project Details</Text>
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Service Type:</span> {formatServiceType(data.serviceType)}
                </Text>
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Project Type:</span> {data.projectType === 'new_project' ? 'New Project' : 'Existing Project'}
                </Text>
                {data.storeUrl && (
                    <Text className="my-2">
                        <span className="font-semibold inline-block w-24">Store URL:</span>
                        <Link href={data.storeUrl}>{data.storeUrl}</Link>
                    </Text>
                )}
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Budget Range:</span> {formatBudget(data.budget)}
                </Text>
                <Text className="my-2">
                    <span className="font-semibold inline-block w-24">Timeline:</span> {formatTimeline(data.timeline)}
                </Text>
            </Section>

            <Section>
                <Text className="text-base font-bold mb-4">Project Requirements</Text>
                <Section className="bg-white p-4 rounded border border-gray-200">
                    {data.message.split('\n').map((line, i) => (
                        <Text key={i} className="my-2">{line}</Text>
                    ))}
                </Section>
            </Section>
        </BaseTemplate>
    );
};

export default ContactFormEmail; 