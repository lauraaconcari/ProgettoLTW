<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // L'email inserita dall'utente non è valida
    echo 'Errore: l\'indirizzo email non è valido';
    exit;
  }

  // Invia un'email all'utente con le istruzioni per reimpostare la password
  $to = $email;
  $subject = 'Reimposta password';
  $message = 'Clicca sul seguente link per reimpostare la password: https://www.example.com/reimposta-password';
  $headers = 'From: webmaster@example.com' . "\r\n" .
             'Reply-To: webmaster@example.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    // L'email è stata inviata con successo
    echo 'Email inviata con successo';
  } else {
    // Si è verificato un errore durante l'invio dell'email
    echo 'Errore: si è verificato un errore durante l\'invio dell\'email';
  }
}
?>