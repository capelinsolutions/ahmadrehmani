import { ReactNode } from "react";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

type Props = { children: ReactNode };

const PageShell = ({ children }: Props) => (
  <>
    <a href="#main-content" className="skip-to-content">Skip to content</a>
    <EmergencyBanner />
    <Navbar />
    <main id="main-content" role="main">
      {children}
    </main>
    <Footer />
  </>
);

export default PageShell;
