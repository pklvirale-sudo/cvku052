import { Heart, Cloud, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import LedCard from "./LedCard";

const technologies = [
  {
    icon: Heart,
    name: "Lovable AI",
    description: "Builder website dan aplikasi",
  },
  {
    icon: Cloud,
    name: "Vercel & Netlify",
    description: "Deployment dan publikasi web",
  },
  {
    icon: Sparkles,
    name: "AI Tools",
    description: "Analisis dan integrasi fitur pintar",
  },
];

const TechSection = () => {
  return (
    <section id="teknologi" className="py-12 px-2 sm:px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-lg sm:text-xl md:text-2xl text-center mb-2"
        >
          Teknologi & AI Tools
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-12" 
        />

        <div className="grid gap-4 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <LedCard
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="text-center py-8"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="icon-container w-16 h-16 mx-auto mb-4"
                >
                  <tech.icon size={32} className="text-primary" />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {tech.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tech.description}
                </p>
              </LedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
