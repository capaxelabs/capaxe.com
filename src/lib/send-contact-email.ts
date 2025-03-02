import type { ContactFormData } from './email';
import { createContactFormEmail, renderReactEmail, sendEmail } from './email';
import React from 'react';
import AutoReplyEmail from '../emails/AutoReplyEmail';

/**
 * Sends a contact form email to the specified recipients
 * 
 * @param formData Validated contact form data
 * @param toEmail Recipient email address (default: admin@capaxe.com)
 * @param ccEmail Optional CC email address
 * @returns Response from the email service
 */
export async function sendContactFormEmail(
    formData: ContactFormData,
    toEmail: string = 'contact@capaxe.com',
    ccEmail?: string
) {
    try {
        // Generate the email HTML using React Email
        const emailHtml = createContactFormEmail(formData);

        // Create a subject line that includes the company name
        const subject = `New Inquiry from ${formData.name} at ${formData.companyName}`;
        // Send the email
        const result = await sendEmail(
            emailHtml,
            toEmail,
            subject,
            [], // No attachments
            ccEmail
        );

        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Failed to send contact form email:', error);

        // Provide more detailed error information
        const errorMessage = error instanceof Error
            ? `${error.name}: ${error.message}`
            : 'Unknown error sending email';

        return {
            success: false,
            error: errorMessage,
            details: error
        };
    }
}

/**
 * Sends an auto-reply email to the contact form submitter
 * 
 * @param formData Validated contact form data
 * @returns Response from the email service
 */
export async function sendContactFormAutoReply(formData: ContactFormData) {
    try {
        // Extract needed data for the auto-reply
        const { name, email, companyName, serviceType } = formData;

        // Generate the auto-reply email HTML using React Email
        const emailHtml = renderReactEmail(
            React.createElement(AutoReplyEmail, {
                name,
                companyName,
                serviceType
            })
        );

        // Send the email
        const result = await sendEmail(
            emailHtml,
            email,
            'Thank you for contacting Capaxe',
            [] // No attachments
        );

        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Failed to send auto-reply email:', error);

        // Provide more detailed error information
        const errorMessage = error instanceof Error
            ? `${error.name}: ${error.message}`
            : 'Unknown error sending auto-reply';

        return {
            success: false,
            error: errorMessage,
            details: error
        };
    }
} 