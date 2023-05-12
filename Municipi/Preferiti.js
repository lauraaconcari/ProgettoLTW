// Crea il controllo personalizzato
let favoritesControl = L.control({ position: 'topright' });

// Aggiungi il pulsante "Aggiungi ai preferiti" al controllo
favoritesControl.onAdd = function(map) {
  let button = L.DomUtil.create('button', 'add-to-favorites');
  button.innerHTML = 'Aggiungi ai preferiti';
  
  // Nascondi il pulsante "Aggiungi ai preferiti" quando viene creato il controllo
  button.style.display = 'none';
  
  L.DomEvent.addListener(button, 'click', function() {
    // Esegui un'azione specifica quando l'utente clicca sul pulsante
    const Stringlist= localStorage.getItem('preferiti');
    const list = JSON.parse(Stringlist);
    list.push(selectedMarker.options.id);
    localStorage.setItem('preferiti', JSON.stringify(list));
    console.log('Aggiunto ai preferiti: ' + selectedMarker.options.id);
    //Controllo se ha aggiornato
    const newStringlist= localStorage.getItem('preferiti');
    const newlist=JSON.parse(newStringlist);
    console.log('Lista dei preferiti:'+newlist);
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
markers.on('click', function(e) {
  let markerId = e.layer.options.id;
  console.log("Hai cliccato sul marker con ID " + markerId);
  map.panTo(e.latlng);
  
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
});
markers.on('dblclick', function(e) {
  let markerId = e.layer.options.id;
  console.log("Hai cliccato sul marker con ID " + markerId);
  map.panTo(e.latlng);
  
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
        let index= list.indexOf(markerId);
        list.splice(index,1);
        localStorage.setItem('preferiti', JSON.stringify(list));
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