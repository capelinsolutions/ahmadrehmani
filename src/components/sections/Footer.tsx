import { Lock } from "lucide-react";

const footerServices = ["Macular Degeneration (AMD)", "Diabetic Retinopathy", "Retinal Detachment & Surgery", "Floaters & Flashes", "Vitreous Hemorrhage", "Retinal Imaging (OCT)", "Clinical Trial Access"];
const footerPractice = ["About Dr. Rehmani", "Cypress TX Office", "Insurance Accepted", "Patient Reviews", "FAQ", "Book Appointment"];
const footerContact = ["(346) 587-0223", "ahmadsrehmani@gmail.com", "27700 Northwest Freeway, Suite 355", "Cypress, TX 77433", "@retinadoctor on Instagram"];

const sectionMap: Record<string, string> = {
  "About Dr. Rehmani": "about",
  "Cypress TX Office": "locations",
  "Insurance Accepted": "insurance",
  "Patient Reviews": "reviews",
  "FAQ": "faq",
  "Book Appointment": "contact",
};

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-primary-foreground text-lg font-semibold">Dr. Ahmad Rehmani, D.O.</p>
            <p className="font-body text-gold-light text-xs uppercase tracking-[0.12em] mt-1">North Houston Retina, PLLC</p>
            <p className="font-body text-primary-foreground/55 text-sm mt-4 leading-relaxed">
              UTMB fellowship-trained vitreoretinal specialist serving Cypress, Bridgeland, Katy, and Northwest Houston. Dedicated to preserving and restoring vision through subspecialty retinal care.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-gold-light text-xs uppercase tracking-[0.12em] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s}><button onClick={() => scrollTo("services")} className="font-body text-[13px] text-primary-foreground/55 hover:text-primary-foreground transition-colors text-left">{s}</button></li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h4 className="font-body text-gold-light text-xs uppercase tracking-[0.12em] font-semibold mb-4">Practice</h4>
            <ul className="space-y-2">
              {footerPractice.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo(sectionMap[p] || "hero")}
                    className="font-body text-[13px] text-primary-foreground/55 hover:text-primary-foreground transition-colors text-left"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-gold-light text-xs uppercase tracking-[0.12em] font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerContact.map((c) => (
                <li key={c} className="font-body text-[13px] text-primary-foreground/55 break-words">{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40 text-center lg:text-left">
            © 2026 Dr. Ahmad Rehmani, D.O. — North Houston Retina, PLLC. All rights reserved. | Privacy Policy | Terms of Use | Accessibility
          </p>
          <div className="inline-flex items-center gap-1.5 bg-accent/20 text-accent-light px-3 py-1.5 rounded-full">
            <Lock className="w-3.5 h-3.5" />
            <span className="font-body text-xs font-medium">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
