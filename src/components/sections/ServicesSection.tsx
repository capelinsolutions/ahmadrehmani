import SectionCTA from "@/components/SectionCTA";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import macularDiseasesIcon from "@/assets/services-icons/macular_diseases.svg";
import diabeticIcon from "@/assets/services-icons/diabetic_eye_disease.svg";
import detachmentIcon from "@/assets/services-icons/retinal_detachment_tears.svg";
import macularDegenerationIcon from "@/assets/services-icons/macular_degeneration.svg";
import surgicalIcon from "@/assets/services-icons/surgical_vitreoretinal.svg";
import dislocatedLensIcon from "@/assets/services-icons/dislocated_lens_dense_cataract.svg";

const services = [
  {
    name: "Macular Diseases",
    description: "Conditions affecting the macula, the central retina responsible for sharp, detailed vision.",
    icon: macularDiseasesIcon,
    slug: "macular-diseases",
  },
  {
    name: "Diabetic Eye Disease",
    description: "Retinal damage from diabetes, including leaking vessels, swelling, and bleeding.",
    icon: diabeticIcon,
    slug: "diabetic-eye-disease",
  },
  {
    name: "Retinal Detachment & Tears",
    description: "The retina lifts or tears away from the back of the eye, a vision-threatening emergency.",
    icon: detachmentIcon,
    slug: "retinal-detachment-tears",
  },
  {
    name: "Macular Degeneration",
    description: "Age-related breakdown of the macula causing loss of central vision over time.",
    icon: macularDegenerationIcon,
    slug: "macular-diseases",
  },
  {
    name: "Surgical Vitreo-Retinal Conditions",
    description: "Advanced microsurgery for the vitreous and retina to repair complex eye problems.",
    icon: surgicalIcon,
    slug: "vitreous-surgical-conditions",
  },
  {
    name: "Dislocated Lenses & Dense Cataract",
    description: "Displaced or severely clouded lenses requiring specialized retinal surgical care.",
    icon: dislocatedLensIcon,
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
              className="group relative flex flex-col bg-background p-6 rounded-2xl border border-border/80 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 hover:border-accent/40 transition-all duration-300 fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                  <img src={svc.icon} alt="" className="w-9 h-9" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground leading-snug group-hover:text-accent transition-colors pt-1">
                  {svc.name}
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-1 mb-4 pl-[72px]">
                {svc.description}
              </p>

              <div className="mt-auto pl-[72px] flex items-center gap-1.5 text-xs font-bold text-accent/80 group-hover:text-accent transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
