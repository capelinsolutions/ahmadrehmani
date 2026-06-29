import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/nhr-logo.png";

type MenuItem = { label: string; to: string; children?: MenuItem[] };
type MenuColumn = { heading: string; items: MenuItem[] };

const CONDITIONS_MENU: MenuColumn[] = [
  {
    heading: "Common",
    items: [
      {
        label: "Macular Degeneration",
        to: "/services/macular-degeneration",
        children: [
          { label: "Wet Macular Degeneration", to: "/services/macular-degeneration" },
          { label: "Dry Macular Degeneration", to: "/services/dry-macular-degeneration" },
        ],
      },
      { label: "Diabetic Retinopathy", to: "/services/diabetic-retinopathy" },
      {
        label: "Floaters",
        to: "/services/vitreous-floaters",
        children: [{ label: "Asteroid Hyalosis", to: "/services/vitreous-floaters" }],
      },
    ],
  },
  {
    heading: "Macular",
    items: [
      { label: "Central Serous Retinopathy", to: "/services/central-serous-retinopathy" },
      { label: "Cystoid Macular Edema (CME)", to: "/services/cystoid-macular-edema" },
      { label: "Epiretinal Membrane / Macular Pucker", to: "/services/macular-pucker" },
      { label: "Juxtafoveal Telangiectasia", to: "/services/macular-diseases" },
      { label: "Macular Hole", to: "/services/macular-hole" },
      { label: "Vitreomacular Traction", to: "/services/vitreomacular-traction" },
    ],
  },
  {
    heading: "Peripheral",
    items: [
      { label: "Lattice Degeneration", to: "/services/lattice-degeneration" },
      { label: "Posterior Vitreous Detachment", to: "/services/posterior-vitreous-detachment" },
      { label: "Retinal Hole / Tear", to: "/services/retinal-detachment-tears" },
      { label: "Retinal Detachment", to: "/services/retinal-detachment-tears" },
    ],
  },
  {
    heading: "Uveitis",
    items: [
      { label: "Endophthalmitis", to: "/services/endophthalmitis" },
      { label: "Panuveitis / Vitritis", to: "/services/uveitis" },
    ],
  },
  {
    heading: "Vascular",
    items: [
      { label: "Retinal Arterial Occlusion", to: "/services/retinal-arterial-occlusion" },
      { label: "Retinal Vein Occlusion", to: "/services/retinal-vein-occlusion" },
    ],
  },
  {
    heading: "Lens Complications",
    items: [
      { label: "Retained Lens Fragments", to: "/services" },
      { label: "Dislocated Intraocular Lenses", to: "/services" },
    ],
  },
];

