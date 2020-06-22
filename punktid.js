// Määratle punktid.
var punktid = [
  { nimi: "Harku", loc: [59.391875, 24.581969] },
  { nimi: "Astangu", loc: [59.40654, 24.646675] },
  { nimi: "Hiiu krg", loc: [59.383413, 24.669578] },
  { nimi: "Aruküla", loc: [59.355826, 25.075276] },
  { nimi: "Assaku", loc: [59.378499, 24.843213] },
  { nimi: "Atla", loc: [59.055638, 24.978444] },
  { nimi: "Habaja", loc: [59.107392, 25.167428] },
  { nimi: "Hageri", loc: [59.159683, 24.649727] },
  { nimi: "Jüri", loc: [59.358283, 24.891069] },
  { nimi: "Kadaka", loc: [59.394910, 24.965664] },
  { nimi: "Kangru t", loc: [59.353735, 24.772968] },
  { nimi: "Kasemetsa", loc: [59.274961, 24.675340] },
  { nimi: "Kiili", loc: [59.309211, 24.834239] },
  { nimi: "Kiisa", loc: [59.232187, 24.680590] },
  { nimi: "Kohila", loc: [59.166549, 24.755311] },
  { nimi: "Kolu", loc: [59.190848, 25.044899] },
  { nimi: "Kose", loc: [59.186829, 25.164587] },
  { nimi: "Kostivere (Aruküla t)", loc: [59.426089, 25.076936] },
  { nimi: "Laagri", loc: [59.351725, 24.610383] },
  { nimi: "Lagedi (Kostivere tee)", loc: [59.415892, 24.944653] },
  { nimi: "Linnuse t", loc: [59.458844, 24.905473] },
  { nimi: "Lähtse", loc: [59.293522, 24.852573] },
  { nimi: "Maidla", loc: [59.209616, 24.575584] },
  { nimi: "Männiku krg", loc: [59.363714, 24.716984] },
  { nimi: "Männiku t", loc: [59.375150, 24.717757] },
  { nimi: "Nabala", loc: [59.273208, 24.875295] },
  { nimi: "Paekna", loc: [59.263369, 24.835455] },
  { nimi: "Pajupea", loc: [59.360686, 24.968957] },
  { nimi: "Patika", loc: [59.314128, 24.936979] },
  { nimi: "Vaidasoo (Perila t)", loc: [59.266643, 25.018228] },
  { nimi: "Pirgu", loc: [59.120919, 24.836574] },
  { nimi: "Saku", loc: [59.300369, 24.650677] },
  { nimi: "Salutaguse", loc: [59.175998, 24.844471] },
  { nimi: "Saue", loc: [59.324025, 24.546217] },
  { nimi: "Saula", loc: [59.236196, 25.022459] },
  { nimi: "Sausti", loc: [59.318857, 24.764772] },
  { nimi: "Suuresta", loc: [59.295383, 24.958954] },
  { nimi: "Tammemäe", loc: [59.316427, 24.685761] },
  { nimi: "Tammiku", loc: [59.207465, 24.940706] },
  { nimi: "Tuhala", loc: [59.225670, 24.964194] },
  { nimi: "Tõdva", loc: [59.268997, 24.740713] },
  { nimi: "Urge", loc: [59.181089, 24.781459] },
  { nimi: "Vaida", loc: [59.286001, 24.975690] },
  { nimi: "Vandjala", loc: [59.433757, 25.082685] },
  { nimi: "Vanemuise", loc: [59.367114, 24.663762] },
  { nimi: "Ääsmäe", loc: [59.239469, 24.496005] },
  { nimi: "Ülemiste", loc: [59.422315, 24.787937] }
];

// Koosta punktide mäpp.
var pMap = new Map();
punktid.forEach(
  (p) => {
    pMap.set(p.nimi,
      {
        nimi: p.nimi,
        loc: p.loc,
        visible: false,
        opacity: undefined,
        marker: undefined
      }
    );
  }
);


