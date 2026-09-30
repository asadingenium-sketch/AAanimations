import React from 'react';
import {
  Sparkles,
  Target,
  Compass,
  Award,
  Zap,
  Layers,
  Users,
  Globe2
} from 'lucide-react';
import { PageId } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { CountingNumber } from './CountingNumber';

interface CompanyIntroProps {
  setCurrentPage?: (page: PageId) => void;
  navigateTo?: (page: string, serviceId?: string) => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = () => {
  const { t } = useLanguage();
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white dark:bg-slate-900 transition-colors duration-300 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text Intro */}
          <ScrollReveal direction="left" className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.intro.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight break-words">
              {t.hero.titlePart1}{' '}
              <span className="text-cyan-600 dark:text-cyan-400">
                {t.hero.titleHighlight}
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.intro.desc1}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t.intro.desc2}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-2">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400 mb-1.5" />
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.intro.pillar1Title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.intro.pillar1Desc}
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400 mb-1.5" />
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.intro.pillar2Title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.intro.pillar2Desc}
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 mb-1.5" />
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{t.intro.pillar3Title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.intro.pillar3Desc}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Visual Stats Showcase Card */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-950 p-4 sm:p-6 border border-cyan-500/30 shadow-xl text-white space-y-4">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg">AA Animations</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="bg-slate-900/80 p-3 sm:p-4.5 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono whitespace-nowrap">
                    <CountingNumber end={12} suffix="+" duration={1800} />
                  </div>
                  <div className="text-slate-500 text-xs font-light select-none my-0.5">—</div>
                  <div className="text-xs sm:text-sm text-slate-300 font-semibold">{t.intro.yearsExcellence}</div>
                </div>
                <div className="bg-slate-900/80 p-3 sm:p-4.5 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono whitespace-nowrap">
                    <CountingNumber end={850} suffix="+" duration={2200} />
                  </div>
                  <div className="text-slate-500 text-xs font-light select-none my-0.5">—</div>
                  <div className="text-xs sm:text-sm text-slate-300 font-semibold">{t.hero.statProjects}</div>
                </div>
                <div className="bg-slate-900/80 p-3 sm:p-4.5 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono whitespace-nowrap">
                    <CountingNumber end={320} suffix="+" duration={2000} />
                  </div>
                  <div className="text-slate-500 text-xs font-light select-none my-0.5">—</div>
                  <div className="text-xs sm:text-sm text-slate-300 font-semibold">{t.hero.statClients}</div>
                </div>
                <div className="bg-slate-900/80 p-3 sm:p-4.5 rounded-2xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-pink-400 font-mono whitespace-nowrap">
                    <CountingNumber end={98} suffix="%" duration={1900} />
                  </div>
                  <div className="text-slate-500 text-xs font-light select-none my-0.5">—</div>
                  <div className="text-xs sm:text-sm text-slate-300 font-semibold">{t.hero.statSatisfaction}</div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Unreal Engine 5 – Real-Time Production Specialist</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>In-House Voiceover Talent Pool (30+ Languages)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                  <span>We work globally across 45+ countries.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
