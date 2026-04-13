import { Phone } from "lucide-react";

const UrgencyBar = () => (
  <section style={{ background: "linear-gradient(90deg, #C0392B, #922B21)" }} className="py-4 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
      <p className="text-primary-foreground text-sm lg:text-base font-body">
        Experiencing sudden vision loss, flashes, or floaters? Retinal detachment is a medical emergency.
      </p>
      <a
        href="tel:+19739873380"
        className="inline-flex items-center gap-2 bg-primary-foreground text-emergency px-5 py-2 rounded-lg font-body font-bold text-sm whitespace-nowrap transition-transform hover:scale-105"
      >
        <Phone className="w-4 h-4" />
        Call Now — (973) 987-3380
      </a>
    </div>
  </section>
);

export default UrgencyBar;
