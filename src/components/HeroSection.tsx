import { Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("pengalaman")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center justify-center px-5 sm:px-6 md:px-8 pb-8 pt-3 sm:pt-4 relative overflow-hidden min-h-[100svh]">
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="profile-ring mb-2"
      >
        <div className="profile-photo-bg w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
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
        className="name-glow text-2xl sm:text-3xl md:text-5xl text-center mb-1 cursor-default"
      >
        Yoga Pratama
      </motion.h1>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-heading text-sm sm:text-base md:text-lg text-primary text-center mb-2 tracking-wide"
      >
        Barber, Web Builder & AI Creator
      </motion.h2>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-muted-foreground text-center max-w-md mb-5 text-xs sm:text-sm md:text-base px-2 leading-relaxed"
      >
        Saya menggabungkan kreativitas, teknologi, dan AI untuk menciptakan solusi modern yang bermanfaat — mulai dari jasa barber hingga project website dan aplikasi berbasis AI.
      </motion.p>

      {/* CTA Buttons - 2 inline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-row justify-center gap-3 px-2"
      >
        <button onClick={scrollToProjects} className="btn-primary-sm text-xs sm:text-sm whitespace-nowrap">
          <Briefcase size={14} />
          Lihat Project
        </button>
        <button onClick={scrollToContact} className="btn-outline-sm text-xs sm:text-sm whitespace-nowrap">
          <Mail size={14} />
          Hubungi Saya
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
