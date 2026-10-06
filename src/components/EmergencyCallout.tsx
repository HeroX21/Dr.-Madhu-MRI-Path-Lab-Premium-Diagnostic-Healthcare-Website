import React from 'react';
import { Phone, Clock, AlertCircle, ArrowRight, MapPin } from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';

interface EmergencyCalloutProps {
  onBookClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const EmergencyCallout: React.FC<EmergencyCalloutProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-900 border-l-4 border-red-500 text-white p-6 sm:p-8 rounded-2xl shadow-xl overflow-hidden relative">
      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
        <AlertCircle size={220} className="text-red-400" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-3 text-red-400 text-xs font-semibold tracking-wider uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span>24×7 Emergency Diagnostic Service</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">Open Day & Night</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Need Immediate Diagnostic Scans or Urgent Blood Tests?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Trauma CT, emergency brain MRI, cardiac Troponin I, and urgent abdominal sonography available round-the-clock at our GTB Nagar centre. No appointment required for medical emergencies.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-cyan-400" />
              Near GTB Nagar Metro (Gate 3), North Delhi
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-cyan-400" />
              Round-The-Clock Radiologist On-Call
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center shrink-0">
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-red-600/30"
          >
            <Phone size={18} />
            <span>Emergency Call: {SITE_INFO.displayPhone}</span>
          </a>

          {onNavigate && (
            <button
              onClick={() => onNavigate('/emergency-services')}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-colors border border-slate-700"
            >
              <span>Emergency Protocols</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
