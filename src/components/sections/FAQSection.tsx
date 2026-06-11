import SectionCTA from "@/components/SectionCTA";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Where is Dr. Rehmani's office located?", a: "Dr. Rehmani's practice — North Houston Retina, PLLC — is located at 27700 Northwest Freeway, Suite 355, Cypress, TX 77433, conveniently on US-290 serving Cypress, Bridgeland, Katy, Tomball, and the Northwest Houston corridor. Office hours are Monday through Friday, 8:00 AM – 5:00 PM." },
  { q: "What conditions does Dr. Rehmani treat?", a: "Dr. Rehmani specializes exclusively in diseases of the retina and vitreous, including age-related macular degeneration (AMD), diabetic retinopathy, retinal detachment, retinal tears, vitreous hemorrhage, posterior vitreous detachment (PVD), and macular holes. He also performs comprehensive retinal imaging and offers specialist second opinions." },
  { q: "What insurance does Dr. Rehmani accept?", a: "We currently accept Aetna, Wellpoint, and Multiplan (PHCS network). We are actively credentialing with Medicare, Medicare Advantage, and the MHMD network — including Blue Cross Blue Shield, Cigna, United Healthcare, and Community Health Choice — and expect to be in-network within the next 3 months. Please call (346) 587-0223 to verify your specific plan." },
  { q: "What is a vitreoretinal specialist, and do I need one?", a: "A vitreoretinal specialist is an ophthalmologist who completed additional fellowship training in diseases and surgery of the retina and vitreous. Dr. Rehmani completed his Surgical Vitreoretinal Fellowship at the University of Texas Medical Branch (UTMB) in Houston. If your optometrist or general ophthalmologist has diagnosed macular degeneration, diabetic retinopathy, a retinal tear, or a retinal detachment, you should be seen by a retina specialist." },
  { q: "How do I know if I'm having a retinal emergency?", a: "Seek immediate care if you experience: sudden onset of new floaters or a dramatic increase in existing floaters, flashes of light especially in peripheral vision, a dark curtain or shadow across any part of your vision, or sudden blurred or distorted vision. These symptoms may indicate retinal detachment. Call (346) 587-0223 immediately — same-day evaluation available." },
  { q: "Are anti-VEGF retinal injections painful?", a: "Anti-VEGF injections (Eylea, Vabysmo, Lucentis, Avastin) are performed with numbing drops that minimize discomfort. Most patients report feeling only light pressure for a few seconds. The procedure takes just a few minutes in the office, and patients typically return to normal activities the same day." },
  { q: "Does Dr. Rehmani participate in clinical trials?", a: "Yes. Dr. Rehmani is currently a sub-investigator on 28 active U.S. clinical trials in retinal disease, with a focus on next-generation therapies for AMD and diabetic macular edema — including longer-acting injectables, sustained-release implants, and gene therapy. Qualifying patients may receive cutting-edge therapies before they are FDA-approved. Ask about trial eligibility at your visit." },
  { q: "How do I schedule an appointment?", a: "The easiest way to schedule is to call (346) 587-0223. Our front desk team will confirm your insurance and find the earliest available appointment. You can also submit the contact form on this site and we will reach out within one business day." },
  { q: "Does Dr. Rehmani offer specialist second opinions?", a: "Absolutely. Dr. Rehmani welcomes patients who received a retinal diagnosis elsewhere and want confirmation from a fellowship-trained vitreoretinal specialist. Please bring any prior imaging (OCT scans, fundus photos) and reports to your appointment." },
  { q: "What are Dr. Rehmani's qualifications?", a: "Dr. Rehmani completed his Surgical Vitreoretinal Fellowship at UTMB Houston, served as Chief Resident in Ophthalmology at St. John's Episcopal Hospital, and was a Clinical Assistant Professor at UTMB. He graduated Magna Cum Laude from the University of Rochester (Percy Dutton Lifetime Achievement Prize, Keidaean Honor Society) and earned his D.O. from NYCOM. He is currently a sub-investigator on 28 active U.S. clinical trials in macular degeneration and diabetic eye disease, and is a published author in peer-reviewed ophthalmology journals." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollAnimation();

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  const renderFaq = (faq: typeof faqs[0], i: number) => {
    const isOpen = openIndex === i;
    return (
      <div
        key={i}
        className={`group bg-background border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md ${
          isOpen ? "border-accent/40 shadow-md" : "border-border hover:border-accent/30"
        }`}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : i)}
          className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
          aria-expanded={isOpen}
        >
          <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-accent" : "text-muted-foreground group-hover:text-accent"}`} />
          <span className={`flex-1 font-body font-medium text-sm pr-2 transition-colors ${isOpen ? "text-accent" : "text-foreground"}`}>
            {faq.q}
          </span>
          <ChevronDown className={`w-5 h-5 shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-accent" : "text-muted-foreground group-hover:text-accent"}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] pb-5 px-5" : "max-h-0"}`}>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      </div>
    );
  };

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
        <SectionCTA to="/faq" label="View All FAQs" />
      </div>
    </section>
  );
};

export default FAQSection;
