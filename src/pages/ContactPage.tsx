import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Dr. Madhu MRI Path Lab,\nMy name is ${formData.name || 'Patient'}. I have an inquiry regarding: ${formData.subject || 'Diagnostic Scan / Pathology Test'}.\nPhone: ${formData.phone || 'Provided'}\nMessage: ${formData.message || 'Please assist with timings and test preparation.'}`
    );
    window.open(`https://wa.me/${SITE_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>Connect With Us 24×7</span>
              <span>·</span>
              <span>Dr. Madhu MRI Path Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact Us & Visit Our Centre
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We are here to assist you 24×7. Reach out for appointments, scan inquiries, home sample collection, or emergency diagnostic admissions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="bg-white border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-sm space-y-3 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <Phone size={26} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Call Directly</h3>
            <p className="text-xs text-slate-500">Available 24×7 for emergencies & appointments</p>
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="font-bold text-cyan-700 text-base sm:text-lg hover:underline"
            >
              {SITE_INFO.phone}
            </a>
            <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Round-the-Clock Helpline
            </span>
          </div>

          {/* Location Card */}
          <div className="bg-white border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-sm space-y-3 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <MapPin size={26} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Centre Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              34–36, Mall Road, Near GTB Nagar Metro Station (Gate No. 3), New Delhi - 110033
            </p>
            <a
              href={SITE_INFO.address.googleMapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-sm space-y-3 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <Mail size={26} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Email Inquiries</h3>
            <p className="text-xs text-slate-500">For reports, prescription scans & inquiries</p>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="font-semibold text-cyan-700 text-sm hover:underline"
            >
              {SITE_INFO.email}
            </a>
            <span className="text-[11px] text-slate-500">
              Response within 2 hours
            </span>
          </div>
        </div>
      </section>

      {/* 3. Form & Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">
                Send a Message
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Have Any Diagnostic Questions?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below and our medical reception team will contact you promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our front desk team has received your query regarding "{formData.subject || 'Diagnostic Testing'}". We will call you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md"
                  >
                    <MessageCircle size={15} />
                    <span>Also Send on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9811084727"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Investigation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Brain MRI Inquiry / Blood Test"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Test Questions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what scan or blood test you need, symptoms, or appointment timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenAppointmentModal()}
                    className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors"
                  >
                    Direct Appointment Form
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Map & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Location & Metro Route
                  </h3>
                  <p className="text-xs text-slate-500">
                    GTB Nagar Metro Station (Gate No. 3), Mall Road
                  </p>
                </div>
                <a
                  href={SITE_INFO.address.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-cyan-700 hover:text-cyan-800"
                  title="Open in Google Maps"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Map embed / visual container */}
              <div className="relative h-72 bg-slate-100">
                <iframe
                  title="Dr. Madhu MRI Path Lab Google Maps Location"
                  src="https://maps.google.com/maps?q=34-36%20Mall%20Road,%20Near%20GTB%20Nagar%20Metro%20Station%20Gate%203,%20New%20Delhi%20110033&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="p-5 bg-slate-50 space-y-2 text-xs text-slate-700">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-700" />
                  <span>How to reach:</span>
                </div>
                <p className="leading-relaxed">
                  Take the Yellow Line Metro to <strong>GTB Nagar Station</strong>. Exit via <strong>Gate No. 3</strong>. Our diagnostic centre (34–36 Mall Road) is located immediately outside, reachable in 1 minute on foot.
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="font-bold text-emerald-950 text-sm">
                  Prefer WhatsApp Chat?
                </h4>
                <p className="text-xs text-emerald-800">
                  Chat directly with our team for report queries and booking.
                </p>
              </div>
              <button
                onClick={() => {
                  const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hello Dr. Madhu MRI Path Lab, I would like to make an inquiry.')}`;
                  window.open(url, '_blank');
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm shrink-0"
              >
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Patient Guidelines Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl space-y-4">
          <h3 className="text-xl font-bold text-white">
            Important Guidelines for Visiting Patients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-3 bg-slate-800/80 rounded-xl">
              <span className="font-bold text-cyan-400 block mb-1">1. Doctor Prescription:</span>
              <span>Carry your doctor’s referral prescription and any prior imaging films/reports.</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl">
              <span className="font-bold text-cyan-400 block mb-1">2. Fasting Rules:</span>
              <span>Ensure 10–12h fasting for lipids/glucose, and 6–8h for whole abdomen ultrasounds.</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl">
              <span className="font-bold text-cyan-400 block mb-1">3. Contrast Safety:</span>
              <span>For IV contrast CT/MRI scans, please bring your recent serum creatinine test.</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl">
              <span className="font-bold text-cyan-400 block mb-1">4. Acute Emergencies:</span>
              <span>Visit directly anytime day or night — our emergency diagnostics run 24×7.</span>
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
