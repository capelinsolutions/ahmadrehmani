import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Film, Scissors, Eye, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";

const RetainedLensFragmentsPage = () => (
  <PageShell>
    <Helmet>
      <title>Retained Lens Fragments — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Surgical management of retained lens fragments after complicated cataract surgery with Dr. Ahmad Rehmani in Cypress, TX — pars plana vitrectomy for optimal visual recovery."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/retained-lens-fragments" />
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
          <span className="text-accent">Retained Lens Fragments</span>
        </nav>

        <div className="max-w-4xl space-y-5">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
            Lens Complications
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Retained Lens Fragments
          </h1>
          <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
            Retained lens fragments are pieces of cataract material that remain inside the eye following a
            complicated cataract surgery. These fragments can lead to inflammation, elevated eye pressure,
            corneal swelling, and blurred vision. Dr. Rehmani provides expert vitreoretinal surgical
            management — including <strong>pars plana vitrectomy</strong> when needed — to safely remove
            retained lens material and promote optimal visual recovery.
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
      </div>
    </section>

    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Surgical Removal & Recovery
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Timely surgical management protects the cornea, controls inflammation, and preserves the
            best possible vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Urgent Evaluation", body: "Slit-lamp and dilated exam to grade inflammation, corneal edema, and pressure — coordinated with your cataract surgeon." },
            { icon: Scissors, title: "Pars Plana Vitrectomy", body: "Small-gauge vitrectomy safely removes retained lens material from the vitreous cavity while protecting the retina." },
            { icon: Sparkles, title: "Anti-Inflammatory Care", body: "Post-op steroids and pressure-lowering therapy calm inflammation and support corneal recovery." },
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

        {/* Video placeholder */}
        <figure className="mt-10 rounded-2xl overflow-hidden border-2 border-dashed border-accent/40 bg-background shadow-sm max-w-3xl mx-auto">
          <div className="relative aspect-video bg-gradient-deep flex flex-col items-center justify-center text-center p-6">
            <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-3">
              <Film className="w-7 h-7 text-accent" />
            </div>
            <p className="font-display text-lg font-bold text-foreground">Surgical Video / GIF Coming Soon</p>
            <p className="font-body text-xs text-muted-foreground mt-1 max-w-xs">
              Dr. Rehmani removing retained lens fragments — clip to be added.
            </p>
          </div>
        </figure>
      </div>
    </section>

    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">Complications after cataract surgery?</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Dr. Rehmani accepts urgent surgical referrals for retained lens material.
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

export default RetainedLensFragmentsPage;
