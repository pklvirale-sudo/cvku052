import { Bot, Moon, Monitor, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Bot,
    title: "AI Assistant Portfolio",
    desc: "Membantu pengunjung mengenal portfolio secara interaktif",
    status: "active",
  },
  {
    icon: Moon,
    title: "Amalize",
    desc: "Aplikasi pendamping ibadah harian Muslim",
    status: "active",
  },
  {
    icon: Monitor,
    title: "Website Modern & Responsif",
    desc: "Lebih rapi dan nyaman di berbagai perangkat",
    status: "active",
  },
];

const InProgressSection = () => {
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
          Sedang Saya Kembangkan
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm sm:text-base text-center leading-relaxed mb-10"
        >
          Saat ini saya sedang mengeksplorasi dan mengembangkan beberapa solusi digital yang berfokus pada pengalaman pengguna, interaktivitas, dan pemanfaatan teknologi modern.
        </motion.p>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex items-start gap-4 p-4"
            >
              <div className="relative flex-shrink-0">
                <div className="icon-container w-10 h-10">
                  <item.icon size={18} className="text-primary" />
                </div>
                {item.status === "active" && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-background animate-pulse" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground">{item.title}</h3>
                  <CheckCircle size={14} className="text-primary/60 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InProgressSection;
