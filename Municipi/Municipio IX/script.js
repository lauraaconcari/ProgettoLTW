var map = L.map('map').setView([41.82064209793125, 12.48648492803413], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;


//Europa
var Europa1 = L.marker([41.83122270452794, 12.46431473336161]).bindPopup("Tiki bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa2 = L.marker([41.83315777445222, 12.462398781303353]).bindPopup("Orange Caffè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa3 = L.marker([41.83460504670824, 12.466506296647553]).bindPopup("Namastè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa4 = L.marker([41.83395489740219, 12.468578065959221]).bindPopup("Liszt").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa5 = L.marker([41.82935187094184, 12.473797940827513]).bindPopup("L'Angolo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa6 = L.marker([41.83420712306534, 12.466810752467365]).bindPopup("Frog Lounge Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa7 = L.marker([41.83249966981584, 12.46257339664751]).bindPopup("Il Gianfornaio - Eur").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa8 = L.marker([41.8316998364256, 12.462937052467291]).bindPopup("Spaten Lounge Restaurant Since 1962").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa9 = L.marker([41.83336638009625, 12.476383723631344]).bindPopup("Garden Ristò EUR").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa10 = L.marker([41.830593269569306, 12.474224508195949]).bindPopup("b place roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa11 = L.marker([41.83425427226105, 12.47276045246738]).bindPopup("Voice Restaurant").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa12 = L.marker([41.826570851157925, 12.475033083155344]).bindPopup("Gù Gran Caffè Eur").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa13 = L.marker([41.831083984372086, 12.462995367811395]).bindPopup("BOHOCHICROME").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa14 = L.marker([41.833399986098996, 12.462305867811475]).bindPopup("Move Natural Food").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa15 = L.marker([41.834263472242604, 12.474176081303423]).bindPopup("Le Terrazze").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa16 = L.marker([41.83471213399415, 12.471033869663795]).bindPopup("Casa Novecento").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa17 = L.marker([41.83424842910451, 12.472615281303453]).bindPopup("Pier Eur").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa18 = L.marker([41.833211213103894, 12.476542037446617]).bindPopup("HÉCO Eur").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa22 = L.marker([41.83534144486874, 12.469967552467498]).bindPopup("Nero.Lab").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa23 = L.marker([41.82966355345838, 12.472907196647363]).bindPopup("Vineria Anzuini").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa24 = L.marker([41.82650466694159, 12.47701651199136]).bindPopup("OTTIMO Caffè & Cucina").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Europa25 = L.marker([41.82982099235705, 12.47403895246715]).bindPopup("BLounge Restaurant & Cocktail bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Europa = L.layerGroup([Europa1, Europa2, Europa3, Europa4, Europa5, Europa6, Europa7, Europa8, Europa9, Europa10, Europa11, 
  Europa12, Europa13, Europa14, Europa15, Europa16, Europa17, Europa18, Europa22, Europa23, Europa24, Europa25]);
Europa.addTo(map);


//Giuliano_Dalmata
var GiulianoDalmata1 = L.marker([41.822985423379606, 12.508562050614541]).bindPopup("Andreotti - Fonte Meravigliosa").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var GiulianoDalmata2 = L.marker([41.82590973070389, 12.508336534039596]).bindPopup("Bistrò 65").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var GiulianoDalmata3 = L.marker([41.80749160312594, 12.485802696646234]).bindPopup("Signorvino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var GiulianoDalmata4 = L.marker([41.80893872585018, 12.485460367810282]).bindPopup("Puglià_Maximo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var GiulianoDalmata5 = L.marker([41.80845122381317, 12.486129723629928]).bindPopup("Latte e Fondente").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var GiulianoDalmata = L.layerGroup([GiulianoDalmata1, GiulianoDalmata2, GiulianoDalmata3, GiulianoDalmata4, GiulianoDalmata5]);
GiulianoDalmata.addTo(map);

