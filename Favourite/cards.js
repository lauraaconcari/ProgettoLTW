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
    if(MaxPage>1){
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
    //Prendo il nome del posto e il link per accedere alla pagina in cui si trova
    const Stringlist = localStorage.getItem('preferitiposti');
    const posti = JSON.parse(Stringlist);
    const Stringlist2 = localStorage.getItem('preferiti');
    const id = JSON.parse(Stringlist2);

    var x=0;
    var sezioni = document.querySelectorAll('.container section');
    for(i=6*(page-1);i<6*page;i++){
        if(i<n){
            var titoloCard = sezioni[x].querySelector('.card-title');
            var textCard = sezioni[x].querySelector('.card-text');
            var linkTextCard = sezioni[x].querySelector('.card-link a');
            titoloCard.textContent = posti[i];
            linkTextCard.textContent = "Accedi al luogo";
            textCard.textContent = "Prova ";
            //Prendo il municipio in cui si trova il posto
            var thisid=id[i]
            linkTextCard.href=thisid;
            //Aggiungo un listener al link in modo tale da salvarmi l'id di tale municipio se l'utente dovesse cliccare sul link
            linkTextCard.addEventListener('click', myFunction);
        }
        x++;
        console.log(i);
    }
    console.log("Questa è la pagina "+thispage);
  }



successivo.addEventListener("click", function(){
    azzeraCards();
    thispage++;
    setCards(thispage);
});
precedente.addEventListener("click", function(){
    azzeraCards();
    thispage--;
    setCards(thispage);
});
function azzeraCards(){
    var y=0;
    while (y<6) {
        let sezioni= document.querySelectorAll('.container section');
        sezioni[y].querySelector('.card-text').textContent = "Quando avrai aggiunto un locale tra i preferiti questo comparirà su tale pagina";
        sezioni[y].querySelector('.card-title').textContent="Nessun luogo tra i preferiti...";
        sezioni[y].querySelector('.card-link a').textContent="";
        sezioni[y].querySelector('.card-link a').href="";
        y++;
    }
}
function myFunction(event) {
    event.preventDefault(); // impedisce il comportamento predefinito del link
    const ID = this.href.replace(/^.*\//, ''); // ottiene l'id del link
    const posID= parseInt(ID.replace(/\D/g, ''));
    localStorage.setItem('clickedID',posID);
    var m = ID.replace(/\d+/g, '');
    window.location.href="/Municipi/Municipio "+m+"/Municipio "+m+".html";
  }