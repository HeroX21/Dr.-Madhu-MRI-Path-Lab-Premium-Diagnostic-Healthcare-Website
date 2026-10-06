import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, AlertCircle, FileText, Phone, Send } from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';
import { SERVICES_LIST } from '../data/servicesData.ts';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [selectedService, setSelectedService] = useState(defaultService || 'mri-scan');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (08:00 AM - 12:00 PM)');
  const [hasPrescription, setHasPrescription] = useState('yes');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedCode = 'DM-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const currentServiceObj = SERVICES_LIST.find((s) => s.slug === selectedService);

  const handleSendViaWhatsApp = () => {
    const serviceName = currentServiceObj?.name || selectedService;
    const msg = `*Appointment Request - Dr. Madhu MRI Path Lab*\n` +
      `Booking Ref: ${bookingRef}\n` +
      `Patient Name: ${patientName}\n` +
      `Phone: ${patientPhone}\n` +
      `Service: ${serviceName}\n` +
      `Preferred Date: ${preferredDate || 'Earliest Available'}\n` +
      `Preferred Slot: ${preferredTime}\n` +
      `Prescription Available: ${hasPrescription === 'yes' ? 'Yes' : 'No'}\n` +
      (notes ? `Notes: ${notes}\n` : '') +
      `\nPlease confirm slot availability.`;

    const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <span>{SITE_INFO.shortName}</span>
              <span>·</span>
              <span>Online Appointment Request</span>
            </div>
            <h3 id="appointment-modal-title" className="text-xl sm:text-2xl font-bold text-white">
              Schedule Diagnostic Test / Scan
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Convenient priority scheduling near GTB Nagar Metro Station (Gate 3).
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>

              <div>
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-md border border-slate-200">
                  REF: {bookingRef}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-3">
                  Appointment Request Received
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{patientName}</strong>. Our diagnostic coordination team has received your request for{' '}
                  <strong className="text-slate-900">{currentServiceObj?.name || 'Diagnostic Testing'}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-semibold text-slate-900">{patientPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-semibold text-slate-900">{preferredDate || 'Earliest Today'} ({preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-900">Mall Road, GTB Nagar Metro Gate 3</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md shadow-emerald-600/20"
                >
                  <Send size={16} />
                  <span>Send Details via WhatsApp</span>
                </button>
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors"
                >
                  <Phone size={16} />
                  <span>Call Us: {SITE_INFO.displayPhone}</span>
                </a>
              </div>

              <div>
                <button
                  onClick={handleResetAndClose}
                  className="text-xs text-slate-500 hover:text-slate-700 underline"
                >
                  Close this window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Diagnostic Investigation
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white transition-all"
                  required
                >
                  <optgroup label="Advanced Imaging">
                    <option value="mri-scan">Advanced MRI Scan (Brain, Spine, Joints, Abdomen)</option>
                    <option value="ct-scan">Multi-Slice CT Scan (Head, Chest, Abdomen)</option>
                    <option value="ultrasound">Ultrasound & Color Doppler (Abdomen, Pelvis, Fetal)</option>
                    <option value="mammography">Digital Mammography (Breast Health Screening)</option>
                  </optgroup>
                  <optgroup label="Radiology & Non-Invasive">
                    <option value="xray">Digital X-Ray (Chest, Bone, Spine, Joints)</option>
                    <option value="fibroscan">FibroScan® Non-Invasive Liver Elastography</option>
                  </optgroup>
                  <optgroup label="Pathology & Laboratory">
                    <option value="pathology">Pathology Laboratory Tests (CBC, LFT, KFT, Thyroid, Lipid)</option>
                    <option value="home-collection">Pathology Home Sample Collection</option>
                  </optgroup>
                  <optgroup label="Preventive Health Checkups">
                    <option value="basic-health">Basic Health Check (₹1,499)</option>
                    <option value="executive-health">Executive Health Package (₹3,499)</option>
                    <option value="senior-citizen-gold">Senior Citizen Gold Package (₹2,999)</option>
                    <option value="diabetic-screening">Diabetic Screening Package (₹1,899)</option>
                    <option value="womens-wellness">Women’s Wellness Package (₹3,299)</option>
                    <option value="cardiac-risk">Cardiac Risk Assessment (₹2,699)</option>
                  </optgroup>
                  <optgroup label="Immediate Access">
                    <option value="emergency-services">24×7 Emergency Diagnostic Service</option>
                    <option value="walk-in-services">Walk-In Diagnostic Investigation</option>
                  </optgroup>
                </select>

                {/* Modality guidance snippet */}
                {selectedService.includes('mri') && (
                  <p className="mt-1.5 text-xs text-slate-500 flex items-center gap-1.5">
                    <AlertCircle size={13} className="text-amber-500 shrink-0" />
                    <span>Radiation-free. Bring doctor’s prescription. For contrast MRI, recent Serum Creatinine is needed.</span>
                  </p>
                )}
                {selectedService.includes('ultrasound') && (
                  <p className="mt-1.5 text-xs text-slate-500 flex items-center gap-1.5">
                    <AlertCircle size={13} className="text-amber-500 shrink-0" />
                    <span>Whole abdomen scans require 6–8 hours fasting. Pelvic scans require a full bladder.</span>
                  </p>
                )}
                {selectedService.includes('pathology') && (
                  <p className="mt-1.5 text-xs text-slate-500 flex items-center gap-1.5">
                    <AlertCircle size={13} className="text-amber-500 shrink-0" />
                    <span>Fasting blood glucose & lipid profiles require 10–12 hours overnight fasting.</span>
                  </p>
                )}
              </div>

              {/* Patient Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. Patient Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Patient Full Name *"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number (e.g. 9811084727) *"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <input
                    type="email"
                    placeholder="Email Address (for digital PDF report)"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Date & Time Window */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  3. Preferred Date & Time Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    >
                      <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                      <option value="Night / Emergency (24×7 Anytime)">Night / Emergency (24×7 Anytime)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Prescription indicator */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-cyan-700 shrink-0" />
                  <span className="text-xs font-medium text-slate-700">
                    Do you have a doctor’s prescription?
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-800">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="prescription"
                      value="yes"
                      checked={hasPrescription === 'yes'}
                      onChange={() => setHasPrescription('yes')}
                      className="text-cyan-600"
                    />
                    <span>Yes, I have it</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="prescription"
                      value="no"
                      checked={hasPrescription === 'no'}
                      onChange={() => setHasPrescription('no')}
                      className="text-cyan-600"
                    />
                    <span>No / Preventive Checkup</span>
                  </label>
                </div>
              </div>

              {/* Optional notes */}
              <div>
                <textarea
                  placeholder="Additional instructions or medical notes (optional, e.g. wheelchair assistance required, fasting completed, home collection address)"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-cyan-700/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Request...</span>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Confirm & Submit Appointment</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-slate-500">
                  Immediate emergency? Please call <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-cyan-700 font-semibold underline">{SITE_INFO.displayPhone}</a> directly.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
