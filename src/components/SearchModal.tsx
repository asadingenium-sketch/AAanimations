import React, { useState } from 'react';
import { Search, X, Film, Sparkles, BookOpen, User, ArrowRight, Printer } from 'lucide-react';
import { PORTFOLIO_PROJECTS, SERVICES_DATA, BLOG_POSTS, TEAM_MEMBERS } from '../data/mockData';
import { PRINTING_CATEGORIES } from '../data/printingData';
import { PortfolioProject, PageId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: PortfolioProject) => void;
  navigateTo: (page: string, serviceId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  navigateTo,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProjects = trimmed
    ? PORTFOLIO_PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.shortDescription.toLowerCase().includes(trimmed) ||
          (p.client && p.client.toLowerCase().includes(trimmed)) ||
          (p.softwareUsed && p.softwareUsed.some((s) => s.toLowerCase().includes(trimmed)))
      )
    : PORTFOLIO_PROJECTS.slice(0, 3);

  const matchingServices = trimmed
    ? SERVICES_DATA.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.shortDesc.toLowerCase().includes(trimmed) ||
          s.subCategories.some((sub) => sub.toLowerCase().includes(trimmed))
      )
    : SERVICES_DATA.slice(0, 3);

  const matchingPrinting = trimmed
    ? PRINTING_CATEGORIES.filter(
        (pr) =>
          pr.title.toLowerCase().includes(trimmed) ||
          pr.tagline.toLowerCase().includes(trimmed) ||
          pr.description.toLowerCase().includes(trimmed) ||
          pr.services.some((m) => m.toLowerCase().includes(trimmed))
      )
    : [];

  const matchingBlogs = trimmed
    ? BLOG_POSTS.filter(
        (b) =>
          b.title.toLowerCase().includes(trimmed) ||
          b.category.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Input Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-3">
          <Search className="w-6 h-6 text-cyan-500 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, 3D animation, VFX, services, articles..."
            className="w-full bg-transparent text-base sm:text-lg font-medium outline-none text-slate-900 dark:text-white placeholder-slate-400"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Projects Results */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <Film className="w-4 h-4 text-cyan-500" />
              <span>Portfolio Projects ({matchingProjects.length})</span>
            </div>
            {matchingProjects.length === 0 ? (
              <p className="text-xs text-slate-500 italic pl-6">No projects found.</p>
            ) : (
              <div className="grid gap-2">
                {matchingProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                          {p.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {p.category} {p.client ? `• ${p.client}` : ''}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Results */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span>Studio Services ({matchingServices.length})</span>
            </div>
            {matchingServices.length === 0 ? (
              <p className="text-xs text-slate-500 italic pl-6">No services matched.</p>
            ) : (
              <div className="grid gap-2">
                {matchingServices.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      navigateTo('service-detail', s.id);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-purple-50 dark:hover:bg-purple-950/60 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {s.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {s.shortDesc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Printing Services */}
          {matchingPrinting.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                <Printer className="w-4 h-4 text-cyan-500" />
                <span>Printing & Fabrication Services ({matchingPrinting.length})</span>
              </div>
              <div className="grid gap-2">
                {matchingPrinting.map((pr) => (
                  <div
                    key={pr.id}
                    onClick={() => {
                      navigateTo('printing');
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {pr.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {pr.number} — {pr.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Articles */}
          {matchingBlogs.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Articles & Insights ({matchingBlogs.length})</span>
              </div>
              <div className="grid gap-2">
                {matchingBlogs.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => {
                      navigateTo('blog');
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/60 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                        {b.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {b.category} • {b.readTime}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Press ESC or click anywhere outside to close</span>
          <span className="font-semibold text-cyan-500">AA ANIMATIONS SEARCH ENGINE</span>
        </div>
      </div>
    </div>
  );
};
