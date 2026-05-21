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
import SectionCTA from "@/components/SectionCTA";

const Index = () => (
  <PageShell>
    <HeroSection />
    <StatsStrip />
    <UrgencyBar />

    <AboutSection />
    <SectionCTA to="/about" label="Learn More About Dr. Rehmani" />

    <ServicesSection />
    <SectionCTA to="/services" label="Explore All Services" />

    <LocationsSection />
    <SectionCTA to="/locations" label="View Our Locations" />

    <ReviewsSection />
    <SectionCTA to="/reviews" label="Read More Patient Reviews" />

    <InsuranceSection />
    <SectionCTA to="/insurance" label="See All Accepted Insurance" />

    <FAQSection />
    <SectionCTA to="/faq" label="View All FAQs" />

    <ContactSection />
    <SectionCTA to="/contact" label="Contact Us" />

    <CTASection />
  </PageShell>
);

export default Index;
