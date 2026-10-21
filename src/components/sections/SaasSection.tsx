import React, { useState } from 'react';
import { SAAS_SOLUTIONS, SaasProduct } from '../../data/saasSolutions';
import { Sparkles, Check, ArrowRight, Layers, Users, Zap, Building } from 'lucide-react';

interface SaasSectionProps {
  onOpenDemoModal: (product: SaasProduct) => void;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const SaasSection: React.FC<SaasSectionProps> = ({
  onOpenDemoModal,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProductId, setActiveProductId] = useState<string>(SAAS_SOLUTIONS[0].id);

  const categories = ['All', 'Customer & Growth', 'Operations & Governance', 'Productivity', 'Intelligence'];

  const filteredProducts = SAAS_SOLUTIONS.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  const activeProduct = SAAS_SOLUTIONS.find(p => p.id === activeProductId) || SAAS_SOLUTIONS[0];

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>SaaS Platforms & Modular Applications</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Configurable Software Products Engineered for Scalable Operations
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Eliminate heavy upfront licensing fees and rigid enterprise software. VijVaar Innovations delivers subscription-ready, multi-tenant business software designed with modular APIs and strict data privacy.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry('Custom SaaS Architecture')}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
            >
              Discuss Custom SaaS Build
            </button>
          </div>
        </div>

        {/* Feature Visual Spotlight */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-8 sm:p-12 text-white space-y-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Next-Generation SaaS Architecture</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Unified Operations, Isolated Multi-Tenancy & Actionable Intelligence
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Every software suite engineered at VijVaar Innovations is built upon our resilient micro-SaaS framework: featuring isolated tenant schemas, row-level PostgreSQL security, configurable role-based permission matrices, and bidirectional webhooks.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-xs text-stone-300 pt-2 border-t border-stone-800">
                <div>
                  <div className="font-mono text-amber-400 font-bold">Multi-Tenant Ready</div>
                  <div className="text-[11px] text-stone-400 mt-0.5">Isolated schemas and row-level security.</div>
                </div>
                <div>
                  <div className="font-mono text-amber-400 font-bold">API & Webhooks First</div>
                  <div className="text-[11px] text-stone-400 mt-0.5">Connect easily to Tally, Zoho, and ERPs.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px]">
              <img
                src="/src/assets/images/saas_platform_showcase_1792602341371.jpg"
                alt="VijVaar Innovations modern SaaS operations and CRM workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Tabs (Functional Buttons) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-lg max-w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SaaS Products Grid & Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Product Selection Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
              Select Product Category ({filteredProducts.length})
            </div>

            {filteredProducts.map(product => {
              const isSelected = activeProductId === product.id;
              return (
                <div
                  key={product.id}
                  onClick={() => setActiveProductId(product.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/60 border-amber-400 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-sm font-bold text-stone-900">
                      {product.name}
                    </h4>
                    <span className="text-[10px] font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {product.deploymentStatus}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    {product.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-stone-200/60 text-[11px] text-stone-500">
                    <span>{product.category}</span>
                    <span className="text-amber-700 font-medium inline-flex items-center gap-1">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Product Specification Canvas */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 sticky top-24">
              {/* Product Title Header */}
              <div className="space-y-2 border-b border-stone-200 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider">
                    {activeProduct.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-200 text-stone-800">
                    Status: {activeProduct.deploymentStatus}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  {activeProduct.name}
                </h3>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Key Functional Capabilities</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {activeProduct.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-stone-200/80">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Benefits & Target Customers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Business Benefits</span>
                  </div>
                  <ul className="space-y-1.5 text-stone-600">
                    {activeProduct.businessBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>Intended Customers</span>
                  </div>
                  <ul className="space-y-1.5 text-stone-600">
                    {activeProduct.intendedCustomers.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture Blueprint Note */}
              <div className="bg-stone-900 text-stone-300 p-4 rounded-xl text-xs space-y-2">
                <div className="font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>Architecture & Tenancy Safeguards</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {activeProduct.architectureHighlights.map((arch, i) => (
                    <span key={i} className="bg-stone-800 border border-stone-700 px-2.5 py-1 rounded text-stone-300">
                      {arch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200">
                <div className="text-xs text-stone-500">
                  Interested in experiencing this module live?
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenDemoModal(activeProduct)}
                    className="px-5 py-2.5 bg-gold-gradient hover:opacity-95 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Request a Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
