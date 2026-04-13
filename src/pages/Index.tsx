import EmergencyBanner from "@/components/sections/EmergencyBanner";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import UrgencyBar from "@/components/sections/UrgencyBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import LocationsSection from "@/components/sections/LocationsSection";
import InsuranceSection from "@/components/sections/InsuranceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import PatientEducation from "@/components/sections/PatientEducation";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <>
    <a href="#main-content" className="skip-to-content">Skip to content</a>
    <EmergencyBanner />
    <Navbar />
    <main id="main-content" role="main">
      <HeroSection />
      <StatsStrip />
      <UrgencyBar />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <LocationsSection />
      <InsuranceSection />
      <ReviewsSection />
      <PatientEducation />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
