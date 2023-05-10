var map = L.map('map').setView([41.86067147112533, 12.49872529820326], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

//Appio_Latino8
var Appio_Latino1 = L.marker([41.881540603530524, 12.503180929138601]).bindPopup("S28 Cucina e Miscele");
var Appio_Latino2 = L.marker([41.88036376814176, 12.501633496650001]).bindPopup("Vicino Enoteca");
var Appio_Latino3 = L.marker([41.880899771046586, 12.504875254322126]).bindPopup("Bar Clementi");
var Appio_Latino4 = L.marker([41.88190276487099, 12.507983610141943]).bindPopup("Enoteca 86");
var Appio_Latino5 = L.marker([41.87830382583147, 12.50392746781387]).bindPopup("Bar Milleluci");
var Appio_Latino6 = L.marker([41.88075250742746, 12.507979954322094]).bindPopup("Barbuto");
var Appio_Latino7 = L.marker([41.87541221080693, 12.507636685010153]).bindPopup("Sideways Vineria Bistrot");
var Appio_Latino8 = L.marker([41.88360465026452, 12.499470110142063]).bindPopup("So & So Bar");
var Appio_Latino9 = L.marker([41.88322302520273, 12.50794775246998]).bindPopup("Rockside");
var Appio_Latino10 = L.marker([41.88261659009318, 12.507724810142001]).bindPopup("I Vitelloni");
var Appio_Latino11 = L.marker([41.88125246625304, 12.502593408289647]).bindPopup("The Place by Sacco Bistrot");
var Appio_Latino = L.layerGroup([Appio_Latino1, Appio_Latino2, Appio_Latino3, Appio_Latino4, 
  Appio_Latino5, Appio_Latino6, Appio_Latino7, Appio_Latino8, Appio_Latino9, Appio_Latino10, Appio_Latino11]);



//Ostiense
var Ostiense1 = L.marker([41.86320702417377, 12.478184969665369]).bindPopup("TBar");
var Ostiense2 = L.marker([41.860540691355986, 12.478552608288533]).bindPopup("Magnoebevo e sto a Ostiense");
var Ostiense3 = L.marker([41.86051671976433, 12.478574065960615]).bindPopup("Angeli Rock");
var Ostiense4 = L.marker([41.863623874198645, 12.483927269665445]).bindPopup("Why Not");
var Ostiense5 = L.marker([41.86315886558318, 12.48479468130492]).bindPopup("La Mescita");
var Ostiense6 = L.marker([41.863004185506725, 12.479401881304922]).bindPopup("Bar Bozza");
var Ostiense7 = L.marker([41.863201185038974, 12.480558540829316]).bindPopup("Vinile");
var Ostiense8 = L.marker([41.864821431138864, 12.491361494796928]).bindPopup("Latteria Garbatella");
var Ostiense9 = L.marker([41.86113929946199, 12.486563740829267]).bindPopup("Chulos Bar Aperitif & Drink");
var Ostiense10 = L.marker([41.855127830538486, 12.478589638976626]).bindPopup("Fulmini e Saette");
var Ostiense11 = L.marker([41.8557248381987, 12.476416767812655]).bindPopup("El Chiringuito Libre");
var Ostiense12 = L.marker([41.85210333658506, 12.476791796648564]).bindPopup("Modo Ristorante Caffè");
var Ostiense13 = L.marker([41.86688029679333, 12.489906411993466]).bindPopup("Biffi");
var Ostiense14 = L.marker([41.861347703505004, 12.491375667812987]).bindPopup("Tre de Tutto");
var Ostiense15 = L.marker([41.85164926252919, 12.47756099664844]).bindPopup("Triplo Cockatail Bar");
var Ostiense16 = L.marker([41.8629093314297, 12.489942864061051]).bindPopup("Bar dei Cesaroni");
var Ostiense17 = L.marker([41.86066707212234, 12.47860298130485]).bindPopup("Sorso Drink & Food");
var Ostiense18 = L.marker([41.87128183808895, 12.479649862211703]).bindPopup("Spritzino Roma");
var Ostiense19 = L.marker([41.871705263223205, 12.479764372128216]).bindPopup("Andreotti - Ostiense");
var Ostiense20 = L.marker([41.87108563406152, 12.480209445942755]).bindPopup("Caffè Letterario");
var Ostiense21 = L.marker([41.87269616249173, 12.47822623897756]).bindPopup("Porto Fluviale");
var Ostiense22 = L.marker([41.87205475646397, 12.479326799359171]).bindPopup("Makai Surf & Tiki Bar");
var Ostiense23 = L.marker([41.87058569963011, 12.482077623633268]).bindPopup("Hoopside");
var Ostiense24 = L.marker([41.87115693440394, 12.4793535848855]).bindPopup("Polpetta Gazometro");
var Ostiense25 = L.marker([41.87076629102469, 12.481003558503708]).bindPopup("Queen Makeda");
var Ostiense26 = L.marker([41.872323252453334, 12.480277937125212]).bindPopup("Tigelleria Romana - Bistrot & Cafè");
var Ostiense27 = L.marker([41.87227920716573, 12.478980210141435]).bindPopup("Enoteca Wine Art");
var Ostiense28 = L.marker([41.871015255552436, 12.476815854630734]).bindPopup("L'antagonista Spritz & Cicchetti");
var Ostiense29 = L.marker([41.870866399029545, 12.479606946867534]).bindPopup("Doppiozeroo");
var Ostiense30 = L.marker([41.86309589506077, 12.489851981304959]).bindPopup("Otium");
var Ostiense31 = L.marker([41.87050398909383, 12.484597571517991]).bindPopup("Figli delle Stelle Garbatella");
var Ostiense = L.layerGroup([Ostiense1, Ostiense2, Ostiense3, Ostiense4, Ostiense5, Ostiense6, Ostiense7, Ostiense8, Ostiense9, 
  Ostiense10, Ostiense11, Ostiense12, Ostiense13, Ostiense14, Ostiense15, Ostiense16, Ostiense17, Ostiense18, Ostiense19, Ostiense20, Ostiense21, Ostiense22, Ostiense23, Ostiense24, Ostiense25, Ostiense26, Ostiense27, Ostiense28, Ostiense29, Ostiense30, Ostiense31]);


//Appio_Pignatelli
var AppioPignatelli1 = L.marker([41.850037948857, 12.5232356947961]).bindPopup("Appia Antica Caffè");
var AppioPignatelli2 = L.marker([41.84441386934095, 12.548742903041347]).bindPopup("Il Veliero Roma");
var AppioPignatelli3 = L.marker([41.838087234234536, 12.547307278399801]).bindPopup("Prosecco e Polpette Bistrò");
var AppioPignatelli4 = L.marker([41.83987771604223, 12.546309496647883]).bindPopup("Calici e taglieri");
var AppioPignatelli5 = L.marker([41.85550892329107, 12.531390246004069]).bindPopup("Parco Appio");
var AppioPignatelli = L.layerGroup([AppioPignatelli1, AppioPignatelli2, AppioPignatelli3, AppioPignatelli4, AppioPignatelli5]);


//Ardeatino
var Ardeatino1 = L.marker([41.85949498451804, 12.507798096648928]).bindPopup("Luce Experience");
var Ardeatino2 = L.marker([41.85821646618246, 12.508592030516038]).bindPopup("Tuarua");
var Ardeatino3 = L.marker([41.85169045396874, 12.49366136781247]).bindPopup("Homemade");
var Ardeatino4 = L.marker([41.83338001200558, 12.49449218117658]).bindPopup("Caffè Baldovinetti");
var Ardeatino5 = L.marker([41.83803564477819, 12.486968281303598]).bindPopup("Nuvola Enobistrot");
var Ardeatino6 = L.marker([41.835155970458956, 12.480655827335967]).bindPopup("Mito");
var Ardeatino = L.layerGroup([Ardeatino1, Ardeatino2, Ardeatino3, Ardeatino4, Ardeatino5, Ardeatino6]);


var markers = L.markerClusterGroup();
markers.addLayer(Appio_Latino);
markers.addLayer(Ostiense);
markers.addLayer(AppioPignatelli);
markers.addLayer(Ardeatino);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});