var map = L.map('map').setView([41.884078782648494, 12.651394115392575], 9,99999);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;
  var markers = L.markerClusterGroup();
  var data = [
    {
      "id": "VI1",
      "marker": L.marker([41.87061541932693, 12.584273321699813]).bindPopup("La Vineria Del Mercato")
    },
    {
      "id": "VI2",
      "marker": L.marker([41.8655020819704, 12.578780158900479]).bindPopup("L' Arte Del Caffè")
    },
    {
      "id": "VI3",
      "marker": L.marker([41.87061541929719, 12.591568931383359]).bindPopup("L'incontro")
    },
    {
      "id": "VI4",
      "marker": L.marker([41.85987693836315, 12.592513069056734]).bindPopup("El Chiringuì - Cocktail Garden")
    },
    {
      "id": "VI5",
      "marker": L.marker([41.856360972434445, 12.592684730418279]).bindPopup("Coffee Break 1.0")
    },
    {
      "id": "VI6",
      "marker": L.marker([41.85380378489107, 12.593800529268346]).bindPopup("Il Sogno Cocktail Bar")
    },
    {
      "id": "VI7",
      "marker": L.marker([41.85111862793288, 12.582985863490777]).bindPopup("Rosy bar due")
    },
    {
      "id": "VI8",
      "marker": L.marker([41.872277165637044, 12.597147925818549]).bindPopup("GRAN CAFFE'MASSIMO")
    },
    {
      "id": "VI9",
      "marker": L.marker([41.86678045444117, 12.599808676922553]).bindPopup("Enoteca Wine Bar")
    },
    {
      "id": "VI10",
      "marker": L.marker([41.85753564618944, 12.611505385331657]).bindPopup("Tabata Bar (Bar Blu)")
    },
    {
      "id": "VI11",
      "marker": L.marker([41.84941637183969, 12.601205703638731]).bindPopup("Mister TAMO")
    },
    {
      "id": "VI12",
      "marker": L.marker([41.853635965804294, 12.617256042368446]).bindPopup("Francesco bar")
    },
    {
      "id": "VI13",
      "marker": L.marker([41.86089106133917, 12.624896270570689]).bindPopup("Shock Cafè Bistrot Roma")
    },
    {
      "id": "VI14",
      "marker": L.marker([41.8417295647482, 12.623749783963145]).bindPopup("Vitti Srl")
    },
    {
      "id": "VI15",
      "marker": L.marker([41.837138493391784, 12.625541170643777]).bindPopup("Bim Bum Bar")
    },
    {
      "id": "VI16",
      "marker": L.marker([41.837298652573764, 12.638152532862579]).bindPopup("Buddha Smile Roma")
    },
    {
      "id": "VI17",
      "marker": L.marker([41.84477230261899, 12.633494927492931]).bindPopup("Bar Carpe Diem")
    },
    {
      "id": "VI18",
      "marker": L.marker([41.86702793111664, 12.646378736399235]).bindPopup("Mister Caffè")
    },
    {
      "id": "VI19",
      "marker": L.marker([41.905661980777786, 12.657788107646008]).bindPopup("Il Veliero")
    },
    {
      "id": "VI20",
      "marker": L.marker([41.90241782443965, 12.650872025165874]).bindPopup("Bar The Legend Roma")
    },
    {
      "id": "VI21",
      "marker": L.marker([41.89392511903713, 12.62235107876831]).bindPopup("Bar Caffe Macao")
    },
    {
      "id": "VI22",
      "marker": L.marker([41.8941734065611, 12.631440289040112]).bindPopup("Sagittarius Snack Bar Aperitivi")
    },
    {
      "id": "VI23",
      "marker": L.marker([41.91381903443976, 12.683311290502457]).bindPopup("I Portici")
    },
    {
      "id": "VI24",
      "marker": L.marker([41.91739153873999, 12.6865357865276]).bindPopup("Caffè Classico")
    },
    {
      "id": "VI25",
      "marker": L.marker([41.90983335679626, 12.69902575266624]).bindPopup("The Village")
    },
    {
      "id": "VI26",
      "marker": L.marker([41.88638229633544, 12.620796559365672]).bindPopup("Bar Al 23...")
    },
    {
      "id": "VI27",
      "marker": L.marker([41.878234731773404, 12.620496151982964]).bindPopup("Cocktail Bar")
    },
    {
      "id": "VI28",
      "marker": L.marker([41.874080671449306, 12.621526120444939]).bindPopup("Bar Latteria Scagnetti Alessandra")
    },
    {
      "id": "VI29",
      "marker": L.marker([41.8718678900865, 12.660792850598012]).bindPopup("Sasa Bar")
    },
    {
      "id": "VI30",
      "marker": L.marker([41.86752166474846, 12.66113617184229]).bindPopup("Dairè bar")
    },
    {
      "id": "VI31",
      "marker": L.marker([41.86704195558505, 12.675650310696565]).bindPopup("Enigma Bar")
    },
    {
      "id": "VI32",
      "marker": L.marker([41.8657448408248, 12.676946524711582]).bindPopup("Moebius Pub")
    },
    {
      "id": "VI33",
      "marker": L.marker([41.86447786607349, 12.670830014472003]).bindPopup("Gasa caffé Roma")
    },
    {
      "id": "VI34",
      "marker": L.marker([41.86106897612927, 12.672531294974142]).bindPopup("Bar In piazza")
    },
    {
      "id": "VI35",
      "marker": L.marker([41.86290919590221, 12.686789650262531]).bindPopup("ASB Central bar")
    },
    {
      "id": "VI36",
      "marker": L.marker([41.860435445568996, 12.688126370965518]).bindPopup("Due Punto Zero - Aperitif Restaurant")
    },
    {
      "id": "VI37",
      "marker": L.marker([41.85928040176395, 12.689136621779939]).bindPopup("Al Solito Posto")
    },
    {
      "id": "VI38",
      "marker": L.marker([41.85707858370501, 12.671874143330937]).bindPopup("L'angolo del sorriso")
    },
    {
      "id": "VI39",
      "marker": L.marker([41.85405770957562, 12.673833005323429]).bindPopup("Il Cappuccino ristobar")
    }
  ];
  for (let i = 0; i < data.length; i++) {
    let info = data[i];
    let marker = L.marker(info.marker.getLatLng(), { id: info.id });
    marker.bindPopup(info.marker.getPopup());
    markers.addLayer(marker);
  }
  map.addLayer(markers);

