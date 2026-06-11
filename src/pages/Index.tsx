import PageShell from "@/components/PageShell";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import UrgencyBar from "@/components/sections/UrgencyBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import LocationsSection from "@/components/sections/LocationsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import InsuranceSection from "@/components/sections/InsuranceSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <PageShell>
    <HeroSection />
    <StatsStrip />
    <UrgencyBar />
    <AboutSection compact />
    <ServicesSection />
    <LocationsSection />
    <ReviewsSection />
    <InsuranceSection />
    <FAQSection />
    <ContactSection />
    <CTASection />
  </PageShell>
);

export default Index;
