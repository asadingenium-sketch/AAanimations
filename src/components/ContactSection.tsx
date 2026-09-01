import React, { useState } from 'react';
import {
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Youtube,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { ContactMessage } from '../types';
import { OFFICE_LOCATIONS } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import {
  trackContactFormSubmit,
  trackWhatsAppClick,
  trackEmailClick,
  trackPhoneClick
} from '../utils/analytics';

interface ContactSectionProps {
  onAddContactMessage: (msg: ContactMessage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onAddContactMessage }) => {
  const { t } = useLanguage();
  const [selectedOffice, setSelectedOffice] = useState(OFFICE_LOCATIONS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('3D Animation');
  const [budget, setBudget] = useState('$5k - $10k');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      phone,
      service,
      budget,
      message,
      submittedAt: new Date().toLocaleString(),
      status: 'New'
    };
    onAddContactMessage(newMsg);
    // Track privacy-safe form submission (no PII)
    trackContactFormSubmit(service, budget);
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            {t.contact.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Card */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">{t.contact.formTitle}</h3>
              <p className="text-xs text-slate-500 mt-1">{t.contact.formSubtitle}</p>
            </div>

            {sentSuccess ? (
              <div className="p-8 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-extrabold text-lg">Inquiry Received!</h4>
                <p className="text-xs">
                  {t.contact.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.service}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    >
                      <option>2D Animation</option>
                      <option>3D Animation</option>
                      <option>Motion Graphics</option>
                      <option>CGI & VFX</option>
                      <option>Video Editing</option>
                      <option>Game Art</option>
                      <option>Graphic Design</option>
                      <option>Web Development</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.contact.budget}
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                    >
                      <option>&lt; $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.details} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.detailsPlaceholder}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submit}</span>
                </button>
              </form>
            )}

            {/* Quick WhatsApp & Social Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-slate-500 font-medium">Need instant quick chat?</span>
                <a
                  href="https://wa.me/923313169811"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackWhatsAppClick('contact_section')}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/25 hover:scale-105 active:scale-95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat via WhatsApp</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-xs text-slate-500 font-medium mr-1">Follow Us:</span>
                <a
                  href="https://www.youtube.com/@AAanimations-asad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-red-500 hover:bg-red-600 hover:text-white transition-all"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aa-animations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-500 hover:bg-blue-600 hover:text-white transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/AAanimations786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 hover:bg-blue-700 hover:text-white transition-all"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Office Locations */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Building className="w-5 h-5 text-cyan-500" />
                <span>Where We’re Located</span>
              </h3>

              {/* Location Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {OFFICE_LOCATIONS.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => setSelectedOffice(loc)}
                    className={`p-3 rounded-2xl text-left border text-xs font-bold transition-all ${
                      selectedOffice.city === loc.city
                        ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-600/20'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-500/50'
                    }`}
                  >
                    <div>{loc.city}</div>
                    <div className="text-[10px] opacity-80 font-normal mt-0.5">{loc.country}</div>
                  </button>
                ))}
              </div>

              {/* Office Details Card */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 p-5 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-700/60">
                  <div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{selectedOffice.city}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">{selectedOffice.country}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">{selectedOffice.timeZone}</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{selectedOffice.address}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                    <a
                      href={`tel:${selectedOffice.phone.split('/')[0].trim()}`}
                      onClick={() => trackPhoneClick('contact_office_card')}
                      className="text-xs hover:text-cyan-500 transition-colors font-medium"
                    >
                      {selectedOffice.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Mail className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <div className="space-y-0.5 w-full">
                      <a
                        href={`mailto:${selectedOffice.email}`}
                        onClick={() => trackEmailClick('contact_office_card')}
                        className="text-xs hover:text-cyan-500 transition-colors block font-medium"
                      >
                        {selectedOffice.email}
                      </a>
                      {selectedOffice.email2 && (
                        <a
                          href={`mailto:${selectedOffice.email2}`}
                          onClick={() => trackEmailClick('contact_office_card')}
                          className="text-xs hover:text-cyan-500 transition-colors block font-medium"
                        >
                          {selectedOffice.email2}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {selectedOffice.mapUrl && (
                  <div className="pt-2 border-t border-slate-200/80 dark:border-slate-700/60">
                    <a
                      href={selectedOffice.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
