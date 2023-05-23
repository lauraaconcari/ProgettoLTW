//Prendo nota della pagina iniziale
var thispage=1;
//Prendo i pulsanti successivo e precedente
var precedente= document.getElementById('precedente');
var successivo= document.getElementById('successivo');

const Stringlist= localStorage.getItem('preferiti');
const list = JSON.parse(Stringlist);
console.log(list);
var n=list.length;
if(n>0){
    //Ci sono dei preferiti quindi vanno aggiunti
    //Per prima cosa calcolo quante pagine ci saranno
    var MaxPage=Math.ceil(n/6);

    //Chiamo la funzione per settare la prima pagina e i pulsanti se num pagine>1
    setCards(thispage);
}
function setCards(page) {
    if(n>1){
        switch(page){
            case 1:
                precedente.style.display= 'none';
                successivo.style.display= 'block';
                break;
            case MaxPage:
                precedente.style.display= 'block';
                successivo.style.display= 'none';
                break;
            default:
                precedente.style.display= 'block';
                successivo.style.display= 'block';
                break;
        }
    }
    var x=0;
    var sezioni = document.querySelectorAll('.container section');
    for(i=6*(page-1);i<6*page;i++){
        var titoloCard = sezioni[x].querySelector('.card-title');
        titoloCard.textContent = 'Nuovo titolo della card';
        x++;
        console.log(i);
    }
    console.log("Questa è la pagina "+thispage);
  }
successivo.addEventListener("click", function(){
    thispage++;
    setCards(thispage);
});
precedente.addEventListener("click", function(){
    thispage--;
    setCards(thispage);
});