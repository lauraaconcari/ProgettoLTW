var map = L.map('map').setView([41.94701215030419, 12.45925154726697], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
//Tor di Quinto
//Acquatraversa
//Tomba di Nerone
//Farnesina
//Grotta Rossa Ovest
//Grotta Rossa Est
//Giustiniana
//La Storta
//Santa Cornelia
//Prima Porta
//Labaro
//Cesano
//Martignano
//Foro Italico
