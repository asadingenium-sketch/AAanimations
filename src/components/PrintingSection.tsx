import React, { useState, useEffect } from 'react';
import {
  Printer,
  Briefcase,
  Gift,
  Maximize2,
  GraduationCap,
  Box,
  Sparkles,
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  X,
  Send,
  ShieldCheck,
  Zap,
  Check,
  Plane,
  PackageCheck,
  Navigation,
  MapPin,
  FileCheck2,
  MessageSquare,
  Headphones,
  Sparkle
} from 'lucide-react';
import {
  PRINTING_CATEGORIES,
  PRINTING_GLOBAL_STATS,
  PrintCategoryItem
} from '../data/printingData';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { getAssetUrl } from '../utils/assetHelper';

interface PrintingSectionProps {
  openQuoteModal?: () => void;
  navigateTo?: (page: string, serviceId?: string) => void;
}

const WHATSAPP_BASE_URL =
  'https://api.whatsapp.com/send/?phone=923313169811&text&type=phone_number&app_absent=0';

export const PrintingSection: React.FC<PrintingSectionProps> = ({
  openQuoteModal,
  navigateTo
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<PrintCategoryItem | null>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [activeCourierStep, setActiveCourierStep] = useState<number>(2);

  // Auto-cycle courier simulation step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCourierStep((prev) => (prev % 4) + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToCategories = () => {
    const el = document.getElementById('printing-categories-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Printer':
        return <Printer className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Gift':
        return <Gift className="w-5 h-5" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Box':
        return <Box className="w-5 h-5" />;
      default:
        return <Printer className="w-5 h-5" />;
    }
  };

  const courierSteps = [
    {
      id: 1,
      title: 'Precision Print & Inspection',
      desc: '2400 DPI G7 certified run with optical quality check',
      icon: <Printer className="w-4 h-4 sm:w-5 sm:h-5" />,
      status: 'Quality Passed'
    },
    {
      id: 2,
      title: 'Moisture-Sealed Export Packaging',
      desc: 'Shock-resistant foam & heavy-duty moisture barrier',
      icon: <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
      status: 'Sealed & Boxed'
    },
    {
      id: 3,
      title: 'Express Courier Air Transit',
      desc: 'Dispatched via DHL/FedEx Express international flight',
      icon: <Plane className="w-4 h-4 sm:w-5 sm:h-5" />,
      status: 'In Global Flight'
    },
    {
      id: 4,
      title: 'Doorstep Global Delivery',
      desc: 'Signature verified delivery to your office or doorstep',
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      status: 'Destination Reached'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. HERO HEADER WITH DEEP INDIGO/PURPLE GRADIENT & NEON HIGHLIGHTS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0B0F2A] to-[#120B24] text-white rounded-2xl sm:rounded-3xl mx-2 sm:mx-6 lg:mx-8 px-3 sm:px-10 lg:px-12 py-10 sm:py-20 lg:py-24 border border-indigo-900/40 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5 sm:space-y-8">
          {/* Top Global + Logistics Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-full bg-cyan-950/80 text-cyan-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
              <span>Global Printing & Custom Branding</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-purple-950/80 text-purple-300 font-bold text-[10px] sm:text-xs uppercase tracking-widest border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 animate-pulse rotate-12" />
              <span>Global Air Dispatch</span>
            </div>
          </div>

          {/* Main Heading & Subheading */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-tight font-sans break-words">
              WITH YOUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                COMPANY NAME
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl font-bold text-slate-200 tracking-normal">
              Print Your Vision. Build Your Brand.
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal px-2">
            From business essentials to customized promotional products, we provide professional printing and branding solutions for businesses, organizations, educational institutions, and individuals worldwide.
          </p>

          {/* Prominent Tagline with Gradient Accent */}
          <div className="py-1 sm:py-2">
            <div className="inline-block px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <span className="text-xs sm:text-lg lg:text-2xl font-extrabold text-white tracking-wider sm:tracking-widest uppercase">
                PRINT IT. BRAND IT.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 font-black drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  OWN IT.
                </span>
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center space-x-2 group hover:-translate-y-0.5"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToCategories}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 flex items-center justify-center space-x-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>EXPLORE PRINTING SERVICES</span>
            </button>
          </div>

          {/* Global Highlights Strip */}
          <div className="pt-6 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 border-t border-slate-800/80 text-left">
            {PRINTING_GLOBAL_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-sm"
              >
                <div className="text-[9px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider truncate">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-base lg:text-lg font-black text-white mt-0.5 text-cyan-400 font-mono">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SIX INTERACTIVE SERVICE CATEGORIES */}
      <section
        id="printing-categories-grid"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12"
      >
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs tracking-wider uppercase border border-slate-200 dark:border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-slate-500" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Service Categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Explore our six dedicated printing and custom branding divisions. Click any card to inspect full technical specifications and request an instant quote.
          </p>
        </ScrollReveal>

        {/* 6 Interactive Service Cards */}
        <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRINTING_CATEGORIES.map((cat) => {
            const isHovered = activeHoverId === cat.id;
            return (
              <ScrollStaggerItem
                key={cat.id}
                onMouseEnter={() => setActiveHoverId(cat.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => setSelectedCategory(cat)}
                className={`relative group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-cyan-400 dark:border-cyan-400 shadow-[0_10px_35px_rgba(6,182,212,0.25)] -translate-y-1.5 sm:-translate-y-2'
                    : 'border-slate-200 dark:border-slate-800/90 shadow-xl'
                }`}
              >
                {/* Top Image Preview with Gradient Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={getAssetUrl(cat.image)}
                    alt={cat.title}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried) {
                        target.dataset.tried = 'true';
                        target.src = getAssetUrl(`Images/Printing Section/${cat.title}.jpg`);
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Category Number Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center space-x-2">
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider bg-slate-950/85 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                      {cat.number}
                    </span>
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold text-slate-200 bg-slate-900/80 border border-slate-700/60 backdrop-blur-md">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Icon floating top right */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-950/80 border border-slate-800 text-cyan-400 flex items-center justify-center backdrop-blur-md group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300 shadow-lg">
                    {getIconComponent(cat.icon)}
                  </div>

                  {/* Title overlay on bottom of image */}
                  <div className="absolute bottom-3 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {cat.number} — {cat.title.toUpperCase()}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {cat.tagline}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {cat.description}
                    </p>

                    {/* Services Included Chips */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Services Included:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.services.slice(0, 6).map((srv, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 group-hover:border-cyan-500/30 transition-colors"
                          >
                            {srv}
                          </span>
                        ))}
                        {cat.services.length > 6 && (
                          <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                            +{cat.services.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-800 dark:text-slate-200 transition-all flex items-center justify-center space-x-2 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:shadow-md"
                    >
                      <span>View Specifications & Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStaggerContainer>
      </section>

      {/* 3. COURIER LOGISTICS: FULLY RESPONSIVE FOR DESKTOP & MOBILE */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#090D24] via-[#0E153A] to-[#120D2C] border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-12 text-white">
          {/* Ambient Glow Elements */}
          <div className="absolute top-0 left-1/3 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 sm:space-y-10">
            {/* Header with Logistics Badge & Live Status */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-slate-800/80 pb-6 sm:pb-8">
              <div className="space-y-2 sm:space-y-3 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest border border-cyan-500/30">
                  <Plane className="w-3.5 h-3.5 text-cyan-400 rotate-12" />
                  <span>Express Global Logistics</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white uppercase">
                  Global Courier Delivery
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                  We securely print, package, and dispatch door-to-door to clients across the USA, Europe, GCC & Middle East, Asia, and worldwide via tier-1 international courier networks.
                </p>
              </div>

              {/* Live Status Pill */}
              <div className="flex items-center space-x-3 p-3 sm:p-3.5 rounded-2xl bg-slate-950/80 border border-cyan-500/40 backdrop-blur-md self-start md:self-auto">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-white text-[11px] sm:text-xs">LIVE COURIER DISPATCH</div>
                  <div className="text-[10px] sm:text-[11px] text-cyan-300 font-mono">Real-Time Air Tracking Active</div>
                </div>
              </div>
            </div>

            {/* ANIMATED COURIER PIPELINE (ICON STYLE & RESPONSIVE) */}
            <div className="space-y-5 sm:space-y-6">
              {/* Dynamic Moving Courier Transit Route */}
              <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 overflow-hidden shadow-inner">
                {/* Moving Animated Courier Plane Icon along the track (visible on sm screens and up) */}
                <div className="relative h-14 sm:h-20 mb-4 hidden sm:flex items-center overflow-hidden border-b border-slate-800/80">
                  <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1 pointer-events-none">
                    <svg className="w-full h-4 overflow-visible">
                      <line
                        x1="0"
                        y1="2"
                        x2="100%"
                        y2="2"
                        stroke="rgba(6, 182, 212, 0.3)"
                        strokeWidth="3"
                      />
                      <line
                        x1="0"
                        y1="2"
                        x2="100%"
                        y2="2"
                        stroke="rgb(6, 182, 212)"
                        strokeWidth="3"
                        className="animate-dash-line"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 animate-courier-transit z-20 flex flex-col items-center">
                    <div className="px-2 py-0.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-lg flex items-center space-x-1 whitespace-nowrap mb-0.5">
                      <Zap className="w-2.5 h-2.5 text-slate-950" />
                      <span>AIR COURIER IN-FLIGHT</span>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-float-courier border-2 border-white">
                      <Plane className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 transform text-slate-950" />
                    </div>
                  </div>
                </div>

                {/* 4 Landmark Checkpoints */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 z-10">
                  {courierSteps.map((step) => {
                    const isActive = activeCourierStep === step.id;
                    return (
                      <div
                        key={`courier-step-${step.id}`}
                        onClick={() => setActiveCourierStep(step.id)}
                        className={`p-3 sm:p-3.5 rounded-2xl transition-all cursor-pointer border ${
                          isActive
                            ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                            : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 mb-1">
                          <div
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                              isActive
                                ? 'bg-cyan-500 text-slate-950'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {step.icon}
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-400">
                            STEP 0{step.id}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white truncate">
                          {step.title}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {step.status}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4 Icon-Style Courier Assurances */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors space-y-1.5 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Worldwide Express Flight
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                    3-5 Business days international delivery to 180+ global countries.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/40 transition-colors space-y-1.5 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Moisture & Damage-Proof
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                    Sealed corrugated armor & custom foam casing prevents transit damage.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/40 transition-colors space-y-1.5 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Live GPS Tracking Link
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                    Automated SMS & email tracking alerts upon handover to international courier.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors space-y-1.5 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Customs & Clearance Handled
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                    Pre-cleared export invoices and tariff codes for zero-delay border crossing.
                  </p>
                </div>
              </div>

              {/* Courier Partner Carriers */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 text-xs text-slate-400">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[10px] sm:text-[11px] flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>Trusted Courier Partners:</span>
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono font-bold text-slate-300">
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-400">DHL Express</span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-purple-400">FedEx Priority</span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-red-400">Aramex Global</span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-300">UPS Worldwide</span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300">Emirates Post</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. NEW REPRESENTATIVE CTA SECTION: "NEED GUIDANCE? OUR REPRESENTATIVE IS HERE TO HELP" */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B0F2A] via-[#150D32] to-[#0A142F] text-white p-6 sm:p-10 lg:p-14 border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Ambient glowing orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Heading, Description & Ask Representative WhatsApp Button */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 text-cyan-400 font-bold text-xs tracking-widest uppercase border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dedicated Creative & Print Advisory</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight font-sans">
                  NEED GUIDANCE?
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 uppercase">
                  OUR REPRESENTATIVE IS HERE TO HELP.
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Have custom paper specifications, urgent deadlines, bulk corporate order inquiries, or special branding requirements? Connect directly with our senior representative on WhatsApp for instant guidance and personalized estimates.
              </p>

              {/* Perks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span>Instant WhatsApp Consultation</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span>Material & Finish Recommendations</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span>Direct Bulk Pricing & Quotes</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span>Global Shipping Logistics Advice</span>
                </div>
              </div>

              {/* ASK OUR REPRESENTATIVE Button */}
              <div className="pt-3">
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] group hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
                  <span>ASK OUR REPRESENTATIVE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Modern Professional Representative Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl bg-slate-950/80 border border-cyan-500/30 p-6 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden group">
                {/* Background Grid & Radar Rings */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 border border-cyan-500/10 rounded-3xl m-3 pointer-events-none" />

                {/* SVG Professional Representative Illustration */}
                <svg
                  viewBox="0 0 320 320"
                  className="w-full h-full max-w-[280px] drop-shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-transform duration-500 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Glowing Hexagon / Shield Backdrop */}
                  <circle cx="160" cy="160" r="140" stroke="url(#cyanPurpGrad)" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" className="animate-spin-slow" />
                  <circle cx="160" cy="160" r="115" fill="#0E153A" stroke="#06B6D4" strokeWidth="2" opacity="0.9" />

                  {/* Representative Avatar Silhouette & Headset */}
                  {/* Body / Suit */}
                  <path
                    d="M100 260 C100 215, 125 200, 160 200 C195 200, 220 215, 220 260 Z"
                    fill="url(#suitGrad)"
                  />
                  {/* Tie / Shirt Accent */}
                  <polygon points="160,200 152,240 160,255 168,240" fill="#06B6D4" opacity="0.9" />
                  <polygon points="160,200 155,220 160,230 165,220" fill="#A855F7" />

                  {/* Neck */}
                  <rect x="150" y="170" width="20" height="35" rx="4" fill="#F8FAFC" />

                  {/* Head */}
                  <circle cx="160" cy="140" r="38" fill="#F1F5F9" />
                  
                  {/* Hair Style */}
                  <path
                    d="M124 135 C124 100, 140 92, 160 92 C180 92, 196 100, 196 135 C190 120, 175 110, 160 110 C145 110, 130 120, 124 135 Z"
                    fill="#1E293B"
                  />

                  {/* Eyeglasses / Visor */}
                  <rect x="138" y="132" width="18" height="12" rx="3" stroke="#06B6D4" strokeWidth="2.5" fill="#0B0F2A" />
                  <rect x="164" y="132" width="18" height="12" rx="3" stroke="#06B6D4" strokeWidth="2.5" fill="#0B0F2A" />
                  <line x1="156" y1="138" x2="164" y2="138" stroke="#06B6D4" strokeWidth="2" />

                  {/* Headset Arc & Microphone */}
                  <path
                    d="M125 140 C125 105, 195 105, 195 140"
                    stroke="#06B6D4"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Ear Cushions */}
                  <rect x="120" y="130" width="8" height="20" rx="4" fill="#06B6D4" />
                  <rect x="192" y="130" width="8" height="20" rx="4" fill="#06B6D4" />
                  {/* Mic Boom */}
                  <path
                    d="M124 145 C124 165, 140 172, 150 172"
                    stroke="#06B6D4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="152" cy="172" r="4" fill="#A855F7" />

                  {/* Floating Holographic Brand Badges */}
                  {/* Top Right: WhatsApp / Chat Bubble */}
                  <g transform="translate(205, 65)">
                    <rect width="65" height="32" rx="16" fill="#10B981" />
                    <circle cx="16" cy="16" r="8" fill="#FFFFFF" />
                    <text x="30" y="20" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">ONLINE</text>
                  </g>

                  {/* Bottom Left: 24/7 Verified Support Pill */}
                  <g transform="translate(40, 195)">
                    <rect width="70" height="26" rx="13" fill="#0B0F2A" stroke="#06B6D4" strokeWidth="1.5" />
                    <circle cx="14" cy="13" r="5" fill="#06B6D4" />
                    <text x="24" y="17" fill="#E2E8F0" fontSize="9" fontWeight="bold" fontFamily="sans-serif">24/7 HELP</text>
                  </g>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="cyanPurpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Status Indicator Underneath Avatar */}
                <div className="mt-3 flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>WhatsApp Consultant Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CLEAN SERVICE DETAIL MODAL / PANEL WITH DIRECT WHATSAPP QUOTE ACTION */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-cyan-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden p-5 sm:p-8 space-y-5 sm:space-y-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Category Name & Number */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  {selectedCategory.number}
                </span>
                <h3 className="text-lg sm:text-2xl font-black tracking-tight">
                  {selectedCategory.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Preview */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
              <img
                src={getAssetUrl(selectedCategory.image)}
                alt={selectedCategory.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = getAssetUrl(`Images/Printing Section/${selectedCategory.title}.jpg`);
                  }
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-cyan-300 font-semibold flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{selectedCategory.tagline}</span>
              </div>
            </div>

            {/* Short Description */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                About This Service:
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedCategory.description}
              </p>
            </div>

            {/* Services Included */}
            <div className="space-y-2.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Services Included:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCategory.services.map((srv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions with WhatsApp Link */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedCategory(null)}
                className="flex-1 py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-center flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span className="truncate">
                  REQUEST A QUOTE FOR — {selectedCategory.title.toUpperCase()}
                </span>
              </a>
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
