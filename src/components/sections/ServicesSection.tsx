import SectionCTA from "@/components/SectionCTA";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MacularDiseasesIcon,
  DiabeticIcon,
  DetachmentIcon,
  MacularDegenerationIcon,
  SurgicalIcon,
  DislocatedLensIcon,
} from "@/components/ServiceIcons";

const services = [
  {
    name: "Macular Diseases",
    description: "Conditions affecting the macula, the central retina responsible for sharp, detailed vision.",
    icon: MacularDiseasesIcon,
    slug: "macular-diseases",
  },
  {
    name: "Diabetic Eye Disease",
    description: "Retinal damage from diabetes, including leaking vessels, swelling, and bleeding.",
    icon: DiabeticIcon,
    slug: "diabetic-eye-disease",
  },
  {
    name: "Retinal Detachment & Tears",
    description: "The retina lifts or tears away from the back of the eye, a vision-threatening emergency.",
    icon: DetachmentIcon,
    slug: "retinal-detachment-tears",
  },
  {
    name: "Macular Degeneration",
    description: "Age-related breakdown of the macula causing loss of central vision over time.",
    icon: MacularDegenerationIcon,
    slug: "macular-diseases",
  },
  {
    name: "Surgical Vitreo-Retinal Conditions",
    description: "Advanced microsurgery for the vitreous and retina to repair complex eye problems.",
    icon: SurgicalIcon,
    slug: "vitreous-surgical-conditions",
  },
  {
    name: "Dislocated Lenses & Dense Cataract",
    description: "Displaced or severely clouded lenses requiring specialized retinal surgical care.",
    icon: DislocatedLensIcon,
    slug: "vitreous-surgical-conditions",
  },
];

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
          {services.map((svc, i) => (
            <Link
              to={`/services/${svc.slug}`}
              key={`${svc.slug}-${i}`}
              className="group relative flex flex-col items-center text-center bg-background px-8 py-10 rounded-2xl border border-border/60 hover:border-accent/40 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-36 h-36 mb-7 flex items-center justify-center bg-gradient-to-br from-accent-pale/80 via-white to-accent-pale/40 text-primary group-hover:text-accent rounded-full p-5 transition-all duration-500 shadow-md ring-4 ring-accent/10 border border-accent/10 group-hover:shadow-xl group-hover:ring-accent/30 group-hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <svc.icon className="w-28 h-28 transition-transform duration-500 relative z-10 group-hover:scale-110 drop-shadow-sm" />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground tracking-wide uppercase mb-3 group-hover:text-accent transition-colors">
                {svc.name}
              </h3>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 max-w-[26ch]">
                {svc.description}
              </p>

              <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent/90 group-hover:text-accent transition-colors duration-300">
                Learn More
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <SectionCTA to="/services" label="Explore All Services" />
      </div>
    </section>
  );
};

export default ServicesSection;
