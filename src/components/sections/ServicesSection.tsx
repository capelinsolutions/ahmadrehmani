import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceCategories } from "@/data/services";

const ServicesSection = () => {
  const ref = useScrollAnimation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="services" ref={ref} className="bg-gradient-soft py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 fade-up">
          <div className="max-w-2xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Expert Retinal Care</span>
            <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              Conditions & Treatments Offered in Cypress, TX
            </h2>
            <p className="font-body text-gray-600 mt-4 leading-relaxed">
              As a fellowship-trained vitreoretinal specialist, Dr. Rehmani offers the most advanced medical and surgical treatments for diseases of the retina, vitreous, and macula — all in one Cypress location. Browse by category below.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-background border border-border rounded-xl shadow-sm overflow-hidden divide-y divide-border">
          {serviceCategories.map((cat, i) => {
            const open = openIdx === i;
            return (
              <div key={cat.slug}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-accent-pale transition-colors text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-lg font-semibold text-foreground">{cat.name}</span>
                  <ChevronDown className={`w-5 h-5 text-accent transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="px-6 pb-5 pt-1 space-y-4">
                    <p className="font-body text-sm text-gray-600 leading-relaxed">{cat.shortDescription}</p>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {cat.subServices.map((c) => (
                        <div key={c.name} className="flex items-start gap-2 py-1">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="font-body text-sm text-foreground/85">{c.name}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/services/${cat.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:text-accent-light"
                    >
                      Learn more about {cat.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

