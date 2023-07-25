// routes.js
const express = require('express');
const session = require('express-session');
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded());

router.use(express.static('public'));

router.use(session({
  secret: 'il_tuo_segreto_per_le_sessioni', // Cambia con una stringa segreta
  resave: false,
  saveUninitialized: true
}));



router.post('/redirect', (req, res) => {
  // Qui inserisci la logica dell'handler per la richiesta POST
  console.log(req.body);

  // Imposta una variabile di sessione temporanea
  req.session.temporaryMessage = "Grazie per esserti registrato!"; // Cambia il messaggio come preferisci

  // Effettua la redirect a /Login/Login.html
  res.redirect('/Login/Login.html');
});

router.get('/redirect', (req, res) => {
  // Effettua la redirect a /index.html
  res.redirect('/index.html');
});

router.get('/get-temporary-message', (req, res) => {
  const temporaryMessage = req.session.temporaryMessage;
  delete req.session.temporaryMessage;
  res.json({ temporaryMessage });
});
module.exports = router;
