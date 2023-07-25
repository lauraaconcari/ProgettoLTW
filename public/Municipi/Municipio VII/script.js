var baseview= [41.87227948064865, 12.539432694193241];
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
var Municipio="VII";
var data = [
  {
    "id": "VII1",
    "location": [41.8839415852973, 12.522563025486251],
    "popupContent": "Tira e molla"
  },
  {
    "id": "VII2",
    "location": [41.88375802271953, 12.518130338978064],
    "popupContent": "Bruni Bistrot Cocktail Bar"
  },
  {
    "id": "VII3",
    "location": [41.88248037583988, 12.51540458315826],
    "popupContent": "Salotto Stadlin"
  },
  {
    "id": "VII4",
    "location": [41.88584730515517, 12.51174661199444],
    "popupContent": "BAR BRINDISI"
  },
  {
    "id": "VII5",
    "location": [41.88556992000116, 12.50915609665027],
    "popupContent": "Le Foodie Café Bistrot"
  },
  {
    "id": "VII6",
    "location": [41.88690186502841, 12.5191475813061],
    "popupContent": "Blind Pig"
  },
  {
    "id": "VII7",
    "location": [41.88482305866436, 12.51367121199441],
    "popupContent": "VERSO Eatery & Wine Tales"
  },
  {
    "id": "VII8",
    "location": [41.88506879358799, 12.512587388741487],
    "popupContent": "C'era una volta il Caffé"
  },
  {
    "id": "VII9",
    "location": [41.884045673598614, 12.51116995432233],
    "popupContent": "Piano C - Circolo del vino"
  },
  {
    "id": "VII10",
    "location": [41.881417741777256, 12.515212311994208],
    "popupContent": "Sapori e Parole"
  },
  {
    "id": "VII11",
    "location": [41.873020406676154, 12.528975396649617],
    "popupContent": "FloW"
  },
  {
    "id": "VII12",
    "location": [41.87606120894121, 12.52985229664983],
    "popupContent": "Spigolo"
  },
  {
    "id": "VII13",
    "location": [41.87204944028381, 12.525550596649545],
    "popupContent": "Babù"
  },
  {
    "id": "VII14",
    "location": [41.8627859543976, 12.546941791067944],
    "popupContent": "malti&mosti"
  },
  {
    "id": "VII15",
    "location": [41.877142755713415, 12.52051921992895],
    "popupContent": "NaBi Happiness Factory"
  },
  {
    "id": "VII16",
    "location": [41.8768250446149, 12.520886383157906],
    "popupContent": "TEO'S - Piazza dell'Alberone"
  },
  {
    "id": "VII17",
    "location": [41.87736656295493, 12.518967783158018],
    "popupContent": "Kubla/Khan"
  },
  {
    "id": "VII18",
    "location": [41.87082069916019, 12.5305424082891],
    "popupContent": "Quality to Drink"
  },
  {
    "id": "VII19",
    "location": [41.87370464205543, 12.528034467522818],
    "popupContent": "Baccano"
  },
  {
    "id": "VII20",
    "location": [41.87697771371919, 12.519310950484587],
    "popupContent": "Teo's"
  },
  {
    "id": "VII21",
    "location": [41.875730744635706, 12.512908653632464],
    "popupContent": "Birreria Trilussa"
  },
  {
    "id": "VII22",
    "location": [41.8715008042345, 12.528540911994535],
    "popupContent": "Birreria del Convento"
  },
  {
    "id": "VII23",
    "location": [41.87881098954862, 12.519586546649198],
    "popupContent": "Voodoo Bar"
  },
  {
    "id": "VII24",
    "location": [41.87542774390606, 12.51832323201654],
    "popupContent": "Mecenate Palace Roof Garden"
  },
  {
    "id": "VII25",
    "location": [41.87934025982682, 12.512205012016198],
    "popupContent": "El Mojito Habana Club"
  },
  {
    "id": "VII26",
    "location": [41.8604769820637, 12.557884754321007],
    "popupContent": "Al Solito Posto"
  },
  {
    "id": "VII27",
    "location": [41.8592847850433, 12.566642611993059],
    "popupContent": "Rquadro"
  },
  {
    "id": "VII28",
    "location": [41.85578385837417, 12.56501098315682],
    "popupContent": "Sicilian's gourmet"
  },
  {
    "id": "VII29",
    "location": [41.85413465849214, 12.559368825484686],
    "popupContent": "La dolce vita"
  },
  {
    "id": "VII30",
    "location": [41.85420291506349, 12.56334335432074],
    "popupContent": "Cocktail Bar 23 & Food"
  },
  {
    "id": "VII31",
    "location": [41.8546949790746, 12.564139194796343],
    "popupContent": "La Bonora"
  },
  {
    "id": "VII32",
    "location": [41.85445263188845, 12.566336423632457],
    "popupContent": "Démodé"
  },
  {
    "id": "VII33",
    "location": [41.85295383488472, 12.567254923632301],
    "popupContent": "Rab"
  },
  {
    "id": "VII34",
    "location": [41.85786049771943, 12.56108859664883],
    "popupContent": "SpaccioVino Tuscolana"
  },
  {
    "id": "VII35",
    "location": [41.85841809357932, 12.558788997265356],
    "popupContent": "Happy Wine"
  },
  {
    "id": "VII36",
    "location": [41.85440339724227, 12.565572325484691],
    "popupContent": "Maat Bakery & Bistrot"
  },
  {
    "id": "VII37",
    "location": [41.85197951168113, 12.55924931199269],
    "popupContent": "Fermentum"
  },
  {
    "id": "VII38",
    "location": [41.83209734707517, 12.599034238975383],
    "popupContent": "Perlage"
  },
  {
    "id": "VII39",
    "location": [41.848558587990304, 12.597752381304176],
    "popupContent": "Mister TAMO"
  },
  {
    "id": "VII40",
    "location": [41.82683548708564, 12.583777194794914],
    "popupContent": "Ma SI! Bar Tavola Calda"
  },
  {
    "id": "VII41",
    "location": [41.8563439415532, 12.673846663751162],
    "popupContent": "Dom"
  },
  {
    "id": "VII42",
    "location": [41.86032204476431, 12.688402081304806],
    "popupContent": "Due Punto Zero"
  },
  {
    "id": "VII43",
    "location": [41.836556593502614, 12.633258883155861],
    "popupContent": "Buddha Smile"
  },
  {
    "id": "VII44",
    "location": [41.814773137880465, 12.604046275958696],
    "popupContent": "N°1"
  },
  {
    "id": "VII45",
    "location": [41.876454270641176, 12.518999027338126],
    "popupContent": "Enoteca Bonomi"
  },
  {
    "id": "VII46",
    "location": [41.8763976965445, 12.515734810141673],
    "popupContent": "QIX drink bar"
  },
  {
    "id": "VII47",
    "location": [41.87615006569213, 12.520208352469577],
    "popupContent": "Vinum Est Roma"
  },
  {
    "id": "VII48",
    "location": [41.87314018349225, 12.520773725485634],
    "popupContent": "Hopificio"
  },
  {
    "id": "VII49",
    "location": [41.880251620718056, 12.511646352469825],
    "popupContent": "Rebacco"
  },
  {
    "id": "VII50",
    "location": [41.87839875941948, 12.516271510141783],
    "popupContent": "Ristorante Buono Enoteca e Cocktail Bar"
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
