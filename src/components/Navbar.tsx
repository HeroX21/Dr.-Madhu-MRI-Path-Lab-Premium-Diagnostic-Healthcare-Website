import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Calendar,
  Activity,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Services',
      path: '/services',
      hasDropdown: true,
      children: [
        { label: 'All Services Overview', path: '/services' },
        { label: 'MRI Scan Services', path: '/mri-scan', desc: 'Brain, Spine, Joints & Soft Tissue' },
        { label: 'CT Scan Services', path: '/ct-scan', desc: 'Multi-slice, Head, Chest & Abdomen' },
        { label: 'Ultrasound & Sonography', path: '/ultrasound', desc: 'Whole Abdomen, Pelvic & Doppler' },
        { label: 'Digital Mammography', path: '/mammography', desc: 'Women’s Breast Health Screening' },
        { label: 'Pathology & Laboratory Tests', path: '/pathology', desc: 'CBC, LFT, KFT, Thyroid & Lipids' },
        { label: 'FibroScan® Liver Health', path: '/fibroscan', desc: 'Non-invasive Liver Stiffness & Fat' },
        { label: 'Digital X-Ray Services', path: '/xray', desc: 'Low-dose Bone, Joint & Chest' },
      ],
    },
    { label: 'Health Packages', path: '/preventive-health' },
    { label: '24×7 Emergency', path: '/emergency-services', isEmergency: true },
    { label: 'Walk-In', path: '/walk-in-services' },
    { label: 'Referrals', path: '/referral-services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top emergency / announcement bar */}
      <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <div className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open 24 Hours · 7 Days a Week</span>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={13} className="text-cyan-400 shrink-0" />
              <span>34–36 Mall Road, Near GTB Nagar Metro Gate 3, New Delhi</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-cyan-300 transition-colors"
            >
              <Phone size={13} className="text-cyan-400" />
              <span>Emergency 24×7: {SITE_INFO.displayPhone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <button
              onClick={() => handleLinkClick('/walk-in-services')}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white"
            >
              <Clock size={12} className="text-slate-400" />
              <span>Walk-ins Welcome</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Dr. Madhu MRI Path Lab Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-700 to-slate-900 flex items-center justify-center text-white shadow-md shadow-cyan-900/10 group-hover:scale-105 transition-transform">
              <Activity size={24} className="text-cyan-300" />
            </div>
            <div>
              <span className="block font-bold text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 leading-tight group-hover:text-cyan-800 transition-colors">
                Dr. Madhu <span className="text-cyan-700">MRI Path Lab</span>
              </span>
              <span className="block text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Diagnostic Imaging & Pathology · 24×7
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        currentPath.startsWith('/services') ||
                        ['/mri-scan', '/ct-scan', '/ultrasound', '/mammography', '/pathology', '/fibroscan', '/xray'].includes(currentPath)
                          ? 'text-cyan-800 font-semibold bg-cyan-50'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180 text-cyan-700' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase px-3 py-1.5">
                          Diagnostic Specialities
                        </div>
                        <div className="space-y-1">
                          {link.children?.map((child) => (
                            <button
                              key={child.path}
                              onClick={() => handleLinkClick(child.path)}
                              className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${
                                currentPath === child.path
                                  ? 'bg-cyan-50 text-cyan-900 font-semibold'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div className="text-xs font-semibold">{child.label}</div>
                              {child.desc && (
                                <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                                  {child.desc}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    link.isEmergency
                      ? 'text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold flex items-center gap-1.5'
                      : isActive
                      ? 'text-cyan-800 font-semibold bg-cyan-50'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.isEmergency && <ShieldAlert size={14} className="text-red-500" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white font-semibold text-xs rounded-xl shadow-md shadow-cyan-800/20 transition-all hover:-translate-y-0.5"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="px-3 py-2 bg-cyan-700 text-white text-xs font-semibold rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[auto] bottom-0 max-h-[85vh] bg-white border-t border-slate-200 shadow-2xl overflow-y-auto p-5 z-50">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="font-bold text-slate-900 text-base">Dr. Madhu MRI Path Lab</span>
              <p className="text-xs text-slate-500">North Delhi Diagnostic Centre</p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="py-4 space-y-1">
            <button
              onClick={() => handleLinkClick('/')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/about' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              About Us
            </button>

            {/* Services Group */}
            <div className="pt-2 pb-1">
              <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Services & Modalities
              </span>
              <div className="mt-1 pl-2 space-y-1">
                <button
                  onClick={() => handleLinkClick('/services')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-cyan-700 flex items-center justify-between"
                >
                  <span>All Services Overview</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => handleLinkClick('/mri-scan')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  MRI Scan Services
                </button>
                <button
                  onClick={() => handleLinkClick('/ct-scan')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  CT Scan Services
                </button>
                <button
                  onClick={() => handleLinkClick('/ultrasound')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  Ultrasound & Doppler
                </button>
                <button
                  onClick={() => handleLinkClick('/mammography')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  Digital Mammography
                </button>
                <button
                  onClick={() => handleLinkClick('/pathology')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  Pathology & Blood Tests
                </button>
                <button
                  onClick={() => handleLinkClick('/fibroscan')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  FibroScan® Liver Health
                </button>
                <button
                  onClick={() => handleLinkClick('/xray')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-700 hover:bg-slate-50"
                >
                  Digital X-Ray
                </button>
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('/preventive-health')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/preventive-health' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              Preventive Health Packages
            </button>
            <button
              onClick={() => handleLinkClick('/emergency-services')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-red-600 ${
                currentPath === '/emergency-services' ? 'bg-red-50' : ''
              }`}
            >
              24×7 Emergency Diagnostics
            </button>
            <button
              onClick={() => handleLinkClick('/walk-in-services')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/walk-in-services' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              Walk-In Services
            </button>
            <button
              onClick={() => handleLinkClick('/referral-services')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/referral-services' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              Doctor & Hospital Referrals
            </button>
            <button
              onClick={() => handleLinkClick('/gallery')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/gallery' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              Diagnostic Gallery
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPath === '/contact' ? 'bg-cyan-50 text-cyan-800 font-semibold' : 'text-slate-800'
              }`}
            >
              Contact Us & Location
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl text-center"
            >
              Schedule Appointment
            </button>
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="w-full py-3 bg-slate-900 text-white font-semibold text-sm rounded-xl text-center flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              <span>Call: {SITE_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
