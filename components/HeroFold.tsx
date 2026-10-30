'use client';

import React from 'react';
import { Search, Shield, ArrowDown, CheckCircle2 } from 'lucide-react';
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
  const segmentConfig = {
    residential: {
      badge: 'Q4 2026 PRIMARY ALLOCATION PAD',
      headline: (
        <>
          Bengaluru Real Estate with{' '}
          <span className="text-white font-black underline decoration-brand-500 decoration-2 underline-offset-8">
            Data-Backed Certainty.
          </span>
        </>
      ),
      description:
        'Institutional research, Kaveri 2.0 title audits, and direct developer pricing across Sarjapur, Whitefield & North Bengaluru corridors.',
      spotlightBadge: 'Partner Flagship Feature',
      spotlightPartner: 'Abhee Ventures Anchor Partner',
      spotlightTitle: 'Abhee Codename New Dimension',
      spotlightLoc: '45-Acre Scotland-Themed Township • Varthur-Sarjapur Link',
      spotlightPrice: '₹1.35 Cr Onwards',
      spotlightImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
      features: ['3-Acre Golf Zone', '4 Signature Clubhouses', 'Mivan Formwork'],
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
      badge: 'INSTITUTIONAL TECH PARK PORTFOLIO',
      headline: (
        <>
          Enterprise Grade{' '}
          <span className="text-white font-black underline decoration-brand-500 decoration-2 underline-offset-8">
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
      spotlightImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
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
      badge: 'INFRASTRUCTURE CORRIDORS & LAND RESERVES',
      headline: (
        <>
          Gated Plotted Reserves in{' '}
          <span className="text-white font-black underline decoration-brand-500 decoration-2 underline-offset-8">
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
      spotlightImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
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
    <section className="relative bg-[#030712] border-b border-white/[0.08] py-6 sm:py-12 lg:py-16 overflow-hidden bg-tech-grid">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Console */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Technical Sub-Header Badge */}
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono font-medium text-brand-300 bg-brand-500/[0.08] px-2.5 sm:px-3 py-1 rounded-[4px] border border-brand-500/25 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>{segmentConfig.badge}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
              {segmentConfig.headline}
            </h1>

            {/* Subtext description (hidden on small mobile to immediately focus on search & properties) */}
            <p className="hidden sm:block text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {segmentConfig.description}
            </p>

            {/* Architectural Search Console */}
            <div className="bg-[#080d16] p-4 sm:p-6 rounded-[8px] border border-white/[0.1] shadow-2xl space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Micro-market selector */}
                <div>
                  <label className="block text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {segmentConfig.locationLabel}
                  </label>
                  <select
                    value={selectedMicroMarket}
                    onChange={(e) => onMicroMarketChange(e.target.value)}
                    className="field-input py-2 px-3 text-xs font-medium"
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
                  <label className="block text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {segmentConfig.budgetLabel}
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => onBudgetChange(e.target.value)}
                    className="field-input py-2 px-3 text-xs font-medium"
                  >
                    {segmentConfig.budgets.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Search CTA */}
              <button
                onClick={onSearchClick}
                className="btn-primary w-full py-3 space-x-2 text-xs sm:text-sm uppercase tracking-wider font-extrabold flex items-center justify-center"
              >
                <Search className="w-4 h-4 text-canvas-950 stroke-[2.5]" />
                <span>Search Verified Properties Below</span>
              </button>
            </div>

          </div>

          {/* Right Spotlight Hero Card - Desktop Only (Hidden on mobile to let users see the property listing immediately!) */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="relative rounded-[8px] overflow-hidden border border-white/[0.12] shadow-2xl group bg-[#070b13]">
              
              {/* Image & Gradient Overlay */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <img
                  src={segmentConfig.spotlightImg}
                  alt={segmentConfig.spotlightTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
              </div>

              {/* Badges on top */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-brand-500 text-canvas-950 text-[10px] font-mono font-extrabold px-3 py-1 rounded-[4px] uppercase tracking-wider shadow">
                  {segmentConfig.spotlightBadge}
                </span>
                <span className="bg-black/75 backdrop-blur-md text-slate-200 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-[4px] border border-white/[0.12] flex items-center space-x-1">
                  <Shield className="w-3 h-3 text-brand-400" />
                  <span>K-RERA Registered</span>
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-7 right-7 space-y-3.5">
                <div className="flex justify-between items-end gap-2.5">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-brand-400 uppercase tracking-widest block">
                      {segmentConfig.spotlightPartner}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight mt-0.5">
                      {segmentConfig.spotlightTitle}
                    </h2>
                    <p className="text-sm text-slate-300 mt-1">
                      {segmentConfig.spotlightLoc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono">Guide Pricing</span>
                    <span className="text-2xl font-black text-brand-400 font-mono">
                      {segmentConfig.spotlightPrice}
                    </span>
                  </div>
                </div>

                {/* Features & Action Footer */}
                <div className="pt-3.5 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                  <div className="flex flex-wrap items-center gap-4">
                    {segmentConfig.features.map((feat, i) => (
                      <span key={i} className="inline-flex items-center text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 mr-1.5 shrink-0 stroke-[2.2]" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <a
                      href="#abhee-spotlight"
                      className="btn-secondary px-3.5 py-2 text-xs space-x-1.5"
                    >
                      <span>Track Record</span>
                      <ArrowDown className="w-3 h-3 text-slate-400" />
                    </a>
                    <button
                      onClick={onInspectSpotlight}
                      className="btn-primary px-4 py-2 text-xs font-bold"
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
