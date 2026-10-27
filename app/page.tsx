'use client';
import './globals.css';
import React, { useState } from 'react';
import {
  Code2, Layout, Smartphone, Settings, Sparkles, CheckCircle2,
  ArrowRight, MessageCircle, ChevronRight, Calculator, Check,
  Star, Award, Laptop, Flame, ShieldCheck, ExternalLink, HelpCircle,
  Zap, Layers, Shield, CreditCard, Search, Server
} from 'lucide-react';
import { servicesData, testimonialsData, targetClientsData } from './data';

export default function Home() {
  const [selectedService, setSelectedService] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // State untuk Calculators / Cost Estimator Modern
  const [calcService, setCalcService] = useState('web');
  const [calcPages, setCalcPages] = useState(5);
  const [calcUrgency, setCalcUrgency] = useState('normal');
  const [calcFeatures, setCalcFeatures] = useState({
    seo: true,
    cms: false,
    auth: false,
    payment: false,
  });

  // Helper untuk rendering icon dinamis
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout className="w-8 h-8 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-8 h-8 text-fuchsia-400" />;
      case 'Code2': return <Code2 className="w-8 h-8 text-rose-400" />;
      case 'Settings': return <Settings className="w-8 h-8 text-emerald-400" />;
      case 'Flame': return <Flame className="text-rose-400" />;
      case 'Award': return <Award className="text-cyan-400" />;
      case 'Laptop': return <Laptop className="text-fuchsia-400" />;
      case 'ShieldCheck': return <ShieldCheck className="text-emerald-400" />;
      default: return null;
    }
  };

  // Perhitungan Estimasi Biaya
  const calculatePrice = () => {
    let base = 1500000;
    if (calcService === 'app') base = 3500000;
    if (calcService === 'uiux') base = 1000000;
    if (calcService === 'maintenance') base = 800000;

    let pageCost = (calcPages - 1) * 200000;
    if (pageCost < 0) pageCost = 0;

    let featureCost = 0;
    if (calcFeatures.seo) featureCost += 300000;
    if (calcFeatures.cms) featureCost += 500000;
    if (calcFeatures.auth) featureCost += 750000;
    if (calcFeatures.payment) featureCost += 1000000;

    let total = base + pageCost + featureCost;
    if (calcUrgency === 'fast') total *= 1.3;

    return Math.round(total);
  };

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const filteredServices = selectedService === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedService);

  const sendToWA = () => {
    const serviceName = calcService === 'web' ? 'Website' : calcService === 'app' ? 'Aplikasi Mobile/Web' : calcService === 'uiux' ? 'Desain UI/UX' : 'Maintenance';
    const text = `Halo DIGITECH! Saya tertarik membuat proyek ${serviceName} dengan estimasi harga sekitar ${formatIDR(calculatePrice())}. Bisakah kita konsultasi lebih lanjut?`;
    window.open(`https://wa.me/+6282337231441?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500 selection:text-white">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/pngcode.svg"
              alt="Logo DIGITECH"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-rose-400 bg-clip-text text-transparent tracking-tight">
                DIGITECH
              </span>
              <span className="block text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Digital Solution</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Layanan</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Tentang Kami</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portofolio</a>
            <a href="#workflow" className="hover:text-cyan-400 transition-colors">Alur Kerja</a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors">Estimasi Biaya</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </div>

          <button
            onClick={sendToWA}
            className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-500 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-rose-900/30 hover:shadow-rose-900/50 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi Gratis</span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
          <span>Solusi Digital Terpercaya & Terjangkau</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Ubah Ide Bisnismu Menjadi <br />
          <span className="bg-gradient-to-r from-rose-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Produk Digital Modern
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
          Spesialis pembuat Website, Aplikasi, dan Desain UI/UX profesional untuk <strong>UMKM, Sekolah, Pelajar, dan Perusahaan</strong>. Pengerjaan tepat waktu dengan dukungan teknis berkelanjutan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#calculator"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-900/30 transition-all hover:scale-105"
          >
            <Calculator className="w-5 h-5" />
            <span>Hitung Biaya Proyek</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all"
          >
            <span>Jelajahi Layanan</span>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Layanan Unggulan Kami</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Semua kebutuhan transformasi digital bisnis Anda dalam satu tempat.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Semua Layanan' },
              { id: 'web', label: 'Website' },
              { id: 'app', label: 'Aplikasi' },
              { id: 'design', label: 'UI/UX' },
              { id: 'support', label: 'Maintenance' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedService(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedService === tab.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all hover:-translate-y-1 group backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 font-semibold border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
              </div>

              <div>
                <ul className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={sendToWA}
                  className="w-full py-2.5 rounded-xl border border-slate-700 hover:border-rose-500 hover:bg-rose-500/10 text-slate-200 hover:text-rose-300 text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION TENTANG KAMI */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full border border-fuchsia-500/20">
              Tentang DIGITECH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 leading-tight">
              Mitra Strategis Transformasi Digital Bisnis Anda
            </h2>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              DIGITECH SOLUTION hadir untuk membantu UMKM, sekolah, organisasi, dan perusahaan dalam mengadopsi teknologi modern. Kami percaya bahwa website tidak sekadar menjadi pajangan digital, tetapi alat pertumbuhan bisnis yang efisien, tepercaya, dan terjangkau.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <h4 className="text-2xl font-bold text-cyan-400">100%</h4>
                <p className="text-xs text-slate-400 mt-1">Transparansi Biaya & Kode Berstandar Tinggi</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <h4 className="text-2xl font-bold text-fuchsia-400">Fast-Track</h4>
                <p className="text-xs text-slate-400 mt-1">Pengerjaan Tepat Waktu & Support Berkelanjutan</p>
              </div>
            </div>
          </div>

          {/* Profil Tim */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 relative shadow-xl">
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg border border-blue-400/30">
              BEFAN GANTENG GANK
            </div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>Pengelola Utama & Tim Kreatif</span>
            </h3>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xl shrink-0 shadow-md">
                BF
              </div>
              <div>
                <h4 className="text-white font-bold text-base">BEFAN & TEAM</h4>
                <p className="text-cyan-400 text-xs font-medium">Lead Full-Stack Developer & UI/UX Designer</p>
                <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">Fokus pada arsitektur web modern, performa tinggi, dan antarmuka yang ramah pengguna.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PORTOFOLIO */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/40">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Karya Terbaik Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Portofolio & Showroom Proyek
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2">
            Jelajahi hasil karya dan konsep solusi digital yang telah kami kembangkan menggunakan teknologi modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="relative h-48 bg-slate-800 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556742049-0a67d1d29366?auto=format&fit=crop&w=800&q=80" alt="UMKM E-Commerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 right-3 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                Proyek Demo
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Toko Online UMKM & Catalog</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">Aplikasi katalog produk lokal lengkap dengan fitur pencarian dan integrasi checkout instan ke WhatsApp seller.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Next.js</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Tailwind CSS</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">WhatsApp API</span>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                <span>Lihat Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="relative h-48 bg-slate-800 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Sistem Akademik" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 right-3 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                Proyek Demo
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Portal Edukasi & Profil Sekolah</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">Website profil instansi dengan pengumuman dinamis, formulir pendaftaran siswa baru, dan galeri kegiatan interaktif.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">TypeScript</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">React</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Supabase</span>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                <span>Lihat Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
            <div className="relative h-48 bg-slate-800 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard Bisnis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 right-3 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                Proyek Demo
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Estimator & POS Kasir Digital</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">Aplikasi web kalkulator estimasi biaya dan pencatatan transaksi kustom untuk penyedia jasa profesional.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Next.js App Router</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Tailwind v4</span>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                <span>Lihat Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ALUR PENGERJAAN PROYEK */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/40">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Cara Kerja Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            7 Tahap Transparan Menuju Website Impian
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Proses terstruktur untuk memastikan setiap detail kebutuhan proyek Anda terpenuhi secara sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Konsultasi Awal", desc: "Diskusi kebutuhan bisnis, target audiens, dan penentuan paket solusi yang paling pas." },
            { step: "02", title: "Analisis Kebutuhan", desc: "Penyusunan fitur utama, struktur halaman, dan penetapan estimasi tenggat waktu." },
            { step: "03", title: "Desain UI/UX", desc: "Pembuatan prototipe visual modern dan persetujuan tata letak bersama Anda." },
            { step: "04", title: "Pengembangan Code", desc: "Proses coding menggunakan Next.js & Tailwind CSS v4 berstandar industri modern." },
            { step: "05", title: "Pengujian (QA)", desc: "Pengecekan keandalan responsivitas HP/Desktop, optimasi kecepatan, dan uji bebas bug." },
            { step: "06", title: "Peluncuran Website", desc: "Pemasangan nama domain resmi, konfigurasi server hosting, dan penyetelan SEO." },
            { step: "07", title: "Dukungan & Garansi", desc: "Sesi panduan kelola mandiri serta garansi pemeliharaan & perbaikan pasca-rilis." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 relative backdrop-blur-sm hover:border-slate-700 transition-colors">
              <span className="text-3xl font-black text-slate-700/50 absolute top-4 right-4 font-mono">{item.step}</span>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* KALKULATOR ESTIMASI BIAYA MODERN & FUTURISTIK (DESAIN BARU) */}
      {/* ========================================================= */}
      <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/40">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Smart Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Kalkulator Estimasi Biaya
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Rancang paket kebutuhan digitalmu dan dapatkan perkiraan investasi secara transparan & instan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SISI KIRI: INPUT INTERAKTIF */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-8 shadow-2xl">
            
            {/* 1. KARTU PILIHAN LAYANAN */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px]">1</span>
                <span>Pilih Jenis Layanan Utama</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'web', name: 'Website Landing Page', icon: Layout, desc: 'Profil usaha & katalog' },
                  { id: 'app', name: 'Aplikasi Web / Mobile', icon: Smartphone, desc: 'Sistem kustom & SaaS' },
                  { id: 'uiux', name: 'Desain UI/UX', icon: Layers, desc: 'Figma prototype modern' },
                  { id: 'maintenance', name: 'Web Maintenance', icon: Server, desc: 'Perawatan & update' },
                ].map(item => {
                  const IconComp = item.icon;
                  const isSelected = calcService === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCalcService(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                        isSelected
                          ? 'border-cyan-500 bg-gradient-to-br from-cyan-950/40 to-slate-900 text-white shadow-lg shadow-cyan-950/50'
                          : 'border-slate-800/80 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-500/20 rounded-bl-full pointer-events-none flex items-start justify-end p-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                      )}
                      <IconComp className={`w-6 h-6 mb-2 transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      <div className="font-bold text-xs sm:text-sm text-slate-100">{item.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. SLIDER SLIDER JUMLAH HALAMAN */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px]">2</span>
                  <span>Jumlah Halaman / Tampilan</span>
                </div>
                <span className="text-cyan-400 font-mono text-sm font-bold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {calcPages} Halaman
                </span>
              </div>
              <div className="relative pt-1">
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calcPages}
                  onChange={(e) => setCalcPages(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400 border border-slate-800"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
                  <span>1 Halaman (Landing Page)</span>
                  <span>8 Halaman</span>
                  <span>15 Halaman (Multi Page)</span>
                </div>
              </div>
            </div>

            {/* 3. CHIPS FITUR TAMBAHAN */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px]">3</span>
                <span>Modul & Fitur Tambahan</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { key: 'seo', label: 'Optimasi SEO & Speed', icon: Search, price: '+Rp 300rb' },
                  { key: 'cms', label: 'Admin Panel / CMS', icon: Layers, price: '+Rp 500rb' },
                  { key: 'auth', label: 'Sistem Login User', icon: Shield, price: '+Rp 750rb' },
                  { key: 'payment', label: 'Payment Gateway', icon: CreditCard, price: '+Rp 1 Jt' },
                ].map(feat => {
                  const isChecked = calcFeatures[feat.key as keyof typeof calcFeatures];
                  const IconComp = feat.icon;
                  return (
                    <button
                      key={feat.key}
                      onClick={() => setCalcFeatures({ ...calcFeatures, [feat.key]: !calcFeatures[feat.key as keyof typeof calcFeatures] })}
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-fuchsia-500/60 bg-fuchsia-500/10 text-fuchsia-200'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <IconComp className={`w-4 h-4 ${isChecked ? 'text-fuchsia-400' : 'text-slate-600'}`} />
                        <span className="font-medium text-[11px] sm:text-xs">{feat.label}</span>
                      </div>
                      <span className={`text-[10px] font-mono ${isChecked ? 'text-fuchsia-300 font-bold' : 'text-slate-600'}`}>
                        {feat.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. PRIORITAS WAKTU */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px]">4</span>
                <span>Kecepatan Pengerjaan</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCalcUrgency('normal')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    calcUrgency === 'normal'
                      ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 font-bold'
                      : 'border-slate-800 bg-slate-950/40 text-slate-400'
                  }`}
                >
                  <div className="text-white text-xs">Pengerjaan Standar</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">7 - 14 Hari Kerja</div>
                </button>
                <button
                  onClick={() => setCalcUrgency('fast')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    calcUrgency === 'fast'
                      ? 'border-amber-500/60 bg-amber-500/10 text-amber-300 font-bold'
                      : 'border-slate-800 bg-slate-950/40 text-slate-400'
                  }`}
                >
                  <div className="text-amber-300 text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-amber-400" />
                    Express Track (+30%)
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">3 - 5 Hari Fast-Delivery</div>
                </button>
              </div>
            </div>

          </div>

          {/* SISI KANAN: RINGKASAN STICKY CARD & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Estimasi Ringkasan</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">LIVE CALC</span>
              </div>

              <div className="mb-6">
                <span className="text-slate-400 text-xs">Total Perkiraan Investasi:</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-rose-400 my-2 font-mono tracking-tight">
                  {formatIDR(calculatePrice())}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  *Harga sudah termasuk instalasi SSL, konfigurasi server, serta garansi perbaikan bug 1–3 bulan.
                </p>
              </div>

              {/* Detail Rincian Ringkas */}
              <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 text-xs mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Layanan:</span>
                  <span className="text-slate-200 font-semibold uppercase">{calcService}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Halaman:</span>
                  <span className="text-slate-200 font-semibold">{calcPages} Halaman</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Estimasi Rilis:</span>
                  <span className="text-cyan-400 font-semibold">{calcUrgency === 'fast' ? '3–5 Hari (Express)' : '7–14 Hari (Normal)'}</span>
                </div>
              </div>
            </div>

            {/* Tombol Kirim WhatsApp */}
            <button
              onClick={sendToWA}
              className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold py-4 rounded-2xl shadow-xl shadow-teal-950/50 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-teal-600" />
              <span>Kirim Hasil Estimasi ke WhatsApp</span>
            </button>
          </div>

        </div>
      </section>

      {/* TARGET CLIENTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Siapa Saja Calon Klien Kami?</h2>
          <p className="text-slate-400 text-sm">DIGITECH hadir memberikan layanan fleksibel sesuai skala kebutuhan Anda.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetClientsData.map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
              <div className="p-3 bg-slate-950 w-fit rounded-xl border border-slate-800 mb-4">
                {renderIcon(item.iconName)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-800/40">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Sering Diajukan</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Segala hal yang perlu Anda ketahui sebelum memulai kerja sama bersama DIGITECH.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Berapa lama estimasi pengerjaan website?",
              a: "Untuk Landing Page sederhana membutuhkan waktu 3–5 hari kerja. Sementara untuk website katalog produk atau sistem aplikasi kustom membutuhkan waktu 1–3 minggu bergantung pada kompleksitas fitur."
            },
            {
              q: "Apakah domain dan hosting sudah termasuk?",
              a: "Ya! Seluruh paket yang kami kerjakan sudah mencakup gratis pendaftaran Domain (.com atau .id) selama 1 tahun pertama beserta server cloud hosting berkecepatan tinggi."
            },
            {
              q: "Apakah tersedia revisi desain?",
              a: "Tentu saja. Kami memberikan kesempatan 2–3 kali revisi besar pada tahap UI/UX sebelum pengerjaan coding dimulai untuk menjamin hasil akhir sesuai ekspektasi Anda."
            },
            {
              q: "Bagaimana sistem pembayaran di DIGITECH?",
              a: "Pembayaran dibagi 2 tahap: DP (Down Payment) sebesar 50% saat kesepakatan diawali, dan pelunasan 50% setelah website selesai diuji dan siap diluncurkan."
            },
            {
              q: "Apakah ada garansi dan pemeliharaan?",
              a: "Ya, kami memberikan Garansi Maintenance Gratis selama 1–3 bulan pertama untuk penanganan bug, masalah teknis, atau konsultasi pembaruan konten."
            },
            {
              q: "Apakah klien mendapatkan akses penuh ke website?",
              a: "Ya, 100%. Setelah proyek lunas, kami menyerahkan seluruh akses kredensial admin dan repositori source code proyek Anda secara penuh."
            }
          ].map((faq, i) => (
            <details key={i} className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-slate-700 transition-colors backdrop-blur-sm">
              <summary className="flex items-center justify-between font-semibold text-sm text-slate-200 hover:text-cyan-400 transition-colors">
                <span>{faq.q}</span>
                <span className="ml-2 text-cyan-400 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-800/40 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Apa Kata Klien Kami?</h2>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm relative">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonialsData[activeTestimonial].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-slate-200 text-lg sm:text-xl italic mb-6 leading-relaxed">
            "{testimonialsData[activeTestimonial].quote}"
          </p>

          <div>
            <h4 className="font-bold text-white">{testimonialsData[activeTestimonial].author}</h4>
            <p className="text-xs text-cyan-400 mt-0.5">
              {testimonialsData[activeTestimonial].role} - <span className="text-slate-500">{testimonialsData[activeTestimonial].type}</span>
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === idx ? 'bg-rose-500 w-8' : 'bg-slate-700'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-2">

            {/* Badge Tim */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              ✨ CREATE TEAM BEFAN GANTENG GANK
            </span>

            <div className="flex items-center gap-3 mt-1">
              {/* Glow Container di belakang logo */}
              <div className="relative p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-md shadow-blue-500/10">
                <img
                  src="/pngcode.svg"
                  alt="Logo DIGITECH"
                  className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-400 font-bold text-base tracking-wider">
                DIGITECH <span className="text-blue-500">SOLUTION</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-xs text-center md:text-left text-[11px] leading-relaxed">
              Mitra transformasi digital terpercaya untuk pengembangan web & solusi teknologi modern.
            </p>
          </div>

          {/* Quick Links Navigasi */}
          <div className="flex md:hidden items-center gap-4 text-slate-300 font-medium text-[11px] my-2 flex-wrap justify-center">
            <a href="#hero" className="hover:text-blue-400 transition-colors">Beranda</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Layanan</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Tentang</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portofolio</a>
            <a href="#workflow" className="hover:text-blue-400 transition-colors">Alur</a>
            <a href="#calculator" className="hover:text-blue-400 transition-colors">Biaya</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-center md:text-right border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0 w-full md:w-auto">
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">DIGITECH SOLUTION</span>. All rights reserved.
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <button
        onClick={sendToWA}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl shadow-emerald-900/50 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      </button>

    </div>
  );
}