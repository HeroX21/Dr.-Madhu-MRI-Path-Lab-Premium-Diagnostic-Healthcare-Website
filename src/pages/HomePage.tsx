import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
  Activity,
  HeartPulse,
  Sparkles,
  Zap,
  Award,
  Users,
  Search,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { SITE_INFO, PREVENTIVE_PACKAGES } from '../data/siteData.ts';
import { SERVICES_LIST } from '../data/servicesData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [activeTab, setActiveTab] = useState<'mri' | 'ct' | 'usg' | 'mammo' | 'path'>('mri');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    {
      quote:
        'Excellent service and accurate reports. The staff is very polite and the centre is impeccably clean. Highly recommended for MRI and pathology tests.',
      author: 'Rakesh Kumar',
      role: 'Patient · North Delhi',
      date: 'Verified Patient',
    },
    {
      quote:
        'Open 24 hours which helped us immensely during an emergency. Quick CT scan and timely report delivered directly to our treating physician. Thank you Dr. Madhu team!',
      author: 'Priya Sharma',
      role: 'Emergency Patient · GTB Nagar',
      date: 'Verified Patient',
    },
    {
      quote:
        'Very seamless experience for whole abdomen ultrasound and routine blood checkups. Walking distance from GTB Nagar Metro Gate 3 is extremely convenient.',
      author: 'Anil Verma',
      role: 'Annual Health Check Patient',
      date: 'Verified Patient',
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                <span>North Delhi’s Premier Diagnostic Centre · 30+ Years of Excellence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Accurate, High-Precision{' '}
                <span className="text-cyan-700">Diagnostic Imaging</span> & Pathology Under One Roof
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Serving patients across Delhi NCR with advanced High-Field MRI, Multi-Slice CT, 3D/4D Ultrasound, Digital Mammography, FibroScan, and 24×7 automated pathology laboratory. Located right beside GTB Nagar Metro Station.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white font-semibold text-sm rounded-xl shadow-lg shadow-cyan-800/20 transition-all hover:-translate-y-0.5"
                >
                  <Calendar size={18} />
                  <span>Book Appointment / Scan</span>
                </button>

                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl border border-slate-300 shadow-sm transition-all hover:-translate-y-0.5"
                >
                  <Phone size={18} className="text-cyan-700" />
                  <span>Call 24×7: {SITE_INFO.displayPhone}</span>
                </a>

                <button
                  onClick={() => onNavigate('/emergency-services')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-sm rounded-xl border border-red-200 transition-colors"
                >
                  <span>24×7 Emergency</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Key Trust Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Open 24 Hours Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Same-Day Digital Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>GTB Nagar Metro Gate 3</span>
                </div>
              </div>
            </div>

            {/* Right Card / Machine Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                <img
                  src="https://medicalimagingindia.com/wp-content/uploads/2023/10/Upgrading-Your-Facility.jpg"
                  alt="Dr. Madhu MRI Path Lab Advanced Diagnostic Suite"
                  className="w-full h-72 sm:h-80 object-cover"
                />

                <div className="p-5 sm:p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">
                        North Delhi Diagnostic Hub
                      </span>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        Dr. Madhu MRI Path Lab
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-xs font-semibold">
                      24×7 Operational
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    34–36, Mall Road, Near GTB Nagar Metro Station (Gate No. 3), New Delhi - 110033. Direct access for outpatient consultations and emergency trauma admissions.
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-500">Emergency & Appointments:</span>
                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="text-cyan-700 font-bold hover:underline"
                    >
                      +91 98110 84727
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Emergency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyCallout onNavigate={onNavigate} />
      </section>

      {/* 3. Core Diagnostic Modalities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Diagnostic Modalities"
          title="Complete Medical Imaging & Pathology Services"
          subtitle="Precision investigations conducted using modern equipment under experienced radiologist and pathologist supervision."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.slice(0, 6).map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-cyan-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.heroImage}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold rounded-md shadow-sm border border-slate-200/50">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Duration: {service.typicalDuration}</span>
                    {service.emergencyAvailable24x7 && (
                      <span className="text-emerald-600 font-semibold">24×7 Available</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onNavigate(`/${service.slug}`)}
                      className="flex-1 py-2 text-xs font-semibold text-cyan-800 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Explore Details</span>
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => onOpenAppointmentModal(service.slug)}
                      className="px-3 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors"
                      title="Book Test"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all services CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md"
          >
            <span>View All Diagnostic Services & Sub-Specialities</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 4. Interactive Department Showcase (Matching source tabs) */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            kicker="Clinical Departments"
            title="Explore Our Core Diagnostic Departments"
            subtitle="Deep-dive into the technologies and clinical protocols ensuring accurate, reliable results."
          />

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab('mri')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mri'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              MRI Scans
            </button>
            <button
              onClick={() => setActiveTab('ct')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ct'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              CT Scans
            </button>
            <button
              onClick={() => setActiveTab('usg')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'usg'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Ultrasound & Doppler
            </button>
            <button
              onClick={() => setActiveTab('mammo')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mammo'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Digital Mammography
            </button>
            <button
              onClick={() => setActiveTab('path')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'path'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Pathology Laboratory
            </button>
          </div>

          {/* Tab Content Panes */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-10">
            {activeTab === 'mri' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    High-Field Diagnostic Resonance
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Advanced MRI Scan Services
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    High-resolution MRI for Brain, Spine, Joints, Abdomen, and Pelvis with contrast and non-contrast capabilities. Non-invasive and completely radiation-free, analyzed by veteran radiologists.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Non-invasive & 100% radiation-free soft tissue imaging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Expert radiologist reporting with 30+ years clinic legacy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Round-the-clock 24×7 availability for emergency neuro and stroke triage</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('mri-scan')}
                      className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
                    >
                      Book MRI Scan
                    </button>
                    <button
                      onClick={() => onNavigate('/mri-scan')}
                      className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs rounded-xl transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://www.diagnopein.com/img/BlogImages/MRI%20Pelvis.jpg"
                    alt="MRI scan suite"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl border border-slate-700 shadow-xl"
                  />
                </div>
              </div>
            )}

            {activeTab === 'ct' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    High-Speed Multi-Slice Imaging
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Multi-Slice CT Scan Services
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Ultra-fast multi-slice CT for Head, Chest (HRCT Thorax), Abdomen, Spine, and emergency trauma triage. Low-dose protocols ensure patient safety without compromising diagnostic accuracy.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>High-speed scanning completed in minutes for critical trauma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Optimized low-radiation dosage control for all body scans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>24×7 emergency scanning with immediate physician reporting</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('ct-scan')}
                      className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
                    >
                      Book CT Scan
                    </button>
                    <button
                      onClick={() => onNavigate('/ct-scan')}
                      className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs rounded-xl transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/03/ct-scan.jpg"
                    alt="CT scan suite"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl border border-slate-700 shadow-xl"
                  />
                </div>
              </div>
            )}

            {activeTab === 'usg' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Dynamic Real-Time Sonography
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Ultrasound & Color Doppler
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Detailed sonography for whole abdomen, pelvic organs, pregnancy fetal growth, thyroid, and peripheral vascular Doppler studies. Completely safe, comfortable, and radiation-free.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>High-resolution pregnancy & fetal development scans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Arterial and venous Color Doppler for blood flow assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Same-day printed report and digital copy handed over immediately</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('ultrasound')}
                      className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
                    >
                      Book Ultrasound
                    </button>
                    <button
                      onClick={() => onNavigate('/ultrasound')}
                      className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs rounded-xl transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://udmi.net/wp-content/uploads/2019/06/5M7A5352_US-Machine-and-Empty-Patient-Bed-1024x683.jpg"
                    alt="Ultrasound machine"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl border border-slate-700 shadow-xl"
                  />
                </div>
              </div>
            )}

            {activeTab === 'mammo' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Dedicated Women’s Health
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Digital Mammography
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    High-definition digital breast screening dedicated to early detection of microcalcifications and tissue anomalies. Staffed by trained female technologists in a respectful, private suite.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>High-resolution digital detector revealing microscopic calcifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Gentle compression pads engineered for patient comfort</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Standard BI-RADS categorized reports signed by expert radiologists</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('mammography')}
                      className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
                    >
                      Book Mammogram
                    </button>
                    <button
                      onClick={() => onNavigate('/mammography')}
                      className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs rounded-xl transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_enlarged/public/cgov_image/media_image/2024-07/Mammography.jpg?h=cea5cde5&itok=Pg4ek5ya"
                    alt="Mammography unit"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl border border-slate-700 shadow-xl"
                  />
                </div>
              </div>
            )}

            {activeTab === 'path' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Automated Clinical Testing
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Pathology Laboratory
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Complete hematology, biochemistry, immunology, endocrine hormone assays, and clinical pathology. Barcoded vacutainer systems ensure zero sample mix-ups. Home sample collection available across North Delhi.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Complete blood profiles (CBC, LFT, KFT, Lipids, HbA1c, Thyroid)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Convenient doorstep home sample collection available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                      <span>Rapid digital reports sent directly to your phone via WhatsApp/Email</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenAppointmentModal('pathology')}
                      className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
                    >
                      Book Blood Test
                    </button>
                    <button
                      onClick={() => onNavigate('/pathology')}
                      className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium text-xs rounded-xl transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src="https://www.sironadiagnostics.com/wp-content/uploads/2022/06/Pathology-1.jpg"
                    alt="Pathology laboratory"
                    className="w-full h-64 sm:h-80 object-cover rounded-xl border border-slate-700 shadow-xl"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Preventive Health Checkup Packages Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Preventive Health Packages"
          title="Stay Ahead with Comprehensive Health Checkups"
          subtitle="Carefully designed packages offering deep baseline screening for diabetes, cholesterol, kidney, liver, and vital organs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVENTIVE_PACKAGES.slice(0, 3).map((pkg) => (
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
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                    <div className="text-2xl font-black text-cyan-800">₹{pkg.price}</div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{pkg.testsCount} · {pkg.reportTurnaround}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Tests Included:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pkg.includes.slice(0, 5).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointmentModal(pkg.id)}
                  className={`w-full py-3 rounded-xl font-semibold text-xs transition-all ${
                    pkg.popular
                      ? 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-md shadow-cyan-700/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Book Package (₹{pkg.price})
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('/preventive-health')}
            className="text-xs sm:text-sm font-semibold text-cyan-800 hover:text-cyan-900 flex items-center gap-1.5 mx-auto hover:underline"
          >
            <span>View all customized packages (Diabetic, Senior Citizen, Women’s Wellness)</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* 6. Why Choose Dr. Madhu MRI Path Lab */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Patient Centered Excellence"
            title="Why Patients & Physicians Trust Dr. Madhu MRI Path Lab"
            subtitle="Built on three decades of diagnostic accuracy, clinical ethics, and unwavering patient care."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                <Award size={24} />
              </div>
              <h4 className="font-bold text-slate-900 text-base">30+ Years of Trust</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over three decades serving North Delhi, known for honest diagnostic interpretations and ethical medical practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Clock size={24} />
              </div>
              <h4 className="font-bold text-slate-900 text-base">24×7 Availability</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Always operational round-the-clock, 365 days a year for urgent trauma scans, strokes, and emergency pathology testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Activity size={24} />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Comprehensive Under 1 Roof</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Both advanced radiology imaging (MRI, CT, USG, X-Ray) and complete pathology lab tests seamlessly in one centre.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Prime Metro Access</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conveniently located at 34–36 Mall Road, directly beside GTB Nagar Metro Station (Gate No. 3) on the Yellow Line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials (Preserving source quotes) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Patient Feedback"
          title="What Patients Say About Our Care"
          subtitle="Real experiences from patients who visited Dr. Madhu MRI Path Lab for imaging and laboratory investigations."
        />

        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          <div className="min-h-[160px] flex flex-col justify-between space-y-6">
            <p className="text-base sm:text-xl text-slate-800 italic leading-relaxed font-normal">
              “{testimonials[testimonialIdx].quote}”
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="font-bold text-slate-900 text-base block">
                  {testimonials[testimonialIdx].author}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {testimonials[testimonialIdx].role}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Quick Appointment Form Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Direct Appointment Booking
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need a Scan or Lab Test Today?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Submit an instant appointment request. For urgent same-day slots or emergency requirements, our front desk team confirms immediately.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  Open Booking Form
                </button>
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>Call {SITE_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Centre Guidelines
              </span>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">·</span>
                  <span>Bring your doctor’s valid prescription and prior diagnostic reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">·</span>
                  <span>Confirm fasting guidelines (10–12h for blood sugar/lipids, 6–8h for USG).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">·</span>
                  <span>For acute medical emergencies, visit directly without an appointment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
