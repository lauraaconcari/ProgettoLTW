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
var VI1 = L.marker([41.87061541932693, 12.584273321699813]).bindPopup("La Vineria Del Mercato");
var VI2 = L.marker([41.8655020819704, 12.578780158900479]).bindPopup("L' Arte Del Caffè");
var VI3 = L.marker([41.87061541929719, 12.591568931383359]).bindPopup("L'incontro");
var VI4 = L.marker([41.85987693836315, 12.592513069056734]).bindPopup("El Chiringuì - Cocktail Garden");
var VI5 = L.marker([41.856360972434445, 12.592684730418279]).bindPopup("Coffee Break 1.0");
var VI6 = L.marker([41.85380378489107, 12.593800529268346]).bindPopup("Il Sogno Cocktail Bar");
var VI7 = L.marker([41.85111862793288, 12.582985863490777]).bindPopup("Rosy bar due");
var VI8 = L.marker([41.872277165637044, 12.597147925818549]).bindPopup("GRAN CAFFE'MASSIMO");
var VI9 = L.marker([41.86678045444117, 12.599808676922553]).bindPopup("Enoteca Wine Bar");
var VI10 = L.marker([41.85753564618944, 12.611505385331657]).bindPopup("Tabata Bar (Bar Blu)");
var VI11 = L.marker([41.84941637183969, 12.601205703638731]).bindPopup("Mister TAMO");
var VI12 = L.marker([41.853635965804294, 12.617256042368446]).bindPopup("Francesco bar");
var VI13 = L.marker([41.86089106133917, 12.624896270570689]).bindPopup("Shock Cafè Bistrot Roma");
var VI14 = L.marker([41.8417295647482, 12.623749783963145]).bindPopup("Vitti Srl");
var VI15 = L.marker([41.837138493391784, 12.625541170643777]).bindPopup("Bim Bum Bar");
var VI16 = L.marker([41.837298652573764, 12.638152532862579]).bindPopup("Buddha Smile Roma");
var VI17 = L.marker([41.84477230261899, 12.633494927492931]).bindPopup("Bar Carpe Diem");
var VI18 = L.marker([41.86702793111664, 12.646378736399235]).bindPopup("Mister Caffè");
var VI19 = L.marker([41.905661980777786, 12.657788107646008]).bindPopup("Il Veliero");
var VI20 = L.marker([41.90241782443965, 12.650872025165874]).bindPopup("Bar The Legend Roma");
var VI21 = L.marker([41.89392511903713, 12.62235107876831]).bindPopup("Bar Caffe Macao");
var VI22 = L.marker([41.8941734065611, 12.631440289040112]).bindPopup("Sagittarius Snack Bar Aperitivi");
var VI23 = L.marker([41.91381903443976, 12.683311290502457]).bindPopup("I Portici");
var VI24 = L.marker([41.91739153873999, 12.6865357865276]).bindPopup("Caffè Classico");
var VI25 = L.marker([41.90983335679626, 12.69902575266624]).bindPopup("The Village");
var VI26 = L.marker([41.88638229633544, 12.620796559365672]).bindPopup("Bar Al 23...");
var VI27 = L.marker([41.878234731773404, 12.620496151982964]).bindPopup("Cocktail Bar");
var VI28 = L.marker([41.874080671449306, 12.621526120444939]).bindPopup("Bar Latteria Scagnetti Alessandra");
var VI29 = L.marker([41.8718678900865, 12.660792850598012]).bindPopup("Sasa Bar");
var VI30 = L.marker([41.86752166474846, 12.66113617184229]).bindPopup("Dairè bar");
var VI31 = L.marker([41.86704195558505, 12.675650310696565]).bindPopup("Enigma Bar");
var VI32 = L.marker([41.8657448408248, 12.676946524711582]).bindPopup("Moebius Pub");
var VI33 = L.marker([41.86447786607349, 12.670830014472003]).bindPopup("Gasa caffé Roma");
var VI34 = L.marker([41.86106897612927, 12.672531294974142]).bindPopup("Bar In piazza");
var VI35 = L.marker([41.86290919590221, 12.686789650262531]).bindPopup("ASB Central bar");
var VI36 = L.marker([41.860435445568996, 12.688126370965518]).bindPopup("Due Punto Zero - Aperitif Restaurant");
var VI37 = L.marker([41.85928040176395, 12.689136621779939]).bindPopup("Al Solito Posto");
var VI38 = L.marker([41.85707858370501, 12.671874143330937]).bindPopup("L'angolo del sorriso");
var VI39 = L.marker([41.85405770957562, 12.673833005323429]).bindPopup("Il Cappuccino ristobar");
var VI40 = L.marker([41.955713657317304, 12.716464065869767]).bindPopup("Bar Dream Coffee");
var VI41 = L.marker([41.954938503638616, 12.715713580617967]).bindPopup("Bar Alfieri");
var VI42 = L.marker([41.95310910357778, 12.72084189650527]).bindPopup("Terme-Caffè");
var VI43 = L.marker([41.953853272649845, 12.721592381757068]).bindPopup("Baraonda");
var VI44 = L.marker([41.95345018214766, 12.72275980325987]).bindPopup("Craft");
var VI45 = L.marker([41.953543203259045, 12.72588682514237]).bindPopup("Vivian Bar");
var VI46 = L.marker([41.95317111799899, 12.72680408489457]).bindPopup("Start Up Caffè");
var VI47 = L.marker([41.95003931426925, 12.734642487326292]).bindPopup("Pin Up Cafe");
var VI48 = L.marker([41.95345018210197, 12.73247441882109]).bindPopup("Midnight Caffè");
var VI49 = L.marker([41.95289552072652, 12.770961774101922]).bindPopup("Belli");
var VI50 = L.marker([41.919945636447466, 12.788671020245072]).bindPopup("APERIDISCO");

var markers = L.markerClusterGroup();
markers.addLayers([VI1,VI2,VI3,VI4,VI5,VI6,VI7,VI8,VI9,VI10,VI11,VI12,VI13,VI14,VI15,VI16,VI17,VI18,VI19,VI20,
VI21,VI22,VI23,VI24,VI25,VI26,VI27,VI28,VI29,VI30,VI31,VI32,VI33,VI34,VI35,VI36,VI37,VI38,VI39,VI40,VI41,VI42,
VI43,VI44,VI45,VI46,VI47,VI48,VI49,VI50]);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});