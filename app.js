const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12344321',
  database: 'agendamento'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

// Rota para página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para cadastro de animais
app.post('/cadastro', (req, res) => {
  const { nome, idade, peso, tipo, tutor, telefone } = req.body;

  const sql = 'INSERT INTO Animais (Nome, Idade, Peso, Tipo, Tutor, Telefone) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nome, idade, peso, tipo, tutor, telefone], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados:', err);
      res.status(500).json({ message: 'Erro ao cadastrar animal' });
    } else {
      res.status(200).json({ message: 'Animal cadastrado com sucesso!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
