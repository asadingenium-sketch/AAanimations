import React from 'react';
import {
  Film,
  Box,
  Sparkles,
  Wand2,
  Video,
  Gamepad2,
  Palette,
  Code,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface ServicesOverviewProps {
  onSelectService?: (serviceId: ServiceCategory) => void;
  navigateTo?: (page: string, serviceId?: string) => void;
  openQuoteModal: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  navigateTo,
  openQuoteModal,
}) => {
  const { t } = useLanguage();
  const handleServiceClick = (sId: ServiceCategory) => {
    if (onSelectService) {
      onSelectService(sId);
    }
    if (navigateTo) {
      navigateTo('service-detail', sId);
    }
  };
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Film': return <Film className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Box': return <Box className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Wand2': return <Wand2 className="w-6 h-6 text-pink-500" />;
      case 'Video': return <Video className="w-6 h-6 text-cyan-500" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-emerald-500" />;
      case 'Palette': return <Palette className="w-6 h-6 text-rose-500" />;
      case 'Code': return <Code className="w-6 h-6 text-cyan-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-violet-500" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs tracking-wider uppercase border border-slate-200 dark:border-slate-700">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.services.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <ScrollStaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ScrollStaggerItem
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Header Icon + Banner preview */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform">
                    {getIconComponent(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {t.services.viewService}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  {service.title}
                </h3>

                {/* Short Desc */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Subcategories Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.subCategories.map((sub, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.id);
                  }}
                  aria-label={`${t.portfolio.viewDetails} - ${service.title}`}
                  className="w-full py-2.5 px-4 rounded-2xl text-xs font-extrabold bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white hover:text-slate-950 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-[0.97] inline-flex items-center justify-center space-x-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                >
                  <span>{t.portfolio.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>
    </section>
  );
};
