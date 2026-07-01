import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Eye, Syringe, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";

const JuxtafovealTelangiectasiaPage = () => (
  <PageShell>
    <Helmet>
      <title>Juxtafoveal Telangiectasia (MacTel) — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="Juxtafoveal telangiectasia (MacTel) is a rare macular vascular condition causing subtle central vision changes. Dr. Ahmad Rehmani provides expert diagnosis and treatment in Cypress, TX."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/juxtafoveal-telangiectasia" />
    </Helmet>

    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-accent">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-accent">Juxtafoveal Telangiectasia</span>
        </nav>

        <div className="max-w-4xl space-y-5">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
            Conditions & Treatments
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Juxtafoveal Telangiectasia (MacTel)
          </h1>
          <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
            Juxtafoveal telangiectasia — also called macular telangiectasia or MacTel — is an
            uncommon condition in which the small blood vessels next to the fovea become abnormally
            dilated and leaky. Patients often notice subtle blurring, distortion, or difficulty
            reading before any obvious change on examination. Advanced OCT, OCT-angiography, and
            fluorescein angiography allow us to detect the earliest microvascular and structural
            changes.
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
            Monitoring & Treatment
          </h2>
          <p className="font-body text-muted-foreground mt-3 leading-relaxed">
            Treatment is tailored to the stage of disease and whether new blood vessel growth is
            present.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Careful Observation", body: "Non-proliferative MacTel is followed with serial OCT and OCTA to detect structural changes early." },
            { icon: Syringe, title: "Anti-VEGF Injections", body: "When abnormal new vessels develop (proliferative MacTel), intravitreal anti-VEGF injections help stop leakage and preserve vision." },
            { icon: Sparkles, title: "Emerging Therapies", body: "Dr. Rehmani stays current with the latest neuroprotective and investigational therapies for MacTel type 2." },
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
        <h2 className="font-display text-3xl lg:text-4xl font-bold">Concerned about central vision changes?</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Early evaluation with advanced imaging is key to detecting and monitoring MacTel.
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

export default JuxtafovealTelangiectasiaPage;
