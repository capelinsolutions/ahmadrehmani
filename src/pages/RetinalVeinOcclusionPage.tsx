import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Syringe, Zap, HeartPulse, CalendarCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import rvoImg from "@/assets/services/retinal-vein-occlusion.jpg";

const RetinalVeinOcclusionPage = () => (
  <PageShell>
    <Helmet>
      <title>Retinal Vein Occlusion — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Retinal vein occlusion causes bleeding, swelling, and vision changes. Dr. Ahmad Rehmani treats CRVO and BRVO with injections, laser, and vascular risk management in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/retinal-vein-occlusion" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Retinal Vein Occlusion</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Retinal Vein Occlusion
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Retinal vein occlusion develops when a vein in the retina becomes blocked, leading to
              bleeding, swelling, and vision changes. Risk factors may include high blood pressure,
              diabetes, high cholesterol, and other vascular conditions. Treatment may include eye
              injections, laser therapy, and management of associated health conditions. Regular
              follow-up care can help preserve vision and reduce the risk of further retinal damage.
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
                  src={rvoImg}
                  alt="Fundus photograph of a retinal vein occlusion with diffuse retinal hemorrhages, dilated tortuous veins, and optic disc swelling"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Fundus image — scattered hemorrhages and dilated, tortuous veins typical of RVO.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Treatment */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            How We Treat Retinal Vein Occlusion
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Dr. Rehmani tailors treatment to the type and severity of the occlusion, focusing on
            reducing swelling, restoring vision, and lowering the risk of future events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Syringe,
              title: "Anti-VEGF Injections",
              body: "In-office injections (Eylea, Vabysmo, Lucentis, Avastin) reduce macular swelling and improve vision in eyes affected by CRVO or BRVO.",
            },
            {
              icon: Zap,
              title: "Laser Therapy",
              body: "Focal or panretinal laser is used when needed to treat persistent swelling or to prevent complications from abnormal new blood vessels.",
            },
            {
              icon: HeartPulse,
              title: "Vascular Risk Management",
              body: "Coordinated care with your primary doctor to manage blood pressure, cholesterol, and diabetes — the drivers behind most vein occlusions.",
            },
            {
              icon: CalendarCheck,
              title: "Long-Term Follow-Up",
              body: "Regular monitoring with OCT imaging helps preserve vision and catches recurrent swelling or complications early.",
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

    {/* CTA */}
    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">
          Sudden blur or vision changes?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Early treatment of retinal vein occlusion gives the best chance to preserve vision and
          prevent further damage.
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

export default RetinalVeinOcclusionPage;
