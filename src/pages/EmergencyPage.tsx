import React from 'react';
import {
  Phone,
  Clock,
  AlertTriangle,
  HeartPulse,
  Activity,
  CheckCircle2,
  MapPin,
  Calendar,
  Zap,
  ArrowRight
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';

interface EmergencyPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const emergencyScans = [
    {
      name: 'Emergency CT Head (Stroke / Head Trauma)',
      detail: 'Fastest protocol to differentiate ischemic stroke from hemorrhagic bleed and detect skull fractures within minutes.',
      modality: 'Multi-Slice CT',
    },
    {
      name: 'Emergency CT Chest & Abdomen',
      detail: 'Critical assessment for internal bleeding, polytrauma, aortic rupture, acute pancreatitis, and acute peritonitis.',
      modality: 'Multi-Slice CT',
    },
    {
      name: 'Emergency MRI Brain & Spine',
      detail: 'Urgent diagnostic imaging for spinal cord compression, cauda equina syndrome, and emergent neurological deficits.',
      modality: 'High-Field MRI',
    },
    {
      name: 'STAT Bedside & Emergency Ultrasound (FAST Protocol)',
      detail: 'Rapid sonographic evaluation for hemoperitoneum, hemothorax, and internal organ lacerations in trauma victims.',
      modality: 'Ultrasound',
    },
    {
      name: 'Emergency Digital Radiography (X-Ray)',
      detail: 'Immediate skeletal trauma views for acute compound fractures, joint dislocations, and tension pneumothorax.',
      modality: 'Digital X-Ray',
    },
  ];

  const emergencyLabTests = [
    {
      name: 'High-Sensitivity Troponin I (Cardiac)',
      detail: 'Rapid cardiac biomarker result delivered in under 30 minutes to confirm or rule out acute myocardial infarction.',
      time: 'Result in 30 Mins',
    },
    {
      name: 'D-Dimer Assay',
      detail: 'Emergency diagnostic screen for pulmonary embolism, deep vein thrombosis (DVT), and disseminated intravascular coagulation.',
      time: 'STAT Processing',
    },
    {
      name: 'Complete Blood Count (CBC) & Platelets',
      detail: 'Rapid identification of severe acute hemorrhage, profound anemia, severe sepsis, and thrombocytopenia.',
      time: 'Result in 30 Mins',
    },
    {
      name: 'Serum Electrolytes & Renal Function (KFT)',
      detail: 'Evaluates electrolyte imbalances, acute renal failure, and confirms safety before emergent contrast scans.',
      time: 'STAT Processing',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-red-50 via-slate-50 to-white py-12 lg:py-16 border-b border-red-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-700 tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span>24×7 Diagnostic Standby · 365 Days a Year</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              24×7 Emergency Diagnostic Imaging & Pathology
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When seconds count in acute trauma, stroke, cardiac events, or sudden internal complications, Dr. Madhu MRI Path Lab provides rapid, round-the-clock diagnostic support in North Delhi.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-red-600/30"
              >
                <Phone size={18} />
                <span>Call Emergency Helpline: {SITE_INFO.displayPhone}</span>
              </a>
              <button
                onClick={() => onOpenAppointmentModal('emergency-services')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors"
              >
                <span>Notify Centre of Incoming Patient</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Critical Protocol Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Zap size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Immediate Triage Protocol</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Polytrauma and acute stroke patients are taken directly into the CT/MRI bay without bureaucratic delays or long paperwork.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <Clock size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Round-the-Clock Specialists</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certified technologists on-site 24 hours daily, with senior radiologists on standby for immediate verbal review with treating casualty physicians.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <HeartPulse size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">STAT Emergency Lab</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automated testing for Troponin I, D-Dimer, blood cross-matching markers, and acute infections processed immediately.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Emergency Scans & Laboratory Tests */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Scans */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-slate-900">
                Emergency Diagnostic Imaging (24×7)
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Multi-modality emergency radiology available round the clock.
              </p>
            </div>

            <div className="space-y-3">
              {emergencyScans.map((scan, i) => (
                <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{scan.name}</h3>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {scan.modality}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{scan.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Laboratory Tests */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-slate-900">
                Critical Care STAT Pathology Tests
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Immediate blood test processing for cardiac, pulmonary, and shock markers.
              </p>
            </div>

            <div className="space-y-3">
              {emergencyLabTests.map((test, i) => (
                <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{test.name}</h3>
                    <span className="text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded">
                      {test.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{test.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action Banner & Location Direct Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
              Emergency Directions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Direct Ambulance & Casualty Access
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dr. Madhu MRI Path Lab is positioned on 34–36 Mall Road with convenient ramp and elevator access for wheelchairs and patient stretchers, right outside GTB Nagar Metro Station Gate 3.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase">
                <MapPin size={14} />
                <span>Address</span>
              </div>
              <p className="text-xs text-slate-300">
                34–36, Mall Road, Near GTB Nagar Metro (Gate 3), New Delhi 110033
              </p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase">
                <Phone size={14} />
                <span>24×7 Hotline</span>
              </div>
              <p className="text-xs text-slate-300">
                +91 98110 84727 / 098110 84727
              </p>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                <Clock size={14} />
                <span>Availability</span>
              </div>
              <p className="text-xs text-slate-300">
                Open 24 Hours · 365 Days · No Prior Appointment Needed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
