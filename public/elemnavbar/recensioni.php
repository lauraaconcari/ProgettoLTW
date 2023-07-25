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
$nome = strtolower($_POST["nome"]);
$cognome = strtolower($_POST["cognome"]);
$email =  ($_POST["email"]);
$numero =  ($_POST["numero"]);
$recensione =  ($_POST["recensione"]);
//Query per inserire la recensione
$query = "INSERT INTO recensioni(nome, cognome, email ,telefono ,recensione) VALUES ('$nome', '$cognome', '$email' ,'$numero' ,'$recensione')";
$result= pg_query($conn, $query);
if($result){
    pg_close($conn);
    echo "<script>";
    echo "localStorage.setItem('Sent',true);";
    echo "window.location.href = './diconodinoi.html';";
    echo "</script>";
    die;
}
else{
    // Verifica se ci è stata una violazione della primary key
    $error=pg_last_error($conn);
    if(strpos(pg_last_error($conn),"recensioni_pkey")!==false){
        pg_close($conn);
        echo "<script>";
        echo "localStorage.setItem('Sent','primary');";
        echo "window.location.href = './diconodinoi.html';";
        echo "</script>";
        die;
    }
    //Errore generico non specifico
    pg_close($conn);
    echo "<script>";
    echo "localStorage.setItem('Sent',false);";
    echo "window.location.href = './diconodinoi.html';";
    echo "</script>";
    die;
}

?>