import React, { useState } from 'react';
import { BPO_SERVICES, BpoServiceItem } from '../../data/bpoServices';
import { Headphones, CheckCircle2, ShieldCheck, FileSpreadsheet, ArrowRight, Clock, Award } from 'lucide-react';

interface BpoSectionProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const BpoSection: React.FC<BpoSectionProps> = ({
  onOpenEnquiry
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(BPO_SERVICES[0].id);

  const activeService = BPO_SERVICES.find(s => s.id === selectedServiceId) || BPO_SERVICES[0];

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold flex items-center gap-2">
              <Headphones className="w-3.5 h-3.5 text-emerald-700" />
              <span>Business Process Outsourcing & Operations Hub</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              High-Precision Back-Office, Data Integrity & Customer Operations
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Scale your operational throughput without adding fixed managerial overhead. Our Kakinada delivery center combines trained, accountable talent with documented SOPs and automated validation scripts.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('BPO Outsourcing Proposal')}
            className="px-5 py-2.5 bg-gold-gradient text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Request BPO Proposal
          </button>
        </div>

        {/* BPO Delivery Operations Center Visual Spotlight */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                SOP-Driven Offshore Delivery Excellence
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Accuracy, Confidentiality & Scalable Turnaround
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                Whether processing 50,000 document scans, validating enterprise CRM registries, or handling customer support queues across email and chat, we deploy dedicated operational cells governed by strict Non-Disclosure Agreements (NDAs) and quality metrics.
              </p>
              
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-stone-800 text-xs">
                <div>
                  <div className="font-bold text-emerald-400 font-mono">99.8% Target</div>
                  <div className="text-[11px] text-stone-400">Data entry verification accuracy</div>
                </div>
                <div>
                  <div className="font-bold text-emerald-400 font-mono">24-48 hr SLA</div>
                  <div className="text-[11px] text-stone-400">Standard batch turnaround time</div>
                </div>
                <div>
                  <div className="font-bold text-emerald-400 font-mono">Strict NDA</div>
                  <div className="text-[11px] text-stone-400">Isolated data handling protocols</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px]">
              <img
                src="/src/assets/images/bpo_business_operations_1792602342127.jpg"
                alt="VijVaar Innovations modern BPO operations center and customer support floor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* BPO Master Interactive Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: All 10 BPO Offerings */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
              BPO Service Disciplines ({BPO_SERVICES.length})
            </div>

            {BPO_SERVICES.map((srv, index) => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-emerald-50/70 border-emerald-500 text-stone-900 shadow-2xs'
                      : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-stone-400">
                      0{index + 1}.
                    </span>
                    <div>
                      <div className="font-display text-sm font-bold">{srv.title}</div>
                      <div className="text-[11px] text-stone-500">{srv.category}</div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-emerald-700 translate-x-1' : 'text-stone-300'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: In-Depth Service Breakdown & Workflow */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 sticky top-24">
              {/* Header */}
              <div className="space-y-2 border-b border-stone-200 pb-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-emerald-800 font-semibold uppercase tracking-wider">
                    {activeService.category}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700">
                    SOP Documented
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  {activeService.title}
                </h3>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeService.summary}
                </p>
              </div>

              {/* 4-Step Standard Operating Procedure (Workflow) */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Standard Execution Workflow</span>
                </div>

                <div className="space-y-2">
                  {activeService.workflowSteps.map((step, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-stone-200/80 flex items-start gap-3 text-xs text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Benefits */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Expected Operational Benefits</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {activeService.operationalBenefits.map((ben, bIdx) => (
                    <div key={bIdx} className="bg-white p-3 rounded-lg border border-stone-200/80 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Assurance Safeguard */}
              <div className="bg-emerald-950 text-emerald-100 p-4 rounded-xl text-xs space-y-1 border border-emerald-900">
                <div className="font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Assurance & Error Prevention Metric</span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  {activeService.qualityAssurance}
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200">
                <div className="text-xs text-stone-500">
                  Need a dedicated proposal for your volume?
                </div>

                <button
                  onClick={() => onOpenEnquiry(activeService.title)}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Request Proposal for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
