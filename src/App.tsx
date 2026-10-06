import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { EmergencyPage } from './pages/EmergencyPage.tsx';
import { PreventiveHealthPage } from './pages/PreventiveHealthPage.tsx';
import { WalkInPage } from './pages/WalkInPage.tsx';
import { ReferralPage } from './pages/ReferralPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { SERVICES_LIST } from './data/servicesData.ts';
import { SITE_INFO } from './data/siteData.ts';

export default function App() {
  // Normalize initial path
  const getInitialPath = () => {
    const p = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    return p === '' ? '/' : p;
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath());
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      setCurrentPath(p === '' ? '/' : p);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title for SEO on route change
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': `${SITE_INFO.name} | Diagnostic Imaging & Pathology Centre North Delhi`,
      '/about': `About Us | ${SITE_INFO.name} | 30+ Years of Excellence`,
      '/services': `Our Diagnostic Services | ${SITE_INFO.name}`,
      '/mri-scan': `Advanced MRI Scan Services | ${SITE_INFO.name}`,
      '/ct-scan': `Multi-Slice CT Scan Services | ${SITE_INFO.name}`,
      '/ultrasound': `Ultrasound & Sonography Services | ${SITE_INFO.name}`,
      '/mammography': `Digital Mammography Services | ${SITE_INFO.name}`,
      '/pathology': `Pathology & Laboratory Tests | ${SITE_INFO.name}`,
      '/fibroscan': `FibroScan® Non-Invasive Liver Health | ${SITE_INFO.name}`,
      '/xray': `Digital X-Ray Radiography Services | ${SITE_INFO.name}`,
      '/emergency-services': `24×7 Emergency Diagnostics | ${SITE_INFO.name}`,
      '/preventive-health': `Preventive Health Checkup Packages | ${SITE_INFO.name}`,
      '/walk-in-services': `Walk-In Diagnostic Services | ${SITE_INFO.name}`,
      '/referral-services': `Doctor & Hospital Referral Services | ${SITE_INFO.name}`,
      '/gallery': `Diagnostic Facility & Equipment Gallery | ${SITE_INFO.name}`,
      '/contact': `Contact Us & Location Map | ${SITE_INFO.name}`,
    };

    const targetTitle = titles[currentPath] || `${SITE_INFO.name} | North Delhi`;
    document.title = targetTitle;
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    const normalized = path.toLowerCase().replace(/\/+$/, '') || '/';
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenAppointmentModal = (service?: string) => {
    if (service) setModalDefaultService(service);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  // Render active page based on currentPath
  const renderPage = () => {
    // Check if path matches any specific service detail
    const serviceMatch = SERVICES_LIST.find((s) => `/${s.slug}` === currentPath);
    if (serviceMatch) {
      return (
        <ServiceDetailPage
          service={serviceMatch}
          onNavigate={handleNavigate}
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />
      );
    }

    switch (currentPath) {
      case '/':
      case '/index.php':
      case '/home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/about':
      case '/about.php':
      case '/about-us':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/services':
      case '/services.php':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/emergency-services':
      case '/emergency-services.php':
      case '/emergency':
        return (
          <EmergencyPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/preventive-health':
      case '/preventive-health.php':
      case '/health-packages':
        return (
          <PreventiveHealthPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/walk-in-services':
      case '/walk-in-services.php':
      case '/walk-in':
        return (
          <WalkInPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/referral-services':
      case '/referral-services.php':
      case '/referrals':
        return (
          <ReferralPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/gallery':
      case '/gallery.php':
        return (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      case '/contact':
      case '/contact.php':
      case '/contact-us':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );

      default:
        return (
          <NotFoundPage
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Primary Sticky Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Persistent Floating Emergency Call, WhatsApp and Quick Book Buttons */}
      <FloatingActions
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Interactive Global Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        defaultService={modalDefaultService}
      />
    </div>
  );
}
