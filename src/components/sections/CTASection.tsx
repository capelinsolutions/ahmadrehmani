import { Phone, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const ref = useScrollAnimation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1F4B, #132A60)" }}
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] -translate-y-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(170 78% 27%), transparent)" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div className="space-y-6">
            <h2 className="font-display text-primary-foreground text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Protect Your Vision? Schedule Your Consultation Today.
            </h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed">
              Don't wait for vision problems to worsen. Whether you're managing a chronic retinal condition, need a specialist second opinion, or are experiencing new symptoms — Dr. Rehmani's team is ready to help. Medicare and major insurance accepted at both locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+19739873380"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" /> Call (973) 987-3380
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 rounded-lg font-body font-semibold transition-colors"
              >
                <MessageSquare className="w-5 h-5" /> Send Us a Message
              </button>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {[
              { label: "Wayne, NJ — Main Office", phone: "(973) 987-3380", hours: "Mon–Fri · 8:00 AM – 5:00 PM" },
              { label: "Cypress, TX Office", phone: "(973) 987-3380", hours: "Call for current TX hours" },
            ].map((loc) => (
              <div key={loc.label} className="space-y-1">
                <p className="font-body text-primary-foreground/60 text-xs uppercase tracking-wider">{loc.label}</p>
                <a href="tel:+19739873380" className="font-body text-primary-foreground text-lg font-semibold block hover:text-accent-light transition-colors">
                  {loc.phone}
                </a>
                <p className="font-body text-primary-foreground/50 text-sm">{loc.hours}</p>
              </div>
            ))}
            <div className="border-t border-white/10 pt-4">
              <p className="font-body text-primary-foreground/50 text-sm">Medicare · Aetna · Cigna · BCBS · UHC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
