import { Phone } from "lucide-react";

const UrgencyBar = () => (
  <section style={{ background: "linear-gradient(90deg, #C0392B, #922B21)" }} className="py-4 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
      <p className="text-primary-foreground text-sm lg:text-base font-body">
        Experiencing sudden vision loss, flashes, or floaters? Retinal detachment is a medical emergency.
      </p>
      <a
        href="tel:+13465870223"
        className="group inline-flex items-center gap-2 bg-primary-foreground text-emergency px-5 py-2 rounded-lg font-body font-bold text-sm whitespace-nowrap transition-all hover:scale-105 hover:shadow-lg"
      >
        <Phone className="w-4 h-4 animate-bounce-slow group-hover:animate-none" />
        Call Now — (346) 587-0223
      </a>
    </div>
  </section>
);

export default UrgencyBar;
