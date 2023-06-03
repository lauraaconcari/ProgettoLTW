//Prendo nota della pagina iniziale
var thispage=1;
//Prendo i pulsanti successivo e precedente
var precedente= document.getElementById('precedente');
var successivo= document.getElementById('successivo');
init();
//La funzione init viene chiamata a inizio a pagina, quando si cambia pagina e quando viene eliminato un elemento e il numero di pagine diminuisce
function init(){
precedente.style.display= 'none';
successivo.style.display= 'none';
azzeraCards();
const Stringlist= localStorage.getItem('preferiti');
const list = JSON.parse(Stringlist);
console.log(list);
var n=list.length;
if(n>0){
    //Ci sono dei preferiti quindi vanno aggiunti
    //Per prima cosa calcolo quante pagine ci saranno
    var MaxPage=Math.ceil(n/6);

    //Chiamo la funzione per settare la prima pagina e i pulsanti
    setCards(thispage,MaxPage,n);
    }
}
//Funzione per settare le cards
function setCards(page,MaxPage,n) {
    if(MaxPage>1){
        switch(page){ //Lo switch controlla la pagina in cui ci troviamo perchè se è l'ultima mostra solo il tasto precedente, se è la prima solo il tasto successivo o di default mostra entrambi i pulsanti
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
    //Prendo il nome del posto e il link per accedere alla pagina in cui si trova
    const Stringlist = localStorage.getItem('preferitiposti');
    const posti = JSON.parse(Stringlist);
    const Stringlist2 = localStorage.getItem('preferiti');
    const id = JSON.parse(Stringlist2);
    //X indica le 6 sezioni delle cards mentre con i calcoliamo l'indice delle liste da cui prendiamo i dati
    var x=0;
    var sezioni = document.querySelectorAll('.container section');
    for(i=6*(page-1);i<6*page;i++){
        if(i<n){
            var titoloCard = sezioni[x].querySelector('.card-title');
            var textCard = sezioni[x].querySelector('.card-text');
            var linkTextCard = sezioni[x].querySelector('.card-link a:nth-child(1)');
            var linkTextCard2 = sezioni[x].querySelector('.card-link a:nth-child(2)');
            titoloCard.textContent = posti[i];
            linkTextCard.textContent = "Dove si trova";
            linkTextCard2.textContent="Elimina dai preferiti"
            textCard.textContent = "Locale nel Municipio "+id[i].replace(/\d+/g, '')+" di Roma";
            //Prendo il municipio in cui si trova il posto
            var thisid=id[i]
            linkTextCard.href=thisid;
            linkTextCard2.href=i;
            //Aggiungo un listener al link in modo tale da salvarmi l'id di tale municipio se l'utente dovesse cliccare sul link
            linkTextCard.addEventListener('click', redirect);
            linkTextCard2.addEventListener('click', getRidof);

        }
        x++;
        console.log(i);
    }
    console.log("Questa è la pagina "+thispage);
  }


//Funzione e listener per i pulsanti successivo e precedente
successivo.addEventListener("click", function(){
    azzeraCards();
    thispage++;
    init();
});
precedente.addEventListener("click", function(){
    azzeraCards();
    thispage--;
    init();
});
//Funzione che rende le carte 'vuote' prima di essere popolate
function azzeraCards(){
    var y=0;
    while (y<6) {
        let sezioni= document.querySelectorAll('.container section');
        sezioni[y].querySelector('.card-text').textContent = "Quando avrai aggiunto un locale tra i preferiti questo comparirà su tale pagina";
        sezioni[y].querySelector('.card-title').textContent="Nessun luogo tra i preferiti...";
        sezioni[y].querySelector('.card-link a:nth-child(1)').textContent="";
        sezioni[y].querySelector('.card-link a:nth-child(1)').href="";
        sezioni[y].querySelector('.card-link a:nth-child(2)').textContent="";
        sezioni[y].querySelector('.card-link a:nth-child(2)').href="";
        y++;
    }
}
//Funzione per portare l'utente alla pagina del luogo, non solo al municipio preciso ma aprirà anche tale luogo nella mappa
function redirect(event) {
    event.preventDefault(); // impedisce il comportamento predefinito del link
    const ID = this.href.replace(/^.*\//, ''); // ottiene l'id del link
    const posID= parseInt(ID.replace(/\D/g, ''));
    localStorage.setItem('clickedID',posID);
    var m = ID.replace(/\d+/g, '');
    window.location.href="/Municipi/Municipio "+m+"/Municipio "+m+".html";
  }
/*Funzione per eliminare il luogo dalle cards, prima ovviamente lo elimina dai localstorage e poi chiama init, facendo però un controllo 
se bisogna diminuire il numero della pagina corrente
*/
function getRidof(event) {
    event.preventDefault();
    const pos = this.href.replace(/^.*\//, ''); //Pos sarebbe la posizione esatta del luogo nei due localstorage
   
    const Stringlist = localStorage.getItem('preferitiposti');
    const posti = JSON.parse(Stringlist);
    posti.splice(pos,1);
    localStorage.setItem('preferitiposti',JSON.stringify(posti));

    const Stringlist2 = localStorage.getItem('preferiti');
    const id = JSON.parse(Stringlist2);
    const n=id.length-1;
    id.splice(pos,1);
    localStorage.setItem('preferiti',JSON.stringify(id));

    let MaxPage=Math.ceil(n/6);
    if (thispage>MaxPage)thispage--;//se è vera bisogna diminuire la pagina
    init();
  }