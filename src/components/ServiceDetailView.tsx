import React, { useState } from 'react';
import {
  ArrowLeft,
  Check,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Clock,
  RotateCcw,
  Send,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { ServiceCategory, ServiceDetail, PortfolioProject } from '../types';
import { SERVICES_DATA, PORTFOLIO_PROJECTS } from '../data/mockData';

interface ServiceDetailViewProps {
  service?: ServiceDetail;
  serviceId?: string;
  navigateTo?: (page: string, serviceId?: string) => void;
  onBack?: () => void;
  openProjectModal?: (project: PortfolioProject) => void;
  openQuoteModal: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service: propService,
  serviceId,
  navigateTo,
  onBack,
  openProjectModal,
  openQuoteModal,
}) => {
  const service = propService || SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const handleBack = () => {
    if (onBack) onBack();
    else if (navigateTo) navigateTo('services');
  };
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const relatedProjects = PORTFOLIO_PROJECTS.filter(
    (p) =>
      p.category.toLowerCase().includes(service.title.toLowerCase().slice(0, 2)) ||
      (p.softwareUsed && p.softwareUsed.some((sw) => service.shortDesc.includes(sw)))
  );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMsg('');
    }, 4000);
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        {/* Hero Banner Section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 mb-16 border border-slate-800 shadow-2xl">
          <img
            src={service.bannerImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Service Specialty</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Subcategories */}
            <div className="pt-2 flex flex-wrap gap-2">
              {service.subCategories.map((sub, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-semibold text-cyan-300 border border-slate-700"
                >
                  {sub}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href={service.portfolioLink || 'https://www.youtube.com/@AAanimations-Agency/videos'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 transition-all inline-flex items-center space-x-2"
              >
                <span>{service.ctaText ? service.ctaText.replace('→', '').trim() : 'View Our Work'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">
            Why Choose Our {service.title} Production?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              6-Step {service.title} Production Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              From initial storyboarding to final uncompressed master export.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((p) => (
              <div
                key={`${service.id}-step-${p.step}`}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-2 relative"
              >
                <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  Step 0{p.step}
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>



        {/* FAQs for Service */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeFaq === idx ? 'rotate-180 text-cyan-500' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Direct Inquiry Form */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 max-w-3xl mx-auto shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black">Inquire About {service.title}</h3>
            <p className="text-xs text-slate-400 mt-1">
              Have questions or custom specs? Leave us a message for a 1-hour response.
            </p>
          </div>

          {inquirySuccess ? (
            <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 p-6 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-base">Inquiry Sent Successfully!</h4>
              <p className="text-xs">Our senior creative producer will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Specs</label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  placeholder={`Describe your requirements for ${service.title}...`}
                  className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-600/30 flex items-center justify-center space-x-2"
              >
                <span>Submit {service.title} Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
