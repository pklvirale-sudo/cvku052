import { useState } from "react";
import { Mail, Instagram, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import LedCard from "./LedCard";

// ============================================================
// KONFIGURASI EMAILJS - ISI DENGAN DATA AKUN EMAILJS KAMU
// 1. Daftar di https://www.emailjs.com/
// 2. Buat Email Service (Gmail, Outlook, dll) → dapatkan SERVICE_ID
// 3. Buat Email Template → dapatkan TEMPLATE_ID
//    - Di template, gunakan variabel: {{name}}, {{email}}, {{message}}
// 4. Ambil Public Key dari Account > General > Public Key
// ============================================================
const EMAILJS_SERVICE_ID = "yoga_0906";
const EMAILJS_TEMPLATE_ID = "template_ve1rctu";
const EMAILJS_PUBLIC_KEY = "Th3HEgg2zStVvYkNP";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorMsg("Semua field wajib diisi.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Format email tidak valid.");
      return;
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedMessage.length > 2000) {
      setStatus("error");
      setErrorMsg("Input melebihi batas karakter.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Pesan dari ${trimmedName}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Gagal mengirim pesan. Silakan coba lagi nanti.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isLoading = status === "loading";

  return (
    <section id="kontak" className="py-12 px-2 sm:px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-glow text-xl sm:text-2xl md:text-3xl text-center mb-2"
        >
          Kontak
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-underline mb-12" 
        />

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <motion.a
              href="mailto:pratamma0906@gmail.com"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, x: 8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card flex items-center gap-4"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="icon-container"
              >
                <Mail size={24} className="text-primary" />
              </motion.div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="text-foreground font-medium">
                  pratamma0906@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              href="https://instagram.com/gatama_52"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, x: 8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card flex items-center gap-4"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="icon-container"
              >
                <Instagram size={24} className="text-primary" />
              </motion.div>
              <div>
                <p className="text-muted-foreground text-sm">Instagram</p>
                <p className="text-foreground font-medium">@gatama_52</p>
              </div>
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LedCard>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Kirim Pesan
              </h3>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3 mb-4"
                  >
                    <CheckCircle size={18} />
                    <span className="text-sm">Pesan berhasil dikirim!</span>
                  </motion.div>
                )}
                {status === "error" && errorMsg && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 mb-4"
                  >
                    <XCircle size={18} />
                    <span className="text-sm">{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4" onClick={(e) => e.stopPropagation()}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  disabled={isLoading}
                  className="input-futuristic disabled:opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  disabled={isLoading}
                  className="input-futuristic disabled:opacity-50"
                />
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={4}
                  disabled={isLoading}
                  className="input-futuristic resize-none disabled:opacity-50"
                />
                <motion.button 
                  type="submit" 
                  whileHover={isLoading ? {} : { scale: 1.02 }}
                  whileTap={isLoading ? {} : { scale: 0.98 }}
                  disabled={isLoading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </LedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
