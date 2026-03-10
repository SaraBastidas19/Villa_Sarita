import { Router } from 'express';
import { createReserva } from '../controllers/reservaController.js';

const router = Router();

router.post('/', createReserva);

export default router;
