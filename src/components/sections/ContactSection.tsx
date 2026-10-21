import React, { useState } from 'react';
import { COMPANY } from '../../data/company';
import { saveEnquiry } from '../../services/api';
import { Phone, Mail, MapPin, ExternalLink, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Clock } from 'lucide-react';

interface ContactSectionProps {
  onOpenPrivacy: (tab: 'privacy' | 'terms') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenPrivacy
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    phone: '',
    companyName: '',
    serviceInterest: 'Custom Web Application Development',
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
      errs.phone = 'Contact phone number is required.';
    } else if (!/^[0-9+\s\-().]{8,18}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.requirements.trim()) {
      errs.requirements = 'Please provide details of your project requirements.';
    } else if (formData.requirements.trim().length < 15) {
      errs.requirements = 'Please share at least 15 characters describing your scope.';
    }

    if (!formData.consentAccepted) {
      errs.consentAccepted = 'Consent is required to evaluate this enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot detection
    if (formData.hp_trap) return;

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await saveEnquiry({
        name: formData.name.trim(),
        businessEmail: formData.businessEmail.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim() || 'Direct Client',
        serviceInterest: formData.serviceInterest,
        estimatedBudget: formData.estimatedBudget,
        requirements: formData.requirements.trim(),
        preferredContactMethod: formData.preferredContactMethod,
        consentAccepted: formData.consentAccepted
      });

      if (res.success) {
        setSubmittedRefId(res.referenceId);
      } else {
        setSubmitError(res.error || 'Submission error. Please connect with our direct phone numbers.');
      }
    } catch {
      setSubmitError('Network failure. Please contact kalyanwork23@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedRefId(null);
    setSubmitError(null);
    setFormData({
      name: '',
      businessEmail: '',
      phone: '',
      companyName: '',
      serviceInterest: 'Custom Web Application Development',
      estimatedBudget: '₹1,00,000 - ₹3,00,000',
      requirements: '',
      preferredContactMethod: 'Email',
      consentAccepted: false,
      hp_trap: ''
    });
  };

  return (
    <section className="py-20 bg-stone-100/70 border-b border-stone-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
            Official Corporate Contact
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Initiate a Project Consultation or Operational Partnership
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Reach out to our engineering and solutions desk in Kakinada. All enquiries are evaluated under strict confidentiality and responded to within one business day.
          </p>
        </div>

        {/* Master Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Card & Headquarters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl space-y-6">
              <div className="space-y-1 border-b border-stone-800 pb-4">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
                  Corporate Headquarters
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {COMPANY.legalName}
                </h3>
                <p className="text-xs text-stone-400">
                  {COMPANY.brandStatement}
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3 text-xs text-stone-300">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 border border-stone-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Office Address</div>
                  <div className="text-stone-400 mt-0.5 leading-relaxed">
                    {COMPANY.address.line1}<br />
                    {COMPANY.address.city}, {COMPANY.address.state} – {COMPANY.address.postalCode}<br />
                    {COMPANY.address.country}
                  </div>
                  <a
                    href={COMPANY.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline font-medium text-[11px] mt-2"
                  >
                    <span>View on Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-3 text-xs text-stone-300">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 border border-stone-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-white">Direct Telephone Lines</div>
                  <div>
                    <a
                      href={`tel:${COMPANY.phone1}`}
                      className="text-stone-300 hover:text-amber-400 transition-colors block font-mono text-[11px]"
                    >
                      Line 1: {COMPANY.phone1Formatted}
                    </a>
                    <a
                      href={`tel:${COMPANY.phone2}`}
                      className="text-stone-300 hover:text-amber-400 transition-colors block font-mono text-[11px]"
                    >
                      Line 2: {COMPANY.phone2Formatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-xs text-stone-300">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 border border-stone-700">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Official Business Email</div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-amber-400 hover:text-amber-300 transition-colors underline break-all mt-0.5 block"
                  >
                    {COMPANY.email}
                  </a>
                  <div className="text-[11px] text-stone-400 mt-0.5">
                    For proposals, RFP submissions, and technical coordination.
                  </div>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-3 text-xs text-stone-300 border-t border-stone-800 pt-4">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center shrink-0 text-emerald-400 border border-stone-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Operations Desk Schedule</div>
                  <div className="text-stone-400 text-[11px] mt-0.5">
                    Monday to Saturday: 9:00 AM – 7:00 PM IST<br />
                    24/7 Monitoring for SLA Client Deployments
                  </div>
                </div>
              </div>

              {/* WhatsApp direct button */}
              <div className="pt-2">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold border border-emerald-700/60 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Connect with Kalyan via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm">
            {submittedRefId ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-stone-900">
                    Consultation Request Registered
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Thank you for contacting VijVaar Innovations. Your reference identifier has been recorded.
                  </p>
                </div>

                <div className="inline-block bg-stone-100 border border-stone-300 rounded-lg px-6 py-3 my-2">
                  <div className="text-[10px] text-stone-500 font-mono uppercase tracking-wider">Tracking Identifier</div>
                  <div className="text-xl font-mono font-bold text-amber-700 tracking-wider">
                    {submittedRefId}
                  </div>
                </div>

                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  A verification dispatch has been logged. Our leadership team will review your requirements and reach out via your preferred channel ({formData.preferredContactMethod}).
                </p>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-900 tracking-tight">
                    Project Enquiry & Proposal Form
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill out the parameters below to receive a formal architectural or operational proposal.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Honeypot field for spam bots */}
                <input
                  type="text"
                  name="hp_trap"
                  value={formData.hp_trap}
                  onChange={e => setFormData({ ...formData, hp_trap: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
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
                      placeholder="kalyan@business.com"
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
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 83419 07677"
                      className={`w-full px-3.5 py-2 text-sm bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                        errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300'
                      }`}
                    />
                    {errors.phone && <p className="text-rose-600 text-[11px] mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Innovations Ltd"
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Service Interest & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Service Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="Custom Web Application Development">Custom Software Development</option>
                      <option value="SaaS CRM & Sales Pipeline">SaaS Platforms & CRM</option>
                      <option value="SaaS Business Process Management">Business Process Management (BPM)</option>
                      <option value="SaaS Workflow & Task Automation">Workflow & Task Automation</option>
                      <option value="Cloud Migration & DevOps Hosting">Cloud Services & DevOps</option>
                      <option value="Cybersecurity Audit & DPDP Compliance">Cybersecurity & DPDP Compliance</option>
                      <option value="Digital Transformation & Modernization">Digital Transformation Strategy</option>
                      <option value="BPO Back-Office Operations">BPO Dedicated Back-Office Operations</option>
                      <option value="BPO Data Entry & Verification">BPO Data Entry & Quality Auditing</option>
                      <option value="BPO Customer Support (Chat/Email/Voice)">BPO Customer Support & Helpdesk</option>
                      <option value="BPO Document Processing & Indexing">BPO Document Digitization & OCR</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={e => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="Under ₹1,00,000">Under ₹1,00,000 (Small Automation / MVP)</option>
                      <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 (Standard Module)</option>
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
                  <div className="flex items-center gap-6 text-xs">
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
                    Project Requirements / Operational Scope <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.requirements}
                    onChange={e => {
                      setFormData({ ...formData, requirements: e.target.value });
                      if (errors.requirements) setErrors({ ...errors, requirements: '' });
                    }}
                    placeholder="Outline your existing systems, workflow bottlenecks, transaction volume, or deadlines..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all ${
                      errors.requirements ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300'
                    }`}
                  />
                  {errors.requirements && <p className="text-rose-600 text-[11px] mt-1">{errors.requirements}</p>}
                </div>

                {/* Consent Checkbox */}
                <div>
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
                      I agree to the processing of this project information in accordance with VijVaar Innovations{' '}
                      <button
                        type="button"
                        onClick={() => onOpenPrivacy('privacy')}
                        className="text-amber-800 underline font-medium hover:text-amber-900"
                      >
                        Privacy Policy
                      </button>
                      . We maintain strict non-disclosure across all client inquiries.
                    </span>
                  </label>
                  {errors.consentAccepted && (
                    <p className="text-rose-600 text-[11px] mt-1 pl-6">{errors.consentAccepted}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gold-gradient hover:opacity-95 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                        <span>Transmitting Enquiry to VijVaar Desk...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-stone-950" />
                        <span>Submit Project Consultation Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
