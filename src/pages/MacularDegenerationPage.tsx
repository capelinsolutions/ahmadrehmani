import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Sparkles, Droplet, Sun, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import wetOct from "@/assets/services/wet-amd-oct.jpg";
import wetFundus from "@/assets/services/wet-amd-fundus.jpg";
import valedaDevice from "@/assets/services/valeda-device.jpg";
import gaFundus from "@/assets/services/geographic-atrophy-fundus.jpg";

const antiVegfMeds = ["Vabysmo", "Eylea HD", "Eylea", "Avastin", "Lucentis", "Susvimo"];

const MacularDegenerationPage = () => {
  const wetRef = useScrollAnimation();
  const dryRef = useScrollAnimation();
  const gaRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Macular Degeneration — Wet, Dry & Geographic Atrophy | North Houston Retina</title>
        <meta name="description" content="Comprehensive care for wet AMD, dry AMD, and geographic atrophy in Cypress, TX. The first retina center in NW Houston to offer Valeda light therapy." />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/macular-degeneration" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">Macular Degeneration</span>
          </nav>

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Conditions & Treatments</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">Macular Degeneration</h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              Age-related macular degeneration (AMD) is the leading cause of central vision loss in adults over 50. North Houston Retina offers the full spectrum of modern AMD care — from same-day anti-VEGF injections for wet AMD to the newest FDA-approved therapies for dry AMD and geographic atrophy.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold">
                <Phone className="w-4 h-4" />
                Call (346) 587-0223
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium">
                Request Consultation
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
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Wet Macular Degeneration</h2>

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
          <div className="mt-12">
            <p className="font-body text-xs text-accent font-semibold uppercase tracking-wider text-center mb-5">Anti-VEGF Medications We Offer</p>
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex animate-marquee space-x-8 items-center min-w-full shrink-0" aria-hidden={dup === 1}>
                  {antiVegfMeds.map((name) => (
                    <div
                      key={`${dup}-${name}`}
                      className="flex-shrink-0 w-44 h-20 flex items-center justify-center bg-background rounded-lg shadow-sm border border-border px-6"
                    >
                      <span className="font-display text-xl font-semibold text-primary tracking-tight whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRY AMD — VALEDA */}
      <section ref={dryRef} className="bg-gradient-soft py-16 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" /> Dry AMD
            </span>
            <span className="inline-flex items-center gap-2 bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> First in NW Houston
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Dry Macular Degeneration</h2>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <figure className="rounded-2xl overflow-hidden shadow-lg border-2 border-accent/30 bg-background">
              <img src={valedaDevice} alt="Valeda Light Delivery System for dry AMD photobiomodulation" loading="lazy" className="w-full h-64 lg:h-80 object-cover" />
              <figcaption className="font-body text-xs text-muted-foreground px-4 py-3 border-t border-border bg-accent-pale/30">
                <strong className="text-primary">Valeda Light Delivery System</strong> — FDA-approved photobiomodulation for intermediate dry AMD
              </figcaption>
            </figure>

            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Dry AMD develops slowly as the macula thins and tiny yellow deposits called drusen accumulate beneath the retina. Most patients notice gradual blurring of central vision, difficulty reading in low light, or faded colors. Until recently, dry AMD had no targeted treatment — today, that has changed.
              </p>

              <div className="mt-7 bg-gradient-bright border-2 border-accent rounded-2xl p-6 lg:p-7 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-accent font-bold uppercase tracking-wider">Newest Therapy</p>
                    <p className="font-display text-xl lg:text-2xl font-bold text-foreground">Valeda Light Therapy</p>
                  </div>
                </div>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  <strong>We are the first retina center in Northwest Houston to offer Valeda</strong> — a newly FDA-approved photobiomodulation treatment for intermediate dry AMD. Valeda uses precise wavelengths of light to support cellular health in the retina, helping protect vision before it is lost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC ATROPHY */}
      <section ref={gaRef} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Advanced Dry AMD
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Geographic Atrophy (GA)</h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Geographic atrophy is the advanced form of dry AMD, where well-defined patches of the macula lose function permanently. Once GA reaches the center of vision, reading and face recognition become severely impaired.
              </p>
              <div className="mt-7 bg-accent-pale/40 border-l-4 border-primary rounded-r-xl p-5 lg:p-6">
                <p className="font-display text-lg lg:text-xl font-bold text-foreground mb-2">Treatment: Complement Inhibitor Injections</p>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  We offer GA treatment with FDA-approved complement inhibitor injections (Syfovre, Izervay) shown to slow the growth of vision-threatening atrophy. Early intervention is key — the sooner treatment begins, the more central vision can be preserved.
                </p>
              </div>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img src={gaFundus} alt="Fundus photograph of geographic atrophy in advanced dry AMD" loading="lazy" className="w-full h-64 lg:h-80 object-cover" />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">Fundus photo — geographic atrophy of the macula</figcaption>
            </figure>
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
