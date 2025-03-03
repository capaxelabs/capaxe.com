import { siteConfig } from '@/config/site';
import { generateEmailHtml, sendEmail } from '@/lib/email';
import type { APIRoute } from 'astro';
import { z } from 'zod';

export const runtime = "edge";
export const prerender = false;

const retainerRequestSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    companyName: z.string().min(1, "Company name is required"),
    storeUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
    message: z.string().min(10, "Message must be at least 10 characters"),
    planName: z.string(),
    planPrice: z.number(),
    planDuration: z.string()
});

type RetainerRequestData = z.infer<typeof retainerRequestSchema>;

async function sendRetainerRequestEmail(data: RetainerRequestData) {
    try {

        // Create HTML for the email
        const emailPart = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">New Retainer Plan Request</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.companyName}</p>
            ${data.storeUrl ? `<p><strong>Store URL:</strong> ${data.storeUrl}</p>` : ''}
            <h3 style="margin-top: 20px; color: #4f46e5;">Selected Plan</h3>
            <p><strong>Plan:</strong> ${data.planName}</p>
            <p><strong>Price:</strong> $${data.planPrice}/${data.planDuration}</p>
            <h3 style="margin-top: 20px; color: #4f46e5;">Message</h3>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        `;

        const emailHtml = generateEmailHtml(emailPart, "New Retainer Plan Request", "New Retainer Request: ${data.planName} Plan from ${data.name}");

        // Send email to admin
        const adminEmailResult = await sendEmail(
            emailHtml,
            siteConfig.contact.salesEmail,
            `New Retainer Request: ${data.planName} Plan from ${data.name}`,
            [],
            siteConfig.contact.salesEmail
        );


        return {
            success: adminEmailResult.success,
            message: "Retainer request sent successfully"
        };
    } catch (error) {
        console.error("Error sending retainer request email:", error);
        return {
            success: false,
            message: "Failed to send retainer request email"
        };
    }
}

async function sendRetainerRequestAutoReply(data: RetainerRequestData) {
    try {
        // Send confirmation email to customer
        const customerEmailPart = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">Thank You for Your Interest!</h2>
            <p>Dear ${data.name},</p>
            <p>Thank you for your interest in our ${data.planName} retainer plan. We've received your request and will get back to you shortly.</p>
            <p>Here's a summary of your request:</p>
            <ul>
                <li><strong>Plan:</strong> ${data.planName}</li>
                <li><strong>Price:</strong> $${data.planPrice}/${data.planDuration}</li>
            </ul>
            <p>If you have any questions in the meantime, please don't hesitate to contact us.</p>
            <p>Best regards,<br>The ${siteConfig.name} Team</p>
        </div>
        `;
        const customerEmailSubject = `Thank you for your interest in our ${data.planName} Plan`;
        const customerEmailHtml = generateEmailHtml(customerEmailPart, customerEmailSubject, customerEmailSubject);

        const customerEmailResult = await sendEmail(
            customerEmailHtml,
            data.email,
            customerEmailSubject,
            []
        );

        return {
            success: customerEmailResult.success,
            message: "Retainer request auto-reply sent successfully"
        };
    } catch (error) {
        console.error("Error sending retainer request auto-reply:", error);
        return {
            success: false,
            message: "Failed to send retainer request auto-reply"
        };
    }
}


export const POST: APIRoute = async ({ request }) => {
    try {
        // Parse and validate the request data
        const rawData = await request.json();
        const result = retainerRequestSchema.safeParse(rawData);

        if (!result.success) {
            // Return validation errors
            return new Response(
                JSON.stringify({
                    success: false,
                    errors: result.error.format()
                }),
                { status: 400 }
            );
        }

        // Extract validated data
        const validatedData = result.data;

        // Send the emails
        const emailResult = await sendRetainerRequestEmail(validatedData);

        // Send an auto-reply to the customer
        const autoReplyResult = await sendRetainerRequestAutoReply(validatedData);

        // Return the results
        return {
            success: emailResult.success && autoReplyResult.success,
            message: emailResult.success ? "Retainer request sent successfully" : emailResult.message,
            autoReplyResult
        };


    } catch (error) {
        console.error('Error processing retainer request:', error);
        return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 });
    }
} 