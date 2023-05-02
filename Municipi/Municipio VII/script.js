var map = L.map('map').setView([41.851305901673065, 12.560511220608173], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Tuscolano 
var Tuscolano1 = L.marker([41.8839415852973, 12.522563025486251]).bindPopup("Tira e molla").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano2 = L.marker([]).bindPopup("Bruni Bistrot Cocktail Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano3 = L.marker([]).bindPopup("Salotto Stadlin").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano4 = L.marker([]).bindPopup("BAR BRINDISI").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano5 = L.marker([]).bindPopup("Le Foodie Café Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano6 = L.marker([]).bindPopup("Blind Pig").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano7 = L.marker([]).bindPopup("VERSO Eatery & Wine Tales").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano8 = L.marker([]).bindPopup("C'era una volta il Caffé").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano9 = L.marker([]).bindPopup("Piano C - Circolo del vino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano10 = L.marker([]).bindPopup("Sapori e Parole").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano11 = L.marker([]).bindPopup("FloW").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano12 = L.marker([]).bindPopup("Spigolo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano13 = L.marker([]).bindPopup("Babù").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano14 = L.marker([]).bindPopup("malti&mosti").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano15 = L.marker([]).bindPopup("Happy Wine Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano16 = L.marker([]).bindPopup("NaBi Happiness Factory").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano17 = L.marker([]).bindPopup("TEO'S - Piazza dell'Alberone").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano18 = L.marker([]).bindPopup("Kubla/Khan").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano19 = L.marker([]).bindPopup("Quality to Drink").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano20 = L.marker([]).bindPopup("Les Amis").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano21 = L.marker([]).bindPopup("Caffedotto Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano22 = L.marker([]).bindPopup("SECONDO GIRO").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano23 = L.marker([]).bindPopup("Officina del Sapore").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano24 = L.marker([]).bindPopup("Barley Wine").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano25 = L.marker([]).bindPopup("Sottosopra").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Tuscolano26 = L.marker([]).bindPopup("spillo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Tuscolano = L.layerGroup([Tuscolano1, Tuscolano2, Tuscolano3, Tuscolano4, Tuscolano5, Tuscolano6, Tuscolano7, Tuscolano8, 
    Tuscolano9, Tuscolano10, Tuscolano11, Tuscolano12, Tuscolano13, Tuscolano14, Tuscolano15, Tuscolano16, Tuscolano17, Tuscolano18, 
    Tuscolano19, Tuscolano20, Tuscolano21, Tuscolano22, Tuscolano23, Tuscolano24, Tuscolano25, Tuscolano26]);
Tuscolano.addTo(map);

//Don Bosco
//Appio Claudio
//Appio Latino
//Altro

