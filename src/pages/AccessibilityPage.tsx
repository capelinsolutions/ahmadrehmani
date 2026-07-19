import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
    <div className="font-body text-[15px] leading-relaxed text-muted-foreground space-y-4">{children}</div>
  </section>
);

const AccessibilityPage = () => (
  <PageShell>
    <SEO
      title="Accessibility Statement | North Houston Retina"
      description="Our commitment to a WCAG 2.1 AA accessible experience for patients with disabilities, including assistive-technology support and how to request accommodations."
      path="/accessibility"
    />
    <div className="bg-gradient-deep border-b border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Breadcrumbs />
        <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4">Accessibility Statement</h1>
        <p className="font-body text-sm text-muted-foreground mt-3">Last updated: July 19, 2026</p>
      </div>
    </div>
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <Section title="Our Commitment">
        <p>
          North Houston Retina, PLLC is committed to ensuring digital accessibility for people with
          disabilities. We are continually improving the user experience for everyone and applying the
          relevant accessibility standards to help our patients access information and services
          independently.
        </p>
      </Section>
      <Section title="Conformance Status">
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
          These guidelines explain how to make web content more accessible to people with a wide array
          of disabilities, including visual, auditory, physical, speech, cognitive, and neurological
          impairments.
        </p>
      </Section>
      <Section title="Measures We Take">
        <ul className="list-disc pl-6 space-y-1">
          <li>Semantic HTML, clear heading structure, and descriptive link text</li>
          <li>Alternative text for meaningful images and captions for informational media</li>
          <li>Keyboard navigation, visible focus indicators, and a "Skip to content" link</li>
          <li>Sufficient color contrast between text and background</li>
          <li>Responsive design that adapts to screen size and zoom levels up to 200%</li>
          <li>Compatibility with modern screen readers and assistive technologies</li>
        </ul>
      </Section>
      <Section title="Assistive Technology Support">
        <p>
          Our site is designed to work with the current major versions of screen readers (including
          NVDA, JAWS, and VoiceOver) and the latest versions of Chrome, Safari, Firefox, and Edge.
        </p>
      </Section>
      <Section title="Known Limitations">
        <p>
          Despite our efforts, some content — such as embedded third-party media, interactive 3D
          models, or user-generated reviews — may not be fully accessible. We are working to improve
          these areas and welcome feedback.
        </p>
      </Section>
      <Section title="Requesting Accommodations">
        <p>
          If you need information from our website in an alternative format, or need help scheduling
          an appointment due to a disability, please contact us and we will be glad to assist. We can
          provide large-print documents, help over the phone, and arrange for accessibility
          accommodations at our office.
        </p>
      </Section>
      <Section title="Feedback">
        <p>
          We welcome your feedback on the accessibility of this website. If you encounter an
          accessibility barrier, please let us know:
        </p>
        <p>
          North Houston Retina, PLLC<br />
          Phone: (346) 587-0223<br />
          Email: admin@nhretina.com<br />
          Address: 27700 Northwest Freeway, Suite 355, Cypress, TX 77433
        </p>
        <p>We aim to respond to accessibility feedback within 5 business days.</p>
      </Section>
    </article>
  </PageShell>
);

export default AccessibilityPage;
