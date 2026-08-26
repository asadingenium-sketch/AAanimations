import React from 'react';
import { Award, Trophy, Medal, Sparkles } from 'lucide-react';
import { AWARDS } from '../data/mockData';

export const AwardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Accolades & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Awards & Global Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Celebrated for outstanding artistic vision, creative innovation, and technical excellence across animation, CGI, motion graphics, and visual effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 relative hover:border-cyan-500 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
                    {award.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-1">
                    {award.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                    {award.recognition}
                  </p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Presented to: <span className="text-cyan-500">{award.presentedTo}</span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {award.achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
