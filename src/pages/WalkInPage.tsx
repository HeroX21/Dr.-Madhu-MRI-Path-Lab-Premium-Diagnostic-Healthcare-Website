import React from 'react';
import {
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Phone,
  FileText,
  AlertCircle,
  ArrowRight,
  Activity,
  HeartPulse
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface WalkInPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const WalkInPage: React.FC<WalkInPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const walkInTests = [
    {
      title: 'Routine Blood Investigations',
      desc: 'Complete Blood Count (CBC), Fasting/PP Blood Glucose, Kidney Screen (Creatinine), Liver Screen (SGOT/SGPT), and Lipid Profile.',
      availability: 'Walk-in available 24×7',
    },
    {
      title: 'Complete Urine & Stool Analysis',
      desc: 'Urinary tract infection screening, protein detection, urine pregnancy check, and microscopic sediment evaluation.',
      availability: 'Processed on arrival',
    },
    {
      title: 'Digital X-Rays (Bone & Chest)',
      desc: 'Instant flat-panel digital radiography for suspected fractures, chest infections, pre-employment, and visa fitness checkups.',
      availability: 'Ready in 10 minutes',
    },
    {
      title: '12-Lead Resting ECG',
      desc: 'Cardiac rhythm and heart rate screening with immediate physical printout and physician interpretation.',
      availability: 'Immediate intake',
    },
    {
      title: 'Basic Abdominal Ultrasound',
      desc: 'Available on walk-in basis subject to same-day radiologist queue (requires 6–8 hours fasting).',
      availability: 'Subject to daily queue',
    },
    {
      title: 'Infection Markers (CRP & Dengue)',
      desc: 'Rapid test assays for fever evaluation, Typhoid serology, Malaria antigen, and Dengue NS1 testing.',
      availability: 'STAT results in hours',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>Hassle-Free Direct Testing</span>
              <span>·</span>
              <span>Dr. Madhu MRI Path Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Walk-In Diagnostic Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No need to wait days for a lab appointment. Visit our GTB Nagar centre directly for routine blood tests, urine analysis, digital X-rays, and ECG (subject to daily availability).
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-cyan-800/20"
              >
                <Phone size={18} />
                <span>Check Walk-In Queue: {SITE_INFO.displayPhone}</span>
              </a>
              <button
                onClick={() => onOpenAppointmentModal('walk-in-services')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors"
              >
                <span>Notify Front Desk in Advance</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Walk-in Process Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Simple 3-Step Process"
          title="How Walk-In Diagnostics Works at Our Centre"
          subtitle="Designed for maximum convenience, minimal waiting times, and prompt digital reporting."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Quick Registration</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Walk into our reception desk at 34–36 Mall Road. Present your doctor’s slip or select routine tests. Registration takes less than 3 minutes.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Sample Draw or Imaging</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Undergo gentle sample collection in our hygienic phlebotomy suite or proceed directly to the digital X-ray / ECG room with zero delays.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Digital Report Delivery</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Receive verified PDF reports directly on your mobile device via WhatsApp and email, or collect printed stamped copies from reception.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Walk-in Tests Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Available Walk-In Investigations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Common outpatient diagnostics accommodated without a prior booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {walkInTests.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded uppercase">
                  {t.availability}
                </span>
                <h3 className="text-base font-bold text-slate-900">{t.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointmentModal(t.title)}
                  className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
                >
                  <span>Select for testing</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Centre Location Direct Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Walk-in Diagnostic Centre
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Visiting Dr. Madhu MRI Path Lab
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              34–36, Mall Road, Near GTB Nagar Metro Station (Gate No. 3), New Delhi - 110033. Located on the main Mall Road thoroughfare with prominent street signage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-cyan-300 block">Metro Connectivity:</span>
              <p className="text-slate-300">Just 60 seconds walk from Gate No. 3 of GTB Nagar Metro (Yellow Line).</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-cyan-300 block">Operating Hours:</span>
              <p className="text-slate-300">Open 24 Hours / 7 Days a week. Walk-ins accepted day and night.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-xl space-y-1">
              <span className="font-bold text-cyan-300 block">Helpline:</span>
              <p className="text-slate-300">+91 98110 84727 / drmadhusclinic@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyCallout onNavigate={onNavigate} />
      </section>
    </div>
  );
};
