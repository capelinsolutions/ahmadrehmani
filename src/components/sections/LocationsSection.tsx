import SectionCTA from "@/components/SectionCTA";
import { MapPin, Phone, Clock, Star, ExternalLink, Mail, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clinicImg from "@/assets/clinic-waiting-room.jpg";

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
            </div>

            {/* Info side */}
            <div className="lg:col-span-6 p-7 lg:p-12 flex flex-col justify-center space-y-7">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-gold-light/10 border border-gold-light/20 px-2.5 py-0.5 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse"></span>
                  <span className="text-[10px] text-gold-light font-body font-semibold uppercase tracking-wider">
                    Accepting New Patients
                  </span>
                </div>
                <h3 className="font-display text-primary-foreground text-2xl lg:text-[2rem] font-semibold leading-tight">
                  Cypress, TX Clinic
                </h3>
                <p className="font-body text-primary-foreground/55 text-sm mt-1.5">
                  Northwest Houston Corridor
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
                <div className="group flex items-start gap-3 cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/30 group-hover:border-accent/60 group-hover:scale-110 group-hover:rotate-6">
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
                <div className="group flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/30 group-hover:border-accent/60 group-hover:scale-110 group-hover:rotate-6">
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
                <div className="group flex items-start gap-3 cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/30 group-hover:border-accent/60 group-hover:scale-110 group-hover:rotate-6">
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
                <div className="group flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/30 group-hover:border-accent/60 group-hover:scale-110 group-hover:rotate-6">
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

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+13465870223"
                  className="group flex-1 bg-accent hover:bg-accent-light text-accent-foreground py-3.5 rounded-lg font-body font-bold text-sm text-center transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" /> Call (346) 587-0223
                </a>
                <a
                  href="https://maps.google.com/?q=27700+Northwest+Freeway+Suite+355+Cypress+TX+77433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 border border-white/20 bg-white/5 text-primary-foreground hover:bg-white/10 hover:border-white/40 py-3.5 rounded-lg font-body font-semibold text-sm text-center transition-all duration-300 inline-flex items-center justify-center gap-1.5 backdrop-blur-sm hover:-translate-y-0.5"
                >
                  Get Directions <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
