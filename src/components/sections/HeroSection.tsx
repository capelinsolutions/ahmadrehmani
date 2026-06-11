import { Phone, Star, ChevronDown, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import clinicHeroAsset from "@/assets/dr-rehmani-exam.jpg.asset.json";

const clinicHero = clinicHeroAsset.url;

const HeroSection = () => (
  <section
    id="hero"
    className="relative w-full overflow-hidden bg-[#030816]"
    style={{ minHeight: "92vh" }}
  >
    {/* Ambient background glows */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"
      style={{ background: "hsl(210 90% 48% / 0.22)" }}
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-24 -mb-24 pointer-events-none"
      style={{ background: "hsl(200 95% 55% / 0.15)" }}
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

    <div className="container mx-auto px-6 md:px-10 py-20 lg:py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Content */}
        <div className="lg:col-span-6 flex flex-col space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 self-start bg-accent/10 border border-accent/25 py-1.5 px-4 rounded-pill backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold-light fill-gold-light" />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.22em] font-body font-medium text-primary-foreground/85">
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

          <p className="text-lg md:text-xl font-body leading-relaxed max-w-xl text-primary-foreground/70">
            Dr. Ahmad Rehmani, D.O. delivers elite, fellowship-trained care for complex
            retinal and ocular conditions at{" "}
            <span className="text-primary-foreground font-medium">North Houston Retina</span>.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
            {[
              "Vitreoretinal Fellowship Trained",
              "Founder — N. Cypress Surgery Prog.",
              "28 Active U.S. Clinical Trials",
              "Former Clinical Asst. Prof. — UTMB",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-primary-foreground/85 font-body"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-light flex-shrink-0 mt-1" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

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

        {/* Clinic Image */}
        <div className="lg:col-span-6 relative animate-fade-in">
          {/* Halo glow */}
          <div
            className="absolute -inset-6 rounded-[2.5rem] blur-3xl pointer-events-none"
            style={{ background: "hsl(210 90% 48% / 0.25)" }}
            aria-hidden="true"
          />

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            {/* Gold gradient top accent */}
            <div
              className="absolute top-0 left-0 w-full h-px opacity-70 z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--gold-light)), transparent)",
              }}
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full">
              <img
                src={clinicHero}
                alt="North Houston Retina — modern clinic interior in Cypress, TX"
                className="absolute inset-0 w-full h-full object-cover"
                width={1280}
                height={1280}
              />
              {/* Dark gradient overlay for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(215 65% 8% / 0.15) 0%, hsl(215 65% 8% / 0.35) 55%, hsl(215 65% 6% / 0.92) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Floating location chip top-left */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-[hsl(215_65%_10%_/_0.7)] backdrop-blur-md border border-white/15 py-2 px-3.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-body font-semibold text-primary-foreground">
                  North Houston Retina · Cypress
                </span>
              </div>

              {/* Bottom recognition panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <div className="rounded-2xl border border-white/15 backdrop-blur-xl p-5 md:p-6 bg-[hsl(215_65%_10%_/_0.65)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-5xl font-light text-primary-foreground leading-none">
                        5.0
                      </span>
                      <div>
                        <div className="flex gap-0.5 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-gold-light fill-gold-light"
                            />
                          ))}
                        </div>
                        <p className="text-primary-foreground/60 text-[10px] font-body font-medium tracking-[0.18em] uppercase">
                          Google Reviews
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="hidden sm:inline-flex items-center px-5 py-3 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent transition-all text-accent-foreground font-body font-bold rounded-xl shadow-lg shadow-accent/30 text-sm"
                    >
                      Request a Call Back
                    </Link>
                  </div>
                  <Link
                    to="/contact"
                    className="sm:hidden mt-4 block w-full text-center py-3 bg-gradient-to-r from-accent to-accent-light text-accent-foreground font-body font-bold rounded-xl shadow-lg shadow-accent/30 text-sm"
                  >
                    Request a Call Back
                  </Link>
                </div>
              </div>
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
