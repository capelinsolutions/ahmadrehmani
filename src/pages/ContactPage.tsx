import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import ContactSection from "@/components/sections/ContactSection";

const ContactPage = () => (
  <PageShell>
    <SEO
      title="Contact & Appointments | North Houston Retina — Cypress, TX"
      description="Book with Dr. Ahmad Rehmani. Same-day evaluation for urgent retinal symptoms. Call (346) 587-0223 or email admin@nhretina.com."
      path="/contact"
    />
    <ContactSection />
  </PageShell>
);

export default ContactPage;
