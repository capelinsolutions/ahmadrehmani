import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = ["About", "Services", "Locations", "Reviews", "Insurance", "FAQ", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      role="navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        background: "rgba(11,31,75,0.97)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex flex-col" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="font-display text-lg text-primary-foreground font-semibold leading-tight">Dr. Ahmad Rehmani</span>
          <span className="font-body text-[11px] text-gold-light uppercase tracking-[0.12em]">Retina Specialist · NJ & TX</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-3 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-md transition-colors font-body"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+19739873380" className="flex items-center gap-1.5 text-gold-light text-sm font-body font-medium">
            <Phone className="w-4 h-4" />
            (973) 987-3380
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="bg-accent hover:bg-accent-light text-accent-foreground px-5 py-2 rounded-lg text-sm font-body font-semibold transition-colors"
          >
            Book Consultation
          </a>
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
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-primary/98 flex flex-col items-center pt-12 gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-xl text-primary-foreground/90 hover:text-primary-foreground font-body py-2"
            >
              {link}
            </button>
          ))}
          <a
            href="tel:+19739873380"
            className="mt-6 bg-accent text-accent-foreground px-8 py-3 rounded-lg text-lg font-body font-semibold flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call (973) 987-3380
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
