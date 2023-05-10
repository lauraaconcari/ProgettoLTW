var map = L.map('map').setView([41.94701215030419, 12.45925154726697], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var customIcon = L.icon({
    iconUrl:'../../placeholder.png' ,
    iconSize: [17, 17] 
  });
  L.Marker.prototype.options.icon = customIcon;

  
//Tor di Quinto
var TorDiQuinto1 = L.marker([41.939187230660266, 12.477494506415846]).bindPopup("Blume Lounge");
var TorDiQuinto2 = L.marker([41.9368718010783, 12.465313710144844]).bindPopup("Il Gianfornaio - Ponte Milvio");
var TorDiQuinto3 = L.marker([41.93792418835669, 12.470078411997205]).bindPopup("Lost");
var TorDiQuinto4 = L.marker([41.93833076406236, 12.468776683161245]).bindPopup("Kytos");
var TorDiQuinto5 = L.marker([41.938613209783306, 12.466262083161169]).bindPopup("Kohiba");
var TorDiQuinto6 = L.marker([41.937048928586165, 12.466766983161058]).bindPopup("L'Altro Chiosco");
var TorDiQuinto7 = L.marker([41.937895607553, 12.466274710144866]).bindPopup("Jarro il quattordicesimo");
var TorDiQuinto8 = L.marker([41.9378340268177, 12.465903673373951]).bindPopup("Bar Pallotta");
var TorDiQuinto9 = L.marker([41.938243387557705, 12.469805811997192]).bindPopup("tag pontemilvio");
var TorDiQuinto10 = L.marker([41.938783666970416, 12.468482554325137]).bindPopup("Coco Loco");
var TorDiQuinto11 = L.marker([41.937673212606775, 12.466585081308867]).bindPopup("Panificio Nazzareno");
var TorDiQuinto12 = L.marker([41.93748139298557, 12.46668245874007]).bindPopup("Roma Beer Company");
var TorDiQuinto13 = L.marker([41.93671544535325, 12.481508718054474]).bindPopup("QVINTO");
var TorDiQuinto14 = L.marker([41.93773262982186, 12.466498165712729]).bindPopup("Met");
var TorDiQuinto15 = L.marker([41.947701891827464, 12.466643350598922]).bindPopup("Enoteca Lucantoni");
var TorDiQuinto16 = L.marker([41.94739952401168, 12.466565854325554]).bindPopup("Vigna Stelluti Pasticceria Bar");
var TorDiQuinto17 = L.marker([41.946956626525875, 12.474063054325558]).bindPopup("744 Vineria");
var TorDiQuinto18 = L.marker([41.94522307030579, 12.472911381309283]).bindPopup("MINE - Enoteca/Aperibar/Bistrobottega");
var TorDiQuinto19 = L.marker([41.946660108062126, 12.473505054325566]).bindPopup("Caffè Fleming Roma");
var TorDiQuinto20 = L.marker([41.95089468990809, 12.461265902210538]).bindPopup("Profumo Spazio Sensoriale");
var TorDiQuinto21 = L.marker([41.94739444591103, 12.466469615702266]).bindPopup("Ricci Salumiere in Roma");
var TorDiQuinto22 = L.marker([41.95051021896376, 12.484111925489758]).bindPopup("I Ruderi Steakhouse");
var TorDiQuinto23 = L.marker([41.93796112221678, 12.466161556177447]).bindPopup("Enoteca 'La Cantina XXIX' Ponte Milvio");

var TorDiQuinto = L.layerGroup([TorDiQuinto1,TorDiQuinto2,TorDiQuinto3,TorDiQuinto4,TorDiQuinto5,TorDiQuinto6,TorDiQuinto7,TorDiQuinto8,
  TorDiQuinto9,TorDiQuinto10,TorDiQuinto11,TorDiQuinto12,TorDiQuinto13,TorDiQuinto14,TorDiQuinto15,TorDiQuinto16,TorDiQuinto17,
  TorDiQuinto18,TorDiQuinto19,TorDiQuinto20,TorDiQuinto21,TorDiQuinto22,TorDiQuinto23]);


//DellaVittoria
var DellaVittoria1 = L.marker([41.917067173590524, 12.460500683160062]).bindPopup("Quintessenza");
var DellaVittoria2 = L.marker([41.92349400714903, 12.45852122548832]).bindPopup("Prato Chiosco");
var DellaVittoria3 = L.marker([41.92054366576164, 12.460679827340389]).bindPopup("Etilico");
var DellaVittoria4 = L.marker([41.93835444482963, 12.427425854325168]).bindPopup("Messervino - Messer vino Enoteca Roma");
var DellaVittoria5 = L.marker([41.9732565412133, 12.429689096654913]).bindPopup("Non Solo Caffè Cassia");
var DellaVittoria6 = L.marker([41.97295327119198, 12.444293467818811]).bindPopup("Caffè due zero due");
var DellaVittoria7 = L.marker([41.91890272685432, 12.461138934706259]).bindPopup("Madeleine Rome");
var DellaVittoria8 = L.marker([41.91652847480353, 12.461249827340222]).bindPopup("Eat me box");
var DellaVittoria9 = L.marker([41.942051719095915, 12.434816167817225]).bindPopup("Cocomerino Bistrot");
var DellaVittoria10 = L.marker([41.97715066995226, 12.493012181310908]).bindPopup("Saxò Ristorante");
var DellaVittoria11 = L.marker([41.93140702298127, 12.458469725488767]).bindPopup("Hotel Butterfly");
var DellaVittoria12 = L.marker([41.92103596489277, 12.46020328320181]).bindPopup("Down Under");
var DellaVittoria13 = L.marker([41.91967778739598, 12.461955570064516]).bindPopup("Irma");
var DellaVittoria = L.layerGroup([DellaVittoria1, DellaVittoria2, DellaVittoria3, DellaVittoria4, DellaVittoria5, 
  DellaVittoria6, DellaVittoria7, DellaVittoria8, DellaVittoria9, DellaVittoria10, DellaVittoria11, DellaVittoria12, DellaVittoria13]);

var markers = L.markerClusterGroup();
markers.addLayer(TorDiQuinto);
markers.addLayer(DellaVittoria);
map.addLayer(markers);

markers.on('click', function(e) {
  map.panTo(e.latlng);
});