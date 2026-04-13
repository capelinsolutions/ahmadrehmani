import { Eye, Paintbrush, Heart, Sun, Zap, ClipboardList, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const icons = [Eye, Paintbrush, Heart, Sun, Zap, ClipboardList];

const services = [
  {
    name: "Retinal Disease & Vitreoretinal Surgery",
    badge: "Core Specialty",
    tags: ["Retinal Detachment", "Vitrectomy", "Retinal Tears"],
    description: "Dr. Rehmani's primary subspecialty. He treats a full range of complex retinal conditions using the latest surgical and laser techniques, including vitrectomy, scleral buckle, and pneumatic retinopexy for retinal detachments. Retinal detachment is a medical emergency — same-day evaluation available.",
    cta: "Learn About Retinal Surgery",
  },
  {
    name: "Macular Degeneration (AMD) Treatment",
    badge: "High Volume",
    tags: ["Wet AMD", "Dry AMD", "Anti-VEGF Injections"],
    description: "Age-related macular degeneration (AMD) is a leading cause of vision loss in adults over 50. Dr. Rehmani specializes in anti-VEGF injection therapy (Eylea, Lucentis, Avastin) to preserve central vision in wet AMD, and monitors dry AMD with advanced retinal imaging. Medicare covered.",
    cta: "Learn About AMD Treatment",
  },
  {
    name: "Diabetic Retinopathy Treatment",
    tags: ["Laser Treatment", "Injections", "Annual Monitoring"],
    description: "Diabetes is the leading cause of blindness in working-age adults. Dr. Rehmani uses retinal laser therapy, anti-VEGF injections, and surgical vitrectomy to halt progression and preserve vision.",
    cta: "Learn About Diabetic Eye Disease",
  },
  {
    name: "Cataract Surgery & Advanced Lens Implants",
    tags: ["Phacoemulsification", "Premium IOLs", "Medicare Covered"],
    description: "Modern cataract surgery with premium intraocular lens (IOL) options. Safe, outpatient procedure taking under 30 minutes — with most patients noticing improved vision the next day.",
    cta: "Learn About Cataract Surgery",
  },
  {
    name: "Glaucoma Diagnosis & Management",
    tags: ["Pressure Control", "Visual Field Testing", "MIGS"],
    description: "Comprehensive glaucoma evaluation including optic nerve imaging, visual field testing, and treatment through eye drops, laser therapy, or minimally invasive glaucoma surgery (MIGS).",
    cta: "Learn About Glaucoma Care",
  },
  {
    name: "Comprehensive Eye Exams & Second Opinions",
    tags: ["Dilated Exam", "Retinal Imaging", "Second Opinion"],
    description: "A comprehensive dilated eye exam is the most effective tool for detecting vision-threatening conditions before symptoms appear. Dr. Rehmani also offers specialist second opinions.",
    cta: "Schedule an Exam",
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="services" ref={ref} className="bg-off-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 fade-up">
          <div className="max-w-2xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Expert Retinal Care</span>
            <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              Comprehensive Eye & Retina Services in NJ and Texas
            </h2>
            <p className="font-body text-gray-600 mt-4 leading-relaxed">
              As a dedicated vitreoretinal specialist, Dr. Rehmani offers the most advanced non-surgical and surgical treatments for diseases of the retina, vitreous, and lens.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            Book Consultation
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <div
                key={s.name}
                className="fade-up group bg-background border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-pale group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    {s.badge && (
                      <span className="bg-accent text-accent-foreground text-[11px] font-body font-semibold px-3 py-1 rounded-full">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {s.tags.map((tag) => (
                      <span key={tag} className="bg-gray-50 text-muted-foreground text-xs font-body px-2.5 py-1 rounded-full border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-accent font-body text-sm font-semibold group-hover:gap-2 transition-all">
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
