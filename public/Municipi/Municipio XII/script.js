var baseview = [41.87686627372305, 12.451200570483474];
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
  var Municipio="XII";
var data = [
  {
    "id": "XII1",
    "location": [41.882271618118935, 12.467768138978027],
    "popupContent": "Enoteca - I Figli del Vinaio"
  },
  {
    "id": "XII2",
    "location": [41.88368619935899, 12.456033811994343],
    "popupContent": "KilometroZERO Coffee, Drink&Food"
  },
  {
    "id": "XII3",
    "location": [41.87232096510546, 12.450034340829731],
    "popupContent": "Totem Garden Bar"
  },
  {
    "id": "XII4",
    "location": [41.883531012108634, 12.455430683158314],
    "popupContent": "Santa Maria Bar & Bistrot"
  },
  {
    "id": "XII5",
    "location": [41.881489917467285, 12.460522381305921],
    "popupContent": "Cafe Vert"
  },
  {
    "id": "XII6",
    "location": [41.88348274919214, 12.455623283158262],
    "popupContent": "Matière | Bar-à-vin"
  },
  {
    "id": "XII7",
    "location": [41.87173895391396, 12.443583727337861],
    "popupContent": "Massimi Caffè"
  },
  {
    "id": "XII8",
    "location": [41.882171660673976, 12.4567498659618],
    "popupContent": "Caffè 104"
  },
  {
    "id": "XII9",
    "location": [41.88083416005409, 12.463330035578418],
    "popupContent": "Bar Faustini"
  },
  {
    "id": "XII10",
    "location": [41.8736507158711, 12.46853856781362],
    "popupContent": "Off Living Room"
  },
  {
    "id": "XII11",
    "location": [41.872774195253356, 12.449675885010027],
    "popupContent": "Giano Bistrot"
  },
  {
    "id": "XII12",
    "location": [41.87331698370096, 12.467657081305513],
    "popupContent": "Think Farmer"
  },
  {
    "id": "XII13",
    "location": [41.881140330410034, 12.470628711994166],
    "popupContent": "HÉCO Trastevere"
  },
  {
    "id": "XII14",
    "location": [41.881899052757916, 12.459652981306748],
    "popupContent": "Gianicolo Garden"
  },
  {
    "id": "XII15",
    "location": [41.87153430031363, 12.443461896649522],
    "popupContent": "Friccico Mangia&Bevi Bistrò"
  },
  {
    "id": "XII16",
    "location": [41.86175069417844, 12.443842954321152],
    "popupContent": "BistrOUT"
  },
  {
    "id": "XII17",
    "location": [41.85805705212055, 12.440964085009249],
    "popupContent": "Il Pozzo since 1973 Roma"
  },
  {
    "id": "XII18",
    "location": [41.88156269655227, 12.424311481305907],
    "popupContent": "Cortile Bravetta"
  },
  {
    "id": "XII19",
    "location": [41.86409561260829, 12.4434863831573],
    "popupContent": "Bistrot Enoteca ai Colli"
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


