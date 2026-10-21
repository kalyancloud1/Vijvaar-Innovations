import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { saveEnquiry } from '../services/api';
import { X, CheckCircle2, AlertCircle, Loader2, Send, Phone, Mail, MapPin } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    phone: '',
    companyName: '',
    serviceInterest: defaultService || 'Custom Software Development',
    estimatedBudget: '₹1,00,000 - ₹3,00,000',
    requirements: '',
    preferredContactMethod: 'Email' as 'Email' | 'Phone' | 'WhatsApp',
    consentAccepted: false,
    hp_trap: '' // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid corporate email format.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact telephone / mobile number is required.';
    } else if (!/^[0-9+\s\-().]{8,18}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.requirements.trim()) {
      errs.requirements = 'Please provide a brief summary of your project goals.';
    } else if (formData.requirements.trim().length < 15) {
      errs.requirements = 'Please share at least 15 characters describing your requirements.';
    }

    if (!formData.consentAccepted) {
      errs.consentAccepted = 'Consent is required to process your consultation request.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot detection
    if (formData.hp_trap) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await saveEnquiry({
        name: formData.name.trim(),
        businessEmail: formData.businessEmail.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim() || 'Independent / Individual',
        serviceInterest: formData.serviceInterest,
        estimatedBudget: formData.estimatedBudget,
        requirements: formData.requirements.trim(),
        preferredContactMethod: formData.preferredContactMethod,
        consentAccepted: formData.consentAccepted
      });

      if (res.success) {
        setSubmittedRefId(res.referenceId);
      } else {
        setSubmitError(res.error || 'Failed to register enquiry. Please reach our direct telephone numbers.');
      }
    } catch {
      setSubmitError('Network failure. Please call +91 8341907677 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedRefId(null);
    setSubmitError(null);
    setFormData({
      name: '',
      businessEmail: '',
      phone: '',
      companyName: '',
      serviceInterest: 'Custom Software Development',
      estimatedBudget: '₹1,00,000 - ₹3,00,000',
      requirements: '',
      preferredContactMethod: 'Email',
      consentAccepted: false,
      hp_trap: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div>
            <h3 className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span>Request Business Consultation</span>
              <span className="text-amber-400 text-xs font-mono font-normal">| VijVaar Innovations</span>
            </h3>
            <p className="text-xs text-stone-300 mt-0.5">
              Discuss your SaaS, custom development, automation, or BPO project with our engineering team.
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submittedRefId ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-xl font-bold text-stone-900">
                  Enquiry Registered Successfully
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you for contacting VijVaar Innovations. Your reference code has been recorded and routed to our solutions team.
                </p>
              </div>

              <div className="inline-block bg-stone-100 border border-stone-300 rounded-lg px-6 py-3 my-2">
                <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">Reference Identifier</div>
                <div className="text-xl font-mono font-bold text-amber-700 tracking-wider">
                  {submittedRefId}
                </div>
              </div>

              <div className="text-xs text-stone-500 max-w-md mx-auto space-y-2 pt-2">
                <p>
                  A confirmation dispatch notification has been scheduled to <strong className="text-stone-700">{formData.businessEmail}</strong>.
                  Our senior engineering lead (Kalyan) will review your scope within 1 business day.
                </p>
                <p className="text-stone-400">
                  For immediate urgent coordination, you may call our Kakinada office at <strong className="text-stone-700">{COMPANY.phone1Formatted}</strong>.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Form Submission State */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {submitError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Honeypot anti-spam (hidden) */}
              <input
                type="text"
                name="hp_trap"
                value={formData.hp_trap}
                onChange={e => setFormData({ ...formData, hp_trap: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Two-Column Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. S. Kalyan Kumar"
                    className={`w-full px-3.5 py-2 text-sm bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.name && <p className="text-rose-600 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={e => {
                      setFormData({ ...formData, businessEmail: e.target.value });
                      if (errors.businessEmail) setErrors({ ...errors, businessEmail: '' });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2 text-sm bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                      errors.businessEmail ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.businessEmail && <p className="text-rose-600 text-[11px] mt-1">{errors.businessEmail}</p>}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 98480 12345"
                    className={`w-full px-3.5 py-2 text-sm bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-600 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Delta Enterprises"
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Service Selection & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    <optgroup label="SaaS Software Products">
                      <option value="SaaS CRM & Sales Pipeline">Customer Relationship Management (CRM)</option>
                      <option value="SaaS Business Process Management">Business Process Management (BPM)</option>
                      <option value="SaaS Workflow & Task Automation">Workflow & Task Automation</option>
                      <option value="SaaS Analytics & Executive Reporting">Executive Reporting & Analytics</option>
                      <option value="SaaS Industry Vertical Software">Industry-Specific SaaS Applications</option>
                    </optgroup>
                    <optgroup label="IT Engineering & Consulting">
                      <option value="Custom Web Application Development">Custom Software Development (Web/Mobile)</option>
                      <option value="IT Consulting & Technology Architecture">IT Consulting & Technology Audit</option>
                      <option value="Cloud Migration & DevOps Hosting">Cloud Services & DevOps Migration</option>
                      <option value="Intelligent Business Automation">Intelligent Business Automation</option>
                      <option value="Cybersecurity Audit & DPDP Compliance">Cybersecurity & DPDP Compliance</option>
                      <option value="Digital Transformation & Modernization">Digital Transformation Strategy</option>
                    </optgroup>
                    <optgroup label="Business Process Outsourcing (BPO)">
                      <option value="BPO Back-Office Operations">Dedicated Back-Office Operations</option>
                      <option value="BPO Data Entry & Verification">High-Accuracy Data Entry & Validation</option>
                      <option value="BPO Customer Support (Chat/Email/Voice)">Omnichannel Customer Support & Helpdesk</option>
                      <option value="BPO Document Processing & Indexing">Document Digitization & Indexing</option>
                      <option value="BPO Custom Outsourcing Solution">Customized Dedicated Operational Cell</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Estimated Project Budget / Range
                  </label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={e => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    <option value="Under ₹1,00,000">Under ₹1,00,000 (Small Automation / MVP)</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 (Standard Application / Module)</option>
                    <option value="₹3,00,000 - ₹7,00,000">₹3,00,000 - ₹7,00,000 (Comprehensive System)</option>
                    <option value="₹7,00,000 - ₹15,00,000+">₹7,00,000 - ₹15,00,000+ (Enterprise Platform)</option>
                    <option value="₹50,000 - ₹2,00,000 / month (BPO Retainer)">₹50,000 - ₹2,00,000 / month (BPO Retainer)</option>
                    <option value="Flexible / Subject to Scope Discussion">Flexible / Need Proposal First</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Preferred Contact Channel
                </label>
                <div className="flex items-center gap-4 text-xs">
                  {(['Email', 'Phone', 'WhatsApp'] as const).map(channel => (
                    <label key={channel} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        checked={formData.preferredContactMethod === channel}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: channel })}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-stone-700">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Project Requirements & Operational Goals <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.requirements}
                  onChange={e => {
                    setFormData({ ...formData, requirements: e.target.value });
                    if (errors.requirements) setErrors({ ...errors, requirements: '' });
                  }}
                  placeholder="Describe your current challenge, target features, timelines, or operational volume..."
                  className={`w-full px-3.5 py-2 text-sm bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                    errors.requirements ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300'
                  }`}
                />
                {errors.requirements && <p className="text-rose-600 text-[11px] mt-1">{errors.requirements}</p>}
              </div>

              {/* Consent and Privacy */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentAccepted}
                    onChange={e => {
                      setFormData({ ...formData, consentAccepted: e.target.checked });
                      if (errors.consentAccepted) setErrors({ ...errors, consentAccepted: '' });
                    }}
                    className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-xs text-stone-600 leading-relaxed">
                    I consent to VijVaar Innovations storing and processing this information in accordance with our Privacy Notice to evaluate this business enquiry. We will never sell or distribute your data.
                  </span>
                </label>
                {errors.consentAccepted && (
                  <p className="text-rose-600 text-[11px] mt-1 pl-6">{errors.consentAccepted}</p>
                )}
              </div>

              {/* Direct Office Reference Box */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Kakinada Headquarters: {COMPANY.address.line1}, {COMPANY.address.city}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <a href={`tel:${COMPANY.phone1}`} className="text-amber-700 hover:underline">
                    {COMPANY.phone1Formatted}
                  </a>
                  <span>·</span>
                  <a href={`mailto:${COMPANY.email}`} className="text-amber-700 hover:underline">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-gold-gradient hover:opacity-95 text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Business Enquiry</span>
                    </>
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
