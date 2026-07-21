import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import TeardownForm from "./TeardownForm";

const STORAGE_KEY = "capaxe:teardown-popup";
// Time on page before the popup offers itself unprompted.
const TIME_TRIGGER_MS = 35_000;
// Exit-intent stays disarmed briefly so a stray cursor on arrival can't fire it.
const EXIT_ARM_MS = 10_000;
const DISMISS_DAYS = 30;
const CONVERTED_DAYS = 365;

const isSuppressed = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { until } = JSON.parse(raw);
    return typeof until === "number" && Date.now() < until;
  } catch {
    return false;
  }
};

const suppressFor = (days: number) => {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ until: Date.now() + days * 86_400_000 })
    );
  } catch {
    /* private mode — popup simply reappears next visit */
  }
};

const benefits = [
  "How slow your store actually feels to real shoppers not just a test score",
  "What's dragging it down: heavy images, leftover apps, blocking scripts",
  "What to fix first, what can wait, and what each one is worth",
];

const TeardownPopup = () => {
  const [open, setOpen] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (isSuppressed()) return;

    const armedAt = Date.now() + EXIT_ARM_MS;

    const fire = () => {
      if (firedRef.current) return;
      // Never interrupt an already-open dialog or someone mid-typing.
      if (document.querySelector('[role="dialog"][data-state="open"]')) return;
      const active = document.activeElement;
      if (active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)) return;

      firedRef.current = true;
      cleanup();
      setOpen(true);
      suppressFor(DISMISS_DAYS);
    };

    const timer = window.setTimeout(fire, TIME_TRIGGER_MS);

    // Desktop exit intent: cursor leaves through the top of the viewport.
    const onMouseOut = (e: MouseEvent) => {
      if (Date.now() < armedAt) return;
      if (e.clientY <= 0 && !e.relatedTarget) fire();
    };

    // Touch equivalent: a decisive flick back toward the top of the page.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Date.now() >= armedAt && y < lastY - 80 && y < 500) fire();
      lastY = y;
    };

    function cleanup() {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    }

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return cleanup;
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden gap-0">
        {/* Accent header */}
        <div className="bg-primary-600 px-6 pt-6 pb-5 text-white">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3">
            Free store audit
          </span>
          <DialogHeader className="space-y-0">
            <DialogTitle className="text-xl font-bold text-white text-left leading-snug">
              Want to know what's costing you sales?
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-white/85 mt-2 leading-relaxed">
            Give us your domain and we'll go through your store properly then
            write back and tell you what we'd fix first. No jargon, no 40-slide
            deck.
          </p>
        </div>

        <div className="px-6 pt-5 pb-6">
          <ul className="space-y-2.5 mb-5">
            {benefits.map(benefit => (
              <li key={benefit} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <TeardownForm onSuccess={() => suppressFor(CONVERTED_DAYS)} />

          <p className="text-[11px] text-center text-muted-foreground/70 mt-3">
            Free, and no sales pitch. You'll hear back within 3 working days.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeardownPopup;
