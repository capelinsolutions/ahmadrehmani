import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories: { name: string; conditions: string[] }[] = [
  {
    name: "Macular Diseases",
    conditions: [
      "Wet Age-Related Macular Degeneration (AMD)",
      "Dry Age-Related Macular Degeneration (AMD)",
      "Macular Hole",
      "Macular Pucker (Epiretinal Membrane)",
      "Central Serous Retinopathy",
      "Vitreomacular Traction Syndrome",
      "Cystoid Macular Edema",
    ],
  },
  {
    name: "Diabetic Eye Disease",
    conditions: [
      "Non-Proliferative Diabetic Retinopathy",
      "Proliferative Diabetic Retinopathy",
      "Diabetic Macular Edema",
      "Diabetic Vitreous Hemorrhage",
      "Tractional Retinal Detachment",
    ],
  },
  {
    name: "Retinal Detachment & Tears",
    conditions: [
      "Rhegmatogenous Retinal Detachment",
      "Retinal Tears",
      "Posterior Vitreous Detachment (PVD)",
      "Lattice Degeneration",
      "Retinoschisis",
    ],
  },
  {
    name: "Retinal Vascular Disease",
    conditions: [
      "Central Retinal Vein Occlusion (CRVO)",
      "Branch Retinal Vein Occlusion (BRVO)",
      "Central Retinal Artery Occlusion (CRAO)",
      "Branch Retinal Artery Occlusion (BRAO)",
      "Hypertensive Retinopathy",
      "Macroaneurysm",
    ],
  },
  {
    name: "Vitreous & Surgical Conditions",
    conditions: [
      "Vitreous Hemorrhage",
      "Floaters & Flashes",
      "Dislocated Intraocular Lens (IOL)",
      "Complex Lens Replacement",
      "Endophthalmitis",
      "Ocular Trauma & Intraocular Foreign Body",
      "Asteroid Hyalosis",
    ],
  },
  {
    name: "Inflammatory & Other",
    conditions: [
      "Uveitis (Posterior & Intermediate)",
      "Choroidal Nevus & Pigmented Lesions",
      "Inherited Retinal Disease",
      "Retinitis Pigmentosa",
      "Central Serous Chorioretinopathy",
    ],
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="services" ref={ref} className="bg-gradient-soft py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 fade-up">
          <div className="max-w-2xl">
            <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Expert Retinal Care</span>
            <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3 leading-tight">
              Conditions & Treatments Offered in Cypress, TX
            </h2>
            <p className="font-body text-gray-600 mt-4 leading-relaxed">
              As a fellowship-trained vitreoretinal specialist, Dr. Rehmani offers the most advanced medical and surgical treatments for diseases of the retina, vitreous, and macula — all in one Cypress location. Browse by category below.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-background border border-border rounded-xl shadow-sm overflow-hidden divide-y divide-border">
          {categories.map((cat, i) => {
            const open = openIdx === i;
            return (
              <div key={cat.name}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-accent-pale transition-colors text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-lg font-semibold text-foreground">{cat.name}</span>
                  <ChevronDown className={`w-5 h-5 text-accent transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="px-6 pb-5 pt-1 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {cat.conditions.map((c) => (
                      <div key={c} className="flex items-start gap-2 py-1">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="font-body text-sm text-foreground/85">{c}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
