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
// Ottieni l'email e la password dalle variabili POST
$email = pg_escape_string($_POST['email']);
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
    /*La password è corretta, l'utente è autenticato
    e scarica tutta la lista dei preferiti salvati se esiste*/

    //Query per prendere gli id dei posti
    $preferiti = "SELECT marker_id FROM Preferiti WHERE email = '$email'";
    $result = pg_query($conn, $preferiti);
    if ($result !== false) {
      $marker_ids = array();
      while ($row = pg_fetch_assoc($result)) {
        $marker_ids[] = $row['marker_id'];
      }
    //Query per prendere i nomi dei posti
    $places = "SELECT places FROM Preferiti WHERE email = '$email'";
    $result = pg_query($conn, $places);
    if ($result !== false) {
      $posti = array();
      while ($row = pg_fetch_assoc($result)) {
        $posti[] = $row['places'];
      }
    }
    //Query per prendere il nome dell'utente che sta loggando
      $nome="SELECT nome FROM registrazioni WHERE email = '$email' ";
      $result = pg_query($conn, $nome);
    if ($result !== false){
        $row = pg_fetch_assoc($result);
        $nomeUtente = $row['nome'];
      }
      // Salva la lista di marker_id e dei posti in variabili che poi verranno aggiunte nei loro rispettivi local storage
      $json_marker_ids = json_encode($marker_ids);
      $json_posti = json_encode($posti);
      // Chiudi la connessione al database
      pg_close($conn); 
      $page=$_POST['page'];
      echo "<script>";
      echo "localStorage.setItem('nomeUtente','$nomeUtente');";
      echo "localStorage.setItem('loggedIn', 'firstTime');";
      echo "localStorage.setItem('email','$email');";
      echo "localStorage.setItem('preferiti', '$json_marker_ids');";
      echo "localStorage.setItem('preferitiposti', '$json_posti');";
      echo "window.location.href = '$page';";
      echo "</script>";
      die();
      
    } else {
      die();
    }
  } //Password sbagliata, setta l'errore badpass
  else {
    echo "<script>";
    echo "localStorage.setItem('badLogin','pass');";
    echo "window.location.href = '/Login/Login.html';";
    echo "</script>";
    die();
  }
} 
else { //Se la mail non è stata trovata setta l'errore di mail
  echo "<script>";
  echo "localStorage.setItem('badLogin','email');";
  echo "window.location.href = '/Login/Login.html';";
  echo "</script>";
  die();
}
?>