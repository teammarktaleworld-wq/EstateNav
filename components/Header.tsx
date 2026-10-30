'use client';

import React from 'react';
import { Compass, ShieldCheck, Calendar, Building2, Home, MapPin, Sparkles } from 'lucide-react';
import { Segment } from '@/lib/types';

interface HeaderProps {
  currentSegment: Segment;
  onSegmentChange: (segment: Segment) => void;
  onOpenVipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSegment,
  onSegmentChange,
  onOpenVipModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-canvas-950/90 backdrop-blur-md border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Mark */}
        <div 
          onClick={() => onSegmentChange('residential')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Estate<span className="text-brand-400">Nav</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                2.0
              </span>
            </div>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
              Bengaluru Advisory Engine
            </span>
          </div>
        </div>

        {/* Global Segment Switcher (Desktop) */}
        <nav className="hidden md:flex bg-canvas-900/90 p-1.5 rounded-full border border-white/[0.08] shadow-inner">
          <button
            onClick={() => onSegmentChange('residential')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
              currentSegment === 'residential'
                ? 'bg-brand-500 text-canvas-950 shadow-md shadow-brand-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Residential</span>
          </button>

          <button
            onClick={() => onSegmentChange('commercial')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
              currentSegment === 'commercial'
                ? 'bg-brand-500 text-canvas-950 shadow-md shadow-brand-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial & Offices</span>
          </button>

          <button
            onClick={() => onSegmentChange('plotted')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
              currentSegment === 'plotted'
                ? 'bg-brand-500 text-canvas-950 shadow-md shadow-brand-500/20 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Plotted Reserves</span>
          </button>
        </nav>

        {/* Header Utility CTAs */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden lg:inline-flex items-center text-xs font-semibold text-brand-300 bg-brand-950/70 px-3.5 py-1.5 rounded-lg border border-brand-800/60 shadow-sm">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-brand-400" />
            <span>Kaveri 2.0 Audited</span>
          </div>

          <button
            onClick={onOpenVipModal}
            className="relative group overflow-hidden bg-brand-500 hover:bg-brand-400 text-canvas-950 text-xs font-extrabold px-4 sm:px-5 py-2.5 rounded-lg transition-all shadow-md shadow-brand-500/20 flex items-center space-x-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-canvas-950" />
            <span>Book VIP Site Tour</span>
          </button>
        </div>

      </div>
    </header>
  );
};

