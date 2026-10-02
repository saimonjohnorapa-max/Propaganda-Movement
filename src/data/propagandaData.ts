export interface Ilustrado {
  id: string;
  name: string;
  title: string;
  birthYear: number;
  deathYear: number;
  birthPlace: string;
  penNames: { name: string; translation: string; meaning: string }[];
  role: string;
  education: string[];
  keyWorks: { title: string; year: string; medium: string; description: string }[];
  bio: string;
  ideology: string;
  quote: string;
  quoteContext: string;
  portraitSymbol: string; // SVG icon or visual glyph
  imageUrl?: string;
  photoCaption?: string;
}

export interface ReformDemand {
  id: string;
  pillar: string;
  spanishTerm: string;
  objective: string;
  grievance: string;
  ilustradoAdvocate: string;
  historicalOutcome: string;
}

export interface TimelineEvent {
  year: number;
  monthDay?: string;
  title: string;
  spanishTitle?: string;
  location: string;
  category: 'catalyst' | 'publication' | 'cultural' | 'organization' | 'turning-point';
  leadFigure: string;
  summary: string;
  detailedAnalysis: string;
  historicalSignificance: string;
  imageUrl?: string;
  photoCaption?: string;
}

export interface ColonialTerm {
  term: string;
  etymology: string;
  definition: string;
  contextIn19thCentury: string;
  propagandistCritique: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const ILUSTRADOS: Ilustrado[] = [
  {
    id: 'rizal',
    name: 'Dr. José Rizal Mercado y Alonso Realonda',
    title: 'The National Polymath & Moral Visionary',
    birthYear: 1861,
    deathYear: 1896,
    birthPlace: 'Calamba, Laguna',
    penNames: [
      { name: 'Dimasalang', translation: 'Touch Me Not / Invulnerable', meaning: 'Derived from Tagalog "di masalang", signifying incorruptible moral resistance against colonial injustice.' },
      { name: 'Laong Laan', translation: 'Ever Prepared / Long Dedicated', meaning: 'Embodied his lifelong vow made at age 11 after the execution of GOMBURZA to avenge his country through letters.' }
    ],
    role: 'Chief Philosopher, Novelist, & Essayist of La Solidaridad',
    education: [
      'Ateneo Municipal de Manila (Bachiller en Artes, sobresaliente)',
      'University of Santo Tomas (Philosophy & Medicine)',
      'Universidad Central de Madrid (Licentiate in Medicine & Licentiate in Philosophy and Letters)',
      'University of Heidelberg & University of Paris (Ophthalmology & Linguistics)'
    ],
    keyWorks: [
      { title: 'Noli Me Tángere', year: '1887 (Berlin)', medium: 'Novel', description: 'Social cancer diagnosis depicting colonial hypocrisy, friar abuses (Padre Dámaso, Padre Salví), and the tragedy of Crisóstomo Ibarra.' },
      { title: 'El Filibusterismo', year: '1891 (Ghent)', medium: 'Novel', description: 'Dark political thriller tracing Simoun’s revolutionary desperation, dissecting the futility of violent revenge devoid of moral virtue.' },
      { title: 'Sobre la indolencia de los filipinos', year: '1890 (Madrid)', medium: 'Treatise', description: 'Five-part essay refuting Spanish slurs of native laziness, proving colonial monopolies, forced labor, and disenfranchisement crippled local commerce.' },
      { title: 'Annotated Morga’s Sucesos de las Islas Filipinas', year: '1890 (Paris)', medium: 'Historical Scholarship', description: 'Hand-copied at the British Museum to prove Filipinos possessed a flourishing pre-Hispanic civilization, metallurgy, maritime trade, and written script.' },
      { title: 'La Liga Filipina Constitution', year: '1892 (Manila)', medium: 'Civic Manifesto', description: 'Peaceful civic union fostering mutual aid, legal defense, and indigenous economic self-sufficiency.' }
    ],
    bio: 'The foremost intellectual luminary of the Propaganda Movement. Rizal believed political independence was meaningless without moral regeneration, civic education, and personal virtue. His master novels galvanized the archipelago and earned the wrath of the religious orders.',
    ideology: 'Prioritized civic education, moral integrity, pre-colonial historical vindication, and gradual reform within the Spanish sphere before reaching the tragic realization that Madrid was deaf to peaceful petitions.',
    quote: 'Without education and liberty, that soil and that sun of mankind, no reform is possible, no measure can give the result desired.',
    quoteContext: 'From "Sobre la indolencia de los filipinos", La Solidaridad (1890)',
    portraitSymbol: 'book-quill',
    imageUrl: '/images/rizal.jpg',
    photoCaption: 'Dr. José Rizal in Madrid (c. 1890), photographed during his prolific literary crusade in Europe.'
  },
  {
    id: 'del-pilar',
    name: 'Marcelo Hilario del Pilar y Gatmaitán',
    title: 'Plaridel: The Master Satirist & Political Engine',
    birthYear: 1850,
    deathYear: 1896,
    birthPlace: 'Kupang, San Nicolas, Bulakan',
    penNames: [
      { name: 'Plaridel', translation: 'Anagram of Del Pilar', meaning: 'His most feared pen name in Madrid and Manila, appearing on searing editorials against monastic power.' },
      { name: 'Dolores Manapat', translation: 'Dolores (sorrows) / Manapat (upright)', meaning: 'Used on anti-clerical vernacular pamphlets like Dasalan at Tocsohan distributed inside churches.' },
      { name: 'Piping Dilat', translation: 'Mute with Open Eyes', meaning: 'Symbolized the voiceless Filipino population forced into silent witness of colonial cruelty.' }
    ],
    role: 'Second Editor-in-Chief of La Solidaridad & Madrid Political Director',
    education: [
      'Colegio de San José (Manila)',
      'University of Santo Tomas (Licenciado en Leyes - Law)'
    ],
    keyWorks: [
      { title: 'Dasalan at Tocsohan (Prayer & Joke Book)', year: '1888 (Malolos)', medium: 'Vernacular Satire', description: 'Parodied Catholic prayers (Aba Ginoong Barya, Ang Amain Namin) into scathing exposés of friar extortion.' },
      { title: 'La Soberanía Monacal en Filipinas', year: '1889 (Barcelona)', medium: 'Political Treatise', description: 'Analyzed Frailocracia as the actual shadow government holding both Spanish governors and native subjects hostage.' },
      { title: 'Diariong Tagalog', year: '1882 (Manila)', medium: 'Bilingual Periodical', description: 'The first bilingual newspaper in the Philippines to propagate patriotic ideas in both Tagalog and Spanish.' },
      { title: 'Editorials in La Solidaridad', year: '1889–1895 (Madrid)', medium: 'Broadsheet Journalism', description: 'Relentless lobbying of Spanish ministers, liberal deputies, and Masonic lodges for colonial assimilation.' }
    ],
    bio: 'The practical political soul of the campaign. Escaping arrest in Bulakan in 1888, he fled to Spain and took over La Solidaridad in October 1889. Living in bitter Madrid poverty, smoking discarded cigarette butts to suppress hunger, he worked tirelessly until succumbing to tuberculosis in July 1896.',
    ideology: 'Direct political agitation, parliamentary lobbying, anti-friar secularization, and assimilation. Unlike Rizal’s aloof moral idealism, Del Pilar was a consummate political tactician who understood institutional power.',
    quote: 'In the Philippines there is no freedom of the press, and the right of association does not exist. The friar is the supreme master.',
    quoteContext: 'From "La Soberanía Monacal en Filipinas" (1889)',
    portraitSymbol: 'pen-newspaper',
    imageUrl: '/images/del_pilar.jpg',
    photoCaption: 'Marcelo H. del Pilar (Plaridel) in Spain (c. 1890), editor-in-chief of La Solidaridad.'
  },
  {
    id: 'lopez-jaena',
    name: 'Graciano López Jaena',
    title: 'The Golden Orator & Founding Editor',
    birthYear: 1856,
    deathYear: 1896,
    birthPlace: 'Jaro, Iloilo City',
    penNames: [
      { name: 'Diego Laura', translation: 'Nom de plume', meaning: 'Used on passionate rhetorical speeches and founding dispatches in Barcelona and Valencia.' }
    ],
    role: 'Founding Editor of La Solidaridad & Orator',
    education: [
      'Seminario de San Vicente Ferrer (Jaro)',
      'University of Santo Tomas (Apprentice in Medicine, San Juan de Dios Hospital)',
      'Universidad de Valencia (Medicine)'
    ],
    keyWorks: [
      { title: 'Fray Botod (Big-Bellied Friar)', year: '1874 (Iloilo)', medium: 'Satirical Novella', description: 'Brutal caricature of a corrupt, gluttonous, and lascivious parish priest who bled the townspeople dry.' },
      { title: 'Nuestro Propósito (Our Purpose)', year: '1889 (Barcelona)', medium: 'Manifesto', description: 'The historic opening editorial of La Solidaridad Vol. 1, No. 1, declaring war on reaction and injustice.' },
      { title: 'Discursos y Artículos Varios', year: '1891 (Barcelona)', medium: 'Collected Speeches', description: 'Stirring orations delivered at Madrid Ateneo and Universal Exposition of Barcelona.' }
    ],
    bio: 'Famed for volcanic oratory that captivated European audiences at the Barcelona Ateneo. He founded La Solidaridad in Barcelona on February 15, 1889, financed by Pablo Rianzares and the Manila Propaganda Committee. He was bohemian, passionate, and fiercely bohemian.',
    ideology: 'Radical republicanism, vehement anti-clericalism, and passionate defense of provincial liberties and free enterprise.',
    quote: 'Our aspirations are modest, very modest. Our program is clear: to fight all reaction, to hinder all retrogressive steps, to applaud and accept every liberal idea.',
    quoteContext: 'From the maiden editorial of La Solidaridad, February 15, 1889',
    portraitSymbol: 'speaker-scroll',
    imageUrl: '/images/lopez_jaena.jpg',
    photoCaption: 'Graciano López Jaena, fiery orator and the founding editor-in-chief of La Solidaridad.'
  },
  {
    id: 'ponce',
    name: 'Mariano Ponce y Collantes',
    title: 'The Historian, Archivist & Diplomat',
    birthYear: 1863,
    deathYear: 1918,
    birthPlace: 'Baliuag, Bulacan',
    penNames: [
      { name: 'Tikbalang', translation: 'Mythical Shape-Shifter', meaning: 'Invoking Philippine folk mythology to confuse Spanish censors.' },
      { name: 'Kalipulako', translation: 'Lapu-Lapu', meaning: 'Honoring the first Mactan chieftain who resisted European subjugation.' },
      { name: 'Naning', translation: 'Affectionate diminutive', meaning: 'Used on cultural and historical dispatches.' }
    ],
    role: 'Managing Editor of La Solidaridad & Movement Chronicler',
    education: [
      'Colegio de San Juan de Letran (Bachiller en Artes)',
      'University of Santo Tomas (Medicine)',
      'Universidad Central de Madrid (Medicine, completed 1889)'
    ],
    keyWorks: [
      { title: 'Efemérides Filipinas', year: '1892–1893', medium: 'Historical Compendium', description: 'Co-authored with Jaime C. de Veyra, documenting forgotten milestones in Philippine heritage.' },
      { title: 'La Solidaridad Operations & Correspondence', year: '1889–1895', medium: 'Editorial Direction', description: 'Managed logistics, kept subscriber rolls, and coordinated distribution networks between Europe and Hong Kong.' },
      { title: 'Cartas sobre la Revolución', year: '1898–1900', medium: 'Diplomatic Dispatches', description: 'Diplomatic mission in Yokohama, Japan negotiating arms acquisitions for the First Republic.' }
    ],
    bio: 'The indefatigable engine room of the movement. While Rizal wrote masterpieces and Del Pilar penned fierce editorials, Ponce ensured the bi-weekly paper was printed, addressed, and secretly mailed to subscribers in Manila, Iloilo, and Madrid.',
    ideology: 'Historical preservation, methodical institutional documentation, and pan-Asian diplomatic solidarity.',
    quote: 'The memory of our ancestors lives not in cold monuments of stone, but in the truth we rescue from the dust of colonial archives.',
    quoteContext: 'From Efemérides Filipinas commentary',
    portraitSymbol: 'scroll-archive',
    imageUrl: '/images/mariano_ponce.jpg',
    photoCaption: 'Mariano Ponce ("Tikbalang"), managing editor, historian, and archivist of the expatriate colony.'
  },
  {
    id: 'antonio-luna',
    name: 'Antonio Luna de San Pedro y Novicio Ancheta',
    title: 'The Scientist, Essayist & Iron General',
    birthYear: 1866,
    deathYear: 1899,
    birthPlace: 'Binondo, Manila',
    penNames: [
      { name: 'Taga-Ilog', translation: 'River Dweller / Native Tagalog', meaning: 'Proud assertion of indigenous identity; river-dwellers of the Pasig.' }
    ],
    role: 'Scientific Contributor & Cultural Critic of La Solidaridad',
    education: [
      'Ateneo Municipal de Manila (Bachiller en Artes)',
      'University of Santo Tomas (Pharmacy)',
      'Universidad Central de Madrid (Licentiate & Doctorate in Pharmacy)',
      'Institut Pasteur (Paris - Chemistry & Bacteriology under Dr. Roux)'
    ],
    keyWorks: [
      { title: 'Impresiones (Impressions)', year: '1891 (Madrid)', medium: 'Satirical Essays', description: 'Delightful sketches of Spanish customs, Parisian salons, and colonial prejudices, published under Taga-Ilog.' },
      { title: 'El Hematozoario del Paludismo', year: '1893 (Madrid)', medium: 'Scientific Treatise', description: 'Pioneering microbiological study on malaria parasites recognized across European academies.' },
      { title: 'La Independencia Newspaper', year: '1898 (Malolos)', medium: 'Revolutionary Daily', description: 'Founded during the Philippine-American War as the foremost intellectual organ of the Republic.' }
    ],
    bio: 'Younger brother of painter Juan Luna. A polymath with a doctorate in pharmacy and a master fencing background. In Madrid he penned essays under "Taga-Ilog", famously defending Filipino dignity—nearly fighting duels with Celso Mir Deas and Wenceslao Retana.',
    ideology: 'Empirical scientific rigor, uncompromising personal dignity, military discipline, and national sovereignty.',
    quote: 'I do not fight that our children may bow their heads to another master; I fight for our absolute equality as men.',
    quoteContext: 'Correspondence with fellow reformists in Madrid',
    portraitSymbol: 'sword-flask',
    imageUrl: '/images/antonio_luna.jpg',
    photoCaption: 'Antonio Luna ("Taga-Ilog"), doctor of pharmacy, scientific essayist in La Solidaridad.'
  },
  {
    id: 'juan-luna',
    name: 'Juan Luna y Novicio',
    title: 'The Master Painter of the Spoliarium',
    birthYear: 1857,
    deathYear: 1899,
    birthPlace: 'Badoc, Ilocos Norte',
    penNames: [
      { name: 'J. Luna', translation: 'Personal Signature', meaning: 'Signed on canvases that silenced European racial theorists.' }
    ],
    role: 'Artistic Vanguard & Visual Ambassador',
    education: [
      'Ateneo Municipal de Manila',
      'Academia de Dibujo y Pintura (Manila)',
      'Real Academia de Bellas Artes de San Fernando (Madrid)'
    ],
    keyWorks: [
      { title: 'Spoliarium', year: '1884 (Madrid)', medium: 'Oil on Canvas (4.22m x 7.67m)', description: 'Won the Gold Medal (First Class) at the Exposición Nacional de Bellas Artes, Madrid. Metaphor of Roman cruelty and colonial despair.' },
      { title: 'The Blood Compact (El Pacto de Sangre)', year: '1886', medium: 'Historical Painting', description: 'Depicting Sikatuna and Legazpi sealing brotherhood, commissioned by the Ayuntamiento de Manila.' },
      { title: 'España y Filipinas', year: '1886', medium: 'Allegorical Oil Painting', description: 'Spain guiding a youthful Filipinas toward the luminous dawn of progress.' }
    ],
    bio: 'His triumph at the 1884 Madrid Fine Arts Exposition alongside Félix Resurrección Hidalgo was the cultural baptism of the Propaganda Movement. It proved to a skeptical European continent that genius has no race or geography.',
    ideology: 'Visual testament to Philippine intellectual parity, cultural emancipation, and sovereign artistry.',
    quote: 'Genius knows no country. It blossoms everywhere. Genius is like the light, the air. It belongs to all, cosmopolitan as space, as life, and as God.',
    quoteContext: 'José Rizal’s Brindis toast delivered in honor of Juan Luna, Madrid (1884)',
    portraitSymbol: 'palette-brush',
    imageUrl: '/images/juan_luna.jpg',
    photoCaption: 'Juan Luna in his Paris art atelier, creator of the epochal Spoliarium.'
  },
  {
    id: 'panganiban',
    name: 'José María Panganiban y Enverga',
    title: 'Jomapa: The Pure Intellect & Academic Martyr',
    birthYear: 1863,
    deathYear: 1890,
    birthPlace: 'Mambulao, Camarines Norte',
    penNames: [
      { name: 'Jomapa', translation: 'Abbreviation of his initials', meaning: 'Acronym on brilliant philosophical defenses of freedom of thought.' },
      { name: 'J.M.P.', translation: 'Initials', meaning: 'Used on student petitions.' }
    ],
    role: 'Philosopher, Essayist & Voice of University Reform',
    education: [
      'Seminario Conciliar de Nueva Cáceres (Sobresaliente)',
      'University of Santo Tomas (Philosophy & Medicine)',
      'Universidad de Barcelona (Medicine)'
    ],
    keyWorks: [
      { title: 'El Pensamiento (Freedom of Thought)', year: '1889 (La Solidaridad)', medium: 'Philosophical Treatise', description: 'Brilliant essay arguing that muzzling native intellect is a crime against humanity.' },
      { title: 'La Universidad de Manila: Su Plan de Estudio', year: '1889', medium: 'Educational Critique', description: 'Sharp deconstruction of medieval scholasticism and lack of modern science in colonial universities.' }
    ],
    bio: 'Renowned for a photographic memory that astonished Spanish professors. In Barcelona, he poured his failing physical health into essays for La Solidaridad. When he died of tuberculosis in August 1890 at age 27, Rizal wrote a heartbreaking eulogy: "A giant mind in a fragile vase."',
    ideology: 'Academic freedom, modern scientific pedagogy, freedom of conscience and press.',
    quote: 'Thinking is humanity’s divine privilege; to stifle it is to reduce civilized beings to beasts of burden.',
    quoteContext: 'From "El Pensamiento", La Solidaridad (1889)',
    portraitSymbol: 'brain-scroll',
    imageUrl: '/images/panganiban.jpg',
    photoCaption: 'José María Panganiban ("Jomapa"), photographic prodigy and champion of academic freedom.'
  },
  {
    id: 'blumentritt',
    name: 'Prof. Ferdinand Blumentritt',
    title: 'The European Brother & Ethnographic Shield',
    birthYear: 1853,
    deathYear: 1920,
    birthPlace: 'Prague, Kingdom of Bohemia',
    penNames: [
      { name: 'F. Blumentritt', translation: 'Scientific Byline', meaning: 'Lent European scholarly authority to Filipino anti-colonial claims.' }
    ],
    role: 'Austrian Ethnographer, Prologuist & International Defender',
    education: [
      'Charles University, Prague (Geography & History)'
    ],
    keyWorks: [
      { title: 'Prologue to Rizal’s Annotated Morga', year: '1890 (Paris)', medium: 'Scholarly Preface', description: 'Endorsement asserting that colonial friars obscured the Philippines’ sophisticated pre-colonial past.' },
      { title: 'Articles in La Solidaridad & European Journals', year: '1889–1895', medium: 'Scholarly Advocacy', description: 'Refuted racist anthropological tracts by Spanish friars in German and Austrian scientific periodicals.' }
    ],
    bio: 'A high school headmaster in Leitmeritz (Litoměřice) who became the world’s leading European authority on Philippine languages and ethnography without ever setting foot on the islands. He was Rizal’s closest intellectual brother and confident.',
    ideology: 'Scientific honesty, self-determination, and moral accountability of imperial empires to international law.',
    quote: 'Your cause is just, Rizal. History will judge that Spain lost an empire because her monarchs listened to monks instead of men.',
    quoteContext: 'Letter to Dr. José Rizal from Leitmeritz (1889)',
    portraitSymbol: 'globe-feather',
    imageUrl: '/images/blumentritt.jpg',
    photoCaption: 'Prof. Ferdinand Blumentritt, Austrian scholar and defender of Filipino sovereignty.'
  }
];

export const REFORM_DEMANDS: ReformDemand[] = [
  {
    id: 'demand-cortes',
    pillar: 'Parliamentary Representation',
    spanishTerm: 'Representación en las Cortes Españolas',
    objective: 'Restore Filipino delegates in the national parliament in Madrid, just as Cuba, Puerto Rico, and peninsular provinces enjoyed.',
    grievance: 'Filipinos were taxed and subjected to royal decrees without any voice or legislative representation in the Spanish Empire.',
    ilustradoAdvocate: 'Marcelo H. del Pilar & Graciano López Jaena',
    historicalOutcome: 'Consistently filibustered and denied by conservative Spanish ministries and the colonial friar lobby.'
  },
  {
    id: 'demand-secularization',
    pillar: 'Secularization & Anti-Frailocracia',
    spanishTerm: 'Secularización de las Parroquias',
    objective: 'Transfer Catholic parishes from Spanish regular friars (Augustinians, Dominicans, Franciscans, Recollects) to secular Filipino native priests.',
    grievance: 'Spanish friars held unchecked political authority, controlled local voting, owned sprawling haciendas, and instigated the execution of GOMBURZA.',
    ilustradoAdvocate: 'Dr. José Rizal & Marcelo H. del Pilar',
    historicalOutcome: 'The friar orders retaliated with arbitrary evictions (e.g. Calamba hacienda tenants) and deportation of reformists’ families.'
  },
  {
    id: 'demand-equality',
    pillar: 'Equality Before the Law',
    spanishTerm: 'Igualdad ante la Ley / Asimilación',
    objective: 'Transform the Philippines from a subjugated, arbitrary colony into an official Spanish province (provincia de ultramar) with full civil protections.',
    grievance: 'Racial caste hierarchy placed Peninsulares above Insulares, Mestizos, and "Indios". Filipinos could be detained without warrant or habeas corpus.',
    ilustradoAdvocate: 'All Ilustrados of La Solidaridad',
    historicalOutcome: 'Ignored by Madrid; prompted reformists like Rizal to conclude that assimilation was an illusion and autonomy was imperative.'
  },
  {
    id: 'demand-press',
    pillar: 'Freedom of Speech & Assembly',
    spanishTerm: 'Libertad de Imprenta y Reunión',
    objective: 'Abolish the Comision Permanente de Censura (Permanent Commission of Censorship) and grant citizens the right to petition and assemble.',
    grievance: 'Possessing a copy of Rizal’s Noli Me Tángere or an issue of La Solidaridad was treated as high treason and grounds for exile to Marianas or Jolo.',
    ilustradoAdvocate: 'Graciano López Jaena & José María Panganiban',
    historicalOutcome: 'Broadsheets had to be published in Barcelona and Madrid and secretly smuggled into Manila inside wine casks and dry goods.'
  },
  {
    id: 'demand-education',
    pillar: 'Modern Secular Education',
    spanishTerm: 'Reforma de la Instrucción Pública',
    objective: 'Establish state-funded schools with modern science, mathematics, world history, and universal Spanish instruction free from friar dogmatism.',
    grievance: 'Friar-run schools discouraged native Filipinos from learning Spanish to keep them isolated and docile, teaching rote catechism instead.',
    ilustradoAdvocate: 'Dr. José Rizal (Letter to Malolos Women)',
    historicalOutcome: 'Inspired the 20 brave young women of Malolos in 1888 to petition Governor-General Weyler for a night school to study Spanish.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1872,
    monthDay: 'February 17',
    title: 'The Martyrdom of GOMBURZA at Bagumbayan',
    spanishTitle: 'El Martirio de los Padres Gomez, Burgos y Zamora',
    location: 'Luneta / Bagumbayan, Manila',
    category: 'catalyst',
    leadFigure: 'Fathers Mariano Gomez, José Burgos, Jacinto Zamora',
    summary: 'Following the Cavite Mutiny of native soldiers and arsenal workers, the Spanish colonial regime falsely implicated and publicly garroted three Filipino secular priests.',
    detailedAnalysis: 'José Burgos was a mentor to Paciano Rizal (José’s older brother). The tragedy shattered the illusion of Spanish maternal benevolence and awakened a generation of young Filipinos to national consciousness. Rizal later dedicated El Filibusterismo to the three martyrs.',
    historicalSignificance: 'The foundational trauma and opening catalyst of the Propaganda Movement.'
  },
  {
    year: 1882,
    monthDay: 'May 3',
    title: 'Rizal Departs Manila Secretly for Spain',
    spanishTitle: 'Salida Secreta de Rizal hacia España',
    location: 'SS Salvadora, Pasig River to Barcelona',
    category: 'turning-point',
    leadFigure: 'Dr. José Rizal & Paciano Rizal',
    summary: 'With financial aid and blessing from Paciano, José Rizal boarded the steamer Salvadora under the alias "José Mercado" to continue his studies in Madrid and begin his patriotic mission.',
    detailedAnalysis: 'Rizal enrolled in the Universidad Central de Madrid in Medicine and Philosophy and Letters. In Barcelona and Madrid, he encountered hundreds of expatriate students and reform-minded Spanish republicans.',
    historicalSignificance: 'Marks the migration of Filipino intellectual dissent from Manila to the metropole of Madrid.'
  },
  {
    year: 1882,
    monthDay: 'August 1',
    title: 'Foundation of Diariong Tagalog in Manila',
    spanishTitle: 'Aparición de Diariong Tagalog',
    location: 'Manila',
    category: 'publication',
    leadFigure: 'Marcelo H. del Pilar & Francisco Calvo',
    summary: 'The first daily bilingual newspaper in Tagalog and Spanish, featuring Rizal’s patriotic essay "El Amor Patrio" (translated into Tagalog as "Pag-ibig sa Tinubuang Bayan" by Del Pilar).',
    detailedAnalysis: 'Demonstrated the potent synthesis between Rizal’s poetic nationalism and Del Pilar’s mastery of the vernacular tongue to reach ordinary townspeople.',
    historicalSignificance: 'First public platform connecting expatriate writings in Europe with audiences in the Philippines.'
  },
  {
    year: 1884,
    monthDay: 'June 25',
    title: 'The Madrid Brindis Speech for Juan Luna & Hidalgo',
    spanishTitle: 'El Célebre Brindis de Rizal en el Banquete de Luna y Hidalgo',
    location: 'Café Inglés, Madrid',
    category: 'cultural',
    leadFigure: 'Dr. José Rizal, Juan Luna, Félix Resurrección Hidalgo',
    summary: 'At a celebratory banquet honoring Juan Luna’s Gold Medal for the Spoliarium and Hidalgo’s Silver Medal, 23-year-old Rizal delivered an electrifying, unscripted toast.',
    detailedAnalysis: 'Rizal boldly declared that genius is bounded by neither race nor geography. He praised Spain’s noble cultural sons while delivering veiled warnings that colonial blindness was jeopardizing her transatlantic ties.',
    historicalSignificance: 'Rizal was marked as a dangerous filibustero by the friars in Manila who read the transcript in Madrid newspapers.',
    imageUrl: '/images/spoliarium.jpg',
    photoCaption: 'The Spoliarium (1884) by Juan Luna, celebrated in Rizal’s Madrid Brindis toast.'
  },
  {
    year: 1887,
    monthDay: 'March 21',
    title: 'Publication of Noli Me Tángere in Berlin',
    spanishTitle: 'Impresión del Noli Me Tángere en Berlín',
    location: 'Berliner Buchdruckerei-Actien-Gesellschaft, Berlin',
    category: 'publication',
    leadFigure: 'Dr. José Rizal & Dr. Maximo Viola',
    summary: 'Rescued from starvation and despair by financial patron Dr. Maximo Viola, Rizal printed 2,000 copies of his epoch-making novel exposing the "social cancer" of Spanish colonial rule.',
    detailedAnalysis: 'The novel satirized corrupt friars (Padre Dámaso, Padre Salví), subservient natives (Capitan Tiago), and colonial sycophants (Doña Victorina). It was immediately banned in the Philippines, making copies priceless relics read in secret.',
    historicalSignificance: 'The definitive literary masterpiece that gave birth to modern Philippine national identity.'
  },
  {
    year: 1888,
    monthDay: 'December 12',
    title: 'The Young Women of Malolos Petition',
    spanishTitle: 'La Petición de las Mujeres de Malolos',
    location: 'Malolos, Bulacan',
    category: 'cultural',
    leadFigure: 'Twenty Young Women of Malolos & Dr. José Rizal',
    summary: 'Twenty brave women presented a petition to Governor-General Weyler requesting authorization to open a night school to learn the Spanish language under Teodoro Sandiko.',
    detailedAnalysis: 'Defying the local parish priest Padre Felipe García, the women demonstrated female intellectual agency. Marcelo H. del Pilar requested Rizal to write them a letter of commendation from London, resulting in the famous "Sulat sa mga Kadalagahan sa Malolos".',
    historicalSignificance: 'Pivotal milestone in the fight for women’s civic rights, education, and moral equality in colonial Asia.'
  },
  {
    year: 1889,
    monthDay: 'February 15',
    title: 'Inaugural Issue of La Solidaridad in Barcelona',
    spanishTitle: 'Aparición del Primer Número de La Solidaridad',
    location: 'Plaza de Buensuceso, Barcelona',
    category: 'publication',
    leadFigure: 'Graciano López Jaena (Editor) & Pablo Rianzares',
    summary: 'Volume 1, Number 1 of the bi-weekly broadsheet rolled off the presses with the famous opening editorial "Nuestro Propósito", pledging to champion democracy, human rights, and social justice.',
    detailedAnalysis: 'The publication served as the official organ of the Propaganda Movement. Articles exposed atrocities in the provinces, lobbied the Spanish Cortes, and dismantled friar propaganda.',
    historicalSignificance: 'The collective intellectual shield and sword of the Filipino diaspora in Europe.',
    imageUrl: '/images/la_solidaridad.jpg',
    photoCaption: 'Facsimile of La Solidaridad, Vol. I, No. 1, Barcelona, February 15, 1889.'
  },
  {
    year: 1889,
    monthDay: 'November 15',
    title: 'Del Pilar Takes Over Editorship & Moves to Madrid',
    spanishTitle: 'Marcelo H. del Pilar asume la Dirección en Madrid',
    location: 'Calle de Atocha, Madrid',
    category: 'publication',
    leadFigure: 'Marcelo H. del Pilar & Mariano Ponce',
    summary: 'Starting with Volume 1, Number 19, the editorial office moved from Barcelona to Madrid, the imperial capital, to lobby the Spanish parliament directly.',
    detailedAnalysis: 'Under Del Pilar’s stewardship, the newspaper gained political teeth, engaging in fierce polemics with conservative newspapers like La Época and colonial defenders like Wenceslao Retana.',
    historicalSignificance: 'Brought the reformist campaign into the halls of power and Spanish liberal circles.',
    imageUrl: '/images/del_pilar.jpg',
    photoCaption: 'Marcelo H. del Pilar (Plaridel), who took command of the broadsheet in Madrid in November 1889.'
  },
  {
    year: 1890,
    monthDay: 'January',
    title: 'Rizal Publishes Annotated Morga in Paris',
    spanishTitle: 'Publicación de los Sucesos de Morga Anotados por Rizal',
    location: 'Garnier Hermanos, Paris',
    category: 'publication',
    leadFigure: 'Dr. José Rizal & Prof. Ferdinand Blumentritt',
    summary: 'Rizal published his annotated edition of Antonio de Morga’s 1609 "Sucesos de las Islas Filipinas", with a prologue by Austrian scholar Ferdinand Blumentritt.',
    detailedAnalysis: 'Rizal spent months at the British Museum in London painstakingly transcribing the rare work by hand. His meticulous footnotes proved that Filipinos had advanced maritime technology, metallurgy, agriculture, and writing long before Spanish conquest.',
    historicalSignificance: 'Reclaimed pre-colonial Filipino dignity and destroyed the myth of European racial supremacy.',
    imageUrl: '/images/blumentritt.jpg',
    photoCaption: 'Prof. Ferdinand Blumentritt of Leitmeritz, who penned the scholarly prologue to Rizal’s edition of Morga.'
  },
  {
    year: 1891,
    monthDay: 'January 1',
    title: 'The Rizal–Del Pilar Leadership Election in Madrid',
    spanishTitle: 'La Elección del "Responsable" en la Colonia Filipina',
    location: 'Madrid',
    category: 'turning-point',
    leadFigure: 'Dr. José Rizal & Marcelo H. del Pilar',
    summary: 'A contentious election among the Filipino expatriates in Madrid to choose a single leader ("El Responsable") split the colony between "Rizalistas" and "Pilaristas".',
    detailedAnalysis: 'Although Rizal eventually won the required two-thirds majority on the third day of voting, he felt deep bitterness that his leadership was challenged. He abdicated the position, packed his bags, and refused to write for La Solidaridad again, ending their close collaboration.',
    historicalSignificance: 'A tragic internal rift demonstrating the philosophical tension between moral idealism (Rizal) and political pragmatism (Del Pilar).',
    imageUrl: '/images/ilustrados_madrid.jpg',
    photoCaption: 'The Ilustrados in Madrid (c. 1890): José Rizal (center), Marcelo H. del Pilar (right), Mariano Ponce (left).'
  },
  {
    year: 1891,
    monthDay: 'September 18',
    title: 'El Filibusterismo Published in Ghent',
    spanishTitle: 'Aparición de El Filibusterismo en Gante',
    location: 'F. Meyer-Van Loo Press, Ghent, Belgium',
    category: 'publication',
    leadFigure: 'Dr. José Rizal & Valentin Ventura',
    summary: 'Rizal printed his sequel to the Noli, dedicated to the memory of GOMBURZA. When funds ran dry, fellow reformist Valentin Ventura wired money to save the printing press run.',
    detailedAnalysis: 'Darker and more political than Noli, the novel warned that persistent colonial oppression inevitably leads to armed rebellion—yet warned equally that revolutions born of bitterness without virtue will perish.',
    historicalSignificance: 'Cemented Rizal’s reputation as the uncompromising prophet of the Philippine nation.',
    imageUrl: '/images/rizal.jpg',
    photoCaption: 'Dr. José Rizal during the publication of El Filibusterismo in Ghent, Belgium (1891).'
  },
  {
    year: 1892,
    monthDay: 'July 3',
    title: 'Rizal Founds La Liga Filipina in Tondo, Manila',
    spanishTitle: 'Fundación de La Liga Filipina en Manila',
    location: 'House of Doroteo Ongjunco, Ilaya Street, Tondo',
    category: 'organization',
    leadFigure: 'Dr. José Rizal, Apolinario Mabini, Andres Bonifacio',
    summary: 'Returning to Manila at great personal risk, Rizal convened progressive patriots, craftsmen, and intellectuals to establish a civic league for national solidarity and mutual aid.',
    detailedAnalysis: 'Present in the audience was young warehouse clerk Andres Bonifacio. Just three days later, on July 6, Governor-General Despujol arrested Rizal and exiled him to remote Dapitan in Mindanao. On July 7, Bonifacio founded the Katipunan (KKK).',
    historicalSignificance: 'The bridge between the peaceful Propaganda Movement and the revolutionary Katipunan.'
  },
  {
    year: 1895,
    monthDay: 'November 15',
    title: 'The Final Issue of La Solidaridad',
    spanishTitle: 'El Último Número de La Solidaridad',
    location: 'Madrid',
    category: 'publication',
    leadFigure: 'Marcelo H. del Pilar',
    summary: 'Suffering from hunger, consumption, and lack of funds from Manila, Del Pilar published Volume 7, Number 160 of La Solidaridad, closing its seven-year crusade.',
    detailedAnalysis: 'In his farewell editorial, Del Pilar declared that although the paper had to close its print run, the sacred struggle for Filipino dignity would never cease. Del Pilar died in a Madrid charity hospital on July 4, 1896.',
    historicalSignificance: 'Marked the formal conclusion of the peaceful propaganda campaign, opening the path for armed revolution.',
    imageUrl: '/images/la_solidaridad.jpg',
    photoCaption: 'La Solidaridad closed its 7-year publishing run on November 15, 1895.'
  },
  {
    year: 1896,
    monthDay: 'December 30',
    title: 'The Execution of Dr. José Rizal at Bagumbayan',
    spanishTitle: 'Fusilamiento del Dr. José Rizal en Bagumbayan',
    location: 'Bagumbayan Field, Manila',
    category: 'catalyst',
    leadFigure: 'Dr. José Rizal',
    summary: 'After a show trial by a Spanish military tribunal on charges of rebellion, sedition, and founding illegal associations, Rizal was executed by firing squad at 7:03 AM.',
    detailedAnalysis: 'On the eve of his martyrdom, he penned his immortal farewell poem "Mi Último Adiós" hidden inside an alcohol cooking lamp. His death ignited an irreversible wildfire across the archipelago, permanently dismantling the Spanish Empire in Asia.',
    historicalSignificance: 'The crowning martyrdom that sealed the Philippine Revolution.',
    imageUrl: '/images/execution_rizal.jpg',
    photoCaption: 'Contemporary photograph of the execution of Dr. José Rizal at Bagumbayan Field, Manila (December 30, 1896).'
  }
];

export const COLONIAL_TERMS: ColonialTerm[] = [
  {
    term: 'Ilustrado',
    etymology: 'Spanish for "The Enlightened / Erudite Ones"',
    definition: 'The educated, European-influenced middle-class Filipino intelligentsia in the late 19th century.',
    contextIn19thCentury: 'Children of prosperous merchants and landholders who studied in Manila and Europe, mastering science, law, languages, and political philosophy.',
    propagandistCritique: 'The Ilustrados exposed the fallacy that Filipinos were mentally inferior or naturally docile.'
  },
  {
    term: 'Frailocracia',
    etymology: 'Coined by Marcelo H. del Pilar from "fraile" (friar) and "kratos" (rule)',
    definition: 'The monastic supremacy or shadow government exercised by Spanish regular religious orders in the Philippines.',
    contextIn19thCentury: 'Parish friars controlled municipal administration, education, land ownership, police surveillance, and political appointments.',
    propagandistCritique: 'Identified by Plaridel and Rizal as the prime impediment to moral, civil, and economic progress.'
  },
  {
    term: 'Filibustero',
    etymology: 'From Dutch "vrijbuiter" (freebooter), adopted in Spanish for subversive or treasonous agitators',
    definition: 'A colonial pejorative label applied by Spanish authorities and friars to any educated Filipino suspected of questioning colonial supremacy.',
    contextIn19thCentury: 'Merely speaking Spanish without friar permission or reading European books could earn one the death-warrant label of filibustero.',
    propagandistCritique: 'Rizal reclaimed the title with pride by naming his 1891 masterpiece El Filibusterismo.'
  },
  {
    term: 'Indio',
    etymology: 'Colonial Spanish classification for indigenous inhabitants of the East and West Indies',
    definition: 'The racial label assigned to native brown Filipinos at the bottom of the colonial caste system.',
    contextIn19thCentury: 'Accompanied by pejorative stereotypes of indolence, superstition, and childlike docility.',
    propagandistCritique: 'In 1889, Rizal and reformists founded the secret society "Indios Bravos" in Paris, boldly turning the insult into a badge of courage.'
  },
  {
    term: 'Cortes Generales',
    etymology: 'The parliamentary assembly of Spain',
    definition: 'The national legislature in Madrid where imperial laws, taxes, and colonial policies were enacted.',
    contextIn19thCentury: 'The Philippines had briefly enjoyed representation in the Cortes during the liberal constitutions of 1810–1813, 1820–1823, and 1834–1837, before being stripped of it.',
    propagandistCritique: 'Restoring parliamentary seats for Philippine deputies was the foremost legislative demand of La Solidaridad.'
  },
  {
    term: 'Polo y Servicios',
    etymology: 'Forced corvée labor system',
    definition: 'Mandatory 40-day (later reduced to 15-day) annual manual labor imposed on native male Filipinos aged 16 to 60.',
    contextIn19thCentury: 'Used to build military roads, churches, bridges, and cut timber for galleons, taking farmers away from their harvest.',
    propagandistCritique: 'Denounced by Rizal in "Sobre la indolencia" as a major cause of agricultural ruin and depopulation.'
  },
  {
    term: 'Cédula Personal',
    etymology: 'Personal identity certificate / poll tax receipt',
    definition: 'Compulsory identification paper instituted in 1884 replacing the tribute system.',
    contextIn19thCentury: 'Every resident had to carry it at all times; failing to present it to the Guardia Civil resulted in immediate arrest or whipping.',
    propagandistCritique: 'Torn up by Andres Bonifacio and the Katipuneros at the Cry of Pugad Lawin in August 1896 as the ultimate symbol of colonial rejection.'
  },
  {
    term: 'Asimilación',
    etymology: 'Assimilation / Integration into the Mother Country',
    definition: 'The political strategy of converting the Philippines from an exploited colony into an overseas Spanish province with full constitutional rights.',
    contextIn19thCentury: 'The official platform advocated by La Solidaridad to pursue reforms peacefully within Spanish law.',
    propagandistCritique: 'Served as an essential transition stage that proved to the public that Spain would never voluntarily grant real equality.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What seminal event in 1872 is universally regarded by historians as the spark that awakened the Propaganda Movement?',
    context: 'The tragedy that José Rizal dedicated his second novel El Filibusterismo to.',
    options: [
      'The opening of the Suez Canal',
      'The public garrote execution of Fathers Gomez, Burgos, and Zamora (GOMBURZA)',
      'The founding of the Katipunan',
      'The arrival of Governor-General Carlos María de la Torre'
    ],
    correctIndex: 1,
    explanation: 'The unjust execution of the three secular priests in the wake of the Cavite Mutiny shocked young Filipinos and shattered their faith in colonial justice.'
  },
  {
    id: 2,
    question: 'Which of the following was the primary organ and bi-weekly broadsheet of the Propaganda Movement?',
    context: 'Printed first in Barcelona in 1889, then moved to Madrid.',
    options: [
      'Diariong Tagalog',
      'Kalayaan',
      'La Solidaridad',
      'El Renacimiento'
    ],
    correctIndex: 2,
    explanation: 'La Solidaridad (1889–1895) was the official publication spearheaded by Graciano López Jaena and later Marcelo H. del Pilar to lobby the Spanish parliament and educate the public.'
  },
  {
    id: 3,
    question: 'Under what pen name did Marcelo H. del Pilar publish blistering parodies of Catholic prayers like "Dasalan at Tocsohan"?',
    context: 'He also used the famous byline Plaridel.',
    options: [
      'Dolores Manapat',
      'Dimasalang',
      'Tikbalang',
      'Taga-Ilog'
    ],
    correctIndex: 0,
    explanation: 'Del Pilar used "Dolores Manapat" on anti-clerical vernacular tracts like Dasalan at Tocsohan to evade detection by the parish friars.'
  },
  {
    id: 4,
    question: 'What did Juan Luna’s Gold Medal win for "Spoliarium" at the 1884 Madrid Fine Arts Exposition signify for the reformists?',
    context: 'Celebrated by José Rizal in his famous Madrid Brindis speech.',
    options: [
      'That Spain would grant immediate political independence',
      'That Filipino intellect and creative genius were equal to those of any European nation',
      'That the Spanish royal family agreed to abolish colonial taxes',
      'That the Catholic friars would surrender their haciendas'
    ],
    correctIndex: 1,
    explanation: 'Luna’s and Hidalgo’s European triumphs shattered racist colonial dogmas claiming native Filipinos lacked the intellectual capacity for higher culture.'
  },
  {
    id: 5,
    question: 'Why did Dr. José Rizal painstakingly transcribe and annotate Antonio de Morga’s 1609 "Sucesos de las Islas Filipinas"?',
    context: 'Undertaken over many months at the British Museum in London.',
    options: [
      'To discover hidden gold deposits in the Visayas',
      'To demonstrate that Filipinos had a rich, civilized society before Spanish colonization',
      'To please the Archbishop of Manila for an official pardon',
      'To translate Morga into German for Ferdinand Blumentritt'
    ],
    correctIndex: 1,
    explanation: 'Rizal sought to restore historical self-esteem to his countrymen by proving they possessed an advanced civilization, metallurgy, maritime trade, and written script prior to the conquest.'
  },
  {
    id: 6,
    question: 'What was the famous term coined by Marcelo H. del Pilar to describe the all-powerful monastic rule over Philippine colonial society?',
    context: 'He authored a famous treatise analyzing this shadow government in 1889.',
    options: [
      'Patronato Real',
      'Frailocracia',
      'Encomienda',
      'Principalia'
    ],
    correctIndex: 1,
    explanation: 'Del Pilar coined "Frailocracia" (monastic supremacy) to expose how the regular friar orders wielded more true power than the civil governor-generals.'
  },
  {
    id: 7,
    question: 'Which foreign European scholar was Dr. José Rizal’s most loyal intellectual collaborator and Austrian confidant?',
    context: 'A headmaster from Leitmeritz, Bohemia who never visited the Philippines in person.',
    options: [
      'Dr. Rudolf Virchow',
      'Prof. Ferdinand Blumentritt',
      'Dr. Louis de Wecker',
      'Wenceslao Retana'
    ],
    correctIndex: 1,
    explanation: 'Prof. Ferdinand Blumentritt of Austria wrote the scholarly prologue to Rizal’s edition of Morga and tirelessly defended the Filipino cause in European scientific circles.'
  },
  {
    id: 8,
    question: 'Who was the first Editor-in-Chief of La Solidaridad when it was launched on February 15, 1889 in Barcelona?',
    context: 'Renowned for fiery speeches and author of the satire "Fray Botod".',
    options: [
      'Dr. José Rizal',
      'Marcelo H. del Pilar',
      'Graciano López Jaena',
      'Mariano Ponce'
    ],
    correctIndex: 2,
    explanation: 'Graciano López Jaena founded and initially edited La Solidaridad, penning its inaugural manifesto "Nuestro Propósito" before Marcelo H. del Pilar took over later that year.'
  },
  {
    id: 9,
    question: 'What civic organization was founded by José Rizal on July 3, 1892 in Tondo, Manila, just days before his exile to Dapitan?',
    context: 'Attended by a young Andres Bonifacio, it advocated mutual aid and economic self-reliance.',
    options: [
      'Katipunan (KKK)',
      'La Liga Filipina',
      'Asociación Hispano-Filipina',
      'Indios Bravos'
    ],
    correctIndex: 1,
    explanation: 'La Liga Filipina was Rizal’s peaceful civic union. Its suppression following his arrest convinced Bonifacio that peaceful reform had reached a dead end.'
  },
  {
    id: 10,
    question: 'What was the core political objective of the Propaganda Movement regarding Philippine status in the Spanish Empire?',
    context: 'Distinct from the Katipunan’s goal of immediate violent secession.',
    options: [
      'Complete annexation by Great Britain or Germany',
      'Assimilation as an official province of Spain with constitutional representation in the Cortes',
      'Establishment of an absolute native monarchy under the Sultanate of Sulu',
      'Total expulsion of all Spanish civilians and mestizos'
    ],
    correctIndex: 1,
    explanation: 'The Propaganda Movement championed assimilation: transforming the colony into an overseas Spanish province with voting delegates in the Cortes and equal constitutional rights.'
  }
];

export interface ArchivalPhotoItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'portraits' | 'events' | 'artworks' | 'publications';
  imageUrl: string;
  caption: string;
  provenance: string;
  significance: string;
}

