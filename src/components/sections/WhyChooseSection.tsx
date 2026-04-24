import { ShieldCheck, FlaskConical, GraduationCap, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Dedicated Subspecialist — Not a Generalist",
    description: "Dr. Rehmani's entire practice focuses on diseases and surgery of the retina and vitreous. When your central vision is at stake, you deserve a UTMB fellowship-trained specialist — not a general eye doctor seeing routine eyeglass prescriptions."
  },
  {
    icon: GraduationCap,
    title: "Academic & Fellowship-Trained",
    description: "Surgical Vitreoretinal Fellowship at UTMB Houston, Chief Resident at St. John's Episcopal Hospital, and a former Clinical Assistant Professor at UTMB — bringing academic-level expertise to private practice in Cypress."
  },
  {
    icon: FlaskConical,
    title: "Active Research — 28 U.S. Clinical Trials",
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
  { label: "Anti-VEGF Injection Volume", value: "High", width: "92%" },
  { label: "Research Trial Participation", value: "28 Trials", width: "95%" },
];

const WhyChooseSection = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Why Patients Choose Us</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            A Level of Expertise You Won't Find at a General Eye Clinic
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
            className="rounded-2xl p-8 space-y-6 fade-up"
            style={{ background: "linear-gradient(135deg, #0B1F4B, #132A60)" }}
          >
            <h3 className="font-display text-primary-foreground text-xl font-semibold">Patient Outcome Indicators</h3>
            <div className="space-y-4">
              {outcomeMetrics.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-body text-primary-foreground/70 text-sm">{m.label}</span>
                    <span className="font-body text-gold-light text-sm font-semibold">{m.value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: m.width,
                        background: "linear-gradient(90deg, hsl(170 78% 35%), hsl(40 82% 68%))",
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
                  "University of Texas Medical Branch (UTMB) — Vitreoretinal Fellowship",
                  "St. John's Episcopal Hospital — Chief Resident",
                  "Former Clinical Assistant Professor — UTMB",
                  "American Society of Retina Specialists (ASRS)",
                  "American Academy of Ophthalmology (AAO)",
                ].map((h) => (
                  <li key={h} className="font-body text-primary-foreground/80 text-sm">{h}</li>
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
