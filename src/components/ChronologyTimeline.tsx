import React, { useState } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/propagandaData';
import { VintageFleuron } from './ArchivalVisuals';
import { HistoricalPhoto } from './HistoricalPhoto';

export const ChronologyTimeline: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Milestones' },
    { id: 'catalyst', label: 'Catalysts & Martyrdom' },
    { id: 'publication', label: 'Publications & Broadsides' },
    { id: 'cultural', label: 'Cultural Triumphs' },
    { id: 'organization', label: 'Civic Leagues' },
    { id: 'turning-point', label: 'Critical Schisms' },
  ];

  const filteredEvents = TIMELINE_EVENTS.filter(
    (ev) => filterCategory === 'all' || ev.category === filterCategory
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Header */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Cronología Histórica</span>
          <span aria-hidden="true">·</span>
          <span>1872 to 1896</span>
          <span aria-hidden="true">·</span>
          <span>The Path of Peaceful Reform</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          Chronology of the Propaganda Movement
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          Follow the trajectory of the movement from the tragedy of the GOMBURZA martyrs to European cafes, printing presses, and the dawn of national awakening.
        </p>
      </div>

      {/* Filter Tabs (Interactive Segmented Control) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5EFE3] border border-stone-300 rounded-sm mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-3 py-1.5 text-xs font-cinzel font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
              filterCategory === cat.id
                ? 'bg-[#FAF7F0] text-stone-900 shadow-2xs font-bold border border-stone-300'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-stone-300 ml-4 sm:ml-32 pl-6 sm:pl-8 space-y-10">
        {filteredEvents.map((ev, idx) => {
          const isExpanded = selectedEventIndex === idx;

          return (
            <div key={idx} className="relative group">
              {/* Year Stamp for Desktop on the left side of the line */}
              <div className="hidden sm:block absolute -left-40 top-0.5 text-right w-28">
                <span className="font-cinzel text-xl font-bold text-stone-900 block tabular-nums">
                  {ev.year}
                </span>
                <span className="text-[11px] font-serif text-stone-500 block">
                  {ev.monthDay || ''}
                </span>
              </div>

              {/* Node Bullet / Seal on the vertical line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FAF7F0] border-2 border-amber-900 group-hover:scale-125 transition-transform" />

              {/* Event Card */}
              <div className="bg-[#FAF7F0] border border-stone-300 rounded-sm p-5 sm:p-6 shadow-xs hover:border-amber-900/60 transition-colors">
                {/* Mobile Year Badge */}
                <div className="sm:hidden flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-cinzel font-bold text-stone-900 tabular-nums text-base">
                    {ev.year} {ev.monthDay && `· ${ev.monthDay}`}
                  </span>
                  <span className="font-serif italic">{ev.location}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-cinzel uppercase tracking-wider text-amber-950 font-bold">
                    {ev.leadFigure}
                  </span>
                  <span className="hidden sm:inline font-serif italic text-stone-600">
                    {ev.location}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 mt-1">
                  {ev.title}
                </h3>
                {ev.spanishTitle && (
                  <p className="font-editorial italic text-stone-600 text-sm">
                    {ev.spanishTitle}
                  </p>
                )}

                <p className="font-prose text-sm sm:text-base text-stone-800 mt-2.5 leading-relaxed">
                  {ev.summary}
                </p>

                {/* Archival Photo for event if available */}
                {ev.imageUrl && (
                  <div className="mt-4 max-w-md">
                    <HistoricalPhoto
                      src={ev.imageUrl}
                      alt={ev.title}
                      caption={ev.photoCaption || ev.title}
                      date={ev.year.toString()}
                      provenance={ev.location}
                      aspectRatio="16:9"
                    />
                  </div>
                )}

                {/* Expandable Historical Significance */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-stone-200 space-y-3 bg-[#F4EFE6] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 rounded-b-sm">
                    <div>
                      <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-950">
                        In-Depth Historical Analysis
                      </h4>
                      <p className="font-prose text-xs sm:text-sm text-stone-800 mt-1 leading-relaxed">
                        {ev.detailedAnalysis}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-600">
                        Long-Term Movement Impact
                      </h4>
                      <p className="font-serif italic text-xs sm:text-sm text-stone-700 mt-0.5">
                        {ev.historicalSignificance}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEventIndex(isExpanded ? null : idx)}
                    className="text-xs font-cinzel font-semibold text-amber-950 hover:text-stone-900 uppercase tracking-wider cursor-pointer underline underline-offset-4"
                  >
                    {isExpanded ? 'Collapse Analysis' : 'Expand Historical Analysis →'}
                  </button>
                  <span className="text-xs font-serif text-stone-400 capitalize">
                    {ev.category.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <VintageFleuron className="mt-14" />
    </section>
  );
};
