var map = L.map('map').setView([41.87227948064865, 12.539432694193241], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Tuscolano 
var Tuscolano1 = L.marker([41.8839415852973, 12.522563025486251]).bindPopup("Tira e molla");
var Tuscolano2 = L.marker([41.88375802271953, 12.518130338978064]).bindPopup("Bruni Bistrot Cocktail Bar");
var Tuscolano3 = L.marker([41.88248037583988, 12.51540458315826]).bindPopup("Salotto Stadlin");
var Tuscolano4 = L.marker([41.88584730515517, 12.51174661199444]).bindPopup("BAR BRINDISI");
var Tuscolano5 = L.marker([41.88556992000116, 12.50915609665027]).bindPopup("Le Foodie Café Bistrot");
var Tuscolano6 = L.marker([41.88690186502841, 12.5191475813061]).bindPopup("Blind Pig");
var Tuscolano7 = L.marker([41.88482305866436, 12.51367121199441]).bindPopup("VERSO Eatery & Wine Tales");
var Tuscolano8 = L.marker([41.88506879358799, 12.512587388741487]).bindPopup("C'era una volta il Caffé");
var Tuscolano9 = L.marker([41.884045673598614, 12.51116995432233]).bindPopup("Piano C - Circolo del vino");
var Tuscolano10 = L.marker([41.881417741777256, 12.515212311994208]).bindPopup("Sapori e Parole");
var Tuscolano11 = L.marker([41.873020406676154, 12.528975396649617]).bindPopup("FloW");
var Tuscolano12 = L.marker([41.87606120894121, 12.52985229664983]).bindPopup("Spigolo");
var Tuscolano13 = L.marker([41.87204944028381, 12.525550596649545]).bindPopup("Babù");
var Tuscolano14 = L.marker([41.8627859543976, 12.546941791067944]).bindPopup("malti&mosti");
var Tuscolano16 = L.marker([41.877142755713415, 12.52051921992895]).bindPopup("NaBi Happiness Factory");
var Tuscolano17 = L.marker([41.8768250446149, 12.520886383157906]).bindPopup("TEO'S - Piazza dell'Alberone");
var Tuscolano18 = L.marker([41.87736656295493, 12.518967783158018]).bindPopup("Kubla/Khan");
var Tuscolano19 = L.marker([41.87082069916019, 12.5305424082891]).bindPopup("Quality to Drink");
var Tuscolano20 = L.marker([41.87381919317392, 12.529234296649674]).bindPopup("Les Amis");
var Tuscolano21 = L.marker([41.86465207162865, 12.54213106966543]).bindPopup("Caffedotto Roma");
var Tuscolano22 = L.marker([41.86329362401135, 12.547890110140973]).bindPopup("SECONDO GIRO");
var Tuscolano23 = L.marker([41.86289814678021, 12.550876740829278]).bindPopup("Officina del Sapore");
var Tuscolano24 = L.marker([41.86374289218648, 12.552964538977065]).bindPopup("Barley Wine");
var Tuscolano25 = L.marker([41.85963901217739, 12.551802627337239]).bindPopup("Sottosopra");
var Tuscolano26 = L.marker([41.86133660857102, 12.548430356173373]).bindPopup("spillo");
var Tuscolano = L.layerGroup([Tuscolano1, Tuscolano2, Tuscolano3, Tuscolano4, Tuscolano5, Tuscolano6, Tuscolano7, Tuscolano8, 
    Tuscolano9, Tuscolano10, Tuscolano11, Tuscolano12, Tuscolano13, Tuscolano14, Tuscolano16, Tuscolano17, Tuscolano18, 
    Tuscolano19, Tuscolano20, Tuscolano21, Tuscolano22, Tuscolano23, Tuscolano24, Tuscolano25, Tuscolano26]);




//Don Bosco
var DonBosco1 = L.marker([41.8604769820637, 12.557884754321007]).bindPopup("Al Solito Posto");
var DonBosco2 = L.marker([41.8592847850433, 12.566642611993059]).bindPopup("Rquadro");
var DonBosco3 = L.marker([41.85578385837417, 12.56501098315682]).bindPopup("Sicilian's gourmet");
var DonBosco = L.layerGroup([DonBosco1, DonBosco2, DonBosco3]);
DonBosco.addTo(map);

//Appio Claudio
var AppioClaudio1 = L.marker([41.85413465849214, 12.559368825484686]).bindPopup("La dolce vita");
var AppioClaudio2 = L.marker([41.85420291506349, 12.56334335432074]).bindPopup("Cocktail Bar 23 & Food");
var AppioClaudio3 = L.marker([41.8546949790746, 12.564139194796343]).bindPopup("La Bonora");
var AppioClaudio4 = L.marker([41.85445263188845, 12.566336423632457]).bindPopup("Démodé");
var AppioClaudio5 = L.marker([41.85295383488472, 12.567254923632301]).bindPopup("Rab");
var AppioClaudio6 = L.marker([41.85786049771943, 12.56108859664883]).bindPopup("SpaccioVino Tuscolana");
var AppioClaudio7 = L.marker([41.85841809357932, 12.558788997265356]).bindPopup("Happy Wine");
var AppioClaudio8 = L.marker([41.85440339724227, 12.565572325484691]).bindPopup("Maat Bakery & Bistrot");
var AppioClaudio9 = L.marker([41.85197951168113, 12.55924931199269]).bindPopup("Fermentum");
var AppioClaudio = L.layerGroup([AppioClaudio1, AppioClaudio2, AppioClaudio3, AppioClaudio4, AppioClaudio5, AppioClaudio6, 
    AppioClaudio7, AppioClaudio8, AppioClaudio9]);


//Altro
var Altro1 = L.marker([41.83209734707517, 12.599034238975383]).bindPopup("Perlage");
var Altro2 = L.marker([41.848558587990304, 12.597752381304176]).bindPopup("Mister TAMO");
var Altro3 = L.marker([41.82683548708564, 12.583777194794914]).bindPopup("Ma SI! Bar Tavola Calda");
var Altro4 = L.marker([41.8563439415532, 12.673846663751162]).bindPopup("Dom");
var Altro5 = L.marker([41.86032204476431, 12.688402081304806]).bindPopup("Due Punto Zero");
var Altro6 = L.marker([41.836556593502614, 12.633258883155861]).bindPopup("Buddha Smile");
var Altro7 = L.marker([41.814773137880465, 12.604046275958696]).bindPopup("N°1");
var Altro = L.layerGroup([Altro1, Altro2, Altro3, Altro4, Altro5, Altro6, Altro7]);


//Appio Latino
var AppioLatino1 = L.marker([41.876454270641176, 12.518999027338126]).bindPopup("Enoteca Bonomi");
var AppioLatino2 = L.marker([41.8763976965445, 12.515734810141673]).bindPopup("QIX drink bar");
var AppioLatino3 = L.marker([41.87615006569213, 12.520208352469577]).bindPopup("Vinum Est Roma");
var AppioLatino4 = L.marker([41.87314018349225, 12.520773725485634]).bindPopup("Hopificio");
var AppioLatino5 = L.marker([41.880251620718056, 12.511646352469825]).bindPopup("Rebacco");
var AppioLatino6 = L.marker([41.87839875941948, 12.516271510141783]).bindPopup("Ristorante Buono Enoteca e Cocktail Bar");
var AppioLatino = L.layerGroup([AppioLatino1, AppioLatino2, AppioLatino3, AppioLatino4, AppioLatino5, AppioLatino6]);


var markers = L.markerClusterGroup();
markers.addLayer(Tuscolano);
markers.addLayer(DonBosco);
markers.addLayer(AppioClaudio);
markers.addLayer(Altro);
markers.addLayer(AppioLatino);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});

