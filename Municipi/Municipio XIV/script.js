var map = L.map('map').setView([41.916645264044895, 12.422445754156497], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Primavalle 
var Primavalle1 = L.marker([41.93213449487721, 12.420658596652704]).bindPopup("Craft House");
var Primavalle2 = L.marker([41.93591776889393, 12.422171454324936]).bindPopup("Pane e Salame F.lli Lattanzi – Torrevecchia");
var Primavalle3 = L.marker([41.923590793574334, 12.426239769668584]).bindPopup("Piso 35 PUB & Beer Bakery");
var Primavalle4 = L.marker([41.924146135832, 12.413896238980263]).bindPopup("Hic - Vizi & Sfizi");
var Primavalle5 = L.marker([41.92408582738602, 12.412447765963975]).bindPopup("Caffè Letterario e Aperitivi Roma | Macondo");
var Primavalle6 = L.marker([41.90690425466133, 12.414501480864761]).bindPopup("Bar Sicilia");
var Primavalle7 = L.marker([41.95962751445249, 12.398765885534612]).bindPopup("Bar Pasticceria Dolce Oasi");
var Primavalle8 = L.marker([41.956980519136444, 12.404329396654022]).bindPopup("Festival Snack Bar");
var Primavalle9 = L.marker([41.948522282281594, 12.390841808293196]).bindPopup("Mezzanottetre");
var Primavalle10 = L.marker([41.94873352274476, 12.393118511997779]).bindPopup("Enoteca DivinEmozioni");
var Primavalle11 = L.marker([41.941265477736, 12.38678989665319]).bindPopup("Bar Cheri 2");
var Primavalle12 = L.marker([41.94356519325787, 12.369451725489336]).bindPopup("Four Sisters");
var Primavalle13 = L.marker([41.92662018877302, 12.375938972083079]).bindPopup("Black'n White");
var Primavalle = L.layerGroup([Primavalle1, Primavalle2, Primavalle3, Primavalle4, Primavalle5, Primavalle6, Primavalle7, Primavalle8, 
  Primavalle9, Primavalle10, Primavalle11, Primavalle12, Primavalle13]);


//Trionfale
var Trionfale1 = L.marker([41.909294013365574, 12.446423340831727]).bindPopup("Mama Shelter");
var Trionfale2 = L.marker([41.92849388634808, 12.445715927340855]).bindPopup("VIVI - Le serre");
var Trionfale3 = L.marker([41.91250322442333, 12.442978225487705]).bindPopup("VINNICO Wine Bar");
var Trionfale4 = L.marker([41.90516263045888, 12.446670811995466]).bindPopup("CHYMEIA - Cocktail Bar & Gastro Miscelazione");
var Trionfale5 = L.marker([41.90980355240062, 12.451266585011961]).bindPopup("Café Gourmet");
var Trionfale6 = L.marker([41.92021670032876, 12.44393242363588]).bindPopup("Foodoo");
var Trionfale7 = L.marker([41.919164511834744, 12.441668962228462]).bindPopup("Cafe Porteño");
var Trionfale8 = L.marker([41.913793448742574, 12.438577096651793]).bindPopup("Caffè La Terrazza");
var Trionfale9 = L.marker([41.91020625972597, 12.451821044860768]).bindPopup("Fábrica");
var Trionfale10 = L.marker([41.90937155315716, 12.45425649665157]).bindPopup("il Covino");
var Trionfale11 = L.marker([41.90907012952519, 12.454927494799186]).bindPopup("The Loft");
var Trionfale12 = L.marker([41.910294757495514, 12.449263550619078]).bindPopup("Green Bar");
var Trionfale13 = L.marker([41.909741475056556, 12.448652120234248]).bindPopup("Bolle Cicchetteria di Quartiere");
var Trionfale = L.layerGroup([Trionfale1, Trionfale2, Trionfale3, Trionfale4, Trionfale5, Trionfale6, Trionfale7, Trionfale8, Trionfale9, 
  Trionfale10, Trionfale11, Trionfale12, Trionfale13]);


var markers = L.markerClusterGroup();
markers.addLayer(Primavalle);
markers.addLayer(Trionfale);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});