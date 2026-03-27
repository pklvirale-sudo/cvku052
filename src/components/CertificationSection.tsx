import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import LedCard from "./LedCard";

const certifications = [
  {
    title: "Dasar dan Penggunaan Generatif AI",
    issuer: "Codepolitan • 2025",
    description: "Program AI Opportunity Fund: Asia Pacific, berkolaborasi dengan AVPN dan didukung oleh Google.org serta Asian Development Bank.",
    link: "https://ruangai.codepolitan.com/certificate/F291BD5A87",
  },
  {
    title: "Revolusi Deployment dengan EdgeOne",
    issuer: "Codepolitan • 2026",
    description: "Program ini membekali kemampuan membangun website dengan AI Assist serta melakukan deployment instan dan aman menggunakan infrastruktur EdgeOne.",
    link: "https://www.codepolitan.com/c/HH475DG/",
  },
];

const CertificationSection = () => {
  return (
    <section id="sertifikasi" className="py-16 px-5 sm:px-6 md:px-8">
      <div className="container max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Sertifikasi
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-12" 
        />

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <LedCard whileHover={{ scale: 1.02, y: -4 }}>
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="icon-container flex-shrink-0"
                  >
                    <Award size={24} className="text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-foreground text-sm mb-4">
                      {cert.description}
                    </p>
                    <motion.a
                      href={cert.link}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-outline inline-flex text-sm py-2 px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Lihat Sertifikat
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </LedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
