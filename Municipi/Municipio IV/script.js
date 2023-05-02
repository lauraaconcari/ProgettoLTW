var map = L.map('map').setView([41.918494641772945, 12.538934589491781], 10,99999999999999999999999999999999999999999999999999999999999);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
//Tiburtino_SanLorenzo
var SanLorenzo1 = L.marker([41.90019728275368, 12.513791911995213]).bindPopup("The Apartment Bar");
var SanLorenzo2 = L.marker([41.897759258635894, 12.51239576407329]).bindPopup("Chiosco San Lorenzo");
var SanLorenzo3 = L.marker([41.89741627214963, 12.510787091056958]).bindPopup("Pankaffè");
var SanLorenzo4 = L.marker([41.90002671660959, 12.513243291807273]).bindPopup("RoofTop Garden");
var SanLorenzo5 = L.marker([41.89675386341266, 12.513057496650887]).bindPopup("Officine Beat");
var SanLorenzo6 = L.marker([41.89664609163565, 12.514123054323028]).bindPopup("Gli Spritzzati Vino e Cicchetti");
var SanLorenzo7 = L.marker([41.898454730358516, 12.519913969667133]).bindPopup("Zero Zero 100");
var SanLorenzo8 = L.marker([41.89990196912145, 12.514377411995182]).bindPopup("Madi Drink & Food");
var SanLorenzo9 = L.marker([41.90059896729097, 12.518835596651066]).bindPopup("Marmo");
var SanLorenzo10 = L.marker([41.898352886634875, 12.516916165962604]).bindPopup("Bar Celestino");
var SanLorenzo11 = L.marker([41.899722098765196, 12.512239969667286]).bindPopup("CIACCO - Emporio");

var SanLorenzo = L.layerGroup([SanLorenzo1, SanLorenzo2, SanLorenzo3, SanLorenzo4, SanLorenzo5, SanLorenzo6, SanLorenzo7, 
    SanLorenzo8, SanLorenzo9, SanLorenzo10, SanLorenzo11]);


//Pietralata
var Pietralata1 = L.marker([41.909895305362774, 12.537906796651527]).bindPopup("Monaco");
var Pietralata2 = L.marker([41.91077183496866, 12.537701127339956]).bindPopup("Enoteca Baccano");
var Pietralata3 = L.marker([41.91031074446423, 12.538462814268673]).bindPopup("Ciara");
var Pietralata4 = L.marker([41.90959668716354, 12.536607101384728]).bindPopup("Senior Jag Cafè");
var Pietralata5 = L.marker([41.92615833593541, 12.535259444267753]).bindPopup("Inofficina");
var Pietralata6 = L.marker([41.908542385527035, 12.54286048315963]).bindPopup("Favole di Pane");
var Pietralata7 = L.marker([41.911506381668644, 12.537819144536417]).bindPopup("Monte Street Bistrot");
var Pietralata8 = L.marker([41.91479804111437, 12.54701286781582]).bindPopup("Enoteca Al Punto Divino");
var Pietralata9 = L.marker([41.92659094917966, 12.559705694771807]).bindPopup("Cottage Aniene food&drink");
var Pietralata10 = L.marker([41.92664130518795, 12.543727298504718]).bindPopup("Tavolo13 Bistropub");
var Pietralata11 = L.marker([41.928845059843695, 12.565479611849051]).bindPopup("Frugale Roma Food Garden");
var Pietralata12 = L.marker([41.90948741120562, 12.538272939144242]).bindPopup("CRUMB - bar, tavola calda, bistrò");
var Pietralata13 = L.marker([41.908069024642444, 12.534980496651452]).bindPopup("Inside out");
var Pietralata14 = L.marker([41.912146036961836, 12.537714411995875]).bindPopup("Knock Street Bar");

var Pietralata = L.layerGroup([Pietralata1, Pietralata2, Pietralata3, Pietralata4, Pietralata5, Pietralata6, Pietralata7, 
    Pietralata8, Pietralata9, Pietralata10, Pietralata11, Pietralata12, Pietralata13, Pietralata14]);


//Collatino
var Collatino1 = L.marker([41.90506793582272, 12.549097183159473]).bindPopup("Galante");
var Collatino2 = L.marker([41.908844376614134, 12.566687327339855]).bindPopup("Autoctono bistrot");
var Collatino3 = L.marker([41.91064086665514, 12.571138765963225]).bindPopup("Al Tipico");
var Collatino4 = L.marker([41.91260196768358, 12.570687096651659]).bindPopup("Breakfast Club Roma");
var Collatino5 = L.marker([41.91574840927275, 12.575072954323998]).bindPopup("Green Bar Bistrot");
var Collatino6 = L.marker([41.90779150983633, 12.551416483159594]).bindPopup("Gran Casal");
var Collatino7 = L.marker([41.90942247524008, 12.550315811995654]).bindPopup("Sottocasa food");
var Collatino8 = L.marker([41.90879949220638, 12.545641394799247]).bindPopup("Fornocafè");
var Collatino9 = L.marker([41.89874244330597, 12.563912854323071]).bindPopup("Cumbo Bistrot");
var Collatino10 = L.marker([41.89859178676932, 12.563189196650955]).bindPopup("Cherubini 1966");
var Collatino11 = L.marker([41.89612963197364, 12.561521698503098]).bindPopup("Ecce Vinum - Enoteca e Salsamenteria");

var Collatino = L.layerGroup([Collatino1, Collatino2, Collatino3, Collatino4, Collatino5, Collatino6, Collatino7, Collatino8, 
    Collatino9, Collatino10, Collatino11]);

//Ponte_Mammolo
var PonteMammolo1 = L.marker([41.943151437958264, 12.55885984639036]).bindPopup("Voia food, wine & Cocktail bar");
var PonteMammolo2 = L.marker([41.944227552661914, 12.569250207767169]).bindPopup("Caffè del Parco");
var PonteMammolo3 = L.marker([41.9365119938834, 12.552463562234628]).bindPopup("Spiritoso - Il bistrot del quartiere");
var PonteMammolo4 = L.marker([41.93498037068229, 12.551880692948208]).bindPopup("Tavernacolo Roma Kant");

var PonteMammolo = L.layerGroup([PonteMammolo1, PonteMammolo2, PonteMammolo3, PonteMammolo4]);

var markers = L.markerClusterGroup();
markers.addLayers([SanLorenzo,Pietralata,Collatino,PonteMammolo]);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});

