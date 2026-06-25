import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Eye, Sparkles, AlertCircle, Droplet, ShieldAlert } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import cmeOct from "@/assets/services/cme-oct.jpg";

const CystoidMacularEdemaPage = () => {
  const aboutRef = useScrollAnimation();
  const treatRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Cystoid Macular Edema (CME) Treatment | North Houston Retina</title>
        <meta
          name="description"
          content="Expert diagnosis and treatment of Cystoid Macular Edema (CME) in Cypress, TX. Learn about anti-inflammatory drops, injections, and target treatments for central retinal swelling."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/cystoid-macular-edema" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">Cystoid Macular Edema</span>
          </nav>

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">
              Cystoid Macular Edema (CME)
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              Cystoid Macular Edema (CME) is characterized by fluid-filled swelling (cysts) in the macula. Because it has many distinct underlying causes, comprehensive diagnostic testing and regular follow-up are critical to resolving the swelling and preventing permanent vision loss.
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
            What is Cystoid Macular Edema?
          </h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div className="space-y-6">
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Cystoid Macular Edema is a painless swelling of the macula, the part of the retina responsible for sharp, central vision. When the retina's blood vessels leak, small fluid-filled cysts form in a petal-like pattern, distorting and blurring your sight.
              </p>
              
              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-base">Regular Follow-Up is Crucial</h3>
                  <p className="font-body text-sm text-amber-800/90 mt-1">
                    CME can be a chronic or recurring condition. Routine OCT scans and regular follow-up with Dr. Rehmani are absolutely essential to track fluid reduction and ensure your treatment is working effectively.
                  </p>
                </div>
              </div>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img
                src={cmeOct}
                alt="OCT scan showing Cystoid Macular Edema with fluid-filled cysts in the central retina"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
                OCT Scan — fluid-filled cystoid cavities inside the macula
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
              <Sparkles className="w-3.5 h-3.5" /> Targeted Treatment
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            How is CME Treated?
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-background border border-border rounded-2xl p-6 lg:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">1. Finding the Underlying Cause</h3>
                </div>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  Because CME is not a disease itself but a response to other issues, we must identify and treat the root cause first. Common triggers include eye surgery (such as cataract surgery), diabetic retinopathy, retinal vein occlusion, and intraocular inflammation (uveitis).
                </p>
              </div>
            </div>

            <div className="bg-gradient-bright border-2 border-accent rounded-2xl p-6 lg:p-7 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">2. Anti-Inflammatory Therapies</h3>
                </div>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  Most cases are successfully improved using topical anti-inflammatory eye drops (such as corticosteroids or NSAIDs) to reduce leakage. For persistent swelling, local anti-inflammatory or anti-VEGF injections around or into the eye may be performed to rapidly quiet down the vascular leaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Dealing with persistent central blurriness?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Get an in-depth OCT evaluation at North Houston Retina. We specialize in finding the root cause of macular swelling and tailoring a custom recovery plan.
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

export default CystoidMacularEdemaPage;
