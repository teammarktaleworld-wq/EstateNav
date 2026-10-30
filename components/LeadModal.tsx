'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { Property, LeadPayload } from '@/lib/types';
import { submitLead } from '@/lib/firebase';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
  actionTitle?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
  actionTitle = 'Inspect Allocation Deck',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('Immediate / Ready');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    const payload: LeadPayload = {
      name,
      email,
      phone,
      preferredCorridor: selectedProperty?.microMarket || 'Sarjapur - Whitefield',
      budget: selectedProperty?.priceDisplay || '₹1.25 Cr - ₹2.5 Cr',
      propertyId: selectedProperty?.id,
      propertyName: selectedProperty?.name || 'Abhee Partner Portfolio',
      actionContext: actionTitle,
      channelPartnerDisclosureAccepted: true,
      createdAt: new Date().toISOString(),
    };

    await submitLead(payload);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-canvas-900 border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/[0.05] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Submission Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-brand-500/10 border border-brand-500/30 rounded-2xl flex items-center justify-center mx-auto text-brand-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-white">
              Official Allocation Access Granted
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your dossier for <strong className="text-white">{selectedProperty?.name || 'Abhee Projects'}</strong> has been registered. An institutional advisor from SV Praveen&apos;s desk will transmit the direct pricing sheet and floorplates to <strong className="text-brand-300">{phone}</strong>.
            </p>

            <div className="p-4 bg-canvas-950 rounded-xl border border-white/[0.08] text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center space-x-2 text-brand-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Authorized Channel Partner Desk</span>
              </div>
              <p className="text-[11px] text-slate-400">
                K-RERA Reg: PRM/KA/RERA/1251/310/AG/260916/007810 • Direct Developer Terms.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-brand-500 hover:bg-brand-400 text-canvas-950 font-bold text-xs py-3 rounded-xl transition-all shadow"
            >
              Done & Return to Explorer
            </button>
          </div>
        ) : (
          /* Form Input State */
          <div className="space-y-4">
            
            {/* Header info */}
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-brand-400 uppercase tracking-wider mb-2">
                <Lock className="w-3 h-3" />
                <span>Zero-Spam Privacy Shield</span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                {actionTitle}
              </h3>

              {selectedProperty ? (
                <div className="flex items-center space-x-2 text-xs text-slate-300 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>{selectedProperty.name} • {selectedProperty.priceDisplay}</span>
                </div>
              ) : (
                <p className="text-xs text-slate-400 mt-0.5">
                  Direct developer allocations with institutional research & title clearance.
                </p>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Karthik Ramamurthy"
                  className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    WhatsApp / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98800 XXXXX"
                    className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Work Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="karthik@company.com"
                    className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Target Possession Horizon
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option>Ready to Move / Within 3 Months</option>
                  <option>December 2026 (Under Construction)</option>
                  <option>September 2028 (Mid-Term)</option>
                  <option>2030 (Pre-Launch Capital Appreciation)</option>
                </select>
              </div>

              {/* Mandatory Compliance Subtitle Annotation (Blueprint Slide 14) */}
              <div className="p-3 bg-canvas-950/80 rounded-xl border border-white/[0.06] text-[10px] text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Mandatory Channel Partner Disclosure:</span> By submitting this form, you consent to registering your inquiry through <strong>SV Praveen</strong>, authorized Channel Partner for <strong>Abhee Ventures</strong>. Official sales communications are coordinated directly under developer pricing terms with zero brokerage.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-500 hover:bg-brand-400 disabled:opacity-50 text-canvas-950 font-extrabold text-xs sm:text-sm py-3 rounded-xl transition-all shadow-md shadow-brand-500/20 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Verifying Allocation...' : 'Unlock Direct Developer Pricing'}</span>
                <ArrowRight className="w-4 h-4 text-canvas-950" />
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};

