import React from 'react';

export const LaSolidaridadSeal: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="56" stroke="#78350F" strokeWidth="2.5" strokeDasharray="3 3" />
    <circle cx="60" cy="60" r="50" stroke="#78350F" strokeWidth="1.5" />
    <circle cx="60" cy="60" r="46" stroke="#9A3412" strokeWidth="0.75" />
    
    {/* Sun rays of freedom */}
    <g transform="translate(60,60)">
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="0"
          y1="-24"
          x2="0"
          y2="-38"
          stroke="#B45309"
          strokeWidth="1.5"
          transform={`rotate(${i * 45})`}
        />
      ))}
      <circle cx="0" cy="0" r="14" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
      <path d="M-8 0 Q0 -6 8 0 Q0 6 -8 0Z" fill="#92400E" opacity="0.3" />
    </g>

    {/* Laurel Wreath */}
    <path
      d="M24 70 C22 84 36 96 60 96 C84 96 98 84 96 70"
      stroke="#78350F"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    
    {/* Crossed Quills */}
    <path d="M40 76 L80 44 M80 76 L40 44" stroke="#451A03" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const QuillIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 11.5V21h9.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

export const PrintingPressIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="1" />
    <path d="M6 11V4h12v7" />
    <path d="M8 17h8" />
    <circle cx="12" cy="7" r="1.5" />
  </svg>
);

export const VintageFleuron: React.FC<{ className?: string }> = ({ className = 'text-stone-400' }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
    <span className="h-px bg-stone-300 w-16 md:w-24"></span>
    <span className="font-editorial text-xl select-none text-stone-600">❦</span>
    <span className="h-px bg-stone-300 w-16 md:w-24"></span>
  </div>
);

export const ArchivalEngravingCard: React.FC<{
  title: string;
  subtitle: string;
  theme: 'rizal' | 'press' | 'madrid' | 'sol';
  className?: string;
}> = ({ title, subtitle, theme, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-md border border-stone-300/80 bg-[#F4EFE6] p-6 shadow-xs ${className}`}>
      {/* Background vintage line etchings */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#78350F 0.75px, transparent 0.75px), radial-gradient(#78350F 0.75px, #F4EFE6 0.75px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between border-b border-stone-300 pb-3">
          <span className="font-cinzel text-xs tracking-widest uppercase text-stone-600">
            {theme === 'rizal' && 'ARCHIVO BIOGRÁFICO'}
            {theme === 'press' && 'IMPRENTA BARCELONA / MADRID'}
            {theme === 'madrid' && 'COLONIA FILIPINA EN EUROPA'}
            {theme === 'sol' && 'ÓRGANO QUINCENAL DEMOCRÁTICO'}
          </span>
          <span className="text-xs text-amber-900 font-editorial italic font-medium">1889 — 1895</span>
        </div>

        <div className="py-6 my-auto">
          <div className="w-12 h-12 mb-3 mx-auto flex items-center justify-center rounded-full bg-amber-100/60 border border-amber-800/30 text-amber-900">
            {theme === 'rizal' && <QuillIcon className="w-6 h-6" />}
            {theme === 'press' && <PrintingPressIcon className="w-6 h-6" />}
            {theme === 'madrid' && <span className="font-editorial font-bold text-lg">M</span>}
            {theme === 'sol' && <LaSolidaridadSeal className="w-8 h-8" />}
          </div>
          <h4 className="font-cinzel text-center text-lg font-bold text-stone-900 tracking-tight leading-snug">
            {title}
          </h4>
          <p className="font-prose text-center text-sm text-stone-700 italic mt-1.5 max-w-xs mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="border-t border-stone-300 pt-2 flex items-center justify-between text-xs text-stone-500">
          <span>Kilusang Propaganda</span>
          <span>Colección Histórica</span>
        </div>
      </div>
    </div>
  );
};
