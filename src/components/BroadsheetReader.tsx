import React, { useState } from 'react';
import { PRIMARY_DOCUMENTS, PrimaryDocument } from '../data/documents';
import { VintageFleuron, QuillIcon } from './ArchivalVisuals';
import { HistoricalPhoto } from './HistoricalPhoto';

export const BroadsheetReader: React.FC = () => {
  const [selectedDocId, setSelectedDocId] = useState<string>(PRIMARY_DOCUMENTS[0].id);
  const [viewMode, setViewMode] = useState<'split' | 'english' | 'spanish'>('split');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const filteredDocs = PRIMARY_DOCUMENTS.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.keyThemes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const currentDoc: PrimaryDocument =
    PRIMARY_DOCUMENTS.find((d) => d.id === selectedDocId) || PRIMARY_DOCUMENTS[0];

  const handleCopyCitation = () => {
    const citation = `"${currentDoc.title}" by ${currentDoc.author} (${currentDoc.publication}, ${currentDoc.date}). Primary Source: Filipino Propaganda Movement.`;
    navigator.clipboard?.writeText(citation);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Header */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Hemeroteca Histórica</span>
          <span aria-hidden="true">·</span>
          <span>Primary Archival Sources</span>
          <span aria-hidden="true">·</span>
          <span>Dual Language Translations</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          The Pages of La Solidaridad
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          Examine the foundational dispatches, treatises, and satires that galvanized public opinion in Barcelona, Madrid, and the Philippine archipelago.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Document Catalog Index */}
        <div className="lg:col-span-4 bg-[#F5EFE3] border border-stone-300 rounded-sm p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-300 pb-2">
            <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-900">
              Document Catalog ({filteredDocs.length})
            </span>
            <span className="text-xs text-stone-500 font-serif">1884–1892</span>
          </div>

          {/* Search filter input */}
          <div>
            <label htmlFor="search-docs" className="sr-only">Search archival texts</label>
            <input
              id="search-docs"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, theme..."
              className="w-full text-xs font-sans px-3 py-2 bg-[#FAF7F0] border border-stone-300 rounded-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-amber-900"
            />
          </div>

          {/* Document list */}
          <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {filteredDocs.map((doc) => {
              const isSelected = doc.id === currentDoc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(doc.id)}
                  className={`w-full text-left p-3 rounded-xs transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#EAE1CF] border-amber-900/60 shadow-xs'
                      : 'bg-[#FAF7F0] border-stone-200/80 hover:bg-[#F0E8D9]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-serif italic">{doc.date}</span>
                    <span>{doc.city}</span>
                  </div>
                  <h3 className="font-cinzel text-sm font-bold text-stone-900 mt-1 leading-snug">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-950 font-serif mt-1">
                    <QuillIcon className="w-3.5 h-3.5" />
                    <span>{doc.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 text-[11px] text-stone-500 mt-2">
                    {doc.keyThemes.slice(0, 2).map((t, idx) => (
                      <span key={idx}>
                        {t}{idx === 0 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Stage: Newspaper Broadsheet Viewport */}
        <div className="lg:col-span-8 bg-[#FAF7F0] border border-stone-300 rounded-sm p-6 sm:p-8 shadow-xs">
          {/* Broadsheet Top Controls & Switchers */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 pb-4">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-[#EAE2D1] rounded-xs border border-stone-300 text-xs font-medium">
              <button
                onClick={() => setViewMode('split')}
                className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                  viewMode === 'split' ? 'bg-[#FAF7F0] text-stone-950 shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                Dual View
              </button>
              <button
                onClick={() => setViewMode('english')}
                className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                  viewMode === 'english' ? 'bg-[#FAF7F0] text-stone-950 shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                English Translation
              </button>
              <button
                onClick={() => setViewMode('spanish')}
                className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                  viewMode === 'spanish' ? 'bg-[#FAF7F0] text-stone-950 shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                Spanish / Tagalog Original
              </button>
            </div>

            {/* Typography & Citation Utilities */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                className="px-2.5 py-1 text-xs border border-stone-300 hover:bg-[#F0E8D9] rounded-xs text-stone-700 font-serif cursor-pointer"
                title="Toggle font size"
              >
                {fontSize === 'normal' ? 'A+' : 'A-'}
              </button>
              <button
                onClick={handleCopyCitation}
                className="px-2.5 py-1 text-xs border border-stone-300 hover:bg-[#F0E8D9] rounded-xs text-stone-800 font-cinzel cursor-pointer"
              >
                {copiedSnippet ? 'Copied Citation!' : 'Copy Citation'}
              </button>
            </div>
          </div>

          {/* Document Masthead Inside Broadsheet */}
          <div className="text-center py-6 border-b border-stone-300">
            <span className="font-cinzel text-xs uppercase tracking-widest text-stone-500">
              {currentDoc.publication} · {currentDoc.city}
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1 leading-tight">
              {currentDoc.title}
            </h2>
            <p className="font-cinzel text-xs uppercase tracking-wider text-amber-950 font-bold mt-2">
              Por: {currentDoc.author} {currentDoc.authorPenName && `(${currentDoc.authorPenName})`}
            </p>
            <p className="text-xs text-stone-500 font-serif italic mt-0.5">
              Publicado el {currentDoc.date}
            </p>
          </div>

          {/* Curatorial & Historical Context Note with Archival Facsimile Photo */}
          <div className="my-6 bg-[#F4EFE6] border border-stone-300 border-l-4 border-l-amber-900 p-4 rounded-xs">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              {currentDoc.imageUrl && (
                <div className="w-full sm:w-44 shrink-0">
                  <HistoricalPhoto
                    src={currentDoc.imageUrl}
                    alt={currentDoc.title}
                    caption={currentDoc.imageCaption || currentDoc.title}
                    date={currentDoc.date}
                    provenance={currentDoc.publication}
                    aspectRatio={currentDoc.id === 'brindis-speech' ? '16:9' : '3:4'}
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-950 block mb-1">
                  Curatorial Commentary &amp; Provenance
                </span>
                <p className="font-prose text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {currentDoc.historicalContext}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {currentDoc.keyThemes.map((theme, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#EAE2D1] text-stone-700 text-[11px] font-serif rounded-xs border border-stone-300"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Document Content View */}
          <div className="mt-6">
            {viewMode === 'split' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-300">
                {/* Spanish / Original Text */}
                <div className="pr-0 md:pr-4">
                  <div className="flex items-center justify-between border-b border-stone-300 pb-1 mb-3">
                    <span className="font-cinzel text-xs uppercase tracking-wider font-bold text-stone-600">
                      Texto Original (Español / Tagalo)
                    </span>
                    <span className="text-xs text-stone-400 font-serif">Facsímil textual</span>
                  </div>
                  <div
                    className={`font-prose text-stone-900 leading-relaxed whitespace-pre-line drop-cap ${
                      fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    }`}
                  >
                    {currentDoc.spanishExcerpt}
                  </div>
                </div>

                {/* English Annotated Translation */}
                <div className="pt-6 md:pt-0 pl-0 md:pl-4">
                  <div className="flex items-center justify-between border-b border-stone-300 pb-1 mb-3">
                    <span className="font-cinzel text-xs uppercase tracking-wider font-bold text-amber-950">
                      English Translation &amp; Annotations
                    </span>
                    <span className="text-xs text-stone-400 font-serif">Scholarly rendering</span>
                  </div>
                  <div
                    className={`font-prose text-stone-800 leading-relaxed whitespace-pre-line drop-cap ${
                      fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    }`}
                  >
                    {currentDoc.englishTranslation}
                  </div>
                </div>
              </div>
            ) : viewMode === 'english' ? (
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between border-b border-stone-300 pb-1 mb-4">
                  <span className="font-cinzel text-xs uppercase tracking-wider font-bold text-amber-950">
                    Full English Translation
                  </span>
                  <span className="text-xs text-stone-500 font-serif">Annotated Edition</span>
                </div>
                <div
                  className={`font-prose text-stone-800 leading-relaxed whitespace-pre-line drop-cap ${
                    fontSize === 'large' ? 'text-base sm:text-lg leading-loose' : 'text-sm sm:text-base leading-relaxed'
                  }`}
                >
                  {currentDoc.englishTranslation}
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between border-b border-stone-300 pb-1 mb-4">
                  <span className="font-cinzel text-xs uppercase tracking-wider font-bold text-stone-900">
                    Texto Histórico Completo
                  </span>
                  <span className="text-xs text-stone-500 font-serif">Original de Imprenta</span>
                </div>
                <div
                  className={`font-prose text-stone-900 leading-relaxed whitespace-pre-line drop-cap ${
                    fontSize === 'large' ? 'text-base sm:text-lg leading-loose' : 'text-sm sm:text-base leading-relaxed'
                  }`}
                >
                  {currentDoc.spanishExcerpt}
                </div>
              </div>
            )}
          </div>

          <VintageFleuron className="mt-8 mb-4" />

          {/* Footnote / Thematic Key Words */}
          <div className="border-t border-stone-300 pt-4 flex flex-wrap items-center justify-between text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="font-cinzel uppercase font-semibold text-stone-800">Thematic Index:</span>
              <span>{currentDoc.keyThemes.join(' · ')}</span>
            </div>
            <div className="font-serif italic">
              Archival reference: Colección La Solidaridad (Madrid–Barcelona)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
