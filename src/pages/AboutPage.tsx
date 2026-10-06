import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  Activity,
  Calendar,
  Phone,
  FileCheck,
  Stethoscope,
  Building
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>About Dr. Madhu MRI Path Lab</span>
              <span>·</span>
              <span>North Delhi Diagnostic Anchor</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              30+ Years of Diagnostic Excellence & Compassionate Patient Care
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dr. Madhu MRI Path Lab has earned the enduring trust of patients and medical practitioners across Delhi NCR by delivering accurate, reliable, and timely diagnostic imaging and pathology reports under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">
                Our Founding Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                A Comprehensive Diagnostic Centre Serving North Delhi Round-the-Clock
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With over 30 years of excellence, Dr. Madhu MRI Path Lab has been a pillar of diagnostic reliability in North Delhi. Conveniently located near GTB Nagar Metro Station (Gate No. 3), we provide advanced radiology and pathology services under one roof with an unwavering commitment to patient care, hygiene, and 24×7 availability.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our experienced team of radiologists, pathologists, and certified technologists ensures that every diagnostic report meets the highest clinical benchmarks of precision, while upholding affordability, transparency, and ethical healthcare practices.
            </p>

            {/* Core Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <ShieldCheck size={18} />
                  <span>Uncompromising Accuracy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous multi-stage calibration and expert radiologist/pathologist verification on all reports.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <Clock size={18} />
                  <span>24×7 Availability</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Immediate readiness for trauma CT, stroke MRI, and critical laboratory biomarkers day or night.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <Building size={18} />
                  <span>All Services Under One Roof</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  MRI, CT, Ultrasound, Digital Mammography, FibroScan, X-Ray, and Pathology all in one location.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
                  <Users size={18} />
                  <span>Compassionate Handling</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gentle phlebotomy, wide-bore patient-friendly MRI suite, and private suites for women’s health.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-cyan-800/20"
              >
                Schedule an Appointment
              </button>
              <button
                onClick={() => onNavigate('/services')}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors"
              >
                Explore All Services
              </button>
            </div>
          </div>

          {/* Right Image / Facility Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src="https://content.jdmagicbox.com/v2/comp/delhi/n9/011pxx11.xx11.161205130735.z2n9/catalogue/dr-madhu-mri-path-lab-gtb-nagar-delhi-pathology-labs-nyw3xi.jpg"
                alt="Dr. Madhu MRI Path Lab Facility Exterior"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-slate-900 text-lg">
                  Centre Facility & Infrastructure
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategically situated on Mall Road in North Delhi, right by Gate No. 3 of GTB Nagar Metro Station, offering wheelchair access, stretcher elevators, and air-conditioned waiting lounges.
                </p>
                <div className="text-xs font-semibold text-cyan-700 pt-1">
                  Operating 24 Hours · 365 Days a Year
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Clock size={16} />
                <span>Centre Operating Hours</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Monday - Sunday:</span>
                  <span className="font-bold text-white">Open 24 Hours</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">All 7 Days:</span>
                  <span className="font-bold text-emerald-400">24×7 Diagnostic Service</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Emergency Scans:</span>
                  <span className="font-bold text-white">Always Available</span>
                </div>
              </div>
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={14} />
                <span>Call Us Anytime: {SITE_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Qualitative Trust Highlights */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">30+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Years of Clinical Excellence</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">24×7</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Emergency Diagnostic Service</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">150+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Specialized Tests & Scans</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">Gate 3</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">GTB Nagar Metro Accessibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Guidelines Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div>
            <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">
              Before Your Visit
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Patient Guidelines for Scans and Tests
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Follow these simple recommendations to ensure a smooth, prompt diagnostic experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE_INFO.patientGuidelines.map((g, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                <CheckCircle2 size={18} className="text-cyan-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{g}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Have questions regarding scan preparations or fasting hours?
            </span>
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1.5"
            >
              <Phone size={14} />
              <span>Call Our Helpdesk: {SITE_INFO.displayPhone}</span>
            </a>
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
