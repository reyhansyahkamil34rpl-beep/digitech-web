'use client';
import './globals.css';
import React, { useState } from 'react';
import {
  Code2, Layout, Smartphone, Settings, Sparkles, CheckCircle2,
  ArrowRight, MessageCircle, ChevronRight, Calculator, Check,
  Star, Award, Laptop, Flame, ShieldCheck
} from 'lucide-react';
import { servicesData, testimonialsData, targetClientsData } from './data';

export default function Home() {
  const [selectedService, setSelectedService] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // State untuk Calculators / Cost Estimator
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

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Layanan</a>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors">Estimasi Biaya</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimoni</a>
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
      <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
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

      {/* COST ESTIMATOR / CALCULATOR SECTION */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulasi Instan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Kalkulator Estimasi Biaya Proyek</h2>
            <p className="text-slate-400 text-sm mt-1">Dapatkan perkiraan biaya pembuatan proyek digitalmu secara transparan.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">1. Pilih Jenis Layanan</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'web', name: 'Website' },
                    { id: 'app', name: 'Aplikasi' },
                    { id: 'uiux', name: 'UI/UX Design' },
                    { id: 'maintenance', name: 'Maintenance' },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setCalcService(item.id)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium border text-left transition-all ${calcService === item.id
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                        }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  <span>2. Jumlah Halaman / Tampilan</span>
                  <span className="text-cyan-400 font-mono text-sm">{calcPages} Halaman</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calcPages}
                  onChange={(e) => setCalcPages(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">3. Fitur Tambahan</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'seo', label: 'Optimasi SEO' },
                    { key: 'cms', label: 'Admin Panel / CMS' },
                    { key: 'auth', label: 'Sistem Login User' },
                    { key: 'payment', label: 'Payment Gateway' },
                  ].map(feat => (
                    <button
                      key={feat.key}
                      onClick={() => setCalcFeatures({ ...calcFeatures, [feat.key]: !calcFeatures[feat.key] })}
                      className={`py-2 px-3 rounded-lg text-xs border flex items-center justify-between transition-all ${calcFeatures[feat.key]
                        ? 'border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-300'
                        : 'border-slate-800 bg-slate-950/40 text-slate-500'
                        }`}
                    >
                      <span>{feat.label}</span>
                      {calcFeatures[feat.key] && <Check className="w-3.5 h-3.5 text-fuchsia-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">4. Prioritas Pengerjaan</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcUrgency('normal')}
                    className={`py-2 px-4 rounded-xl text-xs font-medium border ${calcUrgency === 'normal' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-slate-800 bg-slate-950 text-slate-400'
                      }`}
                  >
                    Standar (7-14 Hari)
                  </button>
                  <button
                    onClick={() => setCalcUrgency('fast')}
                    className={`py-2 px-4 rounded-xl text-xs font-medium border ${calcUrgency === 'fast' ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-slate-800 bg-slate-950 text-slate-400'
                      }`}
                  >
                    Express (3-5 Hari)
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Perkiraan Biaya Total</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400 my-3 font-mono">
                  {formatIDR(calculatePrice())}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  *Harga di atas merupakan estimasi awal. Harga final dapat disesuaikan dengan kebutuhan spesifik proyek Anda.
                </p>

                <div className="space-y-2 border-t border-slate-900 pt-4 mb-6 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Layanan:</span>
                    <span className="text-slate-200 capitalize font-medium">{calcService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimasi Waktu:</span>
                    <span className="text-slate-200 font-medium">{calcUrgency === 'fast' ? '3 - 5 Hari' : '7 - 14 Hari'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={sendToWA}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim Estimasi ke WhatsApp</span>
              </button>
            </div>
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
              {testimonialsData[activeTestimonial].role} • <span className="text-slate-500">{testimonialsData[activeTestimonial].type}</span>
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

          {/* Quick Links Navigasi (HANYA MUNCUL DI HP, SEMBUNYI DI DESKTOP) */}
          <div className="flex md:hidden items-center gap-6 text-slate-300 font-medium text-xs my-2">
            <a href="#hero" className="hover:text-blue-400 transition-colors">Beranda</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Layanan</a>
            <a href="#calculator" className="hover:text-blue-400 transition-colors">Hitung Biaya</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Kontak</a>
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
