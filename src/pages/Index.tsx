import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import SocietiesSection from "@/components/sections/SocietiesSection";

const Index = () => (
  <PageShell>
    <SEO
      title="Dr. Ahmad Rehmani | Retina Specialist Cypress TX"
      description="Board-certified vitreoretinal specialist in Cypress, TX. Expert care for macular degeneration, diabetic retinopathy & retinal detachment. Call (346) 587-0223."
      path="/"
    />
    <HeroSection />
    <AboutSection compact />
    <ServicesSection />
    <SocietiesSection />
    <ReviewsSection />
  </PageShell>
);

export default Index;
