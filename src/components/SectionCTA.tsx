import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  to: string;
  label: string;
}

const SectionCTA = ({ to, label }: SectionCTAProps) => (
  <div className="flex justify-center py-10 bg-gradient-soft">
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
);

export default SectionCTA;
