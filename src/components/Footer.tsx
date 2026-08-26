import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  MapPin,
  Phone,
  CheckCircle,
  ExternalLink,
  Shield,
  FileText,
  Cookie,
  Youtube,
  Linkedin,
  Facebook,
  Instagram,
  Mail
} from 'lucide-react';
import { AALogo } from './AALogo';
import { PageId, ServiceCategory } from '../types';
import { SERVICES_DATA, OFFICE_LOCATIONS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setCurrentPage?: (page: PageId) => void;
  navigateTo?: (page: string, serviceId?: string) => void;
  setSelectedService?: (service: ServiceCategory) => void;
  openMapModal?: () => void;
  openQuoteModal?: () => void;
  openAdminModal?: () => void;
  openPrivacyModal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  navigateTo,
  setSelectedService,
  openMapModal,
  openQuoteModal,
  openAdminModal,
  openPrivacyModal,
}) => {
  const { t } = useLanguage();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleServiceClick = (sId: ServiceCategory) => {
    if (setSelectedService) {
      setSelectedService(sId);
    }
    if (navigateTo) {
      navigateTo('service-detail', sId);
    } else if (setCurrentPage) {
      setCurrentPage('service-detail');
    }
  };

  const handlePageClick = (page: PageId) => {
    if (navigateTo) {
      navigateTo(page);
    } else if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter CTA */}
        <div className="bg-gradient-to-r from-cyan-900/60 via-purple-900/60 to-slate-900 rounded-3xl p-8 sm:p-10 border border-cyan-500/30 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-xs tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{t.footer.newsletterTitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              {t.footer.newsletterSub}
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-0 sm:min-w-[320px]">
            {subscribed ? (
              <div className="flex items-center space-x-3 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-6 py-4 rounded-2xl text-sm font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{t.footer.subscribed}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  required
                  className="w-full bg-slate-900/90 border border-slate-700 focus:border-cyan-500 text-white placeholder-slate-500 px-4 py-3 sm:py-3.5 rounded-xl text-sm outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 sm:py-3.5 rounded-xl text-sm flex items-center justify-center space-x-2 transition-all flex-shrink-0 shadow-lg shadow-cyan-600/30 cursor-pointer"
                >
                  <span>{t.footer.subscribe}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-1 sm:space-x-1.5 cursor-pointer group" onClick={() => handlePageClick('home')}>
              <AALogo className="h-12 sm:h-15 md:h-16 w-auto group-hover:scale-105 transition-transform flex-shrink-0" />
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">ANIMATIONS</span>
                <span className="text-[10px] sm:text-xs tracking-widest font-bold uppercase text-cyan-400 block -mt-1">
                  WE ANIMATE YOUR DREAMS
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.youtube.com/@AAanimations-asad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-red-600 flex items-center justify-center transition-all border border-slate-800 hover:border-red-500"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aa-animations/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 flex items-center justify-center transition-all border border-slate-800 hover:border-blue-500"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/AAanimations786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-700 flex items-center justify-center transition-all border border-slate-800 hover:border-blue-600"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-pink-600 flex items-center justify-center transition-all border border-slate-800 hover:border-pink-500"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold uppercase text-white tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><button onClick={() => handlePageClick('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.home}</button></li>
              <li><button onClick={() => handlePageClick('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.about}</button></li>
              <li><button onClick={() => handlePageClick('services')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.services}</button></li>
              <li><button onClick={() => handlePageClick('portfolio')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.portfolio}</button></li>
              <li><button onClick={() => handlePageClick('printing')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.printing}</button></li>
              <li><button onClick={() => handlePageClick('careers')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.careers}</button></li>
              <li><button onClick={() => handlePageClick('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">{t.nav.contact}</button></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-sm font-extrabold uppercase text-white tracking-wider mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv.id)}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Offices */}
          <div>
            <h4 className="text-sm font-extrabold uppercase text-white tracking-wider mb-4">
              {t.contact.ourOffices}
            </h4>
            <div className="space-y-3 text-xs">
              {OFFICE_LOCATIONS.map((loc) => (
                <div key={loc.city} className="border-b border-slate-900 pb-2">
                  <div className="font-bold text-slate-200 flex items-center justify-between">
                    <span>{loc.city}, {loc.country}</span>
                    <span className="text-[10px] text-cyan-400 font-mono">{loc.timeZone}</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{loc.address}</div>
                  <div className="text-slate-500 text-[11px] flex items-center space-x-2 mt-1">
                    <Phone className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center md:text-left">
          <div>
            {t.footer.rights}
          </div>
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6">
            <button
              onClick={() => handlePageClick('privacy')}
              className="hover:text-cyan-400 flex items-center space-x-1 transition-colors cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t.footer.privacyPolicy}</span>
            </button>
            <button
              onClick={() => handlePageClick('terms')}
              className="hover:text-cyan-400 flex items-center space-x-1 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.footer.termsOfService}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
