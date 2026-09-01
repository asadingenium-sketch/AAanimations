import React, { useState } from 'react';
import { X, Calculator, Sparkles, CheckCircle2, Clock, Send, ShieldCheck } from 'lucide-react';
import { ServiceCategory } from '../types';
import { trackQuoteEstimatorSubmit } from '../utils/analytics';

interface QuoteEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddContactMessage: (msg: any) => void;
}

export const QuoteEstimatorModal: React.FC<QuoteEstimatorModalProps> = ({
  isOpen,
  onClose,
  onAddContactMessage,
}) => {
  const [service, setService] = useState<ServiceCategory>('3D-animation' as ServiceCategory);
  const [duration, setDuration] = useState<number>(60);
  const [style, setStyle] = useState<string>('Photorealistic Cinematic');
  const [resolution, setResolution] = useState<string>('4K Ultra HD');
  const [rush, setRush] = useState<boolean>(false);
  const [voiceover, setVoiceover] = useState<boolean>(true);
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  // Price Calculation Logic
  const calculatePrice = () => {
    let baseRatePerSec = 45; // default rate
    if (service.includes('3d') || service.includes('vfx')) baseRatePerSec = 85;
    else if (service.includes('2d')) baseRatePerSec = 50;
    else if (service.includes('motion')) baseRatePerSec = 40;
    else if (service.includes('web')) baseRatePerSec = 30;

    let subtotal = duration * baseRatePerSec;
    if (style.includes('Photorealistic') || style.includes('AAA')) subtotal *= 1.4;
    if (resolution.includes('4K')) subtotal += 500;
    if (voiceover) subtotal += 450;
    if (rush) subtotal *= 1.35;

    const minPrice = Math.round(subtotal * 0.9);
    const maxPrice = Math.round(subtotal * 1.15);

    return { minPrice, maxPrice };
  };

  const { minPrice, maxPrice } = calculatePrice();

  const handleSubmitEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const budgetRangeStr = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;
    const newMsg = {
      id: `quote-${Date.now()}`,
      name: clientName || 'Estimator User',
      email: clientEmail,
      phone: '',
      service,
      budget: budgetRangeStr,
      message: `Estimated Scope: ${service} | Duration: ${duration}s | Style: ${style} | Res: ${resolution} | Rush: ${rush ? 'Yes' : 'No'} | Voiceover: ${voiceover ? 'Yes' : 'No'}`,
      submittedAt: new Date().toLocaleString(),
      status: 'New'
    };
    onAddContactMessage(newMsg);
    // Track privacy-safe quote submission
    trackQuoteEstimatorSubmit(service, budgetRangeStr);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-600 flex items-center justify-center text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">Interactive Project Cost Estimator</h3>
              <p className="text-xs text-slate-400">Calculate instant estimated range for your production</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded-2xl text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-extrabold text-lg">Estimate Proposal Sent!</h4>
            <p className="text-xs text-slate-300">
              We have reserved your estimate ($${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}). A producer will email you shortly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitEstimate} className="space-y-6">
            {/* Step 1: Service */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: '2d-animation', label: '2D Animation' },
                  { id: '3d-animation', label: '3D Animation' },
                  { id: 'motion-graphics', label: 'Motion Graphics' },
                  { id: 'vfx-cgi', label: 'CGI & VFX' },
                  { id: 'printing-services', label: 'Printing Services' },
                  { id: 'video-editing', label: 'Video Editing' },
                  { id: 'game-art', label: 'Game Art' },
                  { id: 'graphic-design', label: 'Branding/Graphic' }
                ].map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setService(s.id as ServiceCategory)}
                    className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                      service === s.id
                        ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Duration Slider */}
            <div className="space-y-2 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="uppercase text-slate-400">2. Target Duration</span>
                <span className="text-cyan-400 font-mono font-black text-sm">{duration} Seconds ({Math.round((duration/60)*10)/10} Mins)</span>
              </div>
              <input
                type="range"
                min={15}
                max={300}
                step={15}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Step 3: Style & Resolution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Style Complexity
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-white"
                >
                  <option>Standard Vector / Clean Flat</option>
                  <option>Custom Character Rigged</option>
                  <option>Photorealistic Cinematic</option>
                  <option>AAA Unreal Engine 5 Realtime</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Master Output Format
                </label>
                <select
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-white"
                >
                  <option>4K Ultra HD (3840x2160)</option>
                  <option>1080p Full HD (1920x1080)</option>
                  <option>Multi-Ratio Social (16:9 + 9:16 + 1:1)</option>
                </select>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
              <label className="flex items-center space-x-2 p-3 bg-slate-800/80 rounded-xl border border-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={voiceover}
                  onChange={(e) => setVoiceover(e.target.checked)}
                  className="accent-cyan-500 w-4 h-4"
                />
                <span>Include Pro Voiceover & SFX Mixing</span>
              </label>

              <label className="flex items-center space-x-2 p-3 bg-slate-800/80 rounded-xl border border-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rush}
                  onChange={(e) => setRush(e.target.checked)}
                  className="accent-cyan-500 w-4 h-4"
                />
                <span>Expedited Rush Delivery (35% speed boost)</span>
              </label>
            </div>

            {/* Estimated Output Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-900/90 to-purple-900/90 border border-cyan-500/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                  Estimated Investment Range
                </div>
                <div className="text-3xl font-black text-white font-mono mt-1">
                  ${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Includes full IP commercial rights & source project files
                </div>
              </div>

              <div className="w-full sm:w-auto space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Work Email to receive proposal"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md"
                >
                  Request Official Written Proposal →
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
