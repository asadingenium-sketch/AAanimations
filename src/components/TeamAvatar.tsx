import React from 'react';

interface TeamAvatarProps {
  memberId: string;
  name: string;
  className?: string;
}

export const TeamAvatar: React.FC<TeamAvatarProps> = ({ memberId, name, className = '' }) => {
  switch (memberId) {
    case 'm1': // Asad Ahmed Khan - CEO & Creative Director
      return (
        <svg
          viewBox="0 0 240 240"
          className={`w-full h-full ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name}
        >
          <defs>
            <linearGradient id="m1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#083344" />
            </linearGradient>
            <linearGradient id="m1-skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5D0B5" />
              <stop offset="100%" stopColor="#E2B897" />
            </linearGradient>
            <linearGradient id="m1-hair" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="m1-suit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="m1-accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="240" height="240" fill="url(#m1-bg)" />

          {/* Abstract Studio Geometry */}
          <circle cx="190" cy="50" r="45" fill="#06B6D4" opacity="0.08" />
          <circle cx="50" cy="180" r="60" fill="#3B82F6" opacity="0.06" />
          <path d="M 0,160 Q 60,130 120,150 T 240,130" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="4 4" />
          <path d="M 30,30 L 70,30" stroke="#06B6D4" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
          <circle cx="78" cy="30" r="2.5" fill="#06B6D4" opacity="0.5" />

          {/* Character Group */}
          <g transform="translate(0, 8)">
            {/* Shoulders / Suit Jacket */}
            <path d="M 45,232 C 48,185 80,162 120,162 C 160,162 192,185 195,232 Z" fill="url(#m1-suit)" />
            
            {/* Suit Lapels & Inner Shirt */}
            <path d="M 98,165 L 120,205 L 142,165 Z" fill="#E0F2FE" />
            <path d="M 112,175 L 120,205 L 128,175 Z" fill="#BAE6FD" />
            {/* Cyan Lapel Trim */}
            <path d="M 75,175 L 105,232 L 85,232 L 60,195 Z" fill="#334155" />
            <path d="M 165,175 L 135,232 L 155,232 L 180,195 Z" fill="#334155" />
            <path d="M 104,185 L 120,225 L 108,225 Z" fill="url(#m1-accent)" opacity="0.8" />

            {/* Neck */}
            <rect x="106" y="128" width="28" height="38" rx="6" fill="#E2B897" />
            <path d="M 106,145 C 112,154 128,154 134,145 L 134,166 L 106,166 Z" fill="#D4A380" opacity="0.6" />

            {/* Head Base */}
            <path d="M 82,92 C 82,58 158,58 158,92 C 158,126 142,148 120,148 C 98,148 82,126 82,92 Z" fill="url(#m1-skin)" />

            {/* Ears */}
            <ellipse cx="82" cy="98" rx="6" ry="11" fill="#E2B897" />
            <ellipse cx="158" cy="98" rx="6" ry="11" fill="#E2B897" />

            {/* Hair */}
            <path d="M 78,82 C 76,55 94,40 120,38 C 146,36 164,48 162,72 C 158,74 150,68 140,66 C 122,62 100,68 88,78 C 82,82 79,84 78,82 Z" fill="url(#m1-hair)" />
            <path d="M 80,78 C 82,60 102,46 128,44 C 144,43 158,50 162,64 C 152,58 136,54 120,55 C 104,56 90,66 80,78 Z" fill="#334155" />

            {/* Eyebrows */}
            <path d="M 94,84 Q 104,80 112,83" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 128,83 Q 136,80 146,84" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <circle cx="103" cy="92" r="3" fill="#0F172A" />
            <circle cx="137" cy="92" r="3" fill="#0F172A" />
            <circle cx="104" cy="91" r="1" fill="#FFFFFF" />
            <circle cx="138" cy="91" r="1" fill="#FFFFFF" />

            {/* Designer Glasses (Creative Director Look) */}
            <rect x="91" y="83" width="24" height="17" rx="4" fill="none" stroke="#06B6D4" strokeWidth="2" />
            <rect x="125" y="83" width="24" height="17" rx="4" fill="none" stroke="#06B6D4" strokeWidth="2" />
            <line x1="115" y1="91" x2="125" y2="91" stroke="#06B6D4" strokeWidth="2" />
            <line x1="82" y1="89" x2="91" y2="89" stroke="#06B6D4" strokeWidth="1.5" />
            <line x1="149" y1="89" x2="158" y2="89" stroke="#06B6D4" strokeWidth="1.5" />

            {/* Nose */}
            <path d="M 120,93 L 118,107 L 123,107" stroke="#D4A380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Subtle Groomed Beard & Smile */}
            <path d="M 112,118 Q 120,123 128,118" stroke="#A77A5B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 98,115 C 104,136 136,136 142,115 C 136,140 104,140 98,115 Z" fill="#0F172A" opacity="0.25" />
          </g>
        </svg>
      );

    case 'm2': // Touseef - Managing Director
      return (
        <svg
          viewBox="0 0 240 240"
          className={`w-full h-full ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name}
        >
          <defs>
            <linearGradient id="m2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="60%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#090D16" />
            </linearGradient>
            <linearGradient id="m2-skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2CBAD" />
              <stop offset="100%" stopColor="#DEB18D" />
            </linearGradient>
            <linearGradient id="m2-tie" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="240" height="240" fill="url(#m2-bg)" />

          {/* Ambient Vector Shapes */}
          <rect x="160" y="30" width="50" height="50" rx="12" fill="#6366F1" opacity="0.08" transform="rotate(25 185 55)" />
          <circle cx="40" cy="80" r="30" fill="#06B6D4" opacity="0.08" />
          <path d="M 200,160 L 220,180 M 200,170 L 220,190" stroke="#6366F1" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />

          {/* Character Group */}
          <g transform="translate(0, 8)">
            {/* Shoulders / Executive Dark Suit */}
            <path d="M 44,232 C 48,184 80,160 120,160 C 160,160 192,184 196,232 Z" fill="#1E293B" />
            
            {/* White Crisp Shirt V */}
            <path d="M 100,162 L 120,215 L 140,162 Z" fill="#F8FAFC" />
            
            {/* Executive Cyan Silk Tie */}
            <path d="M 116,168 L 124,168 L 127,215 L 120,230 L 113,215 Z" fill="url(#m2-tie)" />
            <polygon points="115,164 125,164 123,172 117,172" fill="#0E7490" />

            {/* Suit Lapels */}
            <path d="M 72,170 L 106,232 L 80,232 L 54,195 Z" fill="#0F172A" />
            <path d="M 168,170 L 134,232 L 160,232 L 186,195 Z" fill="#0F172A" />

            {/* Neck */}
            <rect x="106" y="126" width="28" height="38" rx="6" fill="#DEB18D" />
            <path d="M 106,142 C 114,152 126,152 134,142 L 134,164 L 106,164 Z" fill="#CD9B74" opacity="0.6" />

            {/* Head */}
            <path d="M 83,90 C 83,56 157,56 157,90 C 157,124 141,146 120,146 C 99,146 83,124 83,90 Z" fill="url(#m2-skin)" />

            {/* Ears */}
            <ellipse cx="83" cy="96" rx="6" ry="11" fill="#DEB18D" />
            <ellipse cx="157" cy="96" rx="6" ry="11" fill="#DEB18D" />

            {/* Hair - Side Part Executive */}
            <path d="M 79,84 C 77,58 92,42 120,40 C 148,38 163,52 161,76 C 154,72 144,66 126,65 C 105,64 92,72 80,84 Z" fill="#1C1917" />
            <path d="M 80,82 C 86,64 105,52 130,50 C 146,48 158,56 160,68 C 152,60 138,56 124,57 C 106,58 92,68 80,82 Z" fill="#292524" />

            {/* Eyebrows */}
            <path d="M 94,83 Q 103,79 112,82" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 128,82 Q 137,79 146,83" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <circle cx="103" cy="91" r="3" fill="#1C1917" />
            <circle cx="137" cy="91" r="3" fill="#1C1917" />
            <circle cx="104" cy="90" r="1" fill="#FFFFFF" />
            <circle cx="138" cy="90" r="1" fill="#FFFFFF" />

            {/* Nose */}
            <path d="M 120,90 L 118,105 L 123,105" stroke="#C89771" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Clean Trimmed Jaw Contour & Confident Smile */}
            <path d="M 112,117 Q 120,121 128,117" stroke="#A26F4A" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 94,106 C 98,136 142,136 146,106 C 140,132 100,132 94,106 Z" fill="#1C1917" opacity="0.18" />
          </g>
        </svg>
      );

    case 'm3': // Usman Khan - Director – Marketing & Sales
      return (
        <svg
          viewBox="0 0 240 240"
          className={`w-full h-full ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name}
        >
          <defs>
            <linearGradient id="m3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="m3-skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F9D7BC" />
              <stop offset="100%" stopColor="#E4BA9A" />
            </linearGradient>
            <linearGradient id="m3-blazer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="240" height="240" fill="url(#m3-bg)" />

          {/* Ambient Vector Geometric Accents */}
          <circle cx="50" cy="50" r="35" fill="#10B981" opacity="0.08" />
          <circle cx="195" cy="170" r="50" fill="#06B6D4" opacity="0.08" />
          <polygon points="175,40 185,30 195,40 185,50" fill="#10B981" opacity="0.3" />

          {/* Character Group */}
          <g transform="translate(0, 8)">
            {/* Shoulders / Smart Slate Blazer */}
            <path d="M 45,232 C 48,184 80,161 120,161 C 160,161 192,184 195,232 Z" fill="url(#m3-blazer)" />
            
            {/* Dark Crewneck / Inner Shirt */}
            <path d="M 96,164 C 96,192 144,192 144,164 Z" fill="#0F172A" />
            <path d="M 104,164 C 104,180 136,180 136,164 Z" fill="#14B8A6" opacity="0.7" />

            {/* Lapels */}
            <path d="M 70,172 L 102,232 L 78,232 L 52,196 Z" fill="#1E293B" />
            <path d="M 170,172 L 138,232 L 162,232 L 188,196 Z" fill="#1E293B" />

            {/* Neck */}
            <rect x="106" y="128" width="28" height="38" rx="6" fill="#E4BA9A" />
            <path d="M 106,145 C 114,154 126,154 134,145 L 134,166 L 106,166 Z" fill="#D3A27F" opacity="0.6" />

            {/* Head */}
            <path d="M 83,92 C 83,58 157,58 157,92 C 157,126 141,148 120,148 C 99,148 83,126 83,92 Z" fill="url(#m3-skin)" />

            {/* Ears */}
            <ellipse cx="83" cy="98" rx="6" ry="11" fill="#E4BA9A" />
            <ellipse cx="157" cy="98" rx="6" ry="11" fill="#E4BA9A" />

            {/* Modern Textured Haircut */}
            <path d="M 79,84 C 77,54 94,38 120,38 C 146,38 163,52 161,78 C 155,75 145,69 130,68 C 108,67 92,75 79,84 Z" fill="#262626" />
            <path d="M 85,60 C 95,46 112,42 128,42 C 145,42 155,48 158,58 C 148,50 134,47 122,48 C 105,49 94,55 85,60 Z" fill="#404040" />

            {/* Eyebrows */}
            <path d="M 94,84 Q 103,80 112,83" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 128,83 Q 137,80 146,84" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <circle cx="103" cy="92" r="3" fill="#171717" />
            <circle cx="137" cy="92" r="3" fill="#171717" />
            <circle cx="104" cy="91" r="1" fill="#FFFFFF" />
            <circle cx="138" cy="91" r="1" fill="#FFFFFF" />

            {/* Nose */}
            <path d="M 120,92 L 118,107 L 123,107" stroke="#CE9B77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Energetic Friendly Smile */}
            <path d="M 110,118 Q 120,126 130,118" stroke="#AD724E" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'm4': // Rodaba - Marketing Specialist
      return (
        <svg
          viewBox="0 0 240 240"
          className={`w-full h-full ${className}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name}
        >
          <defs>
            <linearGradient id="m4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="50%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#164E63" />
            </linearGradient>
            <linearGradient id="m4-skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDDFCA" />
              <stop offset="100%" stopColor="#ECC2A5" />
            </linearGradient>
            <linearGradient id="m4-hair" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A1B18" />
              <stop offset="100%" stopColor="#1A110F" />
            </linearGradient>
            <linearGradient id="m4-blazer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E7490" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="240" height="240" fill="url(#m4-bg)" />

          {/* Ambient Vector Geometric Accents */}
          <circle cx="190" cy="50" r="40" fill="#22D3EE" opacity="0.08" />
          <circle cx="45" cy="175" r="55" fill="#A855F7" opacity="0.08" />
          <polygon points="55,45 62,35 69,45 62,55" fill="#22D3EE" opacity="0.3" />

          {/* Character Group */}
          <g transform="translate(0, 8)">
            {/* Long Back Hair */}
            <path d="M 72,90 C 65,135 68,175 80,210 C 100,218 140,218 160,210 C 172,175 175,135 168,90 Z" fill="url(#m4-hair)" />

            {/* Shoulders / Professional Teal-Navy Blazer */}
            <path d="M 48,232 C 52,185 82,164 120,164 C 158,164 188,185 192,232 Z" fill="url(#m4-blazer)" />
            
            {/* Silk V-Neck Blouse */}
            <path d="M 102,165 L 120,202 L 138,165 Z" fill="#F1F5F9" />

            {/* Delicate Geometric Necklace */}
            <path d="M 108,166 Q 120,182 132,166" fill="none" stroke="#22D3EE" strokeWidth="1.5" />
            <circle cx="120" cy="180" r="2.5" fill="#22D3EE" />

            {/* Neck */}
            <rect x="108" y="126" width="24" height="40" rx="5" fill="#ECC2A5" />
            <path d="M 108,145 C 114,153 126,153 132,145 L 132,166 L 108,166 Z" fill="#DCAB8B" opacity="0.5" />

            {/* Head Base */}
            <path d="M 85,92 C 85,60 155,60 155,92 C 155,124 140,146 120,146 C 100,146 85,124 85,92 Z" fill="url(#m4-skin)" />

            {/* Ears */}
            <ellipse cx="85" cy="98" rx="5" ry="9" fill="#ECC2A5" />
            <ellipse cx="155" cy="98" rx="5" ry="9" fill="#ECC2A5" />
            {/* Minimalist Earrings */}
            <circle cx="85" cy="105" r="2" fill="#22D3EE" />
            <circle cx="155" cy="105" r="2" fill="#22D3EE" />

            {/* Front Styled Hair / Bob Sides */}
            <path d="M 80,85 C 78,54 94,40 120,38 C 146,40 162,54 160,85 C 154,76 142,66 120,66 C 98,66 86,76 80,85 Z" fill="url(#m4-hair)" />
            {/* Side Bangs */}
            <path d="M 82,82 C 84,104 88,124 96,140 C 91,135 84,115 80,95 Z" fill="#2A1B18" />
            <path d="M 158,82 C 156,104 152,124 144,140 C 149,135 156,115 160,95 Z" fill="#2A1B18" />
            {/* Hair Highlight */}
            <path d="M 94,54 C 106,46 124,46 138,50 C 146,52 152,58 154,64 C 146,55 134,50 120,50 C 106,50 96,55 94,54 Z" fill="#452C28" />

            {/* Eyebrows */}
            <path d="M 95,83 Q 104,79 113,82" stroke="#1A110F" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 127,82 Q 136,79 145,83" stroke="#1A110F" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <circle cx="104" cy="91" r="3" fill="#1A110F" />
            <circle cx="136" cy="91" r="3" fill="#1A110F" />
            <circle cx="105" cy="90" r="1" fill="#FFFFFF" />
            <circle cx="137" cy="90" r="1" fill="#FFFFFF" />
            {/* Eyelashes Accent */}
            <path d="M 100,89 L 108,89" stroke="#1A110F" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 132,89 L 140,89" stroke="#1A110F" strokeWidth="1.5" strokeLinecap="round" />

            {/* Nose */}
            <path d="M 120,91 L 119,104 L 122,104" stroke="#DCAB8B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Warm Friendly Smile */}
            <path d="M 111,116 Q 120,123 129,116" stroke="#C26D63" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-cyan-400 font-bold text-xl">
          {name.charAt(0)}
        </div>
      );
  }
};
