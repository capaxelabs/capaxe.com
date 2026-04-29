import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AuditModalProps {
  children: React.ReactNode;
  className?: string;
}

interface FormState {
  email: string;
  domain: string;
  message: string;
}

const AuditModal = ({ children, className }: AuditModalProps) => {
  const [open, setOpen] = useState(false);
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

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setTimeout(() => {
        setForm({ email: "", domain: "", message: "" });
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Free Shopify Store Audit</DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              We'll audit your store's speed performance and SEO and send you a personalised report within 48 hours.
            </p>
          </DialogHeader>

          {status === "success" ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-foreground">Request received!</p>
              <p className="text-sm text-muted-foreground">
                We'll audit <span className="font-medium text-foreground">{form.domain}</span> and send findings to <span className="font-medium text-foreground">{form.email}</span> within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <label htmlFor="audit-email" className="text-sm font-medium text-foreground">
                  Your email <span className="text-red-500">*</span>
                </label>
                <input
                  id="audit-email"
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
                <label htmlFor="audit-domain" className="text-sm font-medium text-foreground">
                  Store domain <span className="text-red-500">*</span>
                </label>
                <input
                  id="audit-domain"
                  name="domain"
                  type="text"
                  required
                  value={form.domain}
                  onChange={handleChange}
                  placeholder="yourstore.myshopify.com"
                  className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="audit-message" className="text-sm font-medium text-foreground">
                  Anything specific to review? <span className="text-muted-foreground text-xs">(optional)</span>
                </label>
                <textarea
                  id="audit-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="e.g. slow LCP, keyword rankings, technical SEO issues..."
                  className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-xl transition text-sm"
              >
                {status === "loading" ? "Sending request…" : "Get My Free Audit"}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                No sales pitch. Just a straightforward report on what to fix.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuditModal;
