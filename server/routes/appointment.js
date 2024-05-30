import { Router } from 'express';
const router = Router();
import { query } from '../config/db';

router.post('/schedule', (req, res) => {
    const { name, email, phone, petName, service, date, time, student, paymentMethod } = req.body;

    query(
        'INSERT INTO appointments (name, email, phone, petName, service, date, time, student, paymentMethod) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name, email, phone, petName, service, date, time, student, paymentMethod],
        (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao salvar agendamento.');
            }
            res.status(200).send({ message: 'Agendamento salvo com sucesso!' });
        }
    );
});

export default router;
