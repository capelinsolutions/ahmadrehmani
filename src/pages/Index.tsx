import PageShell from "@/components/PageShell";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import UrgencyBar from "@/components/sections/UrgencyBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import SectionCTA from "@/components/SectionCTA";

const Index = () => (
  <PageShell>
    <HeroSection />
    <StatsStrip />
    <UrgencyBar />

    <AboutSection />
    <SectionCTA to="/about" label="Learn More About Dr. Rehmani" />

    <ServicesSection compact />
    <SectionCTA to="/services" label="Explore All Services" />

    <CTASection />
  </PageShell>
);

export default Index;
