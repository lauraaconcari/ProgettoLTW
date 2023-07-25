//Icona dei preferiti da settare nel momento in cui l'user aggiunge un posto ai preferiti
var favIcon = L.icon({
  iconUrl:'../../preferiti.png' ,
  iconSize: [17, 17] 
});


// Imposta la dimensione dell'icona in base al livello di zoom corrente per facilitare la visione dei marker sulla mappa
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


//Funzione per cercare il layer nel cluster in base all'id del marker
function getMarkerLayerById(markerId) {
  var markerLayer = markers.getLayers().find(function(layer) {
    return layer.options.id === markerId;
  });
  return markerLayer;
}


//Creazione del controllo personalizzato per aggiungere un pulsante che appaia quando si clicca su un marker non presente tra i preferiti dell'utente
let favoritesControl = L.control({ position: 'topright' });

// Aggiungi il pulsante "Aggiungi ai preferiti" al controllo
favoritesControl.onAdd = function(map) {
  let button = L.DomUtil.create('button', 'add-to-favorites');
  button.innerHTML = 'Aggiungi ai preferiti';
  
  // Nascondi il pulsante "Aggiungi ai preferiti" quando viene creato il controllo
  button.style.display = 'none';
  
  L.DomEvent.addListener(button, 'click', function() {
    //Prendiamo la lista dei preferiti (segnati secondo id univoci) dell'utente
    const Stringlist= localStorage.getItem('preferiti');
    const list = JSON.parse(Stringlist);
    //Prendiamo la lista dei preferiti (segnati secondo nomi univoci) dell'utente
    const Stringlist2= localStorage.getItem('preferitiposti');
    const list2 = JSON.parse(Stringlist2);
    //Aggiungiamo tale posto nelle due liste appena prese e le inseriamo nuovamente nel local storage
    list.push(selectedMarker.options.id);
    list2.push(markerToPlace[selectedMarker.options.id]);
    localStorage.setItem('preferiti', JSON.stringify(list));
    localStorage.setItem('preferitiposti', JSON.stringify(list2));

    console.log('Aggiunto ai preferiti: ' + selectedMarker.options.id);

    //Cambiamo il titolo nella lista dei luoghi in modo tale che appaia una stella piena
    var titoloH3 = document.getElementById(selectedMarker.options.id+"t");
    var vecchioContenuto = titoloH3.textContent;
    var ultimoCarattere = vecchioContenuto.charAt(vecchioContenuto.length-1);
    var nuovoTitolo = vecchioContenuto.slice(0,-1) + "\u2605";
    titoloH3.textContent = nuovoTitolo;


    //Semplice debug di controllo
    const newStringlist= localStorage.getItem('preferitiposti');
    const newlist=JSON.parse(newStringlist);
    console.log('Lista dei preferiti:'+newlist);
    //

    //Prendiamo il numero presente nell'id per accedere alla markerlist presente negli script in modo tale da cambiare l'icona del marker 
    var num = parseInt(selectedMarker.options.id.replace(/\D/g, ''));
    const marker=markerlist[num-1];
    marker.setIcon(favIcon);

    //Finito tutto nascondiamo il pulsante "Aggiungi ai preferiti" e mostriamo un messaggio di conferma con sweetalert
    button.style.display = 'none';
    
    swal({
      title: 'Aggiunto ai preferiti!',
      text: 'Ricordati che per rimuoverlo basta andare nella pagina dei preferiti o farci doppio click sulla mappa :)',
      icon: 'success',
      
    });
  });
  
  return button;
};

// Aggiungiamo il controllo personalizzato alla mappa
favoritesControl.addTo(map);

