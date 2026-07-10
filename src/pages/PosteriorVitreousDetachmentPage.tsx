import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Eye, AlertTriangle, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import pvdImg from "@/assets/services/posterior-vitreous-detachment.jpg";

const PosteriorVitreousDetachmentPage = () => (
  <PageShell>
    <Helmet>
      <title>Posterior Vitreous Detachment (PVD) — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Posterior vitreous detachment (PVD) is a common age-related change. Dr. Ahmad Rehmani evaluates flashes, floaters, and vision changes in Cypress, TX to protect retinal health."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/posterior-vitreous-detachment" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <Breadcrumbs />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Posterior Vitreous Detachment
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              A posterior vitreous detachment (PVD) occurs when the vitreous gel inside the eye
              naturally separates from the retina, most commonly as part of the aging process. While
              a PVD is usually harmless, it can sometimes create traction on the retina and lead to
              a retinal tear or detachment. New flashes of light, floaters, or changes in vision
              should be evaluated promptly to ensure the retina remains healthy and intact.
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
                  src={pvdImg}
                  alt="Cross-section illustration of an eye showing posterior vitreous detachment"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Illustration — vitreous gel separating from the retinal surface in PVD.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* What to Watch / Care */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Evaluation & Monitoring
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Most posterior vitreous detachments resolve without complication, but a thorough
            dilated exam is essential to rule out retinal tears at the time of onset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "New Flashes & Floaters",
              body: "Sudden flashes, a shower of floaters, or a shadow in your peripheral vision should be evaluated the same day.",
            },
            {
              icon: Eye,
              title: "Dilated Retinal Exam",
              body: "Dr. Rehmani performs a careful peripheral examination with advanced imaging to detect any associated retinal tear.",
            },
            {
              icon: ShieldCheck,
              title: "Follow-Up Care",
              body: "When the initial exam is clear, a short-interval follow-up ensures no delayed tear develops as the vitreous fully separates.",
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
          Experiencing new flashes or floaters?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Same-day evaluation is available for sudden visual symptoms. Call our Cypress office to
          schedule a dilated retinal exam with Dr. Rehmani.
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

export default PosteriorVitreousDetachmentPage;
