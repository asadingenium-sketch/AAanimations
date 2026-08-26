import React, { useState } from 'react';
import {
  X,
  Play,
  Volume2,
  VolumeX,
  Layers,
  Award,
  CheckCircle,
  Clock,
  User,
  Calendar,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { PortfolioProject } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  openQuoteModal: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  openQuoteModal,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'video' | 'before-after' | 'gallery'>('video');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Media Player Tabs */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 text-xs font-bold">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  activeTab === 'video'
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                📹 Main Production Reel
              </button>
              {project.beforeImage && (
                <button
                  onClick={() => setActiveTab('before-after')}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    activeTab === 'before-after'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ⚡ Raw vs Finished Comparison
                </button>
              )}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    activeTab === 'gallery'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  🖼 Stills & Concept Gallery ({project.galleryImages.length})
                </button>
              )}
            </div>

            {/* Video Tab */}
            {activeTab === 'video' && (
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 group shadow-2xl">
                {project.videoUrl && !project.videoUrl.includes('youtu') ? (
                  <video
                    src={project.videoUrl}
                    poster={project.thumbnail}
                    controls
                    autoPlay
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center p-4">
                      <a
                        href={project.externalUrl || project.videoUrl || 'https://www.youtube.com/channel/UCCUWdas21wlPVAa0p-VnXNw'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-xl flex items-center space-x-2 transition-all transform hover:scale-105"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>{project.ctaText || (project.category === 'Web Development' ? 'Contact Us ↗' : 'Watch on YouTube ↗')}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Before After Tab */}
            {activeTab === 'before-after' && project.beforeImage && project.afterImage && (
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && project.galleryImages && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.galleryImages.map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={img}
                      alt={`${project.title} still ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Description & Details */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3">
            <h4 className="font-extrabold text-sm text-cyan-400 uppercase tracking-wider">Project Description</h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{project.shortDescription}</p>
          </div>

          {/* Optional Project Metadata Grid */}
          {(project.client || project.year || project.duration || (project.softwareUsed && project.softwareUsed.length > 0)) && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs">
              {project.client && (
                <div>
                  <div className="text-slate-400 font-semibold flex items-center space-x-1 mb-1">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Client</span>
                  </div>
                  <div className="font-bold text-slate-200">{project.client}</div>
                </div>
              )}

              {project.year && (
                <div>
                  <div className="text-slate-400 font-semibold flex items-center space-x-1 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Year</span>
                  </div>
                  <div className="font-bold text-slate-200">{project.year}</div>
                </div>
              )}

              {project.duration && (
                <div>
                  <div className="text-slate-400 font-semibold flex items-center space-x-1 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Production Duration</span>
                  </div>
                  <div className="font-bold text-slate-200">{project.duration}</div>
                </div>
              )}

              {project.softwareUsed && project.softwareUsed.length > 0 && (
                <div>
                  <div className="text-slate-400 font-semibold flex items-center space-x-1 mb-1">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Software Suite</span>
                  </div>
                  <div className="font-bold text-cyan-300 truncate">
                    {project.softwareUsed.slice(0, 2).join(', ')}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Software Used Badges */}
          {project.softwareUsed && project.softwareUsed.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Software & Tools Utilized</h4>
              <div className="flex flex-wrap gap-2">
                {project.softwareUsed.map((sw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300"
                  >
                    ⚡ {sw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Case Study Details: Challenge, Solution, Results */}
          {(project.challenge || project.solution || project.results) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.challenge && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-sm text-amber-400">The Challenge</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-sm text-cyan-400">Our Studio Solution</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.results && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <h4 className="font-bold text-sm text-emerald-400">Measurable Results</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              AA Animations • Premium Visual Production & CGI Studio
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
