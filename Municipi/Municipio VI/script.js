var map = L.map('map').setView([41.884078782648494, 12.651394115392575], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
//Torre Maura
//Giardinetti-Tor Vergata
//Acqua Vergine
//Lunghezza
//Torre Angela
//Borghesiana
//San Vittorino
