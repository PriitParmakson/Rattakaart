// Aluskaardi tailid on L-EST'97s. seadistame kaardi.
// crs on "koordinaatsüsteem".
var crs = new L.Proj.CRS(
  'EPSG:3301',
  '+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 ' +
  '+lon_0=24 +x_0=500000 +y_0=6375000 ' +
  '+ellps=GRS80 ' +
  '+towgs84=0,0,0,0,0,0,0 ' +
  '+units=m +no_defs',
  {
    resolutions: [
      4000, 2000, 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625,
      1.953125, 0.9765625, 0.48828125, 0.244140625, 0.1220703125, 0.06103515625,
      0.030517578125, 0.0152587890625, 0.00762939453125, 0.003814697265625
    ],
    transformation: new L.Transformation(1, -40500, -1, 7017000.000000),
    //origin: [40500, 5993000.000000],
    bounds: L.bounds(
      L.point(40500, 5993000.000000),
      L.point(1064500.000000, 7017000.000000)
    )
  }
);

// Kaart ise. Läheb div elementi "map".
var map = L.map(
  'map',
  {
    crs: crs,
    center: L.latLng(59.375150, 24.717757),
    zoom: 7,
    minZoom: 3,
    maxZoom: 14,
    maxBounds: L.latLngBounds(
      [[53.87677644829216, 17.023771159524344],
      [62.85582385242469, 35.106036681873526]]),
  }
);

var baselayers = {};
var overlays = {};
var layerControl = L.control.groupedLayer(baselayers, overlays);

layerControl.addTo(map);

var aboutWindow = L.control.about();

// updateMap(config.map);

initBasemaps(config.basemaps);

var alguseValikureziim = false;
// Alguspunkti saab muuta, nupuga "Sea alguspunkt".
var alguspunkt = 'Vanemuise';

// marsruut on punktinimede massiiv.
var marsruut;
// pikkus on massiiv marsruuti moodustavate lõikude pikkustest. 
var pikkus;
// marsruudiJoon on Leaflet Polyline objekt, hoiab marsruudi joonkuju.
var marsruudiJoon;

// Sea nupukäsitlejad.
// Abiteave.
document.querySelector('#Info').onclick = function () {
  ta = document.querySelector('#Teateala');
  while (ta.firstChild) {
    ta.removeChild(ta.firstChild);
  }
  ta.textContent = 'Vali tegevus ja vajuta markeritele.';
}

// Lähtekood.
document.querySelector('#Kood').onclick = function () {
  ta = document.querySelector('#Teateala');
  while (ta.firstChild) {
    ta.removeChild(ta.firstChild);
  }
  ta.insertAdjacentHTML(
    'beforeend',
    '<a href="https://github.com/PriitParmakson/Rattakaart" target="_new">' +
    'https://github.com/PriitParmakson/Rattakaart</a>'
  );
}

// Lähtesta marsruut.
document.querySelector('#Uusnupp').onclick = function () {
  LahtestaMarsruut(alguspunkt);
  document.querySelector('#Teateala')
    .textContent = 'Lähtestatud.';
}

// Sea alguspunkt.
document.querySelector('#Algusnupp').onclick = function () {
  alguseValikureziim = true;
  // Kuva markerid kõigile punktidele.
  pMap.forEach(
    (p) => {
      kuvaPunkt(p.nimi, 1.0, alguspunktiValikuKasitleja);
    }
  );
}

// Samm tagasi.
document.querySelector('#Tagasinupp').onclick = function () {
  if (marsruut.length == 1) {
    return;
  }
  // Viimase punkti nimi.
  vpn = marsruut[marsruut.length - 1];
  console.debug('Eemaldan punkti: ', vpn);
  // Eemalda viimane punkt marsruudist.
  marsruut.pop();
  // Eemalda viimase lõigu pikkus.
  pikkus.pop();

  // Eemalda kõik markerid.
  pMap.forEach(
    (p) => {
      if (p.marker) {
        p.marker.remove();
        pMap.set(
          p.nimi,
          {
            nimi: p.nimi,
            loc: p.loc,
            visible: false,
            opacity: undefined,
            marker: undefined
          }
        );
      }
    }
  );

  // Taasloo markerid
  marsruut.forEach(
    (p) => {
      kuvaPunkt(p, 1.0, markerOnClick);
    }
  );

  // Kuva marsruudi tekstiesitus, koos pikkusega.
  kuvaMarsruutTekstina();

  // Leia ja kuva uued kandidaatpunktid.
  kuvaKandidaadid();

  // Kui on jõutud alguspunkti, siis varja tagasivõtmine.
  if (marsruut.length == 1) {
    document.querySelector('#Tagasinupp').classList.add('disabled');
  }
}

