var baseview = [41.90187547065311, 12.473100381372474];
var map = L.map('map').setView(baseview, 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;	
  var markerlist= [];
  var markers = L.markerClusterGroup({
    disableClusteringAtZoom: 1, // disabilita clustering
    showCoverageOnHover: false, // nasconde i cluster
  });
  const markerToPlace = {}; //Tupla per salvare id con nome corrispondente con i nomi originali
  const markerToPlacelowcase = {};
  var Municipio="II";
  var data = [
    {
      "id": "II1",
      "location": [41.929707653871276, 12.485973613594998],
      "popupContent": "Duke's"
    },
    {
      "id": "II2",
      "location": [41.931181050505835, 12.49133739825461],
      "popupContent": "Caffè Parnaso"
    },
    {
      "id": "II3",
      "location": [41.93035706081719, 12.485854750248182],
      "popupContent": "Ercoli 1928"
    },
    {
      "id": "II4",
      "location": [41.92793452293839, 12.507913696328275],
      "popupContent": "Lo Scoiattolo Ada"
    },
    {
      "id": "II5",
      "location": [41.930621679618255, 12.471554484759942],
      "popupContent": "Bar - Caffè delle Nazioni ai Parioli"
    },
    {
      "id": "II6",
      "location": [41.92833464077347, 12.486743496408796],
      "popupContent": "Gotha Roma"
    },
    {
      "id": "II7",
      "location": [41.92463053565024, 12.4912587104665],
      "popupContent": "Enoteca Parioli"
    },
    {
      "id": "II8",
      "location": [41.92715595218017, 12.485961537918527],
      "popupContent": "Bambu's Parioli, Roma"
    },
    {
      "id": "II9",
      "location": [41.922713829909256, 12.491782754078724],
      "popupContent": "Palmerie Parioli"
    },
    {
      "id": "II10",
      "location": [41.92920754636918, 12.479956825244015],
      "popupContent": "Bar Villa Glori"
    },
    {
      "id": "II11",
      "location": [41.928325801796625, 12.469602298870456],
      "popupContent": "Brio Bistrot"
    },
    {
      "id": "II12",
      "location": [41.93271604935367, 12.466448040584513],
      "popupContent": "Mostò"
    },
    {
      "id": "II13",
      "location": [41.929283392056874, 12.467384249812707],
      "popupContent": "Mediterraneo Ristorante e Giardino"
    },
    {
      "id": "II14",
      "location": [41.92758713218298, 12.461706576802039],
      "popupContent": "Metropolita"
    },
    {
      "id": "II15",
      "location": [41.9252408807952, 12.464961130466317],
      "popupContent": "Etablino - Caffè Due Fontane"
    },
    {
      "id": "II16",
      "location": [41.91251470421975, 12.475307303790732],
      "popupContent": "Frisó"
    },
    {
      "id": "II17",
      "location": [41.923436176287645, 12.470646164857442],
      "popupContent": "Cavatappi enoteca wine bar bistrot"
    },
    {
      "id": "II18",
      "location": [41.92458561196706, 12.468805645778021],
      "popupContent": "Enoteca Flaminio Roma"
    },
    {
      "id": "II19",
      "location": [41.92487465879603, 12.46899987029194],
      "popupContent": "Un Caffè con Te"
    },
    {
      "id": "II20",
      "location": [41.92590141856656, 12.463991896408723],
      "popupContent": "Ristorante 'Apoteca - Provviste Alimentari'"
    },
    {
      "id": "II21",
      "location": [41.93173645082467, 12.467539401946006],
      "popupContent": "Jacobà"
    },
    {
      "id": "II22",
      "location": [41.91114446660275, 12.499269042134644],
      "popupContent": "Dolce caffè"
    },
    {
      "id": "II23",
      "location": [41.912253611509136, 12.500081584661954],
      "popupContent": "Molinari Antonio"
    },
    {
      "id": "II24",
      "location": [41.913604238999085, 12.505569261045842],
      "popupContent": "PAPY"
    },
    {
      "id": "II25",
      "location": [41.91254597263525, 12.50131086156027],
      "popupContent": "KABB - Bistrot Enoteca Caffetteria Cocktail Bar"
    },
    {
      "id": "II26",
      "location": [41.916842140423064, 12.498905972723852],
      "popupContent": "Gallo Bar"
    },
    {
      "id": "II27",
      "location": [41.91730406686619, 12.500224645446307],
      "popupContent": "Dietro Le Quinte"
    },
    {
      "id": "II28",
      "location": [41.9182103729732, 12.499958951909711],
      "popupContent": "La Vineria"
    },
    {
      "id": "II29",
      "location": [41.91784006488865, 12.499950339726878],
      "popupContent": "Sesto"
    },
    {
      "id": "II30",
      "location": [41.91309285922884, 12.497447680838624],
      "popupContent": "Della Manna"
    },
    {
      "id": "II31",
      "location": [41.911825626916496, 12.498670155923808],
      "popupContent": "New Age Cafè"
    },
    {
      "id": "II32",
      "location": [41.93629139244353, 12.515848254324998],
      "popupContent": "Pequeño|Atypical Tapas Bar"
    },
    {
      "id": "II33",
      "location": [41.93162892245359, 12.515705281308533],
      "popupContent": "Garage 33 Food and Wine"
    },
    {
      "id": "II34",
      "location": [41.929161810287326, 12.523656810144491],
      "popupContent": "Misto - Mixology e Cibarie"
    },
    {
      "id": "II35",
      "location": [41.930489779762325, 12.52155342548862],
      "popupContent": "Cheers barEDO"
    },
    {
      "id": "II36",
      "location": [41.922603095551366, 12.511183467816073],
      "popupContent": "Ivy Food Music & Drink"
    },
    {
      "id": "II37",
      "location": [41.92313918716738, 12.513589838980144],
      "popupContent": "Enoteca Graziani"
    },
    {
      "id": "II38",
      "location": [41.922792129652066, 12.512846310144063],
      "popupContent": "Crash"
    },
    {
      "id": "II39",
      "location": [41.92311060815637, 12.512152538980144],
      "popupContent": "Numbs Le Bistro"
    },
    {
      "id": "II40",
      "location": [41.91784165915652, 12.50741719059604],
      "popupContent": "Caprera"
    },
    {
      "id": "II41",
      "location": [41.91793266876045, 12.507720651969667],
      "popupContent": "Marziali 1922"
    },
    {
      "id": "II42",
      "location": [41.92743979678122, 12.514976052472234],
      "popupContent": "Farina Lab"
    },
    {
      "id": "II43",
      "location": [41.92831625863092, 12.515555123636306],
      "popupContent": "Don Nino"
    },
    {
      "id": "II44",
      "location": [41.923264355879, 12.51522729665224],
      "popupContent": "White Rabbit"
    },
    {
      "id": "II45",
      "location": [41.92906291053484, 12.517914881308403],
      "popupContent": "Dolce"
    },
    {
      "id": "II46",
      "location": [41.92110164559433, 12.510149096693711],
      "popupContent": "La Cannoleria Siciliana - Trieste"
    },
    {
      "id": "II47",
      "location": [41.91938606752425, 12.512305681307872],
      "popupContent": "Amami"
    },
    {
      "id": "II48",
      "location": [41.92539708482942, 12.510986967857907],
      "popupContent": "Caffè Nemorense"
    },
    {
      "id": "II49",
      "location": [41.914532266914335, 12.505972941813273],
      "popupContent": "Why Not Cafe"
    },
    {
      "id": "II50",
      "location": [41.93284890860799, 12.519435811996908],
      "popupContent": "Gezin Pub"
    },
    {
      "id": "II51",
      "location": [41.931828677081654, 12.519334967816645],
      "popupContent": "Gianfornaio - Viale Libia"
    },
    {
      "id": "II52",
      "location": [41.93102499695989, 12.52271335432475],
      "popupContent": "&njoy"
    },
    {
      "id": "II53",
      "location": [41.91989529973352, 12.519931467816015],
      "popupContent": "Momart"
    },
    {
      "id": "II54",
      "location": [41.90941591301485, 12.511699565963198],
      "popupContent": "Fauno 3.0"
    },
    {
      "id": "II55",
      "location": [41.91802087162327, 12.524696596651983],
      "popupContent": "Vesper Cafè Enoteca"
    },
    {
      "id": "II56",
      "location": [41.91887508354566, 12.525039919405334],
      "popupContent": "Seltz Cocktail Bar"
    },
    {
      "id": "II57",
      "location": [41.91239297259077, 12.517887654323793],
      "popupContent": "Mizzica!"
    },
    {
      "id": "II58",
      "location": [41.91116537642962, 12.518343838979506],
      "popupContent": "Vinoteca Tempere"
    },
    {
      "id": "II59",
      "location": [41.91379471318318, 12.52150209850407],
      "popupContent": "Meeting Place"
    },
    {
      "id": "II60",
      "location": [41.91309074664381, 12.521262081307531],
      "popupContent": "Mood Cafè"
    },
    {
      "id": "II61",
      "location": [41.90928604663056, 12.520498410143365],
      "popupContent": "MùMar Cafè"
    },
    {
      "id": "II62",
      "location": [41.90816812444419, 12.518621965963153],
      "popupContent": "Papà Non Vuole"
    },
    {
      "id": "II63",
      "location": [41.907973312568316, 12.518459291060713],
      "popupContent": "Il Baretto"
    },
    {
      "id": "II64",
      "location": [41.90639051914056, 12.516928996651387],
      "popupContent": "You must bistrot"
    },
    {
      "id": "II65",
      "location": [41.90833078297972, 12.51869739405509],
      "popupContent": "Mordimi"
    },
    {
      "id": "II66",
      "location": [41.90898418002231, 12.52046231804481],
      "popupContent": "Tappa Fissa"
    },
    {
      "id": "II67",
      "location": [41.90810693217555, 12.516821683159565],
      "popupContent": "Abitudini e Follie"
    },
    {
      "id": "II68",
      "location": [41.909998673870945, 12.520901567815583],
      "popupContent": "Colette"
    },
    {
      "id": "II69",
      "location": [41.90873509235124, 12.520125711995664],
      "popupContent": "Spritzzeria"
    },
    {
      "id": "II70",
      "location": [41.920755567192785, 12.520464938980023],
      "popupContent": "Stappò"
    },
    {
      "id": "II71",
      "location": [41.90685925942407, 12.516480540831703],
      "popupContent": "Las Tapas"
    },
    {
      "id": "II72",
      "location": [41.91496962467531, 12.522295411995987],
      "popupContent": "Blend"
    },
    {
      "id": "II73",
      "location": [41.90839592398824, 12.517992711995692],
      "popupContent": "Punto Drink e Pietanze"
    },
    {
      "id": "II74",
      "location": [41.90781988206146, 12.521952106404811],
      "popupContent": "Bodeguita"
    },
    {
      "id": "II75",
      "location": [41.9266881342002, 12.480694025488441],
      "popupContent": "Carrot's cafè"
    },
    {
      "id": "II76",
      "location": [41.917653856138045, 12.48135889479964],
      "popupContent": "Caffè delle Arti"
    },
    {
      "id": "II77",
      "location": [41.923365003675, 12.471472210144071],
      "popupContent": "Treebar"
    },
    {
      "id": "II78",
      "location": [41.9215376122891, 12.47366498130794],
      "popupContent": "Villa Balestra"
    }
  ];	
  for (let i = 0; i < data.length; i++) {
    //Aggiunta dei marker sulla mappa
    let info = data[i];
    let marker = L.marker(info.location, { id: info.id });
    markerToPlace[info.id] = info.popupContent;
    markerToPlacelowcase[info.id] = info.popupContent.toLowerCase();
    marker.bindPopup(info.popupContent);
    markers.addLayer(marker);
    markerlist.push(marker);
  }
  const placeToMarker = _.invert(markerToPlacelowcase);
  console.log(placeToMarker);
  map.addLayer(markers);

