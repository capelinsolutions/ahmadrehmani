import { Phone, CheckCircle2, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const acceptedInsurers = [
  { name: "Aetna", note: "Commercial plans" },
  { name: "Wellpoint", note: "All major Wellpoint plans" },
  { name: "Multiplan", note: "Multiplan / PHCS network" },
];

const pendingInsurers = [
  { name: "Medicare", note: "Part A & B — pending credentialing" },
  { name: "Medicare Advantage", note: "Part C plans — coming soon" },
  { name: "Blue Cross Blue Shield", note: "Via MHMD network" },
  { name: "Cigna", note: "Via MHMD network" },
  { name: "United Healthcare", note: "Via MHMD network" },
  { name: "Community Health Choice", note: "Via MHMD network" },
];

const InsuranceSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="insurance" ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Insurance & Coverage</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            Insurance Plans Accepted at North Houston Retina
          </h2>
          <p className="font-body text-gray-600 mt-4 max-w-2xl mx-auto">
            We are continuously expanding our in-network plans. As a courtesy, we will also hold claims for patients with pending insurances. Call <a href="tel:+13465870223" className="text-accent font-semibold">(346) 587-0223</a> to verify your specific coverage.
          </p>
        </div>

        {/* Accepted */}
        <div className="max-w-5xl mx-auto fade-up mb-10">
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <h3 className="font-display text-xl font-bold text-foreground">Currently Accepted</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {acceptedInsurers.map((ins) => (
              <div key={ins.name} className="bg-accent-pale border border-accent/30 rounded-xl p-5 text-center hover:shadow-sm transition-all">
                <p className="font-body font-semibold text-base text-foreground">{ins.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{ins.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pending */}
        <div className="max-w-5xl mx-auto fade-up">
          <div className="flex items-center gap-2 mb-5">
            <Clock className="w-5 h-5 text-gold" />
            <h3 className="font-display text-xl font-bold text-foreground">Coming Soon — Credentialing in Progress</h3>
            <span className="font-body text-xs text-muted-foreground">(Expected within 3 months)</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingInsurers.map((ins) => (
              <div
                key={ins.name}
                className="rounded-xl p-5 text-center hover:shadow-sm transition-all bg-background border-2 border-dashed border-gold/40"
              >
                <p className="font-body font-semibold text-sm text-foreground">{ins.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{ins.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 fade-up">
          <a
            href="tel:+13465870223"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call to Verify Your Coverage — (346) 587-0223
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
