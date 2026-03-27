import { Briefcase, Mail, Bot, Award, Rocket, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const trustItems = [
  { icon: Rocket, label: "5+ Project" },
  { icon: Award, label: "2 Sertifikasi" },
  { icon: Scissors, label: "Barber & Web Creator" },
  { icon: Bot, label: "AI-Based Portfolio" },
];

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("pengalaman")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };
  const openChatbot = () => {
    window.dispatchEvent(new CustomEvent("open-chatbot"));
  };

  return (
    <section className="flex flex-col items-center justify-center px-5 sm:px-6 md:px-8 pb-16 pt-12 sm:pt-14 relative overflow-hidden min-h-[100svh]">
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="profile-ring mb-6"
      >
        <div className="profile-photo-bg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
          <img
            src={profilePhoto}
            alt="Yoga Pratama"
            className="w-full h-full object-cover object-[center_15%]"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="name-glow text-2xl sm:text-3xl md:text-5xl text-center mb-3 cursor-default"
      >
        Yoga Pratama
      </motion.h1>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-heading text-sm sm:text-base md:text-lg text-primary text-center mb-3 tracking-wide"
      >
        Barber, Web Builder & AI Creator
      </motion.h2>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-muted-foreground text-center max-w-md mb-8 text-xs sm:text-sm md:text-base px-2 leading-relaxed"
      >
        Saya menggabungkan kreativitas, teknologi, dan AI untuk menciptakan solusi modern yang bermanfaat — mulai dari jasa barber hingga project website dan aplikasi berbasis AI.
      </motion.p>

      {/* CTA Buttons - 3 inline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-row flex-wrap justify-center gap-2.5 mb-10 px-2"
      >
        <button onClick={scrollToProjects} className="btn-primary-sm text-xs sm:text-sm whitespace-nowrap">
          <Briefcase size={14} />
          Lihat Project
        </button>
        <button onClick={openChatbot} className="btn-outline-sm text-xs sm:text-sm whitespace-nowrap">
          <Bot size={14} />
          Tanya AI
        </button>
        <button onClick={scrollToContact} className="btn-outline-sm text-xs sm:text-sm whitespace-nowrap">
          <Mail size={14} />
          Hubungi Saya
        </button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg px-2"
      >
        {trustItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs sm:text-sm border border-border/40 bg-card/40 backdrop-blur-sm"
          >
            <item.icon size={14} className="text-primary flex-shrink-0" />
            <span className="text-muted-foreground whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
