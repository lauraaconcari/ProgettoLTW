var baseview = [41.94701215030419, 12.45925154726697];
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
  var Municipio="XV";
  var data=[
    {
    "id": "XV1",
    "location":[41.939187230660266, 12.477494506415846],
    "popupContent":"Blume Lounge"
    },
    {
    "id": "XV2",
    "location":[41.9368718010783, 12.465313710144844],
    "popupContent":"Il Gianfornaio - Ponte Milvio"
    },
    {
    "id": "XV3",
    "location":[41.93792418835669, 12.470078411997205],
    "popupContent":"Lost"
    },
    {
    "id": "XV4",
    "location":[41.93833076406236, 12.468776683161245],
    "popupContent":"Kytos"
    },
    {
    "id": "XV5",
    "location":[41.938613209783306, 12.466262083161169],
    "popupContent":"Kohiba"
    },
    {
    "id": "XV6",
    "location":[41.937048928586165, 12.466766983161058],
    "popupContent":"L'Altro Chiosco"
    },
    {
    "id": "XV7",
    "location":[41.937895607553, 12.466274710144866],
    "popupContent":"Jarro il quattordicesimo"
    },
    {
    "id": "XV8",
    "location":[41.9378340268177, 12.465903673373951],
    "popupContent":"Bar Pallotta"
    },
    {
    "id": "XV9",
    "location":[41.938243387557705, 12.469805811997192],
    "popupContent":"tag pontemilvio"
    },
    {
    "id": "XV10",
    "location":[41.938783666970416, 12.468482554325137],
    "popupContent":"Coco Loco"
    },
    {
    "id": "XV11",
    "location":[41.937673212606775, 12.466585081308867],
    "popupContent":"Panificio Nazzareno"
    },
    {
    "id": "XV12",
    "location":[41.93748139298557, 12.46668245874007],
    "popupContent":"Roma Beer Company"
    },
    {
    "id": "XV13",
    "location":[41.93671544535325, 12.481508718054474],
    "popupContent":"QVINTO"
    },
    {
    "id": "XV14",
    "location":[41.93773262982186, 12.466498165712729],
    "popupContent":"Met"
    },
    {
    "id": "XV15",
    "location":[41.947701891827464, 12.466643350598922],
    "popupContent":"Enoteca Lucantoni"
    },
    {
    "id": "XV16",
    "location":[41.94739952401168, 12.466565854325554],
    "popupContent":"Vigna Stelluti Pasticceria Bar"
    },
    {
    "id": "XV17",
    "location":[41.946956626525875, 12.474063054325558],
    "popupContent":"744 Vineria"
    },
    {
    "id": "XV18",
    "location":[41.94522307030579, 12.472911381309283],
    "popupContent":"MINE - Enoteca/Aperibar/Bistrobottega"
    },
    {
    "id": "XV19",
    "location":[41.946660108062126, 12.473505054325566],
    "popupContent":"Caffè Fleming Roma"
    },
    {
    "id": "XV20",
    "location":[41.95089468990809, 12.461265902210538],
    "popupContent":"Profumo Spazio Sensoriale"
    },
    {
    "id": "XV21",
    "location":[41.94739444591103, 12.466469615702266],
    "popupContent":"Ricci Salumiere in Roma"
    },
    {
    "id": "XV22",
    "location":[41.95051021896376, 12.484111925489758],
    "popupContent":"I Ruderi Steakhouse"
    },
    {
    "id": "XV23",
    "location":[41.93796112221678, 12.466161556177447],
    "popupContent":"Enoteca 'La Cantina XXIX' Ponte Milvio"
    },
    {
    "id": "XV24",
    "location":[41.917067173590524, 12.460500683160062],
    "popupContent":"Quintessenza"
    },
    {
    "id": "XV25",
    "location":[41.92349400714903, 12.45852122548832],
    "popupContent":"Prato Chiosco"
    },
    {
    "id": "XV26",
    "location":[41.92054366576164, 12.460679827340389],
    "popupContent":"Etilico"
    },
    {
    "id": "XV27",
    "location":[41.93835444482963, 12.427425854325168],
    "popupContent":"Messervino - Messer vino Enoteca Roma"
    },
    {
    "id": "XV28",
    "location":[41.9732565412133, 12.429689096654913],
    "popupContent":"Non Solo Caffè Cassia"
    },
    {
    "id": "XV29",
    "location":[41.97295327119198, 12.444293467818811],
    "popupContent":"Caffè due zero due"
    },
    {
    "id": "XV30",
    "location":[41.91890272685432, 12.461138934706259],
    "popupContent":"Madeleine Rome"
    },
    {
    "id": "XV31",
    "location":[41.91652847480353, 12.461249827340222],
    "popupContent":"Eat me box"
    },
    {
    "id": "XV32",
    "location":[41.942051719095915, 12.434816167817225],
    "popupContent":"Cocomerino Bistrot"
    },
    {
    "id": "XV33",
    "location":[41.97715066995226, 12.493012181310908],
    "popupContent":"Saxò Ristorante"
    },
    {
    "id": "XV34",
    "location":[41.93140702298127, 12.458469725488767],
    "popupContent":"Hotel Butterfly"
    },
    {
    "id": "XV35",
    "location":[41.92103596489277, 12.46020328320181],
    "popupContent":"Down Under"
    },
    {
    "id": "XV36",
    "location":[41.91967778739598, 12.461955570064516],
    "popupContent":"Irma"
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