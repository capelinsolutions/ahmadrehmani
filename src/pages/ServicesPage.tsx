import PageShell from "@/components/PageShell";
import ServicesSection from "@/components/sections/ServicesSection";
import PatientEducation from "@/components/sections/PatientEducation";
import CTASection from "@/components/sections/CTASection";

const ServicesPage = () => (
  <PageShell>
    <ServicesSection />
    <PatientEducation />
    <CTASection />
  </PageShell>
);

export default ServicesPage;
