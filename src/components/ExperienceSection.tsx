import { Scissors, Code } from "lucide-react";
import { motion } from "framer-motion";
import LedCard from "./LedCard";
import ProjectCarousel from "./ProjectCarousel";

const haircutExperience = [
  "Memotong rambut teman-teman di LKSA 'Aisyiyah",
  "Potong rambut gratis saat Festival Ramadhan di Masjid At-Taqwa",
];

const ExperienceSection = () => {
  return (
    <section id="pengalaman" className="py-10 px-5 sm:px-6 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Pengalaman
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-12" 
        />

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <LedCard
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="icon-container"
                >
                  <Scissors size={24} className="text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Potong Rambut
                </h3>
              </div>
              <ul className="space-y-2 ml-2">
                {haircutExperience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm md:text-base">{exp}</span>
                  </li>
                ))}
              </ul>
            </LedCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <LedCard
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="icon-container"
                >
                  <Code size={24} className="text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-primary">
                  Web & Aplikasi AI
                </h3>
              </div>
              <ProjectCarousel />
            </LedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
