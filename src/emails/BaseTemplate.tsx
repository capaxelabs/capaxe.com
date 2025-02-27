import React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
    Tailwind,
} from '@react-email/components';

export interface BaseTemplateProps {
    title: string;
    previewText?: string;
    children: React.ReactNode;
    footerText?: string;
    accentColor?: string;
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({
    title,
    previewText,
    children,
    footerText = "This email was sent from Capaxe.",
    accentColor = "#5046e4"
}) => {
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="x-apple-disable-message-reformatting" />
                <title>{title}</title>
            </Head>
            <Preview>{previewText || title}</Preview>
            <Tailwind>
                <Body className="font-sans bg-white">
                    <Container className="max-w-600 mx-auto my-0 p-5">
                        <Section className="bg-[#5046e4] text-white p-5 rounded-t-md mb-5">
                            <Heading className="text-xl font-normal m-0">{title}</Heading>
                        </Section>

                        <Section className="bg-gray-50 p-5 rounded-b-md border border-gray-200">
                            {children}
                        </Section>

                        <Section className="mt-5 text-center text-gray-400 text-xs">
                            <Text>{footerText}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default BaseTemplate; 