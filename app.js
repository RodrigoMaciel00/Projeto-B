const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12344321', // Substitua pela sua senha
    database: 'agendamento'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'schedule.html'));
});

app.post('/register', (req, res) => {
    const { name, email, password, pet_name, animal_type, breed, phone } = req.body;
    const query = 'INSERT INTO users (name, email, password, pet_name, animal_type, breed, phone) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [name, email, password, pet_name, animal_type, breed, phone], (err, result) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json({ success: true, name: result[0].name });
        } else {
            res.json({ success: false });
        }
    });
});

app.post('/schedule', (req, res) => {
    const { service, date, time, additional_info, emergency_contact, payment_method, pet_name } = req.body;
    const query = 'INSERT INTO appointments (service, date, time, additional_info, emergency_contact, payment_method, pet_name) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [service, date, time, additional_info, emergency_contact, payment_method, pet_name], (err, result) => {
        if (err) throw err;
        res.redirect(`/confirmation.html?date=${date}&time=${time}&pet=${pet_name}&payment=${payment_method}`);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
