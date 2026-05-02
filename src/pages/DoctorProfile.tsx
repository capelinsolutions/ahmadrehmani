import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  GraduationCap, Award, FlaskConical, MapPin, Phone, Clock,
  Star, ShieldCheck, Stethoscope, BookOpen, Users, ArrowLeft,
  CheckCircle2, Building2, BadgeCheck
} from "lucide-react";

import drHero from "@/assets/dr-profile-hero.jpg";
import drExam from "@/assets/dr-exam.jpg";
import drStanding from "@/assets/dr-standing.jpg";
import drPatient from "@/assets/dr-patient.jpg";
import drSlitLamp from "@/assets/dr-slit-lamp.jpg";

const DoctorProfile = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Ahmad Rehmani, D.O. — Board-Certified Retina Specialist | Cypress, TX</title>
        <meta name="description" content="Meet Dr. Ahmad Rehmani, D.O. — fellowship-trained vitreoretinal specialist at North Houston Retina in Cypress, TX. UTMB fellowship, 28 clinical trials, 5.0 Google rating. Treating macular degeneration, diabetic retinopathy & retinal detachment." />
        <link rel="canonical" href="https://www.northhoustonretina.com/doctor/ahmad-rehmani" />
      </Helmet>

      {/* Top bar */}
      <div className="bg-primary sticky top-0 z-40" style={{ backdropFilter: "blur(12px)" }}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground font-body text-sm hover:text-gold-light transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a href="tel:+13465870223" className="flex items-center gap-1.5 text-gold-light text-sm font-body font-medium">
            <Phone className="w-4 h-4" />
            (346) 587-0223
          </a>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-[#132A60] to-primary overflow-hidden">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="relative mx-auto lg:mx-0 w-72 lg:w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10" style={{ aspectRatio: "3/4" }}>
                <img src={drHero} alt="Dr. Ahmad Rehmani, D.O. — Vitreoretinal Specialist at North Houston Retina" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-full px-5 py-2 flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-body text-sm font-bold">5.0 Google Rating</span>
              </div>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <p className="font-body text-accent text-sm font-semibold uppercase tracking-wider mb-2">Vitreoretinal Specialist</p>
                <h1 className="font-display text-primary-foreground text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Dr. Ahmad Rehmani, D.O.
                </h1>
                <p className="font-body text-primary-foreground/70 text-lg mt-3">
                  Founder & Physician — North Houston Retina, PLLC
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {["UTMB Fellowship-Trained", "28 Clinical Trials", "Former UTMB Faculty", "Chief Resident"].map(badge => (
                  <span key={badge} className="inline-flex items-center gap-1.5 bg-white/10 text-primary-foreground rounded-full px-4 py-1.5 text-xs font-body font-medium border border-white/10">
                    <BadgeCheck className="w-3.5 h-3.5 text-accent" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[
                  { icon: MapPin, label: "Cypress, TX" },
                  { icon: Phone, label: "(346) 587-0223" },
                  { icon: Clock, label: "Mon–Fri 8–5" },
                  { icon: Stethoscope, label: "Retina & Vitreous" },
                ].map(item => (
                  <div key={item.label} className="flex flex-col items-center lg:items-start gap-1">
                    <item.icon className="w-5 h-5 text-gold-light" />
                    <span className="font-body text-primary-foreground/80 text-xs">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <a href="tel:+13465870223" className="bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors text-sm">
                  Call to Book
                </a>
                <Link to="/#contact" className="border border-white/20 text-primary-foreground hover:bg-white/10 px-6 py-3 rounded-lg font-body font-semibold transition-colors text-sm">
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.0", label: "Google Rating", sub: "44+ Reviews" },
              { value: "28", label: "Clinical Trials", sub: "Active U.S. Studies" },
              { value: "UTMB", label: "Fellowship", sub: "Houston, TX" },
              { value: "D.O.", label: "Board Certified", sub: "Vitreoretinal Surgery" },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-display text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="font-body text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                <p className="font-body text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="space-y-16">

              {/* About */}
              <section>
                <SectionHeading icon={Users} title="About Dr. Rehmani" />
                <div className="grid md:grid-cols-[1fr_280px] gap-8 mt-6">
                  <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                    <p>
                      Dr. Ahmad Rehmani is the founder, owner, and physician of <strong className="text-foreground">North Houston Retina, PLLC</strong> in Cypress, TX. He is a fellowship-trained vitreoretinal specialist who has dedicated his career exclusively to diseases and surgery of the retina and vitreous.
                    </p>
                    <p>
                      After completing his Surgical Vitreoretinal Fellowship at the University of Texas Medical Branch (UTMB) in Houston and serving as Chief Resident in Ophthalmology at St. John's Episcopal Hospital in New York, Dr. Rehmani returned to the Houston area to provide specialized retinal care to the underserved Northwest Houston corridor — including Cypress, Bridgeland, Katy, and Tomball.
                    </p>
                    <p>
                      Unlike a general ophthalmologist or optometrist, Dr. Rehmani focuses solely on complex retinal conditions — macular degeneration, diabetic retinopathy, retinal detachment, retinal tears, and vitreous hemorrhage. As a former Clinical Assistant Professor at UTMB and a sub-investigator on 28 active U.S. clinical trials, he brings academic-level expertise and the latest treatments directly to his patients.
                    </p>
                    <p>
                      Dr. Rehmani is known for taking the time to explain complex diagnoses in plain language, ensuring every patient fully understands their condition and treatment options. Patients consistently describe their experience as warm, thorough, and confidence-inspiring.
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src={drStanding} alt="Dr. Ahmad Rehmani at North Houston Retina clinic" className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                </div>
              </section>

              {/* Education & Training */}
              <section>
                <SectionHeading icon={GraduationCap} title="Education & Training" />
                <div className="mt-6 space-y-0">
                  {[
                    { period: "2020–2022", title: "Surgical Vitreoretinal Fellowship", org: "University of Texas Medical Branch (UTMB)", location: "Houston, TX", detail: "Intensive surgical training in retinal detachment repair, vitrectomy, macular surgery, diabetic vitrectomy, and complex anterior/posterior segment procedures." },
                    { period: "2017–2020", title: "Ophthalmology Residency — Chief Resident (2019–2020)", org: "St. John's Episcopal Hospital", location: "New York, NY", detail: "Comprehensive ophthalmology training with high surgical volume. Selected as Chief Resident for clinical leadership and academic contributions." },
                    { period: "2013–2017", title: "Doctor of Osteopathic Medicine (D.O.)", org: "New York College of Osteopathic Medicine (NYCOM)", location: "Old Westbury, NY", detail: "Full medical degree with emphasis on the whole-patient osteopathic philosophy." },
                    { period: "2009–2013", title: "Bachelor of Arts — Biology & Religion, Minor in Public Health", org: "University of Rochester", location: "Rochester, NY", detail: "Graduated Magna Cum Laude. Recipient of the Percy Dutton Lifetime Achievement Prize. Member of Keidaean Senior Honor Society." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 md:gap-6 pb-8 last:pb-0 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                        {i < 3 && <div className="w-px flex-1 bg-border mt-1" />}
                      </div>
                      <div className="pb-2">
                        <p className="font-body text-xs text-accent font-semibold">{item.period}</p>
                        <h3 className="font-display text-foreground text-lg font-bold mt-0.5">{item.title}</h3>
                        <p className="font-body text-sm text-foreground/80">{item.org} — <span className="text-muted-foreground">{item.location}</span></p>
                        <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Clinical Photo Gallery */}
              <section>
                <SectionHeading icon={Stethoscope} title="In the Clinic" />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: "4/3" }}>
                    <img src={drExam} alt="Dr. Rehmani performing indirect ophthalmoscopy exam" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: "4/3" }}>
                    <img src={drSlitLamp} alt="Dr. Rehmani performing slit lamp examination on a patient" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="col-span-2 rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: "16/7" }}>
                    <img src={drPatient} alt="Dr. Rehmani consulting with a patient at North Houston Retina" className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                </div>
              </section>

              {/* Awards & Honors */}
              <section>
                <SectionHeading icon={Award} title="Awards & Honors" />
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { title: "Percy Dutton Lifetime Achievement Prize", org: "University of Rochester", desc: "Awarded for outstanding academic achievement and community leadership." },
                    { title: "Keidaean Senior Honor Society", org: "University of Rochester", desc: "Inducted into the university's most prestigious senior honor society." },
                    { title: "Chief Resident", org: "St. John's Episcopal Hospital", desc: "Selected by faculty for clinical excellence, leadership, and surgical proficiency." },
                    { title: "Magna Cum Laude", org: "University of Rochester", desc: "Graduated with high honors in Biology and Religion." },
                  ].map((award, i) => (
                    <div key={i} className="bg-gray-50 border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-display text-foreground font-bold text-sm">{award.title}</h3>
                          <p className="font-body text-xs text-accent font-semibold mt-0.5">{award.org}</p>
                          <p className="font-body text-xs text-muted-foreground mt-1.5">{award.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Research */}
              <section>
                <SectionHeading icon={FlaskConical} title="Research & Clinical Trials" />
                <div className="mt-6 space-y-4">
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <FlaskConical className="w-8 h-8 text-accent shrink-0" />
                      <div>
                        <h3 className="font-display text-foreground text-lg font-bold">28 Active U.S. Clinical Trials</h3>
                        <p className="font-body text-sm text-muted-foreground mt-1">Sub-Investigator on major pharmaceutical studies</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Dr. Rehmani is actively involved in cutting-edge retinal research as a sub-investigator on 28 active U.S. clinical trials. These trials focus on novel therapies for macular degeneration, diabetic eye disease, and other sight-threatening conditions — including studies for Eylea, Vabysmo, Susvimo, and RGX-314 gene therapy.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    His research involvement means patients at North Houston Retina may have access to investigational treatments not yet available to the general public, providing an additional avenue of hope for patients with advanced retinal disease.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    {["Eylea", "Vabysmo", "Susvimo", "RGX-314"].map(drug => (
                      <div key={drug} className="bg-gray-50 border border-border rounded-lg px-4 py-3 text-center">
                        <p className="font-body text-sm font-semibold text-foreground">{drug}</p>
                        <p className="font-body text-xs text-muted-foreground">Clinical Trial</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Specialties */}
              <section>
                <SectionHeading icon={BookOpen} title="Conditions Treated" />
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {[
                    "Age-Related Macular Degeneration (AMD)",
                    "Diabetic Retinopathy & Macular Edema",
                    "Retinal Detachment & Tears",
                    "Vitreous Hemorrhage",
                    "Epiretinal Membrane (Macular Pucker)",
                    "Macular Hole",
                    "Retinal Vein & Artery Occlusion",
                    "Uveitis & Ocular Inflammation",
                    "Flashes & Floaters",
                    "Cataract Surgery (Complex Cases)",
                  ].map(condition => (
                    <div key={condition} className="flex items-center gap-3 bg-gray-50 border border-border rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-body text-sm text-foreground">{condition}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Philosophy */}
              <section>
                <blockquote className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-8 py-8">
                  <p className="font-display italic text-foreground text-xl leading-relaxed">
                    "My goal is to make the most advanced retinal care feel accessible — to explain complex diagnoses in plain language, and to treat every patient with the same urgency and compassion I would want for my own family."
                  </p>
                  <cite className="font-body text-sm text-muted-foreground mt-4 block not-italic">
                    — Dr. Ahmad Rehmani, D.O. · Owner & Physician, North Houston Retina
                  </cite>
                </blockquote>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Practice Info Card */}
              <div className="bg-gray-50 border border-border rounded-2xl p-6 space-y-5">
                <h3 className="font-display text-foreground text-lg font-bold flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  Practice Information
                </h3>
                <div className="space-y-4 font-body text-sm">
                  <div>
                    <p className="font-semibold text-foreground">North Houston Retina, PLLC</p>
                    <p className="text-muted-foreground mt-1">27700 Northwest Freeway, Suite 355<br />Cypress, TX 77433</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+13465870223" className="text-accent hover:underline">(346) 587-0223</a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Areas Served</p>
                    <p className="text-muted-foreground">Cypress, Bridgeland, Katy, Tomball, Northwest Houston</p>
                  </div>
                </div>
                <a href="tel:+13465870223" className="block w-full bg-accent hover:bg-accent-light text-accent-foreground text-center px-5 py-3 rounded-lg font-body font-semibold transition-colors text-sm">
                  <Phone className="w-4 h-4 inline mr-1.5" />
                  Call to Schedule
                </a>
              </div>

              {/* Insurance Card */}
              <div className="bg-gray-50 border border-border rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-foreground text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  Insurance Accepted
                </h3>
                <div className="space-y-2">
                  {["Aetna", "Wellpoint", "Multiplan"].map(ins => (
                    <div key={ins} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {ins}
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-muted-foreground italic">
                  Medicare & additional carriers coming soon. Call for details.
                </p>
              </div>

              {/* Credentials Summary */}
              <div className="bg-primary rounded-2xl p-6 space-y-4 text-primary-foreground">
                <h3 className="font-display text-lg font-bold">Quick Facts</h3>
                <div className="space-y-3 font-body text-sm">
                  {[
                    "Doctor of Osteopathic Medicine",
                    "UTMB Vitreoretinal Fellowship",
                    "Chief Resident — Ophthalmology",
                    "Former Clinical Professor, UTMB",
                    "28 Active Clinical Trial Studies",
                    "Percy Dutton Prize Recipient",
                    "Magna Cum Laude — U of Rochester",
                    "Keidaean Honor Society",
                  ].map(fact => (
                    <div key={fact} className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-gold-light shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/85">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-accent to-accent-light py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-accent-foreground text-2xl lg:text-3xl font-bold">
            Ready to See Dr. Rehmani?
          </h2>
          <p className="font-body text-accent-foreground/80 mt-2 max-w-xl mx-auto">
            Schedule your consultation today and receive expert retinal care from a fellowship-trained specialist.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="tel:+13465870223" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold transition-colors hover:bg-primary/90">
              Call (346) 587-0223
            </a>
            <Link to="/" className="border-2 border-accent-foreground text-accent-foreground px-8 py-3 rounded-lg font-body font-semibold hover:bg-accent-foreground/10 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Ahmad Rehmani, D.O.",
        "url": "https://www.northhoustonretina.com/doctor/ahmad-rehmani",
        "image": "",
        "telephone": "+13465870223",
        "medicalSpecialty": "Vitreoretinal Disease & Surgery",
        "description": "Dr. Ahmad Rehmani is a fellowship-trained vitreoretinal specialist and founder of North Houston Retina in Cypress, TX. Sub-investigator on 28 active U.S. clinical trials.",
        "alumniOf": [
          { "@type": "CollegeOrUniversity", "name": "University of Texas Medical Branch (UTMB) — Vitreoretinal Surgical Fellowship" },
          { "@type": "CollegeOrUniversity", "name": "St. John's Episcopal Hospital — Ophthalmology Residency (Chief Resident)" },
          { "@type": "CollegeOrUniversity", "name": "New York College of Osteopathic Medicine (NYCOM)" },
          { "@type": "CollegeOrUniversity", "name": "University of Rochester — Magna Cum Laude" }
        ],
        "award": ["Percy Dutton Lifetime Achievement Prize", "Keidaean Senior Honor Society", "Chief Resident", "Magna Cum Laude"],
        "worksFor": { "@type": "MedicalOrganization", "name": "North Houston Retina, PLLC" },
        "address": { "@type": "PostalAddress", "streetAddress": "27700 Northwest Freeway, Suite 355", "addressLocality": "Cypress", "addressRegion": "TX", "postalCode": "77433", "addressCountry": "US" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "44", "bestRating": "5" }
      })}} />
    </>
  );
};

const SectionHeading = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 border-b border-border pb-3">
    <Icon className="w-6 h-6 text-accent" />
    <h2 className="font-display text-foreground text-2xl font-bold">{title}</h2>
  </div>
);

export default DoctorProfile;
