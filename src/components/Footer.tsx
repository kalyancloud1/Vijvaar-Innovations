import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY } from '../data/company';
import { PageView } from '../types';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Terminal, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenPrivacy: (tab: 'privacy' | 'terms' | 'security') => void;
  onOpenAdmin: () => void;
  onOpenTechGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenAdmin,
  onOpenTechGuide
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Upper Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Brand & Identity */}
        <div className="lg:col-span-2 space-y-4">
          <BrandLogo variant="light" withTagline={true} />
          
          <p className="text-sm text-stone-400 max-w-md leading-relaxed">
            {COMPANY.coreMessage}. VijVaar Innovations OPC Pvt Ltd is an Indian technology solutions and operational excellence enterprise headquartered in Kakinada, delivering scalable SaaS products, custom software, and reliable BPO services.
          </p>

          <div className="pt-2 text-xs text-stone-400 space-y-1">
            <p className="font-semibold text-amber-400 tracking-wide">
              {COMPANY.brandStatement}
            </p>
            <p className="text-stone-400">
              CIN / Structure: One Person Company (OPC) Private Limited
            </p>
          </div>

          <div className="flex items-center gap-3 pt-3">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 text-xs font-medium border border-emerald-700/50 transition-colors"
            >
              <span>Chat via WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onOpenTechGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-medium border border-stone-700 transition-colors cursor-pointer"
            >
              <Terminal className="w-3 h-3 text-amber-400" />
              <span>Full Stack Docs</span>
            </button>
          </div>
        </div>

        {/* Column 2: Solutions & Services */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
            Core Offerings
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <button
                onClick={() => onNavigate('saas')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                SaaS Platforms & CRM
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('it-services')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Custom Web Applications
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('it-services')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Cloud Architecture & Migration
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('it-services')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Intelligent Workflow Automation
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('bpo')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                BPO Back-Office Operations
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('bpo')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Data Entry & Quality Auditing
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('bpo')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Customer Support & Helpdesk
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate & Sectors */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
            Company & Sectors
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                About Our Leadership
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('process')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                5-Stage Delivery Process
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('industries')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                BFSI & Insurance
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('industries')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Logistics & Supply Chain
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('industries')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Healthcare Administration
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('insights')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Technical Insights & Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-amber-400 transition-colors text-left"
              >
                Corporate Enquiries
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Verified Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
            Headquarters & Contact
          </h4>

          <div className="space-y-2.5 text-xs text-stone-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-300 font-medium">{COMPANY.legalName}</p>
                <p>{COMPANY.address.line1}</p>
                <p>{COMPANY.address.city}, {COMPANY.address.state} – {COMPANY.address.postalCode}</p>
                <p>{COMPANY.address.country}</p>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 underline mt-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <div className="pt-1 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY.phone1}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY.phone1Formatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY.phone2}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY.phone2Formatted}
                </a>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-amber-400 transition-colors break-all">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-stone-800/80 bg-black/60 py-6 px-4 sm:px-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-stone-400">
            <span>© {new Date().getFullYear()} {COMPANY.legalName}. All Rights Reserved.</span>
            <span aria-hidden="true">·</span>
            <span>CIN Registered in Andhra Pradesh, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onOpenPrivacy('privacy')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-stone-700" aria-hidden="true">·</span>
            <button
              onClick={() => onOpenPrivacy('terms')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-stone-700" aria-hidden="true">·</span>
            <button
              onClick={() => onOpenPrivacy('security')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Security Statement
            </button>
            <span className="text-stone-700" aria-hidden="true">·</span>
            <button
              onClick={onOpenAdmin}
              className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Desk</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
