import { Star, FlaskConical, BookOpen, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  { icon: Star, number: "5.0", label: "Google Star Rating" },
  { icon: FlaskConical, number: "28", label: "U.S. Clinical Trials (Sub-Investigator)" },
  { icon: BookOpen, number: "10+", label: "Peer-Reviewed Publications" },
  { icon: GraduationCap, number: "Fellowship", label: "Vitreoretinal Trained" },
];

const StatsStrip = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="bg-gradient-primary py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className={`group text-center transition-transform duration-300 hover:-translate-y-1 ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}
              >
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-gold-light transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-display text-gold-light text-4xl lg:text-[42px] font-bold">{m.number}</p>
                <p className="font-body text-primary-foreground/70 text-xs lg:text-[13px] mt-2 uppercase tracking-wide">{m.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
