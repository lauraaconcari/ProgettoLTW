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
$password = $_POST['password'];
// Verifica se la password soddisfa i requisiti
if (strlen($password) < 8) {
    trigger_error("La password deve essere lunga almeno 8 caratteri",E_USER_WARNING);
  } elseif (!preg_match('/[A-Z]/', $password)) {
    trigger_error("La password deve contenere almeno una lettera maiuscola",E_USER_WARNING);
  } elseif (!preg_match('/[^a-zA-Z0-9]/', $password)) {
    trigger_error("La password deve contenere almeno un carattere speciale",E_USER_WARNING);
  } else {
    // La password soddisfa tutti i requisiti, può essere messa in hash code
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  }
$query = "INSERT INTO Registrazioni(Nome, Email, Password) VALUES ('".$_POST['nome']."', '".$_POST['email']."', '$hashed_password')";
$query2 = "INSERT INTO Login(Email) VALUES ('".$_POST['email']."')";
pg_query($conn, $query);
pg_query($conn, $query2);
header("Location:./LoginCorretto.html");
pg_close($conn);
?>