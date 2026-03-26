import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import CertificationSection from "@/components/CertificationSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechSection from "@/components/TechSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationSection />
      <ExperienceSection />
      <TechSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;
