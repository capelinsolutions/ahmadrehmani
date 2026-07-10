import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Activity, HeartPulse, Stethoscope, AlertCircle } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import raoImg from "@/assets/services/retinal-arterial-occlusion.jpg";

const RetinalArterialOcclusionPage = () => (
  <PageShell>
    <Helmet>
      <title>Retinal Arterial Occlusion — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Retinal arterial occlusion (eye stroke) causes sudden, painless vision loss. Dr. Ahmad Rehmani provides urgent evaluation and vascular risk management in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/retinal-arterial-occlusion" />
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
              Retinal Arterial Occlusion
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Retinal arterial occlusion occurs when blood flow to the retina is blocked, often
              causing sudden, painless vision loss. This condition is sometimes referred to as a
              "stroke of the eye" because the retina is deprived of oxygen and nutrients. Urgent
              evaluation is important, and treatment focuses on restoring circulation when possible
              and addressing underlying vascular risk factors such as cardiac and carotid disease.
              A thorough medical evaluation may also be recommended to help reduce the risk of
              future cardiovascular events.
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
                  src={raoImg}
                  alt="Fundus photograph showing a retinal arterial occlusion with retinal whitening, attenuated arterioles, and a cherry-red spot at the macula"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Fundus image — retinal whitening with cherry-red spot characteristic of arterial occlusion.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* Urgent callout */}
    <section className="bg-red-50 border-b border-red-200 py-6">
      <div className="container mx-auto px-4 max-w-5xl flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
        <p className="font-body text-sm lg:text-base text-red-900 leading-relaxed">
          <strong>Retinal arterial occlusion is a medical emergency.</strong> If you experience
          sudden, painless vision loss, <strong>go to the nearest emergency room immediately</strong>{" "}
          or call our office — time is critical to preserve vision and rule out a related stroke.
        </p>
      </div>
    </section>

    {/* Evaluation & Management */}
    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Evaluation & Management
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Dr. Rehmani works to restore circulation when possible and coordinates a full vascular
            workup to protect both your vision and overall cardiovascular health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Activity,
              title: "Urgent Retinal Exam",
              body: "Dilated examination and imaging to confirm the occlusion, identify the location, and assess the extent of retinal damage.",
            },
            {
              icon: Stethoscope,
              title: "Restoring Circulation",
              body: "When appropriate and within the treatment window, measures may be taken to improve perfusion to the affected retina.",
            },
            {
              icon: HeartPulse,
              title: "Cardiac & Carotid Workup",
              body: "Coordinated evaluation with your primary care, cardiology, and neurology teams to identify carotid or cardiac sources.",
            },
            {
              icon: AlertCircle,
              title: "Stroke Risk Reduction",
              body: "Management of blood pressure, cholesterol, diabetes, and other risk factors to reduce the risk of future vascular events.",
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
          Sudden vision loss? Call now.
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Retinal arterial occlusion is time-sensitive. Urgent evaluation can protect vision and
          identify life-threatening vascular conditions.
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

export default RetinalArterialOcclusionPage;
