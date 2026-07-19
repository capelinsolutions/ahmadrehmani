import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import LocationsSection from "@/components/sections/LocationsSection";
import CTASection from "@/components/sections/CTASection";

const LocationsPage = () => (
  <PageShell>
    <SEO
      title="Office Location | Retina Specialist in Cypress, TX"
      description="North Houston Retina — 27700 Northwest Freeway, Suite 355, Cypress, TX 77433. Mon–Fri 8am–5pm. Call (346) 587-0223."
      path="/locations"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Place",
        name: "North Houston Retina — Cypress Office",
        address: {
          "@type": "PostalAddress",
          streetAddress: "27700 Northwest Freeway, Suite 355",
          addressLocality: "Cypress",
          addressRegion: "TX",
          postalCode: "77433",
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: 29.9691, longitude: -95.6972 },
      }}
    />
    <LocationsSection />
    <CTASection />
  </PageShell>
);

export default LocationsPage;
