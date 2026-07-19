import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

// Route-level code splitting: keep the home page eager for fast first paint,
// lazy-load everything else so the initial JS bundle stays small.
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage.tsx"));
const MacularDegenerationPage = lazy(() => import("./pages/MacularDegenerationPage.tsx"));
const DryMacularDegenerationPage = lazy(() => import("./pages/DryMacularDegenerationPage.tsx"));
const CentralSerousRetinopathyPage = lazy(() => import("./pages/CentralSerousRetinopathyPage.tsx"));
const MacularPuckerPage = lazy(() => import("./pages/MacularPuckerPage.tsx"));
const MacularHolePage = lazy(() => import("./pages/MacularHolePage.tsx"));
const CystoidMacularEdemaPage = lazy(() => import("./pages/CystoidMacularEdemaPage.tsx"));
const VitreomacularTractionPage = lazy(() => import("./pages/VitreomacularTractionPage.tsx"));
const RetinalDetachmentPage = lazy(() => import("./pages/RetinalDetachmentPage.tsx"));
const LatticeDegenerationPage = lazy(() => import("./pages/LatticeDegenerationPage.tsx"));
const PosteriorVitreousDetachmentPage = lazy(() => import("./pages/PosteriorVitreousDetachmentPage.tsx"));
const DiabeticRetinopathyPage = lazy(() => import("./pages/DiabeticRetinopathyPage.tsx"));
const EndophthalmitisPage = lazy(() => import("./pages/EndophthalmitisPage.tsx"));
const UveitisPage = lazy(() => import("./pages/UveitisPage.tsx"));
const RetinalArterialOcclusionPage = lazy(() => import("./pages/RetinalArterialOcclusionPage.tsx"));
const RetinalVeinOcclusionPage = lazy(() => import("./pages/RetinalVeinOcclusionPage.tsx"));
const VitreousFloatersPage = lazy(() => import("./pages/VitreousFloatersPage.tsx"));
const MicropulseLaserPage = lazy(() => import("./pages/MicropulseLaserPage.tsx"));
const LaserPhotocoagulationPage = lazy(() => import("./pages/LaserPhotocoagulationPage.tsx"));
const PneumaticRetinopexyPage = lazy(() => import("./pages/PneumaticRetinopexyPage.tsx"));
const ParsPlanaVitrectomyPage = lazy(() => import("./pages/ParsPlanaVitrectomyPage.tsx"));
const ScleralBucklePage = lazy(() => import("./pages/ScleralBucklePage.tsx"));
const CataractComplicationsPage = lazy(() => import("./pages/CataractComplicationsPage.tsx"));
const DiagnosticsPage = lazy(() => import("./pages/DiagnosticsPage.tsx"));
const LocationsPage = lazy(() => import("./pages/LocationsPage.tsx"));
const InsurancePage = lazy(() => import("./pages/InsurancePage.tsx"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile.tsx"));
const EyeAnatomyPage = lazy(() => import("./pages/EyeAnatomyPage.tsx"));
const JuxtafovealTelangiectasiaPage = lazy(() => import("./pages/JuxtafovealTelangiectasiaPage.tsx"));
const RetinalHoleTearPage = lazy(() => import("./pages/RetinalHoleTearPage.tsx"));
const RetainedLensFragmentsPage = lazy(() => import("./pages/RetainedLensFragmentsPage.tsx"));
const DislocatedIOLPage = lazy(() => import("./pages/DislocatedIOLPage.tsx"));
const IntravitrealInjectionsPage = lazy(() => import("./pages/IntravitrealInjectionsPage.tsx"));
const SubtenonInjectionPage = lazy(() => import("./pages/SubtenonInjectionPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUsePage.tsx"));
const AccessibilityPage = lazy(() => import("./pages/AccessibilityPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60_000, refetchOnWindowFocus: false, retry: 1 },
  },
});

const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<DoctorProfile />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/macular-degeneration" element={<MacularDegenerationPage />} />
              <Route path="/services/dry-macular-degeneration" element={<DryMacularDegenerationPage />} />
              <Route path="/services/central-serous-retinopathy" element={<CentralSerousRetinopathyPage />} />
              <Route path="/services/macular-pucker" element={<MacularPuckerPage />} />
              <Route path="/services/macular-hole" element={<MacularHolePage />} />
              <Route path="/services/cystoid-macular-edema" element={<CystoidMacularEdemaPage />} />
              <Route path="/services/vitreomacular-traction" element={<VitreomacularTractionPage />} />
              <Route path="/services/retinal-detachment-tears" element={<RetinalDetachmentPage />} />
              <Route path="/services/lattice-degeneration" element={<LatticeDegenerationPage />} />
              <Route path="/services/posterior-vitreous-detachment" element={<PosteriorVitreousDetachmentPage />} />
              <Route path="/services/diabetic-retinopathy" element={<DiabeticRetinopathyPage />} />
              <Route path="/services/endophthalmitis" element={<EndophthalmitisPage />} />
              <Route path="/services/uveitis" element={<UveitisPage />} />
              <Route path="/services/retinal-arterial-occlusion" element={<RetinalArterialOcclusionPage />} />
              <Route path="/services/retinal-vein-occlusion" element={<RetinalVeinOcclusionPage />} />
              <Route path="/services/vitreous-floaters" element={<VitreousFloatersPage />} />
              <Route path="/services/micropulse-laser" element={<MicropulseLaserPage />} />
              <Route path="/services/laser-photocoagulation" element={<LaserPhotocoagulationPage />} />
              <Route path="/services/pneumatic-retinopexy" element={<PneumaticRetinopexyPage />} />
              <Route path="/services/pars-plana-vitrectomy" element={<ParsPlanaVitrectomyPage />} />
              <Route path="/services/scleral-buckle" element={<ScleralBucklePage />} />
              <Route path="/services/cataract-complications" element={<CataractComplicationsPage />} />
              <Route path="/services/diagnostics" element={<DiagnosticsPage />} />
              <Route path="/services/juxtafoveal-telangiectasia" element={<JuxtafovealTelangiectasiaPage />} />
              <Route path="/services/retinal-hole-tear" element={<RetinalHoleTearPage />} />
              <Route path="/services/retained-lens-fragments" element={<RetainedLensFragmentsPage />} />
              <Route path="/services/dislocated-intraocular-lens" element={<DislocatedIOLPage />} />
              <Route path="/services/intravitreal-injections" element={<IntravitrealInjectionsPage />} />
              <Route path="/services/subtenon-injection" element={<SubtenonInjectionPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/insurance" element={<InsurancePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/doctor/ahmad-rehmani" element={<DoctorProfile />} />
              <Route path="/eye-anatomy" element={<EyeAnatomyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
