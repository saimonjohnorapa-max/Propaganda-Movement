import React, { useState } from 'react';
import { ILUSTRADOS, Ilustrado } from '../data/propagandaData';
import { QuillIcon, VintageFleuron } from './ArchivalVisuals';
import { HistoricalPhoto } from './HistoricalPhoto';

export const IlustradosDossier: React.FC = () => {
  const [selectedIlustradoId, setSelectedIlustradoId] = useState<string>(ILUSTRADOS[0].id);
  const [filterPenNames, setFilterPenNames] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const currentIlustrado: Ilustrado =
    ILUSTRADOS.find((i) => i.id === selectedIlustradoId) || ILUSTRADOS[0];

  const filteredIlustrados = ILUSTRADOS.filter((il) => {
    const matchesSearch =
      il.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      il.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      il.penNames.some(
        (pn) =>
          pn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pn.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Masthead */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Los Ilustrados</span>
          <span aria-hidden="true">·</span>
          <span>The Filipino Reformist Circle</span>
          <span aria-hidden="true">·</span>
          <span>Nom de Plume Decipherer</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          Dossier of the Propagandists
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          Young scholars, medical doctors, lawyers, artists, and scientists who wielded European education, satire, and the printing press to challenge Spanish colonial dominion.
        </p>
      </div>

      {/* Controls & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-[#F5EFE3] p-4 border border-stone-300 rounded-sm">
        <div className="w-full sm:w-72">
          <label htmlFor="search-ilustrados" className="sr-only">Search by name or pseudonym</label>
          <input
            id="search-ilustrados"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, pen name (e.g. Plaridel)..."
            className="w-full text-xs font-sans px-3 py-2 bg-[#FAF7F0] border border-stone-300 rounded-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-amber-900"
          />
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="font-cinzel text-stone-700 uppercase font-semibold">Decipher Mode:</span>
          <button
            onClick={() => setFilterPenNames(!filterPenNames)}
            className={`px-3 py-1.5 rounded-xs border transition-colors cursor-pointer ${
              filterPenNames
                ? 'bg-amber-950 text-amber-50 border-amber-950 font-bold'
                : 'bg-[#FAF7F0] text-stone-800 border-stone-300 hover:bg-[#F0E8D9]'
            }`}
          >
            {filterPenNames ? '✓ Revealing Secret Pseudonyms' : 'Show Pen-Names &amp; Codes'}
          </button>
        </div>
      </div>

      {/* Main Grid: Directory on Left, Detailed Archival Dossier on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Ilustrados Selectable Cards */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
          {filteredIlustrados.map((item) => {
            const isSelected = item.id === currentIlustrado.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIlustradoId(item.id)}
                className={`w-full text-left p-3 rounded-sm border transition-all cursor-pointer flex gap-3 items-center ${
                  isSelected
                    ? 'bg-[#EAE0CF] border-amber-900/70 shadow-xs'
                    : 'bg-[#FAF7F0] border-stone-300 hover:bg-[#F2EADA]'
                }`}
              >
                {/* Small thumbnail avatar */}
                <div className="w-12 h-14 shrink-0 overflow-hidden rounded-2xs border border-stone-400 bg-stone-200">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover sepia-[0.25]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-cinzel font-bold text-xs text-stone-600">
                      {item.name.slice(0, 2)}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span className="font-serif">
                      {item.birthYear} — {item.deathYear}
                    </span>
                    <span className="truncate">{item.birthPlace.split(',')[0]}</span>
                  </div>
                  
                  <h3 className="font-cinzel text-xs sm:text-sm font-bold text-stone-900 truncate mt-0.5">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-amber-950 font-serif italic truncate">
                    {item.title}
                  </p>

                  {/* Pen names tags */}
                  {item.penNames.length > 0 && (
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-500 truncate">
                      <span className="font-cinzel uppercase font-semibold">Pen:</span>
                      <span className={filterPenNames ? 'font-bold text-red-950 underline' : 'text-stone-700'}>
                        {item.penNames.map((p) => p.name).join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Primary Dossier Sheet with Archival Portrait */}
        <div className="lg:col-span-8 bg-[#FAF7F0] border border-stone-300 rounded-sm p-6 sm:p-8 shadow-xs">
          {/* Header of Dossier with Large Portrait */}
          <div className="border-b border-stone-300 pb-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-8 order-2 sm:order-1">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <span className="font-cinzel uppercase tracking-wider">
                  Expediente Biográfico e Ideológico
                </span>
                <span className="font-serif italic">
                  {currentIlustrado.birthPlace} · {currentIlustrado.birthYear}–{currentIlustrado.deathYear}
                </span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
                {currentIlustrado.name}
              </h2>
              <p className="font-editorial text-lg text-amber-950 italic mt-0.5">
                {currentIlustrado.title}
              </p>
              <p className="text-xs font-medium text-stone-700 uppercase tracking-wider font-cinzel mt-1">
                Role: {currentIlustrado.role}
              </p>

              {/* Bio summary in header */}
              <p className="font-prose text-xs sm:text-sm text-stone-700 mt-3 leading-relaxed">
                {currentIlustrado.bio}
              </p>
            </div>

            {/* Portrait Plate */}
            <div className="sm:col-span-4 order-1 sm:order-2 flex justify-center sm:justify-end">
              <div className="w-40 sm:w-full max-w-[200px]">
                {currentIlustrado.imageUrl ? (
                  <HistoricalPhoto
                    src={currentIlustrado.imageUrl}
                    alt={currentIlustrado.name}
                    caption={currentIlustrado.photoCaption || currentIlustrado.name}
                    date={`c. ${currentIlustrado.birthYear + 30}`}
                    provenance="Archivo Histórico"
                    aspectRatio="3:4"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-[#EAE2D2] border border-stone-400 flex items-center justify-center p-3 text-center">
                    <span className="font-cinzel text-xs font-bold text-stone-700">
                      {currentIlustrado.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pen-Names Decoder Deep Dive */}
          <div className="my-5 bg-[#F4EFE6] border border-stone-300 p-4 rounded-xs">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
              <QuillIcon className="w-4 h-4" />
              <span>Decrypted Pseudonyms &amp; Underground Codes</span>
            </h4>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentIlustrado.penNames.map((pn, idx) => (
                <div key={idx} className="bg-[#FAF7F0] border border-stone-300/80 p-3 rounded-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel font-bold text-sm text-stone-900">
                      "{pn.name}"
                    </span>
                    <span className="text-[11px] font-serif italic text-stone-500">
                      {pn.translation}
                    </span>
                  </div>
                  <p className="text-xs font-prose text-stone-700 mt-1 leading-normal">
                    {pn.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideology Section */}
          <div className="space-y-4 text-stone-800">
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                Political Philosophy &amp; Reform Stance
              </h4>
              <p className="font-prose text-sm sm:text-base leading-relaxed text-stone-800">
                {currentIlustrado.ideology}
              </p>
            </div>
          </div>

          {/* Academic Pedigree / Universities */}
          <div className="mt-6 pt-5 border-t border-stone-300">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              Academic Formation (Manila &amp; Europe)
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif text-stone-700">
              {currentIlustrado.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#F7F2E8] p-2 rounded-xs border border-stone-200">
                  <span className="text-amber-900 font-bold select-none">§</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Masterpieces & Works */}
          <div className="mt-6 pt-5 border-t border-stone-300">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
              Principal Works, Treatises &amp; Canvases
            </h4>
            <div className="space-y-3">
              {currentIlustrado.keyWorks.map((work, idx) => (
                <div key={idx} className="bg-[#FAF7F0] border-l-2 border-amber-900 pl-3 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-editorial text-base font-bold text-stone-900">
                      {work.title}
                    </span>
                    <span className="text-xs text-stone-500 font-serif">
                      {work.year} · {work.medium}
                    </span>
                  </div>
                  <p className="font-prose text-xs text-stone-700 mt-0.5 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Defining Quote Pull-Quote */}
          <div className="mt-8 border-t border-b border-stone-300 py-5 text-center">
            <blockquote className="font-editorial italic text-lg sm:text-xl text-stone-900 max-w-xl mx-auto leading-relaxed">
              "{currentIlustrado.quote}"
            </blockquote>
            <cite className="block text-xs font-cinzel tracking-wider uppercase text-amber-950 font-semibold mt-2 not-italic">
              — {currentIlustrado.quoteContext}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
