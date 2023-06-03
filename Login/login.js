let signupBtn= document.getElementById("signupBtn")
let signinBtn= document.getElementById("signinBtn")
let nameField= document.getElementById("nameField")
let title= document.getElementById("title")

const pagina_di_riferimento = document.referrer.replace(/^.*?\/\/[^\/]+(\/.*)$/, "$1");
if(pagina_di_riferimento){
  console.log(pagina_di_riferimento);
  var page=document.getElementById('page');
  if(pagina_di_riferimento!="/Login/registrazione.php"&&pagina_di_riferimento!="/Login/Login.html") page.value=pagina_di_riferimento;
  else page.value="/index.html";
  console.log(page.value);
}

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
        document.getElementById("login-form").setAttribute("action", "registrazione.php");
    }
    else{
        nameField.style.maxHeight= "60px";
        title.innerHTML= "Registrati";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
        signinBtn.setAttribute("type", "button");
    }
}
$(document).ready(function() {
    $('#reset-password-link').click(function(event) {
      event.preventDefault(); // previene il comportamento predefinito del link
      swal({
        title: 'Recupero password',
        text: 'Inserisci il tuo indirizzo email e ti invieremo un link per reimpostare la password',
        content: {
          element: 'input',
          attributes: {
            type: 'email',
            placeholder: 'Indirizzo email',
          },
        },
        buttons: {
          cancel: 'Annulla',
          confirm: {
            text: 'Invia',
            closeModal: false,
          },
        },
      })
      .then(function(email) {
        if (email === '') {
          swal('Errore', 'Devi inserire un indirizzo email', 'error');
          return;
        }
        // Imposta il valore dell'email nel campo email del form
        $('#email').val(email);
      
        // Invia il form al server
        $('#form-recupero-password').submit();
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function(event) {
    var Registered=localStorage.getItem('Registered');
    var badLogin=localStorage.getItem('badLogin');
    if(Registered!==null){
      checkRegistered();
    }
    else if(badLogin!==null){
      checkBadLogIn();
    }
  });
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
