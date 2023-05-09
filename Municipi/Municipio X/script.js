var map = L.map('map').setView([41.75694411464861, 12.34624035984284], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;


//Lido di Ostia
var LidoDiOstia1 = L.marker([41.71436076430797, 12.317663338969208]).bindPopup("Shilling");
var LidoDiOstia2 = L.marker([41.716578767441874, 12.311599706337628]).bindPopup("Open Bar");
var LidoDiOstia3 = L.marker([41.73266331412526, 12.292776596642284]).bindPopup("MAGA Wine Bar - Cucina di Mare");
var LidoDiOstia4 = L.marker([41.73205750261686, 12.277427181298066]).bindPopup("Sandrino's");
var LidoDiOstia5 = L.marker([41.730513106466944, 12.279469625478203]).bindPopup("Mas Magna e Bevi");
var LidoDiOstia6 = L.marker([41.73178207022474, 12.269897010134128]).bindPopup("Bahia beach Bar");
var LidoDiOstia7 = L.marker([41.73060190624566, 12.278713783150295]).bindPopup("ALWINE");
var LidoDiOstia8 = L.marker([41.73044159307677, 12.278625481298045]).bindPopup("Insolito Food & Drink Lido di Ostia");
var LidoDiOstia9 = L.marker([41.73362151149761, 12.286148781298202]).bindPopup("Il Sole di Ostia");
var LidoDiOstia10 = L.marker([41.716571875280174, 12.311179369657733]).bindPopup("Pachamama Beachbar");
var LidoDiOstia12 = L.marker([41.70603503558315, 12.336001072353012]).bindPopup("La Spiaggia");
var LidoDiOstia13 = L.marker([41.70819792386434, 12.329907196641003]).bindPopup("V Lounge Beach");
var LidoDiOstia = L.layerGroup([LidoDiOstia1, LidoDiOstia2, LidoDiOstia3, LidoDiOstia4, LidoDiOstia5, LidoDiOstia6, 
  LidoDiOstia7, LidoDiOstia8, LidoDiOstia9, LidoDiOstia10, LidoDiOstia12, LidoDiOstia13]);


//Altro
var Altro1 = L.marker([41.77366714114474, 12.350729858947071]).bindPopup("Dolceamaro");
var Altro2 = L.marker([41.77769238701328, 12.350844938972514]).bindPopup("King's Bistrot");
var Altro3 = L.marker([41.78125197991531, 12.344935296644818]).bindPopup("Tatti bar");
var Altro4 = L.marker([41.763247424836166, 12.371471511988057]).bindPopup("Flo_flower_bar");
var Altro5 = L.marker([41.78019421600979, 12.33869028793921]).bindPopup("Bottega del Buongustaio");
var Altro6 = L.marker([41.762784323239174, 12.371305523627596]).bindPopup("Mawi");
var Altro7 = L.marker([41.75290922839424, 12.368972538071109]).bindPopup("IL BAR DEI PARCHI");
var Altro8 = L.marker([41.7553145296282, 12.371210311987586]).bindPopup("Nero Lab Infernetto");
var Altro9 = L.marker([41.75136113778195, 12.354648010135078]).bindPopup("ICarusO Casalpalocco");
var Altro10 = L.marker([41.74130765783875, 12.360733825478778]).bindPopup("Convivium");
var Altro11 = L.marker([41.799796426179036, 12.42185488130163]).bindPopup("19.2 Winebar Enoteca");
var Altro12 = L.marker([41.73626126790479, 12.368272096642482]).bindPopup("Enoteca Versatile");
var Altro = L.layerGroup([Altro1, Altro2, Altro3, Altro4, Altro5, Altro6, Altro7, Altro8, Altro9, Altro10, Altro11, Altro12]);

var markers = L.markerClusterGroup();
markers.addLayer(LidoDiOstia);
markers.addLayer(Altro);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});
