import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, Sparkles } from "lucide-react";
import valedaMachine from "@/assets/services/valeda-machine-cutout.webp";

const DISMISS_KEY = "nhr-valeda-announcement-dismissed";

const ValedaAnnouncement = () => {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* storage unavailable — dismiss for this visit only */
    }
  };

  return (
    <aside
      aria-label="Now offering Valeda Light Therapy"
      className="absolute z-20 left-1/2 -translate-x-1/2 bottom-24 sm:bottom-10 sm:left-auto sm:translate-x-0 sm:right-6 lg:right-10 w-[min(92vw,340px)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both"
    >
      <div className="relative rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-lg overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-accent" aria-hidden="true" />

        <div className="flex items-stretch gap-3 p-3 pr-9">
          <div className="relative shrink-0 w-20 sm:w-24 self-center">
            <div
              className="absolute inset-1 rounded-full blur-xl"
              style={{ background: "hsl(var(--gold) / 0.28)" }}
              aria-hidden="true"
            />
            <img
              src={valedaMachine}
              alt="Valeda Light Delivery System, the photobiomodulation device used for light therapy"
              width={720}
              height={904}
              className="valeda-float relative w-full h-auto object-contain drop-shadow-md"
            />
          </div>

          <div className="min-w-0 flex flex-col justify-center gap-1.5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-accent-pale px-2.5 py-1 text-[10px] font-body font-bold uppercase tracking-[0.14em] text-accent">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              Now Offering
            </span>
            <p className="font-display text-base sm:text-lg font-bold leading-tight text-foreground">
              Valeda Light Therapy
            </p>
            <p className="text-xs font-body leading-snug text-muted-foreground">
              FDA-authorized red light therapy for dry macular degeneration.
            </p>
            <Link
              to="/services/dry-macular-degeneration"
              className="group inline-flex w-fit items-center gap-1.5 text-xs font-body font-bold text-accent hover:text-accent-light transition-colors"
            >
              Learn more
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss Valeda announcement"
          className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};

export default ValedaAnnouncement;
