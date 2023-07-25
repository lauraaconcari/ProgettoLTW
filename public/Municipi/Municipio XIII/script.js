var baseview = [41.89592576336687, 12.433252152089192];
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
  var Municipio="XIII";
  var data = [
    {
      "id": "XIII1",
      "location": [41.9000158381701, 12.452430721746172],
      "popupContent": "Vino e Peperoncino"
    },
    {
      "id": "XIII2",
      "location": [41.89913578550424, 12.461020454323073],
      "popupContent": "Amaro Lobby Bar & Lounge Roma"
    },
    {
      "id": "XIII3",
      "location": [41.89901938555138, 12.455668410142867],
      "popupContent": "Cresci"
    },
    {
      "id": "XIII4",
      "location": [41.8956668494598, 12.444806152470573],
      "popupContent": "Corner237"
    },
    {
      "id": "XIII5",
      "location": [41.89437575627724, 12.442072510142598],
      "popupContent": "Wood San Pietro"
    },
    {
      "id": "XIII6",
      "location": [41.89676938920922, 12.441386725486906],
      "popupContent": "Cantina Tralerighe"
    },
    {
      "id": "XIII7",
      "location": [41.89642158074006, 12.440137183158992],
      "popupContent": "Boris Cucina & Salotto"
    },
    {
      "id": "XIII8",
      "location": [41.89627938123786, 12.438918010142741],
      "popupContent": "Il Pappagallo Bar"
    },
    {
      "id": "XIII9",
      "location": [41.90213880246791, 12.438242361069214],
      "popupContent": "Hola! Café"
    },
    {
      "id": "XIII10",
      "location": [41.89589332418036, 12.42964522363458],
      "popupContent": "Fermento Caffè Bistrot"
    },
    {
      "id": "XIII11",
      "location": [41.90499308576647, 12.426567338979192],
      "popupContent": "La Stanza Roma"
    },
    {
      "id": "XIII12",
      "location": [41.899644084137435, 12.453377125487147],
      "popupContent": "Squilli Bistrò"
    },
    {
      "id": "XIII13",
      "location": [41.899034699924854, 12.451060523634698],
      "popupContent": "Enoteca dei Desideri"
    },
    {
      "id": "XIII14",
      "location": [41.90163184999227, 12.390137996651179],
      "popupContent": "Interno 7 Food & Drink"
    },
    {
      "id": "XIII15",
      "location": [41.89631590387685, 12.410816023634645],
      "popupContent": "Bistro Sunseri"
    },
    {
      "id": "XIII16",
      "location": [41.902337494840054, 12.419920211995317],
      "popupContent": "Quindi ci posti?"
    },
    {
      "id": "XIII17",
      "location": [41.90330608454882, 12.422408674864963],
      "popupContent": "Santo Pane"
    },
    {
      "id": "XIII18",
      "location": [41.9106552868551, 12.392930671520206],
      "popupContent": "CASACONSORTI"
    },
    {
      "id": "XIII19",
      "location": [41.91627754252744, 12.370690481307697],
      "popupContent": "Sa di Tappo Enoteca Winebar"
    },
    {
      "id": "XIII20",
      "location": [41.91575130926686, 12.35181991199602],
      "popupContent": "Moe's"
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
