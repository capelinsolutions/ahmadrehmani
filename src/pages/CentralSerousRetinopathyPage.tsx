import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Droplet, Zap, Sparkles, Eye } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cscrOct from "@/assets/services/cscr-oct.png.asset.json";

const CentralSerousRetinopathyPage = () => {
  const aboutRef = useScrollAnimation();
  const treatRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Central Serous Retinopathy (CSR/CSCR) | North Houston Retina</title>
        <meta
          name="description"
          content="Expert diagnosis and treatment of Central Serous Chorioretinopathy (CSCR) in Cypress, TX — including advanced micropulse laser therapy shown to reverse chronic CSR."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/central-serous-retinopathy" />
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
              Central Serous Retinopathy
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              Also known as CSR or CSCR — a condition that causes fluid to build up beneath the macula, blurring and distorting central vision. With early evaluation, vision can almost always be preserved.
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
              <Droplet className="w-3.5 h-3.5" /> The Condition
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            What is Central Serous Retinopathy?
          </h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Central Serous Retinopathy is most often linked to steroid exposure — either from prescribed medications (creams, inhalers, oral or injected steroids) or from elevated stress-related cortisol the body produces on its own. This triggers fluid to leak from the choroid and pool beneath the macula, the central part of the retina responsible for sharp vision. Patients typically notice a blurred, dim, or distorted spot in the center of their sight.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img
                src={cscrOct.url}
                alt="OCT scan showing subretinal fluid characteristic of central serous chorioretinopathy"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-64 lg:h-80 object-contain bg-black"
              />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
                OCT scan — dome of subretinal fluid under the macula in CSCR
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
              <Sparkles className="w-3.5 h-3.5" /> Advanced Treatment
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            How We Treat CSCR
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-background border-l-4 border-primary rounded-r-xl p-5 lg:p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-primary font-bold uppercase tracking-wider">First-Line Approach</p>
                  <p className="font-display text-lg lg:text-xl font-bold text-foreground">Observation & Monitoring</p>
                </div>
              </div>
              <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                Most cases of CSCR <strong>resolve spontaneously</strong> within a few months. Careful close observation with serial OCT imaging allows us to track fluid resorption and confirm visual recovery without unnecessary intervention.
              </p>
            </div>

            <div className="bg-gradient-bright border-2 border-accent rounded-2xl p-6 lg:p-7 shadow-md">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-accent font-bold uppercase tracking-wider">Newest Therapy</p>
                  <p className="font-display text-xl lg:text-2xl font-bold text-foreground">Micropulse Laser</p>
                </div>
              </div>
              <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                For chronic or non-resolving cases, we offer <strong>micropulse laser therapy</strong> — a gentle, tissue-sparing treatment shown to <strong>reverse chronic CSR</strong> without thermal damage to the retina. Most patients return to normal activity the same day.
              </p>
            </div>

            <div className="bg-background border-l-4 border-primary rounded-r-xl p-5 lg:p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-primary font-bold uppercase tracking-wider">Select Cases</p>
                  <p className="font-display text-lg lg:text-xl font-bold text-foreground">Anti-VEGF Injections</p>
                </div>
              </div>
              <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                When CSCR is complicated by abnormal new vessel growth, <strong>intravitreal anti-VEGF injections</strong> are used to stop leakage and protect central vision.
              </p>
            </div>
          </div>

          <p className="font-body text-sm text-muted-foreground mt-8 max-w-3xl">
            Treatment always begins with identifying and, when possible, reducing the steroid source or stressor driving the condition.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Noticing a blurred spot in your central vision?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Early evaluation gives the best chance of full visual recovery. Call our Cypress office or request a consultation online.
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

export default CentralSerousRetinopathyPage;
