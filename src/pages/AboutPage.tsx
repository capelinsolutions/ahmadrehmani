import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CTASection from "@/components/sections/CTASection";

const AboutPage = () => (
  <PageShell>
    <SEO
      title="About Dr. Ahmad Rehmani | Vitreoretinal Surgeon Cypress TX"
      description="Board-certified vitreoretinal surgeon. UTMB fellowship, 20+ clinical trials in AMD and diabetic eye disease. Serving Cypress, Bridgeland, Katy & NW Houston."
      path="/about"
      ogType="profile"
    />
    <AboutSection compact={false} />
    <WhyChooseSection />
    <CTASection />
  </PageShell>
);

export default AboutPage;
