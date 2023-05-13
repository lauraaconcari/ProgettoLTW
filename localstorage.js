var firstbutton=document.querySelector(".navbar-nav.ml-auto .nav-item:first-child a.nav-link");
var secondbutton=document.querySelector(".navbar-nav:not(.ml-auto) .nav-item:first-child a.nav-link");
const Stringlist= localStorage.getItem('preferiti');
const list = JSON.parse(Stringlist);
console.log(list);
//Funzione per controllare il login
function checkLoggedIn() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== null) {
      // l'item "loggedIn" esiste nel localStorage
      document.querySelector(".navbar-nav:not(.ml-auto) .nav-link i.fa-user").style.display = "inline-block";
      //cambio l'entita del pulsante accedi in esci:
      var exit= document.querySelector(".navbar-nav.ml-auto .nav-link i.fa-user");
      firstbutton.setAttribute("href", "#");
      secondbutton.setAttribute("href",'/Favourite/favourite.html');
      exit.innerHTML = "<i class='fas fa-user'></i><img src='/exit.png'>";
      exit.style.display="inline-block";
      //Funzione per effettura il logout
        firstbutton.addEventListener("click", function() {
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
              location.reload();
            } else {
              console.error('Si è verificato un errore durante l\'invio della richiesta:', response.statusText);
            }
          })
          .catch(error => {
            console.error('Si è verificato un errore durante l\'invio della richiesta:', error);
          });
        })
    } else {
      // l'item "loggedIn" non esiste nel localStorage
      document.querySelector(".navbar-nav:not(.ml-auto) .nav-link i.fa-user").style.display = "none";
      document.querySelector(".navbar-nav.ml-auto .nav-link i.fa-user").style.display="inline-block";
    }
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    checkLoggedIn();
  });
