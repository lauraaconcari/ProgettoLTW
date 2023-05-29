var baseview = [41.90187547065311, 12.473100381372474];
var map = L.map('map').setView(baseview, 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17,17] 
  });
L.Marker.prototype.options.icon = customIcon;

var markerlist= [];
var markers = L.markerClusterGroup({
  disableClusteringAtZoom: 1, // disabilita clustering
  showCoverageOnHover: false, // nasconde i cluster
});
const markerToPlace = {}; //Tupla per salvare id con nome corrispondente con i nomi originali
const markerToPlacelowcase = {};
var Municipio="I";
var data = [
  {
    "id": "I1",
    "location": [41.90045088695234, 12.482698534549783],
    "popupContent": "Baccano"
  },
  {
    "id": "I2",
    "location": [41.9021998743341, 12.484410096035054],
    "popupContent": "Prosciutteria Cantina dei Papi - Trevi"
  },
  {
    "id": "I3",
    "location": [41.89403934372998, 12.488143867571882],
    "popupContent": "Humus Bistrot"
  },
  {
    "id": "I4",
    "location": [41.89688128343734, 12.493749105897308],
    "popupContent": "Blackmarket Hall"
  },
  {
    "id": "I5",
    "location": [41.90312911568664, 12.484540758892416],
    "popupContent": "Up Sunset Bar"
  },
  {
    "id": "I6",
    "location": [41.90024075484615, 12.479311996407334],
    "popupContent": "Salotto42"
  },
  {
    "id": "I7",
    "location": [41.897831611620525, 12.472222222121724],
    "popupContent": "Cul de Sac"
  },
  {
    "id": "I8",
    "location": [41.89816823550287, 12.471617993213863],
    "popupContent": "Enoteca Il Piccolo"
  },
  {
    "id": "I9",
    "location": [41.895591949729614, 12.47191258106672],
    "popupContent": "Taba Café Campo de' Fiori"
  },
  {
    "id": "I10",
    "location": [41.895494946253955, 12.472023618446547],
    "popupContent": "Eretico bistrot"
  },
  {
    "id": "I11",
    "location": [41.90045377784655, 12.476617532590428],
    "popupContent": "Mater Pantheon"
  },
  {
    "id": "I12",
    "location": [41.897010946388626, 12.478581869294965],
    "popupContent": "Pigna Enoteca di Sardegna"
  },
  {
    "id": "I13",
    "location": [41.8882835739174, 12.483705096406684],
    "popupContent": "Martin Bistrò"
  },
  {
    "id": "I14",
    "location": [41.88827563852588, 12.483577909901374],
    "popupContent": "Bar MART.in."
  },
  {
    "id": "I15",
    "location": [41.887508827428405, 12.478380796406707],
    "popupContent": "Borgo Ripa"
  },
  {
    "id": "I16",
    "location": [41.87985608120921, 12.477495896406273],
    "popupContent": "L'Oasi della Birra"
  },
  {
      "id": "I17",
      "location": [41.891619047700715, 12.470187910150768],
      "popupContent": "Bar Meccanismo"
  },
  {
      "id": "I18",
      "location": [41.89222505646582, 12.467839254077079],
      "popupContent": "Polpetta Trastevere"
  },
  {
      "id": "I19",
      "location": [41.88989831282052, 12.473302665118123],
      "popupContent": "VinAllegro"
  },
  {
      "id": "I20",
      "location": [41.891403950975615, 12.470768885257653],
      "popupContent": "Freni e Frizioni"
  },
  {
    "id": "I21",
    "location": [41.903802099573944, 12.462539854077702],
    "popupContent": "Il Petruccino"
  },
  {
    "id": "I22",
    "location": [41.904677356699445, 12.460428782912816],
    "popupContent": "Makasar Bistròt"
  },
  {
    "id": "I23",
    "location": [41.89399424386522, 12.50387915407721],
    "popupContent": "Gatsby Cafè"
  },
  {
    "id": "I24",
    "location": [41.9008678971654, 12.498200025242427],
    "popupContent": "Apotheke Cocktail Bar"
  },
  {
    "id": "I25",
    "location": [41.88741291239995, 12.5104307099014],
    "popupContent": "Hoppiness"
  },
  {
    "id": "I26",
    "location": [41.90798242500299, 12.49654281543946],
    "popupContent": "Downing Square Tartare Bar"
  },
  {
    "id": "I27",
    "location": [41.904365187378616, 12.495215742428718],
    "popupContent": "Lumen Cocktails & Cuisine"
  },
  {
    "id": "I28",
    "location": [41.891739893099654, 12.469887523281514],
    "popupContent": "Caramella"
  },
  {
    "id": "I29",
    "location": [41.890103534412006, 12.494992065151086],
    "popupContent": "Coming Out"
  },
  {
    "id": "I30",
    "location": [41.88984477434638, 12.495400427087581],
    "popupContent": "Colosseum Bar"
  },
  {
    "id": "I31",
    "location": [41.88908603670206, 12.497266196406766],
    "popupContent": "Giulia&Sisto Roma"
  },
  {
    "id": "I32",
    "location": [41.89028496034733, 12.495634598252483],
    "popupContent": "The Court"
  },
  {
    "id": "I33",
    "location": [41.87868267183433, 12.479464181065802],
    "popupContent": "Tram Depot Testaccio"
  },
  {
    "id": "I34",
    "location": [41.87985171097752, 12.476583691575266],
    "popupContent": "Il Testaccino"
  },
  {
    "id": "I35",
    "location": [41.88201004049032, 12.476610009901071],
    "popupContent": "Il Gianfornaio - Testaccio"
  },
  {
    "id": "I36",
    "location": [41.88306872570846, 12.486731352230947],
    "popupContent": "Rosso Eat Drink Stay"
  },
  {
    "id": "I37",
    "location": [41.8811018306263, 12.485096709901011],
    "popupContent": "Casa Manfredi"
  },
  {
    "id": "I38",
    "location": [41.89896006272525, 12.472407755280765],
    "popupContent": "Terrazza Borromini"
  },
  {
    "id": "I39",
    "location": [41.89674832144241, 12.490165529769195],
    "popupContent": "Rooftop Spritzeria Monti"
  },
  {
    "id": "I40",
    "location": [41.90077871038351, 12.483129098253093],
    "popupContent": "L'Antico Forno di Piazza Trevi"
  },
  {
    "id": "I41",
    "location": [41.90055609515522, 12.473114911995246],
    "popupContent": "Tagliere Toscano"
  },
  {
    "id": "I42",
    "location": [41.899195442399545, 12.470879711995147],
    "popupContent": "Baguetteria del Fico"
  },
  {
    "id": "I43",
    "location": [41.90884691477165, 12.467018598253418],
    "popupContent": "Vino e Focaccia"
  },
  {
    "id": "I44",
    "location": [41.909184420221294, 12.448137184656451],
    "popupContent": "Fischio"
  },
  {
    "id": "I45",
    "location": [41.90667086018015, 12.45659242524276],
    "popupContent": "200 Gradi"
  },
  {
    "id": "I46",
    "location": [41.90690311578641, 12.472552393490021],
    "popupContent": "Freeda Roma"
  },
  {
    "id": "I47",
    "location": [41.91261690392565, 12.468776396407948],
    "popupContent": "Dafne Garden Cafè"
  },
  {
    "id": "I48",
    "location": [41.90866304941401, 12.465132807491386],
    "popupContent": "Il Gianfornaio - Prati"
  },
  {
    "id": "I49",
    "location": [41.90683191774508, 12.476212157016242],
    "popupContent": "Il Maritozzo Rosso - Prati"
  },
  {
    "id": "I50",
    "location": [41.90965782505645, 12.473913630535083],
    "popupContent": "Vinoteca Tempere Prati"
  },
  {
    "id": "I51",
    "location": [41.907370764930114, 12.46653112524273],
    "popupContent": "Ozio Restaurant"
  },
  {
    "id": "I52",
    "location": [41.90625268289316, 12.460093138737442],
    "popupContent": "La Zanzara"
  },
  {
    "id": "I53",
    "location": [41.90471861631976, 12.46137150410024],
    "popupContent": "Bukowski's Bar"
  },
  {
    "id": "I54",
    "location": [41.90943313359475, 12.468233287557535],
    "popupContent": "Il Piccolo Diavolo"
  },
  {
    "id": "I55",
    "location": [41.90892453707703, 12.452025865726986],
    "popupContent": "Cantinero"
  },
  {
    "id": "I56",
    "location": [41.90977338379914, 12.448700396407805],
    "popupContent": "Bolle Cicchetteria di Quartiere"
  },
  {
    "id": "I57",
    "location": [41.909536128362696, 12.449852396407822],
    "popupContent": "TBeB"
  },
  {
    "id": "I58",
    "location": [41.91530812657665, 12.462366382913403],
    "popupContent": "Mazzini Caffetteria - Fergui S.r.l.s."
  },
  {
    "id": "I59",
    "location": [41.91553532817841, 12.464428261461045],
    "popupContent": "Gran Caffè Mazzini"
  },
  {
    "id": "I60",
    "location": [41.91658982540807, 12.461012000099565],
    "popupContent": "Tonico Café"
  },
  {
    "id": "I61",
    "location": [41.91708314063197, 12.46051141174866],
    "popupContent": "Quintessenza"
  },
  {
    "id": "I62",
    "location": [41.92349370726969, 12.459005273110476],
    "popupContent": "Prato Chiosco"
  },
  {
    "id": "I63",
    "location": [41.910213555989934, 12.452110951667484],
    "popupContent": "Fábrica"
  },
  {
    "id": "I64",
    "location": [41.91656839255661, 12.461206911748551],
    "popupContent": "Eat me box"
  },
  {
    "id": "I65",
    "location": [41.91690964106599, 12.460941861461098],
    "popupContent": "Sabotino"
  },
  {
    "id": "I66",
    "location": [41.916853156477735, 12.464820303319765],
    "popupContent": "Fico by Baguetteria"
  }
  ];
  for (let i = 0; i < data.length; i++) {
    //Aggiunta dei marker sulla mappa
    let info = data[i];
    let marker = L.marker(info.location, { id: info.id });
    markerToPlace[info.id] = info.popupContent;
    markerToPlacelowcase[info.id] = info.popupContent.toLowerCase();
    marker.bindPopup(info.popupContent);
    markers.addLayer(marker);
    markerlist.push(marker);
  }
  const placeToMarker = _.invert(markerToPlacelowcase);
  console.log(placeToMarker);
  map.addLayer(markers);
