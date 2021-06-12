var loigud = [
  { "a": "Kaberneeme", "l": "Kaberla", "p": 6.0 },
  { "a": "Kaberneeme", "l": "Valkla t", "p": 7.2 },
  { "a": "Kaberla", "l": "Valkla t", "p": 4.4 },
  { "a": "Kadaka", "l": "Lagedi", "p": 1.7 },
  { "a": "Keila", "l": "Keila-Joa", "p": 13.5 },
  { "a": "Keila", "l": "Keila sild", "p": 0.8 },
  { "a": "Keila sild", "l": "Tutermaa (Vanamõisa t ots)", "p": 3.9 },
  { "a": "Keila-Joa", "l": "Vääna", "p": 7.2 },
  { "a": "Nehatu", "l": "Lagedi", "p": 5.2 },
  { "a": "Nehatu", "l": "Jõelähtme", "p": 12.7 },
  { "a": "Rebala", "l": "Ülgase", "p": 4.6 },
  { "a": "Keemikute", "l": "Muuga tee", "p": 7.4 },
  { "a": "Ülemiste", "l": "Muuga tee", "p": 11.1 },
  { "a": "Keemikute", "l": "Ülgase", "p": 3.8 },
  { "a": "Rebala", "l": "Jõelähtme", "p": 3.7 },
  { "a": "Jõelähtme", "l": "Kaberla", "p": 7.1 },
  { "a": "Vandjala", "l": "Jõelähtme", "p": 3.7 },
  { "a": "Aruküla", "l": "Jõelähtme", "p": 12.0 },
  { "a": "Lagedi", "l": "Lagedi (Kostivere tee)", "p": 1.6 },
  { "a": "Assaku", "l": "Lagedi", "p": 10.2 },
  { "a": "Assaku", "l": "Ülemiste", "p": 8.0 },
  { "a": "Harku", "l": "Laagri", "p": 5.3 },
  { "a": "Harku", "l": "Hiiu krg", "p": 5.4 },
  { "a": "Astangu", "l": "Harku", "p": 4.3 },
  { "a": "Astangu", "l": "Haabersti", "p": 4.0 },
  { "a": "Hiiu krg", "l": "Astangu", "p": 5.2 },
  { "a": "Vanemuise", "l": "Hiiu krg", "p": 2.6 },
  { "a": "Vanemuise", "l": "Männiku t", "p": 4 },
  { "a": "Vanemuise", "l": "Männiku krg", "p": 5.2 },
  { "a": "Männiku krg", "l": "Tammemäe", "p": 5.9 },
  { "a": "Männiku krg", "l": "Männiku t", "p": 1.1 },
  { "a": "Männiku t", "l": "Kangru t", "p": 4.7 },
  { "a": "Kangru t", "l": "Kiili", "p": 7 },
  { "a": "Kangru t", "l": "Sausti", "p": 4 },
  { "a": "Kangru t", "l": "Assaku", "p": 6.2 },
  { "a": "Sausti", "l": "Kiili", "p": 5.1 },
  { "a": "Kiili", "l": "Lähtse", "p": 2 },
  { "a": "Lähtse", "l": "Nabala", "p": 3.2 },
  { "a": "Lähtse", "l": "Paekna", "p": 4.1 },
  { "a": "Lähtse", "l": "Patika", "p": 6.8 },
  { "a": "Nabala", "l": "Patika", "p": 7.7 },
  { "a": "Patika", "l": "Vaidasoo", "p": 7.5 },
  { "a": "Patika", "l": "Vaida", "p": 4.0 },
  { "a": "Peningi", "l": "Perila", "p": 4.8 },
  { "a": "Peningi", "l": "Aruküla", "p": 5.1 },
  { "a": "Vaidasoo", "l": "Kolu", "p": 3.7 },
  { "a": "Vaidasoo", "l": "Saula", "p": 4.0 },
  { "a": "Vaidasoo", "l": "Vaida", "p": 3.7 },
  { "a": "Paekna", "l": "Nabala", "p": 3 },
  { "a": "Paekna", "l": "Tõdva", "p": 5.8 },
  { "a": "Tammemäe", "l": "Saku", "p": 1.3 },
  { "a": "Saku", "l": "Kasemetsa", "p": 4.7 },
  { "a": "Saku", "l": "Saku (Pähklimäe tee)", "p": 1.1 },
  { "a": "Kasemetsa", "l": "Saku (Pähklimäe tee)", "p": 3.3 },
  { "a": "Laagri (Harku tee ots)", "l": "Saku (Pähklimäe tee)", "p": 7.4 },
  { "a": "Laagri (Harku tee ots)", "l": "Vanemuise", "p": 3.6 },
  { "a": "Laagri (Harku tee ots)", "l": "Laagri", "p": 1.0 },
  { "a": "Laagri (Harku tee ots)", "l": "Juuliku", "p": 5.8 },
  { "a": "Laagri", "l": "Koidu ring", "p": 2.0 },
  { "a": "Kanama", "l": "Juuliku", "p": 4.3 },
  { "a": "Kanama-Üksnurme tee", "l": "Juuliku", "p": 2.0 },
  { "a": "Kanama-Üksnurme tee", "l": "Üksnurme teerist", "p": 4.3 },
  { "a": "Rahula", "l": "Üksnurme teerist", "p": 5.7 },
  { "a": "Saku Üksnurme ring", "l": "Üksnurme teerist", "p": 2.0 },
  { "a": "Saku Üksnurme ring", "l": "Saku", "p": 2.0 },
  { "a": "Saku Üksnurme ring", "l": "Kasemetsa", "p": 2.4 },
  { "a": "Kanama", "l": "Jõgisoo", "p": 3.9 },
  { "a": "Valingu", "l": "Jõgisoo", "p": 5.1 },
  { "a": "Valingu", "l": "Keila sild", "p": 2.8 },
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
  { "a": "Kolu", "l": "Tade viadukt", "p": 2.5 },
  { "a": "Pikaripoe", "l": "Tade viadukt", "p": 2.6 },
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
  { "a": "Ülemiste", "l": "Männiku t", "p": 7.4 },
  { "a": "Maidla", "l": "Ääsmäe", "p": 6.1 },
  { "a": "Ääsmäe", "l": "Saue", "p": 11.9 },
  { "a": "Saue", "l": "Laagri", "p": 5.7 },
  { "a": "Saue", "l": "Tutermaa", "p": 5.6 },
  { "a": "Vääna (Kurna tee ots)", "l": "Tutermaa", "p": 8.6 },
  { "a": "Vääna (Kurna tee ots)", "l": "Keila-Joa", "p": 6.3 },
  { "a": "Laulasmaa", "l": "Keila-Joa", "p": 5.4 },
  { "a": "Laulasmaa", "l": "Lohusalu", "p": 4.1 },
  { "a": "Laulasmaa", "l": "Treppoja", "p": 4.7 },
  { "a": "Laagri", "l": "Vanemuise", "p": 4.1 },
  { "a": "Lagedi (Kostivere tee)", "l": "Linnuse t", "p": 6 },
  { "a": "Habaja", "l": "Atla", "p": 16.4 },
  { "a": "Atla", "l": "Uuetoa", "p": 17.0 },
  { "a": "Atla", "l": "Rapla (Juuru tee)", "p": 13.0 },
  { "a": "Alu (kerglt)", "l": "Rapla (Juuru tee)", "p": 5.0 },
  { "a": "Alu (kerglt)", "l": "Kodila teerist", "p": 6.2 },
  { "a": "Hageri", "l": "Kodila teerist", "p": 16.2 },
  { "a": "Uuetoa", "l": "Salutaguse", "p": 3.8 },
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
  { "a": "Pikavere", "l": "Perila", "p": 3.1 },
  { "a": "Ääsmäe", "l": "Kääbastemägi", "p": 5.9 },
  { "a": "Ääsmäe", "l": "Keila", "p": 9.8 },
  { "a": "Kernu", "l": "Kääbastemägi", "p": 7.4 },
  { "a": "Haiba", "l": "Kääbastemägi", "p": 9.6 },
  { "a": "Haiba", "l": "Kernu", "p": 2.1 },
  { "a": "Kodila teerist", "l": "Varbola", "p": 17.7 },
  { "a": "Riisipere", "l": "Varbola", "p": 12.4 },
  { "a": "Vääna", "l": "Viti", "p": 7.6 },
  { "a": "Vääna", "l": "Püha", "p": 7.1 },
  { "a": "Viti", "l": "Rannamõisa", "p": 7.7 },
  { "a": "Rannamõisa", "l": "Haabersti", "p": 9.3 },
  { "a": "Haabersti", "l": "Harku", "p": 5.4 },
  { "a": "Vanamõisa", "l": "Koidu ring", "p": 3.9 },
  { "a": "Vanamõisa", "l": "Saue", "p": 0.8 },
  { "a": "Kanama", "l": "Saue", "p": 2.2 },
  { "a": "Vanamõisa", "l": "Alliku-Püha teerist", "p": 1.3 },
  { "a": "Püha", "l": "Alliku-Püha teerist", "p": 4.2 },
  { "a": "Hüüru", "l": "Alliku-Püha teerist", "p": 4.5 },
  { "a": "Hüüru", "l": "Harku", "p": 3.0 },
  { "a": "Vanamõisa", "l": "Tutermaa (Vanamõisa t ots)", "p": 4.1 },
  { "a": "Jõeveere teeots", "l": "Alliku-Püha teerist", "p": 2.3 },
  { "a": "Jõeveere teeots", "l": "Koidu ring", "p": 3.2 },
  { "a": "Jõeveere teeots", "l": "Hüüru", "p": 2.3 },
  { "a": "Riisipere", "l": "Haiba", "p": 10.3 }
]