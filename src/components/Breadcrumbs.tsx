import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Canonical breadcrumb trail per route.
// First segment ("Conditions" or "Services") links back to /services.
// Intermediate segments are category / parent labels (non-linked text).
// The last segment is the current page.
const TRAILS: Record<string, string[]> = {
  // Conditions
  "/services/macular-degeneration": ["Conditions", "Common", "Wet Macular Degeneration"],
  "/services/dry-macular-degeneration": ["Conditions", "Common", "Macular Degeneration", "Dry Macular Degeneration"],
  "/services/diabetic-retinopathy": ["Conditions", "Common", "Diabetic Retinopathy & DME"],
  "/services/vitreous-floaters": ["Conditions", "Common", "Vitreous Floaters"],
  "/services/central-serous-retinopathy": ["Conditions", "Macular", "Central Serous Retinopathy"],
  "/services/cystoid-macular-edema": ["Conditions", "Macular", "Cystoid Macular Edema"],
  "/services/macular-pucker": ["Conditions", "Macular", "Macular Pucker"],
  "/services/juxtafoveal-telangiectasia": ["Conditions", "Macular", "Juxtafoveal Telangiectasia"],
  "/services/macular-hole": ["Conditions", "Macular", "Macular Hole"],
  "/services/vitreomacular-traction": ["Conditions", "Macular", "Vitreomacular Traction"],
  "/services/lattice-degeneration": ["Conditions", "Peripheral", "Lattice Degeneration"],
  "/services/posterior-vitreous-detachment": ["Conditions", "Peripheral", "Posterior Vitreous Detachment"],
  "/services/retinal-hole-tear": ["Conditions", "Peripheral", "Retinal Hole / Tear"],
  "/services/retinal-detachment-tears": ["Conditions", "Peripheral", "Retinal Tears & Detachments"],
  "/services/endophthalmitis": ["Conditions", "Uveitis", "Endophthalmitis"],
  "/services/uveitis": ["Conditions", "Uveitis", "Uveitis"],
  "/services/retinal-arterial-occlusion": ["Conditions", "Vascular", "Retinal Arterial Occlusion"],
  "/services/retinal-vein-occlusion": ["Conditions", "Vascular", "Retinal Vein Occlusion"],
  "/services/retained-lens-fragments": ["Conditions", "Lens Complications", "Retained Lens Fragments"],
  "/services/dislocated-intraocular-lens": ["Conditions", "Lens Complications", "Dislocated Intraocular Lens"],

  // Services
  "/services/diagnostics": ["Services", "Diagnostics"],
  "/services/intravitreal-injections": ["Services", "Injections", "Intravitreal Injections"],
  "/services/subtenon-injection": ["Services", "Injections", "Sub-Tenon Injection"],
  "/services/micropulse-laser": ["Services", "Retinal Lasers", "Micropulse Laser"],
  "/services/laser-photocoagulation": ["Services", "Retinal Lasers", "Laser Photocoagulation"],
  "/services/pars-plana-vitrectomy": ["Services", "Retinal Surgeries", "Retinal Detachment", "Pars Plana Vitrectomy"],
  "/services/pneumatic-retinopexy": ["Services", "Retinal Surgeries", "Retinal Detachment", "Pneumatic Retinopexy"],
  "/services/scleral-buckle": ["Services", "Retinal Surgeries", "Retinal Detachment", "Scleral Buckle"],
  "/services/cataract-complications": ["Services", "Retinal Surgeries", "Lens Complications"],
};

type BreadcrumbsProps = {
  /** Optional override — otherwise the trail is derived from the current pathname. */
  trail?: string[];
  className?: string;
};

const Breadcrumbs = ({ trail, className }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const resolved = trail ?? TRAILS[pathname] ?? ["Services"];
  const last = resolved.length - 1;

  return (
    <nav
      aria-label="Breadcrumb"
      className={
        className ??
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-body text-muted-foreground mb-6"
      }
    >
      <Link to="/" className="hover:text-accent">Home</Link>
      {resolved.map((segment, i) => {
        const isFirst = i === 0;
        const isLast = i === last;
        return (
          <span key={`${segment}-${i}`} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3" aria-hidden />
            {isFirst ? (
              <Link to="/services" className="hover:text-accent">{segment}</Link>
            ) : isLast ? (
              <span className="text-accent">{segment}</span>
            ) : (
              <span>{segment}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
