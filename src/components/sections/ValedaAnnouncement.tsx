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
      className="absolute z-20 left-1/2 -translate-x-1/2 bottom-20 sm:bottom-10 sm:left-auto sm:translate-x-0 sm:right-6 lg:right-10 w-[calc(100vw-2rem)] max-w-[340px]"
    >
      <div className="relative rounded-2xl border border-border border-t-[3px] border-t-accent bg-card shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
        <Link
          to="/services/dry-macular-degeneration"
          className="group flex items-center gap-3 p-2.5 pl-3 sm:p-3 sm:pr-9"
        >
          <span className="relative shrink-0 w-9 sm:w-24 self-center">
            <span
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
          </span>

          <span className="min-w-0 flex flex-col justify-center gap-1 sm:gap-1.5">
            <span className="hidden sm:inline-flex w-fit items-center gap-1.5 rounded-pill bg-accent-pale px-2.5 py-1 text-[10px] font-body font-bold uppercase tracking-[0.14em] text-accent">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              Now Offering
            </span>
            <span className="font-display text-sm sm:text-lg font-bold leading-tight text-foreground">
              <span className="sm:hidden text-accent">Now Offering: </span>
              Valeda Light Therapy
            </span>
            <span className="text-[11px] sm:text-xs font-body leading-snug text-muted-foreground">
              <span className="sm:hidden">Red light therapy for dry macular degeneration.</span>
              <span className="hidden sm:inline">
                FDA-authorized red light therapy for dry macular degeneration.
              </span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-body font-bold text-accent group-hover:text-accent-light transition-colors">
              Learn more
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss Valeda announcement"
          className="absolute top-0 right-0 inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:top-1 sm:right-1 sm:h-6 sm:w-6"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};

export default ValedaAnnouncement;
