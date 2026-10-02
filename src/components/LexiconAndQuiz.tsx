import React, { useState } from 'react';
import { COLONIAL_TERMS, QUIZ_QUESTIONS, ColonialTerm } from '../data/propagandaData';
import { VintageFleuron, LaSolidaridadSeal } from './ArchivalVisuals';

export const LexiconAndQuiz: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'lexicon' | 'quiz'>('lexicon');
  const [lexiconSearch, setLexiconSearch] = useState('');
  
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const filteredTerms = COLONIAL_TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(lexiconSearch.toLowerCase()) ||
      t.definition.toLowerCase().includes(lexiconSearch.toLowerCase()) ||
      t.etymology.toLowerCase().includes(lexiconSearch.toLowerCase())
  );

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optionIndex }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  const getRankTitle = (s: number) => {
    if (s >= 9) return 'Ilustrado de Primera Clase (Master Historian)';
    if (s >= 7) return 'Corresponsal de La Solidaridad (Senior Contributor)';
    if (s >= 5) return 'Aspirante a Reformista (Journeyman Patriot)';
    return 'Estudiante del Ateneo (Apprentice Scholar)';
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Masthead */}
      <div className="border-b border-stone-300 pb-5 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-cinzel">
          <span>Diccionario y Examen</span>
          <span aria-hidden="true">·</span>
          <span>19th-Century Colonial Terminology &amp; Historical Trial</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
          Lexicon &amp; The Ilustrado Examination
        </h2>
        <p className="font-editorial italic text-stone-700 text-base sm:text-lg mt-1 max-w-3xl">
          Master the colonial vocabulary of the Spanish East Indies and test your comprehension of the Propaganda Movement.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-stone-300 pb-2">
        <button
          onClick={() => setActiveSubTab('lexicon')}
          className={`px-4 py-2 font-cinzel text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
            activeSubTab === 'lexicon'
              ? 'bg-[#EAE0CF] text-stone-900 border-b-2 border-amber-900 shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Colonial Lexicon ({COLONIAL_TERMS.length})
        </button>
        <button
          onClick={() => setActiveSubTab('quiz')}
          className={`px-4 py-2 font-cinzel text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
            activeSubTab === 'quiz'
              ? 'bg-[#EAE0CF] text-stone-900 border-b-2 border-amber-900 shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Ilustrado Examination (10 Questions)
        </button>
      </div>

      {/* Tab 1: Lexicon View */}
      {activeSubTab === 'lexicon' && (
        <div className="space-y-6">
          <div className="max-w-md">
            <label htmlFor="search-lexicon" className="sr-only">Search terms</label>
            <input
              id="search-lexicon"
              type="text"
              value={lexiconSearch}
              onChange={(e) => setLexiconSearch(e.target.value)}
              placeholder="Search vocabulary (e.g. Frailocracia, Indio, Cortes)..."
              className="w-full text-xs font-sans px-3.5 py-2.5 bg-[#FAF7F0] border border-stone-300 rounded-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-amber-900"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.map((termItem: ColonialTerm, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F0] border border-stone-300 p-5 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-stone-300 pb-2 mb-3">
                    <h3 className="font-cinzel text-xl font-bold text-stone-900">
                      {termItem.term}
                    </h3>
                    <span className="text-xs font-serif italic text-stone-500">
                      {termItem.etymology}
                    </span>
                  </div>

                  <p className="font-editorial text-base text-stone-900 leading-snug mb-3">
                    {termItem.definition}
                  </p>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <strong className="font-cinzel uppercase text-stone-600 block text-[11px]">
                        19th-Century Colonial Context:
                      </strong>
                      <p className="font-prose text-stone-700 mt-0.5 leading-relaxed">
                        {termItem.contextIn19thCentury}
                      </p>
                    </div>

                    <div className="bg-[#F4EFE6] border-l-2 border-amber-900 p-2.5 rounded-r-xs">
                      <strong className="font-cinzel uppercase text-amber-950 block text-[11px]">
                        Propagandist Critique / Rebuttal:
                      </strong>
                      <p className="font-prose text-stone-800 mt-0.5 leading-relaxed">
                        {termItem.propagandistCritique}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Quiz View */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-3xl mx-auto">
          {!quizCompleted ? (
            <div className="bg-[#FAF7F0] border border-stone-300 p-6 sm:p-8 rounded-sm shadow-xs">
              {/* Progress Tracker */}
              <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-6 text-xs">
                <span className="font-cinzel uppercase font-bold text-amber-950">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span className="font-serif italic text-stone-500">
                  Current Score: {score}
                </span>
              </div>

              {/* Question Context & Prompt */}
              <div className="mb-6">
                <span className="text-xs font-serif italic text-stone-500 block mb-1">
                  Context: {currentQ.context}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((option, optIdx) => {
                  const isChosen = selectedAnswers[currentQ.id] === optIdx;
                  const isCorrect = optIdx === currentQ.correctIndex;
                  let optionClass = 'bg-[#FAF7F0] border-stone-300 hover:bg-[#F2EADA] text-stone-800';

                  if (isAnswered) {
                    if (isCorrect) {
                      optionClass = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold';
                    } else if (isChosen && !isCorrect) {
                      optionClass = 'bg-rose-50 border-rose-600 text-rose-950';
                    } else {
                      optionClass = 'bg-[#FAF7F0] border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-3.5 rounded-xs border text-xs sm:text-sm font-prose transition-all cursor-pointer flex items-center justify-between ${optionClass}`}
                    >
                      <span>{option}</span>
                      {isAnswered && isCorrect && (
                        <span className="text-emerald-700 font-bold ml-2">✓ Correct</span>
                      )}
                      {isAnswered && isChosen && !isCorrect && (
                        <span className="text-rose-700 font-bold ml-2">✗ Incorrect</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Dropdown */}
              {isAnswered && (
                <div className="bg-[#F4EFE6] border-l-2 border-amber-900 p-4 rounded-r-xs mb-6 text-xs animate-fade-in">
                  <span className="font-cinzel font-bold text-amber-950 uppercase tracking-wider block mb-1">
                    Historical Rationale:
                  </span>
                  <p className="font-prose text-stone-800 text-sm leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Action */}
              <div className="flex justify-end pt-2 border-t border-stone-300">
                {isAnswered && (
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    {currentQuestionIndex < totalQuestions - 1 ? 'Next Question →' : 'View Final Certification'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Completed Screen */
            <div className="bg-[#FAF7F0] border-2 border-stone-800 p-8 text-center rounded-sm shadow-md">
              <LaSolidaridadSeal className="w-16 h-16 mx-auto mb-4" />
              <span className="font-cinzel text-xs uppercase tracking-widest text-amber-950 font-bold block mb-1">
                CERTIFICADO DE ACREDITACIÓN HISTÓRICA
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
                Examination Concluded
              </h3>
              <p className="font-editorial text-lg italic text-stone-700 mt-2">
                Conferred Rank: <span className="font-bold text-amber-950">{getRankTitle(score)}</span>
              </p>

              <div className="my-6 py-4 border-t border-b border-stone-300 max-w-sm mx-auto">
                <span className="font-cinzel text-4xl font-extrabold text-stone-900 tabular-nums">
                  {score} / {totalQuestions}
                </span>
                <span className="block text-xs uppercase tracking-wider text-stone-600 mt-1">
                  Correct Assessments ({Math.round((score / totalQuestions) * 100)}%)
                </span>
              </div>

              <p className="font-prose text-stone-700 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
                You have journeyed through the primary documents, the sacrifice of GOMBURZA, the fierce satires of Plaridel, and the philosophical vision of Dr. José Rizal.
              </p>

              <button
                onClick={handleRestartQuiz}
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 font-cinzel text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                Restart Examination
              </button>
            </div>
          )}
        </div>
      )}

      <VintageFleuron className="mt-12" />
    </section>
  );
};
