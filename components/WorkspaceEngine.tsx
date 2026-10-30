'use client';

import React, { useState, useMemo } from 'react';
import { Route, Calculator, ShieldCheck, Check, Sparkles, Filter, SlidersHorizontal, MapPin } from 'lucide-react';
import { Property, MilestoneLens, TechCampus } from '@/lib/types';
import { PropertyCard } from './PropertyCard';

interface WorkspaceEngineProps {
  properties: Property[];
  onInspectProperty: (prop: Property) => void;
  initialMicroMarket?: string;
  initialBudget?: string;
}

export const WorkspaceEngine: React.FC<WorkspaceEngineProps> = ({
  properties,
  onInspectProperty,
  initialMicroMarket = 'All Bengaluru Corridors',
  initialBudget = 'Any Budget',
}) => {
  // 1. Tool Panel Active Tab
  const [activeTab, setActiveTab] = useState<'commute' | 'calc' | 'rera'>('commute');

  // 2. Milestone Filter Lens
  const [activeLens, setActiveLens] = useState<MilestoneLens>('all');

  // 3. Commute Filters
  const [selectedCampus, setSelectedCampus] = useState<TechCampus>('all');
  const [maxDriveTime, setMaxDriveTime] = useState<number>(30);

  // 4. Financial Studio Inputs
  const [propertyValueLakhs, setPropertyValueLakhs] = useState<number>(135); // Default ₹1.35 Cr
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // Milestone Lenses Configuration
  const lenses: { id: MilestoneLens; label: string; count: number }[] = useMemo(() => {
    return [
      { id: 'all', label: 'All Allocations', count: properties.length },
      { id: 'first', label: 'First Home (< ₹1.25 Cr)', count: properties.filter(p => p.lenses.includes('first')).length },
      { id: 'upgrade', label: 'Upgrading (3.5/4.5 BHK)', count: properties.filter(p => p.lenses.includes('upgrade')).length },
      { id: 'nri', label: 'NRI Portfolio', count: properties.filter(p => p.lenses.includes('nri')).length },
      { id: 'senior', label: 'Senior Enclaves', count: properties.filter(p => p.lenses.includes('senior')).length },
    ];
  }, [properties]);

  // Financial Calculations (Exact Kaveri 2.0 & Indian Banking Formulas)
  const financialResults = useMemo(() => {
    const loanLakhs = propertyValueLakhs * (1 - downPaymentPct / 100);
    const loanPrincipal = loanLakhs * 100000;

    let annualRate = 0.0845; // 8.45% base for 20 years
    if (tenureYears === 15) annualRate = 0.084;
    if (tenureYears === 25) annualRate = 0.0855;

    const monthlyRate = annualRate / 12;
    const totalMonths = tenureYears * 12;

    const emi = Math.round(
      (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );

    const stampDutyLakhs = (propertyValueLakhs * 0.056).toFixed(2); // Karnataka 5.6%
    const registrationLakhs = (propertyValueLakhs * 0.01).toFixed(2); // 1.0%
    const taxOffset = '₹2.00 Lakhs / FY'; // Section 24(b) standard ceiling

    return {
      emiDisplay: `₹${emi.toLocaleString('en-IN')} / mo`,
      stampDutyDisplay: `₹${stampDutyLakhs} Lakhs`,
      registrationDisplay: `₹${registrationLakhs} Lakhs`,
      taxOffsetDisplay: taxOffset,
      priceCrDisplay: `₹${(propertyValueLakhs / 100).toFixed(2)} Cr`,
    };
  }, [propertyValueLakhs, downPaymentPct, tenureYears]);

  // Combined Reactive Filtering
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // 1. Lens filter
      if (activeLens !== 'all' && !prop.lenses.includes(activeLens)) {
        return false;
      }

      // 2. Commute filter
      if (selectedCampus !== 'all') {
        if (prop.commute.campus !== selectedCampus && prop.commute.campus !== 'all') {
          return false;
        }
        if (prop.commute.driveMinutes > maxDriveTime) {
          return false;
        }
      }

      // 3. Top Search Console micro-market filter
      if (initialMicroMarket && initialMicroMarket !== 'All Bengaluru Corridors') {
        if (!prop.microMarket.toLowerCase().includes(initialMicroMarket.toLowerCase().split(' ')[0])) {
          return false;
        }
      }

      // 4. Budget filter (if specified from hero)
      if (initialBudget && initialBudget !== 'Any Budget') {
        if (initialBudget.includes('< ₹1.25 Cr') || initialBudget.includes('First Home')) {
          if (prop.startingPrice > 125) return false;
        } else if (initialBudget.includes('₹1.25 Cr – ₹2.0 Cr')) {
          if (prop.startingPrice < 125 || prop.startingPrice > 200) return false;
        } else if (initialBudget.includes('₹2.0 Cr+')) {
          if (prop.startingPrice < 190) return false;
        }
      }

      return true;
    });
  }, [properties, activeLens, selectedCampus, maxDriveTime, initialMicroMarket, initialBudget]);

  return (
    <section id="workspace" className="py-12 sm:py-16 bg-canvas-950 min-h-[700px] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Milestone Presets Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <div className="flex items-center space-x-2 text-brand-400 text-[10px] font-bold uppercase tracking-widest">
              <SlidersHorizontal className="w-3 h-3" />
              <span>Interactive Discovery Canvas</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
              Live Allocations & Real-Time Advisory Tools
            </h2>
          </div>

          {/* Milestone Filter Buttons */}
          <div className="flex bg-canvas-900/90 p-1.5 rounded-2xl border border-white/[0.08] space-x-1 overflow-x-auto no-scrollbar text-xs">
            {lenses.map((lens) => (
              <button
                key={lens.id}
                onClick={() => setActiveLens(lens.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all duration-200 ${
                  activeLens === lens.id
                    ? 'bg-brand-500 text-canvas-950 shadow-md shadow-brand-500/20 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{lens.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeLens === lens.id ? 'bg-canvas-950/30 text-canvas-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {lens.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Split Canvas Layout: 35% Left Tool Panel / 65% Right Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 35% Width Control Panel (Hidden on small mobile screens to keep card-first view clean) */}
          <div className="hidden md:block lg:col-span-5 bg-canvas-900 p-5 sm:p-6 rounded-3xl border border-white/[0.08] space-y-6 shadow-xl sticky top-24">
            
            {/* Tool Selector Tabs */}
            <div className="flex bg-canvas-950 p-1 rounded-2xl border border-white/[0.08] space-x-1 text-xs">
              <button
                onClick={() => setActiveTab('commute')}
                className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  activeTab === 'commute'
                    ? 'bg-brand-500 text-canvas-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Route className="w-3.5 h-3.5" />
                <span>Commute</span>
              </button>

              <button
                onClick={() => setActiveTab('calc')}
                className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  activeTab === 'calc'
                    ? 'bg-brand-500 text-canvas-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Financials</span>
              </button>

              <button
                onClick={() => setActiveTab('rera')}
                className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  activeTab === 'rera'
                    ? 'bg-brand-500 text-canvas-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RERA Audit</span>
              </button>
            </div>

            {/* TAB VIEW 1: COMMUTE RADAR */}
            {activeTab === 'commute' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-extrabold text-white text-sm">Peak-Hour Transit Radar</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Filter live allocations on the right by peak commute radius to your corporate campus.
                  </p>
                </div>

                <div className="space-y-3.5 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Corporate Campus Hub
                    </label>
                    <select
                      value={selectedCampus}
                      onChange={(e) => setSelectedCampus(e.target.value as TechCampus)}
                      className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2.5 px-3 text-white focus:outline-none focus:border-brand-500"
                    >
                      <option value="all">Show All Corridors</option>
                      <option value="wipro">Wipro Corporate HQ (Sarjapur Road)</option>
                      <option value="ecospace">Prestige Tech Park / Ecospace (ORR)</option>
                      <option value="manyata">Manyata Business Park (Hebbal)</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                      <span>Max Drive Time</span>
                      <span className="text-brand-400 font-mono font-bold">&lt; {maxDriveTime} Minutes</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={45}
                      step={5}
                      value={maxDriveTime}
                      onChange={(e) => setMaxDriveTime(Number(e.target.value))}
                      className="w-full accent-brand-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                      <span>5 mins</span>
                      <span>25 mins</span>
                      <span>45 mins</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-canvas-950 rounded-2xl border border-white/[0.08] text-[11px] text-slate-300 flex items-center space-x-2.5">
                    <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Filtering {filteredProperties.length} active allocations on the right in real time.</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB VIEW 2: MULTI-PARAMETER FINANCIAL STUDIO */}
            {activeTab === 'calc' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-extrabold text-white text-sm">Multi-Parameter Financial Studio</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Calibrated against Kaveri 2.0 statutory tax slabs & current HDFC/ICICI prime lending rates.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs">
                  {/* Property Value Slider */}
                  <div>
                    <div className="flex justify-between text-slate-300 font-semibold mb-1">
                      <span>Target Property Value</span>
                      <span className="text-brand-400 font-bold font-mono text-sm">{financialResults.priceCrDisplay}</span>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={350}
                      step={5}
                      value={propertyValueLakhs}
                      onChange={(e) => setPropertyValueLakhs(Number(e.target.value))}
                      className="w-full accent-brand-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-0.5 font-mono">
                      <span>₹60 L</span>
                      <span>₹2.0 Cr</span>
                      <span>₹3.5 Cr</span>
                    </div>
                  </div>

                  {/* Down Payment Toggle */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Down Payment Allocation
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {[10, 20, 30].map((dp) => (
                        <button
                          key={dp}
                          onClick={() => setDownPaymentPct(dp)}
                          className={`py-2 rounded-xl font-bold transition-all text-xs ${
                            downPaymentPct === dp
                              ? 'bg-brand-500 text-canvas-950 font-extrabold shadow'
                              : 'bg-canvas-950 text-slate-300 hover:bg-slate-800 border border-white/[0.06]'
                          }`}
                        >
                          {dp}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Loan Tenure Selector */}
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Loan Tenure & Bank Rate
                    </label>
                    <select
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full bg-canvas-950 border border-slate-700/80 rounded-xl text-xs py-2 px-3 text-white focus:outline-none focus:border-brand-500"
                    >
                      <option value={15}>15 Years (8.40% Prime Rate)</option>
                      <option value={20}>20 Years (8.45% Benchmark Rate)</option>
                      <option value={25}>25 Years (8.55% Extended Rate)</option>
                    </select>
                  </div>

                  {/* Real-Time Calculated Results Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08] text-center">
                      <span className="block text-[9px] text-slate-400 uppercase font-mono">Est. Monthly EMI</span>
                      <span className="text-xs font-extrabold text-white font-mono mt-0.5 block">{financialResults.emiDisplay}</span>
                    </div>

                    <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08] text-center">
                      <span className="block text-[9px] text-slate-400 uppercase font-mono">Stamp Duty (5.6%)</span>
                      <span className="text-xs font-extrabold text-white font-mono mt-0.5 block">{financialResults.stampDutyDisplay}</span>
                    </div>

                    <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08] text-center">
                      <span className="block text-[9px] text-slate-400 uppercase font-mono">Reg. Fee (1.0%)</span>
                      <span className="text-xs font-extrabold text-white font-mono mt-0.5 block">{financialResults.registrationDisplay}</span>
                    </div>

                    <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.08] text-center">
                      <span className="block text-[9px] text-slate-400 uppercase font-mono">Sec 24(b) Tax Offset</span>
                      <span className="text-xs font-extrabold text-brand-400 font-mono mt-0.5 block">{financialResults.taxOffsetDisplay}</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB VIEW 3: RERA TITLE AUDIT */}
            {activeTab === 'rera' && (
              <div className="space-y-4 animate-in fade-in duration-200 text-xs">
                <div>
                  <div className="flex items-center space-x-2 text-brand-400 mb-1">
                    <ShieldCheck className="w-5 h-5 text-brand-400" />
                    <h3 className="font-extrabold text-white text-sm">Kaveri 2.0 Compliance Protocol</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Every inventory parcel on EstateNav undergoes a 12-point title clearance before allocation.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1 text-[11px]">
                  <div className="p-3 bg-canvas-950 rounded-xl border border-white/[0.06] text-slate-300 flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Direct K-RERA Project Registration Screened</span>
                  </div>

                  <div className="p-3 bg-canvas-950 rounded-xl border border-white/[0.06] text-slate-300 flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>A-Khata / BBMP Sanction Clearances</span>
                  </div>

                  <div className="p-3 bg-canvas-950 rounded-xl border border-white/[0.06] text-slate-300 flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Pre-Approved Bank APF Lines (HDFC, ICICI, SBI)</span>
                  </div>

                  <div className="p-3 bg-canvas-950 rounded-xl border border-white/[0.06] text-slate-300 flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Zero-Brokerage Direct Developer Price Lock</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: 65% Width Always-Visible Property Grid */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Grid Header Status Bar */}
            <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-white/[0.08]">
              <span>
                Showing <strong className="text-white font-mono">{filteredProperties.length} Verified Allocations</strong>
              </span>
              <span className="text-[11px] text-slate-400">
                Sorted by Priority Match
              </span>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredProperties.map((prop) => (
                  <PropertyCard
                    key={prop.id}
                    property={prop}
                    onInspect={onInspectProperty}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-canvas-900 rounded-3xl border border-white/[0.08] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base">No Matching Allocations Found</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    Try broadening your commute drive-time slider or clearing the milestone lens to view all active inventory.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveLens('all');
                    setSelectedCampus('all');
                    setMaxDriveTime(45);
                  }}
                  className="bg-brand-500 text-canvas-950 text-xs font-bold px-4 py-2 rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

