import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  FileText,
  Phone,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PREVENTIVE_PACKAGES, SITE_INFO, DiagnosticPackage } from '../data/siteData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface PreventiveHealthPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const PreventiveHealthPage: React.FC<PreventiveHealthPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<DiagnosticPackage>(PREVENTIVE_PACKAGES[1]); // default Executive

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>Preventive Healthcare & Early Detection</span>
              <span>·</span>
              <span>Dr. Madhu MRI Path Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Preventive Health Checkups
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Prevention is better than cure. Our tailored checkups detect asymptomatic risk factors early — so you can live longer, healthier, and with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Package Selector Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Tailored Wellness Packages"
          title="Select the Ideal Package for Your Age & Lifestyle"
          subtitle="All packages include detailed blood profiles, organ evaluations, same-day digital reporting, and doctor summary."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVENTIVE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-cyan-600 shadow-xl ring-2 ring-cyan-600/20 relative'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-cyan-700 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                    Recommended Choice
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                    <div className="text-2xl font-black text-cyan-800">₹{pkg.price}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 font-medium">
                    <span>{pkg.testsCount}</span>
                    <span>·</span>
                    <span>{pkg.reportTurnaround}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-800 block">Ideal For:</span>
                  <p>{pkg.idealFor}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Parameters Included:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onOpenAppointmentModal(pkg.id)}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                    pkg.popular
                      ? 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-md shadow-cyan-700/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Book Package Now (₹{pkg.price})
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-slate-500">
                    {pkg.fastingRequired
                      ? `Requires ${pkg.fastingHours} hrs overnight fasting`
                      : 'No fasting required'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Preventive Screening Matters */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            light
            kicker="Clinical Value"
            title="Why Regular Health Checkups Save Lives & Money"
            subtitle="Most chronic conditions, including hypertension, early diabetes, and fatty liver disease, remain completely silent until late stages."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-base font-bold text-white">Silent Condition Reversal</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pre-diabetes and early fatty liver steatosis can often be reversed with lifestyle interventions when caught in baseline blood and ultrasound tests.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-base font-bold text-white">Same-Day Digital Results</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Enjoy hassle-free same-day digital report delivery directly to your phone. Clear reference ranges make it easy for your physician to consult.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-base font-bold text-white">Doorstep Home Collection</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Elderly family members can opt for morning home sample collection right at their doorstep anywhere across North Delhi.
              </p>
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
