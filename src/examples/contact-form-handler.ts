import type { ContactFormData } from '@/lib/email';
import { sendContactFormEmail, sendContactFormAutoReply } from '@/lib/send-contact-email';
import { z } from 'zod';

// Define a schema for validating contact form data
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

/**
 * Example of handling a contact form submission
 * This could be used in an API route or form action
 */
export async function handleContactFormSubmission(formData: unknown) {
    try {
        // Validate the form data
        const validatedData = contactFormSchema.parse(formData);

        // Send the contact form email to the admin
        const adminEmailResult = await sendContactFormEmail(
            validatedData,
            'contact@capaxe.com', // Primary recipient
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

/**
 * Example usage in an API route or form action
 */
async function exampleUsage() {
    // This would come from your form submission
    const formData = {
        name: "Mukesh",
        email: "mukesh@capaxe.com",
        companyName: "Capaxe Labs",
        serviceType: "store_development",
        projectType: "new_project",
        storeUrl: "https://example-store.myshopify.com",
        budget: "10k_to_25k",
        timeline: "within_1_month",
        message: "I need a custom Shopify store with advanced product filtering and a unique checkout experience."
    };

    const result = await handleContactFormSubmission(formData);

    // In a real API route, you would return the result
    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
    });
}

// Uncomment to test
// exampleUsage(); 