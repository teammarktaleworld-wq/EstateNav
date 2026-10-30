'use client';

import React from 'react';
import { Shield, Clock, ExternalLink, FileSpreadsheet, MapPin } from 'lucide-react';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
  onInspect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onInspect,
}) => {
  return (
    <article className="prop-card bg-canvas-900 rounded-2xl overflow-hidden border border-white/[0.08] hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-glow-subtle">
      
      {/* Top Image Showcase */}
      <div>
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={property.heroImage}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas-950 via-canvas-950/20 to-transparent" />
          
          {/* Status Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="bg-canvas-950/90 backdrop-blur-md text-brand-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-brand-500/30 flex items-center space-x-1">
              <Shield className="w-3 h-3 text-brand-400" />
              <span>K-RERA AUDITED</span>
            </span>
            <span className="bg-brand-500/90 text-canvas-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
              {property.status}
            </span>
          </div>

          {/* Commute Badge */}
          <div className="absolute bottom-3 right-3 bg-canvas-950/90 backdrop-blur text-slate-200 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md border border-white/[0.08] flex items-center space-x-1">
            <Clock className="w-3 h-3 text-brand-400" />
            <span>{property.commute.driveMinutes} Mins to Campus</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-3">
          
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-brand-400 font-bold uppercase tracking-wider block">
                {property.developer}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {property.metrics.absorptionVelocity}
              </span>
            </div>
            
            <h3 className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-brand-300 transition-colors">
              {property.name}
            </h3>
            
            <p className="text-xs text-slate-400 flex items-center mt-1">
              <MapPin className="w-3 h-3 text-slate-500 mr-1 shrink-0" />
              <span className="truncate">{property.address}</span>
            </p>
          </div>

          {/* Key Spec Grid */}
          <div className="bg-canvas-950/70 p-3 rounded-xl border border-white/[0.05] space-y-2 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Configurations:</span>
              <span className="font-bold text-white text-right">{property.configurations}</span>
            </div>
            {property.carpetArea && (
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400">Carpet Area:</span>
                <span className="font-mono text-slate-200">{property.carpetArea}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Possession:</span>
              <span className="font-medium text-brand-300">{property.possession}</span>
            </div>
          </div>

          {/* Pricing Row */}
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Guide Price</span>
              <span className="text-base sm:text-lg font-extrabold text-brand-400">
                {property.priceDisplay}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Yield Metric</span>
              <span className="text-xs font-bold text-slate-200 font-mono">
                {property.metrics.expectedYield}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 pt-0 space-y-2">
        <button
          onClick={() => onInspect(property)}
          className="w-full bg-slate-800 hover:bg-brand-500 hover:text-canvas-950 text-white text-xs font-extrabold py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm active:scale-[0.99]"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Inspect Allocation Deck</span>
        </button>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
          <span className="font-mono truncate max-w-[170px]" title={property.reraNumber}>
            RERA: {property.reraNumber}
          </span>
          <a
            href={property.reraValidationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300 flex items-center space-x-1"
          >
            <span>Verify</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

    </article>
  );
};

