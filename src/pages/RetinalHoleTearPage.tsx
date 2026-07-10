import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, AlertTriangle, Zap, Eye } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import tearImg from "@/assets/services/retinal-tear-fundus.jpg";

const RetinalHoleTearPage = () => (
  <PageShell>
    <Helmet>
      <title>Retinal Hole & Tear — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="A retinal hole or tear can lead to a retinal detachment. Dr. Ahmad Rehmani provides urgent evaluation and in-office laser retinopexy in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/retinal-hole-tear" />
    </Helmet>

    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <Breadcrumbs />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Retinal Hole & Tear
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              A retinal hole or tear is a break in the neurosensory retina that can allow fluid to
              pass underneath and progress to a retinal detachment. New flashes of light, a sudden
              shower of floaters, or a shadow in the vision are warning signs that require urgent
              evaluation. Prompt in-office laser retinopexy seals the tear and dramatically reduces
              the risk of detachment.
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
              <img src={tearImg} alt="Fundus photograph of a horseshoe-shaped retinal tear" loading="lazy" width={1024} height={1024} className="w-full h-auto object-cover" />
            </div>
            <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
              Fundus image — peripheral horseshoe retinal tear with lifted flap.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="bg-red-50 border-b border-red-200 py-6">
      <div className="container mx-auto px-4 max-w-5xl flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
        <p className="font-body text-sm lg:text-base text-red-900 leading-relaxed">
          <strong>Sudden flashes, new floaters, or a curtain in your vision?</strong> Call the office
          immediately for same-day evaluation.
        </p>
      </div>
    </section>

    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Evaluation & Treatment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Eye, title: "Dilated Peripheral Exam", body: "A thorough scleral-depressed dilated exam identifies retinal holes, tears, and areas of vitreoretinal traction." },
            { icon: Zap, title: "In-Office Laser Retinopexy", body: "Focal laser creates a strong chorioretinal adhesion around the tear, sealing it and preventing progression to retinal detachment." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background border-2 border-accent/15 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all">
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

    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">New flashes or floaters?</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          A prompt dilated exam can catch a retinal tear before it becomes a detachment.
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

export default RetinalHoleTearPage;
