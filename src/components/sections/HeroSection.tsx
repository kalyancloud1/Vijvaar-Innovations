import React from 'react';
import { PageView } from '../../types';
import { COMPANY } from '../../data/company';
import { ArrowRight, Phone, ShieldCheck, Cpu, Database, Users } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (view: PageView) => void;
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white border-b border-stone-800">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-dark-mesh opacity-90 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
        {/* Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker - Clean unboxed text */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400 font-medium">
              <span className="text-amber-400 font-semibold uppercase tracking-wider">
                {COMPANY.legalName}
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Kakinada, Andhra Pradesh</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-300 font-mono">OPC Private Limited</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] text-balance">
              Intelligent Technology.{' '}
              <span className="text-gold-gradient">Smarter Business.</span>{' '}
              Better Growth.
            </h1>

            {/* Supporting Text */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              VijVaar Innovations delivers modern SaaS solutions, custom software development, intelligent automation, and reliable BPO services to help businesses streamline operations, improve productivity, and grow confidently.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-gold-gradient hover:opacity-95 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/10 transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-[0.98]"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-stone-900" />
              </button>

              <button
                onClick={() => onNavigate('saas')}
                className="px-5 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white font-medium text-xs rounded-lg border border-stone-700/80 transition-all cursor-pointer whitespace-nowrap"
              >
                Explore SaaS & Services
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-3.5 text-stone-400 hover:text-amber-400 text-xs font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Contact Our Team</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise SLA & Governance</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modern Cloud Architectures</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Dedicated Operations Cell</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800/80 shadow-2xl bg-stone-900 group">
              <img
                src="/src/assets/images/hero_tech_enterprise_1792602340875.jpg"
                alt="VijVaar Innovations modern enterprise technology and cloud innovation headquarters"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none" />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-xs text-stone-300 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-amber-400 text-[11px] uppercase tracking-wider font-semibold">
                    VijVaar Innovations OPC Pvt Ltd
                  </span>
                  <span className="text-stone-400 text-[10px]">CIN Registered</span>
                </div>
                <p className="text-stone-300 text-xs">
                  {COMPANY.brandStatement} — Delivering trusted IT and BPO services from coastal Andhra Pradesh to global enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric / Strategic Capability Strip */}
        <div className="mt-16 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1 border-l border-amber-500/30 pl-4">
            <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              SaaS Platforms
            </div>
            <div className="text-xs text-stone-400 leading-relaxed">
              Multi-tenant CRM, BPM, task automation, and business intelligence suites.
            </div>
          </div>

          <div className="space-y-1 border-l border-amber-500/30 pl-4">
            <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Custom Engineering
            </div>
            <div className="text-xs text-stone-400 leading-relaxed">
              Full-stack web applications, APIs, cloud migrations, and security compliance.
            </div>
          </div>

          <div className="space-y-1 border-l border-emerald-500/40 pl-4">
            <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              BPO Operations
            </div>
            <div className="text-xs text-stone-400 leading-relaxed">
              High-accuracy back-office, data entry, document indexing, and customer care.
            </div>
          </div>

          <div className="space-y-1 border-l border-rose-500/40 pl-4">
            <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Kakinada HQ
            </div>
            <div className="text-xs text-stone-400 leading-relaxed">
              Serving startups, SMEs, and enterprises with transparent milestone pricing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
