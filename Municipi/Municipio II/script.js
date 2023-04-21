var map = L.map('map').setView([41.9227557539587, 12.498165206192587], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;	
//Parioli
var Parioli1 = L.marker([41.929707653871276, 12.485973613594998]).bindPopup("Duke's").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli2 = L.marker([41.931181050505835, 12.49133739825461]).bindPopup("Caffè Parnaso").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli3 = L.marker([41.93035706081719, 12.485854750248182]).bindPopup("Ercoli 1928").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli4 = L.marker([41.92793452293839, 12.507913696328275]).bindPopup("Lo Scoiattolo Ada").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli5 = L.marker([41.930621679618255, 12.471554484759942]).bindPopup("Bar - Caffè delle Nazioni ai Parioli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli6 = L.marker([41.92833464077347, 12.486743496408796]).bindPopup("Gotha Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli7 = L.marker([41.92463053565024, 12.4912587104665]).bindPopup("Enoteca Parioli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli8 = L.marker([41.92715595218017, 12.485961537918527]).bindPopup("Bambu's Parioli, Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli9 = L.marker([41.922713829909256, 12.491782754078724]).bindPopup("Palmerie Parioli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli10 = L.marker([41.92920754636918, 12.479956825244015]).bindPopup("Bar Villa Glori").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli11 = L.marker([41.928325801796625, 12.469602298870456]).bindPopup("Brio Bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Parioli = L.layerGroup([Parioli1,Parioli2,Parioli3,Parioli4,Parioli5,Parioli6,Parioli7,Parioli8,Parioli9,Parioli10,Parioli11]);
Parioli.addTo(map);
//Flaminio
var Flaminio1 = L.marker([41.93271604935367, 12.466448040584513]).bindPopup("Mostò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio2 = L.marker([41.929283392056874, 12.467384249812707]).bindPopup("Mediterraneo Ristorante e Giardino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio3 = L.marker([41.92758713218298, 12.461706576802039]).bindPopup("Metropolita").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio4 = L.marker([41.9252408807952, 12.464961130466317]).bindPopup("Etablino - Caffè Due Fontane").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio5 = L.marker([41.91251470421975, 12.475307303790732]).bindPopup("Frisó").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio6 = L.marker([41.923436176287645, 12.470646164857442]).bindPopup("Cavatappi enoteca wine bar bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio7 = L.marker([41.92458561196706, 12.468805645778021]).bindPopup("Enoteca Flaminio Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio8 = L.marker([41.92487465879603, 12.46899987029194]).bindPopup("Un Caffè con Te").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio9 = L.marker([41.92590141856656, 12.463991896408723]).bindPopup("Ristorante 'Apoteca - Provviste Alimentari'").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Flaminio10 = L.marker([41.93173645082467, 12.467539401946006]).bindPopup("Jacobà").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Flaminio = L.layerGroup([Flaminio1,Flaminio2,Flaminio3,Flaminio4,Flaminio5,Flaminio6,Flaminio7,Flaminio8,Flaminio9,Flaminio10]);
Flaminio.addTo(map);	
//Salario
var Salario1 = L.marker([41.91114446660275, 12.499269042134644]).bindPopup("Dolce caffè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario2 = L.marker([41.912253611509136, 12.500081584661954]).bindPopup("Molinari Antonio").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario3 = L.marker([41.913604238999085, 12.505569261045842]).bindPopup("PAPY").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario4 = L.marker([41.91254597263525, 12.50131086156027]).bindPopup("KABB - Bistrot Enoteca Caffetteria Cocktail Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario5 = L.marker([41.916842140423064, 12.498905972723852]).bindPopup("Gallo Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario6 = L.marker([41.91730406686619, 12.500224645446307]).bindPopup("Dietro Le Quinte").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario7 = L.marker([41.9182103729732, 12.499958951909711]).bindPopup("La Vineria").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario8 = L.marker([41.91784006488865, 12.499950339726878]).bindPopup("Sesto").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario9 = L.marker([41.91309285922884, 12.497447680838624]).bindPopup("Della Manna").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Salario10 = L.marker([41.911825626916496, 12.498670155923808]).bindPopup("New Age Cafè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Salario = L.layerGroup([Salario1,Salario2,Salario3,Salario4,Salario5,Salario6,Salario7,Salario8,Salario9,Salario10]);
Salario.addTo(map);	

//Trieste
var Trieste1 = L.marker([41.93629139244353, 12.515848254324998]).bindPopup("Pequeño|Atypical Tapas Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste2 = L.marker([41.93162892245359, 12.515705281308533]).bindPopup("Garage 33 Food and Wine").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste3 = L.marker([41.929161810287326, 12.523656810144491]).bindPopup("Misto - Mixology e Cibarie").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste4 = L.marker([41.930489779762325, 12.52155342548862]).bindPopup("Cheers barEDO").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste5 = L.marker([41.922603095551366, 12.511183467816073]).bindPopup("Ivy Food Music & Drink").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste6 = L.marker([41.92313918716738, 12.513589838980144]).bindPopup("Enoteca Graziani").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste7 = L.marker([41.922792129652066, 12.512846310144063]).bindPopup("Crash").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste8 = L.marker([41.92311060815637, 12.512152538980144]).bindPopup("Numbs Le Bistro").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste9 = L.marker([41.91784165915652, 12.50741719059604]).bindPopup("Caprera").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste10 = L.marker([41.91793266876045, 12.507720651969667]).bindPopup("Marziali 1922").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste11 = L.marker([41.92743979678122, 12.514976052472234]).bindPopup("Farina Lab").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste12 = L.marker([41.92831625863092, 12.515555123636306]).bindPopup("Don Nino").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste13 = L.marker([41.923264355879, 12.51522729665224]).bindPopup("White Rabbit").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste14 = L.marker([41.92906291053484, 12.517914881308403]).bindPopup("Dolce").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste15 = L.marker([41.92110164559433, 12.510149096693711]).bindPopup("La Cannoleria Siciliana - Trieste").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste16 = L.marker([41.91938606752425, 12.512305681307872]).bindPopup("Amami").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste17 = L.marker([41.92539708482942, 12.510986967857907]).bindPopup("Caffè Nemorense").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste18 = L.marker([41.914532266914335, 12.505972941813273]).bindPopup("Why Not Cafe").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste19 = L.marker([41.93284890860799, 12.519435811996908]).bindPopup("Gezin Pub").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste20 = L.marker([41.931828677081654, 12.519334967816645]).bindPopup("Gianfornaio - Viale Libia").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste21 = L.marker([41.93102499695989, 12.52271335432475]).bindPopup("&njoy").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Trieste = L.layerGroup([Trieste1,Trieste2,Trieste3,Trieste4,Trieste5,Trieste6,Trieste7,Trieste8,Trieste9,Trieste10,Trieste11,Trieste12,Trieste13,Trieste14,Trieste15,Trieste16,Trieste17,Trieste18,Trieste19,Trieste20,Trieste21]);
Trieste.addTo(map);	

//Nomentano	
var Nomentano1 = L.marker([41.91989529973352, 12.519931467816015]).bindPopup("Momart").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano2 = L.marker([41.90941591301485, 12.511699565963198]).bindPopup("Fauno 3.0").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano3 = L.marker([41.91802087162327, 12.524696596651983]).bindPopup("Vesper Cafè Enoteca").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano4 = L.marker([41.91887508354566, 12.525039919405334]).bindPopup("Seltz Cocktail Bar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano5 = L.marker([41.91239297259077, 12.517887654323793]).bindPopup("Mizzica!").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano6 = L.marker([41.91116537642962, 12.518343838979506]).bindPopup("Vinoteca Tempere").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano7 = L.marker([41.91379471318318, 12.52150209850407]).bindPopup("Meeting Place").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano8 = L.marker([41.91309074664381, 12.521262081307531]).bindPopup("Mood Cafè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano9 = L.marker([41.90928604663056, 12.520498410143365]).bindPopup("MùMar Cafè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano10 = L.marker([41.90816812444419, 12.518621965963153]).bindPopup("Papà Non Vuole").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano11 = L.marker([41.907973312568316, 12.518459291060713]).bindPopup("Il Baretto").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano12 = L.marker([41.90639051914056, 12.516928996651387]).bindPopup("You must bistrot").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano13 = L.marker([41.90833078297972, 12.51869739405509]).bindPopup("Mordimi").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano14 = L.marker([41.90898418002231, 12.52046231804481]).bindPopup("Tappa Fissa").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano15 = L.marker([41.90810693217555, 12.516821683159565]).bindPopup("Abitudini e Follie").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano16 = L.marker([41.909998673870945, 12.520901567815583]).bindPopup("Colette").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano17 = L.marker([41.90873509235124, 12.520125711995664]).bindPopup("Spritzzeria").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano18 = L.marker([41.920755567192785, 12.520464938980023]).bindPopup("Stappò").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano19 = L.marker([41.90685925942407, 12.516480540831703]).bindPopup("Las Tapas").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano20 = L.marker([41.91496962467531, 12.522295411995987]).bindPopup("Blend").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano21 = L.marker([41.90839592398824, 12.517992711995692]).bindPopup("Punto Drink e Pietanze").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano22 = L.marker([41.90781988206146, 12.521952106404811]).bindPopup("Bodeguita").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Nomentano = L.layerGroup([Nomentano1,Nomentano2,Nomentano3,Nomentano4,Nomentano5,Nomentano6,Nomentano7,Nomentano8,Nomentano9,Nomentano10,Nomentano11,Nomentano12,Nomentano13,Nomentano14,Nomentano15,Nomentano16,Nomentano17,Nomentano18,Nomentano19,Nomentano20,Nomentano21,Nomentano22]);
Nomentano.addTo(map);	

//Pinciano
var Pinciano1 = L.marker([41.9266881342002, 12.480694025488441]).bindPopup("Carrot's cafè").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano2 = L.marker([41.917653856138045, 12.48135889479964]).bindPopup("Caffè delle Arti").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano3 = L.marker([41.923365003675, 12.471472210144071]).bindPopup("Treebar").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano4 = L.marker([41.9215376122891, 12.47366498130794]).bindPopup("Villa Balestra").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Pinciano = L.layerGroup([Pinciano1,Pinciano2,Pinciano3,Pinciano4]);
Pinciano.addTo(map);


