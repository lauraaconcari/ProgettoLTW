let signupBtn= document.getElementById("signupBtn")
let signinBtn= document.getElementById("signinBtn")
let nameField= document.getElementById("nameField")
let title= document.getElementById("title")

signinBtn.onclick = function(){
    if(!(signinBtn.classList.contains("disable"))){
        console.log("Effettui l'accesso");
    }
    else{
        nameField.style.maxHeight= "0";
        title.innerHTML= "Accedi";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }
}
signupBtn.onclick = function(){
    if(!(signupBtn.classList.contains("disable"))){
        console.log("Effettui la registrazione");
    }
    else{
        nameField.style.maxHeight= "60px";
        title.innerHTML= "Registrati";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }

}
