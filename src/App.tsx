import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { COMPANY } from './data/company';
import { SaasProduct } from './data/saasSolutions';
import { BlogPost } from './data/blogPosts';

// Navigation & Layout
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Modals
import { EnquiryModal } from './components/EnquiryModal';
import { DemoRequestModal } from './components/DemoRequestModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { TechStackGuideModal } from './components/TechStackGuideModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { ArticleModal } from './components/ArticleModal';

// Content Sections
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SaasSection } from './components/sections/SaasSection';
import { ItServicesSection } from './components/sections/ItServicesSection';
import { BpoSection } from './components/sections/BpoSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { ContactSection } from './components/sections/ContactSection';

// Icons
import { MessageSquare, ArrowUp, ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<PageView>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal states
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryDefaultService, setEnquiryDefaultService] = useState<string>('');
  
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoProduct, setDemoProduct] = useState<SaasProduct | null>(null);

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isTechGuideOpen, setIsTechGuideOpen] = useState(false);
  
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [privacyTab, setPrivacyTab] = useState<'privacy' | 'terms' | 'security'>('privacy');

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnquiry = (serviceName?: string) => {
    setEnquiryDefaultService(serviceName || '');
    setIsEnquiryOpen(true);
  };

  const handleOpenDemo = (product: SaasProduct) => {
    setDemoProduct(product);
    setIsDemoOpen(true);
  };

  const handleOpenPrivacy = (tab: 'privacy' | 'terms' | 'security') => {
    setPrivacyTab(tab);
    setIsPrivacyOpen(true);
  };

  const handleNavigate = (view: PageView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = (view: PageView): string => {
    switch (view) {
      case 'saas': return 'SaaS Solutions & Business Software';
      case 'it-services': return 'Enterprise IT Engineering Services';
      case 'bpo': return 'Business Process Outsourcing (BPO)';
      case 'industries': return 'Industries We Serve';
      case 'process': return 'Our 5-Stage Delivery Process';
      case 'about': return 'About VijVaar Innovations';
      case 'insights': return 'Insights & Publications';
      case 'contact': return 'Corporate Enquiry & Office Contact';
      default: return 'Intelligent Technology Solutions';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Sticky Header Navigation */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenTechGuide={() => setIsTechGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Breadcrumb strip for inner views */}
        {activeView !== 'home' && (
          <div className="bg-stone-100 border-b border-stone-200 py-3 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-stone-500">
              <button
                onClick={() => handleNavigate('home')}
                className="hover:text-amber-700 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-semibold text-stone-800">
                {getPageTitle(activeView)}
              </span>
            </div>
          </div>
        )}

        {/* View Switcher: Individual Dedicated Page vs Home Stream */}
        {activeView === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />
            <SaasSection
              onOpenDemoModal={handleOpenDemo}
              onOpenEnquiry={handleOpenEnquiry}
            />
            <ItServicesSection
              onOpenEnquiry={handleOpenEnquiry}
            />
            <BpoSection
              onOpenEnquiry={handleOpenEnquiry}
            />
            <IndustriesSection
              onOpenEnquiry={handleOpenEnquiry}
            />
            <ProcessSection
              onOpenEnquiry={() => handleOpenEnquiry()}
            />
            <AboutSection
              onNavigate={handleNavigate}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />
            <InsightsSection
              onSelectArticle={post => setSelectedArticle(post)}
              onOpenEnquiry={handleOpenEnquiry}
            />
            <ContactSection
              onOpenPrivacy={handleOpenPrivacy}
            />
          </>
        )}

        {activeView === 'saas' && (
          <SaasSection
            onOpenDemoModal={handleOpenDemo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {activeView === 'it-services' && (
          <ItServicesSection
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {activeView === 'bpo' && (
          <BpoSection
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {activeView === 'industries' && (
          <IndustriesSection
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {activeView === 'process' && (
          <ProcessSection
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {activeView === 'about' && (
          <AboutSection
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {activeView === 'insights' && (
          <InsightsSection
            onSelectArticle={post => setSelectedArticle(post)}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {activeView === 'contact' && (
          <ContactSection
            onOpenPrivacy={handleOpenPrivacy}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenTechGuide={() => setIsTechGuideOpen(true)}
      />

      {/* Floating Verified WhatsApp Button */}
      <aside aria-label="Quick Communication">
        <a
          href={COMPANY.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-30 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 group"
          title="Direct WhatsApp with VijVaar Desk"
          aria-label="Contact VijVaar Innovations via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="hidden sm:inline text-xs font-semibold pr-1">
            WhatsApp Desk
          </span>
        </a>
      </aside>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-30 p-3 bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white rounded-full shadow-md backdrop-blur-sm transition-all duration-200 cursor-pointer"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Modals & Dialogs */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultService={enquiryDefaultService}
      />

      <DemoRequestModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        product={demoProduct}
      />

      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      <TechStackGuideModal
        isOpen={isTechGuideOpen}
        onClose={() => setIsTechGuideOpen(false)}
      />

      <PrivacyTermsModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        initialTab={privacyTab}
      />

      <ArticleModal
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        post={selectedArticle}
        onOpenEnquiry={handleOpenEnquiry}
      />
    </div>
  );
}
