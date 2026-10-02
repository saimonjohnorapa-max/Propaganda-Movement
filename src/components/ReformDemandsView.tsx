import React, { useState } from 'react';
import { REFORM_DEMANDS, ReformDemand } from '../data/propagandaData';
import { VintageFleuron } from './ArchivalVisuals';

export const ReformDemandsView: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(REFORM_DEMANDS[0].id);

  const activeDemand = REFORM_DEMANDS.find((d) => d.id === selectedPillarId) || REFORM_DEMANDS[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Masthead */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Programa de Reformas</span>
          <span aria-hidden="true">·</span>
          <span>The Five Pillars of Kilusang Propaganda</span>
          <span aria-hidden="true">·</span>
          <span>Assimilation &amp; Civil Rights</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          The Five Reform Demands
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          The non-violent political and social charter that the Ilustrados petitioned the Spanish Crown, Council of Ministers, and Cortes Generales to grant.
        </p>
      </div>

      {/* Grid of 5 Demands */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
        {REFORM_DEMANDS.map((demand, index) => {
          const isSelected = demand.id === activeDemand.id;
          return (
            <button
              key={demand.id}
              onClick={() => setSelectedPillarId(demand.id)}
              className={`p-4 rounded-sm border text-left cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#EAE0CF] border-amber-900 shadow-xs'
                  : 'bg-[#FAF7F0] border-stone-300 hover:bg-[#F2EADB]'
              }`}
            >
              <span className="font-cinzel text-xs text-amber-950 font-bold block mb-1">
                Pillar {index + 1}
              </span>
              <h3 className="font-cinzel text-sm font-bold text-stone-900 leading-snug">
                {demand.pillar}
              </h3>
              <p className="text-[11px] font-serif text-stone-600 italic mt-1 line-clamp-2">
                {demand.spanishTerm}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Active Demand Panel */}
      <div className="bg-[#FAF7F0] border border-stone-300 rounded-sm p-6 sm:p-8 shadow-xs">
        <div className="border-b border-stone-300 pb-4">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="font-cinzel uppercase tracking-wider">
              Análisis Jurídico e Histórico
            </span>
            <span className="font-serif italic">
              Kilusang Propaganda Charter
            </span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            {activeDemand.pillar}
          </h3>
          <p className="font-cinzel text-xs tracking-wider text-amber-950 font-bold uppercase mt-0.5">
            {activeDemand.spanishTerm}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                The Reform Objective
              </h4>
              <p className="font-prose text-sm sm:text-base text-stone-800 leading-relaxed">
                {activeDemand.objective}
              </p>
            </div>

            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                Colonial Grievance &amp; Injustice
              </h4>
              <p className="font-prose text-sm sm:text-base text-stone-800 leading-relaxed">
                {activeDemand.grievance}
              </p>
            </div>
          </div>

          <div className="space-y-4 bg-[#F4EFE6] border border-stone-300 p-5 rounded-xs">
            <div>
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-950 mb-1">
                Primary Ilustrado Champions
              </h4>
              <p className="font-serif text-sm text-stone-900 font-medium">
                {activeDemand.ilustradoAdvocate}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-300">
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Historical Colonial Outcome &amp; Consequence
              </h4>
              <p className="font-prose text-xs sm:text-sm text-stone-800 leading-relaxed">
                {activeDemand.historicalOutcome}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-300 text-xs font-serif italic text-stone-600">
              "When peaceful evolution is met with the executioner's sword, revolution becomes an inevitable historical necessity."
            </div>
          </div>
        </div>
      </div>

      <VintageFleuron className="mt-12" />
    </section>
  );
};
