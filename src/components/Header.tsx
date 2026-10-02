import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenSimulator }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('overview')}
          className="text-left font-cinzel font-bold text-lg md:text-xl tracking-wider text-stone-900 hover:text-amber-900 transition-colors uppercase cursor-pointer"
        >
          LA SOLIDARIDAD
        </button>

        {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line text */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('broadsheet')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'broadsheet'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Broadsheets
          </button>
          <button
            onClick={() => setActiveTab('ilustrados')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'ilustrados'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Ilustrados
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'gallery'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Pictures
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Chronology
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'simulator'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Press
          </button>
          <button
            onClick={() => setActiveTab('lexicon')}
            className={`whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'lexicon'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-900 pb-0.5'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Quiz
          </button>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSimulator}
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-[#E7DEC8] hover:bg-[#DDD0B5] border border-amber-800/30 rounded-sm shadow-2xs transition-colors whitespace-nowrap cursor-pointer"
          >
            Simulate Issue
          </button>
        </div>
      </div>

      {/* Mobile nav bar strip */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-200/80 px-2 py-2 overflow-x-auto text-xs bg-[#F5EFE3]">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'overview' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('broadsheet')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'broadsheet' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Broadsheets
        </button>
        <button
          onClick={() => setActiveTab('ilustrados')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'ilustrados' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Ilustrados
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'gallery' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Pictures
        </button>
        <button
          onClick={() => setActiveTab('timeline')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'timeline' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Timeline
        </button>
        <button
          onClick={() => setActiveTab('simulator')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'simulator' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Press
        </button>
        <button
          onClick={() => setActiveTab('lexicon')}
          className={`px-2 py-1 whitespace-nowrap ${activeTab === 'lexicon' ? 'font-bold text-amber-950 border-b border-amber-900' : 'text-stone-700'}`}
        >
          Quiz
        </button>
      </div>
    </header>
  );
};
