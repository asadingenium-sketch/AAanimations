import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetailView } from './components/ServiceDetailView';
import { PortfolioSection } from './components/PortfolioSection';
import { IndustriesServed } from './components/IndustriesServed';
import { ProcessFlow } from './components/ProcessFlow';
import { ClientLogos } from './components/ClientLogos';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AwardsSection } from './components/AwardsSection';
import { TeamSection } from './components/TeamSection';
import { PrintingSection } from './components/PrintingSection';
import { BlogSection } from './components/BlogSection';
import { CareersSection } from './components/CareersSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ShowreelModal } from './components/ShowreelModal';
import { QuoteEstimatorModal } from './components/QuoteEstimatorModal';
import { AdminPanel } from './components/AdminPanel';
import { LiveChatWidget } from './components/LiveChatWidget';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CookieConsent } from './components/CookieConsent';
import { BackToTop } from './components/BackToTop';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { SearchModal } from './components/SearchModal';
import { CursorParticles } from './components/CursorParticles';

import { PORTFOLIO_PROJECTS } from './data/mockData';
import { PortfolioProject, ContactMessage, CareerApplication, PageId, ServiceCategory } from './types';
import { useLanguage } from './context/LanguageContext';

// Helper functions for URL Hash routing and browser history
const getHashForPage = (page: string, serviceId?: string): string => {
  if (!page || page === 'home') return '#/';
  if (page === 'service-detail') {
    return `#/services/${serviceId || '3d-animation'}`;
  }
  return `#/${page}`;
};

