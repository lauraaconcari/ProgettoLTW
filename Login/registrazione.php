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
  echo "localStorage.setItem('Registered', false);";
  echo "window.location.href = './Login.html';";
  echo "</script>";
  die;
}
else {
    // La password soddisfa tutti i requisiti, può essere messa in hash code
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
  }
$query = "INSERT INTO Registrazioni(Nome, Email, Password) VALUES ('".$_POST['nome']."', '".$_POST['email']."', '$hashed_password')";
$query2 = "INSERT INTO Login(Email) VALUES ('".$_POST['email']."')";
$result= pg_query($conn, $query);
$result2= pg_query($conn, $query2);
pg_close($conn);
if($result){
  echo "<script>";
  echo "localStorage.setItem('Registered', true);";
  echo "window.location.href = './Login.html';";
  echo "</script>";
  die;
}
else{
  echo "<script>";
  echo "localStorage.setItem('Registered', false);";
  echo "window.location.href = './Login.html';";
  echo "</script>";
  die;
}

?>