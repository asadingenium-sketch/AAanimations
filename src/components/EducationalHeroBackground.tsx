import React from 'react';

/**
 * EducationalHeroBackground
 * 
 * Provides a subtle, premium animated background for the Header/Hero section.
 * Contains gently drifting educational and creative vector elements (student, instructor,
 * books, laptop, graduation cap, math & science symbols, 3D wireframe, bezier handles,
 * particles) rendered with low opacity (10-20%) and glowing cyan/teal/purple studio accents.
 * 
 * Performance & Accessibility:
 * - GPU-composited transform/opacity animations
 * - Reduced item density on mobile screens
 * - Respects prefers-reduced-motion
 */
export const EducationalHeroBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-[1]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes eduFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          33% {
            transform: translate3d(18px, -24px, 0) rotate(3deg);
          }
          66% {
            transform: translate3d(-14px, 16px, 0) rotate(-2deg);
          }
        }

        @keyframes eduFloat2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          40% {
            transform: translate3d(-20px, -28px, 0) rotate(-4deg);
          }
          75% {
            transform: translate3d(16px, 14px, 0) rotate(2.5deg);
          }
        }

        @keyframes eduFloat3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(12px, -30px, 0) scale(1.04);
          }
        }

        @keyframes eduDriftSlow {
          0% {
            transform: translate3d(-10px, 0, 0);
          }
          50% {
            transform: translate3d(20px, -20px, 0);
          }
          100% {
            transform: translate3d(-10px, 0, 0);
          }
        }

        @keyframes eduPulseFade {
          0%, 100% {
            opacity: 0.12;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.22;
            transform: scale(1.04);
          }
        }

        @keyframes eduOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .anim-edu-1 {
          animation: eduFloat1 24s ease-in-out infinite;
          will-change: transform;
        }

        .anim-edu-2 {
          animation: eduFloat2 28s ease-in-out infinite;
          will-change: transform;
        }

        .anim-edu-3 {
          animation: eduFloat3 22s ease-in-out infinite;
          will-change: transform;
        }

        .anim-edu-drift {
          animation: eduDriftSlow 32s ease-in-out infinite;
          will-change: transform;
        }

        .anim-edu-pulse {
          animation: eduPulseFade 10s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .anim-edu-spin-slow {
          animation: eduOrbitSpin 45s linear infinite;
          transform-origin: center center;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-edu-1,
          .anim-edu-2,
          .anim-edu-3,
          .anim-edu-drift,
          .anim-edu-pulse,
          .anim-edu-spin-slow {
            animation: none !important;
          }
        }
      `}</style>

      {/* SVG Definitions for Gradients and Glowing Stroke Filters */}
      <svg className="absolute w-0 h-0" width="0" height="0" aria-hidden="true">
        <defs>
          <linearGradient id="eduCyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="eduTealBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="eduPurplePink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <filter id="eduGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* =========================================================================
          LAYER 1: Subtle Animated Constellation & Math / Science Grid (Depth: Far)
          ========================================================================= */}
      <div className="absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,#000_50%,transparent_90%)]">
        {/* Floating Mathematical & Scientific Equations */}
        <div className="absolute top-12 left-10 text-cyan-300 font-mono text-sm tracking-wider anim-edu-drift hidden sm:block">
          <span>∫ f(x)dx = F(x) + C</span>
        </div>
        <div className="absolute top-36 right-16 text-purple-300 font-mono text-base tracking-widest anim-edu-2 hidden md:block">
          <span>∑ (λ · e) = E</span>
        </div>
        <div className="absolute bottom-24 left-1/4 text-teal-300 font-mono text-sm tracking-widest anim-edu-3 hidden lg:block">
          <span>∇ × B = μ₀J</span>
        </div>
        <div className="absolute top-1/2 right-12 text-indigo-300 font-mono text-xs tracking-wider anim-edu-1 hidden sm:block">
          <span>lim (x→∞) [1 + 1/x]ˣ = e</span>
        </div>
        <div className="absolute bottom-16 right-1/4 text-cyan-300 font-mono text-sm tracking-widest anim-edu-drift hidden md:block">
          <span>π ≈ 3.14159265...</span>
        </div>
      </div>

      {/* =========================================================================
          LAYER 2: Educational Characters (Student & Instructor - Sleek Minimal Vector)
          ========================================================================= */}
      {/* Modern Student with Laptop & Notes (Left Side) */}
      <div
        className="absolute top-16 -left-6 sm:left-4 md:left-12 lg:left-20 w-44 sm:w-56 md:w-64 h-auto opacity-[0.16] anim-edu-1"
        style={{ animationDelay: '0s' }}
      >
        <svg viewBox="0 0 240 260" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.3)]">
          {/* Subtle Ambient Learning Glow */}
          <circle cx="120" cy="110" r="85" fill="#06b6d4" opacity="0.12" filter="blur(20px)" />

          {/* Student Head & Hair */}
          <circle cx="120" cy="55" r="26" stroke="url(#eduCyanPurple)" strokeWidth="2.5" fill="#090d1a" />
          <path d="M 102 55 Q 120 32 138 55" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
          {/* Modern Headset */}
          <path d="M 94 56 C 94 40, 146 40, 146 56" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
          <rect x="91" y="52" width="6" height="12" rx="3" fill="#06b6d4" />
          <rect x="143" y="52" width="6" height="12" rx="3" fill="#06b6d4" />

          {/* Torso & Hoodie */}
          <path
            d="M 85 145 L 94 92 C 96 85, 144 85, 146 92 L 155 145 Z"
            stroke="url(#eduCyanPurple)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="#090d1a"
          />

          {/* Desk / Study Surface Line */}
          <line x1="30" y1="210" x2="210" y2="210" stroke="url(#eduCyanPurple)" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />

          {/* Laptop Screen & Keyboard */}
          <path
            d="M 90 195 L 95 145 C 95 142, 145 142, 145 145 L 150 195 Z"
            stroke="#06b6d4"
            strokeWidth="2.5"
            fill="#050814"
          />
          {/* Code / Waveform lines on screen */}
          <line x1="102" y1="156" x2="138" y2="156" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
          <line x1="102" y1="165" x2="128" y2="165" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="102" y1="174" x2="134" y2="174" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" />
          {/* Laptop Base */}
          <polygon points="75,206 165,206 150,195 90,195" stroke="url(#eduCyanPurple)" strokeWidth="2" fill="#0c1322" />

          {/* Notebook & Pen on Side */}
          <rect x="168" y="196" width="34" height="22" rx="3" stroke="#8b5cf6" strokeWidth="2" fill="#090d1a" />
          <line x1="174" y1="202" x2="196" y2="202" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="174" y1="208" x2="192" y2="208" stroke="#14b8a6" strokeWidth="1.5" />
          <line x1="182" y1="190" x2="206" y2="214" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Modern Teacher / Animation Instructor (Right Side) */}
      <div
        className="absolute top-20 -right-6 sm:right-4 md:right-12 lg:right-24 w-44 sm:w-56 md:w-64 h-auto opacity-[0.16] anim-edu-2 hidden sm:block"
        style={{ animationDelay: '3s' }}
      >
        <svg viewBox="0 0 240 260" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]">
          {/* Subtle Ambient Presentation Glow */}
          <circle cx="120" cy="110" r="85" fill="#8b5cf6" opacity="0.12" filter="blur(20px)" />

          {/* Instructor Head */}
          <circle cx="110" cy="55" r="26" stroke="url(#eduPurplePink)" strokeWidth="2.5" fill="#090d1a" />
          <path d="M 94 50 Q 110 32 126 50" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />

          {/* Torso & Blazer */}
          <path
            d="M 75 145 L 86 92 C 88 85, 132 85, 134 92 L 145 145 Z"
            stroke="url(#eduPurplePink)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="#090d1a"
          />

          {/* Presenting Arm gesturing toward holographic projector */}
          <path d="M 132 108 L 165 118 L 188 95" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Holographic Interactive 3D Sphere / Atom Model */}
          <g transform="translate(195, 80)">
            <ellipse cx="0" cy="0" rx="22" ry="8" stroke="#06b6d4" strokeWidth="1.8" className="anim-edu-spin-slow" />
            <ellipse cx="0" cy="0" rx="22" ry="8" stroke="#a855f7" strokeWidth="1.8" transform="rotate(60)" className="anim-edu-spin-slow" />
            <ellipse cx="0" cy="0" rx="22" ry="8" stroke="#ec4899" strokeWidth="1.8" transform="rotate(120)" className="anim-edu-spin-slow" />
            <circle cx="0" cy="0" r="4" fill="#38bdf8" />
          </g>

          {/* Smart Board / Screen Podium */}
          <rect x="35" y="155" width="150" height="75" rx="8" stroke="url(#eduTealBlue)" strokeWidth="2.5" fill="#070c18" />
          <path d="M 45 190 C 70 170, 95 210, 120 180 S 165 195, 175 175" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <circle cx="120" cy="180" r="3" fill="#14b8a6" />
          <circle cx="150" cy="188" r="3" fill="#8b5cf6" />
          {/* Keyframe tick marks */}
          <line x1="45" y1="215" x2="175" y2="215" stroke="#475569" strokeWidth="1.5" />
          <circle cx="65" cy="215" r="2.5" fill="#06b6d4" />
          <circle cx="105" cy="215" r="2.5" fill="#a855f7" />
          <circle cx="145" cy="215" r="2.5" fill="#ec4899" />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 3: Educational & Animation Objects (Books, Graduation Cap, Laptop, Math)
          ========================================================================= */}

      {/* 1. Academic Graduation Mortarboard / Cap (Floating top-center-left) */}
      <div
        className="absolute top-6 left-1/3 sm:left-[30%] w-16 sm:w-20 h-auto opacity-[0.18] anim-edu-3"
        style={{ animationDelay: '1s' }}
      >
        <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
          {/* Diamond Cap */}
          <polygon points="50,15 92,34 50,53 8,34" stroke="url(#eduCyanPurple)" strokeWidth="2.5" fill="#0b1120" />
          {/* Cap Skull Base */}
          <path d="M 28 43 L 28 58 C 28 66, 72 66, 72 58 L 72 43" stroke="url(#eduCyanPurple)" strokeWidth="2.5" fill="#050814" />
          {/* Tassel */}
          <circle cx="50" cy="34" r="2.5" fill="#06b6d4" />
          <path d="M 50 34 C 68 38, 76 50, 75 66" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <polygon points="73,66 77,66 76,73 74,73" fill="#38bdf8" />
        </svg>
      </div>

      {/* 2. Open Academic Book with Turning Pages (Floating top-right) */}
      <div
        className="absolute top-10 right-1/4 sm:right-[32%] w-16 sm:w-22 h-auto opacity-[0.16] anim-edu-1"
        style={{ animationDelay: '4s' }}
      >
        <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
          {/* Left Page */}
          <path d="M 50 20 C 35 15, 15 17, 10 22 L 10 65 C 15 60, 35 58, 50 63 Z" stroke="#06b6d4" strokeWidth="2.2" fill="#070c18" />
          {/* Right Page */}
          <path d="M 50 20 C 65 15, 85 17, 90 22 L 90 65 C 85 60, 65 58, 50 63 Z" stroke="#8b5cf6" strokeWidth="2.2" fill="#070c18" />
          {/* Spine & Ribbon Bookmark */}
          <line x1="50" y1="20" x2="50" y2="65" stroke="url(#eduCyanPurple)" strokeWidth="2.5" />
          <path d="M 50 63 L 53 74 L 56 71 L 59 74 L 59 63" stroke="#ec4899" strokeWidth="1.8" fill="#ec4899" opacity="0.8" />
          {/* Text lines */}
          <line x1="18" y1="32" x2="42" y2="32" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="40" x2="38" y2="40" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="48" x2="42" y2="48" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="58" y1="32" x2="82" y2="32" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="58" y1="40" x2="78" y2="40" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="58" y1="48" x2="82" y2="48" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3. Modern Online Learning Screen / Tablet with Play UI (Floating mid-left) */}
      <div
        className="absolute top-1/2 left-3 sm:left-14 md:left-24 w-18 sm:w-24 h-auto opacity-[0.16] anim-edu-2 hidden sm:block"
        style={{ animationDelay: '2s' }}
      >
        <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
          <rect x="10" y="10" width="80" height="58" rx="8" stroke="url(#eduTealBlue)" strokeWidth="2.5" fill="#080e1d" />
          {/* Video Play Circle inside tablet */}
          <circle cx="50" cy="38" r="14" stroke="#06b6d4" strokeWidth="2" fill="#040711" />
          <polygon points="46,31 46,45 58,38" fill="#14b8a6" />
          {/* Scrub bar */}
          <line x1="20" y1="58" x2="80" y2="58" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="58" x2="52" y2="58" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <circle cx="52" cy="58" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* 4. Creative Animation 3D Isometric Wireframe Cube (Floating mid-right) */}
      <div
        className="absolute top-1/2 right-3 sm:right-14 md:right-24 w-16 sm:w-22 h-auto opacity-[0.17] anim-edu-3 hidden sm:block"
        style={{ animationDelay: '5s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Top Face */}
          <polygon points="50,15 82,33 50,51 18,33" stroke="url(#eduPurplePink)" strokeWidth="2.2" fill="#0a0f24" />
          {/* Left Face */}
          <polygon points="18,33 50,51 50,87 18,69" stroke="#8b5cf6" strokeWidth="2.2" fill="#060917" />
          {/* Right Face */}
          <polygon points="50,51 82,33 82,69 50,87" stroke="#ec4899" strokeWidth="2.2" fill="#040612" />
          {/* Inner 3D Axis Lines */}
          <line x1="50" y1="51" x2="50" y2="24" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50" y1="51" x2="28" y2="63" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="50" y1="51" x2="72" y2="63" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* 5. Bezier Vector Curve Tool with Control Handles (Floating bottom-left) */}
      <div
        className="absolute bottom-20 left-12 sm:left-1/5 w-20 sm:w-28 h-auto opacity-[0.17] anim-edu-1 hidden md:block"
        style={{ animationDelay: '3.5s' }}
      >
        <svg viewBox="0 0 120 70" fill="none" className="w-full h-full">
          {/* Bezier Path */}
          <path d="M 15 55 C 35 15, 85 15, 105 55" stroke="url(#eduCyanPurple)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Handle Lines */}
          <line x1="15" y1="55" x2="35" y2="15" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="105" y1="55" x2="85" y2="15" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Control Anchors */}
          <circle cx="35" cy="15" r="3.5" fill="#06b6d4" />
          <circle cx="85" cy="15" r="3.5" fill="#a855f7" />
          <rect x="11" y="51" width="8" height="8" fill="#14b8a6" rx="1" />
          <rect x="101" y="51" width="8" height="8" fill="#ec4899" rx="1" />
        </svg>
      </div>

      {/* 6. Scientific Atomic Orbit / Energy Rings (Floating bottom-right) */}
      <div
        className="absolute bottom-24 right-10 sm:right-1/5 w-18 sm:w-24 h-auto opacity-[0.16] anim-edu-2 hidden md:block"
        style={{ animationDelay: '4.5s' }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#06b6d4" strokeWidth="2" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#8b5cf6" strokeWidth="2" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#14b8a6" strokeWidth="2" transform="rotate(90 50 50)" />
          <circle cx="50" cy="50" r="6" fill="#38bdf8" />
          <circle cx="20" cy="35" r="3" fill="#a855f7" />
          <circle cx="80" cy="35" r="3" fill="#06b6d4" />
          <circle cx="50" cy="85" r="3" fill="#14b8a6" />
        </svg>
      </div>

      {/* 7. Precision Compass & Digital Stylus / Pen (Floating mid-bottom) */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-auto opacity-[0.15] anim-edu-3"
        style={{ animationDelay: '6s' }}
      >
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          {/* Digital Stylus */}
          <line x1="20" y1="65" x2="65" y2="20" stroke="url(#eduCyanPurple)" strokeWidth="3" strokeLinecap="round" />
          <polygon points="17,68 25,66 21,62" fill="#06b6d4" />
          <circle cx="65" cy="20" r="4" fill="#a855f7" />
          {/* Geometric Arc Drawn by Stylus */}
          <path d="M 28 65 A 35 35 0 0 1 65 28" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 4: Micro Floating Glowing Particles & Star Dots
          ========================================================================= */}
      <div className="absolute inset-0">
        {/* Soft glowing ambient dots drifting and pulsing */}
        <div className="absolute top-[22%] left-[18%] w-2 h-2 rounded-full bg-cyan-400 blur-[1px] opacity-[0.25] anim-edu-pulse" />
        <div className="absolute top-[35%] left-[45%] w-1.5 h-1.5 rounded-full bg-purple-400 blur-[1px] opacity-[0.22] anim-edu-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[18%] right-[22%] w-2.5 h-2.5 rounded-full bg-teal-300 blur-[1.5px] opacity-[0.28] anim-edu-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[28%] left-[30%] w-2 h-2 rounded-full bg-indigo-400 blur-[1px] opacity-[0.2] anim-edu-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[36%] right-[35%] w-1.5 h-1.5 rounded-full bg-cyan-300 blur-[1px] opacity-[0.25] anim-edu-pulse" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-[55%] right-[15%] w-2 h-2 rounded-full bg-pink-400 blur-[1px] opacity-[0.18] anim-edu-pulse" style={{ animationDelay: '5s' }} />

        {/* Small sparkling cross sparkles */}
        <div className="absolute top-[15%] left-[38%] text-cyan-400 text-xs opacity-[0.2] anim-edu-1">✦</div>
        <div className="absolute bottom-[40%] left-[12%] text-purple-400 text-xs opacity-[0.18] anim-edu-2">✦</div>
        <div className="absolute top-[42%] right-[28%] text-teal-300 text-xs opacity-[0.22] anim-edu-3">✦</div>
      </div>
    </div>
  );
};

export default EducationalHeroBackground;
