var map = L.map('map').setView([41.75694411464861, 12.34624035984284], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
//Malafede
//Acilia Nord
//Acilia Sud
//Palocco
//Ostia Antica
//Ostia Nord
//Ostia Sud
//Castel Fusano
//Infernetto
//Castel Porziano
