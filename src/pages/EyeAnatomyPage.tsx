import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MousePointer2, Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";

const EyeAnatomyPage = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Interactive Eye Anatomy | Retina Center NJ</title>
        <meta
          name="description"
          content="Explore a clinically detailed, interactive 3D model of the human eye. Rotate, zoom, and reveal the cornea, lens, retina, macula, optic disc and more."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/eye-anatomy" />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-14 relative">
          <div className="max-w-3xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
              Interactive Anatomy
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              The Human Eye, <span className="italic text-accent">Layer by Layer</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A clinically detailed 3D model of the eye — from the cornea and iris to the
              retina, macula and optic nerve. Drag to rotate, scroll to zoom, and hover any
              structure to learn what it does.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-body font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-pale text-accent-ink border border-accent/20">
                <MousePointer2 className="w-3.5 h-3.5" /> Drag · Zoom · Hover
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border">
                <Sparkles className="w-3.5 h-3.5 text-accent" /> Built for patients &amp; students
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MODEL */}
      <section className="bg-gradient-to-b from-background via-accent-pale/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-foreground/10 border border-border bg-foreground">
            <iframe
              src="/eye-anatomy-model.html"
              title="Interactive 3D model of the human eye"
              loading="lazy"
              className="block w-full h-[720px] md:h-[780px] border-0 bg-transparent"
            />
          </div>
          <p className="mt-4 text-center font-body text-xs text-muted-foreground">
            Tip: use <span className="font-semibold text-foreground">Lock interior open</span> to keep
            the inner structures visible while you rotate the model.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Questions about what you saw?
            </h2>
            <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
              Understanding your eye is the first step. Dr. Rehmani translates complex
              retinal anatomy into a clear plan built around your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-body text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95 transition-all mt-8"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default EyeAnatomyPage;
