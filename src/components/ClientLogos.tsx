import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';
import { getAssetUrl } from '../utils/assetHelper';

interface ClientLogoItem {
  id: number;
  name: string;
  logo: string;
}

const ClientLogoCard: React.FC<{ client: ClientLogoItem }> = ({ client }) => {
  const [imgSrc, setImgSrc] = useState<string>(() => getAssetUrl(client.logo));
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    if (retryCount === 0) {
      setRetryCount(1);
      setImgSrc(getAssetUrl(`client-logos/${client.id}.jpg`));
    } else if (retryCount === 1) {
      setRetryCount(2);
      setImgSrc(getAssetUrl(`Images/Client Logos/${client.id}.jpg`));
    } else if (retryCount === 2) {
      setRetryCount(3);
      setImgSrc(getAssetUrl(`Client Logos/${client.id}.jpg`));
    } else if (retryCount === 3) {
      setRetryCount(4);
      setImgSrc(getAssetUrl(`images/Client Logos/${client.id}.jpg`));
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="h-24 sm:h-32 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-lg hover:border-cyan-500/50 flex items-center justify-center min-w-[140px] sm:min-w-[200px] shrink-0 transition-all duration-300 group select-none relative overflow-hidden"
    >
      {!hasError ? (
        <>
          <img
            src={imgSrc}
            alt={client.name || `Partner ${client.id}`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="h-[60px] sm:h-[85px] w-full max-h-[60px] sm:max-h-[85px] object-contain group-hover:scale-105 transition-all duration-300 pointer-events-none select-none"
            loading="lazy"
            onError={handleError}
          />
          {/* Transparent protection overlay preventing right-click or drag-to-download */}
          <div
            className="absolute inset-0 z-10 select-none bg-transparent cursor-default"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </>
      ) : (
        <div className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs font-bold tracking-wide select-none">
          <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
          <span className="truncate max-w-[100px] sm:max-w-[130px]">{client.name || `Client ${client.id}`}</span>
        </div>
      )}
    </div>
  );
};

export const ClientLogos: React.FC = () => {
  // Multiply logos to ensure seamless continuous looping marquee
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 sm:py-12 bg-slate-100 dark:bg-slate-950/90 border-y border-slate-200 dark:border-slate-800/80 overflow-hidden w-full max-w-full relative">
      <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center">
        <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Trusted by Industry Leaders & Global Visionaries
        </p>
      </ScrollReveal>

      {/* Side Fade Gradients for visual polish */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 md:w-36 z-10 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 md:w-36 z-10 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />

      {/* Slow Marquee Slider */}
      <ScrollReveal direction="scale" delay={0.1}>
        <div className="flex w-full max-w-full overflow-hidden">
          <div className="flex shrink-0 items-center gap-4 sm:gap-8 md:gap-10 animate-marquee py-2 sm:py-3">
            {duplicatedLogos.map((client, idx) => (
              <ClientLogoCard
                key={`${client.id}-${idx}`}
                client={client}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

