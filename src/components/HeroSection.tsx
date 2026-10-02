import React from 'react';
import { LaSolidaridadSeal, VintageFleuron } from './ArchivalVisuals';
import { HistoricalPhoto } from './HistoricalPhoto';

interface HeroSectionProps {
  onExploreBroadsheets: () => void;
  onExploreIlustrados: () => void;
  onExploreDemands: () => void;
  onExploreGallery?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreBroadsheets,
  onExploreIlustrados,
  onExploreDemands,
  onExploreGallery,
}) => {
  return (
    <section className="relative border-b border-stone-300 bg-[#FAF7F0] pt-8 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Editorial Broadsheet Masthead Header */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Newspaper Issue Details Top Strip */}
        <div className="flex flex-wrap items-center justify-between border-t-2 border-b border-stone-800/80 py-1.5 px-3 text-xs uppercase tracking-widest text-stone-700 font-cinzel">
          <span>AÑO I · NÚM. 1</span>
          <span className="hidden sm:inline">REDACCIÓN Y ADMINISTRACIÓN: PLAZA DEL BUENSUCESO, 5, 1.º</span>
          <span>BARCELONA, 15 DE FEBRERO DE 1889</span>
        </div>

        {/* Primary Masthead Title */}
        <div className="py-6 sm:py-8 flex flex-col items-center">
          <div className="flex items-center justify-center gap-6 mb-2">
            <span className="hidden md:block w-16 h-px bg-stone-400"></span>
            <LaSolidaridadSeal className="w-14 h-14 md:w-20 md:h-20" />
            <span className="hidden md:block w-16 h-px bg-stone-400"></span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1F1D1A] uppercase">
            LA SOLIDARIDAD
          </h1>
          
          <p className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-stone-800 uppercase mt-1 font-semibold">
            QUINCENARIO DEMOCRÁTICO
          </p>

          <p className="font-editorial italic text-stone-700 text-lg sm:text-xl max-w-2xl mx-auto mt-3 leading-relaxed">
            Organ of the Filipino Propaganda Movement in Spain: Dr. José Rizal, Marcelo H. del Pilar, Graciano López Jaena, and the peaceful struggle for civil liberty, parliamentary representation, and national self-determination.
          </p>
        </div>

        {/* Newspaper Bottom Rules */}
        <div className="border-t border-b-2 border-stone-800/80 py-2 px-3 flex flex-wrap items-center justify-between text-xs text-stone-700 font-serif">
          <span>PRECIOS DE SUSCRIPCIÓN: España, trimestre 1 peseta · Extranjero y Ultramar, 1,25 pesetas</span>
          <span className="hidden md:inline italic">Las comunicaciones y remitidos se dirigirán al Administrador</span>
          <span>NÚMERO SUELTO: 20 CÉNTIMOS</span>
        </div>
      </div>

      {/* Hero Narrative & Quick Operational Metrics */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Historical Summary */}
        <div className="lg:col-span-7 space-y-4 text-stone-800">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span>Historical Exhibition</span>
            <span aria-hidden="true">·</span>
            <span>Kilusang Propaganda (1872–1892)</span>
            <span aria-hidden="true">·</span>
            <span>Barcelona &amp; Madrid</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold leading-snug text-stone-900 text-balance">
            The Pen Over The Sword: How a circle of expatriate students and writers awakened an archipelago.
          </h2>

          <p className="font-prose text-base leading-relaxed text-stone-700 drop-cap">
            Sparked by the unjust execution of Fathers Gomez, Burgos, and Zamora in 1872, the young Filipino intelligentsia—known as the <em className="text-stone-950 font-medium">Ilustrados</em>—embarked on an unprecedented campaign across European capitals. Armed with movable type, satire, historical scholarship, and eloquent speeches, they dismantled racial stereotypes and confronted monastic supremacy (<em className="text-amber-950 italic">Frailocracia</em>), demanding constitutional equality for the Filipino people.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreBroadsheets}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-cinzel font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer shadow-xs"
            >
              Read Archival Issues
            </button>
            <button
              onClick={onExploreIlustrados}
              className="px-5 py-2.5 bg-[#EAE3D2] hover:bg-[#DDD4BF] text-stone-900 border border-stone-400 text-xs font-cinzel font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
            >
              Meet The Ilustrados
            </button>
            {onExploreGallery && (
              <button
                onClick={onExploreGallery}
                className="px-4 py-2.5 bg-[#FAF7F0] hover:bg-[#F2EADA] text-amber-950 border border-amber-900/40 text-xs font-cinzel font-semibold tracking-wider uppercase rounded-xs transition-colors cursor-pointer"
              >
                Archival Pictures →
              </button>
            )}
            <button
              onClick={onExploreDemands}
              className="px-3 py-2.5 text-stone-700 hover:text-stone-950 text-xs font-cinzel tracking-wider uppercase transition-colors cursor-pointer underline underline-offset-4"
            >
              The 5 Demands
            </button>
          </div>
        </div>

        {/* Archival Photography Showcase with Lightbox Zoom */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <HistoricalPhoto
            src="/images/ilustrados_madrid.jpg"
            alt="The Ilustrados in Madrid"
            caption="The Ilustrados in Madrid (1890): José Rizal, Marcelo H. del Pilar, and Mariano Ponce in winter coats."
            date="Madrid, 1890"
            provenance="Colección Epifanio de los Santos"
            aspectRatio="16:9"
          />
          <div className="grid grid-cols-2 gap-3">
            <HistoricalPhoto
              src="/images/rizal.jpg"
              alt="Dr. José Rizal"
              caption="Dr. José Rizal at 29"
              date="Madrid, c. 1890"
              provenance="Fotografía Debas"
              aspectRatio="3:4"
            />
            <HistoricalPhoto
              src="/images/del_pilar.jpg"
              alt="Marcelo H. del Pilar"
              caption="Marcelo H. del Pilar"
              date="Spain, c. 1890"
              provenance="Archivo General"
              aspectRatio="3:4"
            />
          </div>
        </div>
      </div>

      <VintageFleuron className="mt-12" />

      {/* Quantitative Rigor Strip (Clean metadata, tabular numerals, unboxed) */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pt-2 text-center">
        <div className="border-r last:border-r-0 border-stone-300 pr-4">
          <span className="block font-cinzel text-3xl font-bold text-stone-900 tabular-nums">160</span>
          <span className="block text-xs uppercase tracking-wider text-stone-600 mt-1">Printed Editions</span>
        </div>
        <div className="border-r last:border-r-0 border-stone-300 pr-4">
          <span className="block font-cinzel text-3xl font-bold text-stone-900 tabular-nums">7</span>
          <span className="block text-xs uppercase tracking-wider text-stone-600 mt-1">Years of Crusade (1889–95)</span>
        </div>
        <div className="border-r last:border-r-0 border-stone-300 pr-4">
          <span className="block font-cinzel text-3xl font-bold text-stone-900 tabular-nums">5</span>
          <span className="block text-xs uppercase tracking-wider text-stone-600 mt-1">Core Reform Pillars</span>
        </div>
        <div>
          <span className="block font-cinzel text-3xl font-bold text-stone-900 tabular-nums">8+</span>
          <span className="block text-xs uppercase tracking-wider text-stone-600 mt-1">Leading Expatriates</span>
        </div>
      </div>
    </section>
  );
};

