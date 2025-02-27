import { sendEmail, createContactFormEmail } from '@/lib/email';
import type { ContactFormData as EmailContactFormData } from '@/lib/email';
import { sendContactFormAutoReply } from '@/lib/send-contact-email';
import { sendContactFormEmail } from '@/lib/send-contact-email';
import type { APIRoute } from 'astro';
import { z } from 'zod';

export const runtime = "edge";
export const prerender = false;

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    companyName: z.string().min(1, "Company name is required"),
    serviceType: z.string().min(1, "Service type is required"),
    projectType: z.string().min(1, "Project type is required"),
    storeUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
    budget: z.string().min(1, "Budget is required"),
    timeline: z.string().min(1, "Timeline is required"),
    message: z.string().min(10, "Message must be at least 10 characters")
});


// Type for the validated form data
type ContactFormData = z.infer<typeof contactFormSchema>;

export async function handleContactFormSubmission(formData: ContactFormData) {
    try {
        // Validate the form data
        const validatedData = contactFormSchema.parse(formData);

        // Send the contact form email to the admin
        const adminEmailResult = await sendContactFormEmail(
            validatedData,
            'mukesh@capaxe.com', // Primary recipient
        );

        // Send an auto-reply to the customer
        const autoReplyResult = await sendContactFormAutoReply(validatedData);

        // Return the results
        return {
            success: adminEmailResult.success && autoReplyResult.success,
            message: adminEmailResult.success
                ? "Thank you for your inquiry. We'll be in touch soon!"
                : "There was an issue sending your inquiry. Please try again later.",
            adminEmailResult,
            autoReplyResult
        };
    } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: "Please check the form for errors",
                errors: error.errors.reduce((acc, curr) => {
                    const path = curr.path.join('.');
                    acc[path] = curr.message;
                    return acc;
                }, {} as Record<string, string>)
            };
        }

        // Handle other errors
        console.error("Contact form submission error:", error);
        return {
            success: false,
            message: "An unexpected error occurred. Please try again later."
        };
    }
}

export const POST: APIRoute = async ({ request }) => {
    try {
        // Parse and validate the request data
        const rawData = await request.json();
        const result = contactFormSchema.safeParse(rawData);

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

        console.log(
            validatedData.name,
            validatedData.email,
            validatedData.companyName,
            validatedData.serviceType,
            validatedData.projectType,
            validatedData.storeUrl,
            validatedData.budget,
            validatedData.timeline,
            validatedData.message
        );

        // Generate email HTML using the template function from email.ts
        const emailHtml = handleContactFormSubmission(validatedData as EmailContactFormData);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending contact email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
