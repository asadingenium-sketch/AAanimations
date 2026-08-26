import React, { useState } from 'react';
import {
  Search,
  Play,
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';
import { PortfolioCategory, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioSectionProps {
  projects?: PortfolioProject[];
  onSelectProject?: (project: PortfolioProject) => void;
  initialCategory?: PortfolioCategory;
  openQuoteModal?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onSelectProject,
  initialCategory = 'All',
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const displayProjects = projects || PORTFOLIO_PROJECTS;

  const categories: { key: PortfolioCategory; label: string }[] = [
    { key: 'All', label: t.portfolio.filterAll },
    { key: '3D Animation', label: '3D Animation' },
    { key: 'Product Animation', label: 'Product Animation' },
    { key: '2D Animation', label: '2D Animation' },
    { key: 'Character Animation', label: 'Character Animation' },
    { key: 'VFX', label: 'VFX' },
    { key: 'Motion Graphics', label: 'Motion Graphics' },
    { key: 'Explainer Videos', label: 'Explainer Videos' },
    { key: 'Game Art', label: 'Game Art' },
    { key: 'Web Development', label: 'Web Development' }
  ];

  // Define filtering logic according to user instructions
  let filteredProjects: PortfolioProject[] = [];

  if (selectedCategory === 'All') {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filteredProjects = displayProjects.filter((proj) =>
        proj.title.toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q) ||
        proj.shortDescription.toLowerCase().includes(q) ||
        (proj.softwareUsed && proj.softwareUsed.some((s) => s.toLowerCase().includes(q)))
      );
    } else {
      // Default "All" view: Exactly 4 featured projects:
      // 2D Animation, 3D Animation, Product Animation, VFX
      const featuredCategories: PortfolioCategory[] = [
        '2D Animation',
        '3D Animation',
        'Product Animation',
        'VFX'
      ];

      const featuredList: PortfolioProject[] = [];
      featuredCategories.forEach((cat) => {
        const found = displayProjects.find((p) => p.category === cat);
        if (found) {
          featuredList.push(found);
        }
      });

      // Fallback if needed
      if (featuredList.length < 4) {
        displayProjects.forEach((p) => {
          if (!featuredList.some((fp) => fp.id === p.id) && featuredList.length < 4) {
            featuredList.push(p);
          }
        });
      }

      filteredProjects = featuredList;
    }
  } else {
    // Specific category selected
    filteredProjects = displayProjects.filter((proj) => {
      const matchesCategory = proj.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.softwareUsed && proj.softwareUsed.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.portfolio.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </ScrollReveal>

        {/* Filter Controls Bar */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-slate-50 dark:bg-slate-950 p-4 rounded-3xl border border-slate-200 dark:border-slate-800">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-2xl text-xs border border-slate-200 dark:border-slate-800 outline-none focus:border-cyan-500"
            />
          </div>
        </ScrollReveal>

        {/* Portfolio Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            <SlidersHorizontal className="w-9 h-9 text-slate-400 mx-auto mb-2.5" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{t.portfolio.noProjects}</h3>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 text-white cursor-pointer"
            >
              {t.portfolio.filterAll}
            </button>
          </div>
        ) : (
          <ScrollStaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => {
              const targetUrl = project.externalUrl || project.videoUrl || 'https://www.youtube.com/channel/UCCUWdas21wlPVAa0p-VnXNw';
              const actionLabel = t.portfolio.viewDetails || 'Discover More';

              return (
                <ScrollStaggerItem key={project.id} className="h-full">
                  <div
                    onClick={() => {
                      if (onSelectProject) {
                        onSelectProject(project);
                      } else {
                        window.open(targetUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (onSelectProject) onSelectProject(project);
                        else window.open(targetUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/80 dark:hover:border-cyan-400/80 shadow-md hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ease-out flex flex-col justify-between transform hover:scale-[1.03] hover:-translate-y-2 relative h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {/* Thumbnail Container with Scale & Blur Hover */}
                    <div className="relative aspect-video overflow-hidden bg-slate-950">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop';
                        }}
                      />
                      {/* Frosted Glass Overlay with Subtle Blur */}
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.8)] border border-white/80 transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                          {project.category === 'Web Development' ? (
                            <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                          ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          )}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/85 backdrop-blur-md text-cyan-400 border border-cyan-500/30 shadow-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        {project.client && project.year && (
                          <div className="text-[11px] font-semibold text-slate-400 mb-1">
                            {project.client} • {project.year}
                          </div>
                        )}
                        <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mt-1.5">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Card Action Bar - Interactive Clickable Discover More Button */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onSelectProject) {
                              onSelectProject(project);
                            } else {
                              window.open(targetUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          aria-label={`${actionLabel} - ${project.title}`}
                          className="w-full py-2.5 px-4 rounded-2xl text-xs font-extrabold bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white hover:text-slate-950 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-[0.97] inline-flex items-center justify-center space-x-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                        >
                          <span>{actionLabel}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStaggerContainer>
        )}
      </div>
    </section>
  );
};
