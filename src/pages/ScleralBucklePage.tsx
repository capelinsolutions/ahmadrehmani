import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, CircleDot, ShieldCheck, Layers, Activity } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import scleralBuckleImg from "@/assets/services/scleral-buckle-eye.jpg.asset.json";

const ScleralBucklePage = () => (
  <PageShell>
    <Helmet>
      <title>Scleral Buckle — Retinal Detachment Surgery | North Houston Retina</title>
      <meta
        name="description"
        content="Scleral buckle surgery with Dr. Ahmad Rehmani in Cypress, TX. A silicone band placed around the eye to repair retinal detachments and support retinal reattachment."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/scleral-buckle" />
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
              Scleral Buckle
            </h1>
            <p className="font-body text-foreground/70 text-base lg:text-lg">
              Time-Tested Repair for Retinal Detachment
            </p>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              A scleral buckle is a surgical procedure that repairs retinal detachments by placing
              a soft silicone band around the outside of the eye. The buckle gently indents the eye
              wall, reducing traction on the retina and supporting closure of retinal tears. In
              some cases, a scleral buckle is used alone, while in others it is combined with
              vitrectomy surgery to provide additional support and improve long-term success rates.
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
                  src={scleralBuckleImg.url}
                  alt="Medical illustration of an eye with a silicone scleral buckle band placed around the outside of the eye"
                  width={1280}
                  height={960}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Illustration of a scleral buckle — a silicone band encircling the eye to repair retinal detachment.
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
            How a Scleral Buckle Works
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            A proven, durable approach to reattaching the retina from outside the eye.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: CircleDot,
              title: "Silicone Band Placement",
              body: "A soft silicone band is positioned around the outside of the eye and secured to the sclera.",
            },
            {
              icon: Layers,
              title: "Gentle Indentation",
              body: "The buckle creates a subtle indent in the eye wall, bringing it closer to the detached retina.",
            },
            {
              icon: Activity,
              title: "Relieves Traction",
              body: "Reducing pull on the retina allows retinal tears to close and the retina to reattach.",
            },
            {
              icon: ShieldCheck,
              title: "Used Alone or Combined",
              body: "May be performed on its own or alongside vitrectomy for complex detachments and improved long-term success.",
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
            { name: "Pars Plana Vitrectomy", to: "/services/pars-plana-vitrectomy" },
            { name: "Pneumatic Retinopexy", to: "/services/pneumatic-retinopexy" },
            { name: "Laser Photocoagulation", to: "/services/laser-photocoagulation" },
            { name: "Posterior Vitreous Detachment", to: "/services/posterior-vitreous-detachment" },
            { name: "Lattice Degeneration", to: "/services/lattice-degeneration" },
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
          Dr. Rehmani offers prompt surgical evaluation for retinal detachments and tears.
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

export default ScleralBucklePage;
