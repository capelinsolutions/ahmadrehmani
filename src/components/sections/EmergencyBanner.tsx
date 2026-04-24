import { Phone } from "lucide-react";

const EmergencyBanner = () => (
  <div className="bg-emergency text-primary-foreground py-2 px-4 text-center text-sm font-body z-50 relative">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
      <span>Sudden flashes of light, new floaters, or a dark shadow in your vision? This may be a retinal emergency.</span>
      <a
        href="tel:+13465870223"
        className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-2 hover:opacity-90 whitespace-nowrap"
        aria-label="Call immediately for retinal emergency"
      >
        <Phone className="w-3.5 h-3.5" />
        Call immediately: (346) 587-0223
      </a>
    </div>
  </div>
);

export default EmergencyBanner;
