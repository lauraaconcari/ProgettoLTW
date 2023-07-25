//Variabili che servono per cambiare la pagina da registrati ad accedi e viceversa
let signupBtn= document.getElementById("signupBtn")
let signinBtn= document.getElementById("signinBtn")
let nameField= document.getElementById("nameField")
let title= document.getElementById("title")
//Variabile che mi serve per ricordare in quale pagina ci si tovasse prima di effettuare il login
const pagina_di_riferimento = document.referrer.replace(/^.*?\/\/[^\/]+(\/.*)$/, "$1");
if(pagina_di_riferimento){
  console.log(pagina_di_riferimento);
  var page=document.getElementById('page');
  if(pagina_di_riferimento!="/Login/registrazione.php"&&pagina_di_riferimento!="/Login/Login.html") page.value=pagina_di_riferimento;
  else page.value="/index.html";
  console.log(page.value);
}

//funzioni per cambiare da registrazione ad accesso e viceversa
signinBtn.onclick = function(){
    if(!(signinBtn.classList.contains("disable"))){
        console.log("Effettui l'accesso");
        signinBtn.setAttribute("type", "submit");
        document.getElementById("login-form").setAttribute("action", "accesso.php");
    }
    else{
        nameField.style.maxHeight= "0";
        title.innerHTML= "Accedi";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
        signupBtn.setAttribute("type", "button");
    }
}
signupBtn.onclick = function(){
    if(!(signupBtn.classList.contains("disable"))){
        console.log("Effettui la registrazione");
        signupBtn.setAttribute("type", "submit");
        document.getElementById("login-form").setAttribute("action", "/redirect");
    }
    else{
        nameField.style.maxHeight= "60px";
        title.innerHTML= "Registrati";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
        signinBtn.setAttribute("type", "button");
    }
}
//Al caricamento della pagina controlla se vi è stata una registrazione scorretta o un login scorretto
document.addEventListener('DOMContentLoaded', function () {
  // Effettua una richiesta al server per ottenere il temporary message
  fetch('/get-temporary-message')
    .then(response => response.json())
    .then(data => {
      const temporaryMessage = data.temporaryMessage;
      if (temporaryMessage) {
        // Usa il temporary message come preferisci, ad esempio mostrandolo all'utente
        console.log(temporaryMessage);
      }
    })
    .catch(error => {
      console.error('Errore nella richiesta del temporary message:', error);
    });
});
//Funzione chiamata se esiste una registrazione non andata a buon fine, mostra una serie di popup e ricarica la pagina in cui si trova l'utente
function checkRegistered(){
  var Registered= localStorage.getItem("Registered");
  console.log(Registered);
    switch(Registered){
      case 'true':
        swal({
          title: 'Benvenuto!',
          text: 'Clicca sul tasto accedi per accedere al tuo profilo',
          icon: 'success',
          ButtonText: 'OK',
        }).then(() => {
          removeR();
        });
        break;
      case 'false':
        swal({
          title: 'Errore',
          text: 'La registrazione non è andata a buon fine',
          icon: 'error',
          ButtonText: 'OK',
        }).then(() => {
          removeR();
        });
        break;
      case 'primary':
        swal({
          title: 'Errore',
          text: 'Esiste già un account registrato con la mail che hai inserito',
          icon: 'error',
          ButtonText: 'OK',
        }).then(() => {
          removeR();
        });
        break;
      case 'badpass':
        swal({
          title: 'Errore',
          text: 'La password deve essere lunga almeno 8 caratteri e deve includere almeno un carattere maiuscolo e speciale',
          icon: 'error',
          ButtonText: 'OK',
        }).then(() => {
          removeR();
        });
        break;
      default:
        console.log("utente non registrato");
        break;
    }
}
//Funzione chiamata se esiste un login non andato a buon fine, mostra una serie di popup e ricarica la pagina in cui si trova l'utente
function checkBadLogIn(){
  var badLogin= localStorage.getItem('badLogin');
  switch(badLogin){
    case 'pass':
      swal({
        title: 'Errore',
        text: 'Password non corretta',
        icon: 'error',
        ButtonText: 'OK',
        }).then(() => {
          removeL();
        });
      break;
    case 'email':
      swal({
        title: 'Errore',
        text: 'Email non trovata',
        icon: 'error',
        ButtonText: 'OK',
        }).then(() => {
          removeL();
        });
      break;
  }
}

//Funzioni utilizzate dopo la chiusura dei sweetalert
function removeR(){
  {
    localStorage.removeItem("Registered");
    window.location.href="/Login/Login.html";
  }
}
function removeL(){
  {
    localStorage.removeItem("badLogin");
    window.location.href="/Login/Login.html";
  }
}
