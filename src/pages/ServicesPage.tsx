import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

const ServicesPage = () => (
  <PageShell>
    <SEO
      title="Retinal Conditions & Treatments | North Houston Retina"
      description="Comprehensive retinal care: macular degeneration, diabetic retinopathy, retinal detachment, vitrectomy, intravitreal injections, laser therapy & more."
      path="/services"
    />
    <ServicesSection />
    <CTASection />
  </PageShell>
);

export default ServicesPage;
