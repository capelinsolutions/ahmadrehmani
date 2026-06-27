import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import heroImg from "@/assets/services/cataract-complications.jpg";

const SECTIONS = [
  {
    id: "dense-cataracts",
    title: "Dense Cataracts",
    body: "Dense cataracts occur when the eye's natural lens becomes significantly clouded, leading to blurred vision, glare, difficulty driving at night, and reduced quality of life. At North Houston Retina, we utilize advanced surgical techniques and technology to safely remove the cataract and replace it with a new intraocular lens, restoring clearer vision and improving visual function.",
  },
  {
    id: "lens-repositioning",
    title: "Lens Repositioning",
    body: "A displaced or decentered intraocular lens (IOL) can occur when the natural support structures of the lens, known as the zonules, become weakened or damaged (zonular dehiscence). In other cases, a previously implanted lens can shift out of position over time due to trauma, prior eye surgery, or progressive weakening of the eye's supporting tissues. These conditions can result in blurred vision, glare, double vision, and visual distortion. We offer advanced surgical techniques to reposition, stabilize, or secure the lens, restoring proper alignment and improving visual quality.",
  },
  {
    id: "retained-lens-fragments",
    title: "Retained Lens Fragments",
    body: "Retained lens fragments are pieces of cataract material that remain inside the eye following a complicated cataract surgery. These fragments can lead to inflammation, elevated eye pressure, corneal swelling, and blurred vision. Our team provides expert vitreoretinal surgical management, including pars plana vitrectomy when needed, to safely remove retained lens material and promote optimal visual recovery.",
  },
  {
    id: "secondary-intraocular-lens",
    title: "Secondary Intraocular Lens",
    body: "Secondary intraocular lens implantation may be required when a lens implant cannot be safely placed during the original cataract surgery, or when a previously implanted lens becomes dislocated or must be removed. Using advanced scleral-fixated and iris-fixated lens techniques, we can surgically implant and secure a new intraocular lens to restore visual function and provide long-term stability.",
  },
];

const CataractComplicationsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [hash]);

  return (
    <PageShell>
      <Helmet>
        <title>Cataract Complications — Surgical Care | North Houston Retina</title>
        <meta
          name="description"
          content="Expert surgical management of cataract complications with Dr. Ahmad Rehmani: dense cataracts, lens repositioning, retained lens fragments, and secondary intraocular lens implantation."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/cataract-complications" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">Cataract Complications</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
                Retinal Surgeries
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                Cataract Complications
              </h1>
              <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
                Specialized vitreoretinal surgical care for the most challenging cataract-related
                conditions — from dense, mature cataracts to dislocated lenses and retained
                fragments. Jump to a topic below or scroll to learn more.
              </p>
              <ul className="flex flex-wrap gap-2 pt-2">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent bg-accent-pale/60 hover:bg-accent-pale border border-accent/20 rounded-full px-4 py-1.5 transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-3">
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
                    src={heroImg}
                    alt="Close-up clinical photograph of an eye with a dense, cloudy cataract"
                    width={1024}
                    height={1024}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                  Clinical photograph — dense cataract.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {SECTIONS.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-l-4 border-accent/40 pl-6 lg:pl-8"
            >
              <span className="font-body text-xs uppercase tracking-widest text-accent font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-4">
                {s.title}
              </h2>
              <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center text-foreground">
          <h2 className="font-display text-3xl lg:text-4xl font-bold">
            Dealing with a cataract complication?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Dr. Rehmani offers expert evaluation and advanced surgical options to restore vision.
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
};

export default CataractComplicationsPage;
