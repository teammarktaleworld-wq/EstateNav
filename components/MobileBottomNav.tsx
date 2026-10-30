'use client';

import React, { useState } from 'react';
import { Home, Route, Calculator, MessageSquare, X, ShieldCheck, MapPin, Check } from 'lucide-react';
import { TechCampus } from '@/lib/types';

interface MobileBottomNavProps {
  onOpenVipModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenVipModal,
}) => {
  const [activeDrawer, setActiveDrawer] = useState<'commute' | 'calc' | null>(null);

  // Commute state
  const [campus, setCampus] = useState<TechCampus>('all');
  const [driveTime, setDriveTime] = useState<number>(25);

  // Calc state
  const [propValLakhs, setPropValLakhs] = useState<number>(135);
  const [dpPct, setDpPct] = useState<number>(20);
  const [tenure, setTenure] = useState<number>(20);

  // Quick calculations for mobile drawer
  const loanPrincipal = propValLakhs * (1 - dpPct / 100) * 100000;
  const rate = tenure === 15 ? 0.084 : tenure === 25 ? 0.0855 : 0.0845;
  const monthlyRate = rate / 12;
  const totalMonths = tenure * 12;
  const emi = Math.round(
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const duty = (propValLakhs * 0.056).toFixed(2);
  const reg = (propValLakhs * 0.01).toFixed(2);

  const scrollToWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* NATIVE MOBILE FIXED BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-canvas-950/95 backdrop-blur-xl border-t border-white/[0.08] px-3 py-2 flex justify-around items-center text-[10px] text-slate-400">
        
        <button
          onClick={scrollToWorkspace}
          className="flex flex-col items-center justify-center space-y-1 text-brand-400 font-bold p-1 min-w-[56px] min-h-[48px]"
        >
          <Home className="w-5 h-5 text-brand-400" />
          <span>Explore</span>
        </button>

        <button
          onClick={() => setActiveDrawer('commute')}
          className="flex flex-col items-center justify-center space-y-1 hover:text-white p-1 min-w-[56px] min-h-[48px]"
        >
          <Route className="w-5 h-5 text-slate-300" />
          <span>Commute</span>
        </button>

        <button
          onClick={() => setActiveDrawer('calc')}
          className="flex flex-col items-center justify-center space-y-1 hover:text-white p-1 min-w-[56px] min-h-[48px]"
        >
          <Calculator className="w-5 h-5 text-slate-300" />
          <span>Calculator</span>
        </button>

        <button
          onClick={() => {
            window.open('https://wa.me/919880000000?text=Hi%20EstateNav%2C%20I%20would%20like%20to%20connect%20with%20an%20Abhee%20Ventures%20advisor.', '_blank');
          }}
          className="flex flex-col items-center justify-center space-y-1 text-emerald-400 font-semibold p-1 min-w-[56px] min-h-[48px]"
        >
          <MessageSquare className="w-5 h-5 text-emerald-400" />
          <span>Concierge</span>
        </button>

      </nav>

      {/* SLIDE-UP BOTTOM SHEET DRAWER MODAL */}
      {activeDrawer && (
        <div 
          className="fixed inset-0 z-50 md:hidden bg-canvas-950/80 backdrop-blur-sm flex items-end animate-in fade-in duration-200"
          onClick={() => setActiveDrawer(null)}
        >
          <div 
            className="w-full bg-canvas-900 border-t border-white/[0.12] rounded-t-3xl p-5 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Drawer Handle */}
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto" />

            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/[0.08] pb-3">
              <h3 className="font-extrabold text-white text-base">
                {activeDrawer === 'commute' ? 'Peak-Hour Commute Radar' : 'Financial & Statutory Studio'}
              </h3>
              <button
                onClick={() => setActiveDrawer(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* COMMUTE BODY */}
            {activeDrawer === 'commute' && (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Corporate Campus Hub
                  </label>
                  <select
                    value={campus}
                    onChange={(e) => setCampus(e.target.value as TechCampus)}
                    className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl py-3 px-3.5 text-white"
                  >
                    <option value="all">Show All Corridors</option>
                    <option value="wipro">Wipro Corporate HQ (Sarjapur Road)</option>
                    <option value="ecospace">Prestige Tech Park / Ecospace (ORR)</option>
                    <option value="manyata">Manyata Business Park (Hebbal)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1.5">
                    <span>Max Drive Time</span>
                    <span className="text-brand-400 font-bold">&lt; {driveTime} Minutes</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={45}
                    step={5}
                    value={driveTime}
                    onChange={(e) => setDriveTime(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 rounded-lg h-2"
                  />
                </div>

                <button
                  onClick={() => {
                    setActiveDrawer(null);
                    scrollToWorkspace();
                  }}
                  className="w-full bg-brand-500 text-canvas-950 font-extrabold py-3.5 rounded-xl text-xs shadow-md mt-2"
                >
                  Apply Filter & View Allocations
                </button>
              </div>
            )}

            {/* CALCULATOR BODY */}
            {activeDrawer === 'calc' && (
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Property Target Value</span>
                    <span className="text-brand-400 font-bold font-mono text-sm">₹{(propValLakhs / 100).toFixed(2)} Cr</span>
                  </div>
                  <input
                    type="range"
                    min={60}
                    max={350}
                    step={5}
                    value={propValLakhs}
                    onChange={(e) => setPropValLakhs(Number(e.target.value))}
                    className="w-full accent-brand-500 bg-slate-800 rounded-lg h-2"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Down Payment</label>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[10, 20, 30].map((p) => (
                      <button
                        key={p}
                        onClick={() => setDpPct(p)}
                        className={`py-2 rounded-xl font-bold text-xs ${
                          dpPct === p ? 'bg-brand-500 text-canvas-950 font-extrabold' : 'bg-canvas-950 text-slate-300'
                        }`}
                      >
                        {p}%
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center pt-2">
                  <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08]">
                    <span className="block text-[9px] text-slate-400 uppercase font-mono">Est. Monthly EMI</span>
                    <span className="text-xs font-extrabold text-white font-mono mt-0.5 block">
                      ₹{emi.toLocaleString('en-IN')}/mo
                    </span>
                  </div>
                  <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08]">
                    <span className="block text-[9px] text-slate-400 uppercase font-mono">Stamp Duty (5.6%)</span>
                    <span className="text-xs font-extrabold text-white font-mono mt-0.5 block">
                      ₹{duty} Lakhs
                    </span>
                  </div>
                  <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08]">
                    <span className="block text-[9px] text-slate-400 uppercase font-mono">Registration (1%)</span>
                    <span className="text-xs font-extrabold text-white font-mono mt-0.5 block">
                      ₹{reg} Lakhs
                    </span>
                  </div>
                  <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08]">
                    <span className="block text-[9px] text-slate-400 uppercase font-mono">Tax Offset</span>
                    <span className="text-xs font-extrabold text-brand-400 font-mono mt-0.5 block">
                      ₹2.0L / yr
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveDrawer(null)}
                  className="w-full bg-brand-500 text-canvas-950 font-extrabold py-3.5 rounded-xl text-xs shadow-md mt-2"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

