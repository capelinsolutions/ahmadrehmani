import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Eye, Sparkles, Clock, Scissors } from "lucide-react";
import PageShell from "@/components/PageShell";
import floatersImg from "@/assets/services/vitreous-floaters.jpg";

const VitreousFloatersPage = () => (
  <PageShell>
    <Helmet>
      <title>Vitreous Floaters & Asteroid Hyalosis — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Vitreous floaters and asteroid hyalosis evaluation and treatment in Cypress, TX. Dr. Ahmad Rehmani offers advanced pars plana vitrectomy (PPV) for persistent, vision-affecting floaters."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/vitreous-floaters" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Vitreous Floaters</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Vitreous Floaters
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Vitreous floaters are small spots, cobwebs, or shadows that drift across the field of
              vision, caused by age-related changes in the vitreous gel inside the eye. In most
              people, the brain gradually adapts to these floaters, making them much less noticeable
              over a period of approximately 3–6 months.
            </p>

            <div className="border-l-4 border-accent/40 pl-5 py-1 space-y-2">
              <h2 className="font-display text-xl font-bold text-foreground">Asteroid Hyalosis</h2>
              <p className="font-body text-foreground/80 text-sm lg:text-base leading-[1.8]">
                Asteroid hyalosis is a subset of floaters; a common, typically benign condition in
                which tiny calcium-lipid deposits develop within the vitreous gel of the eye. While
                most patients have no symptoms, some may notice floaters, glare, or reduced visual
                quality when the deposits become dense.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:+13465870223"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call (346) 587-0223
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium"
              >
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-md">
              <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg bg-background">
                <img
                  src={floatersImg}
                  alt="Illustration of vitreous floaters — cobwebs, threads, and small spots drifting across the field of vision"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Patient's view — how floaters appear as drifting shadows against a bright background.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Management */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Management
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Dr. Rehmani offers the most advanced treatment options for patients bothered by
            persistent vitreous floaters. For those whose symptoms significantly affect their
            quality of life, a <span className="font-semibold text-foreground">pars plana
            vitrectomy (PPV)</span> provides a definitive solution by safely removing the vitreous
            gel and eliminating the floaters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Eye,
              title: "Comprehensive Evaluation",
              body: "Dilated retinal examination to confirm benign floaters and rule out tears, detachment, or other retinal pathology.",
            },
            {
              icon: Clock,
              title: "Observation & Adaptation",
              body: "Most floaters become less noticeable within 3–6 months as the brain naturally adapts. Reassurance and monitoring are often all that is needed.",
            },
            {
              icon: Scissors,
              title: "Pars Plana Vitrectomy",
              body: "A definitive surgical option for persistent, vision-affecting floaters — the vitreous gel is safely removed, eliminating the floaters.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-background border-2 border-accent/15 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-pale/50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="font-body text-foreground/80 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">
          Bothered by persistent floaters?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          A thorough retinal evaluation can rule out serious causes and determine whether advanced
          treatment is right for you.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a
            href="tel:+13465870223"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call (346) 587-0223
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background hover:bg-secondary text-foreground px-6 py-3 rounded-lg font-body font-semibold border border-border"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  </PageShell>
);

export default VitreousFloatersPage;