const parseLocation = (hashStr: string): { page: string; serviceId?: string } => {
  const clean = (hashStr || '').replace(/^#\/?/, '').trim();
  if (!clean || clean === 'home') {
    return { page: 'home' };
  }

  const [main, sub] = clean.split('/');
  const mainSegment = main.toLowerCase();
  const subSegment = sub?.toLowerCase();

  if (mainSegment === 'services' || mainSegment === 'service') {
    if (subSegment) {
      return { page: 'service-detail', serviceId: subSegment };
    }
    return { page: 'services' };
  }

  if (mainSegment === 'service-detail') {
    return { page: 'service-detail', serviceId: subSegment || '3d-animation' };
  }

  const validPages = ['about', 'services', 'portfolio', 'printing', 'printing-services', 'industries', 'clients', 'awards', 'clients-awards', 'blog', 'careers', 'contact'];
  if (validPages.includes(mainSegment)) {
    return { page: mainSegment };
  }

  return { page: mainSegment || 'home' };
};

export default function App() {
  const initialRoute = typeof window !== 'undefined' ? parseLocation(window.location.hash) : { page: 'home' };
  const [currentPage, setCurrentPage] = useState<string>(initialRoute.page);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialRoute.serviceId || '3d-animation');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [privacyModalType, setPrivacyModalType] = useState<'privacy' | 'terms' | null>(null);

  // Dark mode state (default: Light Mode)
  const [darkMode, setDarkMode] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Dynamic lists managed in state
  const [projects, setProjects] = useState<PortfolioProject[]>(PORTFOLIO_PROJECTS);
  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: 'msg-1',
      name: 'Sarah Connor',
      email: 's.connor@cyberdyne.io',
      phone: '+1 555-0199',
      service: '3D Animation',
      budget: '$10,000 - $25,000',
      message: 'Looking for a 60-second product launch video in Unreal Engine 5.',
      submittedAt: '2026-08-05 14:20',
      status: 'New'
    }
  ]);
  const [applications, setApplications] = useState<CareerApplication[]>([
    {
      id: 'app-1',
      applicantName: 'David K.',
      email: 'david.k@cgtrader.com',
      phone: '+1 555-0283',
      positionId: 'job-1',
      positionTitle: 'Senior 3D Character Animator',
      portfolioUrl: 'https://vimeo.com/showreel-sample',
      coverLetter: '10+ years rigging characters in Maya and Houdini.',
      resumeFileName: 'David_K_3D_Resume.pdf',
      submittedAt: '2026-08-05 11:00',
      status: 'New'
    }
  ]);

  // Handle Dark Mode document class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Browser History & Popstate (Back/Forward buttons) Synchronization
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        if (event.state.serviceId) {
          setSelectedServiceId(event.state.serviceId);
        }
      } else {
        const parsed = parseLocation(window.location.hash);
        setCurrentPage(parsed.page);
        if (parsed.serviceId) {
          setSelectedServiceId(parsed.serviceId);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleHashChange = () => {
      const parsed = parseLocation(window.location.hash);
      setCurrentPage(parsed.page);
      if (parsed.serviceId) {
        setSelectedServiceId(parsed.serviceId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    // Initial state registration in browser history
    const initial = parseLocation(window.location.hash);
    const initialTargetHash = getHashForPage(initial.page, initial.serviceId);
    window.history.replaceState(
      { page: initial.page, serviceId: initial.serviceId },
      '',
      initialTargetHash
    );

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Navigation Helper with proper pushState history management
  const navigateTo = (page: string, serviceId?: string, replace: boolean = false) => {
    const targetServiceId = serviceId || (page === 'service-detail' ? selectedServiceId : undefined);
    const targetHash = getHashForPage(page, targetServiceId);
    const targetState = {
      page,
      serviceId: targetServiceId
    };

    if (replace) {
      window.history.replaceState(targetState, '', targetHash);
    } else {
      const currentHash = window.location.hash || '#/';
      if (currentHash !== targetHash) {
        window.history.pushState(targetState, '', targetHash);
      }
    }

    setCurrentPage(page);
    if (targetServiceId) {
      setSelectedServiceId(targetServiceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Portfolio Handlers
  const handleAddProject = (p: PortfolioProject) => {
    setProjects((prev) => [p, ...prev]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Messages Handlers
  const handleAddContactMessage = (msg: ContactMessage) => {
    setMessages((prev) => [msg, ...prev]);
  };

  const handleUpdateMessageStatus = (id: string, status: ContactMessage['status']) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status } : m))
    );
  };

  // Applications Handlers
  const handleAddApplication = (app: CareerApplication) => {
    setApplications((prev) => [app, ...prev]);
  };

  const handleUpdateAppStatus = (id: string, status: CareerApplication['status']) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300 flex flex-col justify-between">
      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={(page) => navigateTo(page)}
        onNavigate={navigateTo}
        selectedService={selectedServiceId as any}
        setSelectedService={(srv) => {
          if (srv) navigateTo('service-detail', srv);
        }}
        openQuoteModal={() => setIsQuoteModalOpen(true)}
        openAdminPanel={() => setIsAdminOpen(true)}
        openAdminModal={() => setIsAdminOpen(true)}
        openSearchModal={() => setIsSearchModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Router View */}
      <main className="flex-1">
        {/* 1. HOME PAGE */}
        {currentPage === 'home' && (
          <>
            <Hero
              setCurrentPage={(p) => navigateTo(p)}
              navigateTo={navigateTo}
              openShowreelModal={() => setIsShowreelOpen(true)}
              openShowreel={() => setIsShowreelOpen(true)}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <ServicesOverview
              navigateTo={navigateTo}
              onSelectService={(sId) => navigateTo('service-detail', sId)}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <PortfolioSection
              projects={projects}
              onSelectProject={(p) => setSelectedProject(p)}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <IndustriesServed openQuoteModal={() => setIsQuoteModalOpen(true)} />
            <ProcessFlow />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection onAddContactMessage={handleAddContactMessage} />
          </>
        )}

        {/* 2. ABOUT US PAGE */}
        {currentPage === 'about' && (
          <div className="space-y-12 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">
                Who We Are
              </span>
              <h1 className="text-4xl sm:text-5xl font-black">Turning Visionary Concepts into Cinema-Grade Reality</h1>
            </div>
            <CompanyIntro setCurrentPage={(p) => navigateTo(p)} navigateTo={navigateTo} />
            <TeamSection />
            <AwardsSection />
            <ClientLogos />
          </div>
        )}

        {/* 3. SERVICES OVERVIEW PAGE */}
        {currentPage === 'services' && (
          <div className="py-12">
            <ServicesOverview
              navigateTo={navigateTo}
              onSelectService={(sId) => navigateTo('service-detail', sId)}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <ProcessFlow />
          </div>
        )}

        {/* 4. SERVICE DETAIL PAGE */}
        {currentPage === 'service-detail' && (
          <ServiceDetailView
            serviceId={selectedServiceId}
            navigateTo={navigateTo}
            onBack={() => navigateTo('services')}
            openProjectModal={(p) => setSelectedProject(p)}
            openQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}

        {/* 5. PORTFOLIO PAGE */}
        {currentPage === 'portfolio' && (
          <div className="py-12">
            <PortfolioSection
              projects={projects}
              onSelectProject={(p) => setSelectedProject(p)}
              openQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          </div>
        )}

        {/* 6. PRINTING SERVICES PAGE (Center of Portfolio and Blog) */}
        {(currentPage === 'printing' || currentPage === 'printing-services') && (
          <div className="py-12">
            <PrintingSection
              openQuoteModal={() => setIsQuoteModalOpen(true)}
              navigateTo={navigateTo}
            />
          </div>
        )}

        {/* 7. INDUSTRIES PAGE */}
        {currentPage === 'industries' && (
          <div className="py-12">
            <IndustriesServed openQuoteModal={() => setIsQuoteModalOpen(true)} />
          </div>
        )}

        {/* 8. CLIENTS & AWARDS PAGE */}
        {(currentPage === 'clients' || currentPage === 'awards' || currentPage === 'clients-awards') && (
          <div className="py-12 space-y-16">
            <ClientLogos />
            <AwardsSection />
            <TestimonialsSection />
          </div>
        )}

        {/* 9. BLOG PAGE */}
        {currentPage === 'blog' && (
          <div className="py-12">
            <BlogSection />
          </div>
        )}

        {/* 9. CAREERS PAGE */}
        {currentPage === 'careers' && (
          <div className="py-12">
            <CareersSection onAddApplication={handleAddApplication} />
          </div>
        )}

        {/* 10. CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="py-12">
            <ContactSection onAddContactMessage={handleAddContactMessage} />
            <FAQSection />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={(p) => navigateTo(p)}
        navigateTo={navigateTo}
        setSelectedService={(srv) => navigateTo('service-detail', srv)}
        openQuoteModal={() => setIsQuoteModalOpen(true)}
        openAdminModal={() => setIsAdminOpen(true)}
        openPrivacyModal={(type) => setPrivacyModalType(type)}
      />

      {/* Overlays and Modals */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
        navigateTo={navigateTo}
      />

      {/* Overlays and Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        openQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        openQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <QuoteEstimatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onAddContactMessage={handleAddContactMessage}
      />

      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        messages={messages}
        onUpdateMessageStatus={handleUpdateMessageStatus}
        applications={applications}
        onUpdateAppStatus={handleUpdateAppStatus}
      />

      <PrivacyTermsModal
        type={privacyModalType}
        onClose={() => setPrivacyModalType(null)}
      />

      {/* Floating Widgets & Custom Effects */}
      <CursorParticles />
      <LiveChatWidget />
      <WhatsAppWidget />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}
