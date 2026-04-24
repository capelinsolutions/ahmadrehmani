import { MapPin, Phone, Clock, Star, ExternalLink, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="locations" ref={ref} className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-gold-light font-semibold uppercase tracking-wider">Visit Our Office</span>
          <h2 className="font-display text-primary-foreground text-3xl lg:text-4xl font-bold mt-3">
            North Houston Retina — Cypress, TX
          </h2>
          <p className="font-body text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Conveniently located on Northwest Freeway (US-290) — serving Cypress, Bridgeland, Katy, Tomball, and the Northwest Houston corridor.
          </p>
        </div>

        <div className="max-w-3xl mx-auto fade-up">
          <div
            className="rounded-2xl p-6 lg:p-10 space-y-6 hover:border-accent/50 transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block bg-accent/20 text-accent-light text-xs font-body font-semibold px-3 py-1 rounded-full">
                Main Office
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold-light text-xs font-body font-semibold px-3 py-1 rounded-full">
                <Star className="w-3 h-3 fill-gold-light" /> 5.0 Google Rated
              </span>
            </div>
            <div>
              <h3 className="font-display text-primary-foreground text-2xl lg:text-3xl font-bold">North Houston Retina, PLLC</h3>
              <p className="font-body text-primary-foreground/60 text-sm mt-1">Cypress, TX · Northwest Houston Corridor</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider">Address</p>
                  <p className="font-body text-primary-foreground text-sm mt-0.5">27700 Northwest Freeway<br />Suite 355, Cypress, TX 77433</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider">Phone</p>
                  <a href="tel:+13465870223" className="font-body text-primary-foreground text-sm mt-0.5 block hover:text-accent-light transition-colors">(346) 587-0223</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider">Hours</p>
                  <p className="font-body text-primary-foreground text-sm mt-0.5">Monday – Friday<br />8:00 AM – 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider">Email</p>
                  <a href="mailto:ahmadsrehmani@gmail.com" className="font-body text-primary-foreground text-sm mt-0.5 block hover:text-accent-light transition-colors break-all">ahmadsrehmani@gmail.com</a>
                </div>
              </div>
            </div>

            <p className="font-body text-primary-foreground/60 text-sm italic border-t border-white/10 pt-5">
              Now welcoming new patients. Same-day evaluation available for retinal emergencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+13465870223" className="flex-1 bg-accent hover:bg-accent-light text-accent-foreground py-3 rounded-lg font-body font-semibold text-sm text-center transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call (346) 587-0223
              </a>
              <a
                href="https://maps.google.com/?q=27700+Northwest+Freeway+Suite+355+Cypress+TX+77433"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-primary-foreground/20 text-primary-foreground/90 hover:bg-white/10 py-3 rounded-lg font-body font-medium text-sm text-center transition-colors inline-flex items-center justify-center gap-1.5"
              >
                Get Directions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
