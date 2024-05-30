const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const appointmentRoutes = require('./routes/appointment');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/appointment', appointmentRoutes);

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
