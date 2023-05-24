//Icona dei preferiti
var favIcon = L.icon({
  iconUrl:'../../preferiti.png' ,
  iconSize: [17, 17] 
});
// Imposta la dimensione dell'icona in base al livello di zoom corrente
map.on('zoomend', function() {
  var zoomLevel = map.getZoom();
  if (zoomLevel >= 17) {
    customIcon.options.iconSize = [25, 25];
    favIcon.options.iconSize = [25, 25];
  } else {
    customIcon.options.iconSize = [17, 17];
    favIcon.options.iconSize = [17, 17];
  }
  // Aggiorna le icone nel layer
  markers.eachLayer(function(layer) {
    if(layer.getIcon().options.iconUrl === customIcon.options.iconUrl){
      layer.setIcon(customIcon);
    }
    else{
      layer.setIcon(favIcon);
    }
  });
});
//Funzione per cercare il layer nel cluster
function getMarkerLayerById(markerId) {
  var markerLayer = markers.getLayers().find(function(layer) {
    return layer.options.id === markerId;
  });
  return markerLayer;
}

// Crea il controllo personalizzato
let favoritesControl = L.control({ position: 'topright' });

// Aggiungi il pulsante "Aggiungi ai preferiti" al controllo
favoritesControl.onAdd = function(map) {
  let button = L.DomUtil.create('button', 'add-to-favorites');
  button.innerHTML = 'Aggiungi ai preferiti';
  
  // Nascondi il pulsante "Aggiungi ai preferiti" quando viene creato il controllo
  button.style.display = 'none';
  
  L.DomEvent.addListener(button, 'click', function() {
    //Aggiunta ai preferiti

    //Id del posto
    const Stringlist= localStorage.getItem('preferiti');
    const list = JSON.parse(Stringlist);
    //Posto corrispondente all'id
    const Stringlist2= localStorage.getItem('preferitiposti');
    const list2 = JSON.parse(Stringlist2);
    list.push(selectedMarker.options.id);
    list2.push(markerToPlace[selectedMarker.options.id]);
    localStorage.setItem('preferiti', JSON.stringify(list));
    localStorage.setItem('preferitiposti', JSON.stringify(list2));
    console.log('Aggiunto ai preferiti: ' + selectedMarker.options.id);
    //Cambio titolo
    var titoloH3 = document.getElementById(selectedMarker.options.id+"t");
    var vecchioContenuto = titoloH3.textContent;
    var ultimoCarattere = vecchioContenuto.charAt(vecchioContenuto.length-1);
    var nuovoTitolo = vecchioContenuto.slice(0,-1) + "\u2605";
    titoloH3.textContent = nuovoTitolo;

    //Controllo se ha aggiornato

    const newStringlist= localStorage.getItem('preferitiposti');
    const newlist=JSON.parse(newStringlist);
    console.log('Lista dei preferiti:'+newlist);

    var num = parseInt(selectedMarker.options.id.replace(/\D/g, ''));
    const marker=markerlist[num-1];
    marker.setIcon(favIcon);
    // Nascondi il pulsante "Aggiungi ai preferiti"
    button.style.display = 'none';
    
    // Mostra un messaggio di conferma con SweetAlert
    swal({
      title: 'Aggiunto ai preferiti!',
      text: 'Ricordati che per rimuoverlo basta andare nella pagina dei preferiti o farci doppio click sulla mappa :)',
      icon: 'success',
      
    });
  });
  
  return button;
};

// Aggiungi il controllo personalizzato alla mappa
favoritesControl.addTo(map);
// Aggiungi un listener per il click sui marker
function handleMarkerClick(e) {
  let markerId = e.layer.options.id;
  console.log("Hai cliccato sul marker con ID " + markerId);
  map.setView(e.latlng, 17);
  // Memorizza il marker selezionato
  selectedMarker = e.layer;
  const Stringlist= localStorage.getItem('preferiti');
  const list = JSON.parse(Stringlist);
  var loggedIn = localStorage.getItem("loggedIn");
  let button = document.querySelector('.add-to-favorites');
  if(!(list.includes(markerId)) && loggedIn !== null ){
    // Mostra il pulsante "Aggiungi ai preferiti"
    button.style.display = 'block';
  }
  // Aggiungi un listener per il popupclose del marker
  selectedMarker.on('popupclose', function() {
    // Nascondi il pulsante "Aggiungi ai preferiti"
    button.style.display = 'none';
  });
}
//Aggiungi un listener per il click sulla lista
function handleListClick(e) {
  let markerId = e.options.id;
  console.log("Hai cliccato sul marker con ID " + markerId);
  map.setView(e.getLatLng(), 17);
  e.openPopup();
  // Memorizza il marker selezionato
  selectedMarker = e;
  const Stringlist= localStorage.getItem('preferiti');
  const list = JSON.parse(Stringlist);
  var loggedIn = localStorage.getItem("loggedIn");
  let button = document.querySelector('.add-to-favorites');
  if(!(list.includes(markerId)) && loggedIn !== null ){
    // Mostra il pulsante "Aggiungi ai preferiti"
    button.style.display = 'block';
  }
  // Aggiungi un listener per il popupclose del marker
  selectedMarker.on('popupclose', function() {
    // Nascondi il pulsante "Aggiungi ai preferiti"
    button.style.display = 'none';
  });
}

