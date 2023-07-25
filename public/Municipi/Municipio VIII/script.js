var baseview = [41.86067147112533, 12.49872529820326];
var map = L.map('map').setView(baseview, 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
  var markers = L.markerClusterGroup({
    disableClusteringAtZoom: 1, // disabilita clustering
    showCoverageOnHover: false, // nasconde i cluster
  });
  var markerlist= [];
  const markerToPlace = {}; //Tupla per salvare id con nome corrispondente con i nomi originali
  const markerToPlacelowcase = {};
  var Municipio="VIII";
  var data=[
    {
      "id": "VIII1",
      "location":[41.881540603530524, 12.503180929138601],  
      "popupContent":"S28 Cucina e Miscele"
    },
    {
      "id": "VIII2",
      "location":[41.88036376814176, 12.501633496650001],  
      "popupContent":"Vicino Enoteca"
    },
    {
      "id": "VIII3",
      "location":[41.880899771046586, 12.504875254322126],  
      "popupContent": "Bar Clementi"
    },
    {
      "id": "VIII4",
      "location":[41.88190276487099, 12.507983610141943],  
      "popupContent":"Enoteca 86"
    },
    {
      "id": "VIII5",
      "location":[41.87830382583147, 12.50392746781387],  
      "popupContent":"Bar Milleluci"
    },
    {
      "id": "VIII6",
      "location": [41.88075250742746, 12.507979954322094],
      "popupContent": "Barbuto"
    },
    {
      "id": "VIII7",
      "location": [41.87541221080693, 12.507636685010153],
      "popupContent": "Sideways Vineria Bistrot"
    },
    {
      "id": "VIII8",
      "location": [41.88360465026452, 12.499470110142063],
      "popupContent": "So & So Bar"
    },
    {
      "id": "VIII9",
      "location": [41.88322302520273, 12.50794775246998],
      "popupContent": "Rockside"
    },
    {
      "id": "VIII10",
      "location": [41.88261659009318, 12.507724810142001],
      "popupContent": "I Vitelloni"
    },
    {
      "id": "VIII11",
      "location": [41.88125246625304, 12.502593408289647],
      "popupContent": "The Place by Sacco Bistrot"
    },
    {
      "id": "VIII12",
      "location": [41.86320702417377, 12.478184969665369],
      "popupContent": "TBar"
    },
    {
      "id": "VIII13",
      "location": [41.860540691355986, 12.478552608288533],
      "popupContent": "Magnoebevo e sto a Ostiense"
    },
    {
      "id": "VIII14",
      "location": [41.86051671976433, 12.478574065960615],
      "popupContent": "Angeli Rock"
    },
    {
      "id": "VIII15",
      "location": [41.863623874198645, 12.483927269665445],
      "popupContent": "Why Not"
    },
    {
      "id": "VIII16",
      "location": [41.86315886558318, 12.48479468130492],
      "popupContent": "La Mescita"
    },
    {
      "id": "VIII17",
      "location": [41.863004185506725, 12.479401881304922],
      "popupContent": "Bar Bozza"
    },
    {
      "id": "VIII18",
      "location": [41.863201185038974, 12.480558540829316],
      "popupContent": "Vinile"
    },
    {
      "id": "VIII19",
      "location": [41.864821431138864, 12.491361494796928],
      "popupContent": "Latteria Garbatella"
    },
    {
      "id": "VIII20",
      "location": [41.86113929946199, 12.486563740829267],
      "popupContent": "Chulos Bar Aperitif & Drink"
    },
    {
      "id": "VIII21",
      "location": [41.855127830538486, 12.478589638976626],
      "popupContent": "Fulmini e Saette"
    },
    {
      "id": "VIII22",
      "location": [41.8557248381987, 12.476416767812655],
      "popupContent": "El Chiringuito Libre"
    },
    {
      "id": "VIII23",
      "location": [41.85210333658506, 12.476791796648564],
      "popupContent": "Modo Ristorante Caffè"
    },
    {
      "id": "VIII24",
      "location": [41.86688029679333, 12.489906411993466],  
      "popupContent": "Biffi"
    },
    {
      "id": "VIII25",
      "location": [41.861347703505004, 12.491375667812987],  
      "popupContent": "Tre de Tutto"
    },
    {
      "id": "VIII26",
      "location": [41.85164926252919, 12.47756099664844],  
      "popupContent": "Triplo Cockatail Bar"
    },
    {
      "id": "VIII27",
      "location": [41.8629093314297, 12.489942864061051],  
      "popupContent": "Bar dei Cesaroni"
    },
    {
      "id": "VIII28",
      "location": [41.86066707212234, 12.47860298130485],  
      "popupContent": "Sorso Drink & Food"
    },
    {
      "id": "VIII29",
      "location": [41.87128183808895, 12.479649862211703],  
      "popupContent": "Spritzino Roma"
    },
    {
      "id": "VIII30",
      "location": [41.871705263223205, 12.479764372128216],  
      "popupContent": "Andreotti - Ostiense"
    },
    {
      "id": "VIII31",
      "location": [41.87108563406152, 12.480209445942755],  
      "popupContent": "Caffè Letterario"
    },
    {
      "id": "VIII32",
      "location": [41.87269616249173, 12.47822623897756],  
      "popupContent": "Porto Fluviale"
    },
    {
      "id": "VIII33",
      "location": [41.87205475646397, 12.479326799359171],  
      "popupContent": "Makai Surf & Tiki Bar"
    },
    {
      "id": "VIII34",
      "location": [41.87058569963011, 12.482077623633268],  
      "popupContent": "Hoopside"
    },
    {
      "id": "VIII35",
      "location": [41.87115693440394, 12.4793535848855],  
      "popupContent": "Polpetta Gazometro"
    },
    {
      "id": "VIII36",
      "location": [41.87076629102469, 12.481003558503708],  
      "popupContent": "Queen Makeda"
    },
    {
      "id": "VIII37",
      "location": [41.872323252453334, 12.480277937125212],  
      "popupContent": "Tigelleria Romana - Bistrot & Cafè"
    },
    {
      "id": "VIII38",
      "location": [41.87227920716573, 12.478980210141435],  
      "popupContent": "Enoteca Wine Art"
    },
    {
      "id": "VIII39",
      "location": [41.871015255552436, 12.476815854630734],  
      "popupContent": "L'antagonista Spritz & Cicchetti"
    },
    {
      "id": "VIII40",
      "location": [41.870866399029545, 12.479606946867534],  
      "popupContent": "Doppiozeroo"
    },
    {
      "id": "VIII41",
      "location": [41.86309589506077, 12.489851981304959],  
      "popupContent": "Otium"
    },
    {
      "id": "VIII42",
      "location": [41.87050398909383, 12.484597571517991],  
      "popupContent": "Figli delle Stelle Garbatella"
    },
    {
      "id": "VIII43",
      "location": [41.850037948857, 12.5232356947961],  
      "popupContent": "Appia Antica Caffè"
    },
    {
      "id": "VIII44",
      "location": [41.84441386934095, 12.548742903041347],  
      "popupContent": "Il Veliero Roma"
    },
    {
      "id": "VIII45",
      "location": [41.838087234234536, 12.547307278399801],  
      "popupContent": "Prosecco e Polpette Bistrò"
    },
    {
      "id": "VIII46",
      "location": [41.83987771604223, 12.546309496647883],  
      "popupContent": "Calici e taglieri"
    },
    {
      "id": "VIII47",
      "location": [41.85550892329107, 12.531390246004069],  
      "popupContent": "Parco Appio"
    },
    {
      "id": "VIII48",
      "location": [41.85949498451804, 12.507798096648928],  
      "popupContent": "Luce Experience"
    },
    {
      "id": "VIII49",
      "location": [41.85821646618246, 12.508592030516038],  
      "popupContent": "Tuarua"
    },
    {
      "id": "VIII50",
      "location": [41.85169045396874, 12.49366136781247],  
      "popupContent": "Homemade"
    },
    {
      "id": "VIII51",
      "location": [41.83338001200558, 12.49449218117658],  
      "popupContent": "Caffè Baldovinetti"
    },
    {
      "id": "VIII52",
      "location": [41.83803564477819, 12.486968281303598],  
      "popupContent": "Nuvola Enobistrot"
    },
    {
      "id": "VIII53",
      "location": [41.835155970458956, 12.480655827335967],  
      "popupContent": "Mito"
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