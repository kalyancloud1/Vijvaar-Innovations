import React from 'react';
import { COMPANY } from '../../data/company';
import { PageView } from '../../types';
import { CheckCircle2, ShieldCheck, Target, Eye, Sparkles, Building2, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  const coreValues = [
    {
      title: "Innovation",
      desc: "Applying modern, battle-tested software architectures and intelligent automations to solve real operational bottlenecks."
    },
    {
      title: "Reliability",
      desc: "Delivering predictable, stable platforms with documented codebases and SLA-governed business process outsourcing."
    },
    {
      title: "Transparency",
      desc: "Open communication on project milestones, code repositories, clear pricing, and realistic delivery timelines."
    },
    {
      title: "Efficiency",
      desc: "Eliminating redundant keystrokes and bloated software licensing through right-sized, purposeful engineering."
    },
    {
      title: "Customer Success",
      desc: "Measuring our performance by the tangible commercial outcomes, time savings, and growth of our client partners."
    }
  ];

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
            About VijVaar Innovations
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Pragmatic Technology & Dedicated Operations for Sustainable Growth
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Headquartered in Kakinada, Andhra Pradesh, <strong>{COMPANY.legalName}</strong> was established with a singular objective: to empower businesses with intelligent software, custom engineering, and reliable business process operations that drive measurable commercial results.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-900">
              Our Mission
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              To deliver dependable, high-converting digital solutions, modern SaaS tools, and rigorous business process outsourcing that simplify enterprise operations, protect data integrity, and enable clients to scale with confidence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-900">
              Our Vision
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              To be recognized as a premier, trustworthy technology and BPO partner in South India and globally—celebrated for engineering clarity, zero-slop delivery, and steadfast commitment to customer success.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-6">
          <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-stone-900">
              Our Five Guiding Pillars
            </h3>
            <span className="text-xs text-stone-500 font-mono">Foundational Principles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white p-5 rounded-lg border border-stone-200 hover:border-amber-400 transition-colors shadow-2xs space-y-2"
              >
                <div className="text-xs font-mono font-bold text-amber-700">
                  0{idx + 1}.
                </div>
                <h4 className="font-display text-base font-bold text-stone-900">
                  {val.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose VijVaar Innovations */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-2xl p-8 sm:p-12 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Why Partner with VijVaar Innovations
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                No Hype. Just Solid Engineering & Accountable Delivery.
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We believe enterprises deserve partners who listen carefully, document thoroughly, and build practical solutions. Whether building a custom SaaS application from scratch or managing daily back-office transactions, we operate as a dedicated extension of your team.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Technical Lock-in:</strong> Full source code ownership, standard PostgreSQL databases, and clean TypeScript/Python architectures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Strict SLA Discipline:</strong> Guaranteed turnaround times for BPO data verification, helpdesk responses, and application maintenance.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Coastal Andhra Hub Advantage:</strong> Highly capable, loyal talent base in Kakinada offering premium delivery at competitive operational economics.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-950/70 p-6 rounded-xl border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Headquarters & Registration</span>
              </div>
              
              <div className="space-y-1 text-xs text-stone-300">
                <div className="font-semibold text-white">{COMPANY.legalName}</div>
                <div className="flex items-start gap-1.5 text-stone-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{COMPANY.address.full}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2.5 bg-gold-gradient hover:opacity-95 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Schedule a Consultation
                </button>
                <button
                  onClick={() => onNavigate('process')}
                  className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs rounded-lg border border-stone-700 transition-colors"
                >
                  View Our 5-Stage Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
