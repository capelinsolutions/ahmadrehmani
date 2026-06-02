import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";

type Props = { compact?: boolean };

const ServicesSection = ({ compact = false }: Props) => {
  const ref = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="bg-gradient-soft py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header — centered, calmer */}
        <div className="text-center max-w-2xl mx-auto mb-14 fade-up">
          <span className="font-body text-xs text-accent font-semibold uppercase tracking-[0.2em]">
            Expert Retinal Care
          </span>
          <h2 className="font-display text-foreground text-3xl lg:text-5xl font-bold mt-4 leading-[1.1]">
            {compact ? "Specialized Retinal Services" : "Conditions & Treatments"}
          </h2>
          <p className="font-body text-gray-600 mt-5 leading-relaxed text-base lg:text-lg">
            {compact
              ? "Advanced medical and surgical care for the retina, vitreous, and macula — all in one Cypress location."
              : "Fellowship-trained vitreoretinal specialty care covering the full spectrum of retinal disease — from in-office injections to advanced microsurgery."}
          </p>
        </div>

        {/* Service Cards Grid — calmer, larger images, more whitespace */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/services/${cat.slug}`}
              className="group block fade-up"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <article className="bg-background rounded-2xl overflow-hidden border border-border/60 shadow-[0_2px_20px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] hover:-translate-y-1 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Body — clean, minimal */}
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-foreground leading-snug">
                    {cat.name}
                  </h3>
                  <p className="font-body text-[15px] text-gray-600 mt-3 leading-relaxed line-clamp-2">
                    {cat.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-body font-semibold text-accent group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {!compact && (
          <div className="mt-14 text-center fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold transition-colors"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
