import React from 'react';
import { AlertCircle, ArrowLeft, Home, Calendar, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-16 h-16 bg-cyan-100 text-cyan-800 rounded-2xl flex items-center justify-center mx-auto">
          <AlertCircle size={36} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
            404 · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Diagnostic Page Not Located
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The link you accessed may have moved or been updated. You can return to our homepage or browse our core medical services below.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('/')}
            className="px-5 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm flex items-center gap-2"
          >
            <Home size={15} />
            <span>Return to Homepage</span>
          </button>
          <button
            onClick={() => onNavigate('/services')}
            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
          >
            <span>All Diagnostic Services</span>
          </button>
        </div>

        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          Need immediate medical assistance or emergency scan? Call 24×7:{' '}
          <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-cyan-700 font-bold underline">
            {SITE_INFO.displayPhone}
          </a>
        </div>
      </div>
    </div>
  );
};
