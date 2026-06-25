import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertCircle, ArrowRight, Phone, ChevronRight, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import { getServiceBySlug, serviceCategories } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MacularDiseasesIcon,
  DiabeticIcon,
  DetachmentIcon,
  MacularDegenerationIcon,
  SurgicalIcon,
  DislocatedLensIcon,
} from "@/components/ServiceIcons";

const iconBySlug: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "macular-diseases": MacularDiseasesIcon,
  "diabetic-eye-disease": DiabeticIcon,
  "retinal-detachment-tears": DetachmentIcon,
  "retinal-vascular-disease": MacularDegenerationIcon,
  "vitreous-surgical-conditions": SurgicalIcon,
  "inflammatory-other": DislocatedLensIcon,
};

const customRouteBySubServiceName: Record<string, string> = {
  "Wet Age-Related Macular Degeneration (AMD)": "/services/macular-degeneration",
  "Dry Age-Related Macular Degeneration (AMD)": "/services/macular-degeneration",
  "Macular Hole": "/services/macular-hole",
  "Macular Pucker (Epiretinal Membrane)": "/services/macular-pucker",
  "Central Serous Retinopathy": "/services/central-serous-retinopathy",
  "Cystoid Macular Edema": "/services/cystoid-macular-edema",
  "Vitreomacular Traction Syndrome": "/services/vitreomacular-traction"
};

const ServiceDetailPage = () => {
  const { slug = "" } = useParams();
  const service = getServiceBySlug(slug);
  const ref = useScrollAnimation();

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = serviceCategories.filter((s) => s.slug !== service.slug);
  const Icon = iconBySlug[service.slug] ?? MacularDiseasesIcon;

  return (
    <PageShell>
      <Helmet>
        <title>{`${service.name} — Cypress, TX | North Houston Retina`}</title>
        <meta name="description" content={service.shortDescription.slice(0, 155)} />
        <link rel="canonical" href={`https://ahmadrehmani.lovable.app/services/${service.slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
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

              {/* Conditions list — right under CTA */}
              <div className="pt-6">
                <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider mb-3">Conditions We Treat</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {service.subServices.map((sub) => {
                    const customRoute = customRouteBySubServiceName[sub.name];
                    return (
                      <li key={sub.name} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                        {customRoute ? (
                          <Link to={customRoute} className="font-body text-accent hover:text-accent-light hover:underline text-sm leading-snug font-semibold transition-colors">
                            {sub.name}
                          </Link>
                        ) : (
                          <span className="font-body text-foreground/90 text-sm leading-snug">{sub.name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-2xl bg-accent-pale/40 border border-accent/20 flex items-center justify-center text-primary p-6 shadow-lg">
                <Icon className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About + Symptoms */}
      <section ref={ref} className="bg-background py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 fade-up">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">About {service.name}</h2>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">{service.longDescription}</p>
            </div>

            <div className="bg-background border-2 border-accent/20 rounded-2xl p-6 lg:p-7 shadow-sm h-fit">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Watch For</p>
                  <h3 className="font-display text-xl font-bold text-foreground">Symptoms</h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {service.symptoms.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 text-xs font-display font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="font-body text-foreground/85 text-sm leading-relaxed pt-0.5">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center text-foreground">
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Concerned about {service.name.toLowerCase()}?</h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">Same-day evaluation available for urgent retinal symptoms. Call our Cypress office or request a consultation online.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold">
              <Phone className="w-4 h-4" />
              Call (346) 587-0223
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-background hover:bg-secondary text-foreground px-6 py-3 rounded-lg font-body font-semibold border border-border">
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
