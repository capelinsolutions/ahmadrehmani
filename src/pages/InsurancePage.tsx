import PageShell from "@/components/PageShell";
import InsuranceSection from "@/components/sections/InsuranceSection";
import CTASection from "@/components/sections/CTASection";

const InsurancePage = () => (
  <PageShell>
    <InsuranceSection showPending />
    <CTASection />
  </PageShell>
);

export default InsurancePage;
