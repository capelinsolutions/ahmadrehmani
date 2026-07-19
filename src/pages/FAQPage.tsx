import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const faqs = [
  { q: "Where is Dr. Rehmani's office located?", a: "Dr. Rehmani's practice — North Houston Retina, PLLC — is located at 27700 Northwest Freeway, Suite 355, Cypress, TX 77433, conveniently on US-290 serving Cypress, Bridgeland, Katy, Tomball, and the Northwest Houston corridor. Office hours are Monday through Friday, 8:00 AM – 5:00 PM." },
  { q: "What conditions does Dr. Rehmani treat?", a: "Dr. Rehmani specializes exclusively in diseases of the retina and vitreous, including age-related macular degeneration (AMD), diabetic retinopathy, retinal detachment, retinal tears, vitreous hemorrhage, posterior vitreous detachment (PVD), and macular holes. He also performs comprehensive retinal imaging and offers specialist second opinions." },
  { q: "What insurance does Dr. Rehmani accept?", a: "We currently accept Aetna, Blue Cross Blue Shield, Community Health Choice, Cigna, CHC Marketplace, Employers Health Network, Multiplan (PHCS network), United Healthcare, and Wellpoint. We are actively credentialing with Medicare, Medicare Advantage, and the MHMD network. Please call (346) 587-0223 to verify your specific plan." },
  { q: "What is a vitreoretinal specialist, and do I need one?", a: "A vitreoretinal specialist is an ophthalmologist who completed additional fellowship training in diseases and surgery of the retina and vitreous. Dr. Rehmani completed his Surgical Vitreoretinal Fellowship at the University of Texas Medical Branch (UTMB) in Houston." },
  { q: "How do I know if I'm having a retinal emergency?", a: "Seek immediate care if you experience: sudden onset of new floaters or a dramatic increase in existing floaters, flashes of light especially in peripheral vision, a dark curtain or shadow across any part of your vision, or sudden blurred or distorted vision. Call (346) 587-0223 immediately — same-day evaluation available." },
  { q: "Are anti-VEGF retinal injections painful?", a: "Anti-VEGF injections are performed with numbing drops that minimize discomfort. Most patients report feeling only light pressure for a few seconds. The procedure takes just a few minutes in the office, and patients typically return to normal activities the same day." },
  { q: "Does Dr. Rehmani participate in clinical trials?", a: "Yes. Dr. Rehmani was a sub-investigator on over 20 active U.S. clinical trials in retinal disease, with a focus on next-generation therapies for AMD and diabetic macular edema — including longer-acting injectables, sustained-release implants, and gene therapy." },
  { q: "How do I schedule an appointment?", a: "The easiest way to schedule is to call (346) 587-0223. Our front desk team will confirm your insurance and find the earliest available appointment. You can also submit the contact form on this site." },
  { q: "Does Dr. Rehmani offer specialist second opinions?", a: "Absolutely. Dr. Rehmani welcomes patients who received a retinal diagnosis elsewhere and want confirmation from a fellowship-trained vitreoretinal specialist. Please bring any prior imaging (OCT scans, fundus photos) and reports to your appointment." },
  { q: "What are Dr. Rehmani's qualifications?", a: "Dr. Rehmani completed his Surgical Vitreoretinal Fellowship at UTMB Houston, served as Chief Resident in Ophthalmology at St. John's Episcopal Hospital, and was a Clinical Assistant Professor at UTMB. He graduated Magna Cum Laude from the University of Rochester and earned his D.O. from NYCOM." },
];

const FAQPage = () => (
  <PageShell>
    <SEO
      title="FAQ | Dr. Ahmad Rehmani — Retina Specialist Cypress TX"
      description="Answers on retinal emergencies, insurance, anti-VEGF injections, second opinions, clinical trials, and scheduling with Dr. Ahmad Rehmani in Cypress, TX."
      path="/faq"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
    <FAQSection />
    <CTASection />
  </PageShell>
);

export default FAQPage;
