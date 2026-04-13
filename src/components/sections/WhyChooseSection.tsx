import { ShieldCheck, Users, CreditCard, Map } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Dedicated Subspecialist — Not a Generalist",
    description: "Dr. Rehmani focuses exclusively on vitreoretinal disease. When your vision is at stake, you deserve a physician whose entire training and daily practice is devoted to the retina."
  },
  {
    icon: Users,
    title: "Recognized by Patients & Peers Alike",
    description: "5.0 Google rating (155+ reviews), U.S. News Patients' Top Choice Award, and Hackensack University Medical Center affiliation reflect exceptional clinical outcomes."
  },
  {
    icon: CreditCard,
    title: "Medicare & Major Insurance Accepted",
    description: "We accept Medicare, Medicare Advantage, Aetna, Cigna, Blue Cross Blue Shield, United Healthcare, and most major commercial plans."
  },
  {
    icon: Map,
    title: "Serving NJ and Cypress, TX",
    description: "With established practices in Wayne, NJ and Cypress, TX, Dr. Rehmani brings subspecialty expertise to two markets."
  },
];

const outcomeMetrics = [
  { label: "Overall Patient Satisfaction", value: "100%", width: "100%" },
  { label: "Patients Who Recommend", value: "100%", width: "100%" },
  { label: "Staff Professionalism", value: "5.0 / 5.0", width: "100%" },
  { label: "Explanation of Condition", value: "5.0 / 5.0", width: "100%" },
  { label: "U.S. News AMD Treatment Volume", value: "High", width: "88%" },
  { label: "U.S. News Cataract Volume", value: "High", width: "85%" },
];

const WhyChooseSection = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Why Patients Choose Us</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            A Level of Expertise You Can't Find at a General Eye Clinic
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
              <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider mb-2">Hospital Affiliations</p>
              <ul className="space-y-1.5">
                {["Hackensack University Medical Center", "Clara Maass Medical Center", "Ramapo Valley Surgical Center"].map((h) => (
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
