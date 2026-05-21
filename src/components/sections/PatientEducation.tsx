import { Eye, Heart, AlertTriangle, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const articles = [
  {
    category: "Macular Degeneration",
    categoryColor: "bg-accent",
    title: "What Is Age-Related Macular Degeneration (AMD)? Signs, Stages & Treatment",
    excerpt: "AMD affects the macula — the central part of your retina responsible for sharp, detailed vision. Learn to recognize the early signs of both dry and wet AMD.",
    readTime: "5 min read",
    icon: Eye,
    gradient: "linear-gradient(135deg, hsl(215 65% 22%), hsl(210 80% 38%))",
  },
  {
    category: "Diabetic Eye Disease",
    categoryColor: "bg-accent",
    title: "Diabetic Retinopathy: Why Diabetes Is the Leading Cause of Blindness",
    excerpt: "High blood sugar damages the tiny blood vessels in your retina — often silently. Annual dilated retinal exams can detect damage early.",
    readTime: "6 min read",
    icon: Heart,
    gradient: "linear-gradient(135deg, hsl(215 65% 22%), hsl(200 90% 40%))",
  },
  {
    category: "Warning Signs",
    categoryColor: "bg-emergency",
    title: "Flashes, Floaters & Shadow in Your Vision: When to See a Retina Specialist",
    excerpt: "A sudden increase in eye floaters, flashes of light, or a curtain-like shadow can be warning signs of retinal detachment — a sight-threatening emergency.",
    readTime: "4 min read",
    icon: AlertTriangle,
    gradient: "linear-gradient(135deg, hsl(215 65% 22%), #C0392B)",
  },
];

const PatientEducation = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Patient Education</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            Understanding Your Retinal Health
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Knowledge is the first step toward protecting your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className="fade-up group bg-background border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 flex items-center justify-center" style={{ background: a.gradient }}>
                <a.icon className="w-16 h-16 text-primary-foreground/20" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${a.categoryColor} text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full`}>
                    {a.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs font-body">
                    <Clock className="w-3.5 h-3.5" /> {a.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{a.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <button className="inline-flex items-center gap-1 text-accent font-body text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientEducation;
