import React, { useState } from 'react';
import {
  Search,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Shield,
  Filter,
  AlertCircle
} from 'lucide-react';
import { SERVICES_LIST, ServiceDetail } from '../data/servicesData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'Advanced Imaging', label: 'Advanced MRI & CT' },
    { id: 'Radiology', label: 'Ultrasound, X-Ray & Mammography' },
    { id: 'Pathology', label: 'Pathology & Blood Tests' },
    { id: 'Specialized', label: 'Emergency, FibroScan & Referrals' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.commonApplications.some((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>Comprehensive Diagnostic Directory</span>
              <span>·</span>
              <span>Dr. Madhu MRI Path Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Diagnostic Imaging & Pathology Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our full spectrum of specialized diagnostic departments equipped with modern equipment, low-dose protocols, and certified radiologist/pathologist oversight.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tests (e.g. brain MRI, liver, chest CT, ultrasound)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white"
              />
            </div>

            {/* Category Segmented Control */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl space-y-4">
            <AlertCircle size={40} className="text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No diagnostic services found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No services matched your query "{searchQuery}". Please try adjusting your search terms or view our complete service directory.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {service.emergencyAvailable24x7 && (
                      <span className="px-2.5 py-1 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold rounded-md shadow-sm">
                        24×7 Emergency
                      </span>
                    )}
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold rounded-md shadow-sm border border-slate-200">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-xs text-cyan-700 font-semibold">{service.tagline}</p>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed pt-1">
                      {service.overview}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Common Applications:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {service.commonApplications.slice(0, 3).map((app, i) => (
                        <li key={i} className="flex items-start gap-1.5 truncate">
                          <CheckCircle2 size={13} className="text-cyan-700 shrink-0 mt-0.5" />
                          <span className="truncate">{app.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => onNavigate(`/${service.slug}`)}
                      className="flex-1 py-2.5 text-xs font-semibold text-cyan-800 bg-cyan-50 hover:bg-cyan-100 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Full Service Details</span>
                      <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={() => onOpenAppointmentModal(service.slug)}
                      className="px-4 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl transition-colors shadow-sm"
                    >
                      Book Test
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Emergency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyCallout onNavigate={onNavigate} />
      </section>
    </div>
  );
};
