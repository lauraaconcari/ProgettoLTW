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
//Colli Portuensi
//Buon Pastore
//Pisana
//Gianicolense
//Massimina
//Pantano di Grano
//Villa Pamphili
