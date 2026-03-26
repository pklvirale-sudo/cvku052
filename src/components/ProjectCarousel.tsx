import { useRef, useEffect, useState, useCallback } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "IlmiSolve",
    description:
      "Solusi cerdas untuk pelajar. Cukup jepret atau unggah foto soal ujianmu, dan biarkan AI menganalisis, menjawab, serta memberikan penjelasan langkah demi langkah secara cepat dan akurat.",
    image: "/images/ilmisolve.png",
    url: "https://ilmisolve.netlify.app",
  },
  {
    title: "IlmiGreen",
    description:
      "Aplikasi peduli lingkungan berbasis AI. Gunakan pemindai pintar untuk mengidentifikasi jenis sampah (organik/anorganik) dan pelajari cara pengelolaannya demi mewujudkan bumi yang lebih hijau.",
    image: "/images/ilmigreen.png",
    url: "https://ilmigreen.vercel.app",
  },
  {
    title: "IlmiLens",
    description:
      "Dapatkan insight mendalam dari sebuah gambar hanya dengan satu jepretan. Dilengkapi fitur analisis visual dan penerjemah instan untuk mempermudah pekerjaanmu.",
    image: "/images/ilmilens.png",
    url: "https://ilmilens.netlify.app",
  },
  {
    title: "IlmiStudio",
    description:
      "Studio foto virtual di genggamanmu! Sulap satu foto biasa menjadi puluhan gaya profesional dalam sekejap. Sangat cocok untuk upgrade foto profil atau mempercantik foto produk jualanmu.",
    image: "/images/ilmistudio.png",
    url: "https://ilmistudio.vercel.app",
  },
  {
    title: "Amalize",
    description:
      "Aplikasi pendamping ibadah harian Muslim terlengkap. Jaga istiqomahmu dengan Tracker Ibadah pintar, temukan arah Kiblat akurat, akses kumpulan doa & dzikir, serta pantau jadwal sholat dan kalender Hijriah dalam satu genggaman.",
    image: "/images/amalize.png",
    url: "https://amalize.vercel.app",
  },
];

const AUTOPLAY_INTERVAL = 4500;

const ProjectCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.offsetWidth, behavior: "smooth" });
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % projects.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  // Track active index on manual scroll
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const closest = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(closest, projects.length - 1));
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Carousel track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="snap-start shrink-0 w-full px-1.5 sm:px-2"
          >
            <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden border border-border/40 bg-card/60 backdrop-blur-md shadow-[0_8px_32px_hsl(202_100%_58%/0.08)] hover:shadow-[0_12px_40px_hsl(202_100%_58%/0.15)] hover:border-primary/40 transition-all duration-300">
              {/* Title */}
              <div className="px-4 pt-4 pb-2">
                <h4 className="font-heading text-base md:text-lg font-bold text-primary leading-tight">
                  {project.title}
                </h4>
              </div>

              {/* Image - full width no padding */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-background/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <div className="px-4 pt-3 pb-2 flex-1">
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* CTA Button - smaller */}
              <div className="px-4 pb-4 pt-1 mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-sm justify-center text-center text-[11px] md:text-xs py-1.5 px-3 inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={12} />
                  Kunjungi Web
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              scrollToIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 bg-primary shadow-[0_0_8px_hsl(202_100%_58%/0.5)]"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
