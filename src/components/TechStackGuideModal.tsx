import React, { useState } from 'react';
import { X, Terminal, Server, Database, Code, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';

interface TechStackGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechStackGuideModal: React.FC<TechStackGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 text-stone-200 rounded-xl shadow-2xl border border-stone-800 overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-stone-950 px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Technical Stack & Deployment Manual
              </h3>
              <p className="text-xs text-stone-400">
                VijVaar Innovations OPC Pvt Ltd — Full-Stack Architecture, Django & Node Reference, and Deployment Guide.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-auto p-6 space-y-8 text-xs leading-relaxed text-stone-300">
          {/* Section 1: Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
              <Code className="w-4 h-4" />
              <span>1. System Architecture Overview</span>
            </div>
            <p>
              This enterprise platform is engineered with a decoupled, high-performance architecture optimized for sub-100ms response times, search engine indexation, and operational reliability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="bg-stone-950/80 p-3.5 rounded-lg border border-stone-800">
                <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-amber-400" />
                  <span>Frontend</span>
                </div>
                <p className="text-stone-400 text-[11px]">
                  React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Motion compositor animations, Google Fonts (Outfit & Plus Jakarta Sans).
                </p>
              </div>

              <div className="bg-stone-950/80 p-3.5 rounded-lg border border-stone-800">
                <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Backend APIs</span>
                </div>
                <p className="text-stone-400 text-[11px]">
                  Dual-tier support: Active Express 4.x runtime on Node.js/TypeScript with Vite middleware, and complete Django REST Framework models for Python/PostgreSQL deployments.
                </p>
              </div>

              <div className="bg-stone-950/80 p-3.5 rounded-lg border border-stone-800">
                <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>Database & Admin</span>
                </div>
                <p className="text-stone-400 text-[11px]">
                  PostgreSQL with Row-Level Security schemas for SaaS tenants. Built-in staff admin desk for live inquiry tracking and CSV data exports.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Local Windows & VS Code Setup */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
              <Terminal className="w-4 h-4" />
              <span>2. Local Development Guide (Windows / Mac / VS Code)</span>
            </div>
            <p>
              To run, modify, or extend this application on your local machine using VS Code:
            </p>

            <div className="bg-black/80 rounded-lg p-3 font-mono text-[11px] text-stone-300 border border-stone-800 space-y-2">
              <div className="text-stone-500"># 1. Clone or extract repository</div>
              <div>cd vijvaar-innovations</div>
              <div className="text-stone-500"># 2. Install dependencies</div>
              <div>npm install</div>
              <div className="text-stone-500"># 3. Start development server</div>
              <div>npm run dev</div>
              <div className="text-stone-500"># Application will start at http://localhost:3000</div>
            </div>
          </div>

          {/* Section 3: Django REST Framework & PostgreSQL Model Spec */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <Server className="w-4 h-4" />
                <span>3. Production Django Model Specification (`models.py`)</span>
              </div>
              <button
                onClick={() => copyToClipboard(`from django.db import models

class BusinessEnquiry(models.Model):
    STATUS_CHOICES = [
        ('NEW', 'New'),
        ('UNDER_REVIEW', 'Under Review'),
        ('CONTACTED', 'Contacted'),
        ('PROPOSAL_SENT', 'Proposal Sent'),
        ('CLOSED', 'Closed'),
    ]
    reference_id = models.CharField(max_length=32, unique=True, db_index=True)
    full_name = models.CharField(max_length=150)
    business_email = models.EmailField(db_index=True)
    phone_number = models.CharField(max_length=30)
    company_name = models.CharField(max_length=200, blank=True)
    service_interest = models.CharField(max_length=150)
    estimated_budget = models.CharField(max_length=100)
    requirements = models.TextField()
    preferred_contact = models.CharField(max_length=20, default='Email')
    consent_accepted = models.BooleanField(default=True)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='NEW')
    internal_notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['status', 'created_at']),
        ]
`, 'django_model')}
                className="text-[11px] text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedKey === 'django_model' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey === 'django_model' ? 'Copied' : 'Copy Django Model'}</span>
              </button>
            </div>
            
            <p>
              When hosting the optional Django Python backend alongside PostgreSQL, the database models map directly to the enquiry lifecycle:
            </p>

            <pre className="bg-black/90 p-3 rounded-lg border border-stone-800 text-[10px] text-amber-200/90 font-mono overflow-x-auto">
{`from django.db import models

class BusinessEnquiry(models.Model):
    reference_id = models.CharField(max_length=32, unique=True, db_index=True)
    full_name = models.CharField(max_length=150)
    business_email = models.EmailField(db_index=True)
    phone_number = models.CharField(max_length=30)
    company_name = models.CharField(max_length=200, blank=True)
    service_interest = models.CharField(max_length=150)
    estimated_budget = models.CharField(max_length=100)
    requirements = models.TextField()
    preferred_contact = models.CharField(max_length=20, default='Email')
    status = models.CharField(max_length=30, default='NEW')
    internal_notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)`}
            </pre>
          </div>

          {/* Section 4: Environment Variables */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>4. Environment Configuration (`.env.example`)</span>
            </div>
            <div className="bg-black/80 rounded-lg p-3 font-mono text-[11px] text-stone-300 border border-stone-800 space-y-1">
              <div>PORT=3000</div>
              <div>NODE_ENV=production</div>
              <div>APP_URL=https://www.vijvaarinnovations.com</div>
              <div>OFFICIAL_EMAIL=kalyanwork23@gmail.com</div>
              <div>OFFICIAL_PHONE_1=+918341907677</div>
              <div>OFFICIAL_PHONE_2=+918341563696</div>
              <div>DATABASE_URL=postgresql://vijvaar_user:secret@localhost:5432/vijvaar_db</div>
            </div>
          </div>

          {/* Section 5: Deployment Steps */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>5. Production Deployment Recommendations</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
              <li>
                <strong>Cloud Run / Docker Container:</strong> Build the static assets with <code className="text-amber-400">npm run build</code> and serve via <code className="text-amber-400">npm run start</code>. Container automatically spins up on port 3000.
              </li>
              <li>
                <strong>Affordable VPS (Ubuntu 24.04):</strong> Use Nginx as reverse proxy with Let's Encrypt SSL (<code className="text-amber-400">certbot --nginx -d vijvaarinnovations.com</code>) pointing to local PM2 node process on port 3000.
              </li>
              <li>
                <strong>Transactional Email:</strong> Connect Resend or SMTP to forward new enquiries automatically to <code className="text-amber-400">kalyanwork23@gmail.com</code> with instant SMS alerts to <code className="text-amber-400">+91 8341907677</code>.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-950 px-6 py-3 border-t border-stone-800 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-stone-500 font-mono">VijVaar Innovations Engineering Doc v1.2</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
