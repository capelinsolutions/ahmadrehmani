import PageShell from "@/components/PageShell";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CTASection from "@/components/sections/CTASection";

const AboutPage = () => (
  <PageShell>
    <AboutSection />
    <WhyChooseSection />
    <CTASection />
  </PageShell>
);

export default AboutPage;
