import React, { useState, useEffect } from 'react';
import { LaSolidaridadSeal, QuillIcon } from './ArchivalVisuals';

interface HistoricalPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  provenance?: string;
  aspectRatio?: '3:4' | '4:3' | '16:9' | '1:1' | 'auto';
  className?: string;
  enableZoom?: boolean;
}

export const HistoricalPhoto: React.FC<HistoricalPhotoProps> = ({
  src,
  alt,
  caption,
  date,
  provenance,
  aspectRatio = '3:4',
  className = '',
  enableZoom = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const aspectClass =
    aspectRatio === '3:4'
      ? 'aspect-[3/4]'
      : aspectRatio === '4:3'
      ? 'aspect-[4/3]'
      : aspectRatio === '16:9'
      ? 'aspect-[16/9]'
      : aspectRatio === '1:1'
      ? 'aspect-square'
      : '';

  return (
    <>
      <figure
        className={`group relative overflow-hidden rounded-xs border border-stone-300 bg-[#F4EFE6] p-2 shadow-2xs transition-all hover:border-amber-900/50 ${className}`}
      >
        <div
          className={`relative w-full overflow-hidden bg-[#EAE2D2] rounded-2xs ${aspectClass} ${
            enableZoom && !hasError ? 'cursor-zoom-in' : ''
          }`}
          onClick={() => {
            if (enableZoom && !hasError && !isLoading) {
              setIsLightboxOpen(true);
            }
          }}
        >
          {/* Shimmer loading state */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#EAE2D2] text-stone-500 animate-pulse">
              <span className="font-editorial text-xs italic">Loading Archival Plate...</span>
            </div>
          )}

          {!hasError ? (
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setHasError(true);
                setIsLoading(false);
              }}
              className={`h-full w-full object-cover sepia-[0.25] contrast-[1.05] brightness-[0.98] transition-all duration-300 group-hover:sepia-0 group-hover:scale-[1.02] ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />
          ) : (
            /* Styled CSS/SVG Fallback Plate (Zero broken images guaranteed) */
            <div className="h-full w-full flex flex-col items-center justify-center p-4 text-center bg-[#F1EAE0] border border-dashed border-stone-400">
              <div className="w-12 h-12 rounded-full border border-amber-900/40 bg-amber-100/50 flex items-center justify-center text-amber-950 mb-2">
                <QuillIcon className="w-6 h-6" />
              </div>
              <span className="font-cinzel text-xs font-bold text-stone-900 uppercase tracking-wider block">
                {alt}
              </span>
              <span className="font-editorial text-[11px] italic text-stone-600 mt-0.5">
                Fototeca Histórica · Madrid &amp; Manila (1889)
              </span>
            </div>
          )}

          {/* Zoom hint overlay */}
          {enableZoom && !hasError && !isLoading && (
            <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-[#FAF7F0]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-cinzel font-semibold uppercase tracking-wider text-stone-900 rounded-xs shadow-xs">
                Inspect Plate
              </span>
            </div>
          )}
        </div>

        {/* Caption */}
        {(caption || date) && (
          <figcaption className="mt-2 px-1 text-left">
            {caption && (
              <p className="font-editorial text-xs text-stone-800 leading-snug font-medium">
                {caption}
              </p>
            )}
            <div className="flex items-center justify-between text-[11px] text-stone-500 font-serif italic mt-0.5">
              <span>{date || 'c. 1884–1896'}</span>
              <span>{provenance || 'Archivo Histórico'}</span>
            </div>
          </figcaption>
        )}
      </figure>

      {/* Lightbox / Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F0] border-2 border-stone-800 rounded-sm p-4 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <LaSolidaridadSeal className="w-8 h-8" />
                <div>
                  <span className="font-cinzel text-xs uppercase tracking-widest text-stone-500 block">
                    Fototeca del Movimiento de Propaganda
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900">
                    {alt}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-3 py-1 bg-[#EAE2D2] hover:bg-[#DED4BF] text-stone-800 font-cinzel text-xs font-bold uppercase rounded-xs transition-colors cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>

            <div className="flex justify-center bg-[#E5DDCB] p-2 sm:p-4 rounded-xs border border-stone-300">
              <img
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] w-auto object-contain rounded-xs shadow-md sepia-[0.15]"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-stone-300 flex flex-wrap items-center justify-between text-xs text-stone-700">
              <div>
                <p className="font-editorial text-sm sm:text-base text-stone-900 font-medium">
                  {caption || alt}
                </p>
                <p className="font-serif italic text-stone-600 mt-0.5">
                  Provenance: {provenance || 'Biblioteca Nacional de España / Archivo Nacional de Filipinas'}
                </p>
              </div>
              <span className="font-cinzel text-xs font-bold text-amber-950 uppercase mt-2 sm:mt-0">
                {date || 'Siglo XIX'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
