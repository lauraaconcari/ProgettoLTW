var map = L.map('map').setView([41.89592576336687, 12.433252152089192], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Aurelio
var Aurelio1 = L.marker([41.9000158381701, 12.452430721746172]).bindPopup("Vino e Peperoncino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio2 = L.marker([41.89913578550424, 12.461020454323073]).bindPopup("Amaro Lobby Bar & Lounge Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio3 = L.marker([41.89901938555138, 12.455668410142867]).bindPopup("Cresci").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio4 = L.marker([41.8956668494598, 12.444806152470573]).bindPopup("Corner237").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio5 = L.marker([41.89437575627724, 12.442072510142598]).bindPopup("Wood San Pietro").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio6 = L.marker([41.89676938920922, 12.441386725486906]).bindPopup("Cantina Tralerighe").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio7 = L.marker([41.89642158074006, 12.440137183158992]).bindPopup("Boris Cucina & Salotto").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio8 = L.marker([41.89627938123786, 12.438918010142741]).bindPopup("Il Pappagallo Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio9 = L.marker([41.90213880246791, 12.438242361069214]).bindPopup("Hola! Café").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio10 = L.marker([41.89589332418036, 12.42964522363458]).bindPopup("Fermento Caffè Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio11 = L.marker([41.90499308576647, 12.426567338979192]).bindPopup("La Stanza Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio12 = L.marker([41.899644084137435, 12.453377125487147]).bindPopup("Squilli Bistrò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Aurelio13 = L.marker([41.899034699924854, 12.451060523634698]).bindPopup("Enoteca dei Desideri").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Aurelio = L.layerGroup([Aurelio1, Aurelio2, Aurelio3, Aurelio4, Aurelio5, Aurelio6, Aurelio7, Aurelio8, Aurelio9, Aurelio10, 
  Aurelio11, Aurelio12, Aurelio13]);
Aurelio.addTo(map);

//Montespaccato
var Montespaccato1 = L.marker([41.90163184999227, 12.390137996651179]).bindPopup("Interno 7 Food & Drink").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Montespaccato2 = L.marker([41.89631590387685, 12.410816023634645]).bindPopup("Bistro Sunseri").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Montespaccato3 = L.marker([41.902337494840054, 12.419920211995317]).bindPopup("Quindi ci posti?").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Montespaccato4 = L.marker([41.90330608454882, 12.422408674864963]).bindPopup("Santo Pane").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Montespaccato5 = L.marker([41.9106552868551, 12.392930671520206]).bindPopup("CASACONSORTI").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Montespaccato6 = L.marker([41.91627754252744, 12.370690481307697]).bindPopup("Sa di Tappo Enoteca Winebar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Montespaccato7 = L.marker([41.91575130926686, 12.35181991199602]).bindPopup("Moe's").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Montespaccato = L.layerGroup([Montespaccato1, Montespaccato2, Montespaccato3, Montespaccato4, Montespaccato5, Montespaccato6, 
  Montespaccato7]);
Montespaccato.addTo(map);