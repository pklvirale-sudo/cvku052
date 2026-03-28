import { Scissors, Code, Palette, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import LedCard from "./LedCard";

const skills = [
  {
    icon: Scissors,
    title: "Potong rambut pria dan anak-anak",
    description: "Berpengalaman memotong rambut dengan berbagai gaya",
  },
  {
    icon: Code,
    title: "Desain & pengembangan website dengan AI",
    description: "Membuat website modern menggunakan AI tools",
  },
  {
    icon: Palette,
    title: "Pembuatan aplikasi web sederhana",
    description: "Mengembangkan aplikasi web interaktif",
  },
  {
    icon: Lightbulb,
    title: "Kreativitas & inovasi digital",
    description: "Menggabungkan kreativitas dengan teknologi",
  },
];

const SkillsSection = () => {
  return (
    <section id="keahlian" className="py-7 px-4 sm:px-6 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Keahlian
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-12" 
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <LedCard
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="icon-container w-12 h-12 flex-shrink-0"
                >
                  <skill.icon size={24} className="text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </div>
              </LedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
