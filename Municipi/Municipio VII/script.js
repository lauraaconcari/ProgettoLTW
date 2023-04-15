var map = L.map('map').setView([41.851305901673065, 12.560511220608173], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([41.90884691477165, 12.467018598253418]).bindPopup("Vino e Focaccia");
var marker2 = L.marker([41.909184420221294, 12.448137184656451]).bindPopup("Fischio");
var marker3 = L.marker([41.90667086018015, 12.45659242524276]).bindPopup("200 Gradi");
var markers = L.layerGroup([marker1, marker2, marker3]);
markers.addTo(map);
