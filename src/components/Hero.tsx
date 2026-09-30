import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import heroCgiVisual from '../assets/images/hero_cgi_composition_1790676989550.jpg';

interface HeroProps {
  setCurrentPage?: (page: PageId) => void;
  navigateTo?: (page: string, serviceId?: string) => void;
  openShowreelModal?: () => void;
  openShowreel?: () => void;
  openQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  openQuoteModal,
}) => {
  const handleStartProject = () => {
    if (openQuoteModal) {
      openQuoteModal();
    }
  };

  return (
    <section className="relative w-full max-w-none flex flex-col justify-center items-center bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFF] via-[#F3F7FF] to-[#EEF5FF] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white pt-3 pb-5 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden select-none min-h-[calc(100svh-54px)] sm:min-h-[calc(100vh-122px)] lg:min-h-[calc(100vh-100px)]">
      {/* =========================================================================
          1. SOPHISTICATED ATMOSPHERIC BACKGROUND GRADIENTS & 3D STUDIO LIGHTING
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Volumetric Light Orbs: White + Subtle Blue + Subtle Purple */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-white via-blue-50/70 to-indigo-50/40 dark:via-cyan-950/20 dark:to-indigo-950/20 rounded-full blur-[140px]" />
        <div className="absolute top-12 -right-20 w-[650px] h-[650px] bg-gradient-to-br from-purple-100/40 via-indigo-100/25 to-transparent dark:from-purple-950/25 dark:via-indigo-950/15 rounded-full blur-[150px]" />
        <div className="absolute top-20 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-100/40 via-blue-100/25 to-transparent dark:from-cyan-950/25 dark:via-blue-950/15 rounded-full blur-[140px]" />

        {/* Ambient Floating CGI Geometry Mesh Overlay behind entire section */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-15 pointer-events-none [mask-image:radial-gradient(ellipse_80%_60%_at_50%_45%,black_30%,transparent_75%)]">
          <img
            src={heroCgiVisual}
            alt=""
            className="w-full h-full object-cover filter contrast-125"
          />
        </div>

        {/* Subtle Film Grain & Micro-Stipple (Studio Cinematic Texture) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_85%_75%_at_50%_50%,#000_40%,transparent_100%)] opacity-25 dark:opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.16) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Seamless bottom bleed into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#EEF5FF] dark:to-slate-950" />
      </div>

      {/* =========================================================================
          2. MAIN HERO CONTENT: PERFECTLY CENTERED VERTICALLY & HORIZONTALLY
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center flex flex-col items-center justify-center my-auto">
        {/* 1. COMPACT ELEGANT BADGE */}
        <div className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-50/90 dark:bg-slate-900/90 border border-blue-200/70 dark:border-slate-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2 sm:mb-4 lg:mb-5 shadow-xs mx-auto">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-500 shrink-0" />
          <span>HIGH-END ANIMATION SERVICES GLOBALLY</span>
        </div>

        {/* 2. DOMINANT MAIN HEADLINE: CREATE. ANIMATE. INSPIRE. */}
        <h1 className="font-black tracking-[-0.035em] leading-[0.92] text-slate-950 dark:text-white uppercase select-none text-[2.65rem] min-[360px]:text-[3.15rem] min-[390px]:text-[3.55rem] min-[414px]:text-[3.9rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] max-w-5xl mx-auto text-center">
          <span className="block text-slate-950 dark:text-white">CREATE. ANIMATE.</span>
          <span className="block mt-0.5 sm:mt-1.5 lg:mt-2 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-xs">
            INSPIRE.
          </span>
        </h1>

        {/* 3. SUBTITLE: ADVERTISING CREATIVE AGENCY */}
        <div className="mt-2 sm:mt-4 lg:mt-5 flex items-center justify-center space-x-2 sm:space-x-3 text-center mx-auto">
          <span className="h-px w-5 sm:w-10 bg-gradient-to-r from-transparent to-cyan-500/70" />
          <h2 className="text-xs min-[360px]:text-sm sm:text-base md:text-lg lg:text-xl font-extrabold uppercase tracking-[0.16em] text-slate-800 dark:text-slate-200 text-center">
            ADVERTISING CREATIVE AGENCY
          </h2>
          <span className="h-px w-5 sm:w-10 bg-gradient-to-l from-transparent to-purple-500/70" />
        </div>

        {/* 4. SUPPORTING SERVICES TEXT (Static, Clean, Center-aligned across all viewports) */}
        <p className="mt-2.5 sm:mt-3 lg:mt-4 text-[11px] min-[360px]:text-xs sm:text-base lg:text-lg font-medium text-slate-600 dark:text-slate-400 tracking-wide max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 text-center">
          2D &amp; 3D Animation <span className="text-cyan-500 font-bold">•</span> CGI/VFX <span className="text-purple-500 font-bold">•</span> Motion Graphics <span className="text-blue-500 font-bold">•</span> Video Production
        </p>

        {/* 5. CTA BUTTONS: Stacked on Mobile, Centered Side-by-Side on Tablet & Desktop */}
        <div className="mt-3.5 sm:mt-6 lg:mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-[270px] min-[360px]:max-w-[290px] min-[390px]:max-w-[320px] sm:max-w-none mx-auto">
          {/* VIEW OUR PROJECT (Mobile) / VIEW OUR WORK (Desktop/Tablet): Primary Gradient Button */}
          <a
            href="https://www.youtube.com/channel/UCCUWdas21wlPVAa0p-VnXNw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:flex-initial group px-4 min-[360px]:px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5 min-h-[46px] sm:min-h-[48px] rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-500 hover:via-cyan-500 hover:to-indigo-500 text-white shadow-lg shadow-cyan-600/25 hover:shadow-cyan-500/40 flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-95 cursor-pointer whitespace-nowrap text-center"
          >
            <span className="sm:hidden">VIEW OUR PROJECT</span>
            <span className="hidden sm:inline">VIEW OUR WORK</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </a>

          {/* START A PROJECT: White Button with Subtle Border */}
          <button
            type="button"
            onClick={handleStartProject}
            className="w-full sm:w-auto sm:flex-initial group px-4 min-[360px]:px-5 sm:px-7 lg:px-8 py-3 sm:py-3.5 min-h-[46px] sm:min-h-[48px] rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider bg-white/95 dark:bg-slate-900/95 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300/80 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm hover:shadow-md flex items-center justify-center space-x-2 transition-all duration-300 transform active:scale-95 cursor-pointer whitespace-nowrap text-center"
          >
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform shrink-0" />
            <span>START A PROJECT</span>
          </button>
        </div>
      </div>
    </section>
  );
};
