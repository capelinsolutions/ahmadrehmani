import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Eye, Scissors, Sparkles, ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AntiVegfMarquee from "@/components/AntiVegfMarquee";
import vmtOct from "@/assets/services/vmt-oct.jpg";

const VitreomacularTractionPage = () => {
  const aboutRef = useScrollAnimation();
  const treatRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Vitreomacular Traction (VMT) | North Houston Retina</title>
        <meta
          name="description"
          content="Expert diagnosis and treatment of vitreomacular traction (VMT) in Cypress, TX — releasing pulling forces on the retina to restore sharp central vision."
        />
        <link rel="canonical" href="https://nhretina.com/services/vitreomacular-traction" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">
              Vitreomacular Traction (VMT)
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              Vitreomacular traction occurs when the vitreous gel in the back of the eye fails to separate fully from the retina, tugging on the macula. This mechanical pull can distort, blur, or create blind spots in your central vision.
            </p>
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

      {/* About */}
      <section ref={aboutRef} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5" /> The Condition
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            What is Vitreomacular Traction?
          </h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                As the eye ages, the gel-like vitreous humor naturally shrinks and detaches from the retina. However, if the vitreous remains abnormally adhered to the center of the macula, it causes a constant <strong>tugging of the central macula that can lead to distorted, blurred, or missing vision</strong>. Over time, this persistent traction can distort the retinal architecture or even trigger a macular hole.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img
                src={vmtOct}
                alt="OCT scan displaying vitreomacular traction pulling on the macular fovea"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
                OCT scan — vitreous gel pulling and lifting the central macula
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section ref={treatRef} className="bg-gradient-soft py-16 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Treatment Options
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Restoring the Retina
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Observation on the LEFT */}
            <div className="border border-border bg-background rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-blue-700 font-bold uppercase tracking-wider">Conservative Approach</p>
                    <p className="font-display text-xl lg:text-2xl font-bold text-foreground">Observation & Monitoring</p>
                  </div>
                </div>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  In mild cases where vision is barely affected, Dr. Rehmani may recommend conservative monitoring with regular high-definition OCT scans. Sometimes, the vitreous gel can release itself spontaneously, resolving the traction without the need for active treatment.
                </p>
              </div>
            </div>

            {/* Vitrectomy on the RIGHT with link */}
            <div className="bg-gradient-bright border-2 border-accent rounded-2xl p-6 lg:p-7 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-accent font-bold uppercase tracking-wider">Surgical Intervention</p>
                    <p className="font-display text-xl lg:text-2xl font-bold text-foreground">Vitrectomy Surgery</p>
                  </div>
                </div>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  If symptoms are progressive or severe enough to impair daily life, <strong>vitrectomy surgery is highly effective to release the traction</strong>. During this precise outpatient microsurgery, Dr. Rehmani carefully removes the vitreous gel pulling on the retina. Releasing the traction allows the macula to flatten, recover its natural structure, and gradually restore visual clarity.
                </p>
              </div>
              <Link
                to="/services/pars-plana-vitrectomy"
                className="mt-5 inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn about pars plana vitrectomy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Long-term follow-up */}
          <div className="mt-10 bg-background border-l-4 border-primary rounded-r-xl p-5 lg:p-6 shadow-sm max-w-3xl">
            <p className="font-display text-lg font-bold text-foreground mb-1">Long-Term Follow-Up</p>
            <p className="font-body text-gray-700 text-sm lg:text-base leading-relaxed">
              Regular monitoring with <strong>OCT, OCTA, and fluorescein angiography</strong> allows Dr. Rehmani to track the macula, catch complications early, and confirm sustained visual recovery.
            </p>
          </div>

          <AntiVegfMarquee />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Experiencing distorted or wavy vision?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            A state-of-the-art OCT scan can quickly detect vitreomacular traction. Protect your vision by scheduling an evaluation with Dr. Rehmani.
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

export default VitreomacularTractionPage;
