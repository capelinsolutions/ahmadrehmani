import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const locations = [
  {
    badge: "Primary Location",
    name: "Wayne, New Jersey",
    subtitle: "Retina Center NJ — Morris/Passaic County",
    address: "1 Corporate Drive, Wayne, NJ 07470",
    phone: "(973) 987-3380",
    hours: "Mon–Fri: 8:00 AM – 5:00 PM",
    maps: "https://maps.google.com/?q=1+Corporate+Drive+Wayne+NJ+07470",
    rating: "★★★★★ 5.0 · 155+ Google Reviews",
  },
  {
    badge: "Texas Location",
    name: "Cypress, Texas",
    subtitle: "Near Houston — NW Houston Corridor",
    address: "27700 NW Freeway, Cypress, TX 77433",
    phone: "(973) 987-3380",
    hours: "Call office for current TX hours",
    maps: "https://maps.google.com/?q=27700+NW+Freeway+Cypress+TX+77433",
    note: "NJ's top-rated retina specialist now accepting patients in Cypress, TX.",
  },
];

const LocationsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="locations" ref={ref} className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-gold-light font-semibold uppercase tracking-wider">Two Convenient Locations</span>
          <h2 className="font-display text-primary-foreground text-3xl lg:text-4xl font-bold mt-3">
            Expert Retinal Care in New Jersey & Texas
          </h2>
          <p className="font-body text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Dr. Rehmani serves patients across two states — same subspecialty expertise, two locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="fade-up rounded-2xl p-6 lg:p-8 space-y-5 hover:border-accent/50 transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="inline-block bg-accent/20 text-accent-light text-xs font-body font-semibold px-3 py-1 rounded-full">
                {loc.badge}
              </span>
              <div>
                <h3 className="font-display text-primary-foreground text-2xl font-bold">{loc.name}</h3>
                <p className="font-body text-primary-foreground/50 text-sm mt-1">{loc.subtitle}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent-light mt-0.5" />
                  <span className="font-body text-primary-foreground/80 text-sm">{loc.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-light" />
                  <a href="tel:+19739873380" className="font-body text-primary-foreground/80 text-sm hover:text-primary-foreground">{loc.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-light" />
                  <span className="font-body text-primary-foreground/80 text-sm">{loc.hours}</span>
                </div>
              </div>

              {loc.rating && (
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-gold-light fill-gold-light" />
                  <span className="font-body text-gold-light text-sm">{loc.rating}</span>
                </div>
              )}
              {loc.note && <p className="font-body text-primary-foreground/50 text-sm italic">{loc.note}</p>}

              <div className="flex gap-3 pt-2">
                <a href="tel:+19739873380" className="flex-1 bg-accent hover:bg-accent-light text-accent-foreground py-2.5 rounded-lg font-body font-semibold text-sm text-center transition-colors">
                  Call Now
                </a>
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-primary-foreground/20 text-primary-foreground/80 hover:bg-white/10 py-2.5 rounded-lg font-body font-medium text-sm text-center transition-colors inline-flex items-center justify-center gap-1"
                >
                  Get Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
