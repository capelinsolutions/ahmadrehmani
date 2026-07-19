import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Syringe, Activity, AlertTriangle } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import endoImg from "@/assets/services/endophthalmitis-fundus.jpg";

const EndophthalmitisPage = () => (
  <PageShell>
    <Helmet>
      <title>Endophthalmitis — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Endophthalmitis is a serious intraocular infection requiring urgent care. Dr. Ahmad Rehmani offers prompt antibiotic injections and surgical management in Cypress, TX."
      />
      <link rel="canonical" href="https://nhretina.com/services/endophthalmitis" />
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
              Endophthalmitis
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Endophthalmitis is a serious infection inside the eye that can cause pain, redness,
              light sensitivity, and sudden vision loss. It most commonly occurs after eye surgery,
              an eye injection, or an eye injury, though it can occasionally spread from an infection
              elsewhere in the body. Prompt treatment with antibiotic injections and, in some cases,
              surgery is essential to control the infection and protect vision. Early diagnosis and
              intervention offer the best chance for a successful outcome.
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
                  src={endoImg}
                  alt="Fundus photograph of endophthalmitis showing vitreous haziness and white inflammatory deposits"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Fundus image — vitreous haze and white inflammatory deposits characteristic of endophthalmitis.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Urgent care callout */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 lg:p-8 flex gap-4 mb-10">
          <AlertTriangle className="w-8 h-8 text-destructive shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              A True Ophthalmic Emergency
            </h3>
            <p className="font-body text-foreground/80 leading-relaxed">
              Sudden eye pain, redness, or vision loss — especially after recent eye surgery or an
              injection — requires same-day evaluation. Hours matter. Call our office immediately or
              proceed to the nearest emergency department.
            </p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            How We Treat Endophthalmitis
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Treatment is tailored to the severity of the infection and the patient's vision. Dr.
            Rehmani follows evidence-based protocols to control infection quickly and preserve sight.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Activity,
              title: "Urgent Diagnosis",
              body: "Immediate clinical exam, B-scan ultrasound, and intraocular fluid sampling to identify the organism causing the infection.",
            },
            {
              icon: Syringe,
              title: "Intravitreal Antibiotics",
              body: "Targeted antibiotic (and antifungal when indicated) injections delivered directly into the eye to rapidly control the infection.",
            },
            {
              icon: AlertTriangle,
              title: "Vitrectomy Surgery",
              body: "For severe or vision-threatening cases, surgical removal of infected vitreous combined with antibiotic delivery offers the best outcome.",
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
          Suspected eye infection? Don't wait.
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Same-day evaluation is available. Early treatment by Dr. Rehmani offers the best chance to
          preserve vision.
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

export default EndophthalmitisPage;
