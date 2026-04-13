import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const insurers = [
  { name: "Medicare", note: "Part A & B · Medicare Advantage" },
  { name: "Aetna", note: "All major Aetna plans" },
  { name: "Cigna", note: "Commercial & Medicare" },
  { name: "Blue Cross Blue Shield", note: "BCBS NJ & TX networks" },
  { name: "United Healthcare", note: "UHC & UHC Community" },
  { name: "Horizon BCBS", note: "NJ-specific plans" },
  { name: "Medicare Advantage", note: "Part C — most plans accepted" },
  { name: "Don't See Yours?", note: "Call us — we accept most plans", special: true },
];

const InsuranceSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="insurance" ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Insurance & Coverage</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            We Accept Medicare & Most Major Insurance Plans
          </h2>
          <p className="font-body text-gray-600 mt-4 max-w-xl mx-auto">
            Advanced retinal care should be accessible. Call us to verify your specific coverage before your visit.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto fade-up">
          {insurers.map((ins) => (
            <div
              key={ins.name}
              className={`rounded-xl p-5 text-center hover:shadow-sm hover:border-accent transition-all duration-300 ${
                ins.special
                  ? "border-2 border-dashed border-accent/40 bg-accent-pale"
                  : "bg-background border border-border"
              }`}
            >
              <p className={`font-body font-semibold text-sm ${ins.special ? "text-accent" : "text-foreground"}`}>{ins.name}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{ins.note}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-up">
          <a
            href="tel:+19739873380"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call to Verify Your Coverage — (973) 987-3380
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
