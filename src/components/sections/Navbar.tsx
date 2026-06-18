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
  { label: "Reviews", to: "/reviews" },
  { label: "Insurance", to: "/insurance" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

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

  return (
    <nav
      role="navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      style={{
        background:
          "linear-gradient(135deg, hsl(222 80% 7%) 0%, hsl(220 78% 11%) 50%, hsl(215 75% 16%) 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 min-w-0" aria-label="North Houston Retina — Dr. Ahmad Rehmani home">
          <div className="bg-white rounded-lg px-2.5 py-1.5 shadow-sm shrink-0 flex items-center">
            <img
              src={logo}
              alt="North Houston Retina logo"
              className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.to} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors font-body ${
                      isActive
                        ? "text-primary-foreground bg-white/15"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </NavLink>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-72 bg-background rounded-xl shadow-2xl border border-border overflow-hidden">
                    <div className="px-4 py-3 bg-accent-pale border-b border-border">
                      <p className="font-display text-foreground text-sm font-semibold">Conditions & Treatments</p>
                      <p className="font-body text-muted-foreground text-[11px]">Browse by category</p>
                    </div>
                    <div className="py-2">
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/services/${cat.slug}`}
                          className="block px-4 py-2.5 font-body text-sm text-foreground hover:bg-accent-pale hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <div className="border-t border-border mt-1 pt-1">
                        <Link
                          to="/services"
                          className="block px-4 py-2.5 font-body text-sm text-accent font-semibold hover:bg-accent-pale"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded-md transition-colors font-body ${
                    isActive
                      ? "text-primary-foreground bg-white/15"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+13465870223" className="flex items-center gap-1.5 text-gold-light text-sm font-body font-medium">
            <Phone className="w-4 h-4" />
            (346) 587-0223
          </a>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-light text-accent-foreground px-5 py-2 rounded-lg text-sm font-body font-semibold transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute left-0 right-0 top-full z-50 flex flex-col items-stretch py-4 gap-0 shadow-2xl border-t border-white/10 max-h-[calc(100vh-64px)] overflow-y-auto"
          style={{ background: "hsl(215 65% 18%)" }}
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.to}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-base text-primary-foreground/90 hover:bg-white/10 font-body py-3.5 px-6 transition-colors text-left"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-black/20">
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/services/${cat.slug}`}
                        className="block py-2.5 px-10 font-body text-sm text-primary-foreground/85 hover:bg-white/10"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <Link to="/services" className="block py-2.5 px-10 font-body text-sm text-gold-light font-semibold hover:bg-white/10">
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="w-full text-base text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10 font-body py-3.5 px-6 transition-colors text-left"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="px-6 pt-4 flex flex-col gap-3">
            <a
              href="tel:+13465870223"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg text-base font-body font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (346) 587-0223
            </a>
            <Link
              to="/contact"
              className="bg-white/10 text-primary-foreground px-6 py-3 rounded-lg text-base font-body font-semibold text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
