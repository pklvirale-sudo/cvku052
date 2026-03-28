import { motion } from "framer-motion";
import LedCard from "./LedCard";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-10 px-3 sm:px-6 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Tentang Saya
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-8" 
        />

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
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Halo! Saya Yoga, seorang yang tertarik pada dunia kreativitas dan teknologi. 
                Berpengalaman di bidang potong rambut, sekaligus mampu membangun website dan 
                aplikasi dengan bantuan AI. Saya percaya bahwa keterampilan manual dan teknologi 
                modern bisa berjalan berdampingan untuk membawa manfaat bagi banyak orang.
              </p>
              <p>
                Selama 7 tahun tinggal di LKSA 'Aisyiyah Sumberrejo Bojonegoro, saya belajar 
                disiplin, tanggung jawab, dan kerja keras, mulai dari MTs, Aliyah, hingga 
                1 tahun masa pengabdian.
              </p>
              <p>
                Saat ini, saya sedang menempuh pendidikan di Pondok Bisnis Indonesia untuk 
                memperdalam ilmu wirausaha dan pengembangan digital.
              </p>
            </div>
          </LedCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
