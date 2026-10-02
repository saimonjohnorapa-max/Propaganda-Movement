import React from 'react';
import { LaSolidaridadSeal } from './ArchivalVisuals';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-stone-300 bg-[#F4EFE6] text-stone-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Brand & Mission */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-3">
            <LaSolidaridadSeal className="w-10 h-10" />
            <span className="font-cinzel text-lg font-bold text-stone-900 tracking-wider">
              LA SOLIDARIDAD
            </span>
          </div>
          <p className="font-editorial italic text-stone-700 text-sm max-w-sm leading-relaxed">
            "Genius knows no country; it blossoms everywhere. Genius is like light and air, the patrimony of all humanity."
          </p>
          <div className="text-xs text-stone-600 font-serif">
            Dedicated to the memory of Dr. José Rizal, Marcelo H. del Pilar, Graciano López Jaena, and the Filipino Ilustrados in exile (1872–1896).
          </div>
        </div>

        {/* Curatorial Navigation */}
        <div className="md:col-span-4 space-y-2 text-xs">
          <span className="font-cinzel font-bold uppercase tracking-wider text-stone-900 block mb-2">
            Archival Sections
          </span>
          <ul className="space-y-1.5 font-cinzel">
            <li>
              <button
                onClick={() => onSelectTab('overview')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                Movement Overview &amp; Demands
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('broadsheet')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                Primary Broadsheets (Dual Translations)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('ilustrados')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                Ilustrados Dossier &amp; Pen-Names
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('gallery')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                Archival Picture Gallery (Fototeca)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('timeline')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                Historical Chronology (1872–1896)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('simulator')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                The Printing Press Simulator
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('lexicon')}
                className="hover:text-amber-950 transition-colors cursor-pointer"
              >
                Colonial Lexicon &amp; Knowledge Exam
              </button>
            </li>
          </ul>
        </div>

        {/* Historical Colophon */}
        <div className="md:col-span-3 space-y-2 text-xs text-stone-600 font-serif">
          <span className="font-cinzel font-bold uppercase tracking-wider text-stone-900 block mb-2">
            Historical Colophon
          </span>
          <p>
            First Issue: Feb 15, 1889 (Barcelona)<br />
            Final Issue: Nov 15, 1895 (Madrid)<br />
            Total Editions: 160 Broadsheets
          </p>
          <p className="pt-2 border-t border-stone-300 text-[11px] text-stone-500">
            Educational Archive &amp; Interactive Research Experience.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-300 flex flex-wrap items-center justify-between text-xs text-stone-500 font-serif">
        <span>© Kilusang Propaganda Archival Project</span>
        <span>Barcelona · Madrid · Manila</span>
      </div>
    </footer>
  );
};
