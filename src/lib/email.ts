
// Import React for rendering
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ContactFormEmail from '@/emails/ContactFormEmail';
import WelcomeEmail from '@/emails/WelcomeEmail';
import { siteConfig } from '@/config/site';
import AutoReplyEmail from '@/emails/AutoReplyEmail';



// Email template types
export type EmailTemplateProps = {
    title: string;
    content: string;
    footerText?: string;
    accentColor?: string;
};

// Contact form data type
export type ContactFormData = {
    name: string;
    email: string;
    companyName: string;
    serviceType: string;
    projectType: string;
    storeUrl?: string;
    budget: string;
    timeline: string;
    message: string;
};

/**
 * Renders a React component to HTML string
 * @param component React component to render
 * @returns HTML string
 */
export function renderReactEmail(component: React.ReactElement): string {
    // Simply return the rendered HTML without adding DOCTYPE
    return renderToStaticMarkup(component);
}

/**
 * Creates a contact form email from the provided data
 * @param data Validated contact form data
 * @returns Formatted HTML string for the contact form email
 */
export function createContactFormEmail(data: ContactFormData): string {
    return renderReactEmail(React.createElement(ContactFormEmail, { data }));
}

/**
 * Creates a welcome email
 * @param name User's name
 * @param verificationLink Optional verification link
 * @returns Formatted HTML string for the welcome email
 */
export function createWelcomeEmail(name: string, verificationLink?: string): string {
    return renderReactEmail(React.createElement(WelcomeEmail, { name, verificationLink }));
}

/**
 * Sends an email using the Capaxe mail worker
 * @param emailHtml HTML content of the email
 * @param to Recipient email address
 * @param subject Email subject
 * @param attachments Optional file attachments
 * @param cc Optional CC recipients
 * @returns Response from the mail worker
 */
export async function sendEmail(
    emailHtml: string,
    to: string,
    subject: string,
    attachments: File[] = [],
    cc?: string
) {
    const formData = new FormData();
    // formData.append('to', to);
    formData.append('to', 'mukesh@capaxe.com');
    formData.append('from', siteConfig.contact.fromEmail);
    formData.append('subject', subject);

    // Use the HTML as-is without adding DOCTYPE
    formData.append('html', emailHtml.trim());

    if (cc) {
        formData.append('cc', cc);
    }

    // Add attachments if any
    attachments.forEach((file) => {
        formData.append('attachments', file);
    });

    const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow" as RequestRedirect
    };

    try {

        const response = await fetch('https://mail-worker.capaxe.workers.dev', requestOptions);

        // Log response headers for debugging
        const headers: Record<string, string> = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });

        if (!response.ok) {
            throw new Error(`Failed to send email: ${response.statusText}`);
        }

        // Check if the response is empty
        const text = await response.text();

        if (!text) {
            // Return a default success response if the API doesn't return anything
            return { success: true, message: "Email sent successfully" };
        }

        // Try to parse as JSON, but handle non-JSON responses gracefully
        try {
            const jsonResult = JSON.parse(text);
            return jsonResult;
        } catch (e) {
            // If it's not valid JSON, just return the text
            return { success: true, message: text };
        }
    } catch (error) {
        console.error("Email sending error:", error);
        throw error;
    }
}



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
    toEmail: string = siteConfig.contact.contactEmail,
    ccEmail?: string
) {
    try {

        // Work around start

        const formdata = new FormData();

        const html = `
        Hello
        Name: ${formData.name} \n
        Email: ${formData.email} \n
        Company Name: ${formData.companyName} \n
        Service Type: ${formData.serviceType} \n
        Project Type: ${formData.projectType} \n
        Store URL: ${formData.storeUrl} \n
        Budget: ${formData.budget} \n
        Timeline: ${formData.timeline} \n
        Message: ${formData.message} \n
        `;
        formdata.append("to", "contact@capaxe.com");
        formdata.append("from", "noreply@capaxe.com");
        formdata.append("subject", `New Inquiry from ${formData.name} at ${formData.companyName}`);
        formdata.append("html", html);

        const requestOptionss = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        const response = await fetch("https://mail-worker.capaxe.workers.dev", requestOptionss);


        return response;

        // Work around end





        // Generate the email HTML using React Email
        const emailHtml = createContactFormEmail(formData);


        // Create a subject line that includes the company name
        const formDataText = JSON.stringify(formData);

        const subject = `New Inquiry from ${formData.name} at ${formData.companyName}`;
        // Send the email
        const result = await sendEmail(
            formDataText,
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

        // Work around start
        const formdata = new FormData();
        const html = `
        Hello ${name} \n\n
        We have received your inquiry. We will get back to you soon. \n\n
        Regards, \n\n
        Capaxe Team
        `;
        formdata.append("to", email);
        formdata.append("from", "noreply@capaxe.com");
        formdata.append("subject", `Thank you for contacting Capaxe`);
        formdata.append("html", html);

        const requestOptionss = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        const response = await fetch("https://mail-worker.capaxe.workers.dev", requestOptionss);


        return response;

        // Work around end

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