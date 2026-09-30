import React from 'react';
import {
  Compass,
  FileText,
  Palette,
  Film,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const ProcessFlow: React.FC = () => {
  const { t } = useLanguage();

  const dynamicSteps = [
    { step: '01', title: t.process.step1Title, desc: t.process.step1Desc },
    { step: '02', title: t.process.step2Title, desc: t.process.step2Desc },
    { step: '03', title: t.process.step3Title, desc: t.process.step3Desc },
    { step: '04', title: t.process.step4Title, desc: t.process.step4Desc },
    { step: '05', title: t.process.step5Title, desc: t.process.step5Desc },
    { step: '06', title: t.process.step6Title, desc: t.process.step6Desc },
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5" />;
      case 1: return <FileText className="w-5 h-5" />;
      case 2: return <Palette className="w-5 h-5" />;
      case 3: return <Film className="w-5 h-5" />;
      case 4: return <RotateCcw className="w-5 h-5" />;
      case 5: return <CheckCircle2 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white dark:bg-slate-900 transition-colors duration-300 w-full max-w-none">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <span>{t.process.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.process.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t.process.subtitle}
          </p>
        </ScrollReveal>

        {/* Horizontal Timeline Steps with arrows between each card */}
        <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-3.5">
          {dynamicSteps.map((step, idx) => (
            <ScrollStaggerItem
              key={idx}
              className="relative p-4 sm:p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black text-cyan-500">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector Between Cards (01 → 02 → 03 → 04 → 05 → 06) */}
              {idx < dynamicSteps.length - 1 && (
                <>
                  {/* Desktop view (horizontal row of 6): Right Arrow between each card */}
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Tablet view (2 columns): Right arrow for odd cards, Down arrow for even cards */}
                  <div className="hidden md:flex lg:hidden absolute z-20 pointer-events-none items-center justify-center">
                    {idx % 2 === 0 ? (
                      <div className="-right-3.5 top-1/2 -translate-y-1/2 absolute w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-md">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="-bottom-3.5 left-1/2 -translate-x-1/2 absolute w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-md">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Mobile view (single column): Down Arrow between cards */}
                  <div className="flex md:hidden absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-md">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </>
              )}
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>
    </section>
  );
};

