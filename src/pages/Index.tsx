import PageShell from "@/components/PageShell";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import UrgencyBar from "@/components/sections/UrgencyBar";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <PageShell>
    <HeroSection />
    <StatsStrip />
    <UrgencyBar />
    <CTASection />
  </PageShell>
);

export default Index;
