import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Activity } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import drNpdr from "@/assets/services/diabetic-retinopathy-fundus-npdr.jpg";
import drAdvanced from "@/assets/services/diabetic-retinopathy-advanced.jpg";
import avastin from "@/assets/services/meds/avastin.png";
import lucentis from "@/assets/services/meds/lucentis.png";
import eylea from "@/assets/services/meds/eylea.png";
import eyleaHd from "@/assets/services/meds/eylea-hd.png";
import vabysmo from "@/assets/services/meds/vabysmo.png";
import pavblu from "@/assets/services/meds/pavblu.png";
import ozurdex from "@/assets/services/meds/ozurdex.png";
import iluvien from "@/assets/services/meds/iluvien.png";

const injectionMeds = [
  { name: "Avastin", logo: avastin },
  { name: "Lucentis", logo: lucentis },
  { name: "Eylea", logo: eylea },
  { name: "Eylea HD", logo: eyleaHd },
  { name: "Vabysmo", logo: vabysmo },
  { name: "Pavblu", logo: pavblu },
  { name: "Ozurdex", logo: ozurdex },
  { name: "Iluvien", logo: iluvien },
];

const DiabeticRetinopathyPage = () => {
  const ref = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Diabetic Retinopathy & Diabetic Macular Edema | North Houston Retina</title>
        <meta name="description" content="State-of-the-art diabetic eye care in Cypress, TX — anti-VEGF and steroid injections, laser therapy, and 27-gauge vitrectomy surgery by Dr. Ahmad Rehmani." />
        <link rel="canonical" href="https://nhretina.com/services/diabetic-retinopathy" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Conditions & Treatments</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">
              Diabetic Retinopathy & Diabetic Macular Edema
            </h1>
            <div className="flex flex-wrap gap-3 pt-6">
              <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold">
                <Phone className="w-4 h-4" />
                Call (346) 587-0223
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Condition + Images */}
      <section ref={ref} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div className="space-y-6">
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Diabetes can damage the delicate blood vessels of the retina, leading to leakage, swelling, abnormal blood vessel growth, and vision-threatening bleeding. Because diabetic eye disease often develops without early symptoms, regular dilated eye examinations and advanced OCT imaging are essential for early detection and preserving vision. <strong>Advanced ultra-widefield imaging and fluorescein angiography</strong> allow the earliest detection of even the smallest hemorrhages and early disease.
              </p>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                At North Houston Retina, Dr. Rehmani provides comprehensive, state-of-the-art diabetic eye care tailored to each patient's needs. Treatment options include <strong>anti-VEGF and steroid injections</strong>, <strong>focal and panretinal laser therapy</strong>, and <strong>advanced 27-gauge vitrectomy surgery</strong> for vitreous hemorrhage, tractional retinal detachment, and other complex diabetic retinal conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
                <img src={drNpdr} alt="Fundus photograph of diabetic retinopathy with dot-blot hemorrhages and hard exudates" loading="lazy" width={1024} height={1024} className="w-full h-56 lg:h-64 object-cover" />
                <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">Fundus photo — diabetic retinopathy</figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
                <img src={drAdvanced} alt="Fundus photograph of advanced proliferative diabetic retinopathy with tractional retinal detachment" loading="lazy" width={1024} height={1024} className="w-full h-56 lg:h-64 object-cover" />
                <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">Fundus photo — advanced diabetic retinopathy</figcaption>
              </figure>
            </div>
          </div>

          {/* Injections marquee */}
          <div className="mt-14">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Activity className="w-4 h-4 text-accent" />
              <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider text-center">Injection Therapies We Offer</p>
            </div>
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex animate-marquee space-x-10 items-center min-w-full shrink-0" aria-hidden={dup === 1}>
                  {injectionMeds.map((med) => (
                    <div
                      key={`${dup}-${med.name}`}
                      className="flex-shrink-0 w-44 h-24 flex items-center justify-center bg-background rounded-xl shadow-sm border border-border px-5 transition-shadow hover:shadow-md"
                      title={med.name}
                    >
                      <img
                        src={med.logo}
                        alt={`${med.name} logo`}
                        loading="lazy"
                        className="max-h-14 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Living with diabetes? Protect your vision.</h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Early detection saves sight. Schedule a comprehensive dilated exam and OCT imaging with Dr. Rehmani.
          </p>
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
    </PageShell>
  );
};

export default DiabeticRetinopathyPage;
