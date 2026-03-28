import { useState, useRef, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationSection from "@/components/CertificationSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechSection from "@/components/TechSection";
import InProgressSection from "@/components/InProgressSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCornerClick = useCallback(() => {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    if (clickCount.current >= 3) {
      clickCount.current = 0;
      setAdminOpen(true);
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 600);
    }
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <CertificationSection />
      <ExperienceSection />
      <TechSection />
      <InProgressSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ChatBot />
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
      {/* Hidden triple-click trigger - bottom left corner */}
      <div
        onClick={handleCornerClick}
        className="fixed bottom-0 left-0 w-12 h-12 z-[100]"
        aria-hidden="true"
      />
    </main>
  );
};

export default Index;
