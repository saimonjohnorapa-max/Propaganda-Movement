import React, { useState } from 'react';
import { LaSolidaridadSeal, PrintingPressIcon, VintageFleuron } from './ArchivalVisuals';

interface SimulatorOption {
  id: string;
  title: string;
  topic: string;
  summary: string;
  historicalPillar: string;
}

const EDITORIAL_TOPICS: SimulatorOption[] = [
  {
    id: 'frailocracia',
    title: 'Monastic Supremacy & The Shadow Government in the Provinces',
    topic: 'Frailocracia y los abusos de las órdenes religiosas',
    summary: 'Exposes how the regular friar orders control municipal elections, tax collection, and censorship, subordinating civil authorities to the convent.',
    historicalPillar: 'Secularization & Civil Rule'
  },
  {
    id: 'cortes',
    title: 'Restoration of Philippine Parliamentary Seats in Madrid',
    topic: 'Representación en las Cortes Generales',
    summary: 'Argues under constitutional law that 8 million loyal Philippine subjects have the sovereign right to voice their grievances in the national congress.',
    historicalPillar: 'Parliamentary Representation'
  },
  {
    id: 'indolence',
    title: 'Dismantling the Colonial Slur: Why Filipino Laborers Face Ruin',
    topic: 'Refutación de la supuesta indolencia indígena',
    summary: 'A statistical and historical proof that forced labor, lack of agricultural incentives, and monopolistic tariffs destroyed native commerce.',
    historicalPillar: 'Economic Equality'
  },
  {
    id: 'calamba',
    title: 'The Eviction of Calamba: Friar Retaliation Against Tenant Families',
    topic: 'El desahucio arbitrario de la hacienda de Calamba',
    summary: 'Dispatches from Laguna documenting the burning of 300 tenant homes, including Rizal’s family, after they petitioned for fair land rent audits.',
    historicalPillar: 'Human Rights & Rule of Law'
  },
  {
    id: 'women-education',
    title: 'Light for the Daughters of Filipinas: The Malolos Precedent',
    topic: 'Instrucción científica para la mujer filipina',
    summary: 'Champions universal education in the Spanish language, modern biology, and mathematics, breaking the monopoly of friar catechism.',
    historicalPillar: 'Educational Reform'
  }
];

const WRITERS_LIST = [
  { id: 'rizal', name: 'Dr. José Rizal', penName: 'Dimasalang', specialty: 'Philosophical & Socio-Historical Analysis' },
  { id: 'del-pilar', name: 'Marcelo H. del Pilar', penName: 'Plaridel', specialty: 'Searing Anti-Clerical Satire & Legal Logic' },
  { id: 'lopez-jaena', name: 'Graciano López Jaena', penName: 'Diego Laura', specialty: 'Passionate Oratorical Prose & Republican Ideals' },
  { id: 'antonio-luna', name: 'Antonio Luna', penName: 'Taga-Ilog', specialty: 'Scientific Exposition & European Customs' },
  { id: 'ponce', name: 'Mariano Ponce', penName: 'Tikbalang', specialty: 'Pre-Colonial Philippine Folklore & Archive Notes' },
  { id: 'blumentritt', name: 'Prof. Ferdinand Blumentritt', penName: 'F. Blumentritt', specialty: 'European Ethnography & International Law' },
];

