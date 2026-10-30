'use client';

import React from 'react';
import { Compass, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040810] text-slate-400 text-xs border-t border-white/[0.08] pt-12 pb-24 md:pb-12">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">

        {/* Top: Brand + nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[6px] bg-brand-600 border border-brand-400/20 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <Compass className="w-4 h-4 text-brand-200" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Estate<span className="text-brand-400">Nav</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Institutional-grade real estate advisory and direct developer allocations across Bengaluru.
              Data-backed research, transit-matched discovery, and digitized Kaveri 2.0 title clearances.
            </p>

            <div className="flex items-center gap-2 text-brand-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero-Brokerage Mandate</span>
            </div>
          </div>

          {/* Column: Corridors */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-[11px] uppercase tracking-wider">
              Bengaluru Corridors
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              {[
                'Sarjapur - Varthur Link',
                'Whitefield & EPIP Zone',
                'Outer Ring Road (ORR)',
                'Hebbal & North BLR',
                'Electronic City Phase 1',
              ].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column: Featured inventory */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-[11px] uppercase tracking-wider">
              Featured Inventory
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              {[
                'Abhee Codename New Dimension',
                'Abhee Celestial City',
                'Abhee Aaria (Gunjur)',
                'Abhee Silicon Shine (Phase 2)',
                'Abhee Tranquila Plots',
              ].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column: Statutory */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-[11px] uppercase tracking-wider">
              Statutory Resources
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a
                  href="https://rera.karnataka.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Karnataka RERA Portal
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              {[
                'Kaveri 2.0 Sub-Registrar Rates',
                'Stamp Duty & Reg. Calculators',
                'BBMP A-Khata Title Verification',
              ].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* RERA Compliance Box — IMMUTABLE */}
        <div className="bg-[#060b13] border border-white/[0.08] rounded-[6px] p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-brand-400 font-mono font-bold text-[11px] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Karnataka RERA Regulatory Registration &amp; Compliance Dossier
          </div>

          {/* RERA stat cells */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            {[
              { label: 'RERA Registered Agent',  value: 'SV PRAVEEN',                              accent: false },
              { label: 'K-RERA Registration No.',value: 'PRM/KA/RERA/1251/310/AG/260916/007810',   accent: true  },
              { label: 'RERA Validity Period',   value: '16-09-2026 to 16-09-2031',                accent: false },
            ].map(({ label, value, accent }) => (
              <div key={label} className="bg-[#040810] rounded-[4px] border border-white/[0.06] p-3">
                <span className="block text-[10px] text-slate-500 uppercase tracking-wide">{label}</span>
                <span
                  className={`font-bold text-xs mt-0.5 block truncate ${accent ? 'text-brand-300' : 'text-white'}`}
                  title={value}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Mandatory legal disclosure — verbatim */}
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Legal Disclosure Statement: </strong>
            EstateNav is an independent advisory portal and authorized channel partner platform operated by
            SV Praveen (RERA No. PRM/KA/RERA/1251/310/AG/260916/007810), not the official developer website.
            All project brand names, logos, layouts, and renderings belong to their respective developers
            (including Abhee Ventures Private Limited) and are displayed strictly for information and
            institutional advisory matching under direct developer terms.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-500">
          <p>© 2026 EstateNav Real Estate Advisory. All rights reserved.</p>
          <p>Designed with precision for Bengaluru&apos;s urban technology leaders.</p>
        </div>

      </div>
    </footer>
  );
};
