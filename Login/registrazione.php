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
$password = $_POST['password'];
// Verifica se la password soddisfa i requisiti
if (strlen($password) < 8 || !preg_match('/[A-Z]/', $password) || !preg_match('/[^a-zA-Z0-9]/', $password)) {
  echo "<script>";
  echo "localStorage.setItem('Registered', 'badpass');";
  echo "window.location.href = './Login.html';";
  echo "</script>";
  die;
}
else {
    // La password soddisfa tutti i requisiti, può essere messa in hash code
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  }
$query = "INSERT INTO Registrazioni(Nome, Email, Password) VALUES ('".$_POST['nome']."', '".$_POST['email']."', '$hashed_password')";
$result= pg_query($conn, $query);

//Controllo di errori nella query, violazione della primary key o qualsiasi altro errore 
if($result){
  pg_close($conn);
  echo "<script>";
  echo "localStorage.setItem('Registered', true);";
  echo "window.location.href = '/index.html';";
  echo "</script>";
  die;
}
else{
  // C'è stato un errore quindi verifica se si tratta di una violazione della primary key 
  $error=pg_last_error($conn);
  if(strpos(pg_last_error($conn),"registrazioni_pkey")!==false){
      pg_close($conn);
      echo "<script>";
      echo "localStorage.setItem('Registered','primary');";
      echo "window.location.href = './Login.html';";
      echo "</script>";
      die;
  }
  //Errore generico di registrazione
  echo "<script>";
  echo "localStorage.setItem('Registered', false);";
  echo "window.location.href = './Login.html';";
  echo "</script>";
  die;
}

?>