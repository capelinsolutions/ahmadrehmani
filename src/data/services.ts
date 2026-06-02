import macularImg from "@/assets/services/macular-diseases.jpg";
import diabeticImg from "@/assets/services/diabetic-eye-disease.jpg";
import detachmentImg from "@/assets/services/retinal-detachment-tears.jpg";
import vascularImg from "@/assets/services/retinal-vascular-disease.jpg";
import surgicalImg from "@/assets/services/vitreous-surgical-conditions.jpg";
import inflammatoryImg from "@/assets/services/inflammatory-other.jpg";

export type SubService = { name: string; description: string };
export type ServiceCategory = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  symptoms: string[];
  treatments: string[];
  subServices: SubService[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "macular-diseases",
    name: "Macular Diseases",
    image: macularImg,
    shortDescription:
      "Specialized care for conditions affecting the macula — the small central area of the retina responsible for sharp, detailed vision.",
    longDescription:
      "The macula gives you the ability to read, recognize faces, and drive. When it is damaged by age, scar tissue, fluid, or traction, central vision can blur, distort, or disappear entirely. Dr. Rehmani uses high-resolution OCT imaging, fluorescein angiography, and the latest pharmacologic and surgical therapies to preserve and restore macular function. Most macular conditions can be managed in-office with anti-VEGF injections, while complex cases such as macular holes and epiretinal membranes are corrected with precision vitreoretinal microsurgery.",
    symptoms: [
      "Blurred or distorted central vision",
      "Straight lines appearing wavy",
      "Dark or empty area in the center of vision",
      "Difficulty reading or recognizing faces",
      "Colors appearing faded",
      "Sudden change in central vision",
    ],
    treatments: [
      "Anti-VEGF Injections (Eylea, Vabysmo, Lucentis)",
      "AREDS2 Nutritional Therapy",
      "Vitrectomy with Membrane Peel",
      "Macular Hole Repair with Gas Tamponade",
      "Photodynamic Therapy",
      "OCT-Guided Monitoring",
    ],
    subServices: [
      { name: "Wet Age-Related Macular Degeneration (AMD)", description: "Abnormal blood vessels leak under the macula. Treated with in-office anti-VEGF injections to preserve vision." },
      { name: "Dry Age-Related Macular Degeneration (AMD)", description: "Gradual thinning of the macula. Managed with AREDS2 supplements, monitoring, and complement-inhibitor therapy for geographic atrophy." },
      { name: "Macular Hole", description: "A full-thickness opening in the macula. Repaired with vitrectomy, membrane peel, and gas bubble tamponade." },
      { name: "Macular Pucker (Epiretinal Membrane)", description: "Scar tissue on the macula causing distortion. Surgically removed with vitrectomy and membrane peel." },
      { name: "Central Serous Retinopathy", description: "Fluid accumulation under the macula often triggered by stress or steroids. Managed with observation, laser, or PDT." },
      { name: "Vitreomacular Traction Syndrome", description: "The vitreous pulls abnormally on the macula. Managed with observation, intravitreal enzyme, or vitrectomy." },
      { name: "Cystoid Macular Edema", description: "Fluid-filled cysts in the macula. Treated with anti-inflammatory drops, injections, or surgery depending on cause." },
    ],
  },
  {
    slug: "diabetic-eye-disease",
    name: "Diabetic Eye Disease",
    image: diabeticImg,
    shortDescription:
      "Comprehensive medical and surgical management of diabetic retinopathy and its complications — the leading cause of vision loss in working-age adults.",
    longDescription:
      "Diabetes damages the tiny blood vessels in the retina, leading to leakage, swelling, abnormal new vessel growth, and bleeding. Early detection through annual dilated exams and OCT imaging dramatically improves outcomes. Dr. Rehmani offers the full spectrum of diabetic eye care — from in-office anti-VEGF and steroid injections, to focal and panretinal laser, to advanced 27-gauge vitrectomy surgery for vitreous hemorrhage and tractional retinal detachment.",
    symptoms: [
      "Blurry or fluctuating vision",
      "Dark floaters or cobweb-like spots",
      "Sudden vision loss in one eye",
      "Poor night vision",
      "Difficulty reading small print",
      "Color vision changes",
    ],
    treatments: [
      "Anti-VEGF Injections",
      "Intravitreal Steroid Implants (Ozurdex)",
      "Focal Macular Laser",
      "Panretinal Photocoagulation (PRP)",
      "Pars Plana Vitrectomy",
      "Tight Glycemic & Blood Pressure Coordination",
    ],
    subServices: [
      { name: "Non-Proliferative Diabetic Retinopathy", description: "Early stage with microaneurysms and mild leakage. Managed with monitoring and risk factor control." },
      { name: "Proliferative Diabetic Retinopathy", description: "Advanced stage with abnormal new vessels. Treated with PRP laser and anti-VEGF injections." },
      { name: "Diabetic Macular Edema", description: "Swelling in the center of the retina. Treated with anti-VEGF injections or steroids." },
      { name: "Diabetic Vitreous Hemorrhage", description: "Bleeding into the vitreous cavity. Managed with observation or vitrectomy if persistent." },
      { name: "Tractional Retinal Detachment", description: "Scar tissue pulling the retina off. Repaired with complex vitrectomy and membrane dissection." },
    ],
  },
  {
    slug: "retinal-detachment-tears",
    name: "Retinal Detachment & Tears",
    image: detachmentImg,
    shortDescription:
      "Urgent and surgical care for retinal tears and detachments — true ophthalmic emergencies that require same-day evaluation.",
    longDescription:
      "A retinal tear or detachment can permanently rob you of vision if not repaired within hours to days. Symptoms include a sudden shower of floaters, persistent flashes of light, or a dark curtain spreading across your field of view. Dr. Rehmani offers same-day evaluation and the full spectrum of repair techniques — laser barricade for tears, pneumatic retinopexy and scleral buckle for select detachments, and 25/27-gauge vitrectomy for complex cases — with excellent anatomical success rates.",
    symptoms: [
      "Sudden burst of new floaters",
      "Flashes of light (photopsias)",
      "Curtain or shadow across the vision",
      "Sudden loss of peripheral vision",
      "Blurred or distorted central vision",
      "A feeling of 'something falling' in the eye",
    ],
    treatments: [
      "In-Office Laser Retinopexy",
      "Cryotherapy (Cryopexy)",
      "Pneumatic Retinopexy",
      "Scleral Buckle Surgery",
      "Pars Plana Vitrectomy",
      "Silicone Oil or Gas Tamponade",
    ],
    subServices: [
      { name: "Rhegmatogenous Retinal Detachment", description: "Retina detaches due to a tear allowing fluid underneath. Repaired surgically — urgent." },
      { name: "Retinal Tears", description: "Break in the retina without detachment. Sealed in-office with laser retinopexy." },
      { name: "Posterior Vitreous Detachment (PVD)", description: "Age-related separation of the vitreous gel. Monitored for associated tears." },
      { name: "Lattice Degeneration", description: "Thinning of the peripheral retina. May require prophylactic laser in high-risk patients." },
      { name: "Retinoschisis", description: "Splitting of the retinal layers. Usually monitored unless progressive." },
    ],
  },
  {
    slug: "retinal-vascular-disease",
    name: "Retinal Vascular Disease",
    image: vascularImg,
    shortDescription:
      "Targeted care for occlusions and vascular disorders of the retinal arteries and veins — often linked to systemic hypertension and cardiovascular disease.",
    longDescription:
      "When a retinal vein or artery is blocked, vision can drop suddenly and dramatically. These events are frequently the first warning sign of underlying hypertension, diabetes, or carotid disease. Dr. Rehmani treats the eye with anti-VEGF injections, steroid implants, and laser as indicated, while coordinating with your primary care physician and cardiologist to address the systemic risk factors that cause these events in the first place.",
    symptoms: [
      "Sudden painless loss of vision in one eye",
      "Blurred or distorted vision",
      "Dark spots or shadows",
      "Loss of part of the visual field",
      "Vision that comes and goes (amaurosis fugax)",
      "Floaters from vitreous bleeding",
    ],
    treatments: [
      "Anti-VEGF Injections",
      "Intravitreal Steroid Implants",
      "Sector or Panretinal Laser",
      "Systemic Risk Factor Coordination",
      "Carotid & Cardiac Workup Referral",
      "Vitrectomy for Persistent Hemorrhage",
    ],
    subServices: [
      { name: "Central Retinal Vein Occlusion (CRVO)", description: "Blockage of the main retinal vein. Treated with anti-VEGF injections and laser." },
      { name: "Branch Retinal Vein Occlusion (BRVO)", description: "Blockage of a smaller retinal vein. Treated with injections and focal laser." },
      { name: "Central Retinal Artery Occlusion (CRAO)", description: "Stroke of the eye — true emergency. Requires urgent systemic workup." },
      { name: "Branch Retinal Artery Occlusion (BRAO)", description: "Smaller arterial blockage. Workup for embolic source is critical." },
      { name: "Hypertensive Retinopathy", description: "Retinal changes from chronic high blood pressure. Managed with BP control and monitoring." },
      { name: "Retinal Macroaneurysm", description: "Ballooning of a retinal artery that can leak or bleed. Treated with observation or laser." },
    ],
  },
  {
    slug: "vitreous-surgical-conditions",
    name: "Vitreous & Surgical Conditions",
    image: surgicalImg,
    shortDescription:
      "Advanced vitreoretinal surgery for floaters, dislocated implants, infection, trauma, and complex anterior-posterior segment cases.",
    longDescription:
      "Dr. Rehmani is the founder of the surgical retina program at North Cypress Surgery Center, where he performs the full range of modern vitreoretinal procedures using 25 and 27-gauge sutureless instrumentation. He has developed his own techniques for complex lens replacement and IOL repositioning, and accepts emergent referrals for endophthalmitis, ocular trauma, and intraocular foreign bodies from across the Northwest Houston region.",
    symptoms: [
      "Persistent large floaters that affect daily life",
      "Sudden severe vision loss with pain (possible infection)",
      "A dislocated or tilted lens implant",
      "Severe eye trauma or foreign body sensation",
      "Flashes with new floaters",
      "Persistent vitreous hemorrhage",
    ],
    treatments: [
      "25/27-Gauge Sutureless Vitrectomy",
      "Floater-Only Vitrectomy (FOV)",
      "IOL Repositioning or Exchange",
      "Scleral-Fixated Secondary IOL",
      "Intravitreal Antibiotics & Vitrectomy for Endophthalmitis",
      "Open-Globe Repair Coordination",
    ],
    subServices: [
      { name: "Vitreous Hemorrhage", description: "Blood in the vitreous obscuring vision. Managed with observation or vitrectomy if persistent." },
      { name: "Floaters & Flashes", description: "Symptoms of vitreous changes. Evaluated to rule out tears; surgery considered for disabling floaters." },
      { name: "Dislocated Intraocular Lens (IOL)", description: "Implant has shifted out of position. Repositioned or exchanged surgically." },
      { name: "Complex Lens Replacement", description: "Custom techniques for eyes with weak zonules or absent capsular support." },
      { name: "Endophthalmitis", description: "Severe infection inside the eye. Treated emergently with intravitreal antibiotics and vitrectomy." },
      { name: "Ocular Trauma & Foreign Body", description: "Surgical repair of penetrating injuries and removal of intraocular foreign bodies." },
      { name: "Asteroid Hyalosis", description: "Calcium deposits in the vitreous. Usually monitored unless visually significant." },
    ],
  },
  {
    slug: "inflammatory-other",
    name: "Inflammatory & Other",
    image: inflammatoryImg,
    shortDescription:
      "Diagnosis and management of posterior uveitis, inherited retinal disease, and other less-common retinal conditions.",
    longDescription:
      "Inflammatory and inherited retinal conditions require a careful diagnostic workup and a long-term partnership with your retina specialist. Dr. Rehmani works with rheumatologists, infectious disease specialists, and genetic counselors to identify root causes, coordinate systemic therapy, and protect vision with targeted intraocular treatments. He also monitors pigmented lesions and offers gene-therapy referral pathways for select inherited conditions.",
    symptoms: [
      "Eye redness and pain",
      "Sensitivity to light (photophobia)",
      "Floaters or blurry vision",
      "Night blindness",
      "Tunnel vision or peripheral field loss",
      "Slowly progressive vision changes",
    ],
    treatments: [
      "Topical & Systemic Corticosteroids",
      "Intravitreal Steroid Injections / Implants",
      "Biologic Immunomodulation Coordination",
      "Wide-Field Imaging & Monitoring",
      "Genetic Testing & Counseling Referral",
      "Low-Vision Rehabilitation Referral",
    ],
    subServices: [
      { name: "Posterior & Intermediate Uveitis", description: "Inflammation of the back of the eye. Treated with steroids and immunomodulators." },
      { name: "Choroidal Nevus & Pigmented Lesions", description: "Benign pigmented spots monitored for any concerning growth or change." },
      { name: "Inherited Retinal Disease", description: "Genetic conditions affecting the retina. Includes counseling and gene-therapy referral." },
      { name: "Retinitis Pigmentosa", description: "Progressive degeneration of the rods and cones. Monitored with ERG and low-vision support." },
      { name: "Central Serous Chorioretinopathy", description: "Fluid pocket under the retina linked to stress/steroids. Managed with observation, PDT, or laser." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  serviceCategories.find((c) => c.slug === slug);
