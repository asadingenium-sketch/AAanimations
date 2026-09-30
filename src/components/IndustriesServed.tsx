import React, { useState } from 'react';
import {
  GraduationCap,
  Activity,
  Landmark,
  Building2,
  Home,
  Factory,
  Gamepad,
  Clapperboard,
  ShoppingBag,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/mockData';
import { IndustryItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface IndustriesServedProps {
  openQuoteModal: () => void;
}

export const IndustriesServed: React.FC<IndustriesServedProps> = ({ openQuoteModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_SERVED[0]);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'Gamepad': return <Gamepad className="w-5 h-5" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 w-full max-w-none">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sectors & Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From B2B fintech motion branding to biomedical 3D MOA animations and AAA game trailers, we tailor our pipeline to sector-specific requirements.
          </p>
        </ScrollReveal>

        {/* Interactive Industry Selector + Case Study Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Industry Icons Pills Grid */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 grid grid-cols-2 gap-2.5 sm:gap-3">
            {INDUSTRIES_SERVED.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left border flex items-center space-x-2 sm:space-x-3 transition-all min-h-[52px] ${
                  selectedIndustry.id === ind.id
                    ? 'bg-cyan-600 text-white border-cyan-500 shadow-xl shadow-cyan-600/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <div
                  className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                    selectedIndustry.id === ind.id
                      ? 'bg-white/20 text-white'
                      : 'bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400'
                  }`}
                >
                  {getIndustryIcon(ind.icon)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-xs truncate">{ind.name}</div>
                  <div className="text-[10px] opacity-80 truncate">{ind.keyBenefit}</div>
                </div>
              </button>
            ))}
          </ScrollReveal>

          {/* Detailed Selected Industry Spotlight Card */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden space-y-4">
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-950 relative border border-slate-800">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-600 text-white mb-2 inline-block">
                  Case Study Highlight
                </span>
                <h3 className="text-lg font-black text-white">{selectedIndustry.caseStudyTitle}</h3>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-extrabold text-xl text-slate-900 dark:text-white flex items-center space-x-2">
                <span>{selectedIndustry.name} Solutions</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedIndustry.description}
              </p>
            </div>

            {/* Impact Metric Box */}
            <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-100 dark:border-cyan-900/60 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Key Sector Metric
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white mt-0.5">
                  {selectedIndustry.keyBenefit}
                </div>
              </div>
              <button
                onClick={openQuoteModal}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-1"
              >
                <span>Request {selectedIndustry.name} Deck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
