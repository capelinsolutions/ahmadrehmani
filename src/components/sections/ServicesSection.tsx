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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((cat, i) => {
            const Icon = serviceIcons[cat.slug] ?? Stethoscope;
            return (
              <Link
                to={`/services/${cat.slug}`}
                key={cat.slug}
                className="group relative flex flex-col bg-background p-6 rounded-2xl border border-border/80 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 hover:border-accent/40 transition-all duration-300 fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Content */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground leading-snug group-hover:text-accent transition-colors pt-1">
                    {cat.name}
                  </h3>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-1 mb-4 pl-16">
                  {cat.shortDescription}
                </p>

                {/* Learn More link */}
                <div className="mt-auto pl-16 flex items-center gap-1.5 text-xs font-bold text-accent/80 group-hover:text-accent transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
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

