import { ContactFormData, createContactFormEmail, createWelcomeEmail } from './lib/email';
import { renderReactEmail } from './lib/email';
import React from 'react';
import AutoReplyEmail from './emails/AutoReplyEmail';
import fs from 'fs';
import path from 'path';

/**
 * Test script to verify email rendering without Tailwind CSS
 * Run with: npx ts-node src/test-email-rendering.ts
 */
async function testEmailRendering() {
    // Create output directory
    const outputDir = path.join(__dirname, '..', 'test-output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Test Contact Form Email
    console.log('Testing Contact Form Email...');
    const contactData: ContactFormData = {
        name: 'Test User',
        email: 'test@example.com',
        companyName: 'Test Company',
        serviceType: 'app_development',
        projectType: 'new_project',
        storeUrl: 'https://test-store.myshopify.com',
        budget: '5k_to_10k',
        timeline: 'within_1_month',
        message: 'This is a test message to verify email rendering.'
    };

    const contactEmailHtml = createContactFormEmail(contactData);
    const contactEmailPath = path.join(outputDir, 'contact-email.html');
    fs.writeFileSync(contactEmailPath, contactEmailHtml);
    console.log(`Contact Form Email saved to: ${contactEmailPath}`);

    // Test Welcome Email
    console.log('\nTesting Welcome Email...');
    const welcomeEmailHtml = createWelcomeEmail(
        'Test User',
        'https://example.com/verify?token=abc123'
    );
    const welcomeEmailPath = path.join(outputDir, 'welcome-email.html');
    fs.writeFileSync(welcomeEmailPath, welcomeEmailHtml);
    console.log(`Welcome Email saved to: ${welcomeEmailPath}`);

    // Test Auto Reply Email
    console.log('\nTesting Auto Reply Email...');
    const autoReplyEmailHtml = renderReactEmail(
        React.createElement(AutoReplyEmail, {
            name: 'Test User',
            companyName: 'Test Company',
            serviceType: 'app_development'
        })
    );
    const autoReplyEmailPath = path.join(outputDir, 'auto-reply-email.html');
    fs.writeFileSync(autoReplyEmailPath, autoReplyEmailHtml);
    console.log(`Auto Reply Email saved to: ${autoReplyEmailPath}`);

    console.log('\nAll email templates have been generated. Open the HTML files in a browser to verify rendering.');
}

// Run the test
testEmailRendering().catch(console.error); 