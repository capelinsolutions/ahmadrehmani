import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Sun, Sparkles, ShieldCheck, Syringe, CalendarClock } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dryFundus from "@/assets/services/dry-amd-fundus.jpg";
import valedaDevice from "@/assets/services/valeda-light-delivery-system.png.asset.json";
import gaFundus from "@/assets/services/geographic-atrophy-fundus.jpg";

const DryMacularDegenerationPage = () => {
  const dryRef = useScrollAnimation();
  const valedaRef = useScrollAnimation();
  const gaRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Dry Macular Degeneration & Valeda Light Therapy | North Houston Retina</title>
        <meta name="description" content="Dry AMD evaluation, drusen monitoring, and Valeda photobiomodulation therapy in Cypress, TX — the first retina center in NW Houston to offer Valeda." />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/dry-macular-degeneration" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">Dry Macular Degeneration</span>
          </nav>

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Conditions & Treatments</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">Dry Macular Degeneration</h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              Dry AMD develops slowly as the macula thins and drusen accumulate beneath the retina. With the newest therapies — including <strong>Valeda light therapy</strong> for intermediate dry AMD and complement inhibitor injections for geographic atrophy — we can now slow progression and help preserve central vision.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              <a href="tel:+13465870223" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold">
                <Phone className="w-4 h-4" />
                Call (346) 587-0223
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium">
                Request Consultation
              </Link>
              <Link to="/services/macular-degeneration" className="inline-flex items-center gap-2 border border-accent/40 text-accent hover:bg-accent-pale/50 px-5 py-3 rounded-lg font-body font-medium">
                Wet Macular Degeneration →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DRY AMD overview */}
      <section ref={dryRef} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" /> Dry AMD
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">About Dry Macular Degeneration</h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Dry AMD is the most common form of age-related macular degeneration. Tiny yellow deposits called <strong>drusen</strong> build up under the retina, the macula gradually thins, and central vision becomes blurred — especially in low light. Most patients notice difficulty reading, faded colors, or a soft blur in the center of their sight.
              </p>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg mt-4">
                We use ultra-widefield fundus imaging and high-resolution OCT to detect drusen, pigmentary changes, and early geographic atrophy, then build a personalized monitoring and treatment plan.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img src={dryFundus} alt="Fundus photograph of a retina with dry AMD showing scattered yellow drusen" loading="lazy" className="w-full h-64 lg:h-80 object-cover" />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">Fundus photo — drusen of dry AMD</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* VALEDA LIGHT THERAPY */}
      <section ref={valedaRef} className="bg-gradient-soft py-16 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> First in NW Houston
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Valeda Light Therapy</h2>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <figure className="rounded-2xl overflow-hidden shadow-lg border-2 border-accent/30 bg-background">
              <img src={valedaDevice} alt="Valeda Light Delivery System photobiomodulation device for dry AMD" loading="lazy" className="w-full h-64 lg:h-80 object-cover" />
              <figcaption className="font-body text-xs text-muted-foreground px-4 py-3 border-t border-border bg-accent-pale/30">
                <strong className="text-primary">Valeda Light Delivery System</strong> — FDA-authorized photobiomodulation for intermediate dry AMD
              </figcaption>
            </figure>

            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                Valeda is the first and only FDA-authorized treatment for dry AMD shown to improve and maintain vision. It uses precise wavelengths of yellow, red, and near-infrared light — a process called <strong>photobiomodulation</strong> — to energize mitochondria in retinal cells, reduce drusen, and support long-term retinal health.
              </p>

              <div className="mt-7 bg-gradient-bright border-2 border-accent rounded-2xl p-6 lg:p-7 shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-accent font-bold uppercase tracking-wider">Newest Therapy</p>
                    <p className="font-display text-xl lg:text-2xl font-bold text-foreground">Painless, in-office, drug-free</p>
                  </div>
                </div>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                  Each session takes only a few minutes. <strong>North Houston Retina is the first retina center in Northwest Houston to offer Valeda</strong>, giving our patients access to this breakthrough therapy without travelling into the medical center.
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
              <div className="mt-7">
                <p className="font-display text-lg lg:text-xl font-bold text-foreground mb-2">Treatment: Complement Inhibitor Injections</p>
                <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base mb-5">
                  FDA-approved complement inhibitor injections slow the growth of vision-threatening atrophy. Early intervention helps preserve more central vision.
                </p>

                <Tabs defaultValue="syfovre" className="w-full">
                  <TabsList className="grid grid-cols-2 w-full bg-accent-pale/60 p-1 h-auto rounded-xl">
                    <TabsTrigger
                      value="syfovre"
                      className="font-display font-bold text-sm lg:text-base py-2.5 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                      Syfovre
                    </TabsTrigger>
                    <TabsTrigger
                      value="izervay"
                      className="font-display font-bold text-sm lg:text-base py-2.5 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                      Izervay
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="syfovre" className="mt-5">
                    <div className="bg-background border border-border rounded-2xl p-5 lg:p-6 shadow-sm">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Syringe className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-body text-[11px] text-primary font-bold uppercase tracking-wider">Pegcetacoplan</p>
                          <p className="font-display text-lg font-bold text-foreground">Syfovre® (Apellis)</p>
                        </div>
                      </div>
                      <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                        A targeted C3 complement inhibitor — the first FDA-approved therapy for geographic atrophy. Demonstrated reduction in GA lesion growth across landmark OAKS and DERBY trials.
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-xs font-body text-muted-foreground">
                        <CalendarClock className="w-3.5 h-3.5 text-accent" />
                        Dosed every 25–60 days, individualized to lesion progression.
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="izervay" className="mt-5">
                    <div className="bg-background border border-border rounded-2xl p-5 lg:p-6 shadow-sm">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                          <Syringe className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-body text-[11px] text-accent font-bold uppercase tracking-wider">Avacincaptad Pegol</p>
                          <p className="font-display text-lg font-bold text-foreground">Izervay® (Astellas)</p>
                        </div>
                      </div>
                      <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                        A C5 complement inhibitor approved for geographic atrophy secondary to dry AMD. GATHER1 and GATHER2 trials showed a meaningful slowing of GA growth as early as the first six months of therapy.
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-xs font-body text-muted-foreground">
                        <CalendarClock className="w-3.5 h-3.5 text-accent" />
                        Monthly intravitreal injection schedule.
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
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
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Ask about Valeda light therapy</h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Find out whether you're a candidate for Valeda or complement-inhibitor therapy. Call our Cypress office or request a consultation online.
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

export default DryMacularDegenerationPage;
