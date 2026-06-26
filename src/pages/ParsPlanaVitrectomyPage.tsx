import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Scissors, Zap, Droplet, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import procedureImg from "@/assets/services/pars-plana-vitrectomy.jpg";

const ParsPlanaVitrectomyPage = () => (
  <PageShell>
    <Helmet>
      <title>Pars Plana Vitrectomy — Retinal Detachment Surgery | North Houston Retina</title>
      <meta
        name="description"
        content="Pars plana vitrectomy with Dr. Ahmad Rehmani in Cypress, TX. Advanced surgical repair of simple and complex retinal detachments with laser, gas, or silicone oil."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/pars-plana-vitrectomy" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Pars Plana Vitrectomy</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Retinal Surgeries
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Pars Plana Vitrectomy
            </h1>
            <p className="font-body text-foreground/70 text-base lg:text-lg">
              Operating-Room Repair for Retinal Detachment
            </p>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Pars plana vitrectomy is a highly effective surgical procedure performed in the
              operating room to repair retinal detachments. During surgery, the vitreous gel is
              removed, retinal tears are treated with laser, and a gas bubble or silicone oil is
              placed in the eye to support retinal reattachment. This approach allows for precise
              treatment of both simple and complex retinal detachments.
            </p>

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
                  src={procedureImg}
                  alt="Medical illustration of pars plana vitrectomy showing trocars, vitrectomy probe, and light pipe inserted into the eye"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Pars plana vitrectomy — microsurgical access through the pars plana of the eye.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            How Pars Plana Vitrectomy Works
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            A microsurgical, step-by-step approach performed in the operating room to reattach the
            retina and restore vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Scissors,
              title: "Vitreous Removal",
              body: "Tiny instruments are introduced through the pars plana and the vitreous gel is carefully removed to relieve traction on the retina.",
            },
            {
              icon: Zap,
              title: "Laser Treatment",
              body: "Retinal tears are sealed with endolaser, creating durable scars that hold the retina to the underlying eye wall.",
            },
            {
              icon: Droplet,
              title: "Gas or Silicone Oil",
              body: "A gas bubble or silicone oil tamponade is placed inside the eye to support the retina while it heals into position.",
            },
            {
              icon: ShieldCheck,
              title: "Complex Cases",
              body: "This approach allows precise repair of both simple detachments and complex cases involving scar tissue or prior surgery.",
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

    {/* Related */}
    <section className="bg-gradient-soft py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Related Conditions & Procedures
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Retinal Detachment", to: "/services/retinal-detachment-tears" },
            { name: "Pneumatic Retinopexy", to: "/services/pneumatic-retinopexy" },
            { name: "Macular Hole Repair", to: "/services/macular-hole" },
            { name: "Membrane Peeling", to: "/services/macular-pucker" },
            { name: "Laser Photocoagulation", to: "/services/laser-photocoagulation" },
            { name: "Vitreous Floaters", to: "/services/vitreous-floaters" },
          ].map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="group flex items-center justify-between gap-2 bg-background border border-border rounded-xl px-5 py-4 hover:border-accent/40 hover:shadow-md transition-all"
            >
              <span className="font-body text-sm font-semibold text-foreground group-hover:text-accent">
                {c.name}
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">
          Need surgical evaluation for a retinal detachment?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Dr. Rehmani offers same-day surgical consultations for retinal detachments and complex
          vitreoretinal disease.
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

export default ParsPlanaVitrectomyPage;
