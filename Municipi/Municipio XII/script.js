var map = L.map('map').setView([41.86990113399812, 12.431758843140505], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Gianicolense
var Gianicolense1 = L.marker([]).bindPopup("Enoteca - I Figli del Vinaio").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense2 = L.marker([]).bindPopup("KilometroZERO Coffee, Drink&Food").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense3 = L.marker([]).bindPopup("Totem Garden Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense4 = L.marker([]).bindPopup("Santa Maria Bar & Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense5 = L.marker([]).bindPopup("Cafe Vert").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense6 = L.marker([]).bindPopup("Matière | Bar-à-vin").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense7 = L.marker([]).bindPopup("Massimi Caffè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense8 = L.marker([]).bindPopup("Caffè 104").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense9 = L.marker([]).bindPopup("Bar Faustini").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense10 = L.marker([]).bindPopup("Off Living Room").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense11 = L.marker([]).bindPopup("Giano Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense12 = L.marker([]).bindPopup("Think Farmer").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense13 = L.marker([]).bindPopup("HÉCO Trastevere").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense14 = L.marker([]).bindPopup("Gianicolo Garden").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense15 = L.marker([]).bindPopup("Friccico Mangia&Bevi Bistrò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense16 = L.marker([]).bindPopup("BistrOUT").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense17 = L.marker([]).bindPopup("Il Pozzo since 1973 Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense18 = L.marker([]).bindPopup("Cortile Bravetta").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Gianicolense19 = L.marker([]).bindPopup("Bistrot Enoteca ai Colli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Gianicolense = L.layerGroup([Gianicolense1, Gianicolense2, Gianicolense3, Gianicolense4, Gianicolense5, Gianicolense6, 
  Gianicolense7, Gianicolense8, Gianicolense9, Gianicolense10, Gianicolense11, Gianicolense12, Gianicolense13, Gianicolense14, 
  Gianicolense15, Gianicolense16, Gianicolense17, Gianicolense18, Gianicolense19]);
Gianicolense.addTo(map);


