import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Zap, ShieldCheck, Droplet, Activity } from "lucide-react";
import PageShell from "@/components/PageShell";
import laserImg from "@/assets/services/micropulse-laser.jpg";

const MicropulseLaserPage = () => (
  <PageShell>
    <Helmet>
      <title>Retinal Micropulse Laser — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Advanced retinal micropulse laser treatment with Dr. Ahmad Rehmani in Cypress, TX. A low-intensity, tissue-sparing therapy for diabetic macular edema and other causes of macular swelling."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/micropulse-laser" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Micropulse Laser</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Retinal Lasers
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Retinal Micropulse Laser
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Retinal micropulse laser is an advanced, low-intensity laser treatment used to reduce
              swelling and fluid within the macula while minimizing damage to surrounding retinal
              tissue. Unlike traditional laser treatments, micropulse laser delivers energy in short
              pulses, stimulating the retina's natural healing processes and helping the macula
              clear excess fluid. It is commonly used for conditions such as diabetic macular edema
              and other retinal disorders associated with chronic macular swelling.
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
                  src={laserImg}
                  alt="Iridex 577 micropulse retinal laser console with touchscreen and delivery system"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Iridex 577 micropulse laser — yellow-wavelength, tissue-sparing therapy.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Why Micropulse */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Why Micropulse Laser?
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Short, sub-threshold pulses activate the retinal pigment epithelium without creating
            visible burns — preserving healthy tissue while treating macular swelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Zap,
              title: "Sub-Threshold Energy",
              body: "Tiny micro-second pulses deliver therapeutic effect without producing the visible scars of conventional laser.",
            },
            {
              icon: ShieldCheck,
              title: "Tissue-Sparing",
              body: "Surrounding photoreceptors and the central macula are protected, helping maintain visual function.",
            },
            {
              icon: Droplet,
              title: "Reduces Macular Fluid",
              body: "Stimulates the retina's natural pump mechanism to clear chronic swelling and intraretinal fluid.",
            },
            {
              icon: Activity,
              title: "Repeatable & Office-Based",
              body: "Performed in-office in minutes, with no incisions and the ability to retreat safely when needed.",
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

    {/* Conditions treated */}
    <section className="bg-gradient-soft py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
          Conditions Treated with Micropulse Laser
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Diabetic Macular Edema", to: "/services/diabetic-retinopathy" },
            { name: "Central Serous Retinopathy", to: "/services/central-serous-retinopathy" },
            { name: "Cystoid Macular Edema", to: "/services/cystoid-macular-edema" },
            { name: "Macular Edema from RVO", to: "/services/retinal-vein-occlusion" },
            { name: "Chronic Macular Swelling", to: "/services/macular-degeneration" },
            { name: "Post-Surgical Macular Edema", to: "/services/cystoid-macular-edema" },
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
          Is micropulse laser right for you?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          A focused retinal evaluation — including OCT imaging — determines whether micropulse laser
          can help control your macular swelling.
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

export default MicropulseLaserPage;
