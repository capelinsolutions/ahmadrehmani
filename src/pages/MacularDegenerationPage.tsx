import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Droplet } from "lucide-react";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import wetOct from "@/assets/services/wet-amd-oct.jpg";
import wetFundus from "@/assets/services/wet-amd-fundus-clean.jpg";
import avastin from "@/assets/services/meds/avastin.png";
import lucentis from "@/assets/services/meds/lucentis.png";
import eylea from "@/assets/services/meds/eylea.png";
import eyleaHd from "@/assets/services/meds/eylea-hd.png";
import vabysmo from "@/assets/services/meds/vabysmo.png";
import pavblu from "@/assets/services/meds/pavblu.png";

const antiVegfMeds = [
  { name: "Avastin", img: avastin },
  { name: "Lucentis", img: lucentis },
  { name: "Eylea", img: eylea },
  { name: "Eylea HD", img: eyleaHd },
  { name: "Vabysmo", img: vabysmo },
  { name: "Pavblu", img: pavblu },
];

const MacularDegenerationPage = () => {
  const wetRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Wet Macular Degeneration — Anti-VEGF Treatment | North Houston Retina</title>
        <meta name="description" content="Same-day anti-VEGF injections for wet AMD in Cypress, TX — including Vabysmo, Eylea HD, Eylea, Pavblu, Lucentis, and Avastin." />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/macular-degeneration" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Conditions & Treatments</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">Wet Macular Degeneration</h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              Wet AMD can cause rapid, irreversible loss of central vision if untreated. North Houston Retina offers same-day evaluation and access to the newest FDA-approved anti-VEGF injections to preserve — and often improve — sight.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold">
                <Phone className="w-4 h-4" />
                Call (346) 587-0223
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium">
                Request Consultation
              </Link>
              <Link to="/services/dry-macular-degeneration" className="inline-flex items-center gap-2 border border-accent/40 text-accent hover:bg-accent-pale/50 px-5 py-3 rounded-lg font-body font-medium">
                Dry Macular Degeneration →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WET AMD */}
      <section ref={wetRef} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <Droplet className="w-3.5 h-3.5" /> Wet AMD
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">About Wet Macular Degeneration</h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Wet AMD occurs when abnormal blood vessels grow beneath the retina and leak fluid or blood into the macula — the part of the eye responsible for sharp, central vision. Without prompt treatment, this leakage causes rapid distortion and loss of central vision, making it difficult to read, drive, or recognize faces.
              </p>

              <div className="mt-7 bg-accent-pale/40 border-l-4 border-accent rounded-r-xl p-5 lg:p-6">
                <p className="font-display text-lg lg:text-xl font-bold text-foreground mb-2">Treatment: Intravitreal Anti-VEGF Injections</p>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  Wet AMD is treated with in-office injections of anti-VEGF medication that stop abnormal vessels from leaking and help preserve — and often improve — vision. <strong>North Houston Retina offers the newest FDA-approved anti-VEGF medications</strong>, so every patient is matched to the longest-lasting, most effective option for their eye.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
                <img src={wetOct} alt="OCT scan showing wet macular degeneration with subretinal fluid" loading="lazy" className="w-full h-44 lg:h-56 object-cover" />
                <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">OCT scan — subretinal fluid</figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
                <img src={wetFundus} alt="Fundus photograph of a retina with wet AMD hemorrhage" loading="lazy" className="w-full h-44 lg:h-56 object-cover" />
                <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">Fundus photo — macular hemorrhage</figcaption>
              </figure>
            </div>
          </div>

          {/* Anti-VEGF marquee */}
          <div className="mt-14">
            <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider text-center mb-5">Anti-VEGF Medications We Offer</p>
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex animate-marquee space-x-8 items-center min-w-full shrink-0" aria-hidden={dup === 1}>
                  {antiVegfMeds.map((med) => (
                    <div
                      key={`${dup}-${med.name}`}
                      className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-background rounded-xl shadow-sm border border-border px-6"
                    >
                      <img
                        src={med.img}
                        alt={`${med.name} brand logo`}
                        loading="lazy"
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Concerned about your central vision?</h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Same-day evaluation available for sudden distortion or vision loss. Call our Cypress office or request a consultation online.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold">
              <Phone className="w-4 h-4" />
              Call (346) 587-0223
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-background hover:bg-secondary text-foreground px-6 py-3 rounded-lg font-body font-semibold border border-border">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default MacularDegenerationPage;
