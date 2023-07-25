<?php
$list = json_decode($_POST['list']);
$email = $_POST['email'];
$list2 = json_decode($_POST['list2']);
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
//Azzeriamo la memoria dei precedenti preferiti
$query1="DELETE FROM Preferiti WHERE email = '$email';";
pg_query($conn, $query1);
//Aggiungiamo i preferiti dell'ultima sessione dell'utente
for ($i = 0; $i < count($list); $i++) {
  $marker= $list[$i];
  $place= $list2[$i];
  $query = "INSERT INTO Preferiti (email, marker_id,places) VALUES ('$email', '$marker','$place')";
  pg_query($conn, $query);
}

pg_close($conn);
?>