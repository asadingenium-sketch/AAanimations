import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h3 className="font-extrabold text-lg">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p><strong>Effective Date:</strong> January 1, 2026</p>
              <p>At AA Animations, we respect your intellectual property and client confidentiality. This Privacy Policy details how we collect, store, and protect project briefs, NDA media, and personal inquiries.</p>
              <h4 className="font-bold text-sm text-white">1. Confidentiality & Non-Disclosure (NDA)</h4>
              <p>All client files, CAD drawings, green-screen footage, and 3D assets uploaded via our quote portal are encrypted using SSL and stored in secure server environments. We never disclose unreleased commercial work without written authorization.</p>
              <h4 className="font-bold text-sm text-white">2. Data Collection</h4>
              <p>We collect contact details (Name, Email, Phone) solely for project communication, invoicing, and service updates. You may request data erasure at any time by contacting privacy@aaanimations.com.</p>
            </>
          ) : (
            <>
              <p><strong>Effective Date:</strong> January 1, 2026</p>
              <p>Welcome to AA Animations. By engaging our digital production, 3D animation, or web development services, you agree to these terms.</p>
              <h4 className="font-bold text-sm text-white">1. Intellectual Property & Master Ownership</h4>
              <p>Upon final payment completion, all master renders, project files (.blend, .c4d, .aep), and source code transfer to the client, subject to standard software licensing agreements.</p>
              <h4 className="font-bold text-sm text-white">2. Revision Rounds</h4>
              <p>Standard packages include 2 major revision cycles during the animatic/storyboard phase and 1 minor revision cycle during final compositing.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
