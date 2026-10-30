'use client';

import React from 'react';
import { Search, Shield, ArrowDown, Sparkles, Building, Layers, MapPin, CheckCircle2 } from 'lucide-react';
import { Segment } from '@/lib/types';

interface HeroFoldProps {
  segment: Segment;
  selectedMicroMarket: string;
  onMicroMarketChange: (val: string) => void;
  selectedBudget: string;
  onBudgetChange: (val: string) => void;
  onSearchClick: () => void;
  onInspectSpotlight: () => void;
}

export const HeroFold: React.FC<HeroFoldProps> = ({
  segment,
  selectedMicroMarket,
  onMicroMarketChange,
  selectedBudget,
  onBudgetChange,
  onSearchClick,
  onInspectSpotlight,
}) => {
  // Segment-specific copy and spotlight data
  const segmentConfig = {
    residential: {
      badge: 'Q4 2026 Primary Launch Pad',
      headline: (
        <>
          Navigate Bengaluru Real Estate with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">
            Data-Backed Certainty.
          </span>
        </>
      ),
      description:
        'Institutional-grade research, Kaveri 2.0 title audits, and direct developer allocations across Sarjapur, Whitefield & North Bengaluru corridors.',
      spotlightBadge: 'Partner Flagship Feature',
      spotlightPartner: 'Abhee Ventures Anchor Partner',
      spotlightTitle: 'Abhee Codename New Dimension',
      spotlightLoc: '45-Acre Scotland-Themed Township • Varthur-Sarjapur Link',
      spotlightPrice: '₹1.35 Cr Onwards',
      spotlightImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      features: ['3-Acre Golf Zone', '4 Grand Clubhouses', 'Mivan Formwork'],
      locationLabel: 'Micro-Market',
      locations: [
        'All Bengaluru Corridors',
        'Varthur - Sarjapur Road',
        'Whitefield & EPIP Zone',
        'Electronic City Phase 1',
        'North BLR (Hebbal / STRR)',
      ],
      budgetLabel: 'Budget / Ticket',
      budgets: [
        'Any Budget',
        '₹70 L – ₹1.25 Cr (First Home)',
        '₹1.25 Cr – ₹2.0 Cr (Mid-Premium)',
        '₹2.0 Cr+ (Luxury 3.5 & 4.5 BHK)',
      ],
    },
    commercial: {
      badge: 'Institutional Tech Corridor Portfolio',
      headline: (
        <>
          Enterprise Grade{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">
            Commercial & Office Leasing.
          </span>
        </>
      ),
      description:
        'Grade-A SEZ floorplates, managed startup suites, and pre-leased commercial assets with 8.5% – 10.2% cap rates across Outer Ring Road & North Bengaluru.',
      spotlightBadge: 'Grade-A Tech Park',
      spotlightPartner: 'Enterprise Commercial Portfolio',
      spotlightTitle: 'Prestige Tech Cloud – Tower B',
      spotlightLoc: 'Hebbal-Devanahalli Expressway • Warm Shell Handover',
      spotlightPrice: '₹85 / sq.ft / mo',
      spotlightImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      features: ['8.9% Institutional Cap Rate', 'Platinum Green Building', 'Redundant Power'],
      locationLabel: 'Tech Corridor',
      locations: [
        'All Bengaluru Corridors',
        'Outer Ring Road (Bellandur-ORR)',
        'Whitefield & EPIP Zone',
        'North BLR (Hebbal / STRR)',
      ],
      budgetLabel: 'Carpet / Floorplate',
      budgets: [
        'Any Size',
        '10,000 - 25,000 sq.ft.',
        '25,000 - 50,000 sq.ft.',
        '50,000+ sq.ft. (Campus Block)',
      ],
    },
    plotted: {
      badge: 'Infrastructure Corridors & Land Banks',
      headline: (
        <>
          Gated Plotted Reserves in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">
            High-Growth Corridors.
          </span>
        </>
      ),
      description:
        'BDA & BMRDA approved freehold land plots with verified clear titles along Satellite Town Ring Road (STRR) & Whitefield Extension.',
      spotlightBadge: 'Plotted Reserve Feature',
      spotlightPartner: 'Abhee Ventures Land Reserve',
      spotlightTitle: 'Abhee Tranquila Plotted Enclave',
      spotlightLoc: 'Sarjapur-Attibele Corridor • Direct STRR Link',
      spotlightPrice: '₹90 Lakhs Onwards',
      spotlightImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      features: ['BMRDA Approved', 'Underground Utilities', 'Clubhouse & Parks'],
      locationLabel: 'Plotted Belt',
      locations: [
        'All Bengaluru Corridors',
        'Varthur - Sarjapur Road',
        'Whitefield & EPIP Zone',
        'Electronic City Phase 1',
      ],
      budgetLabel: 'Plot Dimension',
      budgets: [
        'Any Dimension',
        '1,200 sq.ft. (30x40)',
        '1,500 sq.ft. (30x50)',
        '1,800+ sq.ft. (Villa Plot)',
      ],
    },
  }[segment];

  return (
    <section className="relative bg-gradient-to-b from-canvas-950 via-canvas-900 to-canvas-950 border-b border-white/[0.08] py-8 sm:py-12 lg:py-16 overflow-hidden">
      
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Console (40-45% width on desktop) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Live Launch Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 px-3.5 py-1.5 rounded-full text-brand-300 text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>{segmentConfig.badge}</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
              {segmentConfig.headline}
            </h1>

            {/* Subtext description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              {segmentConfig.description}
            </p>

            {/* Dynamic Search Console */}
            <div className="bg-canvas-900/95 p-4 sm:p-5 rounded-2xl border border-white/[0.1] shadow-2xl space-y-3.5 backdrop-blur-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Micro-market selector */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {segmentConfig.locationLabel}
                  </label>
                  <select
                    value={selectedMicroMarket}
                    onChange={(e) => onMicroMarketChange(e.target.value)}
                    className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    {segmentConfig.locations.map((loc) => (
                      <option key={loc} value={loc} className="bg-slate-900 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {segmentConfig.budgetLabel}
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => onBudgetChange(e.target.value)}
                    className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    {segmentConfig.budgets.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Search Action Button */}
              <button
                onClick={onSearchClick}
                className="w-full bg-brand-500 hover:bg-brand-400 text-canvas-950 font-bold text-xs sm:text-sm py-3 rounded-xl transition-all shadow-md shadow-brand-500/20 flex items-center justify-center space-x-2 active:scale-[0.99]"
              >
                <Search className="w-4 h-4 text-canvas-950" />
                <span>Search Active Verified Listings</span>
              </button>
            </div>

          </div>

          {/* Right Spotlight Hero Card (55-60% width on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group bg-canvas-900">
              
              {/* Image & Gradient Overlay */}
              <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden">
                <img
                  src={segmentConfig.spotlightImg}
                  alt={segmentConfig.spotlightTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-950 via-canvas-950/60 to-transparent" />
              </div>

              {/* Badges on top */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-brand-500 text-canvas-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
                  {segmentConfig.spotlightBadge}
                </span>
                <span className="bg-canvas-950/85 backdrop-blur-md text-brand-300 text-[10px] font-bold px-3 py-1 rounded-md border border-brand-500/30 flex items-center space-x-1">
                  <Shield className="w-3 h-3 text-brand-400" />
                  <span>K-RERA Registered</span>
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                  <div>
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest block">
                      {segmentConfig.spotlightPartner}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                      {segmentConfig.spotlightTitle}
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {segmentConfig.spotlightLoc}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono">Guide Pricing</span>
                    <span className="text-lg sm:text-2xl font-extrabold text-brand-400">
                      {segmentConfig.spotlightPrice}
                    </span>
                  </div>
                </div>

                {/* Features & Action Footer */}
                <div className="pt-3 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex flex-wrap items-center gap-3">
                    {segmentConfig.features.map((feat, i) => (
                      <span key={i} className="inline-flex items-center text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mr-1 shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href="#abhee-spotlight"
                      className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.1] hover:border-white/[0.2] transition-colors flex items-center space-x-1"
                    >
                      <span>Track Record</span>
                      <ArrowDown className="w-3 h-3 text-slate-400" />
                    </a>
                    <button
                      onClick={onInspectSpotlight}
                      className="bg-white hover:bg-brand-400 text-canvas-950 px-4 py-1.5 rounded-lg font-extrabold transition-all text-xs shadow"
                    >
                      Inspect Deck
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

