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

// Import React for rendering
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ContactFormEmail from '@/emails/ContactFormEmail';
import WelcomeEmail from '@/emails/WelcomeEmail';

/**
 * Creates a common email template with consistent styling
 * @param props Template properties including title, content, and optional styling
 * @returns Formatted HTML string for the email
 */
export function createEmailTemplate(props: EmailTemplateProps): string {
    const {
        title,
        content,
        footerText = "This email was sent from Capaxe.",
        accentColor = "#5046e4"
    } = props;

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background-color: ${accentColor};
                color: white;
                padding: 20px;
                border-radius: 5px 5px 0 0;
                margin-bottom: 20px;
            }
            .content {
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 0 0 5px 5px;
                border: 1px solid #eee;
            }
            .section {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
            }
            .section:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            h2 {
                color: ${accentColor};
                margin-top: 0;
            }
            h3 {
                color: #333;
                margin-top: 0;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
            }
            .field {
                margin-bottom: 10px;
            }
            .label {
                font-weight: bold;
                display: inline-block;
                min-width: 120px;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #999;
                text-align: center;
            }
            .message-content {
                background-color: white;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #eee;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: ${accentColor};
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin: 10px 0;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h2>${title}</h2>
        </div>
        <div class="content">
            ${content}
        </div>
        <div class="footer">
            <p>${footerText}</p>
        </div>
    </body>
    </html>
    `;

    // remove all newlines
    return html.replace(/\n/g, '');
}

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
    formData.append('to', to);
    formData.append('from', process.env.SMTP_FROM || 'anita@capaxe.com');   
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
