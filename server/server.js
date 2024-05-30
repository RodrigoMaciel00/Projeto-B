const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root', // seu usuário do MySQL
    password: '12344321', // sua senha do MySQL
    database: 'agendamento_sql'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Rota para registrar um usuário
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ id: result.insertId, name, email });
        }
    });
});

// Rota para agendar uma consulta
app.post('/schedule', (req, res) => {
    const { user_id, pet_name, appointment_date, service, payment_method, student } = req.body;
    const query = 'INSERT INTO appointments (user_id, pet_name, appointment_date, service, payment_method, student) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [user_id, pet_name, appointment_date, service, payment_method, student], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ id: result.insertId });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