//Stringa Json per gli Instagram:
var dataInsta = [
  {
    "phone": "I1",
    "link":"https://www.instagram.com/baccanoroma/",
    "popupContent": "Baccano"
  },
  {
    "phone": "I2",
    "link":"https://www.instagram.com/cantinadeipapiroma/",
    "popupContent": "Prosciutteria Cantina dei Papi - Trevi"
  },
  {
    "phone": "I3",
    "link":"https://www.instagram.com/humusbistrot/",
    "popupContent": "Humus Bistrot"
  },
  {
    "phone": "I4",
    "link":"https://www.instagram.com/blackmarkethall/",
    "popupContent": "Blackmarket Hall"
  },
  {
    "phone": "I5",
    "link":"",
    "popupContent": "Up Sunset Bar"
  },
  {
    "phone": "I6",
    "link":"https://www.instagram.com/salotto42/",
    "popupContent": "Salotto42"
  },
  {
    "phone": "I7",
    "link":"https://www.instagram.com/enoteca_culdesac/",
    "popupContent": "Cul de Sac"
  },
  {
    "phone": "I8",
    "link":"https://www.instagram.com/enoteca_il_piccolo/",
    "popupContent": "Enoteca Il Piccolo"
  },
  {
    "phone": "I9",
    "link":"https://www.instagram.com/tabacafecampo/",
    "popupContent": "Taba Café Campo de' Fiori"
  },
  {
    "phone": "I10",
    "link":"https://www.instagram.com/eretico_bistrot/",
    "popupContent": "Eretico bistrot"
  },
  {
    "phone": "I11",
    "link":"https://www.instagram.com/mater_pantheon/",
    "popupContent": "Mater Pantheon"
  },
  {
    "phone": "I12",
    "link":"",
    "popupContent": "Pigna Enoteca di Sardegna"
  },
  {
    "phone": "I13",
    "link":"",
    "popupContent": "Martin Bistrò"
  },
  {
    "phone": "I14",
    "link":"",
    "popupContent": "Bar MART.in."
  },
  {
    "phone": "I15",
    "link":"https://www.instagram.com/borgoriparoma/",
    "popupContent": "Borgo Ripa"
  },
  {
    "phone": "I16",
    "link":"",
    "popupContent": "L'Oasi della Birra"
  },
  {
      "phone": "I17",
      "link":"https://www.meccanismoroma.com/",
      "popupContent": "Bar Meccanismo"
  },
  {
      "phone": "I18",
      "link":"https://www.instagram.com/polpettaroma_official/",
      "popupContent": "Polpetta Trastevere"
  },
  {
      "phone": "I19",
      "link":"https://www.instagram.com/vinallegro_roma/",
      "popupContent": "VinAllegro"
  },
  {
      "phone": "I20",
      "link":"https://www.instagram.com/freniefrizioni/",
      "popupContent": "Freni e Frizioni"
  },
  {
    "phone": "I21",
    "link":"https://il-petruccino.business.site/",
    "popupContent": "Il Petruccino"
  },
  {
    "phone": "I22",
    "link":"https://www.instagram.com/makasarbistrot/",
    "popupContent": "Makasar Bistròt"
  },
  {
    "phone": "I23",
    "link":"https://www.instagram.com/gatsbycafe/",
    "popupContent": "Gatsby Cafè"
  },
  {
    "phone": "I24",
    "link":"https://www.instagram.com/apothekecocktailbar/",
    "popupContent": "Apotheke Cocktail Bar"
  },
  {
    "phone": "I25",
    "link":"https://www.instagram.com/hoppiness_bistrot/",
    "popupContent": "Hoppiness"
  },
  {
    "phone": "I26",
    "link":"https://www.instagram.com/downingsquare/",
    "popupContent": "Downing Square Tartare Bar"
  },
  {
    "phone": "I27",
    "link":"https://www.lumencocktailsandcuisine.com/it/",
    "popupContent": "Lumen Cocktails & Cuisine"
  },
  {
    "phone": "I28",
    "link":"https://www.instagram.com/lacaramellaroma/",
    "popupContent": "Caramella"
  },
  {
    "phone": "I29",
    "link":"https://www.instagram.com/comingoutroma/",
    "popupContent": "Coming Out"
  },
  {
    "phone": "I30",
    "link":"https://www.instagram.com/colosseum_bar_/",
    "popupContent": "Colosseum Bar"
  },
  {
    "phone": "I31",
    "link":"https://www.instagram.com/giuliaesistoroma/",
    "popupContent": "Giulia&Sisto Roma"
  },
  {
    "phone": "I32",
    "link":"https://www.instagram.com/thecourtrome/",
    "popupContent": "The Court"
  },
  {
    "phone": "I33",
    "link":"https://www.instagram.com/tramdepot_/",
    "popupContent": "Tram Depot Testaccio"
  },
  {
    "phone": "I34",
    "link":"https://www.instagram.com/testaccinobar/",
    "popupContent": "Il Testaccino"
  },
  {
    "phone": "I35",
    "link":"https://www.instagram.com/ilgianfornaio/",
    "popupContent": "Il Gianfornaio - Testaccio"
  },
  {
    "phone": "I36",
    "link":"https://www.instagram.com/rossoeatdrinkstay/",
    "popupContent": "Rosso Eat Drink Stay"
  },
  {
    "phone": "I37",
    "link":"https://www.instagram.com/casamanfredi/",
    "popupContent": "Casa Manfredi"
  },
  {
    "phone": "I38",
    "link":"https://www.instagram.com/terrazzaborromini/",
    "popupContent": "Terrazza Borromini"
  },
  {
    "phone": "I39",
    "link":"https://www.instagram.com/spritzeria.monti/",
    "popupContent": "Rooftop Spritzeria Monti"
  },
  {
    "phone": "I40",
    "link":"https://www.instagram.com/anticofornotrevi/",
    "popupContent": "L'Antico Forno di Piazza Trevi"
  },
  {
    "phone": "I41",
    "link":"https://www.instagram.com/iltaglieretoscano/",
    "popupContent": "Tagliere Toscano"
  },
  {
    "phone": "I42",
    "link":"https://www.instagram.com/ficoroma/",
    "popupContent": "Baguetteria del Fico"
  },
  {
    "phone": "I43",
    "link":"https://www.instagram.com/vinoefocacciabistrot/",
    "popupContent": "Vino e Focaccia"
  },
  {
    "phone": "I44",
    "link":"https://www.instagram.com/fischioroma/" ,
    "popupContent": "Fischio"
  },
  {
    "phone": "I45",
    "link":"https://www.instagram.com/duecentogradi/",
    "popupContent": "200 Gradi"
  },
  {
    "phone": "I46",
    "link":"https://www.instagram.com/freedaromabistrot/",
    "popupContent": "Freeda Roma"
  },
  {
    "phone": "I47",
    "link":"https://www.instagram.com/dafnegardenprati/",
    "popupContent": "Dafne Garden Cafè"
  },
  {
    "phone": "I48",
    "link":"https://www.instagram.com/ilgianfornaio/",
    "popupContent": "Il Gianfornaio - Prati"
  },
  {
    "phone": "I49",
    "link":"https://www.instagram.com/il_maritozzo_rosso/",
    "popupContent": "Il Maritozzo Rosso - Prati"
  },
  {
    "phone": "I50",
    "link":"https://www.instagram.com/vinotecatempere/",
    "popupContent": "Vinoteca Tempere Prati"
  },
  {
    "phone": "I51",
    "link":"https://www.instagram.com/ozio_restaurant_/",
    "popupContent": "Ozio Restaurant"
  },
  {
    "phone": "I52",
    "link":"https://www.instagram.com/lazanzararoma/",
    "popupContent": "La Zanzara"
  },
  {
    "phone": "I53",
    "link":"https://www.instagram.com/bukowskis_bar/",
    "popupContent": "Bukowski's Bar"
  },
  {
    "phone": "I54",
    "link":"https://www.instagram.com/piccolodiavolobar/",
    "popupContent": "Il Piccolo Diavolo"
  },
  {
    "phone": "I55",
    "link":"https://www.instagram.com/cantineroroma/",
    "popupContent": "Cantinero"
  },
  {
    "phone": "I56",
    "link":"https://www.instagram.com/bolle_cicchetteria/",
    "popupContent": "Bolle Cicchetteria di Quartiere"
  },
  {
    "phone": "I57",
    "link":"https://www.tbeb.it/",
    "popupContent": "TBeB"
  },
  {
    "phone": "I58",
    "link":"https://www.instagram.com/caffemazzini/",
    "popupContent": "Mazzini Caffetteria - Fergui S.r.l.s."
  },
  {
    "phone": "I59",
    "link":"https://www.instagram.com/grancaffemazzini/?hl=it",
    "popupContent": "Gran Caffè Mazzini"
  },
  {
    "phone": "I60",
    "link":"https://tonicocaferoma.it/",
    "popupContent": "Tonico Café"
  },
  {
    "phone": "I61",
    "link":"",
    "popupContent": "Quintessenza"
  },
  {
    "phone": "I62",
    "link":"https://www.instagram.com/prato_roma/",
    "popupContent": "Prato Chiosco"
  },
  {
    "phone": "I63",
    "link":"",
    "popupContent": "Fábrica"
  },
  {
    "phone": "I64",
    "link":"",
    "popupContent": "Eat me box"
  },
  {
    "phone": "I65",
    "link":"https://www.instagram.com/sabotino.roma/",
    "popupContent": "Sabotino"
  },
  {
    "phone": "I66",
    "link":"https://www.instagram.com/ficoroma/",
    "popupContent": "Fico by Baguetteria"
  }
  ];

