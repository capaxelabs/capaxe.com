import { createContactFormEmail, createWelcomeEmail, sendEmail, type ContactFormData } from '@/lib/email';

/**
 * Example of sending a contact form email
 */
async function sendContactFormEmailExample() {
    // Sample contact form data
    const contactData: ContactFormData = {
        name: 'John Doe',
        email: 'mak.gnu@gmail.com',
        companyName: 'Example Store',
        serviceType: 'store_development',
        projectType: 'new_project',
        storeUrl: 'https://example-store.myshopify.com',
        budget: '10k_to_25k',
        timeline: 'within_1_month',
        message: 'I need a custom Shopify store with advanced product filtering and a unique checkout experience.\n\nI also need integration with my existing inventory system.'
    };

    // Generate the email HTML using React Email
    const emailHtml = createContactFormEmail(contactData);

    // const emailHtml = `
    // <html dir="ltr" lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/><meta name="x-apple-disable-message-reformatting"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><meta name="x-apple-disable-message-reformatting"/><title>New Shopify Development Inquiry</title></head><div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">New inquiry from John Doe at Example Store<div> ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍ ‌​‍</div></div><body style="font-family:ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;background-color:rgb(255,255,255)"><table align="center" width="100%" class="max-w-600" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;padding:1.25rem;max-width:37.5em"><tbody><tr style="width:100%"><td><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(80,70,228);color:rgb(255,255,255);padding:1.25rem;border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;margin-bottom:1.25rem"><tbody><tr><td><h1 style="font-size:1.25rem;line-height:1.75rem;font-weight:400;margin:0px">New Shopify Development Inquiry</h1></td></tr></tbody></table><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(249,250,251);padding:1.25rem;border-bottom-right-radius:0.375rem;border-bottom-left-radius:0.375rem;border-width:1px;border-color:rgb(229,231,235)"><tbody><tr><td><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom-width:1px;border-color:rgb(229,231,235)"><tbody><tr><td><p style="font-size:1rem;line-height:1.5rem;font-weight:700;margin-bottom:1rem;margin:16px 0">Contact Information</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Name:</span> John Doe</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Email:</span> mak.gnu@gmail.com</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Company:</span> Example Store</p></td></tr></tbody></table><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom-width:1px;border-color:rgb(229,231,235)"><tbody><tr><td><p style="font-size:1rem;line-height:1.5rem;font-weight:700;margin-bottom:1rem;margin:16px 0">Project Details</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Service Type:</span> Shopify Store Development</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Project Type:</span> New Project</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Store URL:</span><a href="https://example-store.myshopify.com" style="color:#067df7;text-decoration-line:none" target="_blank">https://example-store.myshopify.com</a></p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Budget Range:</span> $10,000 - $25,000</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"><span style="font-weight:600;display:inline-block;width:6rem">Timeline:</span> Within 1 Month</p></td></tr></tbody></table><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation"><tbody><tr><td><p style="font-size:1rem;line-height:1.5rem;font-weight:700;margin-bottom:1rem;margin:16px 0">Project Requirements</p><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(255,255,255);padding:1rem;border-radius:0.25rem;border-width:1px;border-color:rgb(229,231,235)"><tbody><tr><td><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0">I need a custom Shopify store with advanced product filtering and a unique checkout experience.</p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0"></p><p style="margin-top:0.5rem;margin-bottom:0.5rem;font-size:14px;line-height:24px;margin:16px 0">I also need integration with my existing inventory system.</p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:1.25rem;text-align:center;color:rgb(156,163,175);font-size:0.75rem;line-height:1rem"><tbody><tr><td><p style="font-size:14px;line-height:24px;margin:16px 0">This inquiry was submitted through the Capaxe contact form.</p></td></tr></tbody></table></td></tr></tbody></table></body></html>
    // `;

    console.log(emailHtml);

    try {
        // Send the email
        const result = await sendEmail(
            emailHtml,
            'mukesh@capaxe.com',
            'New Contact Form Submission',
            [], // No attachments
            'anita@capaxe.com' // Optional CC
        );

        console.log('Email sent successfully:', result);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}

/**
 * Example of sending a welcome email
 */
async function sendWelcomeEmailExample() {
    // Generate the email HTML using React Email
    const emailHtml = createWelcomeEmail(
        'Mukesh',
        'https://example.com/verify?token=abc123'
    );

    try {
        // Send the email
        const result = await sendEmail(
            emailHtml,
            'mukesh@capaxe.com',
            'Welcome to Capaxe!',
            [] // No attachments
        );

        console.log('Welcome email sent successfully:', result);
    } catch (error) {
        console.error('Failed to send welcome email:', error);
    }
}

// To use these examples, uncomment the function calls below:
sendContactFormEmailExample();
// sendWelcomeEmailExample(); 