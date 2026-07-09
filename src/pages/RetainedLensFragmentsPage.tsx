import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Scissors, Eye, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import retainedLensFundus from "@/assets/services/retained-lens-fragments-fundus.png.asset.json";
import retainedLensDiagram from "@/assets/services/retained-lens-fragments-diagram.png.asset.json";

const RetainedLensFragmentsPage = () => {
  const aboutRef = useScrollAnimation();
  const treatRef = useScrollAnimation();
  return (
    <PageShell>
    <Helmet>
      <title>Retained Lens Fragments — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Surgical management of retained lens fragments after complicated cataract surgery with Dr. Ahmad Rehmani in Cypress, TX — pars plana vitrectomy for optimal visual recovery."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/retained-lens-fragments" />
    </Helmet>

    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services/cataract-complications" className="hover:text-accent">Lens Complications</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Retained Lens Fragments</span>
        </nav>

        <div className="max-w-4xl space-y-5">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
            Lens Complications
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Retained Lens Fragments
          </h1>
          <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
            Retained lens fragments are pieces of cataract material that remain inside the eye following a
            complicated cataract surgery. These fragments can lead to inflammation, elevated eye pressure,
            corneal swelling, and blurred vision. Dr. Rehmani provides expert vitreoretinal surgical
            management — including <strong>pars plana vitrectomy</strong> when needed — to safely remove
            retained lens material and promote optimal visual recovery.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold">
              <Phone className="w-4 h-4" /> Call (346) 587-0223
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section ref={aboutRef} className="bg-background py-16">
      <div className="container mx-auto px-4 max-w-6xl fade-up">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" /> The Condition
          </span>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
          What Are Retained Lens Fragments?
        </h2>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
              After complicated cataract surgery, pieces of lens material can fall backward into the vitreous cavity. These retained fragments can cause inflammation, elevated eye pressure, and corneal swelling. Dr. Rehmani uses careful examination and imaging to plan the safest timing and approach for removal.
            </p>
          </div>

          <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
            <img
              src={retainedLensFundus.url}
              alt="Fundus photograph showing retained lens fragments settled in the vitreous cavity"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-64 lg:h-80 object-contain bg-black"
            />
            <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
              Fundus image — retained lens fragments in the back of the eye
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section ref={treatRef} className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Surgical Removal & Recovery
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Timely surgical management protects the cornea, controls inflammation, and preserves the
            best possible vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Urgent Evaluation", body: "Slit-lamp and dilated exam to grade inflammation, corneal edema, and pressure — coordinated with your cataract surgeon." },
            { icon: Scissors, title: "Pars Plana Vitrectomy", body: "Small-gauge vitrectomy safely removes retained lens material from the vitreous cavity while protecting the retina." },
            { icon: Sparkles, title: "Anti-Inflammatory Care", body: "Post-op steroids and pressure-lowering therapy calm inflammation and support corneal recovery." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background border-2 border-accent/15 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-pale/50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="font-body text-foreground/80 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <figure className="mt-10 rounded-2xl overflow-hidden shadow-md border border-border bg-background max-w-3xl mx-auto">
          <img
            src={retainedLensDiagram.url}
            alt="Diagram of retained lens fragments, lens capsule, and IOL inside the eye"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-64 lg:h-80 object-contain bg-white"
          />
          <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
            Anatomy diagram — retained lens fragments behind the iris and IOL
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">Complications after cataract surgery?</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Dr. Rehmani accepts urgent surgical referrals for retained lens material.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold">
            <Phone className="w-4 h-4" /> Call (346) 587-0223
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

export default RetainedLensFragmentsPage;
