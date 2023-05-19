var baseview = [41.916645264044895, 12.422445754156497];
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
  var Municipio="XIV";
  var data=[
    {
      "id": "XIV1",
      "location":[41.93213449487721, 12.420658596652704],  
      "popupContent":"Craft House"
    },
    {
      "id": "XIV2",
      "location":[41.93591776889393, 12.422171454324936],  
      "popupContent":"Pane e Salame F.lli Lattanzi – Torrevecchia"
    },
    {
      "id": "XIV3",
      "location":[41.923590793574334, 12.426239769668584],  
      "popupContent":"Piso 35 PUB & Beer Bakery"
    },
    {
      "id": "XIV4",
      "location":[41.924146135832, 12.413896238980263],  
      "popupContent":"Hic - Vizi & Sfizi"
    },
    {
      "id": "XIV5",
      "location":[41.92408582738602, 12.412447765963975],  
      "popupContent":"Caffè Letterario e Aperitivi Roma | Macondo"
    },
    {
      "id": "XIV6",
      "location":[41.90690425466133, 12.414501480864761],  
      "popupContent":"Bar Sicilia"
    },
    {
      "id": "XIV7",
      "location":[41.95962751445249, 12.398765885534612],  
      "popupContent":"Bar Pasticceria Dolce Oasi"
    },
    {
      "id": "XIV8",
      "location":[41.956980519136444, 12.404329396654022],  
      "popupContent":"Festival Snack Bar"
    },
    {
      "id": "XIV9",
      "location":[41.948522282281594, 12.390841808293196],  
      "popupContent":"Mezzanottetre"
    },
    {
      "id": "XIV10",
      "location":[41.94873352274476, 12.393118511997779],  
      "popupContent":"Enoteca DivinEmozioni"
    },
    {
      "id": "XIV11",
      "location":[41.941265477736, 12.38678989665319],  
      "popupContent":"Bar Cheri 2"
    },
    {
      "id": "XIV12",
      "location":[41.94356519325787, 12.369451725489336],  
      "popupContent":"Four Sisters"
    },
    {
      "id": "XIV13",
      "location":[41.92662018877302, 12.375938972083079],  
      "popupContent":"Black'n White"
    },
    {
      "id": "XIV14",
      "location":[41.909294013365574, 12.446423340831727],  
      "popupContent":"Mama Shelter"
    },
    {
      "id": "XIV15",
      "location":[41.92849388634808, 12.445715927340855],  
      "popupContent":"VIVI - Le serre"
    },
    {
      "id": "XIV16",
      "location":[41.91250322442333, 12.442978225487705],  
      "popupContent":"VINNICO Wine Bar"
    },
    {
      "id": "XIV17",
      "location":[41.90516263045888, 12.446670811995466],  
      "popupContent":"CHYMEIA - Cocktail Bar & Gastro Miscelazione"
    },
    {
      "id": "XIV18",
      "location":[41.90980355240062, 12.451266585011961],  
      "popupContent":"Café Gourmet"
    },
    {
      "id": "XIV19",
      "location":[41.92021670032876, 12.44393242363588],  
      "popupContent":"Foodoo"
    },
    {
      "id": "XIV20",
      "location":[41.919164511834744, 12.441668962228462],  
      "popupContent":"Cafe Porteño"
    },
    {
      "id": "XIV21",
      "location":[41.913793448742574, 12.438577096651793],  
      "popupContent":"Caffè La Terrazza"
    },
    {
      "id": "XIV22",
      "location":[41.91020625972597, 12.451821044860768],  
      "popupContent":"Fábrica"
    },
    {
      "id": "XIV23",
      "location":[41.90937155315716, 12.45425649665157],  
      "popupContent":"il Covino"
    },
    {
      "id": "XIV24",
      "location":[41.90907012952519, 12.454927494799186],  
      "popupContent":"The Loft"
    },
    {
      "id": "XIV25",
      "location":[41.910294757495514, 12.449263550619078],  
      "popupContent":"Green Bar"
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
  
