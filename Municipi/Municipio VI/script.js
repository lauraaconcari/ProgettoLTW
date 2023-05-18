var baseview=[41.884078782648494, 12.651394115392575];
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
  var Municipio="VI";
  var data = [
    {
      "id": "VI1",
      "location": [41.87061541932693, 12.584273321699813],
      "popupContent":"La Vineria Del Mercato"
      
    },
    {
      "id": "VI2",
      "location": [41.8655020819704, 12.578780158900479],
      "popupContent":"L' Arte Del Caffè"
      
    },
    {
      "id": "VI3",
      "location": [41.87061541929719, 12.591568931383359],
      "popupContent":"L'incontro"
      
    },
    {
      "id": "VI4",
      "location": [41.85987693836315, 12.592513069056734],
      "popupContent":"El Chiringuì - Cocktail Garden"
      
    },
    {
      "id": "VI5",
      "location": [41.856360972434445, 12.592684730418279],
      "popupContent":"Coffee Break 1.0"
      
    },
    {
      "id": "VI6",
      "location": [41.85380378489107, 12.593800529268346],
      "popupContent":"Il Sogno Cocktail Bar"
      
    },
    {
      "id": "VI7",
      "location": [41.85111862793288, 12.582985863490777],
      "popupContent":"Rosy bar due"
      
    },
    {
      "id": "VI8",
      "location": [41.872277165637044, 12.597147925818549],
      "popupContent":"GRAN CAFFE'MASSIMO"
      
    },
    {
      "id": "VI9",
      "location": [41.86678045444117, 12.599808676922553],
      "popupContent":"Enoteca Wine Bar"
      
    },
    {
      "id": "VI10",
      "location": [41.85753564618944, 12.611505385331657],
      "popupContent":"Tabata Bar"
      
    },
    {
      "id": "VI11",
      "location": [41.84941637183969, 12.601205703638731],
      "popupContent":"Mister TAMO"
      
    },
    {
      "id": "VI12",
      "location": [41.853635965804294, 12.617256042368446],
      "popupContent":"Francesco bar"
      
    },
    {
      "id": "VI13",
      "location": [41.86089106133917, 12.624896270570689],
      "popupContent":"Shock Cafè Bistrot Roma"
      
    },
    {
      "id": "VI14",
      "location": [41.8417295647482, 12.623749783963145],
      "popupContent":"Vitti Srl"
      
    },
    {
      "id": "VI15",
      "location": [41.837138493391784, 12.625541170643777],
      "popupContent":"Bim Bum Bar"
      
    },
    {
      "id": "VI16",
      "location": [41.837298652573764, 12.638152532862579],
      "popupContent":"Buddha Smile Roma"
      
    },
    {
      "id": "VI17",
      "location": [41.84477230261899, 12.633494927492931],
      "popupContent":"Bar Carpe Diem"
      
    },
    {
      "id": "VI18",
      "location": [41.86702793111664, 12.646378736399235],
      "popupContent":"Mister Caffè"
      
    },
    {
      "id": "VI19",
      "location": [41.905661980777786, 12.657788107646008],
      "popupContent":"Il Veliero"
      
    },
    {
      "id": "VI20",
      "location": [41.90241782443965, 12.650872025165874],
      "popupContent":"Bar The Legend Roma"
      
    },
    {
      "id": "VI21",
      "location": [41.89392511903713, 12.62235107876831],
      "popupContent":"Bar Caffe Macao"
      
    },
    {
      "id": "VI22",
      "location": [41.8941734065611, 12.631440289040112],
      "popupContent":"Sagittarius Snack Bar Aperitivi"
      
    },
    {
      "id": "VI23",
      "location": [41.91381903443976, 12.683311290502457],
      "popupContent":"I Portici"
      
    },
    {
      "id": "VI24",
      "location": [41.91739153873999, 12.6865357865276],
      "popupContent":"Caffè Classico"
      
    },
    {
      "id": "VI25",
      "location": [41.90983335679626, 12.69902575266624],
      "popupContent":"The Village"
      
    },
    {
      "id": "VI26",
      "location": [41.88638229633544, 12.620796559365672],
      "popupContent":"Bar Al 23..."
      
    },
    {
      "id": "VI27",
      "location": [41.878234731773404, 12.620496151982964],
      "popupContent":"Cocktail Bar"
      
    },
    {
      "id": "VI28",
      "location": [41.874080671449306, 12.621526120444939],
      "popupContent":"Bar Latteria Scagnetti Alessandra"
      
    },
    {
      "id": "VI29",
      "location": [41.8718678900865, 12.660792850598012],
      "popupContent":"Sasa Bar"
      
    },
    {
      "id": "VI30",
      "location": [41.86752166474846, 12.66113617184229],
      "popupContent":"Dairè bar"
      
    },
    {
      "id": "VI31",
      "location": [41.86704195558505, 12.675650310696565],
      "popupContent":"Enigma Bar"
      
    },
    {
      "id": "VI32",
      "location": [41.8657448408248, 12.676946524711582],
      "popupContent":"Moebius Pub"
      
    },
    {
      "id": "VI33",
      "location": [41.86447786607349, 12.670830014472003],
      "popupContent":"Gasa caffé Roma"
      
    },
    {
      "id": "VI34",
      "location": [41.86106897612927, 12.672531294974142],
      "popupContent":"Bar In piazza"
      
    },
    {
      "id": "VI35",
      "location": [41.86290919590221, 12.686789650262531],
      "popupContent":"ASB Central bar"
      
    },
    {
      "id": "VI36",
      "location": [41.860435445568996, 12.688126370965518],
      "popupContent":"Due Punto Zero - Aperitif Restaurant"
      
    },
    {
      "id": "VI37",
      "location": [41.85928040176395, 12.689136621779939],
      "popupContent":"Al Solito Posto"
      
    },
    {
      "id": "VI38",
      "location": [41.85707858370501, 12.671874143330937],
      "popupContent":"L'angolo del sorriso"
      
    },
    {
      "id": "VI39",
      "location": [41.85405770957562, 12.673833005323429],
      "popupContent":"Il Cappuccino ristobar"
      
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

