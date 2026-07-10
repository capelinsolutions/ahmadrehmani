import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Syringe, ShieldCheck, Clock, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import AntiVegfMarquee from "@/components/AntiVegfMarquee";
import injectionImg from "@/assets/services/intravitreal-injection.jpg.asset.json";

const IntravitrealInjectionsPage = () => (
  <PageShell>
    <Helmet>
      <title>Intravitreal Injections — Cypress, TX | North Houston Retina</title>
      <meta
        name="description"
        content="In-office intravitreal injections with Dr. Ahmad Rehmani in Cypress, TX — anti-VEGF and steroid therapy for wet AMD, diabetic retinopathy, vein occlusions, and macular edema."
      />
      <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/intravitreal-injections" />
    </Helmet>

    <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
      <div className="container mx-auto px-4">
        <Breadcrumbs />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              In-Office Injections
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Intravitreal Injections
            </h1>
            <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
              Intravitreal injections deliver medication directly into the vitreous cavity to treat many
              vision-threatening retinal conditions — including <strong>wet age-related macular
              degeneration, diabetic macular edema, diabetic retinopathy, retinal vein occlusion,</strong>
              and inflammatory macular edema. The procedure is performed comfortably in the office under
              topical anesthesia and typically takes only minutes.
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

          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-xl">
              <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg bg-background">
                <img
                  src={injectionImg.url}
                  alt="Sterile intravitreal injection syringe with fine-gauge needle held by a gloved retina specialist"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                Fine-gauge sterile needle used for in-office intravitreal injections.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background py-14">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            What to Expect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "Sterile Preparation", body: "The eye is numbed and thoroughly disinfected with povidone-iodine to minimize any risk of infection." },
            { icon: Syringe, title: "Precise Delivery", body: "A very fine needle delivers medication into the vitreous cavity through the pars plana — most patients feel only mild pressure." },
            { icon: Clock, title: "Quick Recovery", body: "The visit typically takes 15–20 minutes. Mild redness or floaters may occur briefly after the injection." },
            { icon: Sparkles, title: "Ongoing Care", body: "Treatment intervals are personalized based on OCT imaging and disease activity to maintain the best vision with the fewest injections." },
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

        <AntiVegfMarquee />
      </div>
    </section>

    <section className="bg-gradient-primary border-y border-border py-14">
      <div className="container mx-auto px-4 text-center text-foreground">
        <h2 className="font-display text-3xl lg:text-4xl font-bold">Same-day injection availability</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
          Dr. Rehmani offers same-day evaluation and injection treatment when clinically indicated.
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

export default IntravitrealInjectionsPage;