// Aggiungi un listener per l'evento "click" del marker
markers.on('click', handleMarkerClick);

markers.on('dblclick', function(e) {
  let markerId = e.layer.options.id;
  
  
  // Memorizza il marker selezionato
  selectedMarker = e.layer;
  let Stringlist= localStorage.getItem('preferiti');
  let list = JSON.parse(Stringlist);
  var loggedIn = localStorage.getItem("loggedIn");
  if(list.includes(markerId) && loggedIn !== null ){
    var nome=selectedMarker.getPopup().getContent()
    swal({
      title: "Sei sicuro di voler rimuovere "+nome+" dai preferiti?",
      icon: "warning",
      buttons: [
        {
          text: "Annulla",
          value: false,
          closeOnClickOutside: false,
          visible: true,
          className: "",
          closeModal: true,
        },
        {
          text: "Rimuovi",
          value: true,
          closeOnClickOutside: false,
          visible: true,
          className: "",
          closeModal: true,
        }
      ],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        // Azione da eseguire se l'utente conferma
        var num = parseInt(selectedMarker.options.id.replace(/\D/g, ''));
        const marker=markerlist[num-1];
        marker.setIcon(customIcon);
        let index= list.indexOf(markerId);
        list.splice(index,1);
        localStorage.setItem('preferiti', JSON.stringify(list));
        //Cambio titolo
        var titoloH3 = document.getElementById(selectedMarker.options.id+"t");
        var vecchioContenuto = titoloH3.textContent;
        var ultimoCarattere = vecchioContenuto.charAt(vecchioContenuto.length-1);
        var nuovoTitolo = vecchioContenuto.slice(0,-1) + "\u2606";
        titoloH3.textContent = nuovoTitolo;
        //Controllo di rimozione
        const newStringlist= localStorage.getItem('preferiti');
        const newlist=JSON.parse(newStringlist);
        console.log('Lista dei preferiti:'+newlist);
        selectedMarker.closePopup();

        swal(nome+" è stato rimosso dai preferiti!", {
          icon: "success",
          timer: 2000
        });
      } else {
        // Azione da eseguire se l'utente annulla
        swal(nome+" non è stato rimosso dai preferiti.");
      }
    });
  }
  
});

// definisci una variabile che indica il numero di luoghi da generare
var numLuoghi = data.length;

// seleziona l'elemento HTML in cui inserire i luoghi
var listaLuoghi = document.getElementById("lista-luoghi");

// genera i tag HTML per i luoghi
for (var i = 1; i <= numLuoghi; i++) {
  //Prendo l'id e il nome del posto
  var id=Municipio+i.toString();
  var name=markerToPlace[id];
  //Creo i luoghi
  var li = document.createElement("li");
  li.setAttribute("data-name", name);
  var img = document.createElement("img");
  img.setAttribute("src", "../Foto/"+id+".jpg" + "/100/100");
  img.setAttribute("alt", name);

  var div = document.createElement("div");

  var h3 = document.createElement("h3");
  //Controllo di login
  var loggedIn= localStorage.getItem("loggedIn");
  if (loggedIn !== null){
    //Controllo preferiti
    var Stringpreferiti=localStorage.getItem("preferiti");
    const preferiti = JSON.parse(Stringpreferiti);
    if(preferiti.includes(id)){
      const marker=markerlist[i-1];
      marker.setIcon(favIcon);
      h3.textContent = name+" \u2605";
    }
    else{
      h3.textContent = name+" \u2606";
    }
  }
  else{
    h3.textContent = name
  }
  h3.setAttribute("id", id+"t");
  var p = document.createElement("p");
  p.textContent = "Descrizione del Luogo "+id;

  div.appendChild(h3);
  div.appendChild(p);

  li.appendChild(img);
  li.appendChild(div);

  listaLuoghi.appendChild(li);
  // Crea una funzione di chiusura per salvare l'attributo "data-name" corrente
  (function(name) {
    // Aggiungi un event listener per gestire l'evento di click sull'elemento <li>
    li.addEventListener("click", function() {
      // Stampa il nome corrente
      console.log(name);
      let foundPlaceId= placeToMarker[name.toLowerCase()];
      var num = parseInt(foundPlaceId.replace(/\D/g, ''));
      const marker=markerlist[num-1];
      handleListClick(marker);
      // Seleziona l'elemento <p> all'interno dell'elemento <div>
      var desc = this.querySelector("div p");
      // Aggiungi la classe "show" all'elemento <p>
      desc.classList.toggle("show");
    });
  })(name);
}


//Filtro per la mappa
const filterInput = document.querySelector("#filter");
const listItems = document.querySelectorAll(".list-container li");

filterInput.addEventListener("keyup", filterItems);

function filterItems() {
  const filterValue = filterInput.value.toLowerCase();

  listItems.forEach(item => {
    const itemName = item.getAttribute("data-name").toLowerCase();
    if (itemName.includes(filterValue)) {
      item.style.display = "flex";
    } 
    else {
      item.style.display = "none";
    }
  });
}

//Vieni dai preferiti
var favID= localStorage.getItem('clickedID');
if(favID!==null){
  localStorage.removeItem('clickedID');
  //Chiamo la funzione per trovare il marker corrispondente e zoomare su di esso
  const markerfav=markerlist[favID-1];
  handleListClick(markerfav);
}