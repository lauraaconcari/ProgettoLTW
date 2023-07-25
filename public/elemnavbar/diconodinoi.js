var pulsante=document.getElementById('btnrev');
pulsante.addEventListener('click',change);
//Quando si clicca sul pulsante per lasciare una recensione prima cosa interrompe l'intervallo per far scorrere la carte e poi le fa scomparire per far comparire il form
function change(){
    clearInterval(interval);
    var griglie=document.getElementsByClassName('grid-container');
    griglie[0].style.display='none';

    var forms=document.getElementsByClassName('form');
    forms[0].style.display='flex';
  
}
//Quando viene caricata la pagina vengono settate per la prima volta le 3 carte e poi fa un controllo veloce se è stato inviato un form con le informazioni
document.addEventListener("DOMContentLoaded", function(event) {
    changeReviews();
    var Sent=localStorage.getItem('Sent');
    switch(Sent){
        case 'true':
            swal({
                title: 'Grazie per la recensione',
                text: 'Una volta valutato il suo contenuto, la pubblicheremo al più presto',
                icon: 'success',
                ButtonText: 'OK'
              });
            localStorage.removeItem('Sent');
            break;
        case 'false':
            swal({
                title: 'Errore',
                text: 'Qualcosa è andato storto',
                icon: 'Error',
                ButtonText: 'OK'
              });
            localStorage.removeItem('Sent');
            break;
        case 'primary':
            swal({
                title: 'Attenzione',
                text: 'Hai già inviato una recensione sul nostro sito',
                icon: 'warning',
                ButtonText: 'OK'
              });
            localStorage.removeItem('Sent');
            break;
    }
  });
  //Dati con tutte le recensioni del sito verificate
  var reviews = [
    {
      title: "@Francesca",
      text: "AperitivoRomano è stato un vero salvatore per le mie serate fuori! La funzione di ricerca è stata utilissima per trovare il posto giusto, e la possibilità di salvare i miei posti preferiti è stata un vero toccasana per il mio spirito di esploratrice culinaria."
    },
    {
      title: "@Luigi",
      text: "AperitivoRomano mi ha permesso di scoprire posti fantastici per fare l'aperitivo a Roma. La funzione di mappa è stata un vero salvavita quando mi trovavo in zone che non conoscevo bene. Consigliatissimo!"
    },
    {
      title: "@Alice",
      text: "AperitivoRomano è stato il mio miglior alleato per le serate in compagnia! La funzione di ricerca mi ha permesso di trovare facilmente posti fantastici per fare l'aperitivo a Roma, e la possibilità di salvare i miei posti preferiti mi consente di non dimenticare mai i posti in cui mi sono divertita di più."
    },
    {
      title: "@Andrea",
      text: "AperitivoRomano è stato un vero colpo di fortuna per me: la funzione di ricerca mi ha aiutato a trovare il posto giusto dove fare l'aperitivo a Roma, e la funzione di salvataggio dei posti preferiti mi consente di tenerli sempre a portata di mano. Grazie AperitivoRomano!"
    },
    {
      title: "@Elisabetta",
      text: "AperitivoRomano mi ha permesso di scoprire posti fantastici per fare l'aperitivo a Roma. La funzione di ricerca è stata molto precisa e mi ha permesso di trovare posti che non conoscevo. E la funzione di mappa è stata molto comoda per trovare il posto giusto anche quando non conoscevo bene la zona."
    },
    {
      title: "@DavideTony",
      text: "AperitivoRomano è stato un vero toccasana per le mie serate fuori con gli amici. La funzione di ricerca mi ha permesso di trovare facilmente il posto giusto dove fare l'aperitivo a Roma, e la funzione di salvataggio dei posti preferiti mi consente di tenere traccia dei posti che mi sono piaciuti di più."
    },
    {
      title: "@Sofia",
      text: "AperitivoRomano è stato un vero tesoro per me: la funzione di ricerca mi ha permesso di trovare posti fantastici per fare l'aperitivo a Roma, e la funzione di mappa è stata molto comoda per trovare il posto giusto anche quando non conoscevo bene la zona. Consigliatissimo!"
    },
    {
      title: "@Alessandro",
      text: "AperitivoRomano è stato un grande aiuto per me: la funzione di ricerca mi ha permesso di trovare facilmente il posto giusto dove fare l'aperitivo a Roma, e la funzione di salvataggio dei posti preferiti mi consente di tenere traccia dei posti che voglio provare. Grazie AperitivoRomano!"
    },
    {
      title: "@Martina",
      text: "AperitivoRomano è stata la mia salvezza per le serate in compagnia! La funzione di ricerca mi ha permesso di trovare facilmente posti fantastici per fare l'aperitivo a Roma, e la possibilità di salvare i miei posti preferiti mi consente di non dimenticare mai i posti in cui mi sono divertita di più."
    },
    {
      title: "@Riccardo",
      text: "AperitivoRomano è stato un vero e proprio game changer per le mie serate in compagnia! La funzione di ricerca mi ha permesso di trovare posti fantastici per fare l'aperitivo a Roma, e la funzione di mappa è stata molto comoda per trovare il posto giusto anche quando non conoscevo bene la zona. Consigliatissimo!"
    }
  ];

var n=reviews.length;
var index = 0;
var review1 = document.getElementById("review1");
var review2 = document.getElementById("review2");
var review3 = document.getElementById("review3");
//Funzione per cambiare la carte
function changeReviews() {
    console.log("cambio");
    // Cambia il contenuto delle tre carte
    var griglie=document.getElementsByClassName('grid-container');
    griglie[0].style.display='none';

    review1.querySelector(".card-title").textContent = reviews[index].title;
    review1.querySelector(".card-text").textContent = reviews[index].text;

    review2.querySelector(".card-title").textContent = reviews[(index + 1) % 3].title;
    review2.querySelector(".card-text").textContent = reviews[(index + 1) % 3].text;

    review3.querySelector(".card-title").textContent = reviews[(index + 2) % 3].title;
    review3.querySelector(".card-text").textContent = reviews[(index + 2) % 3].text;

    griglie[0].style.display='grid';
    
    // Incrementa l'indice
    index = (index + 1) % n;
}
// Esegue la funzione changeReviews ogni 20 secondi
interval = setInterval(changeReviews, 20000);

