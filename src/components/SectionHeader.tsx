import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {kicker && (
        <div className="flex items-center gap-2 mb-2 justify-start font-medium text-xs tracking-wider uppercase">
          {align === 'center' && <span className="h-px w-6 bg-cyan-500 inline-block"></span>}
          <span className={light ? 'text-cyan-400' : 'text-cyan-700'}>{kicker}</span>
          {align === 'center' && <span className="h-px w-6 bg-cyan-500 inline-block"></span>}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
