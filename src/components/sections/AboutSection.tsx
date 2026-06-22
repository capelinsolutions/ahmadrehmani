import { Link } from "react-router-dom";
import drRehmaniAsset from "@/assets/dr-rehmani.jpg.asset.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AboutSectionProps {
  compact?: boolean;
}

const AboutSection = ({ compact = false }: AboutSectionProps) => {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Portrait Photo */}
          <div className="lg:col-span-5 fade-up">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border/40 shadow-sm bg-muted">
              <img 
                src={drRehmaniAsset.url} 
                alt="Dr. Ahmad Rehmani, D.O. — Vitreoretinal Specialist, North Houston Retina" 
                className="w-full h-full object-cover object-center" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-6 fade-up">
            <div className="space-y-3">
              <span className="font-body text-xs text-accent font-bold uppercase tracking-[0.2em] block">
                Founding Surgeon
              </span>
              <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Expertise in Complex Vitreoretinal Care
              </h2>
            </div>

            <div className="space-y-5 font-body text-muted-foreground text-base leading-relaxed max-w-[55ch]">
              <p>
                Dr. Ahmad Rehmani is the founder of <strong className="text-foreground font-semibold">North Houston Retina</strong> and the founding vitreoretinal surgeon at North Cypress Surgery Center. Dedicated exclusively to diseases and surgery of the retina and vitreous, he brings academic-level expertise and state-of-the-art surgical treatments directly to the Cypress and Northwest Houston communities.
              </p>
              <p>
                He is highly specialized in both medical and advanced microsurgical management of complex retinal diseases, including lens dislocations, retinal detachments, and macular holes. His clinical expertise also spans common conditions such as dense cataracts, epiretinal membranes, floaters, and vitreous hemorrhage, ensuring each patient receives prompt, world-class specialized care.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                to="/doctor/ahmad-rehmani" 
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent hover:text-accent-light transition-colors"
              >
                View Full Professional Profile →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
