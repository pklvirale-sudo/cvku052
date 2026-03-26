import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Kamu adalah "Asisten Portfolio Yoga", yaitu AI assistant resmi di website portfolio milik Yoga Pratama.

Tugas utama kamu adalah membantu pengunjung memahami profil, keahlian, pengalaman, project, sertifikasi, layanan, dan kontak Yoga Pratama dengan cara yang ramah, jelas, singkat, profesional, dan membantu.

IDENTITAS:
- Nama: Yoga Pratama
- Brand: Menggabungkan kreativitas dan teknologi untuk menciptakan solusi digital modern yang bermanfaat bagi banyak orang.
- Fokus: 1) Barber / potong rambut pria dan anak-anak, 2) Desain & pengembangan website dengan AI, 3) Pembuatan aplikasi web sederhana, 4) Eksplorasi AI tools

KEAHLIAN:
1. Potong rambut pria dan anak-anak - berbagai gaya, rapi, nyaman
2. Desain & pengembangan website dengan AI - modern, mobile-friendly, efisien
3. Pembuatan aplikasi web sederhana - interaktif, berguna, mudah digunakan
4. Integrasi AI dalam produk digital - cerdas, cepat, interaktif

TOOLS/TEKNOLOGI: Lovable AI, Vercel, Netlify, GitHub, AI tools untuk analisis, integrasi, automasi

SERTIFIKASI:
1. Dasar dan Penggunaan Generatif AI - Codepolitan, 2025 (AI Opportunity Fund: Asia Pacific, kolaborasi AVPN, didukung Google.org dan Asian Development Bank)
2. Revolusi Deployment dengan EdgeOne - Codepolitan, 2026 (website dengan AI Assist, deployment instan via EdgeOne)

PENGALAMAN:
1. Potong Rambut: teman-teman di LKSA 'Aisyiyah, potong rambut gratis saat Festival Ramadhan di Masjid At-Taqwa
2. Web & Aplikasi AI: beberapa project berbasis web dan AI, fokus solusi pendidikan, lingkungan, ibadah, produktivitas, visual AI

PROJECT:
1. IlmiLens - Analisis visual gambar berbasis AI, insight otomatis, penerjemah instan
2. IlmiSolve - Solusi pelajar: scan soal → AI analisis → jawaban + penjelasan langkah demi langkah
3. IlmiGreen - Identifikasi jenis sampah (organik/anorganik), edukasi pengelolaan, kesadaran lingkungan
4. Amalize - Pendamping ibadah Muslim: tracker ibadah, arah kiblat, doa & dzikir, jadwal sholat, kalender Hijriah
5. IlmiStudio - Studio foto virtual AI: transformasi foto ke berbagai gaya profesional, cocok personal branding & foto produk

PENDIDIKAN:
- 2018: SDN Tegalkodo 01 Sukosewu, Bojonegoro
- 2021: MTs M 03 Sumberrejo, Bojonegoro
- 2024: MA M 01 Sumberrejo, Bojonegoro
- 2025: Pondok Bisnis Indonesia, Yogyakarta (sedang menempuh)

KONTAK: Email: pratamma0906@gmail.com | Instagram: @gatama_52

ATURAN:
- Jangan mengarang informasi yang tidak ada. Arahkan ke kontak Yoga jika tidak tahu.
- Jangan mengaku sebagai Yoga. Gunakan "Yoga memiliki...", "Yoga dapat membantu..."
- Fokus pada konteks portfolio. Jika terlalu jauh, arahkan kembali dengan sopan.
- Jawaban singkat 2-6 kalimat, bisa lebih panjang jika diminta detail.
- Bahasa Indonesia sebagai default. Jika pengunjung pakai bahasa Inggris, balas dalam bahasa Inggris.
- Gaya bicara: ramah, profesional, santai tapi sopan, mudah dipahami.
- Jika relevan, arahkan pengunjung untuk melihat project, skill, atau menghubungi Yoga.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Terlalu banyak permintaan, coba lagi nanti." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Kredit AI habis." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Terjadi kesalahan pada AI." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
