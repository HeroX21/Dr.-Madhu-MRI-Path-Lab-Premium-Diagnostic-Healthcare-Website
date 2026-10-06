import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';

interface FloatingActionsProps {
  onOpenAppointmentModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenAppointmentModal,
}) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello Dr. Madhu MRI Path Lab, I would like to inquire about diagnostic scans / pathology tests.'
    );
    window.open(`https://wa.me/${SITE_INFO.phoneRaw}?text=${msg}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${SITE_INFO.phoneRaw}`;
  };

  return (
    <div className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Quick Appointment Floating Pill */}
      <button
        onClick={onOpenAppointmentModal}
        className="pointer-events-auto hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs rounded-full shadow-lg shadow-cyan-900/30 transition-all hover:scale-105 active:scale-95"
        title="Schedule Diagnostic Test"
      >
        <Calendar size={15} />
        <span>Book Appointment</span>
      </button>

      {/* WhatsApp Chat Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="pointer-events-auto w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-all hover:scale-110 active:scale-95 group relative"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="fill-white/20" />
        <span className="sr-only">Chat on WhatsApp</span>
      </button>

      {/* Emergency Call Floating Button */}
      <button
        onClick={handleCall}
        className="pointer-events-auto w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all hover:scale-110 active:scale-95 group relative"
        title="Emergency Call: 098110 84727"
        aria-label="Call Diagnostic Helpline"
      >
        <Phone size={22} />
        <span className="sr-only">Emergency Call</span>
      </button>
    </div>
  );
};
