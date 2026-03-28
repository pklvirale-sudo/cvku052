import { Palette, Target, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  { icon: Palette, text: "Desain yang modern" },
  { icon: Target, text: "Fungsi yang jelas" },
  { icon: Lightbulb, text: "Solusi yang mudah dipahami" },
  { icon: Sparkles, text: "Pemanfaatan AI untuk kebutuhan nyata" },
];

const WhyDifferentSection = () => {
  return (
    <section className="py-10 px-5 sm:px-6 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Kenapa Saya Berbeda?
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm sm:text-base text-center leading-relaxed mb-10"
        >
          Saya percaya bahwa kreativitas dan teknologi bisa berjalan bersama. Dengan latar pengalaman di bidang barber, pengembangan web, dan eksplorasi AI, saya senang membangun solusi yang tidak hanya menarik secara visual, tetapi juga berguna secara nyata.
        </motion.p>

        <div className="grid grid-cols-2 gap-4">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex items-center gap-3 p-4"
            >
              <div className="icon-container w-10 h-10 flex-shrink-0">
                <p.icon size={18} className="text-primary" />
              </div>
              <span className="text-foreground text-xs sm:text-sm font-medium leading-tight">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
