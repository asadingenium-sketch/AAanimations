import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';
import { TeamAvatar } from './TeamAvatar';
import { getAssetUrl } from '../utils/assetHelper';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [photoSrc, setPhotoSrc] = useState<string | undefined>(() =>
    member.photo ? getAssetUrl(member.photo) : undefined
  );
  const [useAvatarFallback, setUseAvatarFallback] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handlePhotoError = () => {
    const baseName = member.name.split(' ')[0];
    const baseLower = baseName.toLowerCase();

    if (retryCount === 0) {
      setRetryCount(1);
      setPhotoSrc(getAssetUrl(`team/${baseName}.png`));
    } else if (retryCount === 1) {
      setRetryCount(2);
      setPhotoSrc(getAssetUrl(`team/${baseName}.jpg`));
    } else if (retryCount === 2) {
      setRetryCount(3);
      setPhotoSrc(getAssetUrl(`images/team/${baseLower}.jpg`));
    } else if (retryCount === 3) {
      setRetryCount(4);
      setPhotoSrc(getAssetUrl(`images/team/${baseLower}.png`));
    } else if (retryCount === 4) {
      setRetryCount(5);
      setPhotoSrc(getAssetUrl(`Images/team/${baseName}.jpg`));
    } else if (retryCount === 5) {
      setRetryCount(6);
      setPhotoSrc(getAssetUrl(`Images/team/${baseName}.png`));
    } else {
      setUseAvatarFallback(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-cyan-500 transition-all group flex flex-col justify-between">
      <div>
        <div className="aspect-square rounded-2xl overflow-hidden mb-5 bg-slate-950 relative border border-slate-200 dark:border-slate-800">
          {photoSrc && !useAvatarFallback ? (
            <img
              src={photoSrc}
              alt={member.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={handlePhotoError}
            />
          ) : (
            <TeamAvatar
              memberId={member.id}
              name={member.name}
              className="group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-0.5">
          {member.name}
        </h3>
        <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-3">
          {member.role}
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {member.bio}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1">
        {member.specialties.map((spec, idx) => (
          <span
            key={idx}
            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Meet the Masters Behind the Magic
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Our creative directors, animation specialists, VFX professionals, & digital production experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
