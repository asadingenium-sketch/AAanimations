import React, { useState, useEffect } from 'react';
import { Star, Quote, Sparkles, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t: trans } = useLanguage();
  const [activePairIndex, setActivePairIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Group testimonials into pairs for desktop view (2 cards per slide)
  const totalPairs = Math.ceil(TESTIMONIALS.length / 2);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActivePairIndex((prev) => (prev + 1) % totalPairs);
    }, 5000); // 5 seconds smooth rotation

    return () => clearInterval(timer);
  }, [isPaused, totalPairs]);

  const handleNext = () => {
    setDirection(1);
    setActivePairIndex((prev) => (prev + 1) % totalPairs);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActivePairIndex((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  // Get current pair of testimonials
  const firstIndex = activePairIndex * 2;
  const currentPair = TESTIMONIALS.slice(firstIndex, firstIndex + 2);

  // Animation variants for smooth sliding
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden w-full max-w-none">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{trans.testimonials.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {trans.testimonials.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {trans.testimonials.subtitle}
          </p>
        </ScrollReveal>

        {/* Testimonials Slider Area */}
        <ScrollReveal direction="scale" delay={0.1}>
          <div
            className="relative min-h-[440px] md:min-h-[300px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activePairIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full"
              >
                {currentPair.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl relative space-y-3.5 sm:space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition-colors duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                          {t.projectCategory}
                        </span>
                      </div>

                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500/30" />

                      <p className="text-xs sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic font-medium">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-3 sm:space-x-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-cyan-500 shadow-md shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center space-x-1">
                          <span className="truncate">{t.name}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                          {t.role}, <span className="font-semibold text-slate-700 dark:text-slate-300">{t.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls & Pagination Dots */}
          <div className="mt-6 sm:mt-10 flex items-center justify-between max-w-md mx-auto px-2 sm:px-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="p-3 min-w-[44px] min-h-[44px] rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPairs }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activePairIndex ? 1 : -1);
                    setActivePairIndex(idx);
                  }}
                  aria-label={`Go to slide pair ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activePairIndex
                      ? 'w-8 h-2.5 bg-cyan-500 shadow-md shadow-cyan-500/40'
                      : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="p-3 min-w-[44px] min-h-[44px] rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
