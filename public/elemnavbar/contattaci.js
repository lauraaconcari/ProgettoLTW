//Acquisisco i contenuti della pagina per modificarli a piacimento
pulsante=document.getElementById('findOutMore');
form=document.getElementById('form');
backbutton=document.getElementById('backbutton');
content=document.getElementById('content');

/*Aggiungo un listener al pulsante: controlla che sei loggato e manda un messaggio di errore in caso contrario, se invece si è loggati
nasconde la card con le informazioni e mostra il form da compilare e prende la mail dal localstorage e la setta nel campo nascosto del form*/
pulsante.addEventListener('click',function(){
    let loggedIn= localStorage.getItem('loggedIn');
    if(loggedIn===null){
        swal({
            title: 'Errore',
            text: 'Per poterci contattare devi aver effettuato il Login',
            icon: 'error',
            ButtonText: 'OK'
        });
    }
    else{         
        form.style.display="block";
        content.style.display='none';
        backbutton.style.display='flex';
        email=localStorage.getItem('email');
        const emailInput=document.getElementById('email');
        emailInput.value=email;
    }
});
//Pulsante per tornare indietro
backbutton.addEventListener('click',function(){
    backbutton.style.display='none';
    form.style.display="none";
    content.style.display='block';
});
//Controlla che non vengano inviate informazioni vuote dal form con eventuale messaggio d'errore per l'utente
form.addEventListener('submit', (event) => {
    const placeInput = document.querySelector('#place');
    const zoneInput = document.querySelector('#zone');
    if (placeInput.value.trim() === '' || zoneInput.value.trim() === '') {
      event.preventDefault();
      swal({
        title: 'Errore',
        text: 'Compila i campi richiesti',
        icon: 'error',
        ButtonText: 'OK'
      });
    }
  });

  // Quando ritorna sulla pagina fa un controllo se è andato tutto a buon fine attraverso i localstorage settati da contattaci.php
  var Sent = localStorage.getItem('Sent');
  switch(Sent){
    case 'true':
        swal({
            title: 'Grazie per il tuo feedback!',
            text: 'Il tuo suggerimento verrà preso in considerazione, riceverai una risposta via mail',
            icon: 'success',
            ButtonText: 'OK'
          });
        localStorage.removeItem('Sent');
        break;
    case 'false':
        swal({
            title: 'Errore',
            text: 'La richiesta non è andata a buon fine',
            icon: 'error',
            ButtonText: 'OK'
          });
        localStorage.removeItem('Sent');
        break;
    case 'primary':
        swal({
            title: 'Errore',
            text: 'Hai già consigliato questo luogo!',
            icon: 'error',
            ButtonText: 'OK'
          });
        localStorage.removeItem('Sent');
        break;
    default:
        console.log("L'utente non ha ancora inviato nulla");
        break;
  }
