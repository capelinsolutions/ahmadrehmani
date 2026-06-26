import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Target, ShieldCheck, Eye, Activity } from "lucide-react";
import PageShell from "@/components/PageShell";
import laserImg from "@/assets/services/laser-photocoagulation.jpg";

const LaserPhotocoagulationPage = () => (
  <PageShell>
    <Helmet>
      <title>Laser Photocoagulation — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Retinal laser photocoagulation with Dr. Ahmad Rehmani in Cypress, TX. In-office treatment for retinal tears, diabetic retinopathy, and retinal vein occlusions."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/laser-photocoagulation" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Laser Photocoagulation</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Retinal Lasers
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Laser Photocoagulation
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Laser photocoagulation is a retinal laser treatment that uses focused laser energy to
              create small therapeutic burns on the retina. It is commonly used to treat retinal
              tears, diabetic retinopathy, retinal vein occlusions, and other retinal vascular
              disorders by sealing retinal breaks, reducing abnormal blood vessel growth, and
              preventing vision-threatening complications. The procedure is performed in the office
              and can help preserve vision and reduce the risk of future retinal damage.
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
                  alt="Fundus photograph showing pan-retinal photocoagulation (PRP) laser burn pattern across the peripheral retina"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Fundus photo of pan-retinal photocoagulation (PRP) laser pattern.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Why */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            How Laser Photocoagulation Helps
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Precisely placed laser spots seal retinal breaks and quiet abnormal blood vessels —
            stabilizing the retina and reducing the risk of bleeding, swelling, and detachment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Seals Retinal Tears",
              body: "Focal laser around retinal breaks creates a chorioretinal adhesion that helps prevent progression to retinal detachment.",
            },
            {
              icon: ShieldCheck,
              title: "Controls Abnormal Vessels",
              body: "Pan-retinal photocoagulation (PRP) reduces ischemia-driven neovascularization in diabetic retinopathy and vein occlusions.",
            },
            {
              icon: Eye,
              title: "Protects Vision",
              body: "By treating the peripheral retina, central vision is preserved and the risk of vitreous hemorrhage and tractional detachment is lowered.",
            },
            {
              icon: Activity,
              title: "In-Office Procedure",
              body: "Performed comfortably in the office under topical anesthesia, with no incisions and a quick return to daily activities.",
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
          Conditions Treated with Laser Photocoagulation
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Retinal Tears", to: "/services/retinal-detachment-tears" },
            { name: "Lattice Degeneration", to: "/services/lattice-degeneration" },
            { name: "Proliferative Diabetic Retinopathy", to: "/services/diabetic-retinopathy" },
            { name: "Diabetic Macular Edema", to: "/services/diabetic-retinopathy" },
            { name: "Retinal Vein Occlusion", to: "/services/retinal-vein-occlusion" },
            { name: "Retinal Vascular Disorders", to: "/services/retinal-vein-occlusion" },
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
          Do you need retinal laser treatment?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          A dilated retinal exam with wide-field imaging determines whether laser photocoagulation
          can protect your vision.
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

export default LaserPhotocoagulationPage;
