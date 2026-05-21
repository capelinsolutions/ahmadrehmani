import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Location", to: "/locations" },
  { label: "Reviews", to: "/reviews" },
  { label: "Insurance", to: "/insurance" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <nav
      role="navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      style={{ background: "hsl(215 65% 18% / 0.97)", backdropFilter: "blur(12px)" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo / Wordmark — replace with image when uploaded */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <span className="font-display text-primary-foreground text-xl font-bold">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base lg:text-lg text-primary-foreground font-semibold leading-tight">Dr. Ahmad Rehmani, D.O.</span>
            <span className="font-body text-[10px] lg:text-[11px] text-gold-light uppercase tracking-[0.12em]">North Houston Retina · Cypress, TX</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
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
          className="lg:hidden absolute left-0 right-0 top-full z-50 flex flex-col items-center py-6 gap-1 shadow-2xl border-t border-white/10"
          style={{ background: "hsl(215 65% 18%)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="w-full text-base text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10 font-body py-3.5 px-6 transition-colors text-left"
            >
              {link.label}
            </Link>
          ))}
          <div className="w-full px-6 pt-4 flex flex-col gap-3">
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
