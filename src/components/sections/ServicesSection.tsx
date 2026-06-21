import SectionCTA from "@/components/SectionCTA";
import {
  ArrowRight,
  Eye,
  Droplets,
  AlertTriangle,
  HeartPulse,
  Microscope,
  ShieldAlert,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";

const serviceIcons: Record<string, LucideIcon> = {
  "macular-diseases": Eye,
  "diabetic-eye-disease": Droplets,
  "retinal-detachment-tears": AlertTriangle,
  "retinal-vascular-disease": HeartPulse,
  "vitreous-surgical-conditions": Microscope,
  "inflammatory-other": ShieldAlert,
};

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="bg-gradient-soft py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 fade-up">
          <div className="max-w-2xl">
            <span className="inline-block font-body text-sm text-accent font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-accent-pale rounded-full border border-accent/15">
              Expert Retinal Care
            </span>
            <h2 className="font-display text-foreground text-3xl lg:text-5xl font-bold mt-4 leading-tight">
              Conditions & Treatments&nbsp;
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 rounded-xl font-body font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center"
          >
            Book Consultation
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {serviceCategories.map((cat, i) => {
            const Icon = serviceIcons[cat.slug] ?? Stethoscope;
            return (
              <Link
                to={`/services/${cat.slug}`}
                key={cat.slug}
                className="group relative flex flex-col bg-background rounded-3xl border-2 border-border/60 overflow-hidden hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-3 hover:border-accent/50 transition-all duration-500 fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon header */}
                <div className="relative px-7 pt-8 pb-6 bg-gradient-to-br from-accent-pale/60 via-background to-background border-b border-border/40">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl lg:text-[1.65rem] font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {cat.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between pt-5 border-t-2 border-border/40">
                    <span className="font-body font-bold text-sm text-foreground group-hover:text-accent transition-colors duration-300">
                      Learn More
                    </span>
                    <span className="w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:translate-x-1.5 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            );
          })}
        </div>
        <SectionCTA to="/services" label="Explore All Services" />
      </div>
    </section>
  );
};

export default ServicesSection;

