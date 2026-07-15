import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Wind, Compass, Zap, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import procedureImg from "@/assets/services/pneumatic-retinopexy.jpg";
import fundusImg from "@/assets/services/pneumatic-retinopexy-fundus.png.asset.json";

const PneumaticRetinopexyPage = () => (
  <PageShell>
    <Helmet>
      <title>Pneumatic Retinopexy — In-Office Retinal Detachment Repair | North Houston Retina</title>
      <meta
        name="description"
        content="Pneumatic retinopexy with Dr. Ahmad Rehmani in Cypress, TX. Minimally invasive, in-office gas bubble repair for select retinal detachments."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/pneumatic-retinopexy" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <Breadcrumbs />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Retinal Surgeries
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Pneumatic Retinopexy
            </h1>
            <p className="font-body text-foreground/70 text-base lg:text-lg">
              In-Office Retinal Detachment Repair
            </p>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Pneumatic retinopexy is a minimally invasive, in-office procedure used to repair
              select retinal detachments. A small gas bubble is injected into the eye to close the
              retinal tear and allow the retina to reattach. Strict head positioning is required for
              several days after the procedure to keep the gas bubble in the correct location, and
              patients typically return the following day for laser treatment to permanently seal
              the retinal tear.
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
                  alt="Medical illustration of pneumatic retinopexy: gas bubble inside the eye pressing against a retinal tear to reattach the retina"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Pneumatic retinopexy — an intraocular gas bubble seals the retinal tear.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Fundus photo */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-4xl">
        <figure className="w-full">
          <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg bg-black">
            <img
              src={fundusImg.url}
              alt="Fundus photograph showing an intraocular gas bubble after pneumatic retinopexy"
              width={1280}
              height={720}
              className="w-full h-auto object-contain"
            />
          </div>
          <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
            Fundus photograph demonstrating an intraocular gas bubble used to seal a retinal tear during pneumatic retinopexy.
          </figcaption>
        </figure>
      </div>
    </section>

    {/* How it works */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            How Pneumatic Retinopexy Works
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            A precise sequence of steps performed comfortably in the office to reattach the retina
            and permanently seal the tear.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Wind,
              title: "Gas Bubble Injection",
              body: "Under topical anesthesia, an expansile gas bubble is injected into the vitreous cavity to gently press the retina back against the eye wall.",
            },
            {
              icon: Compass,
              title: "Strict Head Positioning",
              body: "For several days, careful head positioning keeps the bubble against the retinal tear — essential to a successful reattachment.",
            },
            {
              icon: Zap,
              title: "Next-Day Laser",
              body: "Patients typically return the following day for laser treatment that permanently seals the retinal tear and prevents future detachment.",
            },
            {
              icon: Clock,
              title: "Gradual Bubble Absorption",
              body: "Over the following weeks, the gas bubble is naturally absorbed by the eye as the retina remains securely reattached.",
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
            { name: "Retinal Tears", to: "/services/retinal-detachment-tears" },
            { name: "Posterior Vitreous Detachment", to: "/services/posterior-vitreous-detachment" },
            { name: "Lattice Degeneration", to: "/services/lattice-degeneration" },
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
          Concerned about a retinal detachment?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          New flashes, floaters, or a curtain in your vision require urgent evaluation. Dr. Rehmani
          offers same-day appointments for suspected retinal detachments.
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

export default PneumaticRetinopexyPage;
