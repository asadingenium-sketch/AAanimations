import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  Calculator,
  Shield,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { AALogo } from './AALogo';
import { PageId, ServiceCategory, LanguageCode } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage?: (page: PageId) => void;
  onNavigate?: (page: string, serviceId?: string) => void;
  selectedService?: ServiceCategory | null;
  setSelectedService?: (service: ServiceCategory | null) => void;
  darkMode: boolean;
  setDarkMode?: (val: boolean) => void;
  toggleDarkMode?: () => void;
  language?: string;
  setLanguage?: (lang: string) => void;
  openQuoteModal: () => void;
  openAdminPanel?: () => void;
  openAdminModal?: () => void;
  openSearchModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onNavigate,
  selectedService,
  setSelectedService,
  darkMode,
  setDarkMode,
  toggleDarkMode,
  language: propLanguage,
  setLanguage: propSetLanguage,
  openQuoteModal,
  openAdminPanel,
  openAdminModal,
  openSearchModal,
}) => {
  const { language: ctxLanguage, setLanguage: ctxSetLanguage, t } = useLanguage();
  const activeLanguage = (propLanguage || ctxLanguage) as LanguageCode;
  const handleSetLanguage = (lang: string) => {
    ctxSetLanguage(lang as LanguageCode);
    if (propSetLanguage) propSetLanguage(lang);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages: { code: LanguageCode; label: string; flag: string }[] = [
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'AR', label: 'العربية', flag: '🇦🇪' },
    { code: 'JP', label: '日本語', flag: '🇯🇵' },
  ];

  const currentLangObj = languages.find(
    (l) => l.code.toLowerCase() === activeLanguage.toLowerCase()
  ) || languages[0];

  const navItems: { id: PageId | 'offices'; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services, hasDropdown: true },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'printing', label: t.nav.printing },
    { id: 'careers', label: t.nav.careers },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: string) => {
    const targetPage = pageId === 'offices' ? 'contact' : pageId;
    if (onNavigate) {
      onNavigate(targetPage);
    } else if (setCurrentPage) {
      setCurrentPage(targetPage as PageId);
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleServiceSelect = (catId: ServiceCategory) => {
    if (setSelectedService) {
      setSelectedService(catId);
    }
    if (onNavigate) {
      onNavigate('service-detail', catId);
    } else if (setCurrentPage) {
      setCurrentPage('service-detail');
    }
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleAdminClick = () => {
    if (openAdminPanel) openAdminPanel();
    else if (openAdminModal) openAdminModal();
  };

  const handleToggleTheme = () => {
    if (setDarkMode) setDarkMode(!darkMode);
    else if (toggleDarkMode) toggleDarkMode();
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center">
        <div className="flex items-center space-x-2 mx-auto">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300 flex-shrink-0" />
          <span>🚀 AAanimations creates high-quality 2D & 3D animation, CGI, VFX, motion graphics, and visualization solutions that captivate audiences worldwide.</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3 min-h-[84px]">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-1 sm:space-x-1.5 cursor-pointer group"
          >
            <AALogo className="h-10 sm:h-12 md:h-14 w-auto group-hover:scale-105 transition-transform flex-shrink-0" />
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-800 dark:from-white dark:via-cyan-200 dark:to-slate-300 bg-clip-text text-transparent">
                ANIMATIONS
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest font-bold uppercase text-cyan-600 dark:text-cyan-400 block -mt-1">
                WE ANIMATE YOUR DREAMS
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors ${
                        currentPage === 'services' || currentPage === 'service-detail'
                          ? 'text-slate-900 dark:text-white font-semibold bg-slate-100 dark:bg-slate-800/80'
                          : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 grid gap-1">
                          <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {t.nav.coreServices}
                          </div>
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleServiceSelect(srv.id)}
                              className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group block w-full"
                            >
                              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white">
                                {srv.title}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {srv.shortDesc}
                              </div>
                            </button>
                          ))}

                          <div className="pt-1 mt-1 border-t border-slate-100 dark:border-slate-800">
                            <button
                              onClick={() => handleNavClick('printing')}
                              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group block"
                            >
                              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white">
                                {t.nav.printingBranding}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {t.nav.printingSubtitle}
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-slate-900 dark:text-white font-semibold bg-slate-100 dark:bg-slate-800/80'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button
              onClick={openSearchModal}
              title="Search Portfolio & Articles"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                title={t.nav.selectLanguage}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider">{currentLangObj.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {languageDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLanguageDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 z-50 w-44 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 space-y-1">
                    <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {t.nav.selectLanguage}
                    </div>
                    {languages.map((lang) => {
                      const isSelected = activeLanguage.toLowerCase() === lang.code.toLowerCase();
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            handleSetLanguage(lang.code);
                            setLanguageDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="flex items-center space-x-2">
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                          </span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={handleToggleTheme}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all active:scale-95 cursor-pointer flex items-center justify-center border border-slate-200 dark:border-slate-700"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-cyan-600" />
              )}
            </button>

            {/* Primary Get Quote CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.getQuote}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-h-[calc(100vh-5rem)] overflow-y-auto bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          {navItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  currentPage === item.id
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
              </button>
            </div>
          ))}

          {/* Mobile Services quick list */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 text-xs font-semibold uppercase text-slate-400 mb-2">
              {t.nav.popularServices}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-2">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => handleServiceSelect(srv.id)}
                  className="text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {srv.title}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Theme & Language Controls */}
          <div className="pt-3 pb-1 border-t border-slate-200 dark:border-slate-800 space-y-2.5 px-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                <Globe className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{t.nav.selectLanguage}</span>
              </div>
              <button
                onClick={handleToggleTheme}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 active:scale-95 cursor-pointer"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
                <span>{darkMode ? 'Light' : 'Dark'}</span>
              </button>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSetLanguage(lang.code)}
                  className={`py-1.5 rounded-lg text-xs font-bold text-center transition-colors ${
                    activeLanguage.toLowerCase() === lang.code.toLowerCase()
                      ? 'bg-cyan-500 text-white shadow-sm font-black'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                openQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-cyan-500" />
              <span>{t.nav.costEstimator}</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-600 to-purple-600 cursor-pointer"
            >
              {t.nav.freeConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
