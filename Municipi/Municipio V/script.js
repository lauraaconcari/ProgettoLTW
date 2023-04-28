var map = L.map('map').setView([41.886356909417685, 12.55083625689699], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;


//Prenestino_Labicano
var Prenestino_Labicano1 = L.marker([41.88997970881795, 12.523782085523587]).bindPopup("Bar Sciubba Roma");
var Prenestino_Labicano2 = L.marker([41.8897319746865, 12.523932651254176]).bindPopup("Pigneto Cafe' & Spirits");
var Prenestino_Labicano3 = L.marker([41.8893975489319, 12.525010985441915]).bindPopup("Pigneto Quarantuno");
var Prenestino_Labicano4 = L.marker([41.88906218657238, 12.525414202859203]).bindPopup("Pigneto 32");
var Prenestino_Labicano5 = L.marker([41.88930590320808, 12.524398881642739]).bindPopup("The street of crocodiles");
var Prenestino_Labicano6 = L.marker([41.8893128917746, 12.524498123367383]).bindPopup("Cargo al Pigneto");
var Prenestino_Labicano7 = L.marker([41.88935981498576, 12.524978909330667]).bindPopup("Pigneto Quarantuno");
var Prenestino_Labicano8 = L.marker([41.88933335828506, 12.525056693385118]).bindPopup("Quello - Ristorante Cocktail Bar");
var Prenestino_Labicano9 = L.marker([41.889236734725024, 12.525333774955236]).bindPopup("Da Mario al Pigneto");
var Prenestino_Labicano10 = L.marker([41.889051038046865, 12.525417593985384]).bindPopup("Malavite Roma Pigneto");
var Prenestino_Labicano11 = L.marker([41.88903312160719, 12.52596899789156]).bindPopup("Vrasciò");
var Prenestino_Labicano12 = L.marker([41.88899917698541, 12.526052816915753]).bindPopup("NABIL");
var Prenestino_Labicano13 = L.marker([41.88896872664614, 12.526213078911848]).bindPopup("Viveri");
var Prenestino_Labicano14 = L.marker([41.889041607758365, 12.526326402232558]).bindPopup("Magnebevo e sto al Pigneto");
var Prenestino_Labicano15 = L.marker([41.88887537879711, 12.526648937885751]).bindPopup("Birra +");
var Prenestino_Labicano16 = L.marker([41.88887721512453, 12.526989783087275]).bindPopup("Bar Rosi Pigneto");
var Prenestino_Labicano17 = L.marker([41.888138858971544, 12.53032721055258]).bindPopup("Sparwasser");
var Prenestino_Labicano18 = L.marker([41.88934522741126, 12.53048545520302]).bindPopup("Spirito Pigneto");
var Prenestino_Labicano19 = L.marker([41.88884432962134, 12.533454990153256]).bindPopup("Hopster");
var Prenestino_Labicano20 = L.marker([41.88868490395153, 12.5342506080312]).bindPopup("Casa Mangiacotti");
var Prenestino_Labicano21 = L.marker([41.89135064639119, 12.531702417413952]).bindPopup("Zazie nel metrò");
var Prenestino_Labicano22 = L.marker([41.89080610855589, 12.538981741597457]).bindPopup("Caffè Point");
var Prenestino_Labicano23 = L.marker([41.890980928405995, 12.540885889219496]).bindPopup("Garden Bar");
var Prenestino_Labicano24 = L.marker([41.89129693551253, 12.541610043136712]).bindPopup("Il Posto Che Non C'era");
var Prenestino_Labicano25 = L.marker([41.89412211312019, 12.54115306574194]).bindPopup("C'era una volta il caffè villa gordiani");
var Prenestino_Labicano26 = L.marker([41.89369881712176, 12.55673984269614]).bindPopup("Du' Parole");
var Prenestino_Labicano27 = L.marker([41.891900060679205, 12.557274171940561]).bindPopup("La Nave Del Luppolo");
var Prenestino_Labicano28 = L.marker([41.89099624233177, 12.557598204431738]).bindPopup("Cocktail Bar Gelateria L'incontro");
var Prenestino_Labicano29 = L.marker([41.89079458814433, 12.557669091138612]).bindPopup("Long Island");
var Prenestino_Labicano30 = L.marker([41.89009820636057, 12.560415615963242]).bindPopup("Mr.Drink Centocelle");
var Prenestino_Labicano31 = L.marker([41.88661190828566, 12.560648387352842]).bindPopup("Eden Bar Roma");
var Prenestino_Labicano32 = L.marker([41.87913636954823, 12.54509432303739]).bindPopup("Kokus Bar");
var Prenestino_Labicano33 = L.marker([41.88216301810458, 12.538660996620088]).bindPopup("Bar 3M");
var Prenestino_Labicano34 = L.marker([41.888957608871586, 12.531455051443887]).bindPopup("KRAM Pigneto");
var Prenestino_Labicano = L.layerGroup([Prenestino_Labicano1, Prenestino_Labicano2, Prenestino_Labicano3, Prenestino_Labicano4,
Prenestino_Labicano5, Prenestino_Labicano6, Prenestino_Labicano7, Prenestino_Labicano8, Prenestino_Labicano9, Prenestino_Labicano10,
Prenestino_Labicano11, Prenestino_Labicano12, Prenestino_Labicano13, Prenestino_Labicano14, Prenestino_Labicano15,
Prenestino_Labicano16, Prenestino_Labicano17, Prenestino_Labicano18, Prenestino_Labicano19, Prenestino_Labicano20,
Prenestino_Labicano21, Prenestino_Labicano22, Prenestino_Labicano23, Prenestino_Labicano24, Prenestino_Labicano25,
Prenestino_Labicano26, Prenestino_Labicano27, Prenestino_Labicano28, Prenestino_Labicano29, Prenestino_Labicano30, Prenestino_Labicano31, Prenestino_Labicano32, Prenestino_Labicano33,Prenestino_Labicano34]);


//Prenestino_Centocelle
var Prenestino_Centocelle1 = L.marker([41.88095895683163, 12.566234640007975]).bindPopup("Plant 42");
var Prenestino_Centocelle2 = L.marker([41.891283578581366, 12.56429410748093]).bindPopup("L’Ombralonga dal Veneziano");
var Prenestino_Centocelle3 = L.marker([41.89078690640876, 12.564862266996732]).bindPopup("BirrEspritz");
var Prenestino_Centocelle4 = L.marker([41.88176021622403, 12.566423183540724]).bindPopup("Mirto");
var Prenestino_Centocelle5 = L.marker([41.88668657850994, 12.561886881066245]).bindPopup("I MEET");
var Prenestino_Centocelle6 = L.marker([41.887277633095934, 12.561843965725863]).bindPopup("Mad Hop");
var Prenestino_Centocelle7 = L.marker([41.88713086065852, 12.562637355645345]).bindPopup("FricciCore");
var Prenestino_Centocelle8 = L.marker([41.885504997981364, 12.562933881515825]).bindPopup("Cama Centocelle");
var Prenestino_Centocelle9 = L.marker([41.88496179406262, 12.562772318718562]).bindPopup("Circolo Artenoize");
var Prenestino_Centocelle10 = L.marker([41.88446520227397, 12.562682791387495]).bindPopup("Enoteca Peccati");
var Prenestino_Centocelle11 = L.marker([41.88563859010036, 12.565889477492862]).bindPopup("Evergreen Centocelle");
var Prenestino_Centocelle12 = L.marker([41.8812200815176, 12.567932579031186]).bindPopup("Woods Lounge Bar - Centocelle");
var Prenestino_Centocelle13 = L.marker([41.880412179701864, 12.568290835877617]).bindPopup("Glu Glu Roma non solo enoteca");
var Prenestino_Centocelle14 = L.marker([41.88082614665634, 12.571201237636815]).bindPopup("Matayaya Ristopub");
var Prenestino_Centocelle15 = L.marker([41.88008866181593, 12.57168387635879]).bindPopup("Retrogusto");
var Prenestino_Centocelle16 = L.marker([41.8781516173075, 12.56709316031927]).bindPopup("Il Baretto");
var Prenestino_Centocelle17 = L.marker([41.878337499727, 12.566138349645707]).bindPopup("Pluma");
var Prenestino_Centocelle18 = L.marker([41.880541958808784, 12.564022874421587]).bindPopup("Al Turacciolo");
var Prenestino_Centocelle19 = L.marker([41.88212462488535, 12.565597027518486]).bindPopup("Un caffettino?");
var Prenestino_Centocelle20 = L.marker([41.88218582686394, 12.566541039823877]).bindPopup("RED.");
var Prenestino_Centocelle = L.layerGroup([Prenestino_Centocelle1, Prenestino_Centocelle2, Prenestino_Centocelle3, Prenestino_Centocelle4, Prenestino_Centocelle5, Prenestino_Centocelle6, Prenestino_Centocelle7, Prenestino_Centocelle8, Prenestino_Centocelle9, Prenestino_Centocelle10, Prenestino_Centocelle11, Prenestino_Centocelle12, Prenestino_Centocelle13, Prenestino_Centocelle14, Prenestino_Centocelle15, Prenestino_Centocelle16, Prenestino_Centocelle17, Prenestino_Centocelle18, Prenestino_Centocelle19, Prenestino_Centocelle20]);


//Alessandrino
var Alessandrino1 = L.marker([41.873315735610255, 12.585415517463732]).bindPopup("Fucina Alessandrina");
var Alessandrino2 = L.marker([41.8734435584026, 12.582411443636616]).bindPopup("Gran Caffè Alessandrino Roma");
var Alessandrino3 = L.marker([41.87465786218053, 12.578291570959447]).bindPopup("Bar Mosca");
var Alessandrino4 = L.marker([41.87536086961269, 12.583784734529006]).bindPopup("New Bar Di Rinaldi Marco");
var Alessandrino5 = L.marker([41.877551786886045, 12.577135527331265]).bindPopup("Bar Sonia");
var Alessandrino6 = L.marker([41.87701639835724, 12.578915822762383]).bindPopup("Roxy Bar");
var Alessandrino7 = L.marker([41.87711615071912, 12.579183765806086]).bindPopup("IL Quadrifoglio d'oro");
var Alessandrino8 = L.marker([41.87853795146699, 12.583030177851622]).bindPopup("AL PICCOLO VINERIA");
var Alessandrino9 = L.marker([41.883115441717635, 12.590186185582981]).bindPopup("Blue Ice");
var Alessandrino10 = L.marker([41.88115148155184, 12.576838540100386]).bindPopup("Ape Gourmet");
var Alessandrino11 = L.marker([41.894666385968776, 12.590594764747534]).bindPopup("Giolli Bar Roma");
var Alessandrino12 = L.marker([41.8747031339234, 12.571409945579182]).bindPopup("Caffè De Cesare");
var Alessandrino = L.layerGroup([Alessandrino1,Alessandrino2,Alessandrino3,Alessandrino4,Alessandrino5,Alessandrino6,Alessandrino7,Alessandrino8,Alessandrino9,Alessandrino10,Alessandrino11,Alessandrino12])

var markers = L.markerClusterGroup();
markers.addLayer(Prenestino_Centocelle);
markers.addLayer(Prenestino_Labicano);
markers.addLayer(Alessandrino);
map.addLayer(markers);
