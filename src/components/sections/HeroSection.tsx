import { Phone, Star, ShieldCheck, MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #0B1F4B 0%, #132A60 50%, #0C2855 100%)",
      minHeight: "88vh",
    }}
  >
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(170 78% 27%), transparent)" }} />
      <div className="absolute top-[-100px] right-[5%] w-[300px] h-[300px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(37 56% 50%), transparent)" }} />
    </div>

    <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-pill px-4 py-1.5">
            <Star className="w-4 h-4 text-gold-light fill-gold-light" />
            <span className="text-gold-light text-sm font-body font-medium">U.S. News Patients' Top Choice · 5.0 Google Rating</span>
          </div>

          <h1 className="font-display text-primary-foreground leading-[1.15]" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
            Wayne NJ's Most Trusted{" "}
            <span className="text-gold-light">Retina Specialist</span>{" "}
            Now Serving Cypress, TX
          </h1>

          <p className="text-primary-foreground/75 text-lg font-body leading-relaxed max-w-xl">
            Board-certified vitreoretinal specialist Dr. Ahmad Rehmani offers expert care for macular degeneration, diabetic retinopathy, retinal detachment, and cataract surgery. Medicare and major insurance accepted.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+19739873380"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (973) 987-3380
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-white/10 px-6 py-3 rounded-lg font-body font-medium text-base transition-colors"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { icon: Star, value: "5.0 / 5.0", label: "155+ Google Reviews", bg: "bg-gold/20" },
              { icon: ShieldCheck, value: "Board Certified", label: "Vitreoretinal Specialist", bg: "bg-accent/20" },
              { icon: MapPin, value: "2 Locations", label: "Wayne NJ · Cypress TX", bg: "bg-gold/20" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                  <item.icon className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-body font-semibold">{item.value}</p>
                  <p className="text-primary-foreground/50 text-xs font-body">{item.label}</p>
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
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div>
              <p className="text-primary-foreground/60 text-sm font-body uppercase tracking-wider">Patient Recognition</p>
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
                <p className="text-primary-foreground/60 text-sm font-body mt-1">155+ Google Reviews</p>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "U.S. News Patients' Top Choice Award",
                "U.S. News Patients Recommend Award",
                "Percy Dutton Prize — University of Rochester",
                "Magna Cum Laude Graduate",
              ].map((award) => (
                <li key={award} className="flex items-start gap-2 text-primary-foreground/80 text-sm font-body">
                  <Star className="w-4 h-4 text-gold-light mt-0.5 flex-shrink-0" />
                  {award}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground py-3 rounded-lg font-body font-semibold text-center block transition-colors"
              >
                Request a Call Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
      <span className="text-primary-foreground/40 text-xs font-body uppercase tracking-wider">Scroll</span>
      <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
    </div>
  </section>
);

export default HeroSection;
