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
    // La password è corretta, l'utente è autenticato
    //Scarica tutta la lista dei preferiti salvati se esiste
    $preferiti = "SELECT marker_id FROM Preferiti WHERE email = '$email'";
    $result = pg_query($conn, $preferiti);
    if ($result !== false) {
      $marker_ids = array();
      while ($row = pg_fetch_assoc($result)) {
        $marker_ids[] = $row['marker_id'];
      }
      //Prende il nome dell'utente
      $nome="SELECT nome FROM registrazioni WHERE email = '$email' ";
      $result = pg_query($conn, $nome);
    if ($result !== false){
        $row = pg_fetch_assoc($result);
        $nomeUtente = $row['nome'];
      }
      // Salva la lista di marker_id nel local storage
      $json_marker_ids = json_encode($marker_ids);
      // Chiudi la connessione al database
      pg_close($conn);  
      echo "<script>";
      echo "localStorage.setItem('nomeUtente','$nomeUtente');";
      echo "localStorage.setItem('loggedIn', true);";
      echo "localStorage.setItem('email','$email');";
      echo "localStorage.setItem('preferiti', '$json_marker_ids');";
      echo "window.location.href = '../index.html';";
      echo "</script>";
      die();
      
    } else {
      die();
    }
  } else {
    // La password è errata
    echo "Password errata!";
    die();
  }
} else {
  // L'email non è stata trovata
  echo "Email non trovata!";
  die();
}
?>