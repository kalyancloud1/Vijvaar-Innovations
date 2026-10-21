import React from 'react';
import { PROCESS_STEPS, COLLABORATION_PILLARS } from '../../data/process';
import { ArrowRight, CheckCircle2, MessageSquare, Compass, FileCode, CheckCheck, Rocket } from 'lucide-react';

interface ProcessSectionProps {
  onOpenEnquiry: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenEnquiry
}) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01': return <Compass className="w-5 h-5 text-amber-600" />;
      case '02': return <FileCode className="w-5 h-5 text-amber-600" />;
      case '03': return <Rocket className="w-5 h-5 text-emerald-600" />;
      case '04': return <CheckCheck className="w-5 h-5 text-blue-600" />;
      case '05': return <CheckCircle2 className="w-5 h-5 text-amber-600" />;
      default: return <Compass className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
            Predictable Execution Methodology
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Our 5-Stage Delivery Process: From Requirements to Scaled Impact
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We follow a structured, transparent software and operations lifecycle. No black-box development, no hidden fees, and zero unverified progress claims.
          </p>
        </div>

        {/* 5-Stage Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-black text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center">
                    {getStepIcon(step.stepNumber)}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-stone-900">
                  {step.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.summary}
                </p>

                {/* Scope details */}
                <ul className="space-y-1.5 text-[11px] text-stone-600 pt-2 border-t border-stone-200/60">
                  {step.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible Deliverable Box */}
              <div className="pt-3 border-t border-stone-200 text-[11px] space-y-1">
                <div className="font-mono text-stone-400 uppercase text-[10px]">Tangible Output</div>
                <div className="font-semibold text-stone-800">{step.keyDeliverable}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Collaboration & Communication Pillars */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-2xl p-8 sm:p-12 border border-stone-800 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
              Project Communication Protocol
            </span>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Collaborative, Accountable & Always Accessible
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              We eliminate the communication barrier that plagues many outsourcing and development arrangements. Every client is assigned a dedicated project coordinator with scheduled weekly reviews and direct communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COLLABORATION_PILLARS.map(pillar => (
              <div key={pillar.title} className="bg-stone-950/80 p-5 rounded-xl border border-stone-800 space-y-2">
                <h4 className="font-display text-base font-bold text-amber-400">
                  {pillar.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Ready to begin Stage 01 (Discover) for your enterprise?
            </div>
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 bg-gold-gradient text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:opacity-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-4 h-4 text-stone-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
