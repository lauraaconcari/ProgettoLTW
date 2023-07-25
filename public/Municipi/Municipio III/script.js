var baseview = [41.95589, 12.53584];
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
var Municipio="III";
var data = [
  {
    "id": "III1",
    "location": [41.94316271266202, 12.523081638344143],
    "popupContent": "Parsifal Wine Bar Enoteca"
  },
  {
    "id": "III2",
    "location": [41.939204412265276, 12.527587749978249],
    "popupContent": "Apericena"
  },
  {
    "id": "III3",
    "location": [41.93984286441835, 12.528789379509092],
    "popupContent": "BarCiboeEnoteca"
  },
  {
    "id": "III4",
    "location": [41.94015906224189, 12.53608335634904],
    "popupContent": "Roof Cocktail bar"
  },
  {
    "id": "III5",
    "location": [41.93592961358296, 12.531158182013035],
    "popupContent": "Dervock"
  },
  {
    "id": "III6",
    "location": [41.93512859680354, 12.531576931364185],
    "popupContent": "The Random Bar"
  },
  {
    "id": "III7",
    "location": [41.93566260910766, 12.532205055390909],
    "popupContent": "Deriva Aniene"
  },
  {
    "id": "III8",
    "location": [41.9357516107236, 12.53364076745199],
    "popupContent": "C1b0 Project"
  },
  {
    "id": "III9",
    "location": [41.93374904432277, 12.53364076745199],
    "popupContent": "Drinketto Bistrot"
  },
  {
    "id": "III10",
    "location": [41.93495059170855, 12.535166211516893],
    "popupContent": "Mezzo Litro"
  },
  {
    "id": "III11",
    "location": [41.94333312831209, 12.518571040127913],
    "popupContent": "Enoteca Mostoqui"
  },
  {
    "id": "III12",
    "location": [41.93515593096356, 12.536288205683025],
    "popupContent": "MoVino"
  },
  {
    "id": "III13",
    "location": [41.934803739922145, 12.535916220010709],
    "popupContent": "Beija Flor cocktail bar"
  },
  {
    "id": "III14",
    "location": [41.934363498385444, 12.536068395967565],
    "popupContent": "Bootleg"
  },
  {
    "id": "III15",
    "location": [41.93414966565797, 12.537082902135705],
    "popupContent": "Svago"
  },
  {
    "id": "III16",
    "location": [41.932627659268164, 12.536017670536335],
    "popupContent": "Comò Bistrot"
  },
  {
    "id": "III17",
    "location": [41.94668092908675, 12.530380042216457],
    "popupContent": "Vintro Bar & Bites"
  },
  {
    "id": "III18",
    "location": [41.93281008149665, 12.526080263618528],
    "popupContent": "Danicla Bar"
  },
  {
    "id": "III19",
    "location": [41.945163473547666, 12.516934988092833],
    "popupContent": "Cucci Bistró"
  },
  {
    "id": "III20",
    "location": [41.93509396404874, 12.536148067816855],
    "popupContent": "Anchimò"
  },
  {
    "id": "III21",
    "location": [41.93510844648966, 12.535416233398069],
    "popupContent": "Malto Matto"
  },
  {
    "id": "III22",
    "location": [41.948282719479984, 12.514660496653642],
    "popupContent": "Pandolce"
  },
  {
    "id": "III23",
    "location": [41.95291124957474, 12.516022207465745],
    "popupContent": "Gipsy Bar"
  },
  {
    "id": "III24",
    "location": [41.962416771426, 12.518821711998504],
    "popupContent": "ABC American Bar & Coffee"
  },
  {
    "id": "III25",
    "location": [41.93425492287355, 12.534234296652816],
    "popupContent": "Bender"
  },
  {
    "id": "III26",
    "location": [41.975095466631146, 12.526540283163097],
    "popupContent": "CoconutBar"
  },
  {
    "id": "III27",
    "location": [41.938851265679006, 12.535042935880243],
    "popupContent": "IL LOCALE"
  },
  {
    "id": "III28",
    "location": [41.9457312694597, 12.514132436938423],
    "popupContent": "Room 1.10"
  },
  {
    "id": "III29",
    "location": [41.95351275420143, 12.54440713449676],
    "popupContent": "Talento Bar Gastronomia"
  },
  {
    "id": "III30",
    "location": [41.94652663318375, 12.542925134494395],
    "popupContent": "GALU BAR"
  },
  {
    "id": "III31",
    "location": [41.954722872249775, 12.548504319156882],
    "popupContent": "Mossi Bar"
  },
  {
    "id": "III32",
    "location": [41.943589681121644, 12.547819392163479],
    "popupContent": "Cafè Les Amì"
  },
  {
    "id": "III33",
    "location": [41.95174881286274, 12.551858417310063],
    "popupContent": "Flora Roma"
  },
  {
    "id": "III34",
    "location": [41.94216726437079, 12.548407103811972],
    "popupContent": "Bar Plaza Caffetteria"
  },
  {
    "id": "III35",
    "location": [41.94442197810126, 12.551403419153186],
    "popupContent": "Bollicina"
  },
  {
    "id": "III36",
    "location": [41.94845971623193, 12.546991895968045],
    "popupContent": "Blink"
  },
  {
    "id": "III37",
    "location": [41.944673271611954, 12.550715111997608],
    "popupContent": "Ristornate Ugo"
  },
  {
    "id": "III38",
    "location": [41.94383801395362, 12.548105511997527],
    "popupContent": "Lo Zio d'America"
  },
  {
    "id": "III39",
    "location": [41.949840484701944, 12.53906469107539],
    "popupContent": "TwoFellows"
  },
  {
    "id": "III40",
    "location": [41.95130817933638, 12.53817414741184],
    "popupContent": "MyCaffè"
  },
  {
    "id": "III41",
    "location": [41.967540451235166, 12.535274225490594],
    "popupContent": "Buono Come il Pane"
  },
  {
    "id": "III42",
    "location": [41.97569484838424, 12.53721357759258],
    "popupContent": "La Flaca"
  },
  {
    "id": "III43",
    "location": [41.95660194213221, 12.549106158405245],
    "popupContent": "Mossi Bar"
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



