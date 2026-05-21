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
            <article
              key={cat.slug}
              className="group bg-background rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display text-lg font-semibold text-white leading-tight drop-shadow-lg">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="font-body text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {cat.shortDescription}
                </p>

                {/* Key conditions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.subServices.slice(1, 5).map((sub) => (
                    <span
                      key={sub.name}
                      className="inline-flex items-center gap-1 text-[11px] font-body font-medium text-accent bg-accent-pale px-2.5 py-1 rounded-full"
                    >
                      <Stethoscope className="w-3 h-3" />
                      {sub.name.split("(").shift()?.trim()}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-border">
                  <Link
                    to={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-2 w-full justify-center bg-gradient-primary text-white font-body font-semibold text-sm px-5 py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                  >
                    Explore {cat.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
