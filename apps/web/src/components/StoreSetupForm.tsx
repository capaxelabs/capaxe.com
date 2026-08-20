import { useEffect, useRef, useState } from "react";

interface Props {
  /** Google Ads conversion label, e.g. "AW-123456789/AbC-D_efGh". Leave empty until the tag exists. */
  conversionSendTo?: string;
  whatsappHref: string;
  /** Pricing region the visitor saw ("IN" | "INTL") — stored with the lead. */
  region?: string;
  /** Two-letter country from Cloudflare, when available. */
  country?: string;
  /** Region-specific labels and placeholders. */
  copy?: {
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    sellsPlaceholder: string;
  };
}

const DEFAULT_COPY = {
  namePlaceholder: "Priya Sharma",
  phoneLabel: "WhatsApp number",
  phonePlaceholder: "98765 43210",
  sellsPlaceholder: "Handmade silver jewellery. I sell on Instagram right now and want a proper store.",
};

interface FormState {
  name: string;
  phone: string;
  sells: string;
}

const EMPTY: FormState = { name: "", phone: "", sells: "" };

const inputClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-3 text-base text-foreground " +
  "placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring transition";

export default function StoreSetupForm({
  conversionSendTo,
  whatsappHref,
  region = "IN",
  country = "",
  copy = DEFAULT_COPY,
}: Props) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const honeypot = useRef<HTMLInputElement>(null);
  const mountedAt = useRef<number>(Date.now());
  const [attribution, setAttribution] = useState<Record<string, string>>({});

  // Capture the ad click so a lead can be traced back to the campaign that paid for it.
  useEffect(() => {
    mountedAt.current = Date.now();
    try {
      const params = new URLSearchParams(window.location.search);
      setAttribution({
        gclid: params.get("gclid") ?? "",
        utmSource: params.get("utm_source") ?? "",
        utmCampaign: params.get("utm_campaign") ?? "",
        landingPath: window.location.pathname + window.location.search,
      });
    } catch {
      /* non-fatal */
    }
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setMessage("");

    try {
      const res = await fetch("/api/store-setup-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...attribution,
          region,
          country,
          company: honeypot.current?.value ?? "",
          elapsedMs: Date.now() - mountedAt.current,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
        errors?: Record<string, string>;
      };

      if (res.ok && data.success) {
        setStatus("success");
        fireConversion(conversionSendTo);
        return;
      }

      setErrors(data.errors ?? {});
      setMessage(data.message ?? "Something went wrong. Please try WhatsApp instead.");
      setStatus("error");
    } catch {
      setMessage("Network problem. Please try WhatsApp instead.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-4 py-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <svg
            className="h-6 w-6 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold">Got it, {form.name.split(" ")[0]}.</p>
        <p className="text-sm text-muted-foreground">
          I&rsquo;ll message you on WhatsApp at{" "}
          <span className="font-medium text-foreground">{form.phone}</span> — usually within a few
          hours, and always the same day.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Or start the chat yourself now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <label htmlFor="ss-name" className="block text-sm font-medium">
          Your name
        </label>
        <input
          id="ss-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={change}
          placeholder={copy.namePlaceholder}
          className={inputClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ss-phone" className="block text-sm font-medium">
          {copy.phoneLabel}
        </label>
        <input
          id="ss-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={form.phone}
          onChange={change}
          placeholder={copy.phonePlaceholder}
          className={inputClass}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ss-sells" className="block text-sm font-medium">
          What do you want to sell?
        </label>
        <textarea
          id="ss-sells"
          name="sells"
          rows={3}
          required
          value={form.sells}
          onChange={change}
          placeholder={copy.sellsPlaceholder}
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.sells}
        />
        {errors.sells && <p className="text-sm text-destructive">{errors.sells}</p>}
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <input
        ref={honeypot}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && message && <p className="text-sm text-destructive">{message}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full cursor-pointer rounded-xl bg-primary-600 px-4 py-3.5 text-base font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Tell me what my store needs"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        No payment now. I&rsquo;ll tell you what your store needs, and what it costs, before you
        decide anything.
      </p>

      <div className="flex items-center gap-3 pt-1">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366] px-4 py-3 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366]/10"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.464 3.488" />
        </svg>
        Message me on WhatsApp
      </a>
    </form>
  );
}

/** Fires the Google Ads conversion, if a label has been configured. */
function fireConversion(sendTo?: string) {
  const w = window as any;
  try {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "store_setup_lead" });
    if (sendTo && typeof w.gtag === "function") {
      w.gtag("event", "conversion", { send_to: sendTo });
    }
  } catch {
    /* tracking must never break the thank-you state */
  }
}
