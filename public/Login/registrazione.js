const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'Registrazioni',
  password: 'lallacommit',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
  console.error('Errore imprevisto sulla connessione al database', err);
});

app.post('/registrazione', async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const password = req.body.password;

  // Verifica se la password soddisfa i requisiti
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
    res.send("<script>localStorage.setItem('Registered', 'badpass'); window.location.href = './Login.html';</script>");
    return;
  }

  // La password soddisfa tutti i requisiti, può essere messa in hash code
  const hashed_password = await bcrypt.hash(password, 10);

  const query = `INSERT INTO Registrazioni(Nome, Email, Password) VALUES ($1, $2, $3) RETURNING *`;
  const values = [nome, email, hashed_password];

  pool.query(query, values, (err, result) => {
    if (err) {
      if (err.constraint === 'registrazioni_pkey') {
        res.send("<script>localStorage.setItem('Registered', 'primary'); window.location.href = './Login.html';</script>");
      } else {
        res.send("<script>localStorage.setItem('Registered', false); window.location.href = './Login.html';</script>");
      }
      console.error('Errore durante l\'esecuzione della query', err);
      return;
    }

    res.send("<script>localStorage.setItem('Registered', true); window.location.href = '/index.html';</script>");
  });
});

app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});