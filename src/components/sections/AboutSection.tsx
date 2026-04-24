import { ShieldCheck, Star } from "lucide-react";
import drRehmaniPhoto from "@/assets/dr-rehmani.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const credentials = [
  { label: "Undergraduate", value: "University of Rochester — Magna Cum Laude · B.A. Biology & Religion · Minor in Public Health" },
  { label: "Medical Degree", value: "Doctor of Osteopathic Medicine — NYCOM (New York College of Osteopathic Medicine)" },
  { label: "Residency", value: "Ophthalmology — St. John's Episcopal Hospital · Chief Resident 2019–2020" },
  { label: "Fellowship", value: "Surgical Vitreoretinal Fellowship — UTMB (University of Texas Medical Branch), Houston" },
  { label: "Academic Role", value: "Former Clinical Assistant Professor — UTMB" },
  { label: "Research", value: "Sub-Investigator on 28 U.S. Clinical Trials in retinal disease (Eylea, Vabysmo, Susvimo, RGX-314 and more)" },
];

const chips = ["UTMB Fellowship-Trained", "28 Clinical Trials", "Former UTMB Faculty", "Percy Dutton Prize", "Chief Resident", "5.0 Google Rated"];

const AboutSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="about" ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Photo */}
          <div className="fade-up relative">
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(135deg, #0B1F4B, #0E7A6E)",
              }}
            >
              <img src={drRehmaniPhoto} alt="Dr. Ahmad Rehmani, D.O. — Fellowship-Trained Vitreoretinal Specialist, North Houston Retina, Cypress TX" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="absolute bottom-4 right-4 bg-background rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">UTMB Fellowship-Trained</p>
                <p className="font-body text-xs text-muted-foreground">Vitreoretinal Specialist</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 fade-up">
            <div>
              <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">About Dr. Rehmani</span>
              <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
                The Dedicated Retina Specialist Serving Cypress & Northwest Houston
              </h2>
            </div>

            <div className="space-y-4 font-body text-gray-600 leading-[1.7]">
              <p>
                Dr. Ahmad Rehmani is the founder, owner, and physician of <strong className="text-foreground">North Houston Retina, PLLC</strong> in Cypress, TX. After completing his Surgical Vitreoretinal Fellowship at the University of Texas Medical Branch (UTMB) in Houston and serving as Chief Resident in Ophthalmology at St. John's Episcopal Hospital, Dr. Rehmani has dedicated his career exclusively to diseases and surgery of the retina and vitreous.
              </p>
              <p>
                Unlike a general ophthalmologist or optometrist, Dr. Rehmani focuses solely on complex retinal conditions — macular degeneration, diabetic retinopathy, retinal detachment, retinal tears, and vitreous hemorrhage. As a former Clinical Assistant Professor at UTMB and a sub-investigator on 28 active U.S. clinical trials, he brings academic-level expertise and the latest treatments directly to patients in the Northwest Houston corridor.
              </p>
              <p>
                Patients consistently describe their experience as warm, thorough, and confidence-inspiring — reflected in his perfect 5.0 Google rating and recognition as a sub-investigator on 28 active U.S. clinical trials advancing the future of retinal care.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div key={c.label} className="bg-gray-50 border border-border rounded-xl p-4">
                  <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider">{c.label}</p>
                  <p className="font-body text-sm text-foreground mt-1.5 leading-snug">{c.value}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-[3px] border-accent bg-accent-pale rounded-r-xl px-6 py-5">
              <p className="font-display italic text-foreground leading-relaxed">
                "My goal is to make the most advanced retinal care feel accessible — to explain complex diagnoses in plain language, and to treat every patient with the same urgency and compassion I would want for my own family."
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-3 block not-italic">— Dr. Ahmad Rehmani, D.O. · Owner, North Houston Retina</cite>
            </blockquote>

            {/* Chips */}
            <div className="flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-xs font-body font-medium">
                  <Star className="w-3 h-3 text-gold-light fill-gold-light" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
