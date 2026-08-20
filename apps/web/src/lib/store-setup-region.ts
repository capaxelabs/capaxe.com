/**
 * Region-aware pricing and copy for /shopify-store-setup.
 *
 * The page renders per-request on Cloudflare Workers, so the visitor's
 * country (request.cf.country) picks a region here: India sees the INR
 * offer, everyone else sees the USD offer. Ads can force a variant with
 * ?region=in or ?region=intl (also handy for previewing locally, where
 * there is no cf object).
 *
 * EDITABLE CLAIMS: every number below is a promise made to a stranger who
 * is about to pay you. Check each one before ads go live. The $299
 * international price is confirmed; the $599 full rate is an estimate of
 * the ₹45,000 normal rate and still needs a decision.
 */

export interface StoreSetupRegion {
  /** Stored with each lead so you know which price they saw. */
  code: "IN" | "INTL";
  price: string;
  fullRate: string;
  /** Mid-sentence fragment: "Theme, products, <this>, shipping, legal pages, launch." */
  heroDeliverables: string;
  includePayments: string;
  includeShipping: string;
  shopifyPlanNote: string;
  payAnswer: string;
  distanceFaq: { q: string; a: string };
  form: {
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    sellsPlaceholder: string;
  };
}

const IN: StoreSetupRegion = {
  code: "IN",
  price: "₹4,999",
  fullRate: "₹45,000",
  heroDeliverables: "UPI and cash on delivery",
  includePayments: "Indian payments live: UPI, cards, net banking and cash on delivery",
  includeShipping: "Shipping zones and delivery rates set up for India",
  shopifyPlanNote:
    "Shopify bills you directly for their own plan — that is not something I can include or waive. At the time of writing the Basic plan is around ₹1,499/month plus GST, and Shopify normally runs a ₹20/month introductory rate for the first three months. I'll show you the current pricing before you commit to anything.",
  payAnswer:
    "UPI or bank transfer, in two parts — half to start and half when the store goes live. Nothing is due until after we've spoken and you've agreed the scope.",
  distanceFaq: {
    q: "I'm not in Mumbai. Does that matter?",
    a: "Not at all. Everything happens over WhatsApp and video call. Most of the stores I've built were for merchants I've never met in person.",
  },
  form: {
    namePlaceholder: "Priya Sharma",
    phoneLabel: "WhatsApp number",
    phonePlaceholder: "98765 43210",
    sellsPlaceholder:
      "Handmade silver jewellery. I sell on Instagram right now and want a proper store.",
  },
};

const INTL: StoreSetupRegion = {
  code: "INTL",
  price: "$299",
  fullRate: "$599",
  heroDeliverables: "payments",
  includePayments:
    "Payments live for your country: cards, Apple Pay and Google Pay through Shopify Payments, plus PayPal",
  includeShipping: "Shipping zones and delivery rates set up for where you sell",
  shopifyPlanNote:
    "Shopify bills you directly for their own plan — that is not something I can include or waive. At the time of writing the Basic plan is around $29–39/month depending on how you're billed, and Shopify usually runs a $1/month introductory offer to start. I'll show you the current pricing before you commit to anything.",
  payAnswer:
    "PayPal, Wise or card, in two parts — half to start and half when the store goes live. Nothing is due until after we've spoken and you've agreed the scope.",
  distanceFaq: {
    q: "You're in India and I'm not. Does that work?",
    a: "It works fine, and it's part of why the price is what it is. Everything happens over WhatsApp and video call, I overlap comfortably with US and European hours, and most of the stores I've built were for merchants I've never met in person.",
  },
  form: {
    namePlaceholder: "Sarah Mitchell",
    phoneLabel: "WhatsApp number (with country code)",
    phonePlaceholder: "+1 415 555 0132",
    sellsPlaceholder: "Handmade ceramics. I sell on Etsy right now and want my own store.",
  },
};

export const REGIONS = { IN, INTL } as const;

export function resolveRegion(
  country: string | undefined,
  override?: string | null
): StoreSetupRegion {
  const forced = override?.trim().toUpperCase();
  if (forced === "IN" || forced === "INDIA") return IN;
  if (forced === "INTL" || forced === "GLOBAL") return INTL;

  // Unknown country (local dev, some bots): show the original Indian offer.
  if (!country) return IN;
  return country.toUpperCase() === "IN" ? IN : INTL;
}
