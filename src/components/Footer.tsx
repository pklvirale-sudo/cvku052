import { Instagram, Youtube, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-2 sm:px-4 border-t border-border/30">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/gatama_52?igsh=MTBwb25rMG1kMXN0aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@gatama52"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@gatama_limadua?si=cH7WpEO3Xxft4tA5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://github.com/gatama052"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yoga-pratama-9634b83b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2025 Dibuat dengan <span className="text-destructive">❤️</span> oleh <span className="text-primary font-medium">Yoga Pratama</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
