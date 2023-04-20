var map = L.map('map').setView([41.95589, 12.53584], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Monte Sacro
var MonteSacro1 = L.marker([41.94316271266202, 12.523081638344143]).bindPopup("Parsifal Wine Bar Enoteca").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro2 = L.marker([41.939204412265276, 12.527587749978249]).bindPopup("Apericena").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro3 = L.marker([41.93984286441835, 12.528789379509092]).bindPopup("BarCiboeEnoteca").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro4 = L.marker([41.94015906224189, 12.53608335634904]).bindPopup("Roof Cocktail bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro5 = L.marker([41.93592961358296, 12.531158182013035]).bindPopup("Dervock").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro6 = L.marker([41.93512859680354, 12.531576931364185]).bindPopup("The Random Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro7 = L.marker([41.93566260910766, 12.532205055390909]).bindPopup("Deriva Aniene").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro8 = L.marker([41.9357516107236, 12.53364076745199]).bindPopup("C1b0 Project").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro9 = L.marker([41.93374904432277, 12.53364076745199]).bindPopup("Drinketto Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro10 = L.marker([41.93495059170855, 12.535166211516893]).bindPopup("Mezzo Litro").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro11 = L.marker([41.94333312831209, 12.518571040127913]).bindPopup("Enoteca Mostoqui").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro12 = L.marker([41.93515593096356, 12.536288205683025]).bindPopup("MoVino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro13 = L.marker([41.934803739922145, 12.535916220010709]).bindPopup("Beija Flor cocktail bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro14 = L.marker([41.934363498385444, 12.536068395967565]).bindPopup("Bootleg").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro15 = L.marker([41.93414966565797, 12.537082902135705]).bindPopup("Svago").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro16 = L.marker([41.932627659268164, 12.536017670536335]).bindPopup("Comò Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro17 = L.marker([41.94668092908675, 12.530380042216457]).bindPopup("Vintro Bar & Bites").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro18 = L.marker([41.93281008149665, 12.526080263618528]).bindPopup("Danicla Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro19 = L.marker([41.945163473547666, 12.516934988092833]).bindPopup("Cucci Bistró").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro20 = L.marker([41.93509396404874, 12.536148067816855]).bindPopup("Anchimò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro21 = L.marker([41.93510844648966, 12.535416233398069]).bindPopup("Malto Matto").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro22 = L.marker([41.948282719479984, 12.514660496653642]).bindPopup("Pandolce").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro23 = L.marker([41.95291124957474, 12.516022207465745]).bindPopup("Gipsy Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro24 = L.marker([41.962416771426, 12.518821711998504]).bindPopup("ABC American Bar & Coffee").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro25 = L.marker([41.93425492287355, 12.534234296652816]).bindPopup("Bender").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro26 = L.marker([41.975095466631146, 12.526540283163097]).bindPopup("CoconutBar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var MonteSacro27 = L.marker([41.938851265679006, 12.535042935880243]).bindPopup("IL LOCALE").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var MonteSacro = L.layerGroup([MonteSacro1,MonteSacro2, MonteSacro3, MonteSacro4, MonteSacro5, MonteSacro6, MonteSacro7, MonteSacro8, 
    MonteSacro9, MonteSacro10, MonteSacro11, MonteSacro12, MonteSacro13, MonteSacro14, MonteSacro15, MonteSacro16, MonteSacro17, 
    MonteSacro18, MonteSacro19, MonteSacro20, MonteSacro21, MonteSacro22, MonteSacro23, MonteSacro24, MonteSacro25, MonteSacro26, MonteSacro27]);
MonteSacro.addTo(map);

//Talenti
var Talenti1 = L.marker([41.95351275420143, 12.54440713449676]).bindPopup("Talento Bar Gastronomia").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti2 = L.marker([41.94652663318375, 12.542925134494395]).bindPopup("GALU BAR").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti3 = L.marker([41.954722872249775, 12.548504319156882]).bindPopup("Mossi Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti4 = L.marker([41.943589681121644, 12.547819392163479]).bindPopup("Cafè Les Amì").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti5 = L.marker([41.95174881286274, 12.551858417310063]).bindPopup("Flora Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti6 = L.marker([41.94216726437079, 12.548407103811972]).bindPopup("Bar Plaza Caffetteria").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti7 = L.marker([41.94442197810126, 12.551403419153186]).bindPopup("Bollicina").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti8 = L.marker([41.94845971623193, 12.546991895968045]).bindPopup("Blink").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti9 = L.marker([41.944673271611954, 12.550715111997608]).bindPopup("Ristornate Ugo").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Talenti10 = L.marker([41.94383801395362, 12.548105511997527]).bindPopup("Lo Zio d'America").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Talenti = L.layerGroup([Talenti1,Talenti2,Talenti3,Talenti4,Talenti5,Talenti6,Talenti7,Talenti8,Talenti9,Talenti10]);
Talenti.addTo(map);

//Casal Boccone
var CasalBoccone1 = L.marker([41.949840484701944, 12.53906469107539]).bindPopup("TwoFellows").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var CasalBoccone2 = L.marker([41.95130817933638, 12.53817414741184]).bindPopup("MyCaffè ").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var CasalBoccone3 = L.marker([41.967540451235166, 12.535274225490594]).bindPopup("Buono Come il Pane").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var CasalBoccone4 = L.marker([41.97569484838424, 12.53721357759258]).bindPopup("La Flaca").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var CasalBoccone5 = L.marker([41.95660194213221, 12.549106158405245]).bindPopup("Mossi Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var CasalBoccone = L.layerGroup([CasalBoccone1, CasalBoccone2, CasalBoccone3, CasalBoccone4, CasalBoccone5]);
CasalBoccone.addTo(map);


