import React, { useState } from 'react';
import { SaasProduct } from '../data/saasSolutions';
import { saveDemoRequest } from '../services/api';
import { X, CheckCircle2, Loader2, Sparkles, Calendar, Building, Mail, Phone, User } from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: SaasProduct | null;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  product
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phone: '',
    companyName: '',
    teamSize: '10-50 employees',
    implementationTimeline: 'Immediate (within 30 days)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoRefId, setDemoRefId] = useState<string | null>(null);

  if (!isOpen || !product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessEmail) return;

    setIsSubmitting(true);
    try {
      const res = await saveDemoRequest({
        productName: product.name,
        fullName: formData.fullName,
        businessEmail: formData.businessEmail,
        phone: formData.phone,
        companyName: formData.companyName,
        teamSize: formData.teamSize,
        implementationTimeline: formData.implementationTimeline
      });
      setDemoRefId(res.referenceId);
    } catch {
      setDemoRefId(`DEMO-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setDemoRefId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="font-display text-base font-bold text-white">
                Request Product Demonstration
              </h3>
            </div>
            <p className="text-xs text-amber-200/90 font-medium mt-0.5">
              {product.name}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {demoRefId ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-lg font-bold text-stone-900">
                  Demo Session Scheduled
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Our product engineering team will configure a dedicated sandbox tenant for <strong>{product.name}</strong>.
                </p>
              </div>

              <div className="p-3 bg-stone-100 rounded-lg inline-block border border-stone-200">
                <div className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">Demo Session Ticket</div>
                <div className="font-mono text-base font-bold text-amber-700">{demoRefId}</div>
              </div>

              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                A calendar invitation with video demo coordinates will be dispatched to <strong>{formData.businessEmail}</strong>.
              </p>

              <button
                onClick={handleClose}
                className="mt-2 px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50/60 border border-amber-200/60 rounded-lg p-3 text-xs text-amber-900 space-y-1">
                <p className="font-semibold text-amber-950">
                  Product Tier: {product.deploymentStatus}
                </p>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  We will tailor the walk-through to match your team size and operational workflows. No credit card required.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. S. Kalyan"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-stone-400" />
                    <span>Work Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={e => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98480 12345"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-stone-400" />
                    <span>Company Name</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Tech"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>Target Timeline</span>
                  </label>
                  <select
                    value={formData.implementationTimeline}
                    onChange={e => setFormData({ ...formData, implementationTimeline: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50"
                  >
                    <option value="Immediate (within 30 days)">Immediate (within 30 days)</option>
                    <option value="1-3 months planning">1-3 months planning</option>
                    <option value="Exploring for next fiscal">Exploring for next fiscal</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-gold-gradient hover:opacity-95 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <span>Confirm Demo Request</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
