var map = L.map('map').setView([41.90187547065311, 12.473100381372474], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Centro Storico
//Trastevere
//Aventino
//Testaccio
//Esquilino
//XX Settembre
//Celio
//Zona Archeologica
//Prati:
var Prati1 = L.marker([41.90884691477165, 12.467018598253418]).bindPopup("Vino e Focaccia");
var Prati2 = L.marker([41.909184420221294, 12.448137184656451]).bindPopup("Fischio");
var Prati3 = L.marker([41.90667086018015, 12.45659242524276]).bindPopup("200 Gradi");

var Prati = L.layerGroup([Prati1, Prati2, Prati3]);
Prati.addTo(map);
//Della Vittoria
//Eroi
var Eroi1=L.marker([41.90953640338526, 12.446431820849735]).bindPopup("Mama Shelter Roma");

var Eroi=L.layerGroup([Eroi1]);
Eroi.addTo(map);




