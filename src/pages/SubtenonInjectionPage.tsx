import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Syringe, ShieldCheck, Clock, Droplet } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

const SubtenonInjectionPage = () => (
  <PageShell>
    <Helmet>
      <title>Sub-Tenon Injection — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Sub-Tenon steroid injection with Dr. Ahmad Rehmani in Cypress, TX — targeted periocular therapy for uveitis and macular edema."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/subtenon-injection" />
    </Helmet>

    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <Breadcrumbs />

        <div className="max-w-4xl space-y-5">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
            In-Office Injections
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Sub-Tenon Injection
          </h1>
          <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
            A sub-Tenon injection delivers steroid medication into the potential space beneath Tenon's
            capsule — a thin membrane surrounding the eye — allowing sustained release of
            anti-inflammatory medication close to the retina and choroid <strong>without entering the
            eye itself</strong>. It is commonly used for <strong>uveitis, cystoid macular edema, and
            selected cases of macular swelling</strong> when intraocular injection or systemic therapy
            is not the best option.
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
            The Procedure
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Droplet, title: "Topical Anesthesia", body: "The eye is numbed with anesthetic drops and gel — no needle enters the eye itself." },
            { icon: Syringe, title: "Precise Placement", body: "A blunt-tipped cannula or fine needle delivers medication into the sub-Tenon's space near the back of the eye." },
            { icon: ShieldCheck, title: "Sustained Therapy", body: "Steroid depot releases anti-inflammatory medication over weeks to months, controlling inflammation and swelling." },
            { icon: Clock, title: "Quick In-Office Visit", body: "The procedure takes only a few minutes and most patients resume normal activity the same day." },
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
        <h2 className="font-display text-3xl lg:text-4xl font-bold">Ask about sub-Tenon therapy</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          For uveitis and macular edema, sub-Tenon injection can be an effective and well-tolerated
          option.
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

export default SubtenonInjectionPage;
