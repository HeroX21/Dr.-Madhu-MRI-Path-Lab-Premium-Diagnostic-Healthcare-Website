import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
  Activity,
  Image as ImageIcon
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData.ts';
import { SectionHeader } from '../components/SectionHeader.tsx';
import { EmergencyCallout } from '../components/EmergencyCallout.tsx';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onOpenAppointmentModal: (service?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Facilities & Machines' },
    { id: 'mri-ct', label: 'MRI & CT Imaging' },
    { id: 'radiology', label: 'Ultrasound & X-Ray' },
    { id: 'pathology', label: 'Pathology Laboratory' },
    { id: 'facility', label: 'Centre & Patient Care' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedFilter === 'all' ? true : item.category === selectedFilter
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <div className="space-y-16 lg:space-y-24 py-6">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-800 tracking-wider uppercase">
              <span>Facility & Technology Tour</span>
              <span>·</span>
              <span>Dr. Madhu MRI Path Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Diagnostic Imaging & Facility Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our modern diagnostic infrastructure, high-precision scanning bays, automated clinical pathology testing analyzers, and patient care suites in North Delhi.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === f.id
                    ? 'bg-cyan-700 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 backdrop-blur-md rounded-full text-slate-900 shadow-md">
                    <Maximize2 size={18} />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold rounded-md shadow-sm border border-slate-200/50">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-cyan-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-cyan-700 flex items-center gap-1">
                  <span>Click to view full image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                  {filteredItems[activeLightboxIndex].categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[60vh] w-auto object-contain mx-auto"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredItems.length : null
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 bg-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <p className="max-w-xl leading-relaxed">
                {filteredItems[activeLightboxIndex].description}
              </p>
              <button
                onClick={() => {
                  setActiveLightboxIndex(null);
                  onOpenAppointmentModal();
                }}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shrink-0"
              >
                Schedule Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyCallout onNavigate={onNavigate} />
      </section>
    </div>
  );
};
