var map = L.map('map').setView([41.925999289138545, 12.403425855415176], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Primavalle 

//Trionfale
var Trionfale1 = L.marker([41.90953640338526, 12.446431820849735]).bindPopup("Mama Shelter Roma");
