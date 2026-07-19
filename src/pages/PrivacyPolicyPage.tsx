import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";


const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
    <div className="font-body text-[15px] leading-relaxed text-muted-foreground space-y-4">{children}</div>
  </section>
);

const PrivacyPolicyPage = () => (
  <PageShell>
    <SEO
      title="Privacy Policy | North Houston Retina"
      description="How North Houston Retina, PLLC collects, uses, and protects your personal and health information, including HIPAA-covered PHI."
      path="/privacy-policy"
    />
    <div className="bg-gradient-deep border-b border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Link to="/" className="font-body text-xs text-muted-foreground hover:text-accent">← Home</Link>
        <h1 className="font-display text-4xl md:text-5xl text-foreground mt-4">Privacy Policy</h1>
        <p className="font-body text-sm text-muted-foreground mt-3">Last updated: July 19, 2026</p>
      </div>
    </div>
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <Section title="Introduction">
        <p>
          North Houston Retina, PLLC ("we," "our," or "us") respects your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard information when you visit our website
          or interact with our practice.
        </p>
      </Section>
      <Section title="Information We Collect">
        <p>We collect information you provide directly to us, such as when you request an appointment, contact us, or complete a form. This may include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, date of birth, and contact information (phone, email, address)</li>
          <li>Insurance information and reason for visit</li>
          <li>Any message or health-related information you choose to share</li>
        </ul>
        <p>We also collect limited technical information automatically, such as IP address, browser type, device, referring pages, and general usage analytics.</p>
      </Section>
      <Section title="Protected Health Information (HIPAA)">
        <p>
          Any protected health information (PHI) you share with us as a patient is handled in accordance
          with the Health Insurance Portability and Accountability Act (HIPAA) and our Notice of Privacy
          Practices, provided at your visit. Do not send sensitive medical details through the website
          contact form or unencrypted email.
        </p>
      </Section>
      <Section title="How We Use Information">
        <ul className="list-disc pl-6 space-y-1">
          <li>Schedule appointments and provide clinical care</li>
          <li>Verify insurance benefits and process billing</li>
          <li>Respond to inquiries and send appointment reminders</li>
          <li>Improve our website, services, and patient communication</li>
          <li>Comply with legal, regulatory, and accreditation obligations</li>
        </ul>
      </Section>
      <Section title="Sharing of Information">
        <p>We do not sell your personal information. We may share information with:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Treating physicians, referring providers, and surgical facilities involved in your care</li>
          <li>Health plans and billing partners as required to process claims</li>
          <li>Service providers (e.g., hosting, analytics) bound by confidentiality obligations</li>
          <li>Government or legal authorities where required by law</li>
        </ul>
      </Section>
      <Section title="Cookies & Analytics">
        <p>
          Our website uses cookies and privacy-respecting analytics to understand traffic and improve
          performance. You can disable cookies in your browser settings; some features may not function
          as expected.
        </p>
      </Section>
      <Section title="Data Security">
        <p>
          We use administrative, physical, and technical safeguards designed to protect your information.
          No method of transmission over the internet is 100% secure; please contact us by phone for
          sensitive matters.
        </p>
      </Section>
      <Section title="Your Rights">
        <p>
          You may request access to, correction of, or a copy of your medical records by contacting our
          office. Depending on your state of residence, you may have additional rights regarding your
          personal information.
        </p>
      </Section>
      <Section title="Children's Privacy">
        <p>Our website is not directed to children under 13, and we do not knowingly collect personal information from children online.</p>
      </Section>
      <Section title="Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. The "Last updated" date reflects the most recent revision.</p>
      </Section>
      <Section title="Contact Us">
        <p>
          North Houston Retina, PLLC<br />
          27700 Northwest Freeway, Suite 355, Cypress, TX 77433<br />
          Phone: (346) 587-0223<br />
          Email: admin@nhretina.com
        </p>
      </Section>
    </article>
  </PageShell>
);

export default PrivacyPolicyPage;
