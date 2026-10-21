import React from 'react';
import { IT_SERVICES } from '../../data/itServices';
import { Check, ArrowRight, ShieldCheck, Terminal, Cpu, Cloud, RefreshCw, Lock } from 'lucide-react';

interface ItServicesSectionProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const ItServicesSection: React.FC<ItServicesSectionProps> = ({
  onOpenEnquiry
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'it-consulting': return <Terminal className="w-5 h-5 text-amber-600" />;
      case 'custom-software': return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'cloud-services': return <Cloud className="w-5 h-5 text-blue-600" />;
      case 'automation-solutions': return <RefreshCw className="w-5 h-5 text-emerald-600" />;
      case 'cybersecurity-compliance': return <Lock className="w-5 h-5 text-rose-600" />;
      case 'digital-transformation': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default: return <Terminal className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              IT Engineering & Technology Advisory
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Enterprise IT Services Engineered for Performance and Scalability
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              From strategic technology audits to full-stack cloud applications and workflow automation, VijVaar Innovations engineers mission-critical solutions tailored to your operational realities.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('IT Architecture & Strategy')}
            className="px-5 py-2.5 bg-gold-gradient text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Request IT Strategy Audit
          </button>
        </div>

        {/* High-Tech Infrastructure Spotlight Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                High-Reliability Engineering Standards
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Secure, Modular Full-Stack Systems with Zero Technical Lock-in
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                Our engineering team emphasizes modern TypeScript, Python/Django, and PostgreSQL architectures backed by containerized cloud pipelines. We build systems you fully own, with comprehensive API documentation and clean repository handoffs.
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-300">
                <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">TypeScript / React 19</span>
                <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">Python / Django REST</span>
                <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">PostgreSQL + RLS</span>
                <span className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700">Docker & Kubernetes</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px]">
              <img
                src="/src/assets/images/it_cloud_consulting_1792602341170.jpg"
                alt="VijVaar Innovations cloud infrastructure and enterprise systems engineers"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 6 Core IT Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IT_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-sm transition-all duration-200 group space-y-6"
            >
              <div className="space-y-4">
                {/* Header with Icon and Editorial Numbering */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center border border-stone-200/80 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-400">
                    0{index + 1}.
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-amber-700 font-semibold uppercase tracking-wider">
                    {service.kicker}
                  </div>
                  <h3 className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-500 italic">
                    "{service.tagline}"
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {service.overview}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="text-[11px] font-bold text-stone-800 uppercase font-mono">
                    Key Scope Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <div className="text-[10px] font-mono text-stone-400 uppercase">Core Technologies</div>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {service.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Value Highlight */}
                <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-700 border border-stone-200/60">
                  <strong className="text-stone-900">Commercial Impact: </strong>
                  {service.businessValue}
                </div>
              </div>

              {/* Consultation CTA for this Service */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 font-medium">
                  {service.engagementModels[0]}
                </span>
                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
