import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  CheckCircle,
  Activity,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAppointmentModal }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    setIsSent(true);
    setTimeout(() => {
      setQuickEmail('');
      setQuickMsg('');
      setIsSent(false);
    }, 4000);
  };

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Legacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-900 flex items-center justify-center text-white">
                <Activity size={22} className="text-cyan-300" />
              </div>
              <div>
                <span className="block font-bold text-lg text-white tracking-tight">
                  Dr. Madhu <span className="text-cyan-400">MRI Path Lab</span>
                </span>
                <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                  North Delhi Diagnostic Centre
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Dr. Madhu MRI Path Lab is a trusted comprehensive diagnostic imaging & pathology centre in North Delhi with over 30 years of excellence. Delivering precision, hygiene, and 24×7 availability under one roof.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-cyan-400 shrink-0" />
                <span>30+ Years Clinical Diagnostic Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-emerald-400 shrink-0" />
                <span className="text-slate-200 font-medium">24×7 Emergency Scanning & Pathology</span>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs rounded-xl transition-all"
              >
                <span>Book Diagnostic Test</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Column 2: Diagnostic Specialities */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-2.5">
              Diagnostic Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('/mri-scan')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Advanced MRI Scans</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/ct-scan')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Multi-Slice CT Scans</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/ultrasound')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Ultrasound & Color Doppler</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/mammography')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Digital Mammography</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/pathology')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Pathology & Laboratory Tests</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/fibroscan')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>FibroScan® Liver Elastography</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/xray')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Digital X-Ray Radiography</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/preventive-health')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-medium text-cyan-400"
                >
                  <ArrowRight size={12} className="text-cyan-500" />
                  <span>Preventive Health Packages (from ₹1499)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Patient Care */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-2.5">
              Patient Information
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('/emergency-services')}
                  className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <ArrowRight size={12} />
                  <span>24×7 Emergency Diagnostics</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/walk-in-services')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Walk-In Diagnostic Guidelines</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/referral-services')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Doctor & Hospital Referrals</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/gallery')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Facility & Imaging Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/about')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>About Our Centre & Radiologists</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/contact')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight size={12} className="text-slate-600" />
                  <span>Contact Us & Directions</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900 text-xs text-slate-400 space-y-1">
              <span className="font-semibold text-white block">Operating Hours:</span>
              <p>Monday - Sunday: Open 24 Hours</p>
              <p className="text-emerald-400">All 7 Days · 24×7 Emergency Available</p>
            </div>
          </div>

          {/* Column 4: Location & Quick Inquiry */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider border-l-2 border-cyan-500 pl-2.5">
              Contact & Address
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  34–36, Mall Road, Near GTB Nagar Metro Station (Gate No. 3), New Delhi - 110033
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-cyan-400 shrink-0" />
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors"
                >
                  {SITE_INFO.phone} (24×7)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors truncate"
                >
                  {SITE_INFO.email}
                </a>
              </div>
            </div>

            {/* Quick Inquiry Mini Form */}
            <div className="pt-2">
              <span className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Quick Message / Query
              </span>
              {isSent ? (
                <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs p-3 rounded-xl flex items-center gap-2">
                  <CheckCircle size={15} className="shrink-0" />
                  <span>Message recorded. Our staff will reach out shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  />
                  <textarea
                    rows={2}
                    placeholder="Brief question or test inquiry..."
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                  >
                    <Send size={12} />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 {SITE_INFO.name}. All Rights Reserved. North Delhi, India.</p>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleLink('/about')} className="hover:text-slate-300 transition-colors">
              About
            </button>
            <span>·</span>
            <button onClick={() => handleLink('/contact')} className="hover:text-slate-300 transition-colors">
              Contact & Map
            </button>
            <span>·</span>
            <a
              href={SITE_INFO.address.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
