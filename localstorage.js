var navLinks = document.querySelectorAll('.nav-link');
//prendo il nome della pagina
var pathname = window.location.pathname;  
var pageName = pathname.split('/').pop(); 
console.log('Il nome della pagina corrente è: ' + pageName);
//Funzione per controllare il login
function checkLoggedIn() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== null) {
      //setto il nome
      var dropdownButton = document.getElementById("dropdownMenuButton");
      const nome= localStorage.getItem('nomeUtente');
      dropdownButton.textContent = nome;
      var dropdownButton = document.getElementById("dropdownMenuButton");
      dropdownButton.style.display = "block";
      console.log(navLinks);
      var dropdownItems = document.querySelectorAll(".dropdown-item");
      if(pageName=="favourite.html"){
        var preferiti=dropdownItems[0];
        preferiti.style.display="none";
      }
     
      //Funzione per effettura il logout
      var exit = dropdownItems[1];
        exit.addEventListener("click", function() {
          const Stringlist = localStorage.getItem('preferiti');
          const list = JSON.parse(Stringlist);
          const email = localStorage.getItem('email');
          const Stringlist2 = localStorage.getItem('preferitiposti');
          const list2 = JSON.parse(Stringlist2);

          const params = new URLSearchParams();
          params.append('list', JSON.stringify(list));
          params.append('email', email);
          params.append('list2',JSON.stringify(list2));

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
              localStorage.removeItem('preferitiposti');
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
      navLinks[0].insertAdjacentHTML('beforeend', "<i class='fa-regular fa-user fa-2xl'></i>");
      navLinks[0].setAttribute('href', '/Login/Login.html');
      console.log(navLinks);
    }
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    checkLoggedIn();
  });
