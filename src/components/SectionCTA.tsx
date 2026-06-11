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
      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-white font-body font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
);

export default SectionCTA;
