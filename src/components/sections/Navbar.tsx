import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/nhr-logo.png";
import { serviceCategories } from "@/data/services";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Location", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

// Split categories into two surgical/medical-leaning columns
const SURGICAL_SLUGS = new Set([
  "retinal-detachment-tears",
  "vitreous-surgical-conditions",
  "macular-diseases",
]);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const surgical = serviceCategories.filter((c) => SURGICAL_SLUGS.has(c.slug));
  const medical = serviceCategories.filter((c) => !SURGICAL_SLUGS.has(c.slug));

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
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0 shrink-0"
          aria-label="North Houston Retina — Dr. Ahmad Rehmani home"
        >
          <img
            src={logo}
            alt="North Houston Retina logo"
            className="h-12 lg:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.to} className="group h-full flex items-center">
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

                {/* Mega Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[min(1100px,calc(100vw-2rem))] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 pt-3">
                  <div className="bg-background border border-border shadow-2xl rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 p-6 lg:p-10">
                      <div className="md:col-span-3">
                        <h4 className="font-display text-foreground font-bold text-lg mb-5">
                          Surgical Retina
                        </h4>
                        <ul className="space-y-3.5">
                          {surgical.map((c) => (
                            <li key={c.slug}>
                              <Link
                                to={`/services/${c.slug}`}
                                className="font-body text-sm text-muted-foreground hover:text-accent transition-colors block"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-3">
                        <h4 className="font-display text-foreground font-bold text-lg mb-5">
                          Medical Retina
                        </h4>
                        <ul className="space-y-3.5">
                          {medical.map((c) => (
                            <li key={c.slug}>
                              <Link
                                to={`/services/${c.slug}`}
                                className="font-body text-sm text-muted-foreground hover:text-accent transition-colors block"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1.5 mt-5 font-body text-xs font-bold text-accent hover:text-accent-light transition-colors"
                        >
                          View all services →
                        </Link>
                      </div>

                      {/* Featured panel */}
                      <div className="md:col-span-6 bg-accent-pale/60 rounded-xl p-6 lg:p-7 flex flex-col justify-between border border-border">
                        <div>
                          <span className="font-body text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                            Featured Specialist
                          </span>
                          <h4 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3">
                            Dr. Ahmad Rehmani, D.O.
                          </h4>
                          <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                            Fellowship-trained vitreoretinal surgeon delivering elite care
                            for complex retinal and ocular conditions across North Houston.
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            to="/about"
                            className="inline-flex items-center font-body text-sm font-bold text-foreground border-b-2 border-gold pb-0.5 hover:text-accent transition-colors"
                          >
                            Meet our Surgeon
                          </Link>
                          <Link
                            to="/contact"
                            className="inline-flex items-center font-body text-sm font-semibold text-accent hover:text-accent-light transition-colors ml-auto"
                          >
                            Book consultation →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.to}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-base text-foreground font-body font-bold py-3.5 px-6 hover:bg-accent-pale transition-colors text-left"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-accent-pale/40">
                    {serviceCategories.map((cat) => (
                      <Link
                          key={cat.slug}
                          to={`/services/${cat.slug}`}
                          className="block py-2.5 px-10 font-body text-sm text-muted-foreground hover:text-accent hover:bg-background font-medium"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block py-2.5 px-10 font-body text-sm text-accent font-bold hover:bg-background"
                    >
                      View All Services →
                    </Link>
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
