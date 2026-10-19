import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";
import { Page } from "@/components/layout/Page";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DiagnosticsPage } from "@/pages/DiagnosticsPage";
import { Home } from "@/pages/Home";
import { ResearchPage } from "@/pages/ResearchPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { TeamPage } from "@/pages/TeamPage";
import { TestsPage } from "@/pages/TestsPage";

const titles = {
  "/": "Genome Labs",
  "/about": "About · Genome Labs",
  "/services": "Services · Genome Labs",
  "/diagnostics": "Diagnostics · Genome Labs",
  "/tests": "Test List · Genome Labs",
  "/research": "Research · Genome Labs",
  "/team": "Team · Genome Labs",
  "/contact": "Contact · Genome Labs",
};

function Frame() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || "Genome Labs";
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Page>
      <Navbar />
      <main key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </Page>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Frame />
    </BrowserRouter>
  );
}
