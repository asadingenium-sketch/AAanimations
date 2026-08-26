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
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{trans.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {trans.testimonials.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            {trans.testimonials.subtitle}
          </p>
        </ScrollReveal>

        {/* Testimonials Slider Area */}
        <ScrollReveal direction="scale" delay={0.1}>
          <div
            className="relative min-h-[380px] sm:min-h-[340px]"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
              >
                {currentPair.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative space-y-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                          {t.projectCategory}
                        </span>
                      </div>

                      <Quote className="w-8 h-8 text-cyan-500/30" />

                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic font-medium">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500 shadow-md"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center space-x-1">
                          <span>{t.name}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
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
          <div className="mt-10 flex items-center justify-between max-w-md mx-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all shadow-md hover:scale-105 active:scale-95"
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
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
