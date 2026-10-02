import React, { useState } from 'react';
import { ARCHIVAL_GALLERY, ArchivalPhotoItem } from '../data/propagandaData';
import { HistoricalPhoto } from './HistoricalPhoto';
import { VintageFleuron, LaSolidaridadSeal } from './ArchivalVisuals';

export const ArchivalGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Pictures' },
    { id: 'portraits', label: 'Ilustrado Portraits' },
    { id: 'events', label: 'Historic Events' },
    { id: 'artworks', label: 'Artworks & Spoliarium' },
    { id: 'publications', label: 'Broadside Facsimiles' },
  ];

  const filteredPhotos = ARCHIVAL_GALLERY.filter((item: ArchivalPhotoItem) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.provenance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Masthead */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Fototeca Histórica</span>
          <span aria-hidden="true">·</span>
          <span>19th-Century Archival Plates &amp; Photographs</span>
          <span aria-hidden="true">·</span>
          <span>Madrid, Barcelona, Paris &amp; Manila</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          Archival Picture Gallery
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          Original daguerreotypes, studio portraits, historical paintings, and contemporary photographs documenting Dr. José Rizal, the Ilustrados, and the Propaganda Movement.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#F5EFE3] p-4 border border-stone-300 rounded-sm">
        {/* Category Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-cinzel uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#FAF7F0] text-stone-900 font-bold border border-stone-300 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full sm:w-64">
          <label htmlFor="search-gallery" className="sr-only">Search pictures</label>
          <input
            id="search-gallery"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, subject..."
            className="w-full text-xs font-sans px-3 py-1.5 bg-[#FAF7F0] border border-stone-300 rounded-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-amber-900"
          />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-[#FAF7F0] border border-stone-300 rounded-sm p-4 shadow-xs flex flex-col justify-between hover:border-amber-900/60 transition-colors"
          >
            <div>
              {/* Picture Frame with Zoom Lightbox */}
              <HistoricalPhoto
                src={photo.imageUrl}
                alt={photo.title}
                caption={photo.title}
                date={photo.year}
                provenance={photo.provenance}
                aspectRatio={
                  photo.category === 'artworks' || photo.id === 'ilustrados-madrid-1890' || photo.id === 'execution-rizal-bagumbayan'
                    ? '16:9'
                    : photo.category === 'publications'
                    ? '3:4'
                    : '4:3'
                }
              />

              {/* Title & Subtitle */}
              <div className="mt-3">
                <span className="font-cinzel text-[11px] uppercase tracking-widest text-amber-950 font-bold block">
                  {photo.subtitle}
                </span>
                <h3 className="font-editorial text-lg font-bold text-stone-900 mt-0.5 leading-snug">
                  {photo.title}
                </h3>
                <p className="font-prose text-xs text-stone-700 mt-1.5 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>

            {/* Historical Significance Box */}
            <div className="mt-4 pt-3 border-t border-stone-200">
              <span className="font-cinzel text-[10px] uppercase font-bold text-stone-500 block mb-0.5">
                Historical Significance
              </span>
              <p className="font-serif italic text-xs text-stone-800 leading-snug">
                "{photo.significance}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12 bg-[#FAF7F0] border border-dashed border-stone-300 rounded-sm">
          <LaSolidaridadSeal className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="font-editorial italic text-stone-600">
            No archival pictures found matching your search.
          </p>
        </div>
      )}

      <VintageFleuron className="mt-14" />
    </section>
  );
};
