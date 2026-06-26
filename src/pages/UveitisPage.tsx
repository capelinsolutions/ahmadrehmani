import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Droplet, Syringe, Pill, Eye } from "lucide-react";
import PageShell from "@/components/PageShell";
import uveitisImg from "@/assets/services/uveitis-red-eye.jpg";

const UveitisPage = () => (
  <PageShell>
    <Helmet>
      <title>Uveitis — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Uveitis is inflammation inside the eye causing redness, pain, light sensitivity, and blurred vision. Dr. Ahmad Rehmani offers expert anti-inflammatory treatment in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/uveitis" />
    </Helmet>

    {/* Hero */}
    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Uveitis</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Uveitis
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Uveitis is inflammation inside the eye that can lead to redness, pain, light
              sensitivity, floaters, and blurred vision. It may be associated with autoimmune
              diseases, infections, or other inflammatory conditions, although some cases have no
              identifiable cause. Treatment typically involves anti-inflammatory medications, such
              as steroid eye drops, injections, or oral medications. Careful monitoring is important
              to prevent complications that can affect long-term vision.
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
                  src={uveitisImg}
                  alt="External photograph of an inflamed red eye with conjunctival injection characteristic of uveitis"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                External photograph — diffuse redness and ciliary flush seen in active uveitis.
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
            How We Treat Uveitis
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Treatment is tailored to the type, severity, and underlying cause of inflammation. Dr.
            Rehmani works to control inflammation quickly and protect long-term vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Droplet,
              title: "Steroid Eye Drops",
              body: "First-line therapy for anterior uveitis to rapidly reduce inflammation and relieve pain and light sensitivity.",
            },
            {
              icon: Syringe,
              title: "Steroid Injections",
              body: "Periocular or intravitreal steroid injections for moderate to severe inflammation affecting the back of the eye.",
            },
            {
              icon: Pill,
              title: "Oral & Systemic Therapy",
              body: "Oral steroids or immunomodulatory medications, coordinated with rheumatology when systemic disease is present.",
            },
            {
              icon: Eye,
              title: "Ongoing Monitoring",
              body: "Regular follow-up to detect complications such as glaucoma, cataract, or macular edema before they affect vision.",
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
          Red, painful, or light-sensitive eye?
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Early evaluation and treatment of uveitis helps preserve vision and prevent complications.
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

export default UveitisPage;
