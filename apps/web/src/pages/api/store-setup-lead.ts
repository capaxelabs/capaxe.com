/**
 * Lead capture for the /shopify-store-setup landing page.
 *
 * Deliberately small: three fields, because every extra field costs conversions.
 * Email is the source of truth (same path as every other form on the site).
 * The D1 write is best-effort so a missing table can never lose a lead.
 */
import type { APIRoute } from "astro";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const prerender = false;

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  // One contact method is required, not both. India leads with WhatsApp,
  // the rest of the world leads with email — see store-setup-region.ts.
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+][0-9+\-\s()]{6,19}$/, "Please enter a valid WhatsApp number")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(160)
    .optional()
    .or(z.literal("")),
  sells: z.string().trim().min(2, "Tell me what you sell").max(400),

  // Anti-spam. `company` is a honeypot: it is hidden from humans and must stay empty.
  company: z.string().max(0).optional().or(z.literal("")),
  elapsedMs: z.number().nonnegative().optional(),

  // Attribution, so leads can be tied back to the ad that produced them.
  gclid: z.string().max(300).optional().or(z.literal("")),
  utmSource: z.string().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().max(160).optional().or(z.literal("")),
  landingPath: z.string().max(300).optional().or(z.literal("")),

  // The page is geo-priced, so record which offer this person actually saw.
  region: z.string().max(12).optional().or(z.literal("")),
  country: z.string().max(8).optional().or(z.literal("")),
})
  .refine((d) => Boolean(d.phone) || Boolean(d.email), {
    message: "Please leave an email address or a WhatsApp number",
    path: ["email"],
  });

type Lead = z.infer<typeof leadSchema>;

/** Never interpolate raw user input into an HTML email. */
function esc(value: string | undefined): string {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function digitsOnly(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}

function buildEmailHtml(lead: Lead): string {
  const wa = digitsOnly(lead.phone ?? "");
  // Bare 10-digit numbers only get the 91 prefix for Indian leads;
  // international visitors are asked for a number with country code.
  const assumeIndia = (lead.region || "IN") === "IN";
  const waLink =
    wa.length >= 10 ? `https://wa.me/${wa.length === 10 && assumeIndia ? "91" + wa : wa}` : "";

  const attribution = [
    lead.region ? `<p><strong>Pricing seen:</strong> ${esc(lead.region)}${lead.country ? ` (${esc(lead.country)})` : ""}</p>` : "",
    lead.gclid ? `<p><strong>Google click ID:</strong> ${esc(lead.gclid)}</p>` : "",
    lead.utmSource ? `<p><strong>Source:</strong> ${esc(lead.utmSource)}</p>` : "",
    lead.utmCampaign ? `<p><strong>Campaign:</strong> ${esc(lead.utmCampaign)}</p>` : "",
    lead.landingPath ? `<p><strong>Landed on:</strong> ${esc(lead.landingPath)}</p>` : "",
  ].join("");

  return `
  <div style="font-family: -apple-system, Segoe UI, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color:#D2542A; margin-bottom: 4px;">Store setup lead — ${esc(lead.name)}</h2>
    <p style="color:#666; margin-top:0;">From the Shopify store setup landing page (${esc(lead.region || "IN")} pricing).</p>
    <p><strong>Name:</strong> ${esc(lead.name)}</p>
    ${lead.email ? `<p><strong>Email:</strong> <a href="mailto:${esc(lead.email)}" style="color:#D2542A;">${esc(lead.email)}</a></p>` : ""}
    ${lead.phone ? `<p><strong>WhatsApp:</strong> ${esc(lead.phone)}${waLink ? ` &nbsp;<a href="${waLink}" style="color:#D2542A;">Open chat</a>` : ""}</p>` : ""}
    <p><strong>What they sell:</strong><br>${esc(lead.sells).replace(/\n/g, "<br>")}</p>
    <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
    ${attribution || "<p style='color:#999;'>No attribution data captured.</p>"}
  </div>`;
}

export const POST: APIRoute = async ({ request, locals }) => {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ success: false, message: "Invalid request." }, 400);
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      errors[issue.path.join(".")] = issue.message;
    }
    return json({ success: false, message: "Please check the form.", errors }, 400);
  }

  const lead = parsed.data;

  // Bots fill hidden fields and submit instantly. Humans do neither.
  // Respond 200 so the bot believes it succeeded and does not retry.
  if (lead.company || (typeof lead.elapsedMs === "number" && lead.elapsedMs < 2500)) {
    console.warn("store-setup-lead: dropped likely bot submission");
    return json({ success: true }, 200);
  }

  try {
    await sendEmail(
      buildEmailHtml(lead),
      siteConfig.contact.contactEmail,
      `Store setup lead — ${lead.name} (${lead.email || lead.phone})`,
      []
    );
  } catch (error) {
    console.error("store-setup-lead: email failed", error);
    return json(
      { success: false, message: "Could not send that just now. Please message on WhatsApp instead." },
      502
    );
  }

  // Best effort only. A schema mismatch must never cost a lead we already emailed.
  try {
    const db = (locals as any)?.runtime?.env?.LEADS_DB;
    if (db) {
      await db
        .prepare(
          `INSERT INTO store_setup_leads
             (name, phone, email, sells, gclid, utm_source, utm_campaign, landing_path, region, country, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        )
        .bind(
          lead.name,
          // phone is NOT NULL in the table; email-only leads store "".
          lead.phone || "",
          lead.email || null,
          lead.sells,
          lead.gclid || null,
          lead.utmSource || null,
          lead.utmCampaign || null,
          lead.landingPath || null,
          lead.region || null,
          lead.country || null,
          new Date().toISOString()
        )
        .run();
    }
  } catch (error) {
    console.warn("store-setup-lead: D1 insert skipped", error);
  }

  return json({ success: true }, 200);
};

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
