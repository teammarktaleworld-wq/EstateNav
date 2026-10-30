'use client';

import React from 'react';
import { Compass, ShieldCheck, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas-950 text-slate-400 text-xs border-t border-white/[0.08] pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Section: Brand + Navigation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-white/[0.08]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4 text-emerald-200" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Estate<span className="text-brand-400">Nav</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Institutional-grade real estate advisory and direct developer allocations across Bengaluru. Data-backed research, transit-matched discovery, and digitized Kaveri 2.0 title clearances.
            </p>

            <div className="flex items-center space-x-2 text-brand-400 text-xs font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Brokerage Mandate</span>
            </div>
          </div>

          {/* Column 1: Key Corridors */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Bengaluru Corridors
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li className="hover:text-white transition-colors cursor-pointer">Sarjapur - Varthur Link</li>
              <li className="hover:text-white transition-colors cursor-pointer">Whitefield & EPIP Zone</li>
              <li className="hover:text-white transition-colors cursor-pointer">Outer Ring Road (ORR)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hebbal & North BLR</li>
              <li className="hover:text-white transition-colors cursor-pointer">Electronic City Phase 1</li>
            </ul>
          </div>

          {/* Column 2: Partner Developers */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Featured Inventory
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li className="hover:text-white transition-colors cursor-pointer">Abhee Codename New Dimension</li>
              <li className="hover:text-white transition-colors cursor-pointer">Abhee Celestial City</li>
              <li className="hover:text-white transition-colors cursor-pointer">Abhee Aaria (Gunjur)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Abhee Silicon Shine (Phase 2)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Abhee Tranquila Plots</li>
            </ul>
          </div>

          {/* Column 3: Statutory Advisory */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Statutory Resources
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <a
                  href="https://rera.karnataka.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Karnataka RERA Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">Kaveri 2.0 Sub-Registrar Rates</li>
              <li className="hover:text-white transition-colors cursor-pointer">Stamp Duty & Reg. Calculators</li>
              <li className="hover:text-white transition-colors cursor-pointer">BBMP A-Khata Title Verification</li>
            </ul>
          </div>

        </div>

        {/* MIDDLE SECTION: IMMUTABLE REGULATORY COMPLIANCE BOX (Blueprint Slide 13) */}
        <div className="bg-canvas-900 p-5 sm:p-6 rounded-2xl border border-white/[0.08] space-y-3">
          <div className="flex items-center space-x-2 text-brand-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Karnataka RERA Regulatory Registration & Compliance Dossier</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono pt-1">
            <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.05]">
              <span className="block text-[10px] text-slate-400 uppercase">RERA Registered Agent</span>
              <span className="text-white font-bold text-xs mt-0.5 block">SV PRAVEEN</span>
            </div>

            <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.05]">
              <span className="block text-[10px] text-slate-400 uppercase">K-RERA Registration No.</span>
              <span className="text-brand-300 font-bold text-xs mt-0.5 block truncate" title="PRM/KA/RERA/1251/310/AG/260916/007810">
                PRM/KA/RERA/1251/310/AG/260916/007810
              </span>
            </div>

            <div className="bg-canvas-950 p-3 rounded-xl border border-white/[0.05]">
              <span className="block text-[10px] text-slate-400 uppercase">RERA Validity Period</span>
              <span className="text-white font-bold text-xs mt-0.5 block">16-09-2026 to 16-09-2031</span>
            </div>
          </div>

          {/* Mandatory Immutable Legal Disclaimer Statement (Slide 13 Item 4) */}
          <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
            <strong className="text-slate-300">Legal Disclosure Statement:</strong> EstateNav is an independent advisory portal and authorized channel partner platform operated by SV Praveen (RERA No. PRM/KA/RERA/1251/310/AG/260916/007810), not the official developer website. All project brand names, logos, layouts, and renderings belong to their respective developers (including Abhee Ventures Private Limited) and are displayed strictly for information and institutional advisory matching under direct developer terms.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 EstateNav Real Estate Advisory. All rights reserved.</p>
          <p className="text-[11px]">Designed with precision for Bengaluru&apos;s urban technology leaders.</p>
        </div>

      </div>
    </footer>
  );
};

