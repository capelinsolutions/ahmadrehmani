import SectionCTA from "@/components/SectionCTA";
import { useRef } from "react";
import { Star, CheckCircle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
  {
    text: "From the first visit, I felt at ease. Dr. Rehmani explained every step of my retinal vein occlusion treatment with patience and clarity. The office staff is welcoming and the appointments run on time. I trust him completely with my vision.",
    name: "Robert K.",
    location: "Google Review · Tomball, TX",
  },
  {
    text: "I was nervous about getting eye injections, but Dr. Rehmani made the process virtually painless and the results have been remarkable. He truly listens and tailors care to each patient. Best retina specialist experience I've ever had.",
    name: "Diana L.",
    location: "Google Review · Jersey Village, TX",
  },
];

const ReviewCard = ({ r }: { r: typeof reviews[number] }) => (
  <div className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col">
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
      ))}
    </div>
    <p className="font-body text-sm text-gray-600 italic leading-relaxed mb-5 flex-1">"{r.text}"</p>
    <div className="flex items-center justify-between mt-auto">
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
);

const ReviewsSection = () => {
  const ref = useScrollAnimation();
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="fade-up px-2"
        >
          <CarouselContent>
            {reviews.map((r) => (
              <CarouselItem key={r.name} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <ReviewCard r={r} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

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