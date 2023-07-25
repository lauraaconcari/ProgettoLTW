var baseview = [41.82064209793125, 12.48648492803413];
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
  var Municipio="IX";
  var data=[
    {
      "id": "IX1",
      "location":[41.83122270452794, 12.46431473336161],  
      "popupContent":"Tiki bar"
    },
    {
      "id": "IX2",
      "location":[41.83315777445222, 12.462398781303353],  
      "popupContent":"Orange Caffè"
    },
    {
      "id": "IX3",
      "location":[41.83460504670824, 12.466506296647553],  
      "popupContent":"Namastè"
    },
    {
      "id": "IX4",
      "location":[41.83395489740219, 12.468578065959221],  
      "popupContent":"Liszt"
    },
    {
      "id": "IX5",
      "location":[41.82935187094184, 12.473797940827513],  
      "popupContent":"L'Angolo"
    },
    {
      "id": "IX6",
      "location":[41.83420712306534, 12.466810752467365],  
      "popupContent":"Frog Lounge Bar"
    },
    {
      "id": "IX7",
      "location":[41.83249966981584, 12.46257339664751],  
      "popupContent":"Il Gianfornaio - Eur"
    },
    {
      "id": "IX8",
      "location":[41.8316998364256, 12.462937052467291],  
      "popupContent":"Spaten Lounge Restaurant Since 1962"
    },
    {
      "id": "IX9",
      "location":[41.83336638009625, 12.476383723631344],  
      "popupContent":"Garden Ristò EUR"
    },
    {
      "id": "IX10",
      "location":[41.830593269569306, 12.474224508195949],  
      "popupContent":"b place roma"
    },
    {
      "id": "IX11",
      "location":[41.83425427226105, 12.47276045246738],  
      "popupContent":"Voice Restaurant"
    },
    {
      "id": "IX12",
      "location":[41.826570851157925, 12.475033083155344],  
      "popupContent":"Gù Gran Caffè Eur"
    },
    {
      "id": "IX13",
      "location":[41.831083984372086, 12.462995367811395],  
      "popupContent":"BOHOCHICROME"
    },
    {
      "id": "IX14",
      "location":[41.833399986098996, 12.462305867811475],  
      "popupContent":"Move Natural Food"
    },
    {
      "id": "IX15",
      "location":[41.834263472242604, 12.474176081303423],  
      "popupContent":"Le Terrazze"
    },
    {
      "id": "IX16",
      "location":[41.83471213399415, 12.471033869663795],  
      "popupContent":"Casa Novecento"
    },
    {
      "id": "IX17",
      "location":[41.83424842910451, 12.472615281303453],  
      "popupContent":"Pier Eur"
    },
    {
      "id": "IX18",
      "location":[41.833211213103894, 12.476542037446617],  
      "popupContent":"HÉCO Eur"
    },
    {
      "id": "IX19",
      "location":[41.83534144486874, 12.469967552467498],  
      "popupContent":"Nero.Lab"
    },
    {
      "id": "IX20",
      "location":[41.82966355345838, 12.472907196647363],  
      "popupContent":"Vineria Anzuini"
    },
    {
      "id": "IX21",
      "location":[41.82650466694159, 12.47701651199136],  
      "popupContent":"OTTIMO Caffè & Cucina"
    },
    {
      "id": "IX22",
      "location":[41.82982099235705, 12.47403895246715],  
      "popupContent":"BLounge Restaurant & Cocktail bar"
    },
    {
      "id": "IX23",
      "location": [41.822985423379606, 12.508562050614541],
      "popupContent": "Andreotti - Fonte Meravigliosa"
    },
    {
      "id": "IX24",
      "location": [41.82590973070389, 12.508336534039596],
      "popupContent": "Bistrò 65"
    },
    {
      "id": "IX25",
      "location": [41.80749160312594, 12.485802696646234],
      "popupContent": "Signorvino"
    },
    {
      "id": "IX26",
      "location": [41.80893872585018, 12.485460367810282],
      "popupContent": "Puglià_Maximo"
    },
    {
      "id": "IX27",
      "location": [41.80845122381317, 12.486129723629928],
      "popupContent": "Latte e Fondente"
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