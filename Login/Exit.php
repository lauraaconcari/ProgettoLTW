<?php
$list = json_decode($_POST['list']);
$email = $_POST['email'];
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
foreach ($list as $marker_id) {
    $query = "INSERT INTO Preferiti (email, marker_id) VALUES ('$email', '$marker_id')";
    pg_query($conn, $query);
  }
pg_close($conn);
?>