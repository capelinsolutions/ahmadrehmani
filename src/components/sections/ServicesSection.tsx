import SectionCTA from "@/components/SectionCTA";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="bg-gradient-soft py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 fade-up">
          <div className="max-w-2xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Expert Retinal Care
            </span>
            <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              Conditions & Treatments Offered in Cypress, TX
            </h2>
            <p className="font-body text-gray-600 mt-4 leading-relaxed">
              As a fellowship-trained vitreoretinal specialist, Dr. Rehmani offers the most advanced medical and surgical treatments for diseases of the retina, vitreous, and macula — all in one Cypress location.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((cat, i) => (
            <Link
              to={`/services/${cat.slug}`}
              key={cat.slug}
              className="group relative flex flex-col bg-background rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-accent text-[11px] font-body font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    <Stethoscope className="w-3 h-3" />
                    {cat.subServices.length} Treatments
                  </span>
                </div>
                <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-bold text-white leading-tight drop-shadow-xl">
                  {cat.name}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.subServices.slice(1, 4).map((sub) => (
                    <span
                      key={sub.name}
                      className="text-[11px] font-body font-medium text-accent bg-accent-pale px-2.5 py-1 rounded-full"
                    >
                      {sub.name.split("(").shift()?.trim()}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-body font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                    Learn More
                  </span>
                  <span className="w-10 h-10 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <SectionCTA to="/services" label="Explore All Services" />
      </div>
    </section>
  );
};

export default ServicesSection;
