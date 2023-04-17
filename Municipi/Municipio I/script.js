var map = L.map('map').setView([41.90187547065311, 12.473100381372474], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Rioni escluso Prati
var Rione1 = L.marker([41.900514842702606, 12.482312309217967]).bindPopup("Baccano").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione2 = L.marker([41.9021998743341, 12.484410096035054]).bindPopup("Prosciutteria Cantina dei Papi - Trevi").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione3 = L.marker([41.89403934372998, 12.488143867571882]).bindPopup("Humus Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione4 = L.marker([41.89688128343734, 12.493749105897308]).bindPopup("Blackmarket Hall").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione5 = L.marker([41.90312911568664, 12.484540758892416]).bindPopup("Up Sunset Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione6 = L.marker([41.90024075484615, 12.479311996407334]).bindPopup("Salotto42").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione7 = L.marker([41.897831611620525, 12.472222222121724]).bindPopup("Cul de Sac").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione8 = L.marker([41.89816823550287, 12.471617993213863]).bindPopup("Enoteca Il Piccolo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione9 = L.marker([41.895591949729614, 12.47191258106672]).bindPopup("Taba Café Campo de' Fiori").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione10 = L.marker([41.895494946253955, 12.472023618446547]).bindPopup("Eretico bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione11 = L.marker([41.90045377784655, 12.476617532590428]).bindPopup("Mater Pantheon").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione12 = L.marker([41.897010946388626, 12.478581869294965]).bindPopup("Pigna Enoteca di Sardegna").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione13 = L.marker([41.8882835739174, 12.483705096406684]).bindPopup("Martin Bistrò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione14 = L.marker([41.88827563852588, 12.483577909901374]).bindPopup("Bar MART.in.").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione15 = L.marker([41.887508827428405, 12.478380796406707]).bindPopup("Borgo Ripa").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione16 = L.marker([41.87985608120921, 12.477495896406273]).bindPopup("L'Oasi della Birra").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione17 = L.marker([41.891619047700715, 12.470187910150768]).bindPopup("Bar Meccanismo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione18 = L.marker([41.89222505646582, 12.467839254077079]).bindPopup("Polpetta Trastevere").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione19 = L.marker([41.88989831282052, 12.473302665118123]).bindPopup("VinAllegro").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Rione20 = L.marker([41.891403950975615, 12.470768885257653]).bindPopup("Freni e Frizioni").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});



var Rioni = L.layerGroup([Rione1, Rione2, Rione3, Rione4, Rione5, Rione6, Rione7, Rione8, Rione9, Rione10, Rione11, Rione12, Rione13, Rione14, Rione15, Rione16, Rione17, Rione18, Rione19, Rione20]);
Rioni.addTo(map);

//Prati:
var Prati1 = L.marker([41.90884691477165, 12.467018598253418]).bindPopup("Vino e Focaccia").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Prati2 = L.marker([41.909184420221294, 12.448137184656451]).bindPopup("Fischio").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Prati3 = L.marker([41.90667086018015, 12.45659242524276]).bindPopup("200 Gradi").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Prati = L.layerGroup([Prati1, Prati2, Prati3]);
Prati.addTo(map);
//Della Vittoria
//Eroi
var Eroi1=L.marker([41.90953640338526, 12.446431820849735]).bindPopup("Mama Shelter Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Eroi=L.layerGroup([Eroi1]);
Eroi.addTo(map);