// Aggiungiamo un listener per il click sui marker in modo che appaia il pulsante sulla mappa e che ci sia uno zoom su tale marker selezionato
function handleMarkerClick(e) {
  let markerId = e.layer.options.id;

  console.log("Hai cliccato sul marker con ID " + markerId);

  map.setView(e.latlng, 17);

  /* Memorizziamo il marker selezionato e facciamo principalmente due controlli: che l'utente sia loggato e che tale posto selezionato
  non sia già nei preferiti. Ovviamente i casi sono facilmente intuibili: se l'utente non è loggato o presenta già tale posto nei suoi preferiti
  il pulsante 'aggiungi ai preferiti' NON apparirà*/
  selectedMarker = e.layer;
  const Stringlist= localStorage.getItem('preferiti');
  const list = JSON.parse(Stringlist);
  var loggedIn = localStorage.getItem("loggedIn");
  let button = document.querySelector('.add-to-favorites');
  flexList(parseInt(markerId.replace(/\D/g, ''))-1); //Flexlist è una funzione per far apparire unicamente il posto selezionato nella lista a destra
  if(loggedIn!==null){
    if( !(list.includes(markerId))){
      // Mostriamo il pulsante "Aggiungi ai preferiti"
      button.style.display = 'block';
    }
  }
  // Aggiungiamo un listener per il popupclose del marker per far nascondere il pulsante 'aggiungi ai preferiti'
  selectedMarker.on('popupclose', function() {
    // Nascondi il pulsante "Aggiungi ai preferiti"
    button.style.display = 'none';
    unflexList(); //Unflexlist ha lo scopo inverso di flexlist
  });
}
/*Aggiungiamo un listener per il click sulla lista in modo tale che si abbiano gli stessi effetti di quando si clicca sul marker di tale posto
si può infatti notare come tale funzione sia simile alla funzione dichiarata per il listener sul marker stesso*/
function handleListClick(e) {
  let markerId = e.options.id;
  console.log("Hai cliccato sul marker con ID " + markerId);
  map.setView(e.getLatLng(), 17);
  e.openPopup();
  // Memorizziamo il marker selezionato
  selectedMarker = e;
  const Stringlist= localStorage.getItem('preferiti');
  const list = JSON.parse(Stringlist);
  var loggedIn = localStorage.getItem("loggedIn");
  let button = document.querySelector('.add-to-favorites');
  flexList(parseInt(markerId.replace(/\D/g, ''))-1);
  if(loggedIn!==null){
    if( !(list.includes(markerId))){
      // Mostriamo il pulsante "Aggiungi ai preferiti"
      button.style.display = 'block';
    }
  }
  // Aggiungiamo un listener per il popupclose del marker
  selectedMarker.on('popupclose', function() {
    // Nascondiamo il pulsante "Aggiungi ai preferiti"
    button.style.display = 'none';
    unflexList();
  });
}

// Aggiungiamo il listener e la funzione per il click sul marker
markers.on('click', handleMarkerClick);

