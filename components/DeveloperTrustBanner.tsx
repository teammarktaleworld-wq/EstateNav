'use client';

import React from 'react';
import { Handshake, Award, ShieldCheck, Building, CheckCircle2, FileCheck2, ArrowRight } from 'lucide-react';

interface DeveloperTrustBannerProps {
  onUnlockPricing: () => void;
}

export const DeveloperTrustBanner: React.FC<DeveloperTrustBannerProps> = ({
  onUnlockPricing,
}) => {
  return (
    <section id="abhee-spotlight" className="py-12 sm:py-16 bg-canvas-900 border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Background architectural grid highlight */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-canvas-950 p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/[0.09] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Developer Overview & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="inline-flex items-center space-x-2 text-brand-400 text-xs font-bold uppercase tracking-widest bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              <Handshake className="w-3.5 h-3.5" />
              <span>Anchor Developer Partnership</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              The Abhee Advantage: Built for Bengaluru&apos;s Urban Future
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              EstateNav&apos;s premier advisory partnership with Abhee Ventures guarantees institutional price transparency, zero brokerage overheads, and prioritized allocation for high-demand 2, 3, 3.5 & 4.5 BHK layouts.
            </p>

            {/* Key Metric Stats */}
            <div className="pt-3 grid grid-cols-3 gap-3 border-t border-white/[0.08] text-center sm:text-left">
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-brand-400 font-mono block">15+ Yrs</span>
                <span className="text-[11px] text-slate-400 font-medium">Proven Track Record</span>
              </div>
              <div className="border-l border-white/[0.08] pl-3">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-400 font-mono block">3.5M+</span>
                <span className="text-[11px] text-slate-400 font-medium">Sq.Ft Delivered</span>
              </div>
              <div className="border-l border-white/[0.08] pl-3">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-400 font-mono block">Mivan</span>
                <span className="text-[11px] text-slate-400 font-medium">Formwork Tech</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onUnlockPricing}
                className="inline-flex items-center space-x-2 bg-brand-500 hover:bg-brand-400 text-canvas-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-brand-500/20"
              >
                <span>Unlock Direct Developer Pricing Sheet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: 2x2 Value Proposition Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 bg-canvas-900 rounded-2xl border border-white/[0.08] space-y-2.5 hover:border-brand-500/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white">100% Legal & Title Clear</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete A-Khata, BBMP & BDA sanctioned plans, with digitized Kaveri 2.0 encumbrance audit dossiers.
              </p>
            </div>

            <div className="p-5 bg-canvas-900 rounded-2xl border border-white/[0.08] space-y-2.5 hover:border-brand-500/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white">Integrated Townships</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Expansive biophilic masterplans with 75%+ open green spaces, international golf zones, and sports ecosystems.
              </p>
            </div>

            <div className="p-5 bg-canvas-900 rounded-2xl border border-white/[0.08] space-y-2.5 hover:border-brand-500/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white">Bank APF Approved</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-approved home loan codes across HDFC, ICICI, and SBI for seamless disbursement and expedited processing.
              </p>
            </div>

            <div className="p-5 bg-canvas-900 rounded-2xl border border-white/[0.08] space-y-2.5 hover:border-brand-500/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white">Zero Brokerage Guarantee</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct buyer-developer onboarding: no hidden commissions, no markup, and genuine pre-launch pricing privileges.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

