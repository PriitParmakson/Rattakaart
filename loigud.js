var loigud = [
  { "a": "Kaberneeme", "l": "Kaberla", "p": 6.0 },
  { "a": "Kaberneeme", "l": "Valkla t", "p": 7.2 },
  { "a": "Kaberla", "l": "Valkla t", "p": 4.4 },
  { "a": "Kadaka", "l": "Lagedi", "p": 1.7 },
  { "a": "Nehatu", "l": "Lagedi", "p": 5.2 },
  { "a": "Nehatu", "l": "Jõelähtme", "p": 12.7 },
  { "a": "Jõelähtme", "l": "Kaberla", "p": 7.1 },
  { "a": "Vandjala", "l": "Jõelähtme", "p": 3.7 },
  { "a": "Lagedi", "l": "Lagedi (Kostivere tee)", "p": 1.6 },
  { "a": "Assaku", "l": "Lagedi", "p": 10.2 },
  { "a": "Harku", "l": "Laagri", "p": 5.3 },
  { "a": "Astangu", "l": "Harku", "p": 4.3 },
  { "a": "Hiiu krg", "l": "Astangu", "p": 5.2 },
  { "a": "Vanemuise", "l": "Hiiu krg", "p": 2.6 },
  { "a": "Vanemuise", "l": "Männiku t", "p": 4 },
  { "a": "Vanemuise", "l": "Männiku krg", "p": 5.2 },
  { "a": "Männiku krg", "l": "Tammemäe", "p": 5.9 },
  { "a": "Männiku t", "l": "Kangru t", "p": 4.7 },
  { "a": "Kangru t", "l": "Kiili", "p": 7 },
  { "a": "Kangru t", "l": "Sausti", "p": 4 },
  { "a": "Kangru t", "l": "Assaku", "p": 6.2 },
  { "a": "Sausti", "l": "Kiili", "p": 5.1 },
  { "a": "Kiili", "l": "Lähtse", "p": 2 },
  { "a": "Lähtse", "l": "Nabala", "p": 3.2 },
  { "a": "Lähtse", "l": "Paekna", "p": 4.1 },
  { "a": "Lähtse", "l": "Patika", "p": 5.3 },
  { "a": "Patika", "l": "Vaidasoo", "p": 7.5 },
  { "a": "Vaidasoo", "l": "Kolu", "p": 3.7 },
  { "a": "Paekna", "l": "Nabala", "p": 3 },
  { "a": "Paekna", "l": "Tõdva", "p": 5.8 },
  { "a": "Tammemäe", "l": "Saku", "p": 1.3 },
  { "a": "Saku", "l": "Kasemetsa", "p": 4.7 },
  { "a": "Kasemetsa", "l": "Tõdva", "p": 2.7 },
  { "a": "Kasemetsa", "l": "Kiisa", "p": 5 },
  { "a": "Kiisa", "l": "Maidla", "p": 8.4 },
  { "a": "Maidla", "l": "Hageri", "p": 6.9 },
  { "a": "Hageri", "l": "Kohila", "p": 5.3 },
  { "a": "Kohila", "l": "Tammiku", "p": 7.4 },
  { "a": "Tammiku", "l": "Tuhala", "p": 2.6 },
  { "a": "Tammiku", "l": "Kolu", "p": 6.5 },
  { "a": "Nabala", "l": "Tuhala", "p": 8.4 },
  { "a": "Tuhala", "l": "Saula", "p": 4.1 },
  { "a": "Saula", "l": "Kolu", "p": 5.3 },
  { "a": "Kolu", "l": "Kose", "p": 7 },
  { "a": "Kolu", "l": "Habaja", "p": 14 },
  { "a": "Assaku", "l": "Jüri", "p": 4.3 },
  { "a": "Jüri", "l": "Pajupea", "p": 4.3 },
  { "a": "Pajupea", "l": "Kadaka", "p": 4.5 },
  { "a": "Vanemuise", "l": "Jüri", "p": 19.2 },
  { "a": "Kadaka", "l": "Lagedi (Kostivere tee)", "p": 3.2 },
  { "a": "Lagedi (Kostivere tee)", "l": "Vandjala", "p": 8.9 },
  { "a": "Jüri", "l": "Vaida", "p": 9.7 },
  { "a": "Vaida", "l": "Saula", "p": 7.6 },
  { "a": "Pajupea", "l": "Suuresta", "p": 9.5 },
  { "a": "Suuresta", "l": "Jüri", "p": 8.4 },
  { "a": "Pajupea", "l": "Aruküla", "p": 6.4 },
  { "a": "Aruküla", "l": "Kostivere (Aruküla t)", "p": 9.2 },
  { "a": "Kostivere (Aruküla t)", "l": "Linnuse t", "p": 12.4 },
  { "a": "Linnuse t", "l": "Ülemiste", "p": 10.5 },
  { "a": "Ülemiste", "l": "Vanemuise", "p": 13.4 },
  { "a": "Maidla", "l": "Ääsmäe", "p": 6.1 },
  { "a": "Ääsmäe", "l": "Saue", "p": 11.9 },
  { "a": "Saue", "l": "Laagri", "p": 5.7 },
  { "a": "Laagri", "l": "Vanemuise", "p": 4.1 },
  { "a": "Lagedi (Kostivere tee)", "l": "Linnuse t", "p": 6 },
  { "a": "Habaja", "l": "Atla", "p": 16.4 },
  { "a": "Atla", "l": "Pirgu", "p": 16.8 },
  { "a": "Pirgu", "l": "Salutaguse", "p": 3.5 },
  { "a": "Salutaguse", "l": "Urge", "p": 3.9 },
  { "a": "Urge", "l": "Kohila", "p": 2.4 },
  { "a": "Kohila", "l": "Kiisa", "p": 9.7 },
  { "a": "Hageri", "l": "Kiisa", "p": 8.8 },
  { "a": "Hageri", "l": "Kernu", "p": 9.8 },
  { "a": "Kose", "l": "Kose rist", "p": 2.4 },
  { "a": "Äksi", "l": "Kose rist", "p": 7.2 },
  { "a": "Äksi", "l": "Kolu", "p": 12.6 },
  { "a": "Kose", "l": "Viskla", "p": 3.0 },
  { "a": "Pikavere", "l": "Viskla", "p": 10.1 },
  { "a": "Pikavere", "l": "Vaidasoo", "p": 8.0 },
  { "a": "Pikavere", "l": "Perila", "p": 3.1 }
]