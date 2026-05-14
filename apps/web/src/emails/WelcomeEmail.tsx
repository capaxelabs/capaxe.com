import React from 'react';
import { Section, Text, Button } from '@react-email/components';
import BaseTemplate from './BaseTemplate';

interface WelcomeEmailProps {
    name: string;
    verificationLink?: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
    name,
    verificationLink
}) => {
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
        textDecoration: 'none',
        display: 'inline-block'
    };

    return (
        <BaseTemplate
            title="Welcome to Capaxe"
            previewText={`Welcome to Capaxe, ${name}!`}
            footerText="If you have any questions, please contact our support team."
        >
            <Section style={sectionStyle}>
                <Text style={headingStyle}>Welcome to Capaxe!</Text>
                <Text style={textStyle}>Hello {name},</Text>
                <Text style={textStyle}>
                    Thank you for signing up with Capaxe. We're excited to have you on board!
                </Text>
                <Text style={textStyle}>
                    We specialize in Shopify development and are here to help you succeed with your e-commerce goals.
                </Text>

                {verificationLink && (
                    <>
                        <Text style={{ ...textStyle, textAlign: 'center' }}>
                            Please verify your email address by clicking the button below:
                        </Text>
                        <Section style={{ textAlign: 'center', margin: '24px 0' }}>
                            <Button
                                href={verificationLink}
                                style={buttonStyle}
                            >
                                Verify Email
                            </Button>
                        </Section>
                    </>
                )}
            </Section>

            <Section>
                <Text style={headingStyle}>Next Steps</Text>
                <Text style={textStyle}>Here's what you can do next:</Text>
                <ul style={{ marginLeft: '24px' }}>
                    <li>Complete your profile</li>
                    <li>Explore our services</li>
                    <li>Schedule a consultation</li>
                </ul>
            </Section>
        </BaseTemplate>
    );
};

export default WelcomeEmail; 