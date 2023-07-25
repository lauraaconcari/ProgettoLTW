var baseview=[41.918494641772945, 12.538934589491781];
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
  var markerlist= [];
  var markers = L.markerClusterGroup({
    disableClusteringAtZoom: 1, // disabilita clustering
    showCoverageOnHover: false, // nasconde i cluster
  });
  const markerToPlace = {}; //Tupla per salvare id con nome corrispondente con i nomi originali
  const markerToPlacelowcase = {};
  var Municipio="IV";
  var data = [
    {
        "id": "IV1",
        "location": [41.90019728275368, 12.513791911995213],
        "popupContent": "The Apartment Bar"
      },
      {
        "id": "IV2",
        "location": [41.897759258635894, 12.51239576407329],
        "popupContent": "Chiosco San Lorenzo"
      },
      {
        "id": "IV3",
        "location": [41.89741627214963, 12.510787091056958],
        "popupContent": "Pankaffè"
      },
      {
        "id": "IV4",
        "location": [41.90002671660959, 12.513243291807273],
        "popupContent": "RoofTop Garden"
      },
      {
        "id": "IV5",
        "location": [41.89675386341266, 12.513057496650887],
        "popupContent": "Officine Beat"
      },
      {
        "id": "IV6",
        "location": [41.89664609163565, 12.514123054323028],
        "popupContent": "Gli Spritzzati Vino e Cicchetti"
      },
      {
        "id": "IV7",
        "location": [41.898454730358516, 12.519913969667133],
        "popupContent": "Zero Zero 100"
      },
      {
        "id": "IV8",
        "location": [41.89990196912145, 12.514377411995182],
        "popupContent": "Madi Drink & Food"
      },
      {
        "id": "IV9",
        "location": [41.90059896729097, 12.518835596651066],
        "popupContent": "Marmo"
      },
      {
        "id": "IV10",
        "location": [41.898352886634875, 12.516916165962604],
        "popupContent": "Bar Celestino"
      },
      {
        "id": "IV11",
        "location": [41.899722098765196, 12.512239969667286],
        "popupContent": "CIACCO - Emporio"
      },
      {
        "id": "IV12",
        "location": [41.909895305362774, 12.537906796651527],
        "popupContent": "Monaco"
      },
      {
        "id": "IV13",
        "location": [41.91077183496866, 12.537701127339956],
        "popupContent": "Enoteca Baccano"
      },
      {
        "id": "IV14",
        "location": [41.91031074446423, 12.538462814268673],
        "popupContent": "Ciara"
      },
      {
        "id": "IV15",
        "location": [41.90959668716354, 12.536607101384728],
        "popupContent": "Senior Jag Cafè"
      },
      {
        "id": "IV16",
        "location": [41.92615833593541, 12.535259444267753],
        "popupContent": "Inofficina"
      },
      {
        "id": "IV17",
        "location": [41.908542385527035, 12.54286048315963],
        "popupContent": "Favole di Pane"
      },
      {
        "id": "IV18",
        "location": [41.911506381668644, 12.537819144536417],
        "popupContent": "Monte Street Bistrot"
      },
      {
        "id": "IV19",
        "location": [41.91479804111437, 12.54701286781582],
        "popupContent": "Enoteca Al Punto Divino"
      },
      {
        "id": "IV20",
        "location": [41.92659094917966, 12.559705694771807],
        "popupContent": "Cottage Aniene food&drink"
      },
      {
        "id": "IV21",
        "location": [41.92664130518795, 12.543727298504718],
        "popupContent": "Tavolo13 Bistropub"
      },
      {
        "id": "IV22",
        "location": [41.928845059843695, 12.565479611849051],
        "popupContent": "Frugale Roma Food Garden"
      },
      {
        "id": "IV23",
        "location": [41.90948741120562, 12.538272939144242],
        "popupContent": "CRUMB - bar, tavola calda, bistrò"
      },
      {
        "id": "IV24",
        "location": [41.908069024642444, 12.534980496651452],
        "popupContent": "Inside out"
      },
      {
        "id": "IV25",
        "location": [41.912146036961836, 12.537714411995875],
        "popupContent": "Knock Street Bar"
      },
      {
        "id": "IV26",
        "location": [41.90506793582272, 12.549097183159473],
        "popupContent": "Galante"
      },
      {
        "id": "IV27",
        "location": [41.908844376614134, 12.566687327339855],
        "popupContent": "Autoctono bistrot"
      },
      {
        "id": "IV28",
        "location": [41.91064086665514, 12.571138765963225],
        "popupContent": "Al Tipico"
      },
      {
        "id": "IV29",
        "location": [41.91260196768358, 12.570687096651659],
        "popupContent": "Breakfast Club Roma"
      },
      {
        "id": "IV30",
        "location": [41.91574840927275, 12.575072954323998],
        "popupContent": "Green Bar Bistrot"
      },
      {
        "id": "IV31",
        "location": [41.90779150983633, 12.551416483159594],
        "popupContent": "Gran Casal"
      },
      {
        "id": "IV32",
        "location": [41.90942247524008, 12.550315811995654],
        "popupContent": "Sottocasa food"
      },
      {
        "id": "IV33",
        "location": [41.90879949220638, 12.545641394799247],
        "popupContent": "Fornocafè"
      },
      {
        "id": "IV34",
        "location": [41.89874244330597, 12.563912854323071],
        "popupContent": "Cumbo Bistrot"
      },
      {
        "id": "IV35",
        "location": [41.89859178676932, 12.563189196650955],
        "popupContent": "Cherubini 1966"
      },
      {
        "id": "IV36",
        "location": [41.89612963197364, 12.561521698503098],
        "popupContent": "Ecce Vinum - Enoteca e Salsamenteria"
      },
      {
        "id": "IV37",
        "location": [41.943151437958264, 12.55885984639036],
        "popupContent": "Voia food, wine & Cocktail bar"
      },
      {
        "id": "IV38",
        "location": [41.944227552661914, 12.569250207767169],
        "popupContent": "Caffè del Parco"
      },
      {
        "id": "IV39",
        "location": [41.9365119938834, 12.552463562234628],
        "popupContent": "Spiritoso - Il bistrot del quartiere"
      },
      {
        "id": "IV40",
        "location": [41.93498037068229, 12.551880692948208],
        "popupContent": "Tavernacolo Roma Kant"
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