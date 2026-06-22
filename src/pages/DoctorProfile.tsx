import { Helmet } from "react-helmet-async";
import {
  GraduationCap, Award, FlaskConical,
  Stethoscope, Users,
} from "lucide-react";
import PageShell from "@/components/PageShell";

import drExam from "@/assets/dr-exam.jpg";
import drStanding from "@/assets/dr-standing.jpg";
import drPatient from "@/assets/dr-patient.jpg";
import drSlitLamp from "@/assets/dr-slit-lamp.jpg";

const DoctorProfile = () => {
  return (
    <PageShell>
      <Helmet>
        <title>Dr. Ahmad Rehmani, D.O. — Board-Certified Retina Specialist | Cypress, TX</title>
        <meta name="description" content="Meet Dr. Ahmad Rehmani, D.O. — fellowship-trained vitreoretinal specialist and founder of North Houston Retina in Cypress, TX. Sub-investigator on 20+ U.S. clinical trials." />
        <link rel="canonical" href="https://www.northhoustonretina.com/doctor/ahmad-rehmani" />
      </Helmet>


      {/* Quick Stats — page starts here */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.0", label: "Google Rating", sub: "44+ Reviews" },
              { value: "20+", label: "Clinical Trials", sub: "U.S. Studies" },
              { value: "Vitreoretinal", label: "Fellowship", sub: "Houston, TX" },
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
        <div className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl">
          <div className="space-y-16">

            {/* About */}
            <section>
              <SectionHeading icon={Users} title="About Dr. Rehmani" />
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed mt-6">
                <p>
                  <strong className="text-foreground">North Houston Retina PLLC</strong> was founded in 2026 by Dr. Ahmad Rehmani in Cypress, TX, specializing in diseases and surgery of the retina, vitreous and macula. He spent 3 years in New Jersey in private practice as the highest volume surgeon focusing on high quality compassionate care for his patients. During this time, he participated in over 20 national clinical trials which have led to FDA approval of some of the newest treatments in the market today.
                </p>
                <p>
                  Dr. Rehmani completed a 2-year Vitreoretinal fellowship at the University of Texas, Medical Branch where he served as Assistant Professor, providing care to the state's largest prison system and local indigent populations. There he was regarded for his excellence in teaching and clinical care. He has authored and co-authored many peer-reviewed journal articles, book chapters, and presented his work at national and international meetings.
                </p>
                <p>
                  Dr. Rehmani is a Board-Certified Ophthalmologist. He graduated Magna cum Laude from the University of Rochester with a double BA in religion and Biology. He earned multiple awards including the Percy Dutton Prize — a Lifetime Achievement Award and was inducted into the Keidaean Honor Society. He earned his medical degree at NYCOM in Long Island, NY. He completed two years of residency in family medicine followed by residency in Ophthalmology at St. John's Episcopal Hospital in Queens, NY where he was selected as Chief Resident.
                </p>
                <p>
                  Dr. Rehmani is also the founding vitreoretinal surgeon at <strong className="text-foreground">North Cypress Surgery Center</strong>. He is well surgically versed at complex retinal diseases including lens dislocations as well common conditions such as dense cataracts, retinal detachments, macular holes, epiretinal membranes, floaters, vitreous hemorrhage and more.
                </p>
                <p>
                  Dr. Rehmani is also fluent in English, Urdu, Hindi and Punjabi. Outside of work his interests include traveling, the Buffalo Bills, playing sports, working out and spending time with his wife and three children.
                </p>
              </div>
            </section>

            {/* Education & Training — compact */}
            <section>
              <SectionHeading icon={GraduationCap} title="Education & Training" />
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {[
                  { period: "2020–2022", title: "Surgical Vitreoretinal Fellowship", location: "University of Texas Medical Branch · Houston, TX" },
                  { period: "2017–2020", title: "Ophthalmology Residency — Chief Resident", location: "St. John's Episcopal Hospital · Queens, NY" },
                  { period: "2013–2017", title: "Doctor of Osteopathic Medicine (D.O.)", location: "NYCOM · Long Island, NY" },
                  { period: "2009–2013", title: "B.A. Biology & Religion, Magna Cum Laude", location: "University of Rochester · Rochester, NY" },
                ].map((item, i) => (
                  <li key={i} className="grid grid-cols-[110px_1fr] gap-4 py-4">
                    <p className="font-body text-xs text-accent font-bold uppercase tracking-wider pt-0.5">{item.period}</p>
                    <div>
                      <h3 className="font-display text-foreground text-base font-bold leading-snug">{item.title}</h3>
                      <p className="font-body text-sm text-muted-foreground mt-0.5">{item.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Awards & Honors — same compact format */}
            <section>
              <SectionHeading icon={Award} title="Awards & Honors" />
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {[
                  { period: "Lifetime", title: "Percy Dutton Lifetime Achievement Prize", location: "University of Rochester" },
                  { period: "Honor", title: "Keidaean Senior Honor Society", location: "University of Rochester" },
                  { period: "2019–2020", title: "Chief Resident", location: "St. John's Episcopal Hospital" },
                  { period: "2013", title: "Magna Cum Laude — Biology & Religion", location: "University of Rochester" },
                ].map((item, i) => (
                  <li key={i} className="grid grid-cols-[110px_1fr] gap-4 py-4">
                    <p className="font-body text-xs text-accent font-bold uppercase tracking-wider pt-0.5">{item.period}</p>
                    <div>
                      <h3 className="font-display text-foreground text-base font-bold leading-snug">{item.title}</h3>
                      <p className="font-body text-sm text-muted-foreground mt-0.5">{item.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Clinical Photo Gallery */}
            <section>
              <SectionHeading icon={Stethoscope} title="In the Clinic" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-muted">
                  <img src={drExam} alt="Dr. Rehmani performing indirect ophthalmoscopy exam" className="w-full h-auto object-contain" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md bg-muted">
                  <img src={drSlitLamp} alt="Dr. Rehmani performing slit lamp examination on a patient" className="w-full h-auto object-contain" loading="lazy" />
                </div>
                <div className="col-span-1 sm:col-span-2 rounded-xl overflow-hidden shadow-md bg-muted">
                  <img src={drPatient} alt="Dr. Rehmani consulting with a patient at North Houston Retina" className="w-full h-auto object-contain" loading="lazy" />
                </div>
                <div className="col-span-1 sm:col-span-2 rounded-xl overflow-hidden shadow-md bg-muted">
                  <img src={drStanding} alt="Dr. Ahmad Rehmani at North Houston Retina clinic" className="w-full h-auto object-contain" loading="lazy" />
                </div>
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
                      <h3 className="font-display text-foreground text-lg font-bold">Over 20 U.S. Clinical Trials</h3>
                      <p className="font-body text-sm text-muted-foreground mt-1">Sub-Investigator on major pharmaceutical studies</p>
                    </div>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Dr. Rehmani played an active role in cutting-edge retinal research as a sub-investigator on over 20 U.S. clinical trials. These trials focus on novel therapies for macular degeneration, diabetic eye disease, and other sight-threatening conditions — including studies for Eylea, Vabysmo, Susvimo, and RGX-314 gene therapy.
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

          </div>
        </div>
      </main>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Ahmad Rehmani, D.O.",
        "url": "https://www.northhoustonretina.com/doctor/ahmad-rehmani",
        "image": "",
        "telephone": "+13465870223",
        "medicalSpecialty": "Vitreoretinal Disease & Surgery",
        "description": "Dr. Ahmad Rehmani is a fellowship-trained vitreoretinal specialist and founder of North Houston Retina in Cypress, TX. Sub-investigator on over 20 U.S. clinical trials.",
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
    </PageShell>
  );
};

const SectionHeading = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 border-b border-border pb-3">
    <Icon className="w-6 h-6 text-accent" />
    <h2 className="font-display text-foreground text-2xl font-bold">{title}</h2>
  </div>
);

export default DoctorProfile;
