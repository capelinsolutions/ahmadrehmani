import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Eye, Zap } from "lucide-react";
import PageShell from "@/components/PageShell";
import latticeImg from "@/assets/services/lattice-degeneration-fundus.jpg";

const LatticeDegenerationPage = () => (
  <PageShell>
    <Helmet>
      <title>Lattice Degeneration — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Lattice degeneration is a thinning of the peripheral retina that can lead to retinal tears or detachment. Dr. Ahmad Rehmani provides expert evaluation and laser treatment in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/lattice-degeneration" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Lattice Degeneration</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Lattice Degeneration
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Lattice degeneration is a common condition in which areas of the peripheral retina
              become thinned and weakened. These areas are more susceptible to developing retinal
              tears, particularly as the vitreous gel separates with age. Because untreated retinal
              tears can progress to retinal detachments, regular retinal examinations and timely
              treatment are important to protect vision.
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
                  src={latticeImg}
                  alt="Fundus photograph showing lattice degeneration of the peripheral retina"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Fundus image — peripheral retinal thinning characteristic of lattice degeneration.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Treatment / Management */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Monitoring & Treatment
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Most areas of lattice degeneration are observed with routine dilated exams. When tears
            or high-risk changes develop, prompt laser treatment can prevent progression to retinal
            detachment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Eye,
              title: "Routine Monitoring",
              body: "Dilated scleral depressed retinal exams allow Dr. Rehmani to track stable lattice areas and detect early changes before symptoms appear.",
            },
            {
              icon: Zap,
              title: "Laser Retinopexy",
              body: "Due to the increased risk of tears — or when a tear forms within or near lattice degeneration — in-office laser therapy seals suspicious areas of the retina and reduces detachment risk.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-background border-2 border-accent/15 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-pale/50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
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
          Concerned about lattice degeneration?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Schedule a dilated retinal exam with Dr. Rehmani for a thorough peripheral evaluation and
          personalized monitoring plan.
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

export default LatticeDegenerationPage;
