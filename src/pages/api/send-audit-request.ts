import type { APIRoute } from "astro";
import { z } from "zod";
import { sendEmail, generateEmailHtml } from "@/lib/email";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const prerender = false;

const schema = z.object({
  email: z.string().email("Invalid email address"),
  domain: z.string().min(3, "Store domain is required"),
  message: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const raw = await request.json();
    const result = schema.safeParse(raw);

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error.errors[0].message }),
        { status: 400 }
      );
    }

    const { email, domain, message } = result.data;

    const adminHtml = generateEmailHtml(
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">Free Shopify Audit Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Store Domain:</strong> <a href="https://${domain}">${domain}</a></p>
        <p><strong>Notes:</strong> ${message || "None provided"}</p>
      </div>
      `,
      `Audit Request — ${domain}`,
      "audit"
    );

    await sendEmail(
      adminHtml,
      siteConfig.contact.contactEmail,
      `Free Shopify Audit Request — ${domain}`
    );

    const replyHtml = generateEmailHtml(
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">We've got your audit request!</h2>
        <p>Hi there,</p>
        <p>We've received your request to audit <strong>${domain}</strong> and will send you a personalised report covering:</p>
        <ul>
          <li>Speed &amp; Core Web Vitals</li>
          <li>Conversion &amp; UX gaps</li>
          <li>Code quality &amp; app bloat</li>
        </ul>
        <p>Expect our findings within <strong>48 hours</strong>.</p>
        <p>— The Capaxe Team</p>
      </div>
      `,
      "Your Free Shopify Audit — Capaxe Labs",
      "audit-reply"
    );

    await sendEmail(replyHtml, email, "Your Free Shopify Audit — Capaxe Labs");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Audit request error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send request. Please try again." }),
      { status: 500 }
    );
  }
};