// Joonista marsruut
document.querySelector('#Joonistanupp').onclick = function () {
  joonistaMarsruut();
}

// Lähtesta marsruut.
LahtestaMarsruut(alguspunkt);

// LahtestaMarsruut eemaldab kõik senised markerid, seab marsruudi alguspunktiks
// punkti nimega alguspunkt ja kuvab marsruudi jätku kandidaatpunktid.
function LahtestaMarsruut(alguspunkt) {
  marsruut = [];
  pikkus = [];
  // Eemalda kõik markerid.
  pMap.forEach(
    (p) => {
      if (p.marker) {
        p.marker.remove();
        pMap.set(
          p.nimi,
          {
            nimi: p.nimi,
            loc: p.loc,
            visible: false,
            opacity: undefined,
            marker: undefined
          }
        );
      }
    }
  );
  // Eemalda marsruudijoon, kui see eksisteerib.
  if (marsruudiJoon) {
    marsruudiJoon.remove();
  }
  // Sea marsruudi alguspunktiks alguspunkt.
  marsruut.push(alguspunkt);
  pikkus.push(0);
  kuvaPunkt(alguspunkt, 1.0, markerOnClick);
  kuvaMarsruutTekstina();
  // Sea ja kuva marsruudijoone alguspunkt.
  marsruudiJoon = L.polyline([pMap.get(alguspunkt).loc], {color: 'blue'}).addTo(map);
  kuvaKandidaadid();
  // Varja tagasivõtmine.
  document.querySelector('#Tagasinupp').classList.add('disabled');
}

// kuvaKandidaadid lisab kaardile markerid kandidaatpunktidele, s.t
// punktidele, kuhu saab marsruudi viimasest punktist liikuda.
// Kui kandidaatpunkt kuulub juba marsruuti, siis vähendab markeri 
// läbipaistvust. 
function kuvaKandidaadid() {
  // Leia marsruudi viimane punkt.
  vp = marsruut[marsruut.length - 1];
  loigud.forEach(
    (loik) => {
      if (loik.a == vp) {
        kn = pMap.get(loik.l).nimi; // Kandidaatpunkti nimi.
        kuvaPunkt(kn, 0.5, markerOnClick);
        return;
      }
      if (loik.l == vp) {
        kn = pMap.get(loik.a).nimi; // Kandidaatpunkti nimi.
        kuvaPunkt(kn, 0.5, markerOnClick);
      }
    }
  );
}

// kuvaPunkt otsib mäpist pMap punkti nimi ja loob sellele vastava markeri.
// Kui marker on juba olemas, siis muudab ainult läbipaistmatust.
// Teise parameetrina anda läbipaistmatus. Kandidaadi läbipaistmatus on 0.5;
// marsruudi tavalise punkti läbipaistmatus on 1.0.
// Kolmas parameeter on punkti markerile klõpsamist käsitlev funktsioon.
function kuvaPunkt(nimi, opacity, handler) {
  console.debug('kuvaPunkt: ', nimi, opacity);
  // Otsi mäpist punkt.
  p = pMap.get(nimi);
  // Toiming on idempotentne: kontrolli, kas marker on juba olemas.
  if (p.visible) {
    if (p.opacity == opacity) {
      return
    } else {
      // Muuda ainult läbipaistmatust.
      p.marker.setOpacity(opacity);
      // Märgi markeri loomine või muutmine mäpis pMap.
      pMap.set(nimi,
        {
          nimi: p.nimi,
          loc: p.loc,
          visible: true,
          opacity: opacity,
          marker: p.marker
        }
      );
    }
  } else {
    // Defineeri marker.
    var m = L.marker(
      p.loc,
      {
        title: p.nimi,
        opacity: opacity
      }
    );
    // Lisa marker kaardile.  
    m.addTo(map);
    // Märgi markeri loomine mäpis pMap.
    pMap.set(nimi,
      {
        nimi: p.nimi,
        loc: p.loc,
        visible: true,
        opacity: opacity,
        marker: m
      }
    );
    // Lisa markerivajutuse käsitleja.
    m.on('click', handler);
  }
}

