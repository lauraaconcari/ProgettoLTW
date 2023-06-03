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
//Usiamo un markercluster per ragruppare i marker anche se non usiamo la funzione estetica del clustering
var markers = L.markerClusterGroup({
  disableClusteringAtZoom: 1,
  showCoverageOnHover: false, 
});
const markerToPlace = {}; //Tupla per salvare id con nome corrispondente con i nomi originali
const markerToPlacelowcase = {};
var Municipio="I";//Variabile per indicare il municipio di tale script perchè viene utilizzata in preferiti.js

//Dati riguardanti i posti, in particolare la loro posizione geografica il loro nome e il loro id univoco
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

  //Aggiunta dei marker sulla mappa e nei vari dizionari utilizzati in altre funzioni
  for (let i = 0; i < data.length; i++) {
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
//Raggruppamento degli stessi posti ma stavolta abbiamo il numero di telefono e il sito web:
var dataInsta = [
  {
    "phone": "0663617038",
    "link":"https://www.instagram.com/baccanoroma/",
    "popupContent": "Baccano"
  },
  {
    "phone": "0655825761",
    "link":"https://www.instagram.com/cantinadeipapiroma/",
    "popupContent": "Prosciutteria Cantina dei Papi - Trevi"
  },
  {
    "phone": "0605842376",
    "link":"https://www.instagram.com/humusbistrot/",
    "popupContent": "Humus Bistrot"
  },
  {
    "phone": "0678811565",
    "link":"https://www.instagram.com/blackmarkethall/",
    "popupContent": "Blackmarket Hall"
  },
  {
    "phone": "0674959711",
    "link":"",
    "popupContent": "Up Sunset Bar"
  },
  {
    "phone": "0651397035",
    "link":"https://www.instagram.com/salotto42/",
    "popupContent": "Salotto42"
  },
  {
    "phone": "0602143890",
    "link":"https://www.instagram.com/enoteca_culdesac/",
    "popupContent": "Cul de Sac"
  },
  {
    "phone": "0649525809",
    "link":"https://www.instagram.com/enoteca_il_piccolo/",
    "popupContent": "Enoteca Il Piccolo"
  },
  {
    "phone": "0621017768",
    "link":"https://www.instagram.com/tabacafecampo/",
    "popupContent": "Taba Café Campo de' Fiori"
  },
  {
    "phone": "0640507947",
    "link":"https://www.instagram.com/eretico_bistrot/",
    "popupContent": "Eretico bistrot"
  },
  {
    "phone": "0653220969",
    "link":"https://www.instagram.com/mater_pantheon/",
    "popupContent": "Mater Pantheon"
  },
  {
    "phone": "0649329301",
    "link":"",
    "popupContent": "Pigna Enoteca di Sardegna"
  },
  {
    "phone": "0633686851",
    "link":"",
    "popupContent": "Martin Bistrò"
  },
  {
    "phone": "0623938315",
    "link":"",
    "popupContent": "Bar MART.in."
  },
  {
    "phone": "0613371875",
    "link":"https://www.instagram.com/borgoriparoma/",
    "popupContent": "Borgo Ripa"
  },
  {
    "phone": "0653834272",
    "link":"",
    "popupContent": "L'Oasi della Birra"
  },
  {
      "phone": "0602203565",
      "link":"https://www.meccanismoroma.com/",
      "popupContent": "Bar Meccanismo"
  },
  {
      "phone": "0646627241",
      "link":"https://www.instagram.com/polpettaroma_official/",
      "popupContent": "Polpetta Trastevere"
  },
  {
      "phone": "0647979478",
      "link":"https://www.instagram.com/vinallegro_roma/",
      "popupContent": "VinAllegro"
  },
  {
      "phone": "0695674253",
      "link":"https://www.instagram.com/freniefrizioni/",
      "popupContent": "Freni e Frizioni"
  },
  {
    "phone": "0682205395",
    "link":"https://il-petruccino.business.site/",
    "popupContent": "Il Petruccino"
  },
  {
    "phone": "0676515882",
    "link":"https://www.instagram.com/makasarbistrot/",
    "popupContent": "Makasar Bistròt"
  },
  {
    "phone": "0689874159",
    "link":"https://www.instagram.com/gatsbycafe/",
    "popupContent": "Gatsby Cafè"
  },
  {
    "phone": "0602466121",
    "link":"https://www.instagram.com/apothekecocktailbar/",
    "popupContent": "Apotheke Cocktail Bar"
  },
  {
    "phone": "0633939215",
    "link":"https://www.instagram.com/hoppiness_bistrot/",
    "popupContent": "Hoppiness"
  },
  {
    "phone": "0691824467",
    "link":"https://www.instagram.com/downingsquare/",
    "popupContent": "Downing Square Tartare Bar"
  },
  {
    "phone": "0646182733",
    "link":"https://www.lumencocktailsandcuisine.com/it/",
    "popupContent": "Lumen Cocktails & Cuisine"
  },
  {
    "phone": "0690910781",
    "link":"https://www.instagram.com/lacaramellaroma/",
    "popupContent": "Caramella"
  },
  {
    "phone": "0666576335",
    "link":"https://www.instagram.com/comingoutroma/",
    "popupContent": "Coming Out"
  },
  {
    "phone": "0600911326",
    "link":"https://www.instagram.com/colosseum_bar_/",
    "popupContent": "Colosseum Bar"
  },
  {
    "phone": "0613510055",
    "link":"https://www.instagram.com/giuliaesistoroma/",
    "popupContent": "Giulia&Sisto Roma"
  },
  {
    "phone": "0670121938",
    "link":"https://www.instagram.com/thecourtrome/",
    "popupContent": "The Court"
  },
  {
    "phone": "0649474509",
    "link":"https://www.instagram.com/tramdepot_/",
    "popupContent": "Tram Depot Testaccio"
  },
  {
    "phone": "0625882123",
    "link":"https://www.instagram.com/testaccinobar/",
    "popupContent": "Il Testaccino"
  },
  {
    "phone": "0690113458",
    "link":"https://www.instagram.com/ilgianfornaio/",
    "popupContent": "Il Gianfornaio - Testaccio"
  },
  {
    "phone": "0670693118",
    "link":"https://www.instagram.com/rossoeatdrinkstay/",
    "popupContent": "Rosso Eat Drink Stay"
  },
  {
    "phone": "0664176970",
    "link":"https://www.instagram.com/casamanfredi/",
    "popupContent": "Casa Manfredi"
  },
  {
    "phone": "0639702543",
    "link":"https://www.instagram.com/terrazzaborromini/",
    "popupContent": "Terrazza Borromini"
  },
  {
    "phone": "0683192397",
    "link":"https://www.instagram.com/spritzeria.monti/",
    "popupContent": "Rooftop Spritzeria Monti"
  },
  {
    "phone": "0661453539",
    "link":"https://www.instagram.com/anticofornotrevi/",
    "popupContent": "L'Antico Forno di Piazza Trevi"
  },
  {
    "phone": "0618925390",
    "link":"https://www.instagram.com/iltaglieretoscano/",
    "popupContent": "Tagliere Toscano"
  },
  {
    "phone": "0664055806",
    "link":"https://www.instagram.com/ficoroma/",
    "popupContent": "Baguetteria del Fico"
  },
  {
    "phone": "0657211291",
    "link":"https://www.instagram.com/vinoefocacciabistrot/",
    "popupContent": "Vino e Focaccia"
  },
  {
    "phone": "0607942440",
    "link":"https://www.instagram.com/fischioroma/" ,
    "popupContent": "Fischio"
  },
  {
    "phone": "0605507930",
    "link":"https://www.instagram.com/duecentogradi/",
    "popupContent": "200 Gradi"
  },
  {
    "phone": "0681436965",
    "link":"https://www.instagram.com/freedaromabistrot/",
    "popupContent": "Freeda Roma"
  },
  {
    "phone": "0680946962",
    "link":"https://www.instagram.com/dafnegardenprati/",
    "popupContent": "Dafne Garden Cafè"
  },
  {
    "phone": "0612410442",
    "link":"https://www.instagram.com/ilgianfornaio/",
    "popupContent": "Il Gianfornaio - Prati"
  },
  {
    "phone": "0609907089",
    "link":"https://www.instagram.com/il_maritozzo_rosso/",
    "popupContent": "Il Maritozzo Rosso - Prati"
  },
  {
    "phone": "0601986138",
    "link":"https://www.instagram.com/vinotecatempere/",
    "popupContent": "Vinoteca Tempere Prati"
  },
  {
    "phone": "0677431562",
    "link":"https://www.instagram.com/ozio_restaurant_/",
    "popupContent": "Ozio Restaurant"
  },
  {
    "phone": "0633081581",
    "link":"https://www.instagram.com/lazanzararoma/",
    "popupContent": "La Zanzara"
  },
  {
    "phone": "0640056487",
    "link":"https://www.instagram.com/bukowskis_bar/",
    "popupContent": "Bukowski's Bar"
  },
  {
    "phone": "0628120811",
    "link":"https://www.instagram.com/piccolodiavolobar/",
    "popupContent": "Il Piccolo Diavolo"
  },
  {
    "phone": "0656058938",
    "link":"https://www.instagram.com/cantineroroma/",
    "popupContent": "Cantinero"
  },
  {
    "phone": "0670468829",
    "link":"https://www.instagram.com/bolle_cicchetteria/",
    "popupContent": "Bolle Cicchetteria di Quartiere"
  },
  {
    "phone": "0665681077",
    "link":"https://www.tbeb.it/",
    "popupContent": "TBeB"
  },
  {
    "phone": "0693976800",
    "link":"https://www.instagram.com/caffemazzini/",
    "popupContent": "Mazzini Caffetteria - Fergui S.r.l.s."
  },
  {
    "phone": "0632235086",
    "link":"https://www.instagram.com/grancaffemazzini/?hl=it",
    "popupContent": "Gran Caffè Mazzini"
  },
  {
    "phone": "0644811331",
    "link":"https://tonicocaferoma.it/",
    "popupContent": "Tonico Café"
  },
  {
    "phone": "0660024942",
    "link":"",
    "popupContent": "Quintessenza"
  },
  {
    "phone": "0685055494",
    "link":"https://www.instagram.com/prato_roma/",
    "popupContent": "Prato Chiosco"
  },
  {
    "phone": "0690895157",
    "link":"",
    "popupContent": "Fábrica"
  },
  {
    "phone": "0627250902",
    "link":"",
    "popupContent": "Eat me box"
  },
  {
    "phone": "0643563595",
    "link":"https://www.instagram.com/sabotino.roma/",
    "popupContent": "Sabotino"
  },
  {
    "phone": "0670442667",
    "link":"https://www.instagram.com/ficoroma/",
    "popupContent": "Fico by Baguetteria"
  }
];

//Dizionario con le descrizioni dei luoghi
var Descrizioni = {
  "I1": "Brasserie e cocktail bar con soffitto a volta che propone un menù tradizionale mediterraneo e contemporaneo. €€€",
  "I2": "Panini e taglieri di salumi in un locale rustico dagli arredi di legno con prosciutti appesi al soffitto. Taglieri con porzioni abbondandi, quasi da cena più che da aperitivo. Locale piccolo ma accogliente. €€",
  "I3": "Posto che offre una location molto carina e suggestiva. Il punto forte è ovviamente l'hummus, con una buna varietà e ricercatezza nei sapori. €€",
  "I4": "Bruschette, hamburger e piatti vegani serviti in un elegante ristorante storico con cocktail unici. €€",
  "I5": "Cocktail e spuntini mediterranei in un locale elegante dotato di una terrazza sul tetto della famosa catena di grandi magazzini La Rinascente soleggiata con vista panoramica. €€€",
  "I6": "Luogo incantevole nel cuore di Roma di fronte al Tempio di Adriano. Il locale è piccolino, ambiente moderno, raffinato e accogliente. Possibilità di consumale all'interno, oppure all'esterno. Cocktail buoni ed aperitivi delicati, musica di sottofondo che da l'opportunità di poter parlare. €€",
  "I7": "A pochi passi da Piazza Navona, l'Enoteca Cul de Sac si trova in Piazza di Pasquino, altrettanto vicina alla nota Piazza di Campo de' Fiori.  Consigliato per un pranzo nel cuore della capitale, ma anche per un aperitivo con un ampia scelta di vini italiani (oltre 1500 etichette) e sfiziosi crostini. €€-€€€",
  "I8": "Sedersi, bere un bicchiere di vino – buona cantina e spazio anche alle produzioni biologiche – e godersi il via vai che rimbalza tra vie e piazze del centro storico. Non mancano piatti con cui sfamarsi tra un bicchiere e l’altro e vassoi da depredare all’aperitivo. I personaggioni della Roma che fu che scendono da casa e si fanno la loro bevuta quotidiana sono un valore  aggiunto. Asso nella manica in zona Piazza Navona. €€",
  "I9": "Posto consigliatissimo in pieno campo dei fiori vicino la statua di Giordano bruno, arredato con colori vivaci e poltrone comode e rilassanti ideale per un aperitivo con stuzzichini  interessanti che vanno da bruschetta a taglieri di salumi a mix di empanadas a focaccia. Molto giovane come ambiente. €€",
  "I10": "Posto nuovo, aperto solo da un anno ma che già è decollato. Qua puoi trovare una tra le migliori formule aperitivo del centro: tagliere (salumi o bruschette) accompagnato da un  cestino di pane + bevanda a 15 euro. €",
  "I11": "Un’intuizione geniale a pochi passi dal Pantheon che non potete assolutamente perdervi. Che sia per un aperitivo, un pranzo o una cena veloci, grazie ad una conveniente offerta  (aperipizza) a 10€ potrete avere un drink e un tagliere di pizza “alla romana” a vari gusti. €",
  "I12": "Tutto il mangiare e bere della Sardegna nel cuore di Roma, enoteca fornitissima, prodotti ricercati e cura dei particolari. Un aperitivo unico nel suo genere. Prezzi un po' alti per lo standard aperitivo. €€€",
  "I13": "Bistrot turistico zona circo massimo adatto a una pausa veloce. €",
  "I14": "Bar di fronte al Circo Massimo sulla via dei Cerchi. Arredato in stile moderno con dipinti e quadri coloratissimi è un punto di ristoro efficace e valido. €",
  "I15": "Aperitivi, Apericena, Cocktail bar, Giardino e Spazio per eventi di ogni genere. Il punto forte è sicuro la location. €€€",
  "I16": "Locale rustico con archi in pietra, che offre una vasta scelta di vini, formaggi e salumi. Hanno tantissimi tipi di birra anche quelle artigianali e l'aperitivo a buffet è molto economico. ",
  "I17": "Dal giorno alla notte: bar & bistrot, american breakfast, light lunch, aperitivo, cena e dopocena in una delle piazze più suggestive della Capitale, nel cuore di Trastevere. A 10€ ti portano un tagliere pienissimo e un drink, assolutamente conveniente.  €",
  "I18": "Il quarto ristorante del brand Polpetta sorge nel cuore di uno dei quartieri più storici in assoluto a Roma: Trastevere. Inoltre per coronare al meglio il tutto è stato scelto un luogoben preciso… Gli storici Giardini della Fornarina di Raffaello, luogo magico e suggestivo in grado di rievocare la tradizione romana. Come poter resistere a un aperitivo a base di  polpette di ogni genere? €",
  "I19": "Wine bar ricoperto di edera, con muri in pietra a vista e legno scuro, che serve piatti tipici locali a lume di candela. €",
  "I20": "Vivace bar con terrazza animata, dove gustare cocktail e aperitivi tra lampadari e arte moderna. €",
  "I21": "Al n. 13 di Borgo Pio c'è un posto delizioso dove trascorrere un po' di tempo in tranquillità, in un'atmosfera intima ed accogliente. Ideale per un aperitivo e quattro chiacchiere in  compagnia, ti coinvolge anche con degli ottimi stuzzichini e qualche piatto di ottima fattura. Posto ben lontano dalle trappole per turisti in quella zona.  €€",
  "I22": "Winebar, birreria, cocktail bar e libreria ma anche un vero e proprio emporio del tè nel cuore di Roma, che si trasforma per chiunque lo visiti in un’oasi di relax. Taglieri, bruschette e stuzzichini per l’aperitivo comodamente seduti al bancone o ai tavolini negli angoli etnici. €",
  "I23": "Locale sofisticato disposto su due livelli con espresso, cocktail e piatti da bar, oltre a un programma regolare di concerti jazz.€€",
  "I24": "Una lunga lista di cocktail e vini regionali offerti in un elegante bar in stile Art Déco con una terrazza panoramica. €€€",
  "I25": "Non è un pub, non è un bistrot e non è una trattoria, ma in realtà è un mix di tutto questo. Non hanno una vera e propria formula aperitivo ma ti danno un tagliere con degli assaggi  di tutto il menu €€",
  "I26": "Primo TARTARE BAR d’Italia, un locale intimo con pochi coperti, specializzato in crudi di carne e di pesce, una buona selezione di vini ed un cocktail bar con homemade cocktails,  tutto a gestione familiare, nella splendida cornice di piazza Sallustio",
  "I27": "Da febbraio 2019 il bar del St. Regis si è rinnovato da cima a fondo, trasformandosi in LUMEN – Cocktail & Cuisine, spazio dedicato al cibo e al beverage, attivo praticamente in ogni momento del giorno, dalla colazione al drink di fine cena.  €€€",
  "I28": "Ottimo aperitivo a 8€ con patatine focacce e pizzette, buono per due, drink ottimi, locale perfetto perciò per un aperitivo a Trastevere fra amici. Locale con arredamento particolare  e bella musica, location davanti a piazza Trilussa. €",
  "I29": "A pochi metri dal Colosseo, proprio sotto la sua ombra, in un luogo meraviglioso per la panoramica dell’Anfiteatro Flavio, si trova il Coming Out. Punto di aggregazione e ritrovo della comunità LGBTQ di Roma.  Propongono formula aperitivo a 14€.  €",
  "I30": "A pochi passi dal Colosseo e da San Giovanni, il lunch cafè Colosseum Bar, oltre al servizio bar, mette a vostra disposizione un ricco ventaglio di soluzioni sfiziose per una vera pausa di gusto nel cuore di Roma €€€",
  "I31": "Vicino al Colosseo e alle vie più vivaci, un angolo di pace e buon gusto con una terrazza che offre vista e refrigerio nelle calde notti romane. €€€",
  "I32": "Aperitivo affacciati sul Colosseo al tramonto, non ha prezzo. Drink ricercati con prodotti particolari e di qualità. Terrazza dell'hotel Palazzo Manfredi. Prezzi in linea con la location. €€€€",
  "I33": "Tranquilla caffetteria all'aperto tra gli alberi, che serve caffè, spuntini e cocktail. €",
  "I34": "Storico bar nel cuore di Testaccio, nel quale la tradizione si unisce a un ambiente moderno e innova €€",
  "I35": "Il gianfornaio è una sicurezza per ogni momento della giornata:  una colazione veloce prima del lavoro o di una partenza, una mattinata di studio con una tazza di caffe, un pranzo tra colleghi o un aperitivo tra vecchi amici. €€",
  "I36": "400 mq divisi in ristorante, bar/caffetteria, grill, loft garden, cucina a vista e materiali rudi, come il grande bancone in pietra a spacco, con spazio macelleria, che quasi fuoriesce sul marciapiede. Happy hour dalle 18 che con 10€ comprende un drink ed accesso libero al buffet, 8 metri quadri di bancone con piatti freddi e caldi, espressi dalla cucina €",
  "I37": "Casa Manfredi, una delle pasticcerie più apprezzate di Roma in cui fermarsi anche per un aperitivo. Raffinate e gustose preparazioni di Alta Pasticceria realizzate con i prodotti Agrimontana & accompagnate dalle Bollicine di Montagna ROTARI Trendo DOC!Ogni giorno dalle 18 alle 21.. sulle Sponde di Viale Aventino. €€€",
  "I38": "Negli spazi della Galleria D'Arte del Palazzo Pamphilj, al quarto piano, è presente Terrazza Borromini, capace di incorniciare una delle viste più suggestiva della celebre Piazza Navona.Per un aperitivo al tramonto in una location superba. €€€",
  "I39": "Rooftop bar nel cuore a Roma, a tema Spritz. Drink list a base bollicine, musica e tapas, panorama suggestivo. Se siete amanti dello spritz non potete perdervelo. €€",
  "I40": "Forno/bar Trevi dai mille gusti per un aperitivo accompagnato da un tagliere perfetto con vista sulla magnifica Fontana di Trevi. €€",
  "I41": "Il nome è la descrzione di questo magico posto. I loro taglieri sono inegugliabili! Prodotti tipici toscani di una qualità ottima. €€",
  "I42": "Wine bar intimo e accogliente che serve panini, oltre a taglieri di salumi, formaggi e bruschette. €",
  "I43": "Locale situato nell'interessante cornice di Piazza Cola di Rienzo, ampio lo spazio esterno, personale alla mano e servizio rapido... buona lista di cocktails che in caso di scelta della formula aperitivo completo, verrà accompagnato da una piramide di sfiziosità composta da salumi, formaggi e pizza al costo di 15€.  €",
  "I44": "Piccolo chioschetto di strada in stile bohémien con tavoli all'aperto che offre cocktail, vini naturali e birre artigianali, oltre a caffè. €",
  "I45": "Panineria trendy con ingredienti vegetariani e condimenti creativi. €€",
  "I46": "Un localino in pieno centro a Roma, alle spalle della metro Cavour. Piccola location ma molto caratteristica ed accogliente. Il punto forte è il un tagliere Freeda che solo con quello potete dire sto bene. €",
  "I47": "Un café esclusivo, all’interno dell’Apollo Boutique Hotel di Roma, a vostra disposizione dalla colazione all’aperitivo. Dalle18:30 alle 21:00 BUFFET ILLIMITATO + BEVANDA = 15 euro. €",
  "I48": "Il gianfornaio è una sicurezza per ogni momento della giornata:  una colazione veloce prima del lavoro o di una partenza, una mattinata di studio con una tazza di caffe?, un pranzo tra colleghi o un aperitivo tra vecchi amici. €€",
  "I49": "Il Maritozzo, uno dei simboli della cucina romana, ma in versione salata. Sicuramente un aperitivo diverso dell'ordinario. €€",
  "I50": "Enoteca con possibilità di degustare prodotti tipici di provenienti dal Cilento, vini di qualità e prodotti ricercati. Aperitivi, cena, degustazioni, corsi sul vino e cultura. €€",
  "I51": "Il punto di forza principale di questo ristorante poco distante da Cola di Rienzo è senza dubbio la terrazza con vista sui tetti di Roma. €€€",
  "I52": "Ristorante contemporaneo dall’atmosfera parigina e design newyorkese che dal pranzo al dopocena seleziona soltanto il meglio, puntando su eleganza e socialità. €€€",
  "I53": "Sobrio bar/bistrot eclettico che serve stuzzichini e cocktail classici, oltre a una selezione di vini e birre. €€",
  "I54": "Aperitivi a buffet in piccolo locale dalle pareti colorate con mensole di vetro all'interno di cornici dorate. Ampio spazio esterno proprio su piazza cola di rienzo €",
  "I55": "Cocktail bar, vini e non solo, accompagnati da una selezione di prodotti gastronomici italiani ed iberici, in un ambiente che celebra le atmosfere, i colori e la musica di Cuba. €€",
  "I56": "Idea molto sfiziosa, un locale che propone cicchetti a scelta dello chef, piccole tapas in stile Veneto preparate sull'estro del momento. Tre combinazioni tra cui scegliere 5/10/15 cicchetti. €€",
  "I57": "Pub che serve hamburger, pasta, aperitivo e birra, con vista San Pietro, oltre a sport in TV. €€",
  "I58": "Locale  in una zona molto tranquilla di Prati. Formula aperitivo che consiste in una bevanda e un piatto di stuzzichini ad 8 euro. €",
  "I59": "Bar in una delle piazze storiche romane, tappa fissa per le pause pranzo di chi lavora in quella zona. €",
  "I60": "Tonico Café  offre musica soft in un ambiente confortevole in un esclusivo dehor esterno con deliziose tapas per aperitivo. €€",
  "I61": "Aperitivo di qualità a prezzi modici: oltre agli indispensabili stuzzichini un tagliere di salumi e formaggi di prima qualità accompagnati da pizza scrocchiarella e cocktail originali  (fatevi consigliare dal proprietario, che se ne inventa sempre uno nuovo!) €€",
  "I62": "Un angolo verde nel cuore di roma dove cibo e cocktail si fondono con la musica per creare l'atmosfera giusta. €€",
  "I63": "Cappuccino, tè inglese e spuntini leggeri in un caratteristico locale con mobili vintage e opere d'arte. Caratteristici aperitivi sia dolci che salati €€",
  "I64": "Puoi scegliere la combinazione che preferisci fra oltre 100 snack diversi. Ogni box è unica, realizzata con prodotti freschi e materie prime di altissima qualità, in base alla stagionalità e alla reperibilità dei prodotti. €€",
  "I65": "Tutti i tipi di drink accompagnati dalle storiche tartine, dai nuovissimi crostini e da tantissime specialità gastromoniche di prima scelta. €€",
  "I66": "Locale in cui puoi trovare prodotti italiani e di altre provenienze come il pregiatissimo prosciutto Iberico Pata Negra ed il prosciutto Serrano di qualità eccellente. €€",
  };

