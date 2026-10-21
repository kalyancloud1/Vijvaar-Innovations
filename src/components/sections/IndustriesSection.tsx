import React, { useState } from 'react';
import { INDUSTRIES, IndustryItem } from '../../data/industries';
import { Building2, AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

interface IndustriesSectionProps {
  onOpenEnquiry: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenEnquiry
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry = INDUSTRIES.find(i => i.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Sectors & Domain Solutions</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Purpose-Built Solutions for Core Enterprise Sectors
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Every vertical possesses distinct compliance constraints and transaction velocities. We combine our SaaS platforms, custom software development, and BPO execution to solve industry-specific operational challenges.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry(activeIndustry.name)}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Consult for Your Industry
          </button>
        </div>

        {/* Industry Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INDUSTRIES.map(ind => {
            const isSelected = selectedIndustryId === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-sm ring-1 ring-amber-500/30'
                    : 'bg-white/60 hover:bg-white border-stone-200 text-stone-700'
                }`}
              >
                <div className={`font-display text-sm font-bold ${isSelected ? 'text-amber-800' : 'text-stone-900'}`}>
                  {ind.name}
                </div>
                <div className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                  {ind.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Solution Canvas */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-xs space-y-8">
          {/* Header */}
          <div className="space-y-2 border-b border-stone-100 pb-6">
            <div className="text-xs font-mono text-amber-700 uppercase tracking-wider font-semibold">
              Vertical Focus
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              {activeIndustry.name}
            </h3>
            <p className="text-stone-600 text-base leading-relaxed">
              {activeIndustry.tagline}
            </p>
          </div>

          {/* Challenges vs Delivered Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Operational Challenges */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Sector Operational Friction</span>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {activeIndustry.challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivered Solutions */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>How VijVaar Solutions Address This</span>
              </div>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {activeIndustry.solutionsDelivered.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech & BPO Synergy */}
          <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-200/80 space-y-2 text-xs">
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-amber-700" />
              <span>Technology & Human BPO Synergy</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              {activeIndustry.techAndBpoSynergy}
            </p>
          </div>

          {/* Regulatory Boundary Notice (Mandatory from prompt) */}
          <div className="bg-stone-100 p-4 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800">Regulatory Scope Notice: </strong>
              <span>{activeIndustry.regulatoryScopeNotice}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100">
            <div className="text-xs text-stone-500">
              Operating in {activeIndustry.name}? Let's configure a solution blueprint.
            </div>

            <button
              onClick={() => onOpenEnquiry(`${activeIndustry.name} Solution`)}
              className="px-6 py-2.5 bg-gold-gradient text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:opacity-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Request Solution Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
