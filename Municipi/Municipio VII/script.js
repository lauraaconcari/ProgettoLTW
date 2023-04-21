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
//Torrespaccata
//Tuscolano Nord
//Tuscolano Sud
//Tor Fiscale
//Appio
//Latino
//Don Bosco
//Appio Claudio
//Quarto Miglio
//Pignatelli
//Lucrezia Romana
//Osteria del Curato
//Romanina
//Gregna
//Barcaccia
//Morena
//Ciampino
