import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import LedCard from "./LedCard";

const education = [
  {
    year: "2018",
    school: "SDN Tegalkodo 01 Sukosewu Bojonegoro",
    status: "Lulus",
  },
  {
    year: "2021",
    school: "MTs M 03 Sumberrejo Bojonegoro",
    status: "Lulus",
  },
  {
    year: "2024",
    school: "MA M 01 Sumberrejo Bojonegoro",
    status: "Lulus",
  },
  {
    year: "2025",
    school: "Pondok Bisnis Indonesia Yogyakarta",
    status: "Sedang Menempuh",
  },
];

const EducationSection = () => {
  return (
    <section id="pendidikan" className="py-12 px-4 sm:px-6 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Pendidikan
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-12" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-stretch gap-4"
            >
              {/* Timeline Line & Static Dot */}
              <div className="relative flex flex-col items-center min-h-[80px]">
                <div 
                  className="w-0.5 absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, hsl(202 100% 58% / 0.5), transparent)" }}
                />
                <div 
                  className="w-3 h-3 rounded-full absolute z-10"
                  style={{
                    top: "0",
                    backgroundColor: "hsl(202,100%,58%)",
                    boxShadow: "0 0 12px hsl(202 100% 58% / 0.6)",
                  }}
                />
              </div>

              {/* Content Card */}
              <LedCard
                className="flex-1 min-h-[80px]"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={16} className="text-primary flex-shrink-0" />
                  <span className="text-primary text-sm font-medium">
                    {edu.year}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    • {edu.status}
                  </span>
                </div>
                <h3 className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight">
                  {edu.school}
                </h3>
              </LedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
