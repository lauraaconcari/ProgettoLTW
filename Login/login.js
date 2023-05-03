let signupBtn= document.getElementById("signupBtn")
let signinBtn= document.getElementById("signinBtn")
let nameField= document.getElementById("nameField")
let title= document.getElementById("title")

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

