import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const emailHtml = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;

        await sendEmail(
            emailHtml,
            process.env.CONTACT_FORM_TO_EMAIL || process.env.SMTP_FROM!,
            'New Contact Form Submission',
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
