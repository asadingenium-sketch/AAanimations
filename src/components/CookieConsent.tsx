import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isConsent = localStorage.getItem('nexus_cookie_consent');
    if (!isConsent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nexus_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-slate-900/95 border border-slate-800 text-white p-5 rounded-3xl shadow-2xl backdrop-blur-md flex flex-col space-y-3">
      <div className="flex items-start space-x-3">
        <Cookie className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-slate-300">
          We use cookies and analytics to enhance your experience, analyze showreel engagement, and optimize visual performance.
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors"
        >
          Accept All Cookies
        </button>
      </div>
    </div>
  );
};
