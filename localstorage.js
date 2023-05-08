var firstbutton=document.querySelector(".navbar-nav.ml-auto .nav-item:first-child a.nav-link");
//Funzione per controllare il login
function checkLoggedIn() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== null) {
      // l'item "loggedIn" esiste nel localStorage
      document.querySelector(".navbar-nav:not(.ml-auto) .nav-link i.fa-user").style.display = "inline-block";
      //cambio l'entita del pulsante accedi in esci:
      var exit= document.querySelector(".navbar-nav.ml-auto .nav-link i.fa-user");
      firstbutton.setAttribute("href", "#");
      exit.innerHTML = "<i class='fas fa-user'></i><img src='/exit.png'>";
      exit.style.display="inline-block";
      //Funzione per effettura il logout
        firstbutton.addEventListener("click", function() {
            localStorage.removeItem("loggedIn");
            location.reload();
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