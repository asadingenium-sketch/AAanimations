import React from 'react';
import { X, Film, Sparkles, ExternalLink } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  openQuoteModal: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  openQuoteModal,
}) => {
  if (!isOpen) return null;

  const chapters = [
    { time: '00:00', title: 'Studio Intro & Highlight Montage' },
    { time: '00:15', title: 'Cyberpunk 3D Character Rigging' },
    { time: '00:35', title: 'Hollywood Green Screen Compositing & VFX' },
    { time: '00:55', title: 'Unreal Engine 5 Realtime Environments' },
    { time: '01:15', title: 'Broadcast Motion Graphics & Brand Identities' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 text-white rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-2 sm:my-8 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-3.5 py-2.5 sm:px-6 sm:py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-600 flex items-center justify-center font-bold text-xs text-white shrink-0">
              <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-xs sm:text-base text-white truncate">
                AA Animations — Official Showreel
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">4K Ultra HD • 60 FPS</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <a
              href="https://youtu.be/KoDU0c0dYRo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 sm:px-3.5 py-1.5 min-h-[36px] rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white flex items-center space-x-1 sm:space-x-1.5 transition-colors shadow-md shrink-0"
            >
              <span className="hidden min-[380px]:inline">YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-slate-950 overflow-hidden group">
          <iframe
            src="https://www.youtube.com/embed/KoDU0c0dYRo?autoplay=1"
            title="AA Animations — 2026 Official Showreel"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Chapters & Controls Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-400 border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Showreel Chapter Index</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold">
              <span>4K Ultra HD • 60 FPS</span>
            </div>
          </div>

          {/* Chapter Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            {chapters.map((ch, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center space-x-2 cursor-pointer group transition-colors"
              >
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {ch.time}
                </span>
                <span className="text-slate-300 group-hover:text-white truncate">
                  {ch.title}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Ready to kick off your own custom showreel or commercial ad?
            </div>
            <button
              onClick={() => {
                onClose();
                openQuoteModal();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/30"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