// kuvaMarsruutTekstina moodustab massiivis marsruut hoitava marsruudi esituse sõnena, 
// arvutab marsruudi pikkuse ja kuvab need HTML-elemendis Marsruut.
function kuvaMarsruutTekstina() {
  var ms = ''; // Marsruut sõnena.
  var p = 0; // Marsruudi pikkus.
  marsruut.forEach(
    (mp, i) => { // Marsruudipunkt.
      if (ms.length == 0) {
        ms = mp;
      } else {
        ms = ms + ' - ' + mp;
        p = p + pikkus[i];
      }
    }
  );
  document.querySelector('#Marsruut').textContent = ms +
    ' = ' + p.toFixed(2) + ' km';
}

// punktMarsruudil selgitab välja, kas punkt pnimi asub marsruudil marsruut. 
function punktMarsruudil(pnimi, marsruut) {
  if (marsruut.find(element => element == pnimi)) {
    return true
  } else {
    return false
  };
}

// leiaLoiguPikkus leiab punktide p1 ja p2 vahelise lõigu pikkuse.
function leiaLoiguPikkus(p1, p2) {
  for (var i = 0; i < loigud.length; i++) {
    if (
      (loigud[i].a == p1 && loigud[i].l == p2) ||
      (loigud[i].a == p2 && loigud[i].l == p1)
    ) {
      return loigud[i].p;
    }
  }
  return undefined;
}

// alguspunktiValikuKasitleja lähtestab marsruudi, seades alguspunktiks klõpsatud
// markeriga tähistatud punkti.
function alguspunktiValikuKasitleja(e) {
  console.debug("Klõpsatud markerile: " + this.options.title);
  kpn = this.options.title; // Klõpsatud punkti nimi.
  alguspunkt = kpn;
  LahtestaMarsruut(alguspunkt);
  alguseValikureziim = false;
}

// markerOnClick pikendab marsruuti, vastavalt valitud kandidaatpunktile.
function markerOnClick(e) {
  console.debug("Klõpsatud markerile: " + this.options.title);
  kpn = this.options.title; // Klõpsatud punkti nimi.
  kp = pMap.get(kpn); // Klõpsatud punkt.
  // Kas klõpsati kandidaatpunkti? Klõpsatavad on ka marsruudi punktid
  // (mis ei ole kandidaadid).
  if (kp.opacity != 0.5) {
    return;
  }
  // Kandidaatpunkt.
  // Eemalda teistelt kandidaatpunktidelt kandidaadistaatus.
  pMap.forEach(
    (p) => {
      if (p.opacity == 0.5 && p.nimi != kpn) {
        // Kui mittevalitud kandidaadipunkt oli varasemast
        // marsruudipunkt, siis sea sellele tagasi marsruudipunkti
        // normaalne läbipaistmatus. Vastasel korral eemalda 
        // kandidaadipunkti marker.
        console.debug('Mittevalitud kandidaadipunkt: ', p.nimi);
        if (punktMarsruudil(p.nimi, marsruut)) {
          // Mittevalitud kandidaadipunkt, on varasemast marsruudil.
          pMap.set(p.nimi,
            {
              nimi: p.nimi,
              loc: p.loc,
              visible: true,
              opacity: 1.0,
              marker: p.marker
            }
          );
          p.marker.setOpacity(1.0);
        } else {
          // Kandidaadipunkt ei ole marsruudil. Eemalda marker.
          p.marker.remove();
          // Kajasta markeri eemaldamine mäpis pMap.
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
      }
    }
  );
  // Suurenda marsruudi pikkust.
  lp = leiaLoiguPikkus(marsruut[marsruut.length - 1], kpn);
  pikkus.push(lp);
  // Lisa punkt marsruuti.
  marsruut.push(kpn);
  // Kuva punkt marsruudipunktina.
  kuvaPunkt(kpn, 1.0);
  // Kuva marsruudi tekstiesitus, koos pikkusega.
  kuvaMarsruutTekstina();
  // Pikenda marsruudijoont
  marsruudiJoon.addLatLng(kp.loc);
  // Leia ja kuva uued kandidaatpunktid.
  kuvaKandidaadid();
  // Võimalda tagasivõtmine.
  document.querySelector('#Tagasinupp').classList.remove('disabled');
}

// joonistaMarsruut
function joonistaMarsruut() {
  var latlngs = [];
  marsruut.forEach(
    (mp, i) => { // Marsruudipunkt (nimi)
      latlngs.push(pMap.get(mp).loc);
    }
  )
  marsruudiJoon = L.polyline(latlngs, {color: 'red'}).addTo(map);
  // alert("latlngs koostatud");
}

// Märkmed
// Leaflet Polyline
// https://leafletjs.com/reference-1.6.0.html#polyline

// Using the DOM like a Pro
// https://itnext.io/using-the-dom-like-a-pro-163a6c552eba

// DOM tipu eemaldamine
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
