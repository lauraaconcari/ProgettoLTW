var map = L.map('map').setView([41.862810438339224, 12.4639972788267], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Portuense
var Portuense1 = L.marker([41.87194133399641, 12.47061163522821]).bindPopup("Städlin").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense2 = L.marker([41.869529791163934, 12.466729481305283]).bindPopup("Stazione 38").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense3 = L.marker([41.86641229971461, 12.465168696649256]).bindPopup("Enoteca Uva Luppolo E Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense4 = L.marker([41.86522434047658, 12.468634237124832]).bindPopup("I Siciliani").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense5 = L.marker([41.86259211855145, 12.47080029664913]).bindPopup("SHAVI BAR").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense6 = L.marker([41.84950797036802, 12.44641785487317]).bindPopup("Bistrot 139").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense7 = L.marker([41.85602062875366, 12.446986338976695]).bindPopup("Rossibar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense8 = L.marker([41.85844049634241, 12.454816356173207]).bindPopup("Bistrot Alleria - La Caffetteria dal 1980").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense9 = L.marker([41.86604129857583, 12.471722181305095]).bindPopup("Bottega Arconti").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Portuense10 = L.marker([41.86877622421897, 12.47230668315759]).bindPopup("Bar India").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Portuense = L.layerGroup([Portuense1, Portuense2, Portuense3, Portuense4, Portuense5, Portuense6, Portuense7, Portuense8, 
  Portuense9, Portuense10]);
Portuense.addTo(map);


