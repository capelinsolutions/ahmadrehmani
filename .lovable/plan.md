## Goal
Flip the whole site from deep navy backgrounds to a clean white/light theme. Blue stays as accent only. Keep the original transparent logo as-is.

## Changes

### 1. `src/index.css` — redefine dark gradient tokens to light
- `--gradient-deep` → soft white-to-sky gradient (used by Hero, Footer, CTASection, ServiceDetail hero)
- `--gradient-primary` → light blue-tinted gradient (used by CTASection inner card, ServiceDetail CTA, SectionCTA button — button gets reworked)
- `--gradient-card` → very light blue gradient (used by WhyChoose stats card, AboutSection image frame, ServiceDetail "How We Treat" card, DoctorProfile hero)
- Tighten body shadow tokens to lighter values

### 2. Swap white-on-dark text to navy-on-light in these components
Replace `text-primary-foreground` → `text-foreground`, `text-primary-foreground/XX` → `text-muted-foreground` or `text-foreground/XX`, `border-white/XX` → `border-border`, `bg-white/XX` → `bg-secondary` / `bg-accent-pale`:

- `src/components/sections/HeroSection.tsx`
- `src/components/sections/Footer.tsx`
- `src/components/sections/CTASection.tsx`
- `src/components/sections/WhyChooseSection.tsx` (stats card)
- `src/components/sections/AboutSection.tsx` (image frame)
- `src/components/sections/ContactSection.tsx` (social card)
- `src/components/ThemeSwitcher.tsx`
- `src/pages/DoctorProfile.tsx` (hero band)
- `src/pages/ServiceDetailPage.tsx` (hero, "How We Treat", bottom CTA)
- `src/components/SectionCTA.tsx` — keep blue gradient button with white text (it's a button, not a section)

### 3. Logo
Leave the existing transparent logo file untouched. It already works on white; just ensure surrounding nav has white/light background (Navbar already uses white).

### 4. Verify
Visual pass via browser--view_preview on `/`, `/services/[any]`, `/about`/DoctorProfile.

## Out of scope
- Logo redesign
- Component restructuring
- Removing the ThemeSwitcher (still works, just rendered on light bg)