var map = L.map('map').setView([41.87686627372305, 12.451200570483474], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Gianicolense
var Gianicolense1 = L.marker([41.882271618118935, 12.467768138978027]).bindPopup("Enoteca - I Figli del Vinaio");
var Gianicolense2 = L.marker([41.88368619935899, 12.456033811994343]).bindPopup("KilometroZERO Coffee, Drink&Food");
var Gianicolense3 = L.marker([41.87232096510546, 12.450034340829731]).bindPopup("Totem Garden Bar");
var Gianicolense4 = L.marker([41.883531012108634, 12.455430683158314]).bindPopup("Santa Maria Bar & Bistrot");
var Gianicolense5 = L.marker([41.881489917467285, 12.460522381305921]).bindPopup("Cafe Vert");
var Gianicolense6 = L.marker([41.88348274919214, 12.455623283158262]).bindPopup("Matière | Bar-à-vin");
var Gianicolense7 = L.marker([41.87173895391396, 12.443583727337861]).bindPopup("Massimi Caffè");
var Gianicolense8 = L.marker([41.882171660673976, 12.4567498659618]).bindPopup("Caffè 104");
var Gianicolense9 = L.marker([41.88083416005409, 12.463330035578418]).bindPopup("Bar Faustini");
var Gianicolense10 = L.marker([41.8736507158711, 12.46853856781362]).bindPopup("Off Living Room");
var Gianicolense11 = L.marker([41.872774195253356, 12.449675885010027]).bindPopup("Giano Bistrot");
var Gianicolense12 = L.marker([41.87331698370096, 12.467657081305513]).bindPopup("Think Farmer");
var Gianicolense13 = L.marker([41.881140330410034, 12.470628711994166]).bindPopup("HÉCO Trastevere");
var Gianicolense14 = L.marker([41.881899052757916, 12.459652981306748]).bindPopup("Gianicolo Garden");
var Gianicolense15 = L.marker([41.87153430031363, 12.443461896649522]).bindPopup("Friccico Mangia&Bevi Bistrò");
var Gianicolense16 = L.marker([41.86175069417844, 12.443842954321152]).bindPopup("BistrOUT");
var Gianicolense17 = L.marker([41.85805705212055, 12.440964085009249]).bindPopup("Il Pozzo since 1973 Roma");
var Gianicolense18 = L.marker([41.88156269655227, 12.424311481305907]).bindPopup("Cortile Bravetta");
var Gianicolense19 = L.marker([41.86409561260829, 12.4434863831573]).bindPopup("Bistrot Enoteca ai Colli");
var Gianicolense = L.layerGroup([Gianicolense1, Gianicolense2, Gianicolense3, Gianicolense4, Gianicolense5, Gianicolense6, 
  Gianicolense7, Gianicolense8, Gianicolense9, Gianicolense10, Gianicolense11, Gianicolense12, Gianicolense13, Gianicolense14, 
  Gianicolense15, Gianicolense16, Gianicolense17, Gianicolense18, Gianicolense19]);


var markers = L.markerClusterGroup();
markers.addLayer(Gianicolense);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});
