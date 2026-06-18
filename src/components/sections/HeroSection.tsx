import { Phone, Star, ChevronDown, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import clinicHero from "@/assets/dr-rehmani-exam.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative w-full overflow-hidden bg-gradient-soft"
    style={{ minHeight: "92vh" }}
  >
    {/* Ambient background glows */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"
      style={{ background: "hsl(210 90% 48% / 0.12)" }}
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-24 -mb-24 pointer-events-none"
      style={{ background: "hsl(200 95% 55% / 0.10)" }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, hsl(215 50% 25% / 0.5) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-6 md:px-10 py-20 lg:py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Content */}
        <div className="lg:col-span-6 flex flex-col space-y-8 animate-fade-in">

          <h1
            className="font-display text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(44px, 6vw, 78px)" }}
          >
            Houston's Medical &amp;{" "}
            <span className="text-accent italic font-medium">Surgical</span>{" "}
            Vitreo-Retinal Specialist
          </h1>

          <p className="text-lg md:text-xl font-body leading-relaxed max-w-xl text-muted-foreground">
            Dr. Ahmad Rehmani, D.O. delivers elite, fellowship-trained care for complex
            retinal and ocular conditions at{" "}
            <span className="text-foreground font-medium">North Houston Retina</span>.
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
              className="inline-flex items-center px-8 py-4 bg-background hover:bg-secondary border border-border transition-all text-foreground font-body font-semibold rounded-lg"
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
            style={{ background: "hsl(210 90% 48% / 0.18)" }}
            aria-hidden="true"
          />

          <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl">
            {/* Accent top line */}
            <div
              className="absolute top-0 left-0 w-full h-px opacity-70 z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)",
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
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
      <span className="text-muted-foreground text-[10px] font-body uppercase tracking-[0.25em]">
        Scroll
      </span>
      <ChevronDown className="w-5 h-5 text-muted-foreground" />
    </div>
  </section>
);

export default HeroSection;
