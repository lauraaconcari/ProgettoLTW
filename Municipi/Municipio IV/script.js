var map = L.map('map').setView([41.918494641772945, 12.538934589491781], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Tiburtino_SanLorenzo
var SanLorenzo1 = L.marker([41.90019728275368, 12.513791911995213]).bindPopup("The Apartment Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo2 = L.marker([41.897759258635894, 12.51239576407329]).bindPopup("Chiosco San Lorenzo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo3 = L.marker([41.89741627214963, 12.510787091056958]).bindPopup("Pankaffè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo4 = L.marker([41.90002671660959, 12.513243291807273]).bindPopup("RoofTop Garden").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo5 = L.marker([41.89675386341266, 12.513057496650887]).bindPopup("Officine Beat").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo6 = L.marker([41.89664609163565, 12.514123054323028]).bindPopup("Gli Spritzzati Vino e Cicchetti").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo7 = L.marker([41.898454730358516, 12.519913969667133]).bindPopup("Zero Zero 100").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo8 = L.marker([41.89990196912145, 12.514377411995182]).bindPopup("Madi Drink & Food").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo9 = L.marker([41.90059896729097, 12.518835596651066]).bindPopup("Marmo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var SanLorenzo10 = L.marker([41.898352886634875, 12.516916165962604]).bindPopup("Bar Celestino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var SanLorenzo = L.layerGroup([SanLorenzo1, SanLorenzo2, SanLorenzo3, SanLorenzo4, SanLorenzo5, SanLorenzo6, SanLorenzo7, 
    SanLorenzo8, SanLorenzo9, SanLorenzo10]);
SanLorenzo.addTo(map);

//Pietralata
var Pietralata1 = L.marker([41.909895305362774, 12.537906796651527]).bindPopup("Monaco").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata2 = L.marker([41.91077183496866, 12.537701127339956]).bindPopup("Enoteca Baccano").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata3 = L.marker([41.91031074446423, 12.538462814268673]).bindPopup("Ciara").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata4 = L.marker([41.90959668716354, 12.536607101384728]).bindPopup("Senior Jag Cafè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata6 = L.marker([41.908542385527035, 12.54286048315963]).bindPopup("Favole di Pane").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata7 = L.marker([41.911506381668644, 12.537819144536417]).bindPopup("Monte Street Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata8 = L.marker([41.91479804111437, 12.54701286781582]).bindPopup("Enoteca Al Punto Divino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata9 = L.marker([41.92659094917966, 12.559705694771807]).bindPopup("Cottage Aniene food&drink").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata10 = L.marker([41.92664130518795, 12.543727298504718]).bindPopup("Tavolo13 Bistropub").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata11 = L.marker([41.928845059843695, 12.565479611849051]).bindPopup("Frugale Roma Food Garden").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata12 = L.marker([41.90948741120562, 12.538272939144242]).bindPopup("CRUMB - bar, tavola calda, bistrò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata13 = L.marker([41.908069024642444, 12.534980496651452]).bindPopup("Inside out").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pietralata14 = L.marker([41.912146036961836, 12.537714411995875]).bindPopup("Knock Street Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});


var Pietralata = L.layerGroup([Pietralata1, Pietralata2, Pietralata3, Pietralata4, Pietralata6, Pietralata7, 
    Pietralata8, Pietralata9, Pietralata10, Pietralata11, Pietralata12, Pietralata13, Pietralata14]);
Pietralata.addTo(map);

//Collatino
var Collatino1 = L.marker([41.90506793582272, 12.549097183159473]).bindPopup("Galante").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino2 = L.marker([41.908844376614134, 12.566687327339855]).bindPopup("Autoctono bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino3 = L.marker([41.91064086665514, 12.571138765963225]).bindPopup("Al Tipico").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino4 = L.marker([41.91260196768358, 12.570687096651659]).bindPopup("Breakfast Club Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino5 = L.marker([41.91574840927275, 12.575072954323998]).bindPopup("Green Bar Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino6 = L.marker([41.90779150983633, 12.551416483159594]).bindPopup("Gran Casal").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino7 = L.marker([41.90942247524008, 12.550315811995654]).bindPopup("Sottocasa food").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino8 = L.marker([41.90879949220638, 12.545641394799247]).bindPopup("Fornocafè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino9 = L.marker([41.89874244330597, 12.563912854323071]).bindPopup("Cumbo Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino10 = L.marker([41.89859178676932, 12.563189196650955]).bindPopup("Cherubini 1966").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Collatino11 = L.marker([41.89612963197364, 12.561521698503098]).bindPopup("Ecce Vinum - Enoteca e Salsamenteria").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});


var Collatino = L.layerGroup([Collatino1, Collatino2, Collatino3, Collatino4, Collatino5, Collatino6, Collatino7, Collatino8, 
    Collatino9, Collatino10, Collatino11]);
Collatino.addTo(map);


//Ponte_Mammolo
var PonteMammolo1 = L.marker([41.943151437958264, 12.55885984639036]).bindPopup("Voia food, wine & Cocktail bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var PonteMammolo2 = L.marker([41.944227552661914, 12.569250207767169]).bindPopup("Caffè del Parco").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var PonteMammolo3 = L.marker([41.9365119938834, 12.552463562234628]).bindPopup("Spiritoso - Il bistrot del quartiere").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var PonteMammolo4 = L.marker([41.93498037068229, 12.551880692948208]).bindPopup("Tavernacolo Roma Kant").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});


var PonteMammolo = L.layerGroup([PonteMammolo1, PonteMammolo2, PonteMammolo3, PonteMammolo4]);
PonteMammolo.addTo(map);

