import { Router } from 'express';
const router = Router();
import { query } from '../config/db';

router.post('/register', (req, res) => {
    const { name, email, password, petName, animalType, phone } = req.body;

    query(
        'INSERT INTO users (name, email, password, petName, animalType, phone) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, password, petName, animalType, phone],
        (err, results) => {
            if (err) {
                return res.status(500).send('Erro ao salvar usuário.');
            }
            res.status(200).send({ message: 'Usuário salvo com sucesso!' });
        }
    );
});

export default router;
