import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const themes = [
  { id: "high-contrast", label: "White, Black & Yellow", primary: "0 0% 7%", accent: "50 100% 50%", accentLight: "50 100% 60%", gold: "50 100% 50%", goldLight: "50 100% 65%", gray800: "0 0% 5%" },
  { id: "navy-teal", label: "Navy & Teal", primary: "221 75% 17%", accent: "170 78% 27%", accentLight: "170 78% 35%", gold: "37 56% 50%", goldLight: "40 82% 68%", gray800: "220 26% 14%" },
  { id: "midnight-emerald", label: "Midnight Emerald", primary: "160 100% 10%", accent: "152 80% 35%", accentLight: "152 80% 45%", gold: "45 85% 55%", goldLight: "48 90% 68%", gray800: "160 40% 8%" },
  { id: "crimson-gold", label: "Crimson & Gold", primary: "0 60% 18%", accent: "0 72% 50%", accentLight: "0 72% 58%", gold: "42 90% 55%", goldLight: "44 95% 68%", gray800: "0 30% 12%" },
  { id: "royal-purple", label: "Royal Purple", primary: "270 60% 18%", accent: "270 70% 50%", accentLight: "270 70% 60%", gold: "38 80% 55%", goldLight: "40 90% 68%", gray800: "270 35% 12%" },
  { id: "deep-ocean", label: "Deep Ocean", primary: "215 70% 20%", accent: "195 90% 40%", accentLight: "195 90% 50%", gold: "42 75% 55%", goldLight: "44 85% 68%", gray800: "215 50% 14%" },
] as const;

const ThemeSwitcher = () => {
  const [active, setActive] = useState(() => localStorage.getItem("site-theme") || "high-contrast");
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
        className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-xs uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/20"
        aria-label="Change color palette"
      >
        <Palette className="w-4 h-4" />
        <span>Theme</span>
      </button>

      {open && (
        <div className="absolute bottom-full mb-3 left-0 rounded-xl p-3 space-y-1 shadow-2xl border border-white/20 min-w-[220px]"
          style={{ background: "rgb(0,0,0)" }}
        >
          <p className="font-body text-[10px] text-primary-foreground/40 uppercase tracking-widest px-3 pb-1">Select Theme</p>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => { setActive(t.id); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                active === t.id ? "bg-white/20 text-primary-foreground ring-1 ring-white/25" : "text-primary-foreground/60 hover:bg-white/10 hover:text-primary-foreground"
              }`}
            >
              <div className="flex gap-1.5">
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ background: `hsl(${t.primary})` }} />
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ background: `hsl(${t.accent})` }} />
                <span className="w-4 h-4 rounded-full border border-white/20" style={{ background: `hsl(${t.gold})` }} />
              </div>
              <span className="font-body text-xs font-medium">{t.label}</span>
              {active === t.id && <span className="ml-auto text-accent-light text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
