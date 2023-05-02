var map = L.map('map').setView([41.90187547065311, 12.473100381372474], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
//Rioni escluso Prati
var Rione1 = L.marker([41.900514842702606, 12.482312309217967]).bindPopup("Baccano");
var Rione2 = L.marker([41.9021998743341, 12.484410096035054]).bindPopup("Prosciutteria Cantina dei Papi - Trevi");
var Rione3 = L.marker([41.89403934372998, 12.488143867571882]).bindPopup("Humus Bistrot");
var Rione4 = L.marker([41.89688128343734, 12.493749105897308]).bindPopup("Blackmarket Hall");
var Rione5 = L.marker([41.90312911568664, 12.484540758892416]).bindPopup("Up Sunset Bar");
var Rione6 = L.marker([41.90024075484615, 12.479311996407334]).bindPopup("Salotto42");
var Rione7 = L.marker([41.897831611620525, 12.472222222121724]).bindPopup("Cul de Sac");
var Rione8 = L.marker([41.89816823550287, 12.471617993213863]).bindPopup("Enoteca Il Piccolo");
var Rione9 = L.marker([41.895591949729614, 12.47191258106672]).bindPopup("Taba Café Campo de' Fiori");
var Rione10 = L.marker([41.895494946253955, 12.472023618446547]).bindPopup("Eretico bistrot");
var Rione11 = L.marker([41.90045377784655, 12.476617532590428]).bindPopup("Mater Pantheon");
var Rione12 = L.marker([41.897010946388626, 12.478581869294965]).bindPopup("Pigna Enoteca di Sardegna");
var Rione13 = L.marker([41.8882835739174, 12.483705096406684]).bindPopup("Martin Bistrò");
var Rione14 = L.marker([41.88827563852588, 12.483577909901374]).bindPopup("Bar MART.in.");
var Rione15 = L.marker([41.887508827428405, 12.478380796406707]).bindPopup("Borgo Ripa");
var Rione16 = L.marker([41.87985608120921, 12.477495896406273]).bindPopup("L'Oasi della Birra");
var Rione17 = L.marker([41.891619047700715, 12.470187910150768]).bindPopup("Bar Meccanismo");
var Rione18 = L.marker([41.89222505646582, 12.467839254077079]).bindPopup("Polpetta Trastevere");
var Rione19 = L.marker([41.88989831282052, 12.473302665118123]).bindPopup("VinAllegro");
var Rione20 = L.marker([41.891403950975615, 12.470768885257653]).bindPopup("Freni e Frizioni");
var Rione21 = L.marker([41.903802099573944, 12.462539854077702]).bindPopup("Il Petruccino");
var Rione22 = L.marker([41.904677356699445, 12.460428782912816]).bindPopup("Makasar Bistròt");
var Rione23 = L.marker([41.89399424386522, 12.50387915407721]).bindPopup("Gatsby Cafè");
var Rione24 = L.marker([41.9008678971654, 12.498200025242427]).bindPopup("Apotheke Cocktail Bar");
var Rione25 = L.marker([41.88741291239995, 12.5104307099014]).bindPopup("Hoppiness");
var Rione26 = L.marker([41.90798242500299, 12.49654281543946]).bindPopup("Downing Square Tartare Bar");
var Rione27 = L.marker([41.904365187378616, 12.495215742428718]).bindPopup("Lumen Cocktails & Cuisine");
var Rione28 = L.marker([41.907967346786094, 12.502070713288644]).bindPopup("La Caramella");
var Rione29 = L.marker([41.890103534412006, 12.494992065151086]).bindPopup("Coming Out");
var Rione30 = L.marker([41.88984477434638, 12.495400427087581]).bindPopup("Colosseum Bar");
var Rione31 = L.marker([41.88908603670206, 12.497266196406766]).bindPopup("Giulia&Sisto Roma");
var Rione32 = L.marker([41.89028496034733, 12.495634598252483]).bindPopup("The Court");
var Rione33 = L.marker([41.87868267183433, 12.479464181065802]).bindPopup("Tram Depot Testaccio");
var Rione34 = L.marker([41.87985171097752, 12.476583691575266]).bindPopup("Il Testaccino");
var Rione35 = L.marker([41.88201004049032, 12.476610009901071]).bindPopup("Il Gianfornaio - Testaccio");
var Rione36 = L.marker([41.88306872570846, 12.486731352230947]).bindPopup("Rosso Eat Drink Stay");
var Rione37 = L.marker([41.8811018306263, 12.485096709901011]).bindPopup("Casa Manfredi");
var Rione38 = L.marker([41.89896006272525, 12.472407755280765]).bindPopup("Terrazza Borromini");
var Rione39 = L.marker([41.89674832144241, 12.490165529769195]).bindPopup("Rooftop Spritzeria Monti");
var Rione40 = L.marker([41.90077871038351, 12.483129098253093]).bindPopup("L'Antico Forno di Piazza Trevi");
var Rione41 = L.marker([41.90055609515522, 12.473114911995246]).bindPopup("Tagliere Toscano");
var Rione42 = L.marker([41.899195442399545, 12.470879711995147]).bindPopup("Baguetteria del Fico");

var Rioni = L.layerGroup([Rione1, Rione2, Rione3, Rione4, Rione5, Rione6, Rione7, Rione8, Rione9, Rione10,
Rione11, Rione12, Rione13, Rione14, Rione15, Rione16, Rione17, Rione18, Rione19, Rione20,Rione21, Rione22,
Rione23, Rione24, Rione25, Rione26, Rione27, Rione28, Rione29, Rione30, Rione31, Rione32, Rione33, Rione34,
Rione35, Rione36, Rione37, Rione38, Rione39,Rione40, Rione41, Rione42]);


//Prati:
var Prati1 = L.marker([41.90884691477165, 12.467018598253418]).bindPopup("Vino e Focaccia");
var Prati2 = L.marker([41.909184420221294, 12.448137184656451]).bindPopup("Fischio");
var Prati3 = L.marker([41.90667086018015, 12.45659242524276]).bindPopup("200 Gradi");
var Prati4 = L.marker([41.90690311578641, 12.472552393490021]).bindPopup("Freeda Roma");
var Prati5 = L.marker([41.91261690392565, 12.468776396407948]).bindPopup("Dafne Garden Cafè");
var Prati6 = L.marker([41.90866304941401, 12.465132807491386]).bindPopup("Il Gianfornaio - Prati");
var Prati7 = L.marker([41.90683191774508, 12.476212157016242]).bindPopup("Il Maritozzo Rosso - Prati");
var Prati8 = L.marker([41.90965782505645, 12.473913630535083]).bindPopup("Vinoteca Tempere Prati");
var Prati9 = L.marker([41.907370764930114, 12.46653112524273]).bindPopup("Ozio Restaurant");
var Prati10 = L.marker([41.90625268289316, 12.460093138737442]).bindPopup("La Zanzara");
var Prati11 = L.marker([41.90471861631976, 12.46137150410024]).bindPopup("Bukowski's Bar");
var Prati12 = L.marker([41.90943313359475, 12.468233287557535]).bindPopup("Il Piccolo Diavolo");
var Prati = L.layerGroup([Prati1, Prati2, Prati3,Prati4, Prati5, Prati6, Prati7, Prati8, Prati9, Prati10, Prati11, Prati12]);


//Eroi
var Eroi1=L.marker([41.90953640338526, 12.446431820849735]).bindPopup("Mama Shelter Roma");
var Eroi2=L.marker([41.90892453707703, 12.452025865726986]).bindPopup("Cantinero");
var Eroi3=L.marker([41.90977338379914, 12.448700396407805]).bindPopup("Bolle Cicchetteria di Quartiere");
var Eroi4=L.marker([41.909536128362696, 12.449852396407822]).bindPopup("TBeB");
var Eroi5=L.marker([41.91530812657665, 12.462366382913403]).bindPopup("Mazzini Caffetteria - Fergui S.r.l.s.");
var Eroi6=L.marker([41.91553532817841, 12.464428261461045]).bindPopup("Gran Caffè Mazzini");
var Eroi7=L.marker([41.91658982540807, 12.461012000099565]).bindPopup("Tonico Café");
var Eroi8=L.marker([41.91708314063197, 12.46051141174866]).bindPopup("Quintessenza");
var Eroi9=L.marker([41.920519716796804, 12.460604725243531]).bindPopup("Etilico");
var Eroi10=L.marker([41.92349370726969, 12.459005273110476]).bindPopup("Prato Chiosco");
var Eroi11=L.marker([41.910213555989934, 12.452110951667484]).bindPopup("Fábrica");
var Eroi12=L.marker([41.91656839255661, 12.461206911748551]).bindPopup("Eat me box");
var Eroi13=L.marker([41.91690964106599, 12.460941861461098]).bindPopup("Sabotino");
var Eroi14=L.marker([41.916853156477735, 12.464820303319765]).bindPopup("Fico by Baguetteria");
var Eroi=L.layerGroup([Eroi1,Eroi2,Eroi3,Eroi4,Eroi5,Eroi6,Eroi7,Eroi8,Eroi9,Eroi10,Eroi11,Eroi12,Eroi13,Eroi14]);

var markers = L.markerClusterGroup();
markers.addLayer(Rioni);
markers.addLayer(Prati);
markers.addLayer(Eroi);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});



