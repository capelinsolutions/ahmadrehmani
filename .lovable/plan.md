## Scope

A large set of content, design, and structural changes across the site. I'll group them so each can be reviewed.

---

### 1. Global content rule
- Remove the word **"UTMB"** from any phrase preceding "fellowship-trained" site-wide. Allowed usage: "UTMB" only inside the Education/Training context (e.g., "Vitreoretinal Fellowship — University of Texas Medical Branch (UTMB)").

### 2. Hero / top-right block (HeroSection)
- Remove "UTMB" prefix, keep "Fellowship-Trained".
- Replace tagline "Cypress TX's fellowship-trained retina specialist" → **"Houston's Medical and Surgical Vitreo-Retinal Specialist"**.
- Replace paragraph with new copy starting "Dr. Ahmad Rehmani, D.O. — founder of North Houston Retina — delivers UTMB fellowship-trained care for retinal and ocular conditions including macular degeneration, diabetic retinopathy, retinal detachment, and complex vitreoretinal surgery. Now welcoming new patients across Cypress, Bridgeland, Katy, and Northwest Houston."
- Keep 5/5 star block; change badge "UTMB Fellowship" → **"Fellowship-Trained"**.
- Add new badge: **"Founder — Surgical program at North Cypress Surgical Center"**.

### 3. Patient recognition strip / chips
- Remove "UTMB Houston"; keep "Vitreoretinal Surgical Fellowship".
- Keep all other chips.

### 4. About Dr. Rehmani section (AboutSection)
- Replace bio paragraphs with the long-form version you provided (two paragraphs covering founding North Houston Retina, complex lens replacement techniques, founder of surgical retina program at North Cypress Surgery Center, 28 trials, etc.).
- Add two new chips/bubbles:
  - **"Founder: Retina program at North Cypress Surgery Center & North Houston Retina clinic"**
  - **"Awards: Percy Dutton Lifetime Achievement Award · Keidaean Honor Society"**

### 5. Services / "Expert Retinal Care" (ServicesSection)
- Replace the few oversized bubbles with a **compact dropdown/accordion list** of conditions grouped by category. Proposed structure (you said "not in same order"; please flag any additions):
  - **Macular Diseases**: Wet AMD, Dry AMD, Macular Hole, Macular Pucker (Epiretinal Membrane), Central Serous Retinopathy, Vitreomacular Traction
  - **Diabetic Eye Disease**: Diabetic Retinopathy, Diabetic Macular Edema, Proliferative Diabetic Retinopathy
  - **Retinal Detachment & Tears**: Retinal Detachment, Retinal Tears, Posterior Vitreous Detachment, Lattice Degeneration
  - **Vascular Disease**: Retinal Vein Occlusion (CRVO/BRVO), Retinal Artery Occlusion, Hypertensive Retinopathy
  - **Surgical / Complex**: Vitreous Hemorrhage, Floaters, Dislocated IOL / Complex Lens Replacement, Endophthalmitis, Ocular Trauma
  - **Inflammatory / Other**: Uveitis, Choroidal Nevus, Inherited Retinal Disease

### 6. "Why Patients Choose Us" (WhyChooseSection)
- Replace heading "A Level of Expertise You Won't Find at a General Eye Clinic" → **"When Your Vision Is at Stake — Choose the Doctor with Skill, Expertise, Training, and Bedside Manner That Will Make You Feel at Ease."**
- Rewrite "Dedicated Subspecialist" body (per your text).
- Rename "Active Research" → **"Clinical Trial Researcher — 28 Major U.S. Clinical Trials"** (rest of body kept).
- Keep "Academic & Fellowship-Trained" and "Local Expert" cards as-is.
- Patient Outcome Indicators: change "Anti-VEGF Injection Volume" → **"High Vitreoretinal Surgery Success Rate"**.
- Reorder Training & Affiliations to: Former Clinical Assistant Professor — UTMB → UTMB Vitreoretinal Fellowship → St. John's Episcopal Chief Resident → ASRS → AAO.

### 7. Doctor profile page (/doctor/ahmad-rehmani)
- Replace bio with the longer "About Dr. Rehmani" copy you provided (Chief Resident → UTMB fellowship → returned to Houston → complex lens techniques → founder NCSC retina program → 28 trials → plain-language communicator).

### 8. Insurance section
- Replace text bubbles with a **logo grid** using standard insurance logos (Aetna, BCBS, Cigna, UnitedHealthcare, Humana, Medicare, Tricare, etc. — final list from current InsuranceSection). I'll fetch logos and store them as static assets.

### 9. Logo placement
- Add your uploaded logo to the top-left of the Navbar (replacing/augmenting the current text wordmark).
- **Action needed from you:** the logo file did not arrive in this turn. Please re-upload it via the + button. I'll wait for it before shipping the navbar change.

### 10. Color rebrand — Blue & White
- Replace the current black/yellow theme with a **blue + white** palette across `index.css`, sections, ThemeSwitcher.
- Proposed palette (will confirm during build):
  - Primary deep navy: `hsl(215 60% 22%)`
  - Mid blue: `hsl(212 70% 42%)`
  - Light/accent blue: `hsl(205 85% 55%)`
  - Soft sky background: `hsl(210 40% 97%)`
  - Backgrounds white / off-white
- Update ThemeSwitcher presets to a curated set of blue-and-white themes (drop the yellow/black ones).
- Update all section gradients (Hero, CTA, WhyChoose, About, PatientEducation, Navbar/Footer) from black/yellow to navy/blue.

### 11. Convert to multi-page routing
- Split single-page anchors into separate routes via React Router:
  - `/` — Home (Hero + brief about + CTA)
  - `/about` — About + WhyChoose
  - `/services` — Services with conditions dropdown
  - `/locations` — Locations
  - `/insurance` — Insurance logos
  - `/reviews` — Reviews
  - `/education` — Patient Education
  - `/contact` — Contact + FAQ
  - `/doctor/ahmad-rehmani` — (existing) profile
- Update Navbar links to use `<Link>` to these routes instead of `#anchor`.
- Each new page reuses existing section components, wrapped with Navbar + Footer + per-page SEO (title/description/canonical/JSON-LD).
- Update sitemap / internal linking accordingly.

---

## What I need from you before I start
1. **Re-upload the logo file** (PNG with transparent background ideal) — last upload didn't attach.
2. Confirm the **conditions list** in §5 is acceptable, or paste your preferred list.
3. Approve this plan so I can execute all sections in one pass.
