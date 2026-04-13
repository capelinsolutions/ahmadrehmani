import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "What conditions does Dr. Rehmani treat?", a: "Dr. Rehmani specializes in diseases of the retina and vitreous, including age-related macular degeneration (AMD), diabetic retinopathy, retinal detachment, retinal tears, vitreous hemorrhage, and complex cataract surgery. He also evaluates and treats glaucoma and performs comprehensive eye examinations." },
  { q: "Does Dr. Rehmani accept Medicare?", a: "Yes. Dr. Rehmani accepts Medicare Part A, Medicare Part B, and most Medicare Advantage (Part C) plans. He also accepts Aetna, Cigna, Blue Cross Blue Shield, United Healthcare, and most major commercial insurance. Please call (973) 987-3380 to verify your specific plan." },
  { q: "What is a vitreoretinal specialist, and do I need one?", a: "A vitreoretinal specialist is an ophthalmologist who completed additional fellowship training in diseases and surgery of the retina and vitreous humor. If you have been diagnosed with macular degeneration, diabetic retinopathy, a retinal tear or detachment, or any other retinal condition, you benefit from seeing a specialist." },
  { q: "How do I know if I'm having a retinal emergency?", a: "Seek immediate care if you experience: sudden onset of new floaters, flashes of light especially in peripheral vision, a dark curtain or shadow across your vision, or sudden blurred or distorted vision. These symptoms may indicate retinal detachment. Call (973) 987-3380 immediately." },
  { q: "Are retinal injections painful? What should I expect?", a: "Anti-VEGF injections are performed with numbing drops that minimize discomfort. Most patients report feeling only light pressure. The procedure takes just a few minutes in the office, and patients typically return to normal activities the same day." },
  { q: "How do I schedule an appointment in NJ or TX?", a: "The easiest way to schedule is to call (973) 987-3380. Our front desk team will confirm your insurance, preferred location, and find the earliest available appointment. You can also submit the contact form below." },
  { q: "What is the recovery after cataract surgery?", a: "Most patients notice improved vision within 24–48 hours and return to light activities within a day or two. You will use prescription eye drops for several weeks, and avoid strenuous activity for 2–4 weeks." },
  { q: "Does Dr. Rehmani offer second opinions?", a: "Absolutely. Dr. Rehmani welcomes patients who received a retinal diagnosis elsewhere and want confirmation from a dedicated vitreoretinal specialist. Please bring any prior imaging (OCT scans, fundus photos) and reports to your appointment." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollAnimation();

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  const renderFaq = (faq: typeof faqs[0], i: number) => (
    <div key={i} className="bg-background border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpenIndex(openIndex === i ? null : i)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={openIndex === i}
      >
        <span className={`font-body font-medium text-sm pr-4 ${openIndex === i ? "text-accent" : "text-foreground"}`}>
          {faq.q}
        </span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5 px-5" : "max-h-0"}`}>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );

  return (
    <section id="faq" ref={ref} className="bg-off-white py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-[900px]">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            Common Questions About Retinal Care & Dr. Rehmani
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 fade-up">
          <div className="space-y-4">{col1.map((f, i) => renderFaq(f, i))}</div>
          <div className="space-y-4">{col2.map((f, i) => renderFaq(f, i + half))}</div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
