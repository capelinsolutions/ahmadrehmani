import SectionCTA from "@/components/SectionCTA";
import { MapPin, Phone, Clock, Star, ExternalLink, Mail, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clinicAsset from "@/assets/clinic-waiting-room.jpg.asset.json";

const clinicImg = clinicAsset.url;

const LocationsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section
      id="locations"
      ref={ref}
      className="relative bg-[#030816] py-20 lg:py-28 overflow-hidden"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] -mr-48 -mt-48 pointer-events-none"
        style={{ background: "hsl(210 90% 48% / 0.18)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] -ml-24 -mb-24 pointer-events-none"
        style={{ background: "hsl(45 80% 55% / 0.10)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up max-w-2xl mx-auto">
          <span className="inline-block font-body text-xs text-gold-light font-semibold uppercase tracking-[0.25em]">
            Visit Our Office
          </span>
          <h2
            className="font-display text-primary-foreground mt-4 leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4.2vw, 52px)" }}
          >
            North Houston Retina —{" "}
            <span className="text-gold-light italic font-medium">Cypress, TX</span>
          </h2>
          <p className="font-body text-primary-foreground/65 mt-5 text-base lg:text-lg leading-relaxed">
            Conveniently located on Northwest Freeway (US-290) — serving Cypress,
            Bridgeland, Katy, Tomball, and the Northwest Houston corridor.
          </p>
        </div>

        {/* Split card */}
        <div className="max-w-6xl mx-auto fade-up">
          <div className="grid lg:grid-cols-12 gap-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.03] backdrop-blur-sm">
            {/* Image side */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[560px]">
              <img
                src={clinicImg}
                alt="North Houston Retina — welcoming patient waiting room in Cypress, TX"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1280}
              />
              {/* Right-side fade into content panel on lg+ */}
              <div
                className="absolute inset-0 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#030816]/40"
                aria-hidden="true"
              />
              {/* Bottom fade */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(215 65% 8% / 0.05) 0%, hsl(215 65% 8% / 0.25) 70%, hsl(215 65% 6% / 0.85) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Floating chips */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-[hsl(215_65%_10%_/_0.7)] backdrop-blur-md border border-white/15 py-2 px-3.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-body font-semibold text-primary-foreground">
                  Main Office · Cypress
                </span>
              </div>
              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-gold/20 backdrop-blur-md border border-gold/30 py-2 px-3.5 rounded-full">
                <Star className="w-3 h-3 fill-gold-light text-gold-light" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-body font-semibold text-gold-light">
                  5.0 Google
                </span>
              </div>

              {/* Bottom welcome panel */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                <div className="rounded-2xl border border-white/15 backdrop-blur-xl px-5 py-4 bg-[hsl(215_65%_10%_/_0.65)]">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-body font-semibold text-gold-light mb-1">
                    Now Welcoming New Patients
                  </p>
                  <p className="font-body text-primary-foreground/80 text-sm">
                    Same-day evaluation available for retinal emergencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Info side */}
            <div className="lg:col-span-6 p-7 lg:p-12 flex flex-col justify-center space-y-7">
              <div>
                <h3 className="font-display text-primary-foreground text-2xl lg:text-[2rem] font-semibold leading-tight">
                  North Houston Retina, PLLC
                </h3>
                <p className="font-body text-primary-foreground/55 text-sm mt-2">
                  Cypress, TX · Northwest Houston Corridor
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-light" />
                  </div>
                  <div>
                    <p className="font-body text-primary-foreground/50 text-[10px] uppercase tracking-[0.18em] font-semibold">
                      Address
                    </p>
                    <p className="font-body text-primary-foreground text-sm mt-1 leading-relaxed">
                      27700 Northwest Freeway
                      <br />
                      Suite 355, Cypress, TX 77433
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-accent-light" />
                  </div>
                  <div>
                    <p className="font-body text-primary-foreground/50 text-[10px] uppercase tracking-[0.18em] font-semibold">
                      Phone
                    </p>
                    <a
                      href="tel:+13465870223"
                      className="font-body text-primary-foreground text-sm mt-1 block hover:text-gold-light transition-colors"
                    >
                      (346) 587-0223
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-accent-light" />
                  </div>
                  <div>
                    <p className="font-body text-primary-foreground/50 text-[10px] uppercase tracking-[0.18em] font-semibold">
                      Hours
                    </p>
                    <p className="font-body text-primary-foreground text-sm mt-1 leading-relaxed">
                      Monday – Friday
                      <br />
                      8:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent-light" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-primary-foreground/50 text-[10px] uppercase tracking-[0.18em] font-semibold">
                      Email
                    </p>
                    <a
                      href="mailto:ahmadsrehmani@gmail.com"
                      className="font-body text-primary-foreground text-sm mt-1 block hover:text-gold-light transition-colors break-all"
                    >
                      ahmadsrehmani@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 border-t border-white/10 pt-6">
                {[
                  "Free On-Site Parking",
                  "Wheelchair Accessible",
                  "Most Insurance Accepted",
                  "Same-Day Emergencies",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-primary-foreground/85 font-body text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-light flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+13465870223"
                  className="flex-1 bg-accent hover:bg-accent-light text-accent-foreground py-3.5 rounded-lg font-body font-bold text-sm text-center transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-accent/30"
                >
                  <Phone className="w-4 h-4" /> Call (346) 587-0223
                </a>
                <a
                  href="https://maps.google.com/?q=27700+Northwest+Freeway+Suite+355+Cypress+TX+77433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-white/20 bg-white/5 text-primary-foreground hover:bg-white/10 py-3.5 rounded-lg font-body font-semibold text-sm text-center transition-colors inline-flex items-center justify-center gap-1.5 backdrop-blur-sm"
                >
                  Get Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <SectionCTA to="/locations" label="View Our Locations" />
      </div>
    </section>
  );
};

export default LocationsSection;
