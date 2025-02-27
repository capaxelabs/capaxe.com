// Simple test script to verify email rendering
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create output directory
const outputDir = path.join(__dirname, "..", "test-output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create a sample HTML file with inline styles (no Tailwind)
const sampleHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Sample Email Template</title>
</head>
<body style="font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; background-color: #ffffff; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin-left: auto; margin-right: auto; margin-top: 0; margin-bottom: 0; padding: 20px;">
        <div style="background-color: #5046e4; color: #ffffff; padding: 20px; border-top-left-radius: 6px; border-top-right-radius: 6px; margin-bottom: 20px;">
            <h1 style="font-size: 20px; line-height: 28px; font-weight: 400; margin: 0;">Sample Email Template</h1>
        </div>

        <div style="background-color: #f9fafb; padding: 20px; border-bottom-right-radius: 6px; border-bottom-left-radius: 6px; border-width: 1px; border-color: #e5e7eb;">
            <!-- Contact Information Section -->
            <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
                <p style="font-size: 16px; line-height: 24px; font-weight: 700; margin-bottom: 16px; margin: 16px 0;">Contact Information</p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Name:</span> Test User
                </p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Email:</span> test@example.com
                </p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Company:</span> Test Company
                </p>
            </div>

            <!-- Project Details Section -->
            <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
                <p style="font-size: 16px; line-height: 24px; font-weight: 700; margin-bottom: 16px; margin: 16px 0;">Project Details</p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Service Type:</span> Shopify App Development
                </p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Project Type:</span> New Project
                </p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Budget Range:</span> $5,000 - $10,000
                </p>
                <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">
                    <span style="font-weight: 600; display: inline-block; width: 6rem;">Timeline:</span> Within 1 Month
                </p>
            </div>

            <!-- Project Requirements Section -->
            <div>
                <p style="font-size: 16px; line-height: 24px; font-weight: 700; margin-bottom: 16px; margin: 16px 0;">Project Requirements</p>
                <div style="background-color: #ffffff; padding: 16px; border-radius: 4px; border: 1px solid #e5e7eb;">
                    <p style="margin-top: 8px; margin-bottom: 8px; font-size: 14px; line-height: 24px; margin: 16px 0;">This is a test message to verify email rendering.</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 20px; text-align: center; color: #9ca3af; font-size: 12px; line-height: 16px;">
            <p style="font-size: 14px; line-height: 24px; margin: 16px 0;">This inquiry was submitted through the Capaxe contact form.</p>
        </div>
    </div>
</body>
</html>
`;

// Save the sample HTML file
const samplePath = path.join(outputDir, "sample-email.html");
fs.writeFileSync(samplePath, sampleHtml);
console.log(`Sample email template saved to: ${samplePath}`);
console.log("Open this file in a browser to verify rendering");

// Create a README file with instructions
const readmePath = path.join(outputDir, "README.txt");
const readmeContent = `
Email Template Testing
=====================

This directory contains sample email templates with inline styles (no Tailwind CSS).
Open the HTML files in a browser to verify that they render correctly.

The templates use inline styles instead of Tailwind CSS for better compatibility with email clients.

Files:
- sample-email.html: A sample email template with inline styles

To test in a real email client:
1. Open the HTML file in a browser
2. Select all (Ctrl+A or Cmd+A)
3. Copy (Ctrl+C or Cmd+C)
4. Paste into an email compose window in your email client
5. Send a test email to yourself

This will help verify that the email renders correctly in actual email clients.
`;

fs.writeFileSync(readmePath, readmeContent);
console.log(`README file saved to: ${readmePath}`);
