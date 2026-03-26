import { Briefcase, Mail, Mouse } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pb-12 pt-16 sm:pt-14 relative overflow-hidden">
      {/* Tagline - At the very top */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="heading-glow text-[10px] sm:text-xs md:text-sm text-center tracking-widest leading-relaxed absolute top-3 sm:top-4 left-4 right-4 mx-auto"
      >
        MENCIPTAKAN GAYA DAN TEKNOLOGI
        <br />
        YANG BERMANFAAT BAGI SESAMA
      </motion.p>

      {/* Profile Photo - With blue gradient background */}
      <div className="profile-ring mb-5">
        <div className="profile-photo-bg w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
          <img
            src={profilePhoto}
            alt="Yoga Pratama"
            className="w-full h-full object-cover object-[center_15%]"
          />
        </div>
      </div>

      {/* Name - Smaller to fit one line */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.02, textShadow: "0 0 20px hsl(202 100% 58% / 0.5)" }}
        className="name-glow text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center mb-3 cursor-default"
      >
        Yoga Pratama
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="font-heading text-sm sm:text-lg md:text-xl text-muted-foreground text-center mb-4 max-w-md px-2"
      >
        Barber dan Pengembang Website serta Aplikasi Berbasis AI
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-muted-foreground text-center max-w-lg mb-6 text-xs sm:text-sm md:text-base px-2"
      >
        Menggabungkan kreativitas dan teknologi untuk menciptakan solusi digital modern yang bermanfaat bagi banyak orang
      </motion.p>

      {/* CTA Buttons - Always in one row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-row gap-3"
      >
        <a
          href="#pengalaman"
          className="btn-outline-sm"
          onClick={(e) => { e.preventDefault(); document.getElementById("pengalaman")?.scrollIntoView({ behavior: "smooth" }); }}
        >
          <Briefcase size={16} />
          Lihat Portofolio
        </a>
        <button
          onClick={scrollToContact}
          className="btn-primary-sm"
        >
          <Mail size={16} />
          Hubungi Saya
        </button>
      </motion.div>

    </section>
  );
};

export default HeroSection;
