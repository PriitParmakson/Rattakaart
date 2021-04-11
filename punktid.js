// Määratle punktid.
var punktid = [
  { "nimi": "Alu (kerglt)", "loc": [59.02005, 24.777976] },
  { "nimi": "Aruküla", "loc": [59.355826, 25.075276] },
  { "nimi": "Astangu", "loc": [59.40654, 24.646675] },
  { "nimi": "Assaku", "loc": [59.378499, 24.843213] },
  { "nimi": "Atla", "loc": [59.055638, 24.978444] },
  { "nimi": "Haabersti", "loc": [59.423568, 24.646112] },
  { "nimi": "Harku", "loc": [59.391875, 24.581969] },
  { "nimi": "Habaja", "loc": [59.107392, 25.167428] },
  { "nimi": "Haiba", "loc": [59.128299, 24.471917] },
  { "nimi": "Hageri", "loc": [59.159683, 24.649727] },
  { "nimi": "Hiiu krg", "loc": [59.383413, 24.669578] },
  { "nimi": "Juuliku", "loc": [59.308757, 24.632756] },
  { "nimi": "Jõelähtme", "loc": [59.442044, 25.135965] },
  { "nimi": "Jõgisoo", "loc": [59.285276, 24.521525] },
  { "nimi": "Jüri", "loc": [59.358283, 24.891069] },
  { "nimi": "Kaberla", "loc": [59.465066, 25.240145] },
  { "nimi": "Kaberneeme", "loc": [59.513032, 25.269047] },
  { "nimi": "Kadaka", "loc": [59.394910, 24.965664] },
  { "nimi": "Kanama", "loc": [59.30963, 24.564386] },
  { "nimi": "Kangru t", "loc": [59.353735, 24.772968] },
  { "nimi": "Kasemetsa", "loc": [59.274961, 24.675340] },
  { "nimi": "Keemikute", "loc": [59.47945, 25.015766] },
  { "nimi": "Keila", "loc": [59.306027, 24.425441] },
  { "nimi": "Keila sild", "loc": [59.311239, 24.435515] },
  { "nimi": "Keila-Joa", "loc": [59.39322, 24.293566] },
  { "nimi": "Kernu", "loc": [59.136361, 24.500104] },
  { "nimi": "Kiili", "loc": [59.309211, 24.834239] },
  { "nimi": "Kiisa", "loc": [59.232187, 24.680590] },
  { "nimi": "Kohila", "loc": [59.166549, 24.755311] },
  { "nimi": "Kodila teerist", "loc": [59.02411, 24.681495] },
  { "nimi": "Kolu", "loc": [59.190848, 25.044899] },
  { "nimi": "Kose", "loc": [59.186829, 25.164587] },
  { "nimi": "Kose rist", "loc": [59.167044, 25.176373] },
  { "nimi": "Kostivere (Aruküla t)", "loc": [59.426089, 25.076936] },
  { "nimi": "Kääbastemägi", "loc": [59.198609, 24.469507] },
  { "nimi": "Laagri", "loc": [59.351725, 24.610383] },
  { "nimi": "Laagri (Harku tee ots)", "loc": [59.351241, 24.627765] },
  { "nimi": "Lagedi", "loc": [59.402105, 24.941926] },
  { "nimi": "Lagedi (Kostivere tee)", "loc": [59.415892, 24.944653] },
  { "nimi": "Laulasmaa", "loc": [59.377418, 24.238348] },
  { "nimi": "Linnuse t", "loc": [59.458844, 24.905473] },
  { "nimi": "Lohusalu", "loc": [59.4041, 24.202565] },
  { "nimi": "Lähtse", "loc": [59.293522, 24.852573] },
  { "nimi": "Maidla", "loc": [59.209616, 24.575584] },
  { "nimi": "Muuga tee", "loc": [59.467415, 24.904023] },
  { "nimi": "Männiku krg", "loc": [59.363714, 24.716984] },
  { "nimi": "Männiku t", "loc": [59.375150, 24.717757] },
  { "nimi": "Nabala", "loc": [59.273208, 24.875295] },
  { "nimi": "Nehatu", "loc": [59.44489, 24.930312] },
  { "nimi": "Paekna", "loc": [59.263369, 24.835455] },
  { "nimi": "Pajupea", "loc": [59.360686, 24.968957] },
  { "nimi": "Patika", "loc": [59.314128, 24.936979] },
  { "nimi": "Peningi", "loc": [59.339585, 25.15239] },
  { "nimi": "Perila", "loc": [59.298581, 25.173824] },
  { "nimi": "Pikavere", "loc": [59.276877, 25.133595] },
  { "nimi": "Pikaripoe", "loc": [59.182091, 25.116209] },
  { "nimi": "Pirgu", "loc": [59.120919, 24.836574] },
  { "nimi": "Rannamõisa", "loc": [59.438554, 24.500163] },
  { "nimi": "Rapla (Juuru tee)", "loc": [58.989974, 24.836282] },
  { "nimi": "Rebala", "loc": [59.459856, 25.088637] },
  { "nimi": "Riisipere", "loc": [59.104763, 24.31268] },
  { "nimi": "Saku", "loc": [59.30162, 24.668827] },
  { "nimi": "Saku (Pähklimäe tee)", "loc": [59.300265, 24.650921] },
  { "nimi": "Salutaguse", "loc": [59.175998, 24.844471] },
  { "nimi": "Saue", "loc": [59.324025, 24.546217] },
  { "nimi": "Saula", "loc": [59.236196, 25.022459] },
  { "nimi": "Sausti", "loc": [59.318857, 24.764772] },
  { "nimi": "Suuresta", "loc": [59.295383, 24.958954] },
  { "nimi": "Tade viadukt", "loc": [59.183249, 25.083014] },
  { "nimi": "Tammemäe", "loc": [59.316427, 24.685761] },
  { "nimi": "Tammiku", "loc": [59.207465, 24.940706] },
  { "nimi": "Tuhala", "loc": [59.225670, 24.964194] },
  { "nimi": "Tutermaa", "loc": [59.329327, 24.470205] },
  { "nimi": "Tõdva", "loc": [59.268997, 24.740713] },
  { "nimi": "Urge", "loc": [59.181089, 24.781459] },
  { "nimi": "Vaida", "loc": [59.286001, 24.975690] },
  { "nimi": "Vaidasoo", "loc": [59.266643, 25.018228] },
  { "nimi": "Valingu", "loc": [59.31354, 24.47171] },
  { "nimi": "Valkla t", "loc": [59.467443, 25.313982] },
  { "nimi": "Vandjala", "loc": [59.433757, 25.082685] },
  { "nimi": "Vanemuise", "loc": [59.367114, 24.663762] },
  { "nimi": "Varbola", "loc": [59.045225, 24.450533] },
  { "nimi": "Viskla", "loc": [59.206674, 25.185712] },
  { "nimi": "Viti", "loc": [59.445998, 24.380462] },
  { "nimi": "Vääna", "loc": [59.38859, 24.411581] },
  { "nimi": "Vääna (Kurna tee ots)", "loc": [59.390555, 24.397052] },
  { "nimi": "Äksi", "loc": [59.11783, 25.170113] },
  { "nimi": "Ääsmäe", "loc": [59.239469, 24.496005] },
  { "nimi": "Ülemiste", "loc": [59.422315, 24.787937] },
  { "nimi": "Ülgase", "loc": [59.487722, 25.078117] }
];

// Koosta punktide mäpp.
var pMap = new Map();
punktid.forEach(
  (p) => {
    pMap.set(p.nimi,
      {
        "nimi": p.nimi,
        "loc": p.loc,
        visible: false,
        opacity: undefined,
        marker: undefined
      }
    );
  }
);
