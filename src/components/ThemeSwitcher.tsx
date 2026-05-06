import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const themes = [
  { id: "navy-teal", label: "Navy & Teal", primary: "221 75% 17%", accent: "170 78% 27%", accentLight: "170 78% 35%", gold: "37 56% 50%", goldLight: "40 82% 68%", gray800: "220 26% 14%", swatch: ["#0b1f4b", "#0d8070", "#c5943a"] },
  { id: "white", label: "White", primary: "220 20% 97%", accent: "210 60% 45%", accentLight: "210 60% 55%", gold: "37 56% 50%", goldLight: "40 82% 68%", gray800: "220 14% 92%", swatch: ["#f5f7fa", "#3b82c8", "#c5943a"] },
  { id: "black", label: "Black", primary: "0 0% 7%", accent: "0 0% 45%", accentLight: "0 0% 60%", gold: "0 0% 70%", goldLight: "0 0% 80%", gray800: "0 0% 4%", swatch: ["#121212", "#737373", "#b3b3b3"] },
  { id: "yellow", label: "Yellow", primary: "45 90% 48%", accent: "35 80% 35%", accentLight: "35 80% 45%", gold: "40 85% 55%", goldLight: "42 90% 65%", gray800: "40 50% 12%", swatch: ["#e6b800", "#a36b1a", "#d4a535"] },
] as const;

const ThemeSwitcher = () => {
  const [active, setActive] = useState(() => localStorage.getItem("site-theme") || "navy-teal");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const theme = themes.find((t) => t.id === active) || themes[0];
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--accent-light", theme.accentLight);
    root.style.setProperty("--gold", theme.gold);
    root.style.setProperty("--gold-light", theme.goldLight);
    root.style.setProperty("--gray-800", theme.gray800);
    localStorage.setItem("site-theme", active);
  }, [active]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors font-body text-xs uppercase tracking-wider"
        aria-label="Change color palette"
      >
        <Palette className="w-4 h-4" />
        <span>Color Theme</span>
      </button>

      {open && (
        <div className="absolute bottom-full mb-3 left-0 rounded-xl p-3 space-y-1 shadow-xl border border-primary-foreground/10 min-w-[200px]"
          style={{ background: "rgb(11,31,75)" }}
        >
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => { setActive(t.id); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                active === t.id ? "bg-white/15 text-primary-foreground" : "text-primary-foreground/60 hover:bg-white/8 hover:text-primary-foreground"
              }`}
            >
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full border border-white/20" style={{ background: t.swatch[0] }} />
                <span className="w-3 h-3 rounded-full border border-white/20" style={{ background: t.swatch[1] }} />
                <span className="w-3 h-3 rounded-full border border-white/20" style={{ background: t.swatch[2] }} />
              </div>
              <span className="font-body text-xs font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
