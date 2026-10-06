import React from 'react';
import {
  Calendar,
  Phone,
  Clock,
  Shield,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { ServiceDetail, SERVICES_LIST } from '../data/servicesData.ts';
import { SITE_INFO } from '../data/siteData.ts';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const otherServices = SERVICES_LIST.filter((s) => s.slug !== service.slug);

  return (
    <div className="space-y-16 lg:space-y-20 py-6">
      {/* 1. Breadcrumbs & Hero Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-10 lg:py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-900 transition-colors">
              Home
            </button>
            <ChevronRight size={12} />
            <button onClick={() => onNavigate('/services')} className="hover:text-slate-900 transition-colors">
              Services
            </button>
            <ChevronRight size={12} />
            <span className="text-cyan-800 font-semibold">{service.name}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-0.5 bg-cyan-100 text-cyan-800 text-[11px] font-bold rounded-md uppercase tracking-wider">
                {service.category}
              </span>
              {service.emergencyAvailable24x7 && (
                <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-[11px] font-bold rounded-md uppercase tracking-wider">
                  24×7 Emergency Available
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {service.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <img
                src={service.heroImage}
                alt={service.name}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Overview & Clinical Importance */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Service Overview & Clinical Role
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {service.overview}
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                {service.clinicalImportance}
              </p>

              {/* Quote block */}
              {service.quote && (
                <div className="border-l-4 border-cyan-600 bg-cyan-50/60 p-5 rounded-r-2xl my-6">
                  <p className="text-slate-800 italic text-sm sm:text-base leading-relaxed">
                    “{service.quote}”
                  </p>
                  <span className="block text-xs font-semibold text-cyan-900 mt-2">
                    — Senior Radiologist & Pathology Team, Dr. Madhu MRI Path Lab
                  </span>
                </div>
              )}
            </div>

            {/* Key Technical Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Key Technical Features & Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <CheckCircle2 size={16} className="text-cyan-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Diagnostic Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Common Clinical Applications
              </h3>
              <div className="space-y-3">
                {service.commonApplications.map((app, idx) => (
                  <div key={idx} className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-sm">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                      <span>{app.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Preparation & Guidelines */}
            <div className="space-y-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-cyan-800 font-semibold text-xs uppercase tracking-wider">
                <AlertCircle size={16} />
                <span>Patient Preparation Guidelines</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                How to Prepare for Your Investigation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Following these instructions ensures the highest image clarity and test precision.
              </p>

              <div className="space-y-3 pt-2">
                {service.patientPreparation.map((prep, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{prep.step}</h5>
                      <p className="text-xs text-slate-600 mt-0.5">{prep.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery images */}
            {service.galleryImages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Equipment & Diagnostic Views
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.galleryImages.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-2.5 bg-white text-[11px] text-slate-600 line-clamp-2">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related investigations */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">
                Related Investigations Often Recommended
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.relatedInvestigations.map((rel, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1">
                    <h5 className="font-bold text-slate-900 text-xs">{rel.title}</h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{rel.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Booking / Quick Action Card */}
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl space-y-5 shadow-xl border border-slate-800">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                  Schedule Investigation
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Book {service.shortName}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Priority scheduling at 34–36 Mall Road, Near GTB Nagar Metro Gate 3.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 py-3 border-y border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Prescription:</span>
                  <span className="font-semibold text-white">
                    {service.prescriptionRequired ? 'Doctor Referral Required' : 'Direct Walk-In Allowed'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold text-white">{service.typicalDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Availability:</span>
                  <span className="font-semibold text-emerald-400">
                    {service.emergencyAvailable24x7 ? '24×7 Round-The-Clock' : 'Scheduled & Walk-In'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Reports:</span>
                  <span className="font-semibold text-white">Digital PDF + Printed Copy</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenAppointmentModal(service.slug)}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar size={15} />
                  <span>Request Appointment</span>
                </button>

                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Phone size={15} />
                  <span>Call Emergency: {SITE_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Other Services Navigation Widget */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                All Diagnostic Services
              </h4>
              <div className="space-y-1">
                {otherServices.map((other) => (
                  <button
                    key={other.slug}
                    onClick={() => onNavigate(`/${other.slug}`)}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-cyan-800 hover:bg-cyan-50 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <span>{other.name}</span>
                    <ChevronRight size={13} className="text-slate-400 group-hover:text-cyan-700" />
                  </button>
                ))}
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-cyan-800 font-bold uppercase tracking-wider">
                <Clock size={16} />
                <span>Operating Timings</span>
              </div>
              <p className="text-slate-600">
                Monday - Sunday: Open 24 Hours. All days 24×7 service available for emergency diagnostics.
              </p>
              <div className="pt-2 text-slate-700 font-medium">
                Location: 34–36, Mall Road, Near GTB Nagar Metro Station (Gate No. 3), New Delhi - 110033.
              </div>
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
