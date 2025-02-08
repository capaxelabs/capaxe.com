import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export const runtime = "edge";

const formatBudget = (budget: string) => {
    const budgetMap: Record<string, string> = {
        'less_than_5k': 'Less than $5,000',
        '5k_to_10k': '$5,000 - $10,000',
        '10k_to_25k': '$10,000 - $25,000',
        'more_than_25k': 'More than $25,000'
    };
    return budgetMap[budget] || budget;
};

const formatTimeline = (timeline: string) => {
    const timelineMap: Record<string, string> = {
        'immediate': 'Immediate Start',
        'within_1_month': 'Within 1 Month',
        'within_3_months': 'Within 3 Months',
        'flexible': 'Flexible'
    };
    return timelineMap[timeline] || timeline;
};

const formatServiceType = (serviceType: string) => {
    const serviceMap: Record<string, string> = {
        'new_project': 'New Project',
        'retainer': 'Retainer / Subscription',
        'store_development': 'Shopify Store Development',
        'app_development': 'Shopify App Development',
        'store_customization': 'Store Customization',
        'app_customization': 'App Customization',
        'maintenance': 'Maintenance & Support',
        'other': 'Other'
    };
    return serviceMap[serviceType] || serviceType;
};

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            companyName,
            serviceType,
            projectType,
            storeUrl,
            budget,
            timeline,
            message
        } = await req.json();

        const emailHtml = `
            <h2>New Shopify Development Inquiry</h2>
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company Name:</strong> ${companyName}</p>

            <h3>Project Details</h3>
            <p><strong>Service Type:</strong> ${formatServiceType(serviceType)}</p>
            <p><strong>Project Type:</strong> ${projectType === 'new_project' ? 'New Project' : 'Existing Project'}</p>
            ${storeUrl ? `<p><strong>Store URL:</strong> ${storeUrl}</p>` : ''}
            <p><strong>Budget Range:</strong> ${formatBudget(budget)}</p>
            <p><strong>Timeline:</strong> ${formatTimeline(timeline)}</p>

            <h3>Project Requirements</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        await sendEmail(
            emailHtml,
            process.env.CONTACT_FORM_TO_EMAIL || process.env.SMTP_FROM!,
            'New Shopify Development Inquiry',
            []
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending contact email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
