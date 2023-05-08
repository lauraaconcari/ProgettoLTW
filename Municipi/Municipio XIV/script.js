var map = L.map('map').setView([41.925999289138545, 12.403425855415176], 13);
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
var Primavalle1 = L.marker([]).bindPopup("Craft House").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle2 = L.marker([]).bindPopup("Pane e Salame F.lli Lattanzi – Torrevecchia").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle3 = L.marker([]).bindPopup("Piso 35 PUB & Beer Bakery").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle4 = L.marker([]).bindPopup("Hic - Vizi & Sfizi").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle5 = L.marker([]).bindPopup("Caffè Letterario e Aperitivi Roma | Macondo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle6 = L.marker([]).bindPopup("Bar Sicilia").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle7 = L.marker([]).bindPopup("Bar Pasticceria Dolce Oasi").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle8 = L.marker([]).bindPopup("Festival Snack Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle9 = L.marker([]).bindPopup("Mezzanottetre").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle10 = L.marker([]).bindPopup("Enoteca DivinEmozioni").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle11 = L.marker([]).bindPopup("Bar Cheri 2").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle12 = L.marker([]).bindPopup("Four Sisters").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Primavalle13 = L.marker([]).bindPopup("Black'n White").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Primavalle = L.layerGroup([Primavalle1, Primavalle2, Primavalle3, Primavalle4, Primavalle5, Primavalle6, Primavalle7, Primavalle8, 
  Primavalle9, Primavalle10, Primavalle11, Primavalle12, Primavalle13]);
Primavalle.addTo(map);

//Trionfale
var Trionfale1 = L.marker([]).bindPopup("Mama Shelter").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale2 = L.marker([]).bindPopup("VIVI - Le serre").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale3 = L.marker([]).bindPopup("VINNICO Wine Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale4 = L.marker([]).bindPopup("CHYMEIA - Cocktail Bar & Gastro Miscelazione").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale5 = L.marker([]).bindPopup("Café Gourmet").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale6 = L.marker([]).bindPopup("Foodoo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale7 = L.marker([]).bindPopup("Cafe Porteño").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trionfale8 = L.marker([]).bindPopup("Caffè La Terrazza").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Trionfale = L.layerGroup([Trionfale1, Trionfale2, Trionfale3, Trionfale4, Trionfale5, Trionfale6, Trionfale7, Trionfale8]);
Trionfale.addTo(map);