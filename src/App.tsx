/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BroadsheetReader } from './components/BroadsheetReader';
import { IlustradosDossier } from './components/IlustradosDossier';
import { ChronologyTimeline } from './components/ChronologyTimeline';
import { PrintingPressSimulator } from './components/PrintingPressSimulator';
import { ReformDemandsView } from './components/ReformDemandsView';
import { LexiconAndQuiz } from './components/LexiconAndQuiz';
import { ArchivalGallery } from './components/ArchivalGallery';
import { Footer } from './components/Footer';
import { VintageFleuron, QuillIcon } from './components/ArchivalVisuals';
import { HistoricalPhoto } from './components/HistoricalPhoto';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#24211D] font-sans antialiased">
      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenSimulator={() => handleTabChange('simulator')}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div>
            <HeroSection
              onExploreBroadsheets={() => handleTabChange('broadsheet')}
              onExploreIlustrados={() => handleTabChange('ilustrados')}
              onExploreDemands={() => handleTabChange('demands')}
              onExploreGallery={() => handleTabChange('gallery')}
            />

            {/* The Great Triumvirate Feature Banner with Real Photographic Portraits */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="font-cinzel text-xs uppercase tracking-widest text-stone-500 font-bold">
                  El Gran Triunvirato
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  The Pillars of Filipino Nationalism
                </h2>
                <p className="font-editorial italic text-stone-700 text-base mt-2">
                  Three distinct intellects united by a common devotion to their motherland: the philosopher, the political tactician, and the fiery orator.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Rizal */}
                <div className="bg-[#FAF7F0] border border-stone-300 p-6 rounded-sm flex flex-col justify-between hover:border-amber-900/60 transition-colors">
                  <div>
                    <div className="mb-4">
                      <HistoricalPhoto
                        src="/images/rizal.jpg"
                        alt="Dr. José Rizal"
                        caption="Dr. José Rizal (1861–1896)"
                        date="Madrid, 1890"
                        provenance="Fotografía Debas"
                        aspectRatio="3:4"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-2 mb-2">
                      <span className="font-cinzel uppercase font-semibold">Calamba, Laguna</span>
                      <span className="font-serif">1861–1896</span>
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-stone-900">
                      Dr. José Rizal
                    </h3>
                    <p className="text-xs font-serif italic text-amber-950 font-bold mt-0.5">
                      "Dimasalang" &amp; "Laong Laan"
                    </p>
                    <p className="font-prose text-xs sm:text-sm text-stone-700 mt-2.5 leading-relaxed">
                      Novelist, ophthalmologist, and polymath. Author of <em className="text-stone-900 font-medium">Noli Me Tángere</em> and <em className="text-stone-900 font-medium">El Filibusterismo</em>. Believed that moral regeneration and civic virtue must precede political liberty.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-200">
                    <button
                      onClick={() => handleTabChange('ilustrados')}
                      className="text-xs font-cinzel font-semibold text-amber-950 hover:text-stone-900 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <QuillIcon className="w-3.5 h-3.5" />
                      <span>Examine Dossier →</span>
                    </button>
                  </div>
                </div>

                {/* Del Pilar */}
                <div className="bg-[#FAF7F0] border border-stone-300 p-6 rounded-sm flex flex-col justify-between hover:border-amber-900/60 transition-colors">
                  <div>
                    <div className="mb-4">
                      <HistoricalPhoto
                        src="/images/del_pilar.jpg"
                        alt="Marcelo H. del Pilar"
                        caption="Marcelo H. del Pilar (1850–1896)"
                        date="Spain, c. 1890"
                        provenance="Archivo General"
                        aspectRatio="3:4"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-2 mb-2">
                      <span className="font-cinzel uppercase font-semibold">Bulakan, Bulacan</span>
                      <span className="font-serif">1850–1896</span>
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-stone-900">
                      Marcelo H. del Pilar
                    </h3>
                    <p className="text-xs font-serif italic text-amber-950 font-bold mt-0.5">
                      "Plaridel" &amp; "Dolores Manapat"
                    </p>
                    <p className="font-prose text-xs sm:text-sm text-stone-700 mt-2.5 leading-relaxed">
                      Lawyer and master journalist. Guided <em className="text-stone-900 font-medium">La Solidaridad</em> through its peak Madrid years. Masterminded razor-sharp parodies like <em className="text-stone-900 font-medium">Dasalan at Tocsohan</em> to dismantle monastic hegemony.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-200">
                    <button
                      onClick={() => handleTabChange('ilustrados')}
                      className="text-xs font-cinzel font-semibold text-amber-950 hover:text-stone-900 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <QuillIcon className="w-3.5 h-3.5" />
                      <span>Examine Dossier →</span>
                    </button>
                  </div>
                </div>

                {/* Lopez Jaena */}
                <div className="bg-[#FAF7F0] border border-stone-300 p-6 rounded-sm flex flex-col justify-between hover:border-amber-900/60 transition-colors">
                  <div>
                    <div className="mb-4">
                      <HistoricalPhoto
                        src="/images/lopez_jaena.jpg"
                        alt="Graciano López Jaena"
                        caption="Graciano López Jaena (1856–1896)"
                        date="Barcelona, c. 1889"
                        provenance="Ateneo de Barcelona"
                        aspectRatio="3:4"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-2 mb-2">
                      <span className="font-cinzel uppercase font-semibold">Jaro, Iloilo</span>
                      <span className="font-serif">1856–1896</span>
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-stone-900">
                      Graciano López Jaena
                    </h3>
                    <p className="text-xs font-serif italic text-amber-950 font-bold mt-0.5">
                      "Diego Laura"
                    </p>
                    <p className="font-prose text-xs sm:text-sm text-stone-700 mt-2.5 leading-relaxed">
                      The "Demosthenes of the Philippines". Founding Editor-in-Chief of <em className="text-stone-900 font-medium">La Solidaridad</em> in Barcelona (1889). Author of the scathing anti-friar satire <em className="text-stone-900 font-medium">Fray Botod</em>.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-200">
                    <button
                      onClick={() => handleTabChange('ilustrados')}
                      className="text-xs font-cinzel font-semibold text-amber-950 hover:text-stone-900 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <QuillIcon className="w-3.5 h-3.5" />
                      <span>Examine Dossier →</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* The 5 Demands Section Embedded in Overview */}
            <ReformDemandsView />

            {/* Quick Archival Exhibition Banner */}
            <section className="bg-[#F4EFE6] border-t border-b border-stone-300 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <span className="font-cinzel text-xs uppercase tracking-widest text-amber-950 font-bold">
                    Primary Archival Repository
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-stone-900">
                    Read the Original 19th-Century Broadsheets
                  </h3>
                  <p className="font-editorial text-stone-700 text-sm max-w-lg italic">
                    Discover side-by-side Spanish originals and English translations of the Brindis speech, Indolence of the Filipinos, and the founding manifesto "Nuestro Propósito".
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleTabChange('gallery')}
                    className="px-5 py-3 bg-[#EAE2D2] hover:bg-[#DDD4BF] text-stone-900 border border-stone-400 font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    View Picture Gallery
                  </button>
                  <button
                    onClick={() => handleTabChange('broadsheet')}
                    className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-stone-100 font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    Enter Hemeroteca →
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'broadsheet' && <BroadsheetReader />}
        {activeTab === 'ilustrados' && <IlustradosDossier />}
        {activeTab === 'gallery' && <ArchivalGallery />}
        {activeTab === 'timeline' && <ChronologyTimeline />}
        {activeTab === 'demands' && <ReformDemandsView />}
        {activeTab === 'simulator' && <PrintingPressSimulator />}
        {activeTab === 'lexicon' && <LexiconAndQuiz />}
      </main>

      {/* Archival Footer */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
}
