'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowRight, Building2, MessageCircle, Phone, Mail } from 'lucide-react';
import { Property, LeadPayload } from '@/lib/types';
import { submitLead } from '@/lib/firebase';
import { ADVISOR_NAME, ADVISOR_PHONE_DISPLAY, getWhatsAppUrl, getEmailUrl, getTelUrl } from '@/lib/contact';

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

  const whatsappLink = getWhatsAppUrl(selectedProperty);
  const emailLink = getEmailUrl(selectedProperty);
  const telLink = getTelUrl();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-lg bg-[#080d16] border border-white/[0.14] rounded-[8px] p-5 sm:p-7 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          onClick={handleReset}
          className="btn-ghost absolute top-3.5 right-3.5 p-1.5"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* ── Success State ── */
          <div className="text-center py-5 space-y-4">
            <div className="w-12 h-12 bg-brand-500/10 border border-brand-500/25 rounded-[6px] flex items-center justify-center mx-auto text-brand-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Official Allocation Access Granted
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed mt-1.5">
                Your dossier for{' '}
                <strong className="text-white">{selectedProperty?.name || 'Abhee Projects'}</strong>{' '}
                has been registered. Institutional advisor {ADVISOR_NAME} will transmit the
                direct pricing sheet to <strong className="text-brand-300">{phone}</strong>.
              </p>
            </div>

            {/* Quick 1-tap WhatsApp button right on success */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#030712] font-black text-xs py-2.5 px-4 rounded-[6px] shadow transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <div className="bg-[#040810] rounded-[6px] border border-white/[0.07] p-3 text-left text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-brand-400 font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Authorized Channel Partner Desk</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">
                K-RERA Reg: PRM/KA/RERA/1251/310/AG/260916/007810 • Direct Developer Terms.
              </p>
            </div>

            <button onClick={handleReset} className="btn-secondary w-full py-2.5 text-xs">
              Done — Return to Explorer
            </button>
          </div>
        ) : (
          /* ── Form State ── */
          <div className="space-y-4">

            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-[4px] text-[10px] font-mono font-bold text-brand-400 uppercase tracking-wider mb-2">
                <Lock className="w-3 h-3" />
                Zero-Spam Privacy Shield
              </div>

              <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                {actionTitle}
              </h3>

              {selectedProperty ? (
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>{selectedProperty.name} · {selectedProperty.priceDisplay}</span>
                </div>
              ) : (
                <p className="text-xs text-slate-400 mt-0.5">
                  Direct developer allocations with institutional research &amp; title clearance.
                </p>
              )}
            </div>

            {/* Instant Contact Short-circuit Bar */}
            <div className="bg-[#040810] rounded-[6px] border border-white/[0.07] p-2.5 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>INSTANT ADVISOR CONNECT</span>
                <span className="text-brand-400">{ADVISOR_NAME}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 py-1.5 px-2 rounded-[4px] text-[11px] font-bold"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={telLink}
                  className="flex items-center justify-center gap-1 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.1] py-1.5 px-2 rounded-[4px] text-[11px] font-medium"
                >
                  <Phone className="w-3 h-3 text-brand-400" />
                  <span>Call</span>
                </a>
                <a
                  href={emailLink}
                  className="flex items-center justify-center gap-1 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.1] py-1.5 px-2 rounded-[4px] text-[11px] font-medium"
                >
                  <Mail className="w-3 h-3 text-brand-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Karthik Ramamurthy"
                  className="field-input py-2 px-3 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    WhatsApp / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98800 XXXXX"
                    className="field-input py-2 px-3 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Work Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="karthik@company.com"
                    className="field-input py-2 px-3 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Target Possession Horizon
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="field-input py-2 px-3 text-xs"
                >
                  <option>Ready to Move / Within 3 Months</option>
                  <option>December 2026 (Under Construction)</option>
                  <option>September 2028 (Mid-Term)</option>
                  <option>2030 (Pre-Launch Capital Appreciation)</option>
                </select>
              </div>

              {/* Mandatory disclosure */}
              <div className="bg-[#040810] rounded-[6px] border border-white/[0.07] p-2.5 text-[10px] text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Channel Partner Disclosure: </span>
                Inquiry registered via <strong>{ADVISOR_NAME}</strong>, authorized Channel Partner for <strong>Abhee Ventures</strong>. Official developer terms, zero brokerage.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3 font-bold flex items-center justify-center gap-2 text-xs"
              >
                <span>{isSubmitting ? 'Verifying Allocation...' : 'Unlock Direct Developer Pricing'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
