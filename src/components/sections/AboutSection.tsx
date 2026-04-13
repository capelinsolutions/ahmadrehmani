import { ShieldCheck, Star } from "lucide-react";
import drRehmaniPhoto from "@/assets/dr-rehmani.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const credentials = [
  { label: "Undergraduate", value: "University of Rochester — Magna Cum Laude, Double BA: Biology & Religion" },
  { label: "Medical Degree", value: "D.O. — NYIT College of Osteopathic Medicine" },
  { label: "Subspecialty", value: "Vitreoretinal Disease & Surgery" },
  { label: "Hospital Affiliations", value: "Hackensack University Medical Center · Clara Maass · Ramapo Valley Surgical" },
];

const chips = ["U.S. News Top Choice", "Percy Dutton Prize", "5.0 Google Rating", "Hackensack Affiliated"];

const AboutSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="about" ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Photo placeholder */}
          <div className="fade-up relative">
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(135deg, #0B1F4B, #0E7A6E)",
              }}
            >
              <img src={drRehmaniPhoto} alt="Dr. Ahmad Rehmani, D.O. — Board-Certified Vitreoretinal Specialist" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="absolute bottom-4 right-4 bg-background rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Board Certified</p>
                <p className="font-body text-xs text-muted-foreground">Vitreoretinal Specialist</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 fade-up">
            <div>
              <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">About Dr. Rehmani</span>
              <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
                The Most Trusted Retina Specialist in New Jersey & Houston, TX
              </h2>
            </div>

            <div className="space-y-4 font-body text-gray-600 leading-[1.7]">
              <p>
                Dr. Ahmad Rehmani is a board-certified ophthalmologist who has devoted his career to the subspecialty of vitreoretinal disease and surgery. Unlike general ophthalmologists, Dr. Rehmani focuses exclusively on the complex diseases of the retina and vitreous — offering the deepest level of expertise available for conditions like macular degeneration, diabetic retinopathy, retinal detachment, and advanced cataract care.
              </p>
              <p>
                With over 11–20 years of experience and a perfect 5-star patient rating, Dr. Rehmani has earned recognition from U.S. News & World Report as a Patients' Top Choice — an award reflecting both exceptional clinical outcomes and a patient experience consistently described as warm, thorough, and confidence-inspiring.
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
              <cite className="font-body text-sm text-muted-foreground mt-3 block not-italic">— Dr. Ahmad Rehmani, D.O.</cite>
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
