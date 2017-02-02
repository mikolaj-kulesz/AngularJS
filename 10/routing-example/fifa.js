var FIFA = {};

FIFA.TEAMS_LIST = [
  {
    code:'ESP',
    name:'Hiszpania',
    rank: 1,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg'
  },

  {
    code: 'GER',
    name: 'Niemcy',
    rank: 2,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
  },

  {
    code: 'POR',
    name: 'Portugalia',
    rank: 3,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg'
  },

  {
    code: 'COL',
    name: 'Kolumbia',
    rank: 4,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
  },

  {
    code: 'URU',
    name: 'Urugwaj',
    rank: 5,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Urugwaj.svg'
  }
];

FIFA.TEAM_DETAILS = {
  'ESP' : {
    fifaCode: 'ESP',
    fifaRanking: 1,
    name: 'Hiszpania',
    nickname: 'La Furia Roja (The Red Fury)',
    association: 'Real Federación Española de Fútbol (RFEF)',
    headCoach: 'Vicente del Bosque',
    captain: 'Iker Casillas',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/3/31/Spain_National_Football_Team_badge.png/417px-Spain_National_Football_Team_badge.png'
  },

  'GER' : {
    fifaCode: 'GER',
    fifaRanking: 2,
    name: 'Niemcy',
    nickname: 'Nationalmannschaft (national team)',
    association: 'German Football Association',
    headCoach: 'Joachim Löw',
    captain: 'Philipp Lahm',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/442px-DFBEagle.svg.png'
  },

  'POR' : {
    fifaCode: 'POR',
    fifaRanking: 3,
    name: 'Portugalia',
    nickname: 'A Selecção',
    association: 'Federação Portuguesa de Futebol',
    headCoach: 'Paulo Bento',
    captain: 'Cristiano Ronaldo',
    flagUrl:'http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Portuguese_Football_Federation.svg/424px-Portuguese_Football_Federation.svg.png'
  },

  'COL' : {
    fifaCode: 'COL',
    fifaRanking: 4,
    name: 'Kolumbia',
    nickname: 'Los Cafeteros (The Coffee Growers)',
    association: 'Federación Colombiana de Fútbol (FCF)',
    headCoach: 'José Pékerman',
    captain: 'Mario Yepes',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/61/Federacion_Colombiana_de_Futbol_logo.svg/302px-Federacion_Colombiana_de_Futbol_logo.svg.png'
  },

  'URU' : {
    fifaCode: 'URU',
    fifaRanking: 5,
    name: 'Urugwaj',
    nickname: 'Los Charrúas',
    association: 'Asociación Urugwaja de Fútbol (AUF)',
    headCoach: 'Óscar Tabárez',
    captain: 'Diego Lugano',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Urugwaj.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Urugwaj_football_association.svg/195px-Urugwaj_football_association.svg.png'
  }
};


exports.FIFA = FIFA;
