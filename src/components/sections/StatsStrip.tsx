import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  { number: "5.0", label: "Google Star Rating" },
  { number: "28", label: "U.S. Clinical Trials (Sub-Investigator)" },
  { number: "10+", label: "Peer-Reviewed Publications" },
  { number: "Fellowship", label: "Vitreoretinal Trained" },
];

const StatsStrip = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="bg-primary py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
          {metrics.map((m, i) => (
            <div key={m.label} className={`text-center ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}>
              <p className="font-display text-gold-light text-4xl lg:text-[42px] font-bold">{m.number}</p>
              <p className="font-body text-primary-foreground/70 text-xs lg:text-[13px] mt-2 uppercase tracking-wide">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
