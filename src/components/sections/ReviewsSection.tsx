import { Star, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    text: "Dr. Rehmani is an exceptional physician. He took the time to explain my macular degeneration diagnosis in a way I could actually understand, and his injection treatment has genuinely slowed my vision loss. I feel completely confident in his care.",
    name: "Margaret R.",
    location: "Google Review · Cypress, TX",
  },
  {
    text: "Dr. Rehmani caught a retinal issue my optometrist had been monitoring for months. He explained everything clearly, the office is efficient, and the staff are warm and professional. So glad we have a true retina specialist in Cypress now.",
    name: "James T.",
    location: "Google Review · Bridgeland, TX",
  },
  {
    text: "Always a pleasure — warm welcome, family-oriented, detailed and wonderful service. My father was referred here after a retinal detachment scare and Dr. Rehmani handled everything calmly and expertly. His explanation of the procedure gave us complete peace of mind.",
    name: "Sandra C.",
    location: "Google Review · Katy, TX",
  },
];

const ReviewsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section id="reviews" ref={ref} className="bg-off-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 fade-up">
          <div>
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Patient Reviews</span>
            <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
              What Our Patients Say About Dr. Rehmani
            </h2>
          </div>
          <div className="bg-background rounded-2xl shadow-sm px-6 py-4 flex items-center gap-4 shrink-0">
            <span className="font-display text-4xl font-bold text-foreground">5.0</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mt-0.5">Google Verified · Cypress, TX</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="fade-up bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-gray-600 italic leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.location}</p>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-body">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-up">
          <a
            href="https://www.google.com/maps/search/North+Houston+Retina+Cypress+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            Read All Google Reviews
          </a>
        </div>
        <SectionCTA to="/reviews" label="Read More Patient Reviews" />
      </div>
    </section>
  );
};

export default ReviewsSection;
