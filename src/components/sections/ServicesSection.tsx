import { Eye, Paintbrush, Heart, Sun, Zap, ClipboardList, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const icons = [Eye, Paintbrush, Heart, Sun, Zap, ClipboardList];

const services = [
  {
    name: "Macular Degeneration (AMD) Treatment",
    badge: "Core Specialty",
    tags: ["Wet AMD", "Dry AMD", "Anti-VEGF Injections"],
    description: "Age-related macular degeneration is a leading cause of vision loss in adults over 50. Dr. Rehmani specializes in anti-VEGF injection therapy (Eylea, Vabysmo, Lucentis, Avastin) to preserve and restore central vision in wet AMD, and monitors dry AMD with advanced OCT retinal imaging.",
    cta: "Learn About AMD Treatment",
  },
  {
    name: "Diabetic Retinopathy Treatment",
    badge: "High Volume",
    tags: ["Anti-VEGF Injections", "Laser Treatment", "Annual Monitoring"],
    description: "Diabetes is the leading cause of blindness in working-age adults. Dr. Rehmani uses anti-VEGF injections, retinal laser therapy, and surgical vitrectomy to halt progression and preserve vision. Every patient with diabetes needs an annual dilated retinal exam.",
    cta: "Learn About Diabetic Eye Disease",
  },
  {
    name: "Retinal Detachment & Vitreoretinal Surgery",
    badge: "Surgical",
    tags: ["Vitrectomy", "Scleral Buckle", "Pneumatic Retinopexy"],
    description: "Retinal detachment is a true medical emergency. As a UTMB fellowship-trained vitreoretinal surgeon, Dr. Rehmani performs the full range of retinal surgery — including pars plana vitrectomy, scleral buckle, and pneumatic retinopexy. Same-day evaluation available.",
    cta: "Learn About Retinal Surgery",
  },
  {
    name: "Floaters, Flashes & Vitreous Hemorrhage",
    tags: ["PVD Evaluation", "Retinal Tear Repair", "Laser Retinopexy"],
    description: "A sudden increase in floaters or flashes of light may signal a posterior vitreous detachment (PVD), retinal tear, or vitreous hemorrhage — all require urgent evaluation by a retina specialist to prevent retinal detachment.",
    cta: "Learn About Floaters & Flashes",
  },
  {
    name: "Comprehensive Retinal Imaging & Second Opinions",
    tags: ["OCT Imaging", "Fundus Photography", "Specialist Second Opinion"],
    description: "Dr. Rehmani uses the latest OCT (Optical Coherence Tomography) and widefield retinal imaging to detect vision-threatening conditions before symptoms appear. Specialist second opinions welcomed — bring any prior imaging or reports.",
    cta: "Schedule an Evaluation",
  },
  {
    name: "Clinical Trial Access",
    badge: "Research",
    tags: ["28 Active Trials", "Cutting-Edge Therapies", "Sub-Investigator"],
    description: "Through Dr. Rehmani's role as sub-investigator on 28 active U.S. clinical trials in retinal disease, qualifying patients may gain early access to next-generation therapies for AMD and diabetic macular edema — including longer-acting injectables and gene-therapy approaches.",
    cta: "Ask About Trial Eligibility",
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
              Comprehensive Retina & Vitreous Services in Cypress, TX
            </h2>
            <p className="font-body text-gray-600 mt-4 leading-relaxed">
              As a fellowship-trained vitreoretinal specialist, Dr. Rehmani offers the most advanced non-surgical and surgical treatments for diseases of the retina, vitreous, and macula — all in one Cypress location.
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
