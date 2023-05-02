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
// esempio di query
$query = "INSERT INTO Registrazioni(Nome, Email, Password) VALUES ('".$_POST['nome']."', '".$_POST['email']."', '".$_POST['password']."')";

$result = pg_query($conn, $query);
header("Location:./LoginCorretto.html");
pg_close($conn);
?>