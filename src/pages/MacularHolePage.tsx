import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight, Layers, Scissors, Film, Sparkles, Target } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import macularHoleOct from "@/assets/services/macular-hole-oct.jpg";

const MacularHolePage = () => {
  const aboutRef = useScrollAnimation();
  const treatRef = useScrollAnimation();

  return (
    <PageShell>
      <Helmet>
        <title>Macular Hole Treatment & Surgery | North Houston Retina</title>
        <meta
          name="description"
          content="Expert surgical repair of macular holes in Cypress, TX. Undergo modern sutureless vitrectomy with membrane peeling to release traction and close the hole."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/macular-hole" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">Macular Hole</span>
          </nav>

          <div className="max-w-4xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
              Conditions & Treatments
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight mt-3 text-foreground">
              Macular Hole
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              A small opening in the macula — the central retina responsible for sharp, detailed vision. Treated with advanced pars plana vitrectomy, membrane peeling, and gas bubble placement to promote closure and maximize visual recovery.
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

      {/* About Section */}
      <section ref={aboutRef} className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> The Condition
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            What is a Macular Hole?
          </h2>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-body text-gray-700 leading-[1.8] text-base lg:text-lg">
                A macular hole is a small opening that develops in the <strong>macula</strong>, the central portion of the retina responsible for sharp, detailed vision. Patients often notice <strong>blurred central vision, distortion, difficulty reading, or a dark spot</strong> in the center of their vision.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-md border border-border bg-background">
              <img
                src={macularHoleOct}
                alt="OCT scan showing a full-thickness macular hole with fluid-filled cystic spaces on the edges"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border">
                OCT scan — full-thickness macular hole showing separation of the central retinal layers
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section ref={treatRef} className="bg-gradient-soft py-16 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl fade-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Surgical Treatment
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Macular Hole Surgery (Vitrectomy)
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-gradient-bright border-2 border-accent rounded-2xl p-6 lg:p-7 shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-accent font-bold uppercase tracking-wider">Precision Micro-peeling</p>
                  <p className="font-display text-xl lg:text-2xl font-bold text-foreground">Releasing the Traction</p>
                </div>
              </div>
              <p className="font-body text-gray-700 leading-relaxed text-sm lg:text-base">
                The primary purpose of macular hole surgery (vitrectomy) is to <strong>release the physical traction</strong> pulling the edges of the hole apart. During this advanced outpatient microsurgery, Dr. Rehmani removes the vitreous gel and extremely delicately peels away the microscopic inner limiting membrane (ILM) on the retina's surface. 
              </p>
              <div className="mt-4 flex gap-3 items-start bg-accent-pale/20 p-4 rounded-xl border border-accent/10">
                <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="font-body text-xs text-gray-600 leading-relaxed">
                  <strong>The Gas Bubble:</strong> A temporary gas bubble is placed in the eye to act as a internal splint, pressing the macular edges together so the hole can close and heal over the following days.
                </p>
              </div>
            </div>

            {/* Video placeholder */}
            <figure className="rounded-2xl overflow-hidden border-2 border-dashed border-accent/40 bg-background shadow-sm">
              <div className="relative aspect-video bg-gradient-deep flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-3">
                  <Film className="w-7 h-7 text-accent" />
                </div>
                <p className="font-display text-lg font-bold text-foreground">Surgical Video Coming Soon</p>
                <p className="font-body text-xs text-muted-foreground mt-1 max-w-xs">
                  Dr. Rehmani peeling the membrane to fix a macular hole — clip to be added.
                </p>
              </div>
              <figcaption className="font-body text-xs text-muted-foreground px-3 py-2 border-t border-border bg-background">
                Video placeholder — surgical footage of macular hole membrane peel.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Experiencing distorted or blurry central vision?
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Early detection and prompt surgical intervention are key to achieving the highest visual recovery from a macular hole. Call our Cypress office or request an evaluation today.
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

export default MacularHolePage;