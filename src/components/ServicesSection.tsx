import { Scissors, Code, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import LedCard from "./LedCard";

const services = [
  {
    icon: Scissors,
    title: "Barber",
    items: [
      "Potong rambut pria",
      "Potong rambut anak-anak",
      "Gaya potongan rapi dan modern",
    ],
  },
  {
    icon: Code,
    title: "Website & AI Project",
    items: [
      "Landing page sederhana",
      "Website portfolio",
      "Website profil usaha (UMKM)",
      "Aplikasi web sederhana",
      "Integrasi fitur AI dasar",
      "Tool sederhana berbasis AI",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-12 px-4 sm:px-6 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Apa yang Bisa Saya Bantu?
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-10"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <LedCard whileHover={{ scale: 1.02, y: -4 }} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-container w-10 h-10 flex-shrink-0">
                    <svc.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {svc.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Sparkles size={12} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </LedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
