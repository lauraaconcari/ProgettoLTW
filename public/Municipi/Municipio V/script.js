var baseview= [41.886356909417685, 12.55083625689699];
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
  var markers = L.markerClusterGroup({
    disableClusteringAtZoom: 1, // disabilita clustering
    showCoverageOnHover: false, // nasconde i cluster
  });
var markerlist= [];
const markerToPlace = {}; //Tupla per salvare id con nome corrispondente con i nomi originali
const markerToPlacelowcase = {};
var Municipio="V";
var data = [
  {
    "id": "V1",
    "location": [41.88997970881795, 12.523782085523587],
    "popupContent": "Bar Sciubba Roma"
  },
  {
    "id": "V2",
    "location": [41.8897319746865, 12.523932651254176],
    "popupContent": "Pigneto Cafe' & Spirits"
  },
  {
    "id": "V3",
    "location": [41.8893975489319, 12.525010985441915],
    "popupContent": "MILE PIGNETO"
  },
  {
    "id": "V4",
    "location": [41.88906218657238, 12.525414202859203],
    "popupContent": "Pigneto 32"
  },
  {
    "id": "V5",
    "location": [41.88930590320808, 12.524398881642739],
    "popupContent": "The street of crocodiles"
  },
  {
    "id": "V6",
    "location": [41.8893128917746, 12.524498123367383],
    "popupContent": "Cargo al Pigneto"
  },
  {
    "id": "V7",
    "location": [41.88935981498576, 12.524978909330667],
    "popupContent": "Pigneto Quarantuno"
  },
  {
    "id": "V8",
    "location": [41.88933335828506, 12.525056693385118],
    "popupContent": "Quello - Ristorante Cocktail Bar"
  },
  {
    "id": "V9",
    "location": [41.889236734725024, 12.525333774955236],
    "popupContent": "Da Mario al Pigneto"
  },
  {
    "id": "V10",
    "location": [41.889051038046865, 12.525417593985384],
    "popupContent": "Malavite Roma Pigneto"
  },
  {
    "id": "V11",
    "location": [41.88903312160719, 12.52596899789156],
    "popupContent": "Vrasciò"
  },
  {
    "id": "V12",
    "location": [41.88899917698541, 12.526052816915753],
    "popupContent": "NABIL"
  },
  {
    "id": "V13",
    "location": [41.88896872664614, 12.526213078911848],
    "popupContent": "Viveri"
  },
  {
    "id": "V14",
    "location": [41.889041607758365, 12.526326402232558],
    "popupContent": "Magnebevo e sto al Pigneto"
  },
  {
    "id": "V15",
    "location": [41.88887537879711, 12.526648937885751],
    "popupContent": "Birra +"
  },
  {
    "id": "V16",
    "location": [41.88887721512453, 12.526989783087275],
    "popupContent": "Bar Rosi Pigneto"
  },
  {
    "id": "V17",
    "location": [41.888138858971544, 12.53032721055258],
    "popupContent": "Sparwasser"
  },
  {
    "id": "V18",
    "location": [41.88934522741126, 12.53048545520302],
    "popupContent": "Spirito Pigneto"
  },
  {
    "id": "V19",
    "location": [41.88884432962134, 12.533454990153256],
    "popupContent": "Hopster"
  },
  {
    "id": "V20",
    "location": [41.88868490395153, 12.5342506080312],
    "popupContent": "Casa Mangiacotti"
  },
  {
    "id": "V21",
    "location": [41.89135064639119, 12.531702417413952],
    "popupContent": "Zazie nel metrò"
  },
  {
    "id": "V22",
    "location": [41.89080610855589, 12.538981741597457],
    "popupContent": "Caffè Point"
  },
  {
    "id": "V23",
    "location": [41.890980928405995, 12.540885889219496],
    "popupContent": "Garden Bar"
  },
  {
    "id": "V24",
    "location": [41.89129693551253, 12.541610043136712],
    "popupContent": "Il Posto Che Non C'era"
  },
  {
    "id": "V25",
    "location": [41.89412211312019, 12.54115306574194],
    "popupContent": "C'era una volta il caffè villa gordiani"
  },
  {
    "id": "V26",
    "location": [41.89369881712176, 12.55673984269614],
    "popupContent": "Du' Parole"
  },
  {
    "id": "V27",
    "location": [41.891900060679205, 12.557274171940561],
    "popupContent": "La Nave Del Luppolo"
  },
  {
    "id": "V28",
    "location": [41.89099624233177, 12.557598204431738],
    "popupContent": "Cocktail Bar Gelateria L'incontro"
  },
  {
    "id": "V29",
    "location": [41.89079458814433, 12.557669091138612],
    "popupContent": "Long Island"
  },
  {
    "id": "V30",
    "location": [41.89009820636057, 12.560415615963242],
    "popupContent": "Mr.Drink Centocelle"
  },
  {
    "id": "V31",
    "location": [41.88661190828566, 12.560648387352842],
    "popupContent": "Eden Bar Roma"
  },
  {
    "id": "V32",
    "location": [41.87913636954823, 12.54509432303739],
    "popupContent": "Kokus Bar"
  },
  {
    "id": "V33",
    "location": [41.88216301810458, 12.538660996620088],
    "popupContent": "Bar 3M"
  },
  {
    "id": "V34",
    "location": [41.888957608871586, 12.531455051443887],
    "popupContent": "KRAM Pigneto"
  },
  {
    "id": "V35",
    "location": [41.88095895683163, 12.566234640007975],
    "popupContent": "Plant 42"
  },
  {
    "id": "V36",
    "location": [41.891283578581366, 12.56429410748093],
    "popupContent": "L'Ombralonga dal Veneziano"
  },
  {
    "id": "V37",
    "location": [41.89078690640876, 12.564862266996732],
    "popupContent": "BirrEspritz"
  },
  {
    "id": "V38",
    "location": [41.88176021622403, 12.566423183540724],
    "popupContent": "Mirto"
  },
  {
    "id": "V39",
    "location": [41.88668657850994, 12.561886881066245],
    "popupContent": "I MEET"
  },
  {
    "id": "V40",
    "location": [41.887277633095934, 12.561843965725863],
    "popupContent": "Mad Hop"
  },
  {
    "id": "V41",
    "location": [41.88713086065852, 12.562637355645345],
    "popupContent": "FricciCore"
  },
  {
    "id": "V42",
    "location": [41.885504997981364, 12.562933881515825],
    "popupContent": "Cama Centocelle"
  },
  {
    "id": "V43",
    "location": [41.88496179406262, 12.562772318718562],
    "popupContent": "Circolo Artenoize"
  },
  {
    "id": "V44",
    "location": [41.88446520227397, 12.562682791387495],
    "popupContent": "Enoteca Peccati"
  },
  {
    "id": "V45",
    "location": [41.88563859010036, 12.565889477492862],
    "popupContent": "Evergreen Centocelle"
  },
  {
    "id": "V46",
    "location": [41.8812200815176, 12.567932579031186],
    "popupContent": "Woods Lounge Bar - Centocelle"
  },
  {
    "id": "V47",
    "location": [41.880412179701864, 12.568290835877617],
    "popupContent": "Glu Glu Roma non solo enoteca"
  },
  {
    "id": "V48",
    "location": [41.88082614665634, 12.571201237636815],
    "popupContent": "Matayaya Ristopub"
  },
  {
    "id": "V49",
    "location": [41.88008866181593, 12.57168387635879],
    "popupContent": "Retrogusto"
  },
  {
    "id": "V50",
    "location": [41.8781516173075, 12.56709316031927],
    "popupContent": "Il Baretto"
  },
  {
    "id": "V51",
    "location": [41.878337499727, 12.566138349645707],
    "popupContent": "Pluma"
  },
  {
    "id": "V52",
    "location": [41.880541958808784, 12.564022874421587],
    "popupContent": "Al Turacciolo"
  },
  {
    "id": "V53",
    "location": [41.88212462488535, 12.565597027518486],
    "popupContent": "Un caffettino?"
  },
  {
    "id": "V54",
    "location": [41.88218582686394, 12.566541039823877],
    "popupContent": "RED."
  },
  {
    "id": "V55",
    "location": [41.873315735610255, 12.585415517463732],
    "popupContent": "Fucina Alessandrina"
  },
  {
    "id": "V56",
    "location": [41.8734435584026, 12.582411443636616],
    "popupContent": "Gran Caffè Alessandrino Roma"
  },
  {
    "id": "V57",
    "location": [41.87465786218053, 12.578291570959447],
    "popupContent": "Bar Mosca"
  },
  {
    "id": "V58",
    "location": [41.87536086961269, 12.583784734529006],
    "popupContent": "New Bar Di Rinaldi Marco"
  },
  {
    "id": "V59",
    "location": [41.877551786886045, 12.577135527331265],
    "popupContent": "Bar Sonia"
  },
  {
    "id": "V60",
    "location": [41.87701639835724, 12.578915822762383],
    "popupContent": "Roxy Bar"
  },
  {
    "id": "V61",
    "location": [41.87711615071912, 12.579183765806086],
    "popupContent": "IL Quadrifoglio d'oro"
  },
  {
    "id": "V62",
    "location": [41.87853795146699, 12.583030177851622],
    "popupContent": "AL PICCOLO VINERIA"
  },
  {
    "id": "V63",
    "location": [41.883115441717635, 12.590186185582981],
    "popupContent": "Blue Ice"
  },
  {
    "id": "V64",
    "location": [41.88115148155184, 12.576838540100386],
    "popupContent": "Ape Gourmet"
  },
  {
    "id": "V65",
    "location": [41.894666385968776, 12.590594764747534],
    "popupContent": "Giolli Bar Roma"
  },
  {
    "id": "V66",
    "location": [41.8747031339234, 12.571409945579182],
    "popupContent": "Caffè De Cesare"
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

