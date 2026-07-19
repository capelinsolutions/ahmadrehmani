import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";

const ReviewsPage = () => (
  <PageShell>
    <SEO
      title="Patient Reviews | Dr. Ahmad Rehmani — North Houston Retina"
      description="5-star patient reviews for Dr. Ahmad Rehmani, retina specialist in Cypress, TX. Read what patients say about their retinal care experience."
      path="/reviews"
    />
    <ReviewsSection />
    <CTASection />
  </PageShell>
);

export default ReviewsPage;
