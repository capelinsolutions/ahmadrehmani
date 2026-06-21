import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import asrsLogo from "@/assets/societies/asrs.png";
import arvoLogo from "@/assets/societies/arvo.png";
import aaoLogo from "@/assets/societies/aao.png";

const societies = [
  {
    name: "ASRS",
    fullName: "American Society of Retina Specialists",
    logo: asrsLogo,
  },
  {
    name: "ARVO",
    fullName: "Association for Research in Vision and Ophthalmology",
    logo: arvoLogo,
  },
  {
    name: "AAO",
    fullName: "American Academy of Ophthalmology",
    logo: aaoLogo,
  },
];

const SocietiesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-20 lg:py-24 border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 fade-up">
          <span className="inline-block font-body text-sm text-accent font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-accent-pale rounded-full border border-accent/15">
            Professional Affiliations
          </span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold leading-tight">
            Recognized by the Leading Eye-Care Societies
          </h2>
          <p className="font-body text-muted-foreground mt-4 leading-relaxed">
            Dr. Rehmani is an active member of the foremost professional bodies in
            retinal medicine, vision research, and ophthalmology.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {societies.map((s, i) => (
            <div
              key={s.name}
              className="group flex flex-col items-center text-center fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-32 h-32 lg:w-36 lg:h-36 mb-5 flex items-center justify-center">
                <img
                  src={s.logo}
                  alt={`${s.fullName} logo`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground tracking-wide">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1 max-w-[26ch] leading-snug">
                {s.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;
