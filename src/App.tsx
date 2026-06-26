import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.tsx";
import MacularDegenerationPage from "./pages/MacularDegenerationPage.tsx";
import CentralSerousRetinopathyPage from "./pages/CentralSerousRetinopathyPage.tsx";
import MacularPuckerPage from "./pages/MacularPuckerPage.tsx";
import MacularHolePage from "./pages/MacularHolePage.tsx";
import CystoidMacularEdemaPage from "./pages/CystoidMacularEdemaPage.tsx";
import VitreomacularTractionPage from "./pages/VitreomacularTractionPage.tsx";
import RetinalDetachmentPage from "./pages/RetinalDetachmentPage.tsx";
import LatticeDegenerationPage from "./pages/LatticeDegenerationPage.tsx";
import LocationsPage from "./pages/LocationsPage.tsx";
import InsurancePage from "./pages/InsurancePage.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import DoctorProfile from "./pages/DoctorProfile.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<DoctorProfile />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/macular-degeneration" element={<MacularDegenerationPage />} />
            <Route path="/services/central-serous-retinopathy" element={<CentralSerousRetinopathyPage />} />
            <Route path="/services/macular-pucker" element={<MacularPuckerPage />} />
            <Route path="/services/macular-hole" element={<MacularHolePage />} />
            <Route path="/services/cystoid-macular-edema" element={<CystoidMacularEdemaPage />} />
            <Route path="/services/vitreomacular-traction" element={<VitreomacularTractionPage />} />
            <Route path="/services/retinal-detachment-tears" element={<RetinalDetachmentPage />} />
            <Route path="/services/lattice-degeneration" element={<LatticeDegenerationPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/doctor/ahmad-rehmani" element={<DoctorProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
