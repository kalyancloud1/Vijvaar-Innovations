import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageView } from '../types';
import { COMPANY } from '../data/company';
import { Phone, Menu, X, Shield, Terminal } from 'lucide-react';

interface NavbarProps {
  activeView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenEnquiry: () => void;
  onOpenAdmin: () => void;
  onOpenTechGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenEnquiry,
  onOpenAdmin,
  onOpenTechGuide
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'SaaS Solutions', view: 'saas' },
    { label: 'IT Services', view: 'it-services' },
    { label: 'BPO Services', view: 'bpo' },
    { label: 'Industries', view: 'industries' },
    { label: 'Our Process', view: 'process' },
    { label: 'About Us', view: 'about' },
    { label: 'Insights', view: 'insights' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-shadow duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Top Utility Bar for Direct Contact & Transparency */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[12px] truncate">
            <span className="hidden sm:inline text-amber-400 font-medium tracking-wide">
              VijVaar Innovations OPC Pvt Ltd
            </span>
            <span className="hidden sm:inline text-stone-600" aria-hidden="true">|</span>
            <span className="text-stone-300 truncate">
              Kakinada, Andhra Pradesh – 533001
            </span>
            <span className="text-stone-600" aria-hidden="true">·</span>
            <a
              href={`tel:${COMPANY.phone1}`}
              className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{COMPANY.phone1Formatted}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <button
              onClick={onOpenTechGuide}
              className="text-stone-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
              title="View Architecture & Deployment Guide"
            >
              <Terminal className="w-3 h-3" />
              <span>Dev Guide</span>
            </button>
            <span className="text-stone-700" aria-hidden="true">|</span>
            <button
              onClick={onOpenAdmin}
              className="text-stone-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
              title="Staff Portal for Enquiries"
            >
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer shrink-0"
          aria-label="VijVaar Innovations Home"
        >
          <BrandLogo variant="full" withTagline={false} />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-600" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`transition-colors whitespace-nowrap py-1 cursor-pointer relative ${
                  isActive
                    ? 'text-amber-700 font-semibold'
                    : 'hover:text-stone-900 text-stone-600'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEnquiry}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-gold-gradient hover:opacity-95 rounded-lg shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap tracking-wide uppercase active:scale-[0.98]"
          >
            Request Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenEnquiry}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-gold-gradient rounded-md shadow-sm"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-5 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2.5 text-base font-medium text-stone-700">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left px-3 py-2 rounded-md transition-colors cursor-pointer ${
                  activeView === item.view
                    ? 'bg-amber-50 text-amber-900 font-semibold'
                    : 'hover:bg-stone-100 text-stone-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 text-center font-semibold text-white bg-gold-gradient rounded-lg shadow-sm"
              >
                Request a Consultation
              </button>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-2 px-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="hover:text-amber-700 underline"
                >
                  Staff Portal
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTechGuide();
                  }}
                  className="hover:text-amber-700 underline"
                >
                  Architecture Guide
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
