import React, { useState } from 'react';
import {
  FileText,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Users,
  Building,
  Activity,
  ArrowRight
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface ReferralPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const ReferralPage: React.FC<ReferralPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [doctorName, setDoctorName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [doctorPhone, setDoctorPhone] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [speciality, setSpeciality] = useState('General Medicine');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>Medical Community Coordination</span>
              <span>·</span>
              <span>Dr. Madhu MRI Path Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Doctor & Hospital Referral Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Seamless diagnostic coordination for physicians, nursing homes, and hospitals. Featuring expedited priority patient intake, STAT reporting, and direct clinical consultations with our radiologists and pathologists.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-cyan-800/20"
              >
                <Phone size={18} />
                <span>Doctor Referral Hotline: {SITE_INFO.displayPhone}</span>
              </a>
              <button
                onClick={() => onOpenAppointmentModal('referral-services')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors"
              >
                <span>Refer a Patient Online</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Referral Key Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <Clock size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Priority Slot Allocation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Patients referred by practicing doctors receive fast-track scheduling to minimize wait times for MRI, CT, and critical sonography.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <FileText size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">STAT Emergency Turnaround</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Immediate verbal reporting over phone to the treating casualty physician, with high-res digital scans sent to doctor portal/WhatsApp.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <Users size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Radiologist Consultations</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct peer-to-peer case reviews. Our senior radiologists and pathologists are readily accessible to discuss subtle or complex clinical findings.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Doctor Registration & Referral Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">
              Practitioner Connect
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Physician / Clinic Registration & Collaboration Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Register your clinic or nursing home to establish priority referral lines, secure digital report dispatch, and dedicated case consultation access.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Collaboration Request Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, Dr. {doctorName}. Our clinical relations coordinator will contact you at {doctorPhone} to set up your priority reporting preferences and portal dispatch.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-cyan-700 font-semibold underline hover:text-cyan-800"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Doctor / Consultant Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. A. K. Sharma"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Hospital / Clinic / Nursing Home Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. City Health Clinic"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Doctor Direct Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9811084727"
                    value={doctorPhone}
                    onChange={(e) => setDoctorPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Clinical Speciality
                  </label>
                  <select
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                  >
                    <option value="General Medicine">General Medicine / Internal Medicine</option>
                    <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                    <option value="Neurology / Neurosurgery">Neurology & Neurosurgery</option>
                    <option value="Gastroenterology">Gastroenterology & Hepatology</option>
                    <option value="Gynecology & Obstetrics">Gynecology & Obstetrics</option>
                    <option value="Pulmonology">Pulmonology & Chest Medicine</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="General Surgery">General & Laparoscopic Surgery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (for direct report dispatch)
                </label>
                <input
                  type="email"
                  placeholder="doctor@hospital.com"
                  value={doctorEmail}
                  onChange={(e) => setDoctorEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Register Clinical Collaboration</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyCallout onNavigate={onNavigate} />
      </section>
    </div>
  );
};
