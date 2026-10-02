export interface PrimaryDocument {
  id: string;
  title: string;
  spanishTitle: string;
  author: string;
  authorPenName?: string;
  date: string;
  publication: string;
  city: string;
  significance: string;
  spanishExcerpt: string;
  englishTranslation: string;
  historicalContext: string;
  keyThemes: string[];
  imageUrl?: string;
  imageCaption?: string;
  fullReadingNote?: string;
}

export const PRIMARY_DOCUMENTS: PrimaryDocument[] = [
  {
    id: 'nuestro-proposito',
    title: 'Our Purpose (Nuestro Propósito)',
    spanishTitle: 'Nuestro Propósito — Editorial del Primer Número',
    author: 'Graciano López Jaena',
    authorPenName: 'Redacción / Diego Laura',
    date: 'February 15, 1889',
    publication: 'La Solidaridad, Vol. I, No. 1',
    city: 'Barcelona, Spain',
    significance: 'The official inaugural editorial laying down the manifesto and solemn mission of La Solidaridad to the Spanish nation and the civilized world.',
    imageUrl: '/images/la_solidaridad.jpg',
    imageCaption: 'Facsimile of La Solidaridad Vol. I, No. 1, Barcelona (February 15, 1889)',
    spanishExcerpt: `Modestas, modestísimas son nuestras aspiraciones. Nuestro programa, por demás sencillo, sumamente sencillo es: combatir toda reacción, impedir todo retroceso, aplaudir y aceptar toda idea liberal, defender todo principio progresivo; en una palabra: un propagandista más de todos los ideales de la democracia, aspirando a que impere en todos los pueblos de allende y aquende los mares.

Los fines, pues, de LA SOLIDARIDAD están definidos en recoger, recopilar las ideas liberales que diariamente se desparraman en el campo de la política, en los terrenos de las ciencias, artes, letras, comercio, agricultura e industria.

También discutiremos todas las cuestiones que se refieran a los intereses generales de la nación, buscando soluciones en sentido altamente nacional y eminentemente democrático.

Las provincias de Ultramar encontrarán en LA SOLIDARIDAD un periódico leal, un órgano que refleje sus necesidades y sus dolores...`,
    englishTranslation: `Modest, very modest are our aspirations. Our program, exceeding simple, exceptionally simple, is: to fight all reaction, to halt any retrogressive step, to applaud and embrace every liberal idea, to defend every progressive principle; in a word: to be one more propagandist for all the ideals of democracy, aspiring that it may hold sway in all peoples beyond and across the seas.

The objectives, then, of LA SOLIDARIDAD are defined in gathering and compiling the liberal ideas that are daily scattered across the field of politics, in the fields of sciences, arts, letters, commerce, agriculture, and industry.

We shall likewise debate all questions touching the general interests of the nation, seeking solutions in an elevated national spirit and an eminently democratic sense.

The overseas provinces will find in LA SOLIDARIDAD a loyal journal, an organ that reflects their needs and their sorrows...`,
    historicalContext: 'Written in Barcelona when young expatriates organized under the presidency of Galicano Apacible and financed by Pablo Rianzares. It set the intellectual standard of courteous yet unyielding debate.',
    keyThemes: ['Democratic ideals', 'Anti-reactionary stance', 'Overseas representation', 'Civil enlightenment']
  },
  {
    id: 'brindis-speech',
    title: 'The Madrid Brindis Speech (Toast to Luna & Hidalgo)',
    spanishTitle: 'El Célebre Brindis en el Banquete de Luna y Hidalgo',
    author: 'Dr. José Rizal',
    authorPenName: 'José Rizal',
    date: 'June 25, 1884',
    publication: 'Delivered at Café Inglés; printed in Los Dos Mundos',
    city: 'Madrid, Spain',
    significance: 'Rizal’s bold public declaration that genius is not the monopoly of race or climate, hailing Juan Luna’s Gold Medal for Spoliarium and Félix Resurrección Hidalgo’s Silver Medal.',
    imageUrl: '/images/spoliarium.jpg',
    imageCaption: 'Juan Luna’s Spoliarium (1884), Gold Medalist at Madrid National Exposition of Fine Arts',
    spanishExcerpt: `Luna y Hidalgo son glorias españolas como filipinas: así como nacieron en Filipinas, pudieron haber nacido en España, porque el genio no tiene patria, el genio brota en todas partes, el genio es como la luz, el aire, patrimonio de todos, cosmopolita como el espacio, como la vida, como Dios.

La era patriarcal en Filipinas va pasando; las obras ilustres de sus hijos ya no se consuman dentro del hogar; la juventud oriental ya no se encierra en su cascarón; la juventud filipina vuela a lejanas regiones a buscar el aire de la libertad, ávida de luz...

Brindo, pues, por nuestros artistas Luna y Hidalgo, glorias legítimas y puras de dos pueblos; brindo por la juventud filipina, sagrada esperanza de mi Patria... ¡Y que España, madre cariñosa y atenta al bien de sus provincias, ponga pronto en práctica las reformas que desde hace tiempo proyecta!`,
    englishTranslation: `Luna and Hidalgo are Spanish glories as well as Filipino: just as they were born in the Philippines, they could have been born in Spain, because genius knows no country, genius blossoms everywhere, genius is like the light, the air, the patrimony of all, cosmopolitan like space, like life, like God.

The patriarchal era in the Philippines is passing away; the illustrious works of its sons are no longer consummated inside the home; oriental youth no longer confines itself within its shell; Filipino youth flies to distant regions in search of the air of freedom, avid for light...

I drink, then, to our artists Luna and Hidalgo, legitimate and pure glories of two peoples; I drink to the Filipino youth, the sacred hope of my Fatherland... And may Spain, tender and mindful mother of her provinces, put into practice without delay the reforms she has so long contemplated!`,
    historicalContext: 'Delivered extemporaneously without notes before prominent Spanish politicians, professors, and journalists. When reports reached Manila, friars condemned Rizal as an enemy of the Church and State, while his mother Teodora Alonso fell ill with terror for his life.',
    keyThemes: ['Universal equality of genius', 'Youth as hope of the Fatherland', 'Plea for paternal reforms', 'Pan-humanistic brotherhood']
  },
  {
    id: 'sobre-la-indolencia',
    title: 'On the Indolence of the Filipinos (Sobre la indolencia)',
    spanishTitle: 'Sobre la indolencia de los filipinos',
    author: 'Dr. José Rizal',
    authorPenName: 'José Rizal',
    date: 'July 15 – September 15, 1890',
    publication: 'La Solidaridad (Five Installments)',
    city: 'Madrid, Spain',
    significance: 'A rigorous socio-historical refutation of the colonial stereotype that Filipinos are naturally lazy, showing that indolence is a chronic effect of colonial oppression, not an innate racial cause.',
    imageUrl: '/images/rizal.jpg',
    imageCaption: 'Dr. José Rizal in Europe during the publication of Sobre la Indolencia de los Filipinos (1890)',
    spanishExcerpt: `La indolencia en Filipinas es un hecho del que no dudamos; pero en vez de mirarla como la causa del atraso y del desorden, la miramos como el efecto del desorden y del atraso, fomentando la causa con que el mal empeora.

El indio no es una máquina; para obrar necesita un móvil, un incentivo. ¿Por qué ha de trabajar el labrador si no está seguro del fruto de su siembra, si el fruto de sus sudores va a parar a manos del encomendero, del fraile o de los piratas?

Las guerras de conquista, las expediciones a las Molucas, el servicio forzado en los arsenales y los cortes de maderas diezmaron a los hombres activos. Las continuas trabas al comercio, el monopolio y la falta de estímulo moral mataron el espíritu de empresa. Dejad al hombre libre, dadle la educación que merece, y veréis si es indolente.`,
    englishTranslation: `Indolence in the Philippines is a fact which we do not doubt; but instead of viewing it as the cause of backwardness and disorder, we view it as the effect of disorder and backwardness, nurturing the very cause through which the evil deepens.

The native is not a machine; in order to work he requires a motive, an incentive. Why should the farmer toil if he is not assured of the harvest of his planting, if the fruit of his sweat will fall into the hands of the encomendero, the friar, or pirates?

The wars of conquest, the expeditions to the Moluccas, the forced labor in arsenals and timber felling decimated the active men. The endless obstacles to commerce, monopolies, and the absence of moral stimulation murdered the spirit of enterprise. Leave the man free, give him the education he deserves, and you will see if he is indolent.`,
    historicalContext: 'Spanish colonial administrators commonly justified low productivity by blaming the tropical climate and native disposition. Rizal deconstructed this myth using colonial archives and economic logic.',
    keyThemes: ['Economic deconstruction', 'Forced labor impacts', 'Incentives vs exploitation', 'Human dignity']
  },
  {
    id: 'dasalan-at-tocsohan',
    title: 'Dasalan at Tocsohan (The Satirical Catechism)',
    spanishTitle: 'Dasalan at Tocsohan — Parodia de la Doctrina',
    author: 'Marcelo H. del Pilar',
    authorPenName: 'Dolores Manapat',
    date: '1888',
    publication: 'Underground Pamphlet printed in Malolos',
    city: 'Bulakan, Philippines',
    significance: 'Del Pilar’s immortal anti-friar satire parodying the Sign of the Cross, Our Father, and Hail Mary into biting exposés of priestly greed, distributed inside churches behind prayer books.',
    imageUrl: '/images/del_pilar.jpg',
    imageCaption: 'Marcelo H. del Pilar (Plaridel), master satirist and author of Dasalan at Tocsohan',
    spanishExcerpt: `(Fragmento en Tagalo Original y Versión Histórica):
"Aba ginoong Barya, nakapupuno ka ng kaban; ang Prayle'y sumasainyo; bukod kang pinagpala sa lahat ng salapi at pinagpala naman ang kaban mong sakdal ng laki.

Santa Barya, ina ng deretsos, ipanalangin mo kaming nangagigipit ngayon at kung kami'y patay na. Siya nawa."

"Ang Amain Namin: Amain naming sumasaconvento ka, sumpain ang ngalan mo, malayo sa amin ang kasakiman mo, kitlin ang leeg mo dito sa lupa para nang sa langit..."`,
    englishTranslation: `(Translated from Del Pilar's biting Tagalog satire):
"Hail Mary of Coins, full of coffers; the Friar is with thee; blessed art thou among all money, and blessed is the fruit of thy bottomless chest.

Holy Coin, mother of fees, pray for us who are destitute now and at the hour of our death. Amen."

"Our Stepfather: Our Stepfather who art in the convent, cursed be thy name, banish from us thy greed, wring thy neck on earth as it is in heaven..."`,
    historicalContext: 'Disguised in the same format, font, and cover as official Catholic prayer books, it was distributed during Holy Week in Bulacan churches. The parish priests were apoplectic when they discovered parishioners reciting parodies.',
    keyThemes: ['Satire as weapon', 'Anti-friar resistance', 'Monastic extortion', 'Vernacular awakening']
  },
  {
    id: 'young-women-malolos',
    title: 'Letter to the Young Women of Malolos',
    spanishTitle: 'Carta a las Jóvenes de Malolos',
    author: 'Dr. José Rizal',
    authorPenName: 'José Rizal',
    date: 'February 22, 1889',
    publication: 'Private manuscript / Later published in La Solidaridad',
    city: 'London, United Kingdom',
    significance: 'Rizal’s famous feminist and pedagogical manifesto commending twenty young women of Malolos for courageously petitioning for a Spanish night school against clerical opposition.',
    imageUrl: '/images/ilustrados_madrid.jpg',
    imageCaption: 'The Ilustrado circle in Europe advocating for civic education and liberty for all Filipinos',
    spanishExcerpt: `Cuando escribí el Noli me tangere, me pregunté si la valentía era cualidad común en nuestras mujeres. En mi memoria repasé las que había conocido desde la niñez, y hallé pocas con vigor moral...

Mas ahora que llega a mis oídos la noticia de lo acaecido en Malolos, comprendo mi error y me regocijo infinitamente. La mujer ya no inclinará la cabeza ante cualquier mandato arbitrario; no educará a sus hijos en el ciego fanatismo, sino en la razón, la honra y el amor a la libertad.

Madres que educan esclavos engendrarán esclavos; madres que educan hombres libres darán a la patria libertadores. Dios no pide que el hombre renuncie a la razón que le otorgó como antorcha.`,
    englishTranslation: `When I wrote Noli Me Tángere, I asked myself whether courage was a common virtue among our women. In my memory I reviewed those I had known since childhood, and found few with moral vigor...

Yet now that news reaches my ears of what took place in Malolos, I realize my mistake and rejoice exceedingly. The woman will no longer bow her head before every arbitrary command; she will not raise her children in blind fanaticism, but in reason, honor, and love of liberty.

Mothers who rear slaves will breed slaves; mothers who rear free men will give liberators to the fatherland. God does not demand that man surrender the reason He bestowed upon him as a torch.`,
    historicalContext: 'Written at the urging of Marcelo H. del Pilar from London. It established education of women as the cornerstone of national regeneration.',
    keyThemes: ['Women’s emancipation', 'Reason vs fanaticism', 'Maternal responsibility', 'Civic courage']
  },
  {
    id: 'la-liga-filipina',
    title: 'Constitution of La Liga Filipina',
    spanishTitle: 'Constitución y Fines de La Liga Filipina',
    author: 'Dr. José Rizal',
    authorPenName: 'José Rizal',
    date: 'July 3, 1892',
    publication: 'Founding Manifesto, Ilaya St., Tondo',
    city: 'Manila, Philippines',
    significance: 'The blueprint for a peaceful civic association unifying the entire archipelago into a compact, vigorous, and mutual-aid body.',
    imageUrl: '/images/rizal_1896.jpg',
    imageCaption: 'Dr. José Rizal upon returning to Manila to establish La Liga Filipina (July 1892)',
    spanishExcerpt: `FINES DE LA SOCIEDAD:
1.º Unir todo el Archipiélago en un cuerpo compacto, vigoroso y homogéneo.
2.º Protección mutua en todo trance y necesidad.
3.º Defensa contra toda violencia e injusticia.
4.º Fomento de la instrucción pública, agricultura y comercio.
5.º Estudio y aplicación de las reformas.

Lema: Unus instar omnium (Uno como todos).
Ningún miembro abandonará a su hermano en el peligro ni en la necesidad económica...`,
    englishTranslation: `PURPOSES OF THE SOCIETY:
1. To unite the entire Archipelago into one compact, vigorous, and homogeneous body.
2. Mutual protection in every want and necessity.
3. Defense against all violence and injustice.
4. Encouragement of public education, agriculture, and commerce.
5. Study and application of reforms.

Motto: Unus instar omnium (One like all / One for all).
No member shall abandon his brother in danger or in economic necessity...`,
    historicalContext: 'Rizal drafted the statutes in Hong Kong in January 1892 and instituted the society upon his return to Manila. The Spanish authorities viewed this peaceful cooperative as a covert conspiracy, deporting Rizal to Dapitan 72 hours later.',
    keyThemes: ['Civic unity', 'Mutual defense', 'Economic autonomy', 'Archipelagic solidarity']
  }
];
