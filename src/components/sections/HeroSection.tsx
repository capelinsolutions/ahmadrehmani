import { Phone, Star, ShieldCheck, MapPin, ChevronDown, Award } from "lucide-react";
import { Link } from "react-router-dom";
import clinicBg from "@/assets/clinic-hero-bg.jpg";

const NAVY_GRADIENT =
  "linear-gradient(135deg, rgba(8,20,48,0.94) 0%, rgba(15,52,120,0.85) 35%, rgba(20,90,170,0.78) 65%, rgba(8,20,48,0.94) 100%)";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{ minHeight: "88vh" }}
  >
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${clinicBg})` }}
      aria-hidden="true"
    />
    {/* Navy overlay */}
    <div className="absolute inset-0" style={{ background: NAVY_GRADIENT }} aria-hidden="true" />

    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, hsl(210 90% 48%), transparent)" }} />
      <div className="absolute top-[-100px] right-[5%] w-[300px] h-[300px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(200 95% 65%), transparent)" }} />
    </div>

    <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-pill px-4 py-1.5">
            <Star className="w-4 h-4 text-gold-light fill-gold-light" />
            <span className="text-gold-light text-sm font-body font-medium">Fellowship-Trained · 5.0 Google Rating</span>
          </div>

          <h1 className="font-display text-primary-foreground leading-[1.15]" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
            Houston's Medical and Surgical{" "}
            <span className="text-gold-light">Vitreo-Retinal Specialist</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg font-body leading-relaxed max-w-xl">
            Dr. Ahmad Rehmani, D.O. — founder of <strong className="text-primary-foreground">North Houston Retina</strong> — delivers fellowship-trained care for retinal and ocular conditions including macular degeneration, diabetic retinopathy, retinal detachment, and complex vitreoretinal surgery. Now welcoming new patients across Cypress, Bridgeland, Katy, and Northwest Houston.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+13465870223"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (346) 587-0223
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-white/10 px-6 py-3 rounded-lg font-body font-medium text-base transition-colors"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { icon: Star, value: "5.0 / 5.0", label: "Google Rated" },
              { icon: ShieldCheck, value: "Fellowship-Trained", label: "Vitreoretinal Specialist" },
              { icon: Award, value: "Founder — Surgical Program", label: "North Cypress Surgical Center" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/25 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-body font-semibold">{item.value}</p>
                  <p className="text-primary-foreground/60 text-xs font-body">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card - hidden on mobile */}
        <div className="hidden lg:block">
          <div
            className="rounded-2xl p-8 space-y-6"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div>
              <p className="text-primary-foreground/70 text-sm font-body uppercase tracking-wider">Patient Recognition</p>
              <p className="text-primary-foreground text-lg font-display font-semibold mt-1">Verified Ratings & Awards</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-5xl font-display font-bold text-gold-light">5.0</span>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-light fill-gold-light" />
                  ))}
                </div>
                <p className="text-primary-foreground/70 text-sm font-body mt-1">Google Reviews · Cypress, TX</p>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Vitreoretinal Surgical Fellowship",
                "Founder — Surgical Program at North Cypress Surgical Center",
                "Sub-Investigator — 28 Active U.S. Clinical Trials",
                "Former Clinical Assistant Professor — UTMB",
                "Chief Resident — St. John's Episcopal Hospital",
                "Percy Dutton Lifetime Achievement Prize",
              ].map((award) => (
                <li key={award} className="flex items-start gap-2 text-primary-foreground/85 text-sm font-body">
                  <Star className="w-4 h-4 text-gold-light mt-0.5 flex-shrink-0" />
                  {award}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground py-3 rounded-lg font-body font-semibold text-center block transition-colors"
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
      <span className="text-primary-foreground/50 text-xs font-body uppercase tracking-wider">Scroll</span>
      <ChevronDown className="w-5 h-5 text-primary-foreground/50" />
    </div>
  </section>
);

export default HeroSection;
