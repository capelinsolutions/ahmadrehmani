import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  to: string;
  label: string;
  className?: string;
}

const SectionCTA = ({ to, label, className = "" }: SectionCTAProps) => (
  <div className={`mt-12 flex justify-center fade-up ${className}`}>
    <Link
      to={to}
      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-white font-body font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
    >
      {label}
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  </div>
);

export default SectionCTA;
