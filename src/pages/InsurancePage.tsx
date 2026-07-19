import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import InsuranceSection from "@/components/sections/InsuranceSection";
import CTASection from "@/components/sections/CTASection";

const InsurancePage = () => (
  <PageShell>
    <SEO
      title="Insurance Accepted | North Houston Retina — Cypress, TX"
      description="Accepting Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Community Health Choice, Multiplan (PHCS), Wellpoint & more. Call (346) 587-0223 to verify."
      path="/insurance"
    />
    <InsuranceSection showPending />
    <CTASection />
  </PageShell>
);

export default InsurancePage;
