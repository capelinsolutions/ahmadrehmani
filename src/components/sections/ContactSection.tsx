import { useState, type FormEvent } from "react";
import { Phone, MapPin, Globe, Send, CheckCircle, Instagram, Facebook, Star, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const ref = useScrollAnimation();

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <span className="font-body text-sm text-accent font-semibold uppercase tracking-wider">Get in Touch</span>
          <h2 className="font-display text-foreground text-3xl lg:text-4xl font-bold mt-3">
            Request an Appointment or Ask a Question
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Now welcoming new patients in Cypress, Bridgeland, Katy, and the Northwest Houston area.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 fade-up">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-accent-pale border border-accent/20 rounded-2xl p-12 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-accent mx-auto" />
                <h3 className="font-display text-2xl font-bold text-foreground">Request Received!</h3>
                <p className="font-body text-muted-foreground">Thank you. Our team will contact you within one business day to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">First Name *</label>
                    <input id="firstName" type="text" required placeholder="John" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">Last Name *</label>
                    <input id="lastName" type="text" required placeholder="Smith" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">Phone Number *</label>
                    <input id="phone" type="tel" required placeholder="(555) 000-0000" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">Email Address</label>
                    <input id="email" type="email" placeholder="john@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">Reason for Visit *</label>
                  <select id="service" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition">
                    <option value="">Select reason</option>
                    <option>Macular Degeneration / AMD</option>
                    <option>Diabetic Retinopathy</option>
                    <option>Retinal Detachment / Emergency</option>
                    <option>New Floaters or Flashes</option>
                    <option>Comprehensive Retinal Exam</option>
                    <option>Specialist Second Opinion</option>
                    <option>Clinical Trial Inquiry</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="insurance" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">Insurance Provider</label>
                  <input id="insurance" type="text" placeholder="e.g. Aetna, Wellpoint, Multiplan, Medicare..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="message" className="font-body text-[13px] text-foreground uppercase tracking-wider font-semibold block mb-1.5">Additional Information</label>
                  <textarea id="message" rows={4} placeholder="Describe your symptoms or concerns..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-body text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition resize-none" />
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-light text-accent-foreground py-3.5 rounded-lg font-body font-semibold text-base flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-5 h-5" /> Send Appointment Request
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  🔒 Your information is protected under HIPAA and will never be shared.
                </p>
              </form>
            )}
          </div>

          {/* Right panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "(346) 587-0223", href: "tel:+13465870223", sub: "Mon–Fri · 8:00 AM – 5:00 PM" },
                { icon: Mail, label: "Email", value: "ahmadsrehmani@gmail.com", href: "mailto:ahmadsrehmani@gmail.com" },
                { icon: MapPin, label: "Office Address", value: "27700 Northwest Freeway, Suite 355, Cypress, TX 77433" },
                { icon: Globe, label: "Practice", value: "North Houston Retina, PLLC" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-pale flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-sm text-foreground font-medium hover:text-accent transition-colors break-words">{item.value}</a>
                    ) : (
                      <p className="font-body text-sm text-foreground font-medium">{item.value}</p>
                    )}
                    {item.sub && <p className="font-body text-xs text-muted-foreground mt-0.5">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Social panel */}
            <div className="bg-primary rounded-xl p-6 space-y-4">
              <h3 className="font-display text-primary-foreground text-lg font-semibold">Connect With Dr. Rehmani</h3>
              <p className="font-body text-primary-foreground/60 text-sm">
                Follow @retinadoctor on Instagram for retinal health education — "retina in simpler terms."
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/retinadoctor", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Star, href: "https://www.healthgrades.com/physician/dr-ahmad-rehmani", label: "Healthgrades" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-primary-mid flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SectionCTA to="/contact" label="Contact Us" />
      </div>
    </section>
  );
};

export default ContactSection;
