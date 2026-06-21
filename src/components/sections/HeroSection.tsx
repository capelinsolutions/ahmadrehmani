import { Phone, Star, ChevronDown, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import clinicHero from "@/assets/dr-rehmani-exam.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative w-full overflow-hidden bg-background flex items-center justify-center py-20 lg:py-28"
    style={{ minHeight: "92vh" }}
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={clinicHero}
        alt="North Houston Retina clinic"
        className="w-full h-full object-cover object-center opacity-85"
      />
      {/* Radial overlay: clearer background image at the edges, solid white at the center for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-background/90 md:from-background/85 md:via-background/30 md:to-background/85" />
      <div className="absolute inset-0 bg-background/35" />
    </div>

    {/* Ambient background glows */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none z-0"
      style={{ background: "hsl(210 90% 48% / 0.12)" }}
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-24 -mb-24 pointer-events-none z-0"
      style={{ background: "hsl(200 95% 55% / 0.10)" }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, hsl(215 50% 25% / 0.5) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-6 md:px-10 relative z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8 animate-fade-in">
        <h1
          className="font-display text-foreground leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(44px, 6vw, 78px)" }}
        >
          Houston's Medical &amp;{" "}
          <span className="text-accent italic font-medium">Surgical</span>{" "}
          Vitreo-Retinal Specialist
        </h1>

        <p className="text-lg md:text-xl font-body leading-relaxed max-w-2xl text-muted-foreground">
          Dr. Ahmad Rehmani, D.O. delivers elite, fellowship-trained care for complex
          retinal and ocular conditions at{" "}
          <span className="text-foreground font-medium">North Houston Retina</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
          <a
            href="tel:+13465870223"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light transition-all text-accent-foreground font-body font-bold rounded-lg shadow-lg shadow-accent/30 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Call (346) 587-0223
          </a>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-background/80 hover:bg-secondary border border-border backdrop-blur-sm transition-all text-foreground font-body font-semibold rounded-lg w-full sm:w-auto"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-10">
      <span className="text-muted-foreground text-[10px] font-body uppercase tracking-[0.25em]">
        Scroll
      </span>
      <ChevronDown className="w-5 h-5 text-muted-foreground" />
    </div>
  </section>
);

export default HeroSection;