/*Aggiungiamo il listener di doubleclick sul marker per rimuovere tra i preferiti un luogo andando essenzialmente ad invertire tutto ciò 
che si è fatto con l'aggiunta ai preferiti, semplicemente in questo caso non abbiamo un pulsante che appare ma una finestra di conferma 
per l'utente*/
markers.on('dblclick', function(e) {
  let markerId = e.layer.options.id;
  
  selectedMarker = e.layer;
  let Stringlist= localStorage.getItem('preferiti');
  let list = JSON.parse(Stringlist);
  let Stringlist2= localStorage.getItem('preferitiposti');
  let list2 = JSON.parse(Stringlist2);
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
        //Cambio icona
        var num = parseInt(selectedMarker.options.id.replace(/\D/g, ''));
        const marker=markerlist[num-1];
        marker.setIcon(customIcon);
        //Rimozione dalle liste
        let index= list.indexOf(markerId);
        list.splice(index,1);
        localStorage.setItem('preferiti', JSON.stringify(list));

        let index2=list2.indexOf(markerToPlace[markerId]);
        list2.splice(index2,1);
        localStorage.setItem('preferitiposti', JSON.stringify(list2));

        //Cambio titolo
        var titoloH3 = document.getElementById(selectedMarker.options.id+"t");
        var vecchioContenuto = titoloH3.textContent;
        var ultimoCarattere = vecchioContenuto.charAt(vecchioContenuto.length-1);
        var nuovoTitolo = vecchioContenuto.slice(0,-1) + "\u2606";
        titoloH3.textContent = nuovoTitolo;
        //Controllo di rimozione
        const newStringlist= localStorage.getItem('preferiti');
        const newlist=JSON.parse(newStringlist);
        console.log('Lista degli id preferiti:'+newlist);

        const newStringlist2= localStorage.getItem('preferitiposti');
        const newlist2=JSON.parse(newStringlist2);
        console.log('Lista dei nomi preferiti:'+newlist2);

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

// In questa sezione creiamo la lista dei luoghi in maniera dinamica, prendendo il numero esatto di posti nella pagina 
var numLuoghi = data.length;

// selezioniamo l'elemento HTML in cui inserire i luoghi
var listaLuoghi = document.getElementById("lista-luoghi");

// generiamo i tag HTML per i luoghi
for (var i = 1; i <= numLuoghi; i++) {
  //Prendiamo l'id e il nome del posto
  var id=Municipio+i.toString();
  var name=markerToPlace[id];
  //Creiamo i luoghi
  var li = document.createElement("li");
  li.setAttribute("data-name", name);
  var img = document.createElement("img");
  var pathname = window.location.pathname;  
  var pageName = pathname.split('/').pop(); 
  /*Questo controllo è aggiunto perchè vi sono aspetti del sito che richiedevano una grande ricerca, come per esempio le foto dei luoghi
  i numeri di telefono e i siti web. Di conseguenza ci siamo limitati al primo municipio per la raccolta di questi dati anche se il resto 
  delle funzionalità è comunque presente nei restanti municipi e può essere aggiunta modificando lo script personale di ogni municipio seguendo la
  base del municipio primo*/
  if(pageName!="Municipio%20I.html"){
    img.setAttribute("src", "https://picsum.photos/id/" + i + "/100/100");
  }
  else{
    img.setAttribute("src", "../Foto/"+id+".jpg" + "/150/150");
  }
  img.setAttribute("alt", name);

  var div = document.createElement("div");

  var h3 = document.createElement("h3");
  //Controllo di login per aggiungere la stella vuota, piena o nessuna dei due
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
  if(pageName!="Municipio%20I.html"){
    p.textContent = "Descrizione del Luogo "+id;
  }
  else{
    p.textContent = Descrizioni[id];
  }


  div.appendChild(h3);
  div.appendChild(p);
  if(Municipio=='I'){
    //Aggiunta di insta o sito personale (se esistono) e numero telefonico
    var instalink=dataInsta[i-1].link;
    var phone=dataInsta[i-1].phone;
    if(instalink!='')
    {
      var a = document.createElement("a");
      a.href = instalink;
      a.target = "_blank";
      a.id = "instagram-link"; // 
    
      // creiamo l'icona di Instagram e l'aggiungiamo
      var icon = document.createElement("i");
      icon.classList.add("fa-brands", "fa-instagram", "fa-lg");
      
      a.appendChild(icon);
    
      div.appendChild(a);
    }
    
    //Stesso ragionamento del link instagram ma per il numero di telefono dei posti
    if (phone != '') {
      var phoneLink = document.createElement("a");
      phoneLink.href = "tel:" + phone;
      phoneLink.id = "phone-link";
      
      var icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-phone","fa-lg");
      
      var phoneNumber = document.createTextNode(phone);
      
      phoneLink.appendChild(icon);
      phoneLink.appendChild(phoneNumber);
      div.appendChild(phoneLink);
    }


  }
  
  li.appendChild(img);
  li.appendChild(div);

  listaLuoghi.appendChild(li);

  (function(name) {
    // Aggiungiamo un event listener per gestire l'evento di click sull'elemento <li>
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

//Porzione di codice per gestire il reindirizzamento dalla pagina dei preferiti
const pagina_di_riferimento = document.referrer.replace(/^.*?\/\/[^\/]+(\/.*)$/, "$1");
if(pagina_di_riferimento){
  console.log(pagina_di_riferimento);
  if(pagina_di_riferimento=="/Favourite/favourite.html"){
    var favID= localStorage.getItem('clickedID');
    if(favID!==null){
    localStorage.removeItem('clickedID');
    //Chiamiamo la funzione per trovare il marker corrispondente e zoomare su di esso
    const markerfav=markerlist[favID-1];
    flexList(favID-1);
    handleListClick(markerfav);
    }
  }
}

//Funzioni per mostrare il posto selezionato e resettare la lista
function flexList(num){
  for(j=0;j<listItems.length;j++){
    listItems[j].style.display = "none";
  }
  listItems[num].style.display="flex";
}
function unflexList(){
  for(j=0;j<listItems.length;j++){
    listItems[j].style.display = "flex";
  }
}