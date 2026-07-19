import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
    <div className="font-body text-[15px] leading-relaxed text-muted-foreground space-y-4">{children}</div>
  </section>
);

const TermsOfUsePage = () => (
  <PageShell>
    <SEO
      title="Terms of Use | North Houston Retina"
      description="Terms governing use of the North Houston Retina website. Educational content only, not medical advice."
      path="/terms-of-use"
    />
    <div className="bg-gradient-deep border-b border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Breadcrumbs />
        <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4">Terms of Use</h1>
        <p className="font-body text-sm text-muted-foreground mt-3">Last updated: July 19, 2026</p>
      </div>
    </div>
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <Section title="Acceptance of Terms">
        <p>
          By accessing or using this website (the "Site"), operated by North Houston Retina, PLLC
          ("we," "our," or "us"), you agree to these Terms of Use. If you do not agree, please do not
          use the Site.
        </p>
      </Section>
      <Section title="Not Medical Advice">
        <p>
          The information on this Site is provided for general educational purposes only and is not a
          substitute for professional medical advice, diagnosis, or treatment. Always seek the advice
          of your physician or other qualified healthcare provider with any questions you may have
          regarding a medical condition. Never disregard professional medical advice or delay in
          seeking it because of something you have read on this Site.
        </p>
        <p className="font-semibold text-foreground">
          If you think you may have a medical emergency, call 911 or go to the nearest emergency room.
        </p>
      </Section>
      <Section title="No Doctor–Patient Relationship">
        <p>
          Use of this Site, submission of a contact form, or communication through the Site does not
          create a physician-patient relationship. A relationship is established only upon a scheduled,
          in-person examination at our office.
        </p>
      </Section>
      <Section title="Intellectual Property">
        <p>
          All content on the Site — including text, graphics, logos, images, and code — is the
          property of North Houston Retina, PLLC or its licensors and is protected by U.S. and
          international copyright, trademark, and other laws. You may not reproduce, distribute, or
          create derivative works without our prior written permission.
        </p>
      </Section>
      <Section title="Acceptable Use">
        <ul className="list-disc pl-6 space-y-1">
          <li>Do not use the Site for any unlawful or harmful purpose.</li>
          <li>Do not attempt to gain unauthorized access to any portion of the Site.</li>
          <li>Do not upload or transmit malicious code, spam, or harassing content.</li>
        </ul>
      </Section>
      <Section title="Third-Party Links">
        <p>
          The Site may contain links to third-party websites for your convenience. We do not endorse
          and are not responsible for the content, privacy practices, or accuracy of any third-party
          site.
        </p>
      </Section>
      <Section title="Disclaimer of Warranties">
        <p>
          The Site is provided on an "as is" and "as available" basis without warranties of any kind,
          express or implied. We do not warrant that the Site will be uninterrupted, error-free, or
          free of viruses or other harmful components.
        </p>
      </Section>
      <Section title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, North Houston Retina, PLLC and its physicians,
          employees, and affiliates shall not be liable for any indirect, incidental, consequential,
          or punitive damages arising out of or related to your use of the Site.
        </p>
      </Section>
      <Section title="Governing Law">
        <p>
          These Terms are governed by the laws of the State of Texas, without regard to conflict of
          law principles. Any dispute shall be resolved in the state or federal courts located in
          Harris County, Texas.
        </p>
      </Section>
      <Section title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of the Site after changes are
          posted constitutes acceptance of the revised Terms.
        </p>
      </Section>
      <Section title="Contact">
        <p>
          North Houston Retina, PLLC<br />
          27700 Northwest Freeway, Suite 355, Cypress, TX 77433<br />
          Phone: (346) 587-0223 — Email: admin@nhretina.com
        </p>
      </Section>
    </article>
  </PageShell>
);

export default TermsOfUsePage;
