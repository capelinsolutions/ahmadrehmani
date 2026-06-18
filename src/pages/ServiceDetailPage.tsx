import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertCircle, Stethoscope, ArrowRight, Phone, ChevronRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import { getServiceBySlug, serviceCategories } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServiceDetailPage = () => {
  const { slug = "" } = useParams();
  const service = getServiceBySlug(slug);
  const ref = useScrollAnimation();

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = serviceCategories.filter((s) => s.slug !== service.slug);

  return (
    <PageShell>
      <Helmet>
        <title>{`${service.name} — Cypress, TX | North Houston Retina`}</title>
        <meta name="description" content={service.shortDescription.slice(0, 155)} />
        <link rel="canonical" href={`https://ahmadrehmani.lovable.app/services/${service.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-20 text-foreground">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Conditions & Treatments</span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">{service.name}</h1>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">{service.shortDescription}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold">
                  <Phone className="w-4 h-4" />
                  Call (346) 587-0223
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium">
                  Request Consultation
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img src={service.image} alt={`${service.name} — medical illustration`} width={1280} height={720} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section ref={ref} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl fade-up">
          <h2 className="font-display text-3xl font-bold text-foreground mb-5">About {service.name}</h2>
          <p className="font-body text-gray-700 leading-[1.8] text-lg">{service.longDescription}</p>
        </div>
      </section>

      {/* Symptoms & Treatments infographic */}
      <section className="bg-gradient-soft py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-up">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">At a Glance</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3">Symptoms & Treatment Options</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Symptoms */}
            <div className="bg-background border-2 border-accent/20 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Watch For</p>
                  <h3 className="font-display text-2xl font-bold text-foreground">Symptoms</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {service.symptoms.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-red-50 text-red-500 text-xs font-display font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="font-body text-foreground/85 leading-relaxed pt-0.5">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div className="bg-gradient-card border border-border rounded-2xl p-8 text-foreground shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">How We Treat</p>
                  <h3 className="font-display text-2xl font-bold">Treatment Options</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {service.treatments.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-accent mt-2.5" />
                    <span className="font-body text-foreground/90 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-up max-w-3xl mx-auto">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Conditions Covered</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3">Specific Conditions We Treat</h2>
            <p className="font-body text-gray-600 mt-3">Each condition under {service.name} is diagnosed with precision imaging and treated with a tailored plan.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.subServices.map((sub, i) => (
              <article key={sub.name} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all">
                <div className="relative h-44 overflow-hidden bg-gradient-card">
                  <img src={service.image} alt={`${sub.name} illustration`} loading="lazy" width={1280} height={720} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-gold-light/95 text-primary text-[10px] font-body font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">#{(i + 1).toString().padStart(2, "0")}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">{sub.name}</h3>
                  <p className="font-body text-sm text-gray-600 mt-2 leading-relaxed">{sub.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary py-14">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Concerned about {service.name.toLowerCase()}?</h2>
          <p className="font-body text-primary-foreground/80 mt-3 max-w-2xl mx-auto">Same-day evaluation available for urgent retinal symptoms. Call our Cypress office or request a consultation online.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold">
              <Phone className="w-4 h-4" />
              Call (346) 587-0223
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold border border-white/25">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-gradient-soft py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">Explore Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-accent/40 transition-all">
                <div className="h-24 overflow-hidden">
                  <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3">
                  <p className="font-display text-sm font-semibold text-foreground leading-tight">{s.name}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-body mt-1.5">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServiceDetailPage;
