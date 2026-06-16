import { ShieldCheck, Star, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import drRehmaniPhoto from "@/assets/dr-rehmani.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const allCredentials = [
  { label: "Undergraduate", value: "University of Rochester — Magna Cum Laude · B.A. Biology & Religion · Minor in Public Health" },
  { label: "Medical Degree", value: "Doctor of Osteopathic Medicine — NYCOM (New York College of Osteopathic Medicine)" },
  { label: "Residency", value: "Ophthalmology — St. John's Episcopal Hospital · Chief Resident 2019–2020" },
  { label: "Fellowship", value: "Surgical Vitreoretinal Fellowship — University of Texas Medical Branch (UTMB), Houston" },
  { label: "Academic Role", value: "Former Clinical Assistant Professor — UTMB" },
  { label: "Research", value: "Sub-Investigator on 28 U.S. Clinical Trials in retinal disease (Eylea, Vabysmo, Susvimo, RGX-314 and more)" },
];

const compactCredentials = [
  { label: "Fellowship", value: "Surgical Vitreoretinal Fellowship — UTMB, Houston" },
  { label: "Residency", value: "Ophthalmology Chief Resident — St. John's Episcopal Hospital" },
  { label: "Research", value: "28 U.S. Clinical Trials — sub-investigator" },
];

const allChips = [
  { label: "Fellowship-Trained", icon: Star },
  { label: "28 Clinical Trials", icon: Star },
  { label: "Former Clinical Professor", icon: Star },
  { label: "Percy Dutton Prize", icon: Award },
  { label: "Chief Resident", icon: Star },
  { label: "5.0 Google Rated", icon: Star },
  { label: "Founder: Retina Program at North Cypress Surgery Center & North Houston Retina Clinic", icon: Building2 },
  { label: "Awards: Percy Dutton Lifetime Achievement Award · Keidaean Honor Society", icon: Award },
];

const compactChips = [
  { label: "Fellowship-Trained", icon: Star },
  { label: "28 Clinical Trials", icon: Star },
  { label: "5.0 Google Rated", icon: Star },
  { label: "Founder: Retina Program at North Cypress Surgery Center", icon: Building2 },
];

interface AboutSectionProps {
  compact?: boolean;
}

const AboutSection = ({ compact = false }: AboutSectionProps) => {
  const ref = useScrollAnimation();
  const credentials = compact ? compactCredentials : allCredentials;
  const chips = compact ? compactChips : allChips;

  return (
    <section id="about" ref={ref} className="bg-gradient-soft py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Photo */}
          <div className="fade-up relative">
            <div
              className="bg-gradient-card w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <img src={drRehmaniPhoto} alt="Dr. Ahmad Rehmani, D.O. — Fellowship-Trained Vitreoretinal Specialist, North Houston Retina, Cypress TX" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 fade-up">
            <div>
              <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">About Dr. Rehmani</span>
              <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
                {compact
                  ? "Houston's Fellowship-Trained Retina Specialist"
                  : "The Dedicated Retina Specialist Serving Cypress & Northwest Houston"}
              </h2>
            </div>

            {compact ? (
              /* ---------- COMPACT (Homepage) ---------- */
              <div className="space-y-4 font-body text-gray-600 leading-[1.7]">
                <p>
                  Dr. Ahmad Rehmani is the founder of <strong className="text-foreground">North Houston Retina</strong> in Cypress, TX. A UTMB fellowship-trained vitreoretinal specialist, he treats complex retinal conditions including macular degeneration, diabetic retinopathy, and retinal detachment — bringing academic-level expertise to the Northwest Houston corridor.
                </p>
              </div>
            ) : (
              /* ---------- FULL (About Page) ---------- */
              <div className="space-y-4 font-body text-gray-600 leading-[1.7]">
                <p>
                  Dr. Ahmad Rehmani is the founder, owner, and physician of <strong className="text-foreground">North Houston Retina, PLLC</strong> in Cypress, TX. After completing his Surgical Vitreoretinal Fellowship at the University of Texas Medical Branch (UTMB) in Houston and serving as Chief Resident in Ophthalmology at St. John's Episcopal Hospital, Dr. Rehmani has dedicated his career exclusively to diseases and surgery of the retina and vitreous.
                </p>
                <p>
                  Unlike a general ophthalmologist or optometrist, Dr. Rehmani focuses solely on complex retinal conditions. While Dr. Rehmani is happy to care for the day-to-day ocular and retinal conditions such as macular degeneration, diabetic retinopathy, retinal detachment and retinal tears, he is well versed in complex retinal disease both medically and surgically. He has developed his own techniques in complex lens replacement cases and serves as the founder for the surgical retina program at <strong className="text-foreground">North Cypress Surgery Center</strong>. As a former Clinical Assistant Professor at UTMB and a sub-investigator on 28 active U.S. clinical trials, he brings academic-level expertise and the latest treatments directly to patients in the Northwest Houston corridor.
                </p>
                <p>
                  Patients consistently describe their experience as warm, thorough, and confidence-inspiring — reflected in his perfect 5.0 Google rating and recognition as a sub-investigator on 28 active U.S. clinical trials advancing the future of retinal care.
                </p>
              </div>
            )}

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
                {compact
                  ? '"I treat every patient with the urgency and compassion I would want for my own family."'
                  : '"My goal is to make the most advanced retinal care feel accessible — to explain complex diagnoses in plain language, and to treat every patient with the same urgency and compassion I would want for my own family."'}
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-3 block not-italic">— Dr. Ahmad Rehmani, D.O. · Owner, North Houston Retina</cite>
            </blockquote>

            <Link to="/doctor/ahmad-rehmani" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors text-sm">
              View Full Profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
