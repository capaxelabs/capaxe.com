import React from 'react';
import { Section, Text, Button } from '@react-email/components';
import BaseTemplate from './BaseTemplate';

interface AutoReplyEmailProps {
    name: string;
    companyName: string;
    serviceType: string;
}

export const AutoReplyEmail: React.FC<AutoReplyEmailProps> = ({
    name,
    companyName,
    serviceType
}) => {
    // Format service type for display
    const formatServiceType = (type: string) => {
        const serviceMap: Record<string, string> = {
            'new_project': 'New Project',
            'retainer': 'Retainer / Subscription',
            'store_development': 'Shopify Store Development',
            'app_development': 'Shopify App Development',
            'store_customization': 'Store Customization',
            'app_customization': 'App Customization',
            'maintenance': 'Maintenance & Support',
            'other': 'Other'
        };
        return serviceMap[type] || type;
    };

    // Common styles
    const sectionStyle = {
        marginBottom: '24px',
        paddingBottom: '24px',
        borderBottom: '1px solid #e5e7eb'
    };

    const textStyle = {
        marginTop: '8px',
        marginBottom: '8px',
        fontSize: '14px',
        lineHeight: '24px',
        margin: '16px 0'
    };

    const headingStyle = {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
        marginBottom: '16px',
        margin: '16px 0'
    };

    const buttonStyle = {
        backgroundColor: '#5046e4',
        color: 'white',
        padding: '8px 24px',
        borderRadius: '4px',
        fontWeight: '600',
        margin: '0 8px',
        textDecoration: 'none',
        display: 'inline-block'
    };

    return (
        <BaseTemplate
            title="Thank You for Contacting Capaxe"
            previewText={`Thank you for your inquiry about ${formatServiceType(serviceType)}`}
            footerText="© 2024 Capaxe. All rights reserved."
        >
            <Section style={sectionStyle}>
                <Text style={headingStyle}>Thank You for Your Inquiry</Text>
                <Text style={textStyle}>Hello {name},</Text>
                <Text style={textStyle}>
                    Thank you for contacting Capaxe about {formatServiceType(serviceType)}. We have received your inquiry and a member of our team will review it shortly.
                </Text>
                <Text style={textStyle}>
                    We typically respond to inquiries within 1-2 business days. If your matter is urgent, please feel free to call us at (555) 123-4567.
                </Text>
            </Section>

            <Section style={sectionStyle}>
                <Text style={headingStyle}>What to Expect</Text>
                <Text style={textStyle}>
                    Our team will carefully review your requirements and get back to you with:
                </Text>
                <ul style={{ marginLeft: '24px' }}>
                    <li>Clarifying questions (if needed)</li>
                    <li>Potential solutions for your needs</li>
                    <li>Timeline and budget considerations</li>
                    <li>Next steps to move forward</li>
                </ul>
            </Section>

            <Section>
                <Text style={headingStyle}>Learn More About Capaxe</Text>
                <Text style={textStyle}>
                    While you wait, you might be interested in exploring more about our services and past work:
                </Text>
                <Section style={{ textAlign: 'center', margin: '24px 0' }}>
                    <Button
                        href="https://capaxe.com/case-studies"
                        style={buttonStyle}
                    >
                        View Case Studies
                    </Button>
                    <Button
                        href="https://capaxe.com/services"
                        style={buttonStyle}
                    >
                        Our Services
                    </Button>
                </Section>
                <Text style={{ ...textStyle, textAlign: 'center' }}>
                    We look forward to the opportunity to work with {companyName}!
                </Text>
            </Section>
        </BaseTemplate>
    );
};

export default AutoReplyEmail; 