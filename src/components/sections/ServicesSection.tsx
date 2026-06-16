import SectionCTA from "@/components/SectionCTA";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";

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
              Conditions & Treatments Offered in Cypress, TX
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
          {serviceCategories.map((cat, i) => (
            <Link
              to={`/services/${cat.slug}`}
              key={cat.slug}
              className="group relative flex flex-col bg-background rounded-3xl border-2 border-border/60 overflow-hidden hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-3 hover:border-accent/50 transition-all duration-500 fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                

                {/* Category title on image */}
                <h3 className="absolute bottom-5 left-6 right-6 font-display text-2xl lg:text-[1.65rem] font-bold text-white leading-tight drop-shadow-2xl">
                  {cat.name}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7">
                {/* Condition chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.subServices.slice(0, 3).map((sub) => (
                    <span
                      key={sub.name}
                      className="text-xs font-body font-semibold text-accent bg-accent-pale px-3 py-1.5 rounded-full border border-accent/10"
                    >
                      {sub.name.split("(").shift()?.trim()}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex items-center justify-between pt-5 border-t-2 border-border/40">
                  <span className="font-body font-bold text-sm text-foreground group-hover:text-accent transition-colors duration-300">
                    Learn More
                  </span>
                  <span className="w-11 h-11 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:translate-x-1.5 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>
        <SectionCTA to="/services" label="Explore All Services" />
      </div>
    </section>
  );
};

export default ServicesSection;
