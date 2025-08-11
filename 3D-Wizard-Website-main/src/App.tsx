import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementWizardWebsite } from "./screens/ElementWizardWebsite";
import { AboutUsPage } from "./screens/AboutUsPage";
import { ContactUsPage } from "./screens/ContactUsPage";
import { FAQPage } from "./screens/FAQPage";
import { StartPrintPage } from "./screens/StartPrintPage";
import { ThreeDPrintingPage } from "./screens/ThreeDPrintingPage";
import { ThreeDScanningPage } from "./screens/ThreeDScanningPage";
import { VacuumCastingPage } from "./screens/VacuumCastingPage";
import { HeroSection } from "./screens/HeroSection/HeroSection";


export const App = (): JSX.Element => {
  return (
    <Router>
      <HeroSection />
      <Routes>
        <Route path="/" element={<ElementWizardWebsite />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/start-print" element={<StartPrintPage />} />
        <Route path="/3d-printing" element={<ThreeDPrintingPage />} />
        <Route path="/3d-scanning" element={<ThreeDScanningPage />} />
        <Route path="/vacuum-casting" element={<VacuumCastingPage />} />
        <Route path="/services" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Services - Coming Soon</h1></div>} />
        <Route path="/projects" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Projects - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
};