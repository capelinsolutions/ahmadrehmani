import { Phone, Star, ChevronDown, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section
    id="hero"
    className="relative w-full overflow-hidden bg-[#030816]"
    style={{ minHeight: "92vh" }}
  >
    {/* Ambient background glows */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"
      style={{ background: "hsl(210 90% 48% / 0.18)" }}
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-24 -mb-24 pointer-events-none"
      style={{ background: "hsl(200 95% 55% / 0.12)" }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.05]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-6 md:px-10 py-20 lg:py-28 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 self-start bg-accent/10 border border-accent/25 py-1.5 px-4 rounded-pill backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold-light fill-gold-light" />
              ))}
            </div>
            <span
              className="text-[10px] uppercase tracking-[0.22em] font-body font-medium text-primary-foreground/85"
            >
              Fellowship Trained · Cypress, TX
            </span>
          </div>

          <h1
            className="font-display text-primary-foreground leading-[1.05]"
            style={{ fontSize: "clamp(44px, 6vw, 78px)" }}
          >
            Houston's Medical &amp;{" "}
            <span className="text-gold-light italic font-medium">Surgical</span>{" "}
            Vitreo-Retinal Specialist
          </h1>

          <p className="text-lg md:text-xl font-body leading-relaxed max-w-2xl text-primary-foreground/70">
            Dr. Ahmad Rehmani, D.O. delivers elite, fellowship-trained care for complex
            retinal and ocular conditions at{" "}
            <span className="text-primary-foreground font-medium">North Houston Retina</span>.
            Providing clarity through specialized expertise and advanced surgical techniques.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="tel:+13465870223"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light transition-all text-accent-foreground font-body font-bold rounded-lg shadow-lg shadow-accent/30"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call (346) 587-0223
            </a>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 transition-all text-primary-foreground font-body font-semibold rounded-lg backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Recognition Card */}
        <div className="lg:col-span-5 relative animate-fade-in">
          <div
            className="absolute -inset-4 rounded-[2.5rem] blur-2xl pointer-events-none"
            style={{ background: "hsl(210 90% 48% / 0.15)" }}
            aria-hidden="true"
          />
          <div
            className="relative rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden border border-white/10 backdrop-blur-xl"
            style={{ background: "hsl(215 65% 10% / 0.8)" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-px opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)",
              }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] font-body font-bold text-gold-light mb-2">
                  Patient Recognition
                </p>
                <h2 className="font-display text-3xl text-primary-foreground font-medium">
                  Verified Ratings &amp; Awards
                </h2>
              </div>

              <div className="flex items-end gap-4 pb-8 border-b border-white/10">
                <span className="font-display text-7xl font-light text-primary-foreground tracking-tighter leading-none">
                  5.0
                </span>
                <div className="flex flex-col mb-1">
                  <div className="flex gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-light fill-gold-light" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/50 text-[11px] font-body font-medium tracking-[0.15em]">
                    GOOGLE REVIEWS · CYPRESS, TX
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Vitreoretinal Surgical Fellowship Trained",
                  "Founder — North Cypress Surgical Program",
                  "Sub-Investigator — 28 Active U.S. Clinical Trials",
                  "Former Clinical Assistant Professor — UTMB",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-primary-foreground/85 font-body"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block w-full text-center py-5 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent transition-all text-accent-foreground font-body font-bold rounded-xl shadow-xl shadow-accent/30"
              >
                Request a Call Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
      <span className="text-primary-foreground/40 text-[10px] font-body uppercase tracking-[0.25em]">
        Scroll
      </span>
      <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
