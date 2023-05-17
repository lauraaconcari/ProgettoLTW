var navLinks = document.querySelectorAll('.nav-link');
const Stringlist= localStorage.getItem('preferiti');
const list = JSON.parse(Stringlist);
console.log(list);
//prendo il nome della pagina
var pathname = window.location.pathname;  
var pageName = pathname.split('/').pop(); 
console.log('Il nome della pagina corrente è: ' + pageName);
//Funzione per controllare il login
function checkLoggedIn() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== null) {
      console.log(navLinks);
      // l'item "loggedIn" esiste nel localStorage quindi aggiungo il pulsante exit e preferiti
      navLinks[0].insertAdjacentHTML('beforeend', "<i class='fa-solid fa-arrow-right-from-bracket fa-2xl'></i>");
      if(pageName!="favourite.html"){
        navLinks[1].insertAdjacentHTML('beforeend', "<i class='fa-regular fa-heart fa-2xl'></i>");
        navLinks[1].setAttribute('href', '/Favourite/favourite.html');  
      }
      var exit = navLinks[0].querySelector('i.fa-arrow-right-from-bracket');
      //Funzione per effettura il logout
        exit.addEventListener("click", function() {
          const Stringlist = localStorage.getItem('preferiti');
          const list = JSON.parse(Stringlist);
          const email = localStorage.getItem('email');
          console.log(list);
          console.log(email);

          const params = new URLSearchParams();
          params.append('list', JSON.stringify(list));
          params.append('email', email);

          fetch('/Login/Exit.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
          })
          .then(response => {
            if (response.ok) {
              console.log('La richiesta è stata inviata con successo!');
              localStorage.removeItem('loggedIn');
              localStorage.removeItem('email');
              localStorage.removeItem('preferiti');
              //controllo se sono nella pagina dei preferiti
              if(pageName=="favourite.html"){
                window.location.href = "../index.html";
              }
              else{
                location.reload();
              }
            } else {
              console.error('Si è verificato un errore durante l\'invio della richiesta:', response.statusText);
            }
          })
          .catch(error => {
            console.error('Si è verificato un errore durante l\'invio della richiesta:', error);
          });
        })
    } else {
      // l'item "loggedIn" non esiste nel localStorage aggiungo il pulsante per loggare
      console.log(navLinks);
      navLinks[0].insertAdjacentHTML('beforeend', "<i class='fa-regular fa-user fa-2xl'></i>");
      navLinks[0].setAttribute('href', '/Login/Login.html');
    }
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    checkLoggedIn();
  });
