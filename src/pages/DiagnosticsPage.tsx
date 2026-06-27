import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ChevronRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import heroImg from "@/assets/services/imaging-room.jpg.asset.json";

const SECTIONS = [
  {
    id: "fundus-autofluorescence",
    title: "Fundus Autofluorescence (FAF)",
    body: "Fundus Autofluorescence is a non-invasive imaging test that evaluates the health of the retinal pigment epithelium, a critical layer that supports the retina. By detecting natural fluorescence within the eye, this technology can help identify and monitor retinal diseases before changes become visible on a standard examination.",
  },
  {
    id: "humphrey-visual-field",
    title: "Humphrey Visual Field Test",
    body: "The Humphrey Visual Field Test measures a patient's peripheral (side) vision and helps detect areas of vision loss that may not be noticeable in everyday life. It is commonly used to diagnose and monitor conditions such as glaucoma, optic nerve disorders, and neurological diseases affecting vision.",
  },
  {
    id: "ocular-ultrasound",
    title: "Ocular Ultrasound (B-scan)",
    body: "An Ocular Ultrasound, or B-scan, uses sound waves to create detailed images of the structures inside the eye when direct visualization is limited. This test is especially valuable for evaluating retinal detachments, vitreous hemorrhages, tumors, and other conditions hidden behind cloudy media such as dense cataracts or bleeding.",
  },
  {
    id: "sd-oct",
    title: "Spectral Domain Optical Coherence Tomography (SD-OCT)",
    body: "Spectral Domain Optical Coherence Tomography (SD-OCT) is an advanced, non-invasive imaging technology that produces high-resolution cross-sectional images of the retina. It allows for the early detection and precise monitoring of retinal diseases, including macular degeneration, diabetic retinopathy, and macular edema.",
  },
  {
    id: "sd-octa",
    title: "Spectral Domain OCT Angiography (SD-OCTA)",
    body: "Spectral Domain Optical Coherence Tomography Angiography (SD-OCTA) provides detailed images of blood flow within the retina and choroid without the need for dye injections. This advanced technology helps detect and monitor abnormal blood vessel growth, diabetic eye disease, retinal vascular disorders, and other conditions affecting retinal circulation.",
  },
  {
    id: "ultra-widefield-imaging",
    title: "Ultra-Widefield Imaging",
    body: "Ultra-Widefield Imaging captures a panoramic view of the retina, allowing visualization of up to 200 degrees of the eye in a single image. This technology enables the detection and monitoring of retinal conditions that may affect the far peripheral retina, often beyond the view of traditional retinal imaging.",
  },
];

const DiagnosticsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [hash]);

  return (
    <PageShell>
      <Helmet>
        <title>Diagnostic Retinal Imaging | North Houston Retina</title>
        <meta
          name="description"
          content="Advanced retinal diagnostics with Dr. Ahmad Rehmani: Fundus Autofluorescence, Humphrey Visual Field, Ocular B-scan Ultrasound, SD-OCT, SD-OCTA, and Ultra-Widefield Imaging."
        />
        <link rel="canonical" href="https://ahmadrehmani.lovable.app/services/diagnostics" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-deep border-b border-border py-12 lg:py-16 text-foreground">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-accent">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent">Diagnostics</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">
                Services
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
                Diagnostic Retinal Imaging
              </h1>
              <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
                State-of-the-art imaging and testing in our dedicated diagnostics suite — enabling
                early detection, precise diagnosis, and ongoing monitoring of retinal disease.
              </p>
              <ul className="flex flex-wrap gap-2 pt-2">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent bg-accent-pale/60 hover:bg-accent-pale border border-accent/20 rounded-full px-4 py-1.5 transition-colors"
                    >
                      {s.title.replace(/\s*\(.*\)/, "")}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="tel:+13465870223"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Call (346) 587-0223
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border bg-background hover:bg-secondary px-5 py-3 rounded-lg font-body font-medium"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <figure className="w-full max-w-xl">
                <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg bg-background">
                  <img
                    src={heroImg.url}
                    alt="North Houston Retina diagnostic imaging suite with FAF, OCT, and ultra-widefield equipment"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="font-body text-xs text-muted-foreground text-center mt-3">
                  Our in-office diagnostic imaging suite.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {SECTIONS.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-l-4 border-accent/40 pl-6 lg:pl-8"
            >
              <span className="font-body text-xs uppercase tracking-widest text-accent font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-1 mb-4">
                {s.title}
              </h2>
              <p className="font-body text-foreground/80 text-base lg:text-lg leading-[1.8]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-primary border-y border-border py-14">
        <div className="container mx-auto px-4 text-center text-foreground">
          <h2 className="font-display text-3xl lg:text-4xl font-bold">
            Schedule your diagnostic evaluation
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
            Comprehensive retinal imaging and testing — all under one roof.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a
              href="tel:+13465870223"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call (346) 587-0223
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background hover:bg-secondary text-foreground px-6 py-3 rounded-lg font-body font-semibold border border-border"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default DiagnosticsPage;
