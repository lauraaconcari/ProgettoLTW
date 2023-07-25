var baseview = [41.862810438339224, 12.4639972788267];
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
  var Municipio="XI";
  var data=[
    {
      "id": "XI1",
      "location":[41.87194133399641, 12.47061163522821],  
      "popupContent":"Stadlin"
    },
    {
      "id": "XI2",
      "location":[41.869529791163934, 12.466729481305283],  
      "popupContent":"Stazione 38"
    },
    {
      "id": "XI3",
      "location":[41.86641229971461, 12.465168696649256],  
      "popupContent":"Enoteca Uva Luppolo E Bistrot"
    },
    {
      "id": "XI4",
      "location":[41.86522434047658, 12.468634237124832],  
      "popupContent":"I Siciliani"
    },
    {
      "id": "XI5",
      "location":[41.86259211855145, 12.47080029664913],  
      "popupContent":"SHAVI BAR"
    },
    {
      "id": "XI6",
      "location":[41.84950797036802, 12.44641785487317],  
      "popupContent":"Bistrot 139"
    },
    {
      "id": "XI7",
      "location":[41.85602062875366, 12.446986338976695],  
      "popupContent":"Rossibar"
    },
    {
      "id": "XI8",
      "location":[41.85844049634241, 12.454816356173207],  
      "popupContent":"Bistrot Alleria - La Caffetteria dal 1980"
    },
    {
      "id": "XI9",
      "location":[41.86604129857583, 12.471722181305095],  
      "popupContent":"Bottega Arconti"
    },
    {
      "id": "XI10",
      "location":[41.86877622421897, 12.47230668315759],  
      "popupContent":"Bar India"
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