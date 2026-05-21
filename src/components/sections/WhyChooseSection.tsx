import { ShieldCheck, FlaskConical, GraduationCap, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Dedicated Subspecialist — Not a Generalist",
    description: "When your vision is at stake — choose the doctor with the skill, expertise, training, and bedside manner that will make you feel at ease. Dr. Rehmani's entire practice focuses on diseases and surgery of the retina and vitreous."
  },
  {
    icon: GraduationCap,
    title: "Academic & Fellowship-Trained",
    description: "Surgical Vitreoretinal Fellowship in Houston, Chief Resident at St. John's Episcopal Hospital, and a former Clinical Assistant Professor — bringing academic-level expertise to private practice in Cypress."
  },
  {
    icon: FlaskConical,
    title: "Clinical Trial Researcher — 28 Major U.S. Clinical Trials",
    description: "As a sub-investigator on 28 active U.S. clinical trials in macular degeneration and diabetic eye disease, Dr. Rehmani offers patients early visibility into the most advanced anti-VEGF therapies and gene-therapy approaches."
  },
  {
    icon: MapPin,
    title: "Local Expert for Northwest Houston",
    description: "Conveniently located on US-290 in Cypress — serving Cypress, Bridgeland, Katy, Tomball, and the surrounding Northwest Houston corridor. Same-day evaluation available for retinal emergencies."
  },
];

const outcomeMetrics = [
  { label: "Overall Patient Satisfaction", value: "100%", width: "100%" },
  { label: "Patients Who Recommend", value: "100%", width: "100%" },
  { label: "Staff Professionalism", value: "5.0 / 5.0", width: "100%" },
  { label: "Explanation of Condition", value: "5.0 / 5.0", width: "100%" },
  { label: "High Vitreoretinal Surgery Success Rate", value: "Excellent", width: "96%" },
  { label: "Research Trial Participation", value: "28 Trials", width: "95%" },
];

const WhyChooseSection = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="bg-background py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(210 90% 55%), transparent)" }} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Why Patients Choose Us</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 max-w-4xl mx-auto leading-tight">
            When Your Vision Is at Stake — Choose the Doctor with the Skill, Expertise, Training & Bedside Manner That Puts You at Ease
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6 fade-up">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-pale flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="font-body text-sm text-gray-600 mt-1 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - stats card */}
          <div
            className="bg-gradient-card rounded-2xl p-8 space-y-6 fade-up shadow-lg"
          >
            <h3 className="font-display text-primary-foreground text-xl font-semibold">Patient Outcome Indicators</h3>
            <div className="space-y-4">
              {outcomeMetrics.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between mb-1.5 gap-3">
                    <span className="font-body text-primary-foreground/75 text-sm">{m.label}</span>
                    <span className="font-body text-gold-light text-sm font-semibold whitespace-nowrap">{m.value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: m.width,
                        background: "linear-gradient(90deg, hsl(210 90% 58%), hsl(200 100% 78%))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-5">
              <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider mb-2">Training & Affiliations</p>
              <ul className="space-y-1.5">
                {[
                  "Former Clinical Assistant Professor — UTMB",
                  "University of Texas Medical Branch (UTMB) — Vitreoretinal Fellowship",
                  "St. John's Episcopal Hospital — Chief Resident",
                  "American Society of Retina Specialists (ASRS)",
                  "American Academy of Ophthalmology (AAO)",
                ].map((h) => (
                  <li key={h} className="font-body text-primary-foreground/85 text-sm">{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