export const ARCHIVAL_GALLERY: ArchivalPhotoItem[] = [
  {
    id: 'rizal-1890',
    title: 'Dr. José Rizal in Madrid',
    subtitle: 'The 1890 Definitive Studio Daguerreotype',
    year: 'c. 1890',
    category: 'portraits',
    imageUrl: '/images/rizal.jpg',
    caption: 'Studio portrait of Dr. José Rizal at age 29, captured during the writing of El Filibusterismo and his historical annotations of Morga’s Sucesos.',
    provenance: 'Fotografía Debas / Archivo Histórico de Madrid',
    significance: 'Regarded as the definitive photographic likeness of the national hero during his intellectual leadership in Europe.'
  },
  {
    id: 'ilustrados-madrid-1890',
    title: 'The Propagandists in Madrid',
    subtitle: 'José Rizal, Marcelo H. del Pilar & Mariano Ponce',
    year: '1890',
    category: 'events',
    imageUrl: '/images/ilustrados_madrid.jpg',
    caption: 'Historic gathering of the three foremost leaders of the Filipino reformist colony in Madrid, dressed in European winter overcoats.',
    provenance: 'Colección Fotográfica Epifanio de los Santos',
    significance: 'Iconic visual record of the peaceful alliance directing the propaganda campaign across European capitals.'
  },
  {
    id: 'marcelo-del-pilar',
    title: 'Marcelo H. del Pilar (Plaridel)',
    subtitle: 'Director of La Solidaridad in Exile',
    year: 'c. 1890',
    category: 'portraits',
    imageUrl: '/images/del_pilar.jpg',
    caption: 'Portrait of Plaridel, the relentless political strategist and satirist who edited La Solidaridad from October 1889 until 1895.',
    provenance: 'Archivo General de la Administración, Alcalá de Henares',
    significance: 'The indefatigable soul who lobbied the Spanish Cortes and republican lodges for colonial representation.'
  },
  {
    id: 'spoliarium-canvas',
    title: 'Spoliarium by Juan Luna',
    subtitle: 'Gold Medal Winner at the 1884 Madrid National Exposition of Fine Arts',
    year: '1884',
    category: 'artworks',
    imageUrl: '/images/spoliarium.jpg',
    caption: 'Massive monumental canvas (4.22m × 7.67m) depicting fallen Roman gladiators dragged into the dark subterranean spoliarium, an allegorical reflection of colonial subjugation.',
    provenance: 'National Museum of Fine Arts, Manila / Formerly Exposición de Madrid',
    significance: 'The artistic triumph that shattered European racial superiority claims and inspired Rizal’s historic Madrid Brindis speech.'
  },
  {
    id: 'graciano-lopez-jaena',
    title: 'Graciano López Jaena',
    subtitle: 'Founding Editor & Golden Orator',
    year: 'c. 1889',
    category: 'portraits',
    imageUrl: '/images/lopez_jaena.jpg',
    caption: 'Graciano López Jaena, whose electrifying speeches in Barcelona and Madrid championed colonial emancipation and free commerce.',
    provenance: 'Ateneo de Barcelona / Archivo de la Biblioteca Nacional de España',
    significance: 'Authored Fray Botod and launched Volume I, Issue 1 of La Solidaridad on February 15, 1889.'
  },
  {
    id: 'la-solidaridad-issue1',
    title: 'La Solidaridad Broadside Facsimile',
    subtitle: 'Año I, Núm. 1 · Barcelona, 15 de Febrero de 1889',
    year: '1889',
    category: 'publications',
    imageUrl: '/images/la_solidaridad.jpg',
    caption: 'Facsimile of the inaugural front page featuring the manifesto "Nuestro Propósito", printed at Plaza del Buensuceso, Barcelona.',
    provenance: 'Hemeroteca Municipal de Madrid / Biblioteca Nacional de Filipinas',
    significance: 'The official voice and journalistic organ of the Filipino reform movement in Europe for seven years.'
  },
  {
    id: 'juan-luna-atelier',
    title: 'Juan Luna y Novicio in Studio',
    subtitle: 'The Master Painter in Paris',
    year: 'c. 1890',
    category: 'portraits',
    imageUrl: '/images/juan_luna.jpg',
    caption: 'Juan Luna seated with his painter’s palette in his Parisian studio at Boulevard Arago, meeting place of Filipino expatriates.',
    provenance: 'Colección Familia Luna / Studio Nadar, Paris',
    significance: 'Proved to the world that Filipino genius was equal to that of European masters.'
  },
  {
    id: 'antonio-luna-portrait',
    title: 'Antonio Luna (Taga-Ilog)',
    subtitle: 'Doctor of Pharmacy & Scientific Essayist',
    year: 'c. 1892',
    category: 'portraits',
    imageUrl: '/images/antonio_luna.jpg',
    caption: 'Young Antonio Luna in Madrid, researcher in bacteriology at the Institut Pasteur and polemical essayist under the pen name "Taga-Ilog".',
    provenance: 'Archivo Militar de Segovia',
    significance: 'Defended Filipino dignity in European literary circles, later becoming General-in-Chief of the Philippine Republic.'
  },
  {
    id: 'mariano-ponce-portrait',
    title: 'Mariano Ponce (Tikbalang)',
    subtitle: 'Managing Director & Diplomatic Envoy',
    year: 'c. 1895',
    category: 'portraits',
    imageUrl: '/images/mariano_ponce.jpg',
    caption: 'Mariano Ponce, medical graduate of Universidad Central de Madrid, editor, and chronicler who ensured the bi-weekly dispatches were circulated.',
    provenance: 'Archivo Nacional de Filipinas',
    significance: 'Preserved the historical memory of the movement and represented the First Philippine Republic in Japan.'
  },
  {
    id: 'jose-maria-panganiban-plate',
    title: 'José María Panganiban (Jomapa)',
    subtitle: 'Prodigy of Academic Freedom & Essayist',
    year: 'c. 1889',
    category: 'portraits',
    imageUrl: '/images/panganiban.jpg',
    caption: 'José María Panganiban, brilliant contributor to La Solidaridad whose early death in 1890 was mourned as the passing of a pure intellect.',
    provenance: 'Archivo de la Universidad de Barcelona',
    significance: 'Authored El Pensamiento, the foremost philosophical treatise advocating unconditional freedom of expression.'
  },
  {
    id: 'ferdinand-blumentritt-plate',
    title: 'Prof. Ferdinand Blumentritt',
    subtitle: 'Austrian Ethnographer & Rizal’s Confidant',
    year: 'c. 1890',
    category: 'portraits',
    imageUrl: '/images/blumentritt.jpg',
    caption: 'Prof. Ferdinand Blumentritt in Leitmeritz (Litoměřice), Bohemia, who wrote the preface to Rizal’s edition of Morga’s Sucesos.',
    provenance: 'Leitmeritz Museum Archives / Czech Republic',
    significance: 'The foremost European scholar who lent scientific credibility to the Filipino struggle for freedom.'
  },
  {
    id: 'execution-rizal-bagumbayan',
    title: 'The Execution of Dr. José Rizal',
    subtitle: 'Bagumbayan Field, Manila · December 30, 1896',
    year: '1896',
    category: 'events',
    imageUrl: '/images/execution_rizal.jpg',
    caption: 'Rare contemporary photograph of the Spanish firing squad and assembled crowd at Bagumbayan moments before Dr. José Rizal’s martyrdom.',
    provenance: 'Manuel Arias Rodríguez Collection / Biblioteca Nacional de España',
    significance: 'The supreme sacrifice that galvanized the Philippine Revolution into an unstoppable struggle for complete national independence.'
  },
  {
    id: 'rizal-1896-martyrdom',
    title: 'Dr. José Rizal in 1896',
    subtitle: 'Final Photographic Likeness Before Fort Santiago Trial',
    year: '1896',
    category: 'portraits',
    imageUrl: '/images/rizal_1896.jpg',
    caption: 'Last known studio photograph of Dr. José Rizal before his military imprisonment at Fort Santiago and subsequent execution.',
    provenance: 'Archivo Histórico Nacional / Madrid',
    significance: 'The quiet dignity of the national hero facing trial and martyrdom for his literary and reformist ideals.'
  }
];

