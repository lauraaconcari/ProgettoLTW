var map = L.map('map').setView([41.82942258820336, 12.468838513328809], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
//Eur
//Villaggio Giuliano
//Torrino
//Laurentino
//Cecchignola
//Mezzocammino
//Spinaceto
//Vallerano-Castel di Leva
//Decima
//Porta Medaglia
//Castel Romano
//Santa Palomba
//Tor di Valle
