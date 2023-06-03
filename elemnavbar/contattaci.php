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
$place =  strtolower($_POST["place"]);
$zone =  strtolower($_POST["zone"]);
$email = $_POST["email"];
//Query per inserire il posto nei consigliati
$query = "INSERT INTO Consigliati(nome, zona, email) VALUES ('$place', '$zone', '$email')";
$result= pg_query($conn, $query);
//Controllo di eventuali errori (o non) segnalati poi all'utente attraverso il localstorage analizzato nel javascript della pagina
if($result){
    pg_close($conn);
    echo "<script>";
    echo "localStorage.setItem('Sent',true);";
    echo "window.location.href = './contattaci.html';";
    echo "</script>";
    die;
}
else{
    // Verifica se ci è stata una violazione della primary key
    $error=pg_last_error($conn);
    if(strpos(pg_last_error($conn),"consigliati_pkey")!==false){
        pg_close($conn);
        echo "<script>";
        echo "localStorage.setItem('Sent','primary');";
        echo "window.location.href = './contattaci.html';";
        echo "</script>";
        die;
    }
    //Errore generico non lo specifico
    pg_close($conn);
    echo "<script>";
    echo "localStorage.setItem('Sent',false);";
    echo "window.location.href = './contattaci.html';";
    echo "</script>";
    die;
}
?>