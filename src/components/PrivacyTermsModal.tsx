import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms' | 'security';
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'security'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div>
            <h3 className="font-display text-base font-bold text-white">
              Legal, Privacy & Compliance Transparency
            </h3>
            <p className="text-xs text-stone-300">
              {COMPANY.legalName} — Registered Office: Kakinada, Andhra Pradesh, India
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-stone-100 border-b border-stone-200 px-6 flex gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`py-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'security'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Security Practices</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-auto p-6 text-xs text-stone-700 leading-relaxed space-y-4">
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">Privacy Policy & Data Handling</h4>
              <p>
                <strong>Effective Date:</strong> October 2026. This Privacy Policy governs the collection, processing, and protection of information submitted to VijVaar Innovations OPC Pvt Ltd through this website and associated business channels.
              </p>
              
              <h5 className="font-semibold text-stone-900 pt-1">1. Information We Collect</h5>
              <p>
                When you submit a business consultation or demo request, we collect contact information including your full name, business email address, contact telephone number, company affiliation, service interests, and project requirement notes.
              </p>

              <h5 className="font-semibold text-stone-900 pt-1">2. Purpose of Processing</h5>
              <p>
                Your information is processed strictly to evaluate your commercial requirements, prepare proposals, deliver demonstration environments, and contact you regarding technology consulting or BPO services. We never sell, rent, or trade client information to advertising brokers.
              </p>

              <h5 className="font-semibold text-stone-900 pt-1">3. Data Retention and Rights</h5>
              <p>
                You may request access to, correction of, or permanent deletion of your inquiry records at any time by sending an email to <a href={`mailto:${COMPANY.email}`} className="text-amber-700 underline">{COMPANY.email}</a>.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">Terms of Service</h4>
              <p>
                By accessing this website, you agree to comply with standard acceptable use standards. All materials, code architectures, designs, and content are the intellectual property of VijVaar Innovations OPC Pvt Ltd.
              </p>

              <h5 className="font-semibold text-stone-900 pt-1">1. Professional Service Agreements</h5>
              <p>
                Consulting, software development, and BPO operations are governed by individual Statement of Work (SOW) documents and Master Service Agreements (MSA) executed between VijVaar Innovations and the client entity.
              </p>

              <h5 className="font-semibold text-stone-900 pt-1">2. Regulatory Scope Limitations</h5>
              <p>
                VijVaar Innovations provides operational, digital, and technological assistance. Regulated financial underwriting, medical advice, and legal certifications are executed exclusively by the client's accredited or licensed professionals.
              </p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-3">
              <h4 className="font-bold text-stone-900 text-sm">Security Practices & Information Safeguards</h4>
              <p>
                We apply security-by-design across all custom web applications, SaaS modules, and BPO operational workflows.
              </p>

              <h5 className="font-semibold text-stone-900 pt-1">1. Technical Controls</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Transport Layer Security (TLS 1.3) encryption for all web endpoints and API transmissions.</li>
                <li>Strict parameterized queries and ORM mappings to mitigate SQL injection vulnerabilities.</li>
                <li>Role-Based Access Control (RBAC) preventing unauthorized tenant or user data access.</li>
                <li>Spam prevention filters and rate limiting on public inquiry forms.</li>
              </ul>

              <h5 className="font-semibold text-stone-900 pt-1">2. Operational Confidentiality</h5>
              <p>
                Our BPO operations staff work under executed Non-Disclosure Agreements (NDAs). Customer databases and document archives are accessed solely through designated secure virtual workspaces.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-stone-500">Contact: {COMPANY.email}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