export const PrintingPressSimulator: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'barcelona' | 'madrid'>('madrid');
  const [selectedTopic, setSelectedTopic] = useState<SimulatorOption>(EDITORIAL_TOPICS[0]);
  const [selectedWriterIds, setSelectedWriterIds] = useState<string[]>(['del-pilar', 'rizal']);
  const [selectedTone, setSelectedTone] = useState<'satirical' | 'scholarly' | 'republican'>('scholarly');
  const [isPrinting, setIsPrinting] = useState(false);
  const [printedIssue, setPrintedIssue] = useState<{
    issueNumber: number;
    date: string;
    city: string;
    headline: string;
    leadAuthor: string;
    secondaryAuthors: string[];
    tone: string;
    falloutMadrid: string;
    falloutManila: string;
    awakeningScore: number;
  } | null>(null);

  const toggleWriter = (id: string) => {
    if (selectedWriterIds.includes(id)) {
      if (selectedWriterIds.length > 1) {
        setSelectedWriterIds(selectedWriterIds.filter((w) => w !== id));
      }
    } else {
      if (selectedWriterIds.length < 3) {
        setSelectedWriterIds([...selectedWriterIds, id]);
      }
    }
  };

  const handleRunPress = () => {
    setIsPrinting(true);
    setTimeout(() => {
      const issueNum = Math.floor(Math.random() * 120) + 20;
      const leadWriter = WRITERS_LIST.find((w) => w.id === selectedWriterIds[0]) || WRITERS_LIST[0];
      const otherWriters = WRITERS_LIST.filter((w) => selectedWriterIds.includes(w.id) && w.id !== leadWriter.id).map((w) => `${w.name} (${w.penName})`);

      let falloutMadrid = '';
      let falloutManila = '';
      let awakening = 85;

      if (selectedTopic.id === 'frailocracia') {
        falloutMadrid = 'Liberal deputy Morayta raises the issue during parliamentary session; reactionary newspapers denounce the article as Masonic heresy.';
        falloutManila = 'The Archbishop of Manila issues an excommunication decree against anyone possessing the issue; customs searches intensified at the port of Manila.';
        awakening = 94;
      } else if (selectedTopic.id === 'cortes') {
        falloutMadrid = 'Spanish republican clubs express sympathy; a petition for colonial representation is submitted to the Prime Minister.';
        falloutManila = 'Copies are secretly transcribed by clerk Andres Bonifacio and distributed among dockworkers in Tondo and Cavite.';
        awakening = 91;
      } else if (selectedTopic.id === 'calamba') {
        falloutMadrid = 'Shock across European press; Spanish intellectuals question the brutality of Governor-General Weyler.';
        falloutManila = 'Civil guards conduct midnight raids in Laguna; Paciano Rizal and relatives are ordered exiled to Mindoro.';
        awakening = 96;
      } else {
        falloutMadrid = 'Scholars at the Ateneo de Madrid debate the reformist thesis; Spanish educational reformers praise the clarity of argument.';
        falloutManila = 'Underground study circles form in colleges and provincial towns to read copies smuggled in wine barrels.';
        awakening = 89;
      }

      setPrintedIssue({
        issueNumber: issueNum,
        date: selectedCity === 'barcelona' ? '15 de Mayo de 1889' : '15 de Octubre de 1891',
        city: selectedCity === 'barcelona' ? 'Barcelona (Plaza del Buensuceso)' : 'Madrid (Calle de Atocha, 43)',
        headline: selectedTopic.title,
        leadAuthor: `${leadWriter.name} [Byline: ${leadWriter.penName}]`,
        secondaryAuthors: otherWriters,
        tone: selectedTone,
        falloutMadrid,
        falloutManila,
        awakeningScore: awakening
      });
      setIsPrinting(false);
    }, 900);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Masthead */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Taller Tipográfico</span>
          <span aria-hidden="true">·</span>
          <span>Editor-in-Chief Simulation</span>
          <span aria-hidden="true">·</span>
          <span>19th-Century Printing Press</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          The Printing Press of La Solidaridad
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          Assume the mantle of Editor-in-Chief. Formulate your editorial dispatches, select fearless columnists, set the rhetorical fire, and run the presses to smuggle the truth across the seas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Config Console */}
        <div className="lg:col-span-5 bg-[#F5EFE3] border border-stone-300 rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-stone-300 pb-3">
            <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
              <PrintingPressIcon className="w-4 h-4 text-amber-950" />
              <span>Editorial Despatch Form</span>
            </span>
            <span className="text-xs text-stone-500 font-serif">Kilusang Propaganda</span>
          </div>

          {/* 1. Publishing City */}
          <div>
            <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Printing Workshop &amp; City
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSelectedCity('barcelona')}
                className={`p-2.5 rounded-xs border text-left cursor-pointer transition-colors ${
                  selectedCity === 'barcelona'
                    ? 'bg-[#EAE0CF] border-amber-900 font-bold text-stone-900'
                    : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                }`}
              >
                <span className="block font-cinzel">Barcelona (1889)</span>
                <span className="text-[11px] font-serif text-stone-500">Under López Jaena</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedCity('madrid')}
                className={`p-2.5 rounded-xs border text-left cursor-pointer transition-colors ${
                  selectedCity === 'madrid'
                    ? 'bg-[#EAE0CF] border-amber-900 font-bold text-stone-900'
                    : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                }`}
              >
                <span className="block font-cinzel">Madrid (1889–95)</span>
                <span className="text-[11px] font-serif text-stone-500">Under Del Pilar</span>
              </button>
            </div>
          </div>

          {/* 2. Choose Topic */}
          <div>
            <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              2. Front Page Investigation / Editorial
            </label>
            <div className="space-y-2">
              {EDITORIAL_TOPICS.map((topic) => {
                const isSelected = selectedTopic.id === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`w-full text-left p-3 rounded-xs border text-xs cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#EAE0CF] border-amber-900/80 shadow-2xs font-semibold'
                        : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                    }`}
                  >
                    <div className="font-cinzel text-stone-900">{topic.title}</div>
                    <div className="font-serif italic text-stone-500 text-[11px] mt-0.5">
                      Pillar: {topic.historicalPillar}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Choose Columnists */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-700">
                3. Commission Columnists (Max 3)
              </label>
              <span className="text-xs text-stone-500 font-serif">
                {selectedWriterIds.length} / 3 selected
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {WRITERS_LIST.map((writer) => {
                const isChecked = selectedWriterIds.includes(writer.id);
                return (
                  <button
                    key={writer.id}
                    type="button"
                    onClick={() => toggleWriter(writer.id)}
                    className={`p-2 rounded-xs border text-left cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-[#E6DEC9] border-amber-900 text-stone-900 font-medium'
                        : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                    }`}
                  >
                    <div className="font-cinzel">{writer.name}</div>
                    <div className="text-[11px] font-serif text-amber-950 italic">
                      Pen: "{writer.penName}"
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Choose Rhetorical Stance */}
          <div>
            <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              4. Rhetorical Stance &amp; Tone
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs text-center font-cinzel">
              <button
                type="button"
                onClick={() => setSelectedTone('satirical')}
                className={`py-2 px-1 rounded-xs border cursor-pointer transition-colors ${
                  selectedTone === 'satirical'
                    ? 'bg-[#EAE0CF] border-amber-900 font-bold text-stone-900'
                    : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                }`}
              >
                Satirical Irony
              </button>
              <button
                type="button"
                onClick={() => setSelectedTone('scholarly')}
                className={`py-2 px-1 rounded-xs border cursor-pointer transition-colors ${
                  selectedTone === 'scholarly'
                    ? 'bg-[#EAE0CF] border-amber-900 font-bold text-stone-900'
                    : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                }`}
              >
                Scholarly Legal
              </button>
              <button
                type="button"
                onClick={() => setSelectedTone('republican')}
                className={`py-2 px-1 rounded-xs border cursor-pointer transition-colors ${
                  selectedTone === 'republican'
                    ? 'bg-[#EAE0CF] border-amber-900 font-bold text-stone-900'
                    : 'bg-[#FAF7F0] border-stone-300 text-stone-700 hover:bg-[#F0E8D9]'
                }`}
              >
                Fiery Oratory
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            disabled={isPrinting}
            onClick={handleRunPress}
            className="w-full py-3 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-stone-100 font-cinzel font-bold text-xs uppercase tracking-widest rounded-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
          >
            <PrintingPressIcon className="w-4 h-4" />
            <span>{isPrinting ? 'Running Type Presses...' : 'Set Movable Type & Print Edition'}</span>
          </button>
        </div>

        {/* Right Output: The Printed Broadsheet & Political Reaction */}
        <div className="lg:col-span-7 space-y-6">
          {printedIssue ? (
            <div className="bg-[#FAF7F0] border-2 border-stone-800 p-6 sm:p-8 rounded-sm shadow-md animate-fade-in">
              {/* Top Broadsheet Masthead */}
              <div className="border-b-2 border-stone-800 pb-4 text-center">
                <div className="flex items-center justify-between text-[11px] font-cinzel uppercase tracking-widest text-stone-600 border-b border-stone-300 pb-1 mb-2">
                  <span>AÑO II · NÚM. {printedIssue.issueNumber}</span>
                  <span>{printedIssue.city}</span>
                  <span>{printedIssue.date}</span>
                </div>

                <div className="flex items-center justify-center gap-3 my-2">
                  <LaSolidaridadSeal className="w-10 h-10" />
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-stone-900">
                    LA SOLIDARIDAD
                  </h3>
                </div>
                <p className="font-cinzel text-xs tracking-widest text-stone-700 uppercase font-semibold">
                  QUINCENARIO DEMOCRÁTICO · EDICIÓN EXTRAORDINARIA
                </p>
              </div>

              {/* Lead Headline */}
              <div className="py-5 text-center border-b border-stone-300">
                <span className="font-cinzel text-xs uppercase tracking-wider text-amber-950 font-bold block mb-1">
                  EDITORIAL PRINCIPAL
                </span>
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  {printedIssue.headline}
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-serif text-stone-600 mt-2">
                  <span>Por: {printedIssue.leadAuthor}</span>
                  {printedIssue.secondaryAuthors.length > 0 && (
                    <>
                      <span>·</span>
                      <span>Colaboradores: {printedIssue.secondaryAuthors.join(', ')}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Editorial Article Columns */}
              <div className="newspaper-cols-2 py-5 font-prose text-xs sm:text-sm text-stone-800 leading-relaxed drop-cap border-b border-stone-300">
                <p className="mb-3">
                  {selectedTopic.summary} Es la hora sagrada de que la verdad resuene sin trabas ni mordazas en el templo de la patria. No pedimos privilegios ni mercedes bastardas; exigimos la justicia inmutable que las leyes de la razón y de la historia reconocen a todo pueblo libre.
                </p>
                <p>
                  Si las autoridades coloniales creen acallar la voz de ocho millones de seres humanos arrojando al fuego nuestras páginas, cometen el error más funesto. Las ideas que nacen de la convicción moral no mueren bajo la censura; cruzan los mares y echan raíces indestructibles en el alma de los pueblos.
                </p>
              </div>

              {/* Simulated Historical Repercussions */}
              <div className="mt-6 bg-[#F4EFE6] border border-stone-300 p-4 rounded-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-300 pb-2">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-stone-900">
                    Historical Repercussions Simulation
                  </span>
                  <span className="text-xs font-cinzel font-bold text-amber-950">
                    National Awakening: {printedIssue.awakeningScore}%
                  </span>
                </div>

                <div className="text-xs space-y-2">
                  <div>
                    <strong className="font-cinzel uppercase text-stone-800 block text-[11px]">
                      Repercussion in Madrid (Spanish Ministry &amp; Cortes):
                    </strong>
                    <p className="font-prose text-stone-700 mt-0.5">
                      {printedIssue.falloutMadrid}
                    </p>
                  </div>
                  <div>
                    <strong className="font-cinzel uppercase text-amber-950 block text-[11px]">
                      Repercussion in Manila &amp; Provinces (Colonial Censorship):
                    </strong>
                    <p className="font-prose text-stone-700 mt-0.5">
                      {printedIssue.falloutManila}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-stone-500 font-serif italic">
                <span>Estado: Smuggled into Manila via SS Isla de Panay</span>
                <span>Archived in Madrid</span>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[460px] bg-[#FAF7F0] border border-dashed border-stone-300 rounded-sm p-8 flex flex-col items-center justify-center text-center">
              <LaSolidaridadSeal className="w-16 h-16 opacity-60 mb-3" />
              <h3 className="font-cinzel text-lg font-bold text-stone-800">
                The Letterpress Machine Awaits Your Editorial
              </h3>
              <p className="font-editorial italic text-stone-600 text-sm max-w-md mt-1">
                Configure your publishing bureau in Barcelona or Madrid on the left, select your frontline Ilustrado writers, and command the press to print a historic dispatch.
              </p>
            </div>
          )}
        </div>
      </div>

      <VintageFleuron className="mt-12" />
    </section>
  );
};
