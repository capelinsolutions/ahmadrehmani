import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Scissors, Eye, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import iolImg from "@/assets/services/dislocated-iol-fundus.jpg";

const DislocatedIOLPage = () => (
  <PageShell>
    <Helmet>
      <title>Dislocated Intraocular Lens (IOL) — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Surgical repositioning and secondary intraocular lens implantation for dislocated IOLs with Dr. Ahmad Rehmani in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/dislocated-intraocular-lens" />
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
          <span className="text-accent">Dislocated Intraocular Lens</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Lens Complications
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Dislocated Intraocular Lens
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              An intraocular lens (IOL) can become displaced when the delicate zonular fibers supporting
              it weaken or break — from trauma, prior surgery, pseudoexfoliation, or progressive
              zonulopathy. Symptoms include blurred vision, glare, double vision, or the sensation of a
              shadow moving through vision. Dr. Rehmani offers advanced techniques to reposition,
              suture-fixate, or exchange the lens to restore stable, clear vision.
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

          <figure className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg bg-background">
              <img src={iolImg} alt="Fundus photograph showing a dislocated intraocular lens on the retinal surface" loading="lazy" width={1024} height={1024} className="w-full h-auto object-cover" />
            </div>
            <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
              Fundus image — dislocated posterior chamber IOL resting on the retina.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Surgical Options
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Lens Repositioning", body: "When enough support remains, the existing IOL can be recentered and stabilized within the capsular bag or sulcus." },
            { icon: Scissors, title: "Scleral / Iris Fixation", body: "For inadequate support, Dr. Rehmani suture-fixates or scleral-fixates the lens to secure it in the correct position." },
            { icon: ShieldCheck, title: "Secondary IOL Implantation", body: "When the original lens must be removed, a new secondary IOL is implanted with the appropriate fixation technique." },
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
      </div>
    </section>

    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">Displaced or dislocated lens implant?</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Dr. Rehmani accepts referrals for complex secondary IOL and lens repositioning surgery.
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

export default DislocatedIOLPage;
