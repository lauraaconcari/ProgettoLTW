<?php
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
$place = $_POST["place"];
$zone = $_POST["zone"];
$email = $_POST["email"];
$query = "INSERT INTO Consigliati(nome, zona, email) VALUES ('$place', '$zone', '$email')";
$result= pg_query($conn, $query);
pg_close($conn);
if($result){
    echo "<script>";
    echo "localStorage.setItem('Sent',true);";
    echo "window.location.href = './contattaci.html';";
    echo "</script>";
    die;
}
else{
    echo "<script>";
    echo "localStorage.setItem('Sent',false);";
    echo "window.location.href = './contattaci.html';";
    echo "</script>";
    die;
}
?>