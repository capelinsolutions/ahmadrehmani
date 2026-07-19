import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, AlertTriangle, Zap, Scissors, Sparkles, Film, Heart, ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import retinalTearFundus from "@/assets/services/retinal-detachment-fundus.jpg";

const RetinalDetachmentPage = () => {
  const aboutRef = useScrollAnimation();
  const treatRef = useScrollAnimation();
  const recoveryRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Retinal Tears & Detachments | North Houston Retina</title>
        <meta
          name="description"
          content="Prompt evaluation and advanced repair of retinal tears and detachments in Cypress, TX — laser, pneumatic retinopexy, scleral buckle, and vitrectomy by Dr. Rehmani."
        />
        <link rel="canonical" href="https://nhretina.com/services/retinal-detachment-tears" />
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
              Retinal Detachment
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              A retinal detachment occurs when the retina separates from its underlying support layers — a vision-threatening condition requiring prompt diagnosis and treatment to maximize visual recovery.
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
            <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" /> The Condition
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Understanding Retinal Detachment
          </h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div className="space-y-4">
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                A retinal detachment occurs when the retina, the <strong>light-sensitive tissue lining the back of the eye</strong>, separates from its underlying support layers. This is a vision-threatening condition that may cause <strong>flashes of light, new floaters, a curtain-like shadow, or sudden loss of vision</strong>.
              </p>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Prompt diagnosis and treatment are essential to maximize the chance of visual recovery.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img
                src={retinalTearFundus}
                alt="Ultra-widefield fundus photograph showing a large rhegmatogenous retinal detachment with corrugated retinal folds"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
                Ultra-widefield fundus photograph — bullous retinal detachment with corrugated folds
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
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            From Laser to Surgical Repair
          </h2>
          <p className="font-body text-gray-700 leading-relaxed text-base lg:text-lg max-w-3xl mb-10">
            At North Houston Retina, Dr. Rehmani uses advanced diagnostic imaging and state-of-the-art laser technology to identify and treat retinal tears <em>before</em> they advance to retinal detachments. For detachments, he offers prompt evaluation and the most advanced repair techniques available.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/services/pneumatic-retinopexy"
              className="group bg-gradient-bright border-2 border-accent rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <p className="font-body text-xs text-accent font-bold uppercase tracking-wider">In-Office</p>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">Pneumatic Retinopexy</h3>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                A precisely-placed gas bubble inside the eye gently re-attaches the retina, paired with laser or cryotherapy to seal the tear — often performed comfortably in the office.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-body font-semibold text-sm group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/services/scleral-buckle"
              className="group bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/40 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Scissors className="w-5 h-5" />
              </div>
              <p className="font-body text-xs text-blue-700 font-bold uppercase tracking-wider">Surgical</p>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">Scleral Buckle Surgery</h3>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                A soft silicone band is placed around the outside of the eye to relieve traction on the retina, supporting reattachment from the outside-in.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-body font-semibold text-sm group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/services/pars-plana-vitrectomy"
              className="group bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/40 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="font-body text-xs text-blue-700 font-bold uppercase tracking-wider">Microsurgery</p>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">Pars Plana Vitrectomy</h3>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                Modern small-gauge vitrectomy removes the vitreous gel, drains subretinal fluid, and uses laser plus gas or oil tamponade to restore the retina to its proper position.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-body font-semibold text-sm group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Video placeholder */}
          <figure className="mt-10 rounded-2xl overflow-hidden border-2 border-dashed border-accent/40 bg-background shadow-sm max-w-3xl mx-auto">
            <div className="relative aspect-video bg-gradient-deep flex flex-col items-center justify-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-3">
                <Film className="w-7 h-7 text-accent" />
              </div>
              <p className="font-display text-lg font-bold text-foreground">Surgical Video Coming Soon</p>
              <p className="font-body text-xs text-muted-foreground mt-1 max-w-xs">
                Dr. Rehmani repairing a retinal detachment — clip to be added.
              </p>
            </div>
            <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border bg-background">
              Video placeholder — intraoperative footage of retinal detachment repair.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Recovery */}
      <section ref={recoveryRef} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="grid lg:grid-cols-[auto_1fr] gap-6 items-start bg-accent-pale/20 border border-accent/20 rounded-2xl p-6 lg:p-8">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="font-body text-xs text-accent font-bold uppercase tracking-wider mb-2">Personalized Recovery</p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Guidance From Diagnosis Through Healing
              </h2>
              <p className="font-body text-gray-700 leading-[1.8] text-base">
                From diagnosis through recovery, Dr. Rehmani is committed to providing personalized care, clear communication, and exceptional surgical outcomes to help preserve and restore your vision. When a gas bubble is required as part of retinal surgery, <strong>careful head positioning is essential for optimal healing and surgical success</strong>, and Dr. Rehmani ensures every patient receives thorough guidance and support throughout the recovery process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            New flashes, floaters, or a shadow in your vision?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Retinal tears and detachments are time-sensitive. Call our Cypress office immediately for same-day evaluation.
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

export default RetinalDetachmentPage;
