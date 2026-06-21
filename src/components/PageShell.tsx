import { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

type Props = { children: ReactNode };

const PageShell = ({ children }: Props) => (
  <>
    <a href="#main-content" className="skip-to-content">Skip to content</a>
    <Navbar />
    <main id="main-content" role="main">
      {children}
    </main>
    <Footer />
  </>
);

export default PageShell;
