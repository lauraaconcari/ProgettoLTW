<?php
function custom_warning_handler($errno, $errstr) {
// Reindirizzamento dell'utente su una pagina web specifica
header("Location:./LoginScorretto.html");
exit();
}
  
// Impostazione della funzione personalizzata come gestore degli errori
set_error_handler("custom_warning_handler", E_WARNING);
// dati per la connessione al database
$host = "localhost";
$user = "postgres";
$password = "lallacommit";
$dbname = "Registrazioni";

// connessione al database
$conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

// verifica della connessione
if (!$conn) {
    die("Connessione al database fallita.");
}
// Ottieni l'email e la password dalle variabili POST
$email = $_POST['email'];
$password = $_POST['password'];

// Cerca l'email e la password nella tabella delle registrazioni
$query = "SELECT password FROM registrazioni WHERE email = '$email'";
$result = pg_query($conn, $query);

// Verifica se l'email è stata trovata
if (pg_num_rows($result) > 0) {
  $row = pg_fetch_assoc($result);
  $hashed_password = $row['password'];

  // Verifica la password utilizzando la funzione password_verify
  if (password_verify($password, $hashed_password)) {
    // La password è corretta, l'utente è autenticato
    echo "<script>";
    echo "localStorage.setItem('loggedIn', true);";
    echo "window.location.href = '../index.html';";
    echo "</script>";
  } else {
    // La password è errata
    echo "Password errata!";
  }
} else {
  // L'email non è stata trovata
  echo "Email non trovata!";
}

// Chiudi la connessione al database
pg_close($conn);
?>