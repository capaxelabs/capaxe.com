import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, storeUrl } = body;

        // Send confirmation email to user
        await sendEmail({
            to: email,
            subject: 'Your Shopify SEO Audit Report is Being Generated',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #6B46C1;">Thank you for requesting an SEO Audit!</h1>
                    <p>Hi ${name},</p>
                    <p>We've received your request for an SEO audit for: <strong>${storeUrl}</strong></p>
                    <p>Our system is now analyzing your store and will prepare a comprehensive SEO report. This process typically takes 10-15 minutes for established stores.</p>
                    <h2 style="color: #4B5563;">What's Next?</h2>
                    <ul>
                        <li>Your detailed SEO report will be sent to this email address</li>
                        <li>The report will include actionable insights on improving your store's SEO</li>
                        <li>You'll receive analysis of your on-page content, keyword rankings, crawlability, and backlink profile</li>
                    </ul>
                    <p>If you don't receive your report within 15 minutes, please check your spam folder or contact our support team.</p>
                    <p style="margin-top: 20px;">Best regards,<br>The Capaxe Team</p>
                </div>
            `,
        });

        // Send notification to admin
        await sendEmail({
            to: process.env.ADMIN_EMAIL!,
            subject: 'New SEO Audit Request',
            html: `
                <div style="font-family: Arial, sans-serif;">
                    <h2>New SEO Audit Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Store URL:</strong> ${storeUrl}</p>
                    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending SEO audit email:', error);
        return NextResponse.json(
            { error: 'Failed to process SEO audit request' },
            { status: 500 }
        );
    }
} 