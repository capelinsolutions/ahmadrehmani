import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(215 65% 18%), hsl(215 70% 28%))" }}
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] -translate-y-1/2 rounded-full opacity-25" style={{ background: "radial-gradient(circle, hsl(210 90% 55%), transparent)" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div className="space-y-6">
            <h2 className="font-display text-primary-foreground text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Protect Your Vision? Schedule Your Consultation Today.
            </h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed">
              Don't wait for vision problems to worsen. Whether you're managing macular degeneration, diabetic eye disease, need a specialist second opinion, or are experiencing new flashes and floaters — Dr. Rehmani's Cypress team is ready to help. Same-day evaluation available for retinal emergencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+13465870223"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" /> Call (346) 587-0223
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 rounded-lg font-body font-semibold transition-colors"
              >
                <MessageSquare className="w-5 h-5" /> Send Us a Message
              </Link>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 lg:p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div>
              <p className="font-body text-gold-light text-xs uppercase tracking-[0.12em] font-semibold">North Houston Retina, PLLC</p>
              <p className="font-display text-primary-foreground text-2xl font-bold mt-1">Cypress, TX Office</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+13465870223" className="font-body text-primary-foreground text-lg font-semibold block hover:text-accent-light transition-colors">
                    (346) 587-0223
                  </a>
                  <p className="font-body text-primary-foreground/50 text-xs">Direct office line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <p className="font-body text-primary-foreground/80 text-sm">27700 Northwest Freeway, Suite 355<br />Cypress, TX 77433</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <p className="font-body text-primary-foreground/80 text-sm">Monday – Friday · 8:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider mb-1">Insurance</p>
              <p className="font-body text-primary-foreground/80 text-sm">Aetna · Wellpoint · Multiplan <span className="text-primary-foreground/50">(Medicare & MHMD coming soon)</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
