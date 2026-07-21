import { useState } from "react";

interface FormState {
  email: string;
  domain: string;
  message: string;
}

interface TeardownFormProps {
  onSuccess?: () => void;
}

const TeardownForm = ({ onSuccess }: TeardownFormProps) => {
  const [form, setForm] = useState<FormState>({ email: "", domain: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        onSuccess?.();
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center space-y-3">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-semibold text-foreground">Request received.</p>
        <p className="text-sm text-muted-foreground">
          We'll audit <span className="font-medium text-foreground">{form.domain}</span> and send your scored report to <span className="font-medium text-foreground">{form.email}</span> within 3 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
      <div className="space-y-1.5">
        <label htmlFor="teardown-email" className="text-sm font-medium text-foreground">
          Your email <span className="text-red-500">*</span>
        </label>
        <input
          id="teardown-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@yourstore.com"
          className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="teardown-domain" className="text-sm font-medium text-foreground">
          Store domain <span className="text-red-500">*</span>
        </label>
        <input
          id="teardown-domain"
          name="domain"
          type="text"
          required
          value={form.domain}
          onChange={handleChange}
          placeholder="yourstore.com"
          className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="teardown-message" className="text-sm font-medium text-foreground">
          Anything specific to look at? <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <textarea
          id="teardown-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="e.g. slow product pages, checkout drop-off, sale-day stability..."
          className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-white font-semibold py-2.5 px-4 rounded-xl transition text-sm"
      >
        {status === "loading" ? "Sending request…" : "Get my free audit"}
      </button>
    </form>
  );
};

export default TeardownForm;
