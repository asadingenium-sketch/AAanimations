import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  ArrowRight,
  Award,
  CheckCircle2,
  Users,
  Globe,
  Star
} from 'lucide-react';
import { PageId } from '../types';
import { STUDIO_HERO_IMAGE } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { EducationalHeroBackground } from './EducationalHeroBackground';

interface HeroProps {
  setCurrentPage?: (page: PageId) => void;
  navigateTo?: (page: string, serviceId?: string) => void;
  openShowreelModal?: () => void;
  openShowreel?: () => void;
  openQuoteModal: () => void;
}

const CountUp: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease-out formula
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <span className="whitespace-nowrap">
      {count}{suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({
  setCurrentPage,
  navigateTo,
  openShowreelModal,
  openShowreel,
  openQuoteModal,
}) => {
  const { t } = useLanguage();

  const handleNavPortfolio = () => {
    if (navigateTo) {
      navigateTo('portfolio');
    } else if (setCurrentPage) {
      setCurrentPage('portfolio');
    }
  };

  const handleShowreel = () => {
    if (openShowreelModal) openShowreelModal();
    else if (openShowreel) openShowreel();
  };

  const HERO_STATS = [
    { target: 12, suffix: '+', label: t.intro.yearsExcellence, icon: Award, color: 'from-cyan-400 to-blue-400' },
    { target: 850, suffix: '+', label: t.hero.statProjects, icon: CheckCircle2, color: 'from-teal-300 to-emerald-400' },
    { target: 320, suffix: '+', label: t.hero.statClients, icon: Users, color: 'from-cyan-300 to-teal-400' },
    { target: 45, suffix: '+', label: 'Countries', icon: Globe, color: 'from-purple-400 to-pink-400' },
    { target: 98, suffix: '%', label: t.hero.statSatisfaction, icon: Star, color: 'from-amber-300 to-yellow-400' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35 scale-105 filter contrast-110 brightness-90"
            poster={STUDIO_HERO_IMAGE}
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-indigo-950/50 to-slate-950/80" />
          
          {/* Subtle Educational & Creative Background Elements */}
          <EducationalHeroBackground />

          {/* Ambient glowing aura spots */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none mb-6 sm:mb-10 max-w-5xl mx-auto break-words"
        >
          {t.hero.titlePart1}{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full"
        >
          <a
            href="https://www.youtube.com/channel/UCCUWdas21wlPVAa0p-VnXNw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.portfolio.heading}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleShowreel}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-cyan-500/50 flex items-center justify-center space-x-3 transition-all backdrop-blur-md group cursor-pointer"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-600 group-hover:bg-cyan-500 flex items-center justify-center text-white shadow-md transition-colors">
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
            </div>
            <span>{t.hero.watchShowreel}</span>
          </button>
        </motion.div>

        {/* Animated Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 sm:mt-10 max-w-6xl mx-auto w-full"
        >
          <div className="relative rounded-2xl bg-slate-900/85 border border-slate-800/90 backdrop-blur-xl p-3 sm:p-4 shadow-xl shadow-cyan-950/40 overflow-hidden group">
            {/* Ambient subtle glow background */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 items-center justify-center">
              {HERO_STATS.map((stat, idx) => {
                const IconComponent = stat.icon;
                const isLastOnMobile = idx === HERO_STATS.length - 1;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    whileHover={{ scale: 1.03 }}
                    className={`flex flex-col items-center justify-center text-center px-2 py-2 rounded-xl bg-slate-950/40 border border-slate-800/40 ${
                      isLastOnMobile ? 'col-span-2 sm:col-span-1' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-1.5 mb-0.5 sm:mb-1">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                      <span className={`text-lg sm:text-xl md:text-2xl font-black font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight whitespace-nowrap`}>
                        <CountUp target={stat.target} suffix={stat.suffix} duration={2000} />
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-[11px] sm:text-xs font-bold text-slate-200">
                      <span className="text-cyan-400 font-bold text-xs">—</span>
                      <span className="truncate max-w-[120px] sm:max-w-none">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

