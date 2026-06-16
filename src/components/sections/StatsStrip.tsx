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
    <section ref={ref} className="bg-white border-y border-gray-200 py-6 lg:py-8 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto fade-up">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className={`flex items-center gap-4 px-4 py-2 group transition-all duration-300 ${
                  i < 3 ? "lg:border-r lg:border-gray-100" : ""
                }`}
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <span className="font-body text-base lg:text-[15px] font-bold text-gray-900 tracking-tight leading-snug block">
                    {m.number} <span className="font-normal text-gray-600">{m.label}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
