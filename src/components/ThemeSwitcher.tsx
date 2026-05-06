import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const themes = [
  { id: "navy-teal", label: "Navy & Teal", primary: "221 75% 17%", accent: "170 78% 27%", accentLight: "170 78% 35%", gold: "37 56% 50%", goldLight: "40 82% 68%", gray800: "220 26% 14%" },
  { id: "midnight-emerald", label: "Midnight Emerald", primary: "210 60% 14%", accent: "152 68% 30%", accentLight: "152 68% 38%", gold: "45 70% 52%", goldLight: "48 85% 65%", gray800: "210 40% 12%" },
  { id: "charcoal-copper", label: "Charcoal & Copper", primary: "230 20% 16%", accent: "18 65% 45%", accentLight: "18 65% 55%", gold: "30 60% 55%", goldLight: "32 75% 68%", gray800: "230 18% 12%" },
  { id: "deep-ocean", label: "Deep Ocean", primary: "215 70% 20%", accent: "195 80% 35%", accentLight: "195 80% 45%", gold: "42 60% 50%", goldLight: "44 80% 65%", gray800: "215 50% 14%" },
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
                <span className="w-3 h-3 rounded-full" style={{ background: `hsl(${t.primary})` }} />
                <span className="w-3 h-3 rounded-full" style={{ background: `hsl(${t.accent})` }} />
                <span className="w-3 h-3 rounded-full" style={{ background: `hsl(${t.gold})` }} />
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
