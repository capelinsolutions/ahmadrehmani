// Theme switcher — curated blue & white palettes.
// `useState` tracks the active theme id + dropdown state;
// `useEffect` writes the selected theme's HSL tokens to CSS variables on <html>.
import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const themes = [
  {
    id: "navy-sky",
    label: "Navy & Sky (Default)",
    primary: "215 65% 22%",
    accent: "210 90% 48%",
    accentLight: "210 90% 58%",
    gold: "200 95% 55%",
    goldLight: "200 100% 78%",
    gray800: "215 65% 18%",
  },
  {
    id: "deep-ocean",
    label: "Deep Ocean",
    primary: "215 80% 16%",
    accent: "200 95% 42%",
    accentLight: "200 95% 52%",
    gold: "195 90% 60%",
    goldLight: "195 95% 78%",
    gray800: "215 70% 14%",
  },
  {
    id: "royal-blue",
    label: "Royal Blue",
    primary: "222 70% 25%",
    accent: "222 88% 55%",
    accentLight: "222 88% 65%",
    gold: "210 95% 62%",
    goldLight: "210 100% 80%",
    gray800: "222 70% 18%",
  },
  {
    id: "soft-azure",
    label: "Soft Azure",
    primary: "212 55% 30%",
    accent: "205 88% 50%",
    accentLight: "205 88% 62%",
    gold: "198 90% 60%",
    goldLight: "198 95% 80%",
    gray800: "212 55% 22%",
  },
] as const;

const ThemeSwitcher = () => {
  const [active, setActive] = useState(() => localStorage.getItem("site-theme") || "navy-sky");
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
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-xs uppercase tracking-wider bg-secondary px-3 py-1.5 rounded-full border border-border hover:bg-accent-pale"
        aria-label="Change color palette"
      >
        <Palette className="w-4 h-4" />
        <span>Theme</span>
      </button>

      {open && (
        <div
          className="absolute bottom-full mb-3 left-0 rounded-xl p-3 space-y-1 shadow-2xl border border-border min-w-[240px] bg-background"
        >
          <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest px-3 pb-1">Blue & White Themes</p>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => { setActive(t.id); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                active === t.id ? "bg-accent-pale text-foreground ring-1 ring-accent/30" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <div className="flex gap-1.5">
                <span className="w-4 h-4 rounded-full border border-border" style={{ background: `hsl(${t.primary})` }} />
                <span className="w-4 h-4 rounded-full border border-border" style={{ background: `hsl(${t.accent})` }} />
                <span className="w-4 h-4 rounded-full border border-border" style={{ background: `hsl(${t.gold})` }} />
              </div>
              <span className="font-body text-xs font-medium">{t.label}</span>
              {active === t.id && <span className="ml-auto text-accent text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