const SERVICES_MENU: MenuColumn[] = [
  {
    heading: "Diagnostics",
    items: [
      { label: "Fundus Autofluorescence", to: "/services/diagnostics#fundus-autofluorescence" },
      { label: "Humphrey Visual Field Test", to: "/services/diagnostics#humphrey-visual-field" },
      { label: "Ocular Ultrasound (B-scan)", to: "/services/diagnostics#ocular-ultrasound" },
      { label: "Spectral Domain OCT", to: "/services/diagnostics#sd-oct" },
      { label: "SD-OCT Angiography", to: "/services/diagnostics#sd-octa" },
      { label: "Ultra-Widefield Imaging", to: "/services/diagnostics#ultra-widefield-imaging" },
    ],
  },
  {
    heading: "Injections",
    items: [
      { label: "Intravitreal Injections", to: "/services" },
      { label: "Sub-Tenon Injections", to: "/services" },
    ],
  },
  {
    heading: "Retinal Lasers",
    items: [
      { label: "Micropulse Laser", to: "/services/micropulse-laser" },
      { label: "Laser Photocoagulation", to: "/services/laser-photocoagulation" },
    ],
  },
  {
    heading: "Retinal Surgeries",
    items: [
      { label: "Macular Hole Repair", to: "/services/macular-hole" },
      { label: "Membrane Peeling", to: "/services/macular-pucker" },
      {
        label: "Retinal Detachment",
        to: "/services/retinal-detachment-tears",
        children: [
          { label: "In-Office Pneumatic Retinopexy", to: "/services/pneumatic-retinopexy" },
          { label: "Vitrectomy", to: "/services/pars-plana-vitrectomy" },
          { label: "Scleral Buckle", to: "/services/scleral-buckle" },
        ],
      },
      {
        label: "Cataract Complications",
        to: "/services/cataract-complications",
        children: [
          { label: "Dense Cataracts", to: "/services/cataract-complications#dense-cataracts" },
          { label: "Lens Repositioning", to: "/services/cataract-complications#lens-repositioning" },
          { label: "Retained Lens Fragments", to: "/services/cataract-complications#retained-lens-fragments" },
          { label: "Secondary Intraocular Lens", to: "/services/cataract-complications#secondary-intraocular-lens" },
        ],
      },
    ],
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Conditions", to: "/services", menu: CONDITIONS_MENU },
  { label: "Services", to: "/services", menu: SERVICES_MENU },
  { label: "Location", to: "/locations" },
  { label: "Contact", to: "/contact" },
] as const;

const MegaMenu = ({ columns }: { columns: MenuColumn[] }) => (
  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[min(1200px,calc(100vw-2rem))] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 pt-3">
    <div className="bg-background border border-border shadow-2xl rounded-2xl overflow-hidden">
      <div
        className="grid gap-x-8 gap-y-8 p-8 lg:p-10"
        style={{ gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, minmax(0,1fr))` }}
      >
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="font-display text-foreground font-bold text-base mb-4 pb-2 border-b border-border">
              {col.heading}
            </h4>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-body text-[13px] text-muted-foreground hover:text-accent transition-colors block leading-snug"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-1.5 ml-3 pl-3 border-l border-border space-y-1.5">
                      {item.children.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.to}
                            className="font-body text-[12px] text-muted-foreground/90 hover:text-accent transition-colors block leading-snug"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileOpenIdx(null);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm font-bold tracking-wide transition-colors ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 bg-background/95 backdrop-blur-md border-b border-border ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20 lg:h-24 relative">
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0 shrink-0"
          aria-label="North Houston Retina — Dr. Ahmad Rehmani home"
        >
          <img src={logo} alt="North Houston Retina logo" className="h-12 lg:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          {navLinks.map((link) =>
            "menu" in link ? (
              <div key={link.label} className="group h-full flex items-center">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 font-body text-sm font-bold tracking-wide transition-colors h-full ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 text-muted-foreground/60 group-hover:rotate-180 transition-transform duration-300" />
                </NavLink>
                <MegaMenu columns={link.menu} />
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="hidden xl:flex flex-col items-end leading-tight">
            <span className="font-body text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
              Appointments
            </span>
            <a
              href="tel:+13465870223"
              className="font-body text-foreground font-bold text-base hover:text-accent transition-colors"
            >
              (346) 587-0223
            </a>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-body text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-50 flex flex-col items-stretch py-4 bg-background border-t border-border shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link, idx) =>
            "menu" in link ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileOpenIdx(mobileOpenIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-base text-foreground font-body font-bold py-3.5 px-6 hover:bg-accent-pale transition-colors text-left"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileOpenIdx === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileOpenIdx === idx && (
                  <div className="bg-accent-pale/40 py-2">
                    {link.menu.map((col) => (
                      <div key={col.heading} className="py-2">
                        <p className="px-8 py-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">
                          {col.heading}
                        </p>
                        {col.items.map((item) => (
                          <div key={item.label}>
                            <Link
                              to={item.to}
                              className="block py-2 px-10 font-body text-sm text-muted-foreground hover:text-accent hover:bg-background font-medium"
                            >
                              {item.label}
                            </Link>
                            {item.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                className="block py-1.5 px-14 font-body text-[13px] text-muted-foreground/80 hover:text-accent"
                              >
                                — {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="w-full text-base text-foreground font-body font-bold py-3.5 px-6 hover:bg-accent-pale transition-colors text-left"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="px-6 pt-4 flex flex-col gap-3">
            <a
              href="tel:+13465870223"
              className="bg-accent-pale text-foreground px-6 py-3 rounded-lg text-base font-body font-bold flex items-center justify-center gap-2 border border-border"
            >
              <Phone className="w-5 h-5" />
              Call (346) 587-0223
            </a>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-body font-bold text-center shadow-lg shadow-primary/20"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
