import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface StatItem {
  id: string;
  end: number;
  suffix: string;
  label: string;
  gradientClass: string;
  delayMs: number;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'years',
    end: 12,
    suffix: '+',
    label: 'Years of Excellence',
    gradientClass: 'from-[#071626] via-blue-700 to-cyan-600 dark:from-white dark:via-blue-300 dark:to-cyan-400',
    delayMs: 0,
  },
  {
    id: 'projects',
    end: 850,
    suffix: '+',
    label: 'Projects Completed',
    gradientClass: 'from-[#071626] via-indigo-700 to-blue-600 dark:from-white dark:via-indigo-300 dark:to-blue-400',
    delayMs: 120,
  },
  {
    id: 'clients',
    end: 320,
    suffix: '+',
    label: 'Global Brand Clients',
    gradientClass: 'from-[#071626] via-cyan-700 to-blue-600 dark:from-white dark:via-cyan-300 dark:to-blue-400',
    delayMs: 240,
  },
  {
    id: 'countries',
    end: 45,
    suffix: '+',
    label: 'Countries',
    gradientClass: 'from-[#071626] via-purple-700 to-indigo-600 dark:from-white dark:via-purple-300 dark:to-indigo-400',
    delayMs: 360,
  },
  {
    id: 'satisfaction',
    end: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    gradientClass: 'from-[#071626] via-emerald-700 to-cyan-600 dark:from-white dark:via-emerald-300 dark:to-cyan-400',
    delayMs: 480,
  },
];

interface AnimatedStatCounterProps {
  stat: StatItem;
  isInView: boolean;
  prefersReducedMotion: boolean;
}

const AnimatedStatCounter: React.FC<AnimatedStatCounterProps> = ({
  stat,
  isInView,
  prefersReducedMotion,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const animationStartedRef = useRef(false);

  useEffect(() => {
    // If user prefers reduced motion, set final value immediately
    if (prefersReducedMotion) {
      setDisplayValue(stat.end);
      return;
    }

    // Trigger animation only once when section enters view
    if (isInView && !animationStartedRef.current) {
      animationStartedRef.current = true;

      const duration = 1800; // 1.8 seconds smooth easing
      let startTimestamp: number | null = null;
      let timeoutId: NodeJS.Timeout;

      timeoutId = setTimeout(() => {
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          // Premium Ease-Out Quart curve for ultra-smooth landing
          // 1 - (1 - t)^4
          const easeOut = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.round(easeOut * stat.end);

          setDisplayValue(currentCount);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setDisplayValue(stat.end);
          }
        };

        requestAnimationFrame(step);
      }, stat.delayMs);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, prefersReducedMotion, stat.end, stat.delayMs]);

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: stat.delayMs / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col items-center justify-center p-2 sm:p-2.5 group"
    >
      {/* Large Bold Counter Number */}
      <div className="flex items-baseline justify-center">
        <span
          className={`text-3xl min-[360px]:text-4xl lg:text-5xl font-black font-mono tracking-tight bg-gradient-to-br ${stat.gradientClass} bg-clip-text text-transparent select-none drop-shadow-xs`}
        >
          {displayValue}
        </span>
        <span
          className={`text-xl min-[360px]:text-2xl lg:text-3xl font-black font-mono ml-0.5 bg-gradient-to-br ${stat.gradientClass} bg-clip-text text-transparent select-none`}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Subtle Cyan/Purple Micro Accent Dot Line */}
      <div className="w-5 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-60 group-hover:w-8 group-hover:opacity-100 transition-all duration-300 mt-1.5 mb-1.5" />

      {/* Smaller Elegant Label */}
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 text-center leading-snug max-w-[150px] sm:max-w-[170px]">
        {stat.label}
      </span>
    </motion.div>
  );
};

export const StatsCounterSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Trigger once per page visit
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="studio-stats"
      aria-label="Studio Key Statistics"
      className="relative py-7 sm:py-9 lg:py-10 bg-gradient-to-b from-[#F3F8FF] via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-y border-slate-200/70 dark:border-slate-800/80 overflow-hidden w-full transition-colors"
    >
      {/* Soft Ambient Background Aura (Blue/Cyan/Purple) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-100/35 dark:bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Premium Layout (No Excessive Cards/Borders) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-4 sm:divide-x divide-slate-200/50 dark:divide-slate-800/60">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={stat.id}
              className={`${
                idx === STATS_DATA.length - 1 ? 'col-span-2 sm:col-span-1 max-w-xs mx-auto w-full' : ''
              } py-2 sm:py-0 sm:px-2 flex flex-col items-center justify-center`}
            >
              <AnimatedStatCounter
                stat={stat}
                isInView={hasEnteredView}
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
