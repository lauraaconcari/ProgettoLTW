var baseview = [41.75694411464861, 12.34624035984284];
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
  var Municipio="X";
  var data=[
    {
      "id": "X1",
      "location":[41.71436076430797, 12.317663338969208],  
      "popupContent":"Shilling"
    },
    {
      "id": "X2",
      "location":[41.716578767441874, 12.311599706337628],  
      "popupContent":"Open Bar"
    },
    {
      "id": "X3",
      "location":[41.73266331412526, 12.292776596642284],  
      "popupContent":"MAGA Wine Bar - Cucina di Mare"
    },
    {
      "id": "X4",
      "location":[41.73205750261686, 12.277427181298066],  
      "popupContent":"Sandrino's"
    },
    {
      "id": "X5",
      "location":[41.730513106466944, 12.279469625478203],  
      "popupContent":"Mas Magna e Bevi"
    },
    {
      "id": "X6",
      "location":[41.73178207022474, 12.269897010134128],  
      "popupContent":"Bahia beach Bar"
    },
    {
      "id": "X7",
      "location":[41.73060190624566, 12.278713783150295],  
      "popupContent":"ALWINE"
    },
    {
      "id": "X8",
      "location":[41.73044159307677, 12.278625481298045],  
      "popupContent":"Insolito Food & Drink Lido di Ostia"
    },
    {
      "id": "X9",
      "location":[41.73362151149761, 12.286148781298202],  
      "popupContent":"Il Sole di Ostia"
    },
    {
      "id": "X10",
      "location":[41.716571875280174, 12.311179369657733],  
      "popupContent":"Pachamama Beachbar"
    },
    {
      "id": "X11",
      "location":[41.70603503558315, 12.336001072353012],  
      "popupContent":"La Spiaggia"
    },
    {
      "id": "X12",
      "location":[41.70819792386434, 12.329907196641003],  
      "popupContent":"V Lounge Beach"
    },
    {
      "id": "X13",
      "location":[41.77366714114474, 12.350729858947071],  
      "popupContent":"Dolceamaro"
    },
    {
      "id": "X14",
      "location":[41.77769238701328, 12.350844938972514],  
      "popupContent":"King's Bistrot"
    },
    {
      "id": "X15",
      "location":[41.78125197991531, 12.344935296644818],  
      "popupContent":"Tatti bar"
    },
    {
      "id": "X16",
      "location":[41.763247424836166, 12.371471511988057],  
      "popupContent":"Flo_flower_bar"
    },
    {
      "id": "X17",
      "location":[41.78019421600979, 12.33869028793921],  
      "popupContent":"Bottega del Buongustaio"
    },
    {
      "id": "X18",
      "location":[41.762784323239174, 12.371305523627596],  
      "popupContent":"Mawi"
    },
    {
      "id": "X19",
      "location":[41.75290922839424, 12.368972538071109],  
      "popupContent":"IL BAR DEI PARCHI"
    },
    {
      "id": "X20",
      "location":[41.7553145296282, 12.371210311987586],  
      "popupContent":"Nero Lab Infernetto"
    },
    {
      "id": "X21",
      "location":[41.75136113778195, 12.354648010135078],  
      "popupContent":"ICarusO Casalpalocco"
    },
    {
      "id": "X22",
      "location":[41.74130765783875, 12.360733825478778],  
      "popupContent":"Convivium"
    },
    {
      "id": "X23",
      "location":[41.799796426179036, 12.42185488130163],  
      "popupContent":"19.2 Winebar Enoteca"
    },
    {
      "id": "X24",
      "location":[41.73626126790479, 12.368272096642482],  
      "popupContent":"Enoteca Versatile"
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

