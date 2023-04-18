var map = L.map('map').setView([41.9227557539587, 12.498165206192587], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
	
//Parioli
var Parioli1 = L.marker([41.929707653871276, 12.485973613594998]).bindPopup("Duke's").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli2 = L.marker([41.931181050505835, 12.49133739825461]).bindPopup("Caffè Parnaso").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli3 = L.marker([41.93035706081719, 12.485854750248182]).bindPopup("Ercoli 1928").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli4 = L.marker([41.92793452293839, 12.507913696328275]).bindPopup("Lo Scoiattolo Ada").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli5 = L.marker([41.930621679618255, 12.471554484759942]).bindPopup("Bar - Caffè delle Nazioni ai Parioli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli6 = L.marker([41.92833464077347, 12.486743496408796]).bindPopup("Gotha Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli7 = L.marker([41.92463053565024, 12.4912587104665]).bindPopup("Enoteca Parioli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli8 = L.marker([41.92715595218017, 12.485961537918527]).bindPopup("Bambu’s Parioli, Roma").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli9 = L.marker([41.922713829909256, 12.491782754078724]).bindPopup("Palmerie Parioli").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Parioli10 = L.marker([41.92920754636918, 12.479956825244015]).bindPopup("Bar Villa Glori").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

var Parioli = L.layerGroup([Parioli1,Parioli2,Parioli3,Parioli4,Parioli5,Parioli6,Parioli7,Parioli8,Parioli9,Parioli10]);
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
var Trieste1 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste2 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste3 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste4 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste5 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste6 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste7 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste8 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste9 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Trieste10 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});		

//Nomentano	
var Nomentano1 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano2 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano3 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano4 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano5 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano6 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano7 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano8 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano9 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Nomentano10 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

//Tiburtino_Policlinico
var TiburtinoPoli1 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli2 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli3 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli4 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli5 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli6 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli7 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli8 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli9 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var TiburtinoPoli10 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});

//Pinciano
var Pinciano1 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano2 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano3 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano4 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano5 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano6 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano7 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano8 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano9 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});
var Pinciano10 = L.marker([]).bindPopup("").on('click', function(e) {map.setView(e.target.getLatLng(), 16);});	


